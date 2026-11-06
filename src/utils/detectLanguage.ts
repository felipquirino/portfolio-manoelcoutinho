/**
 * Utilitário para detecção automática de idioma baseada no país de acesso do usuário.
 * Identifica a localização via API gratuita ipapi.co (JSON).
 */

export const LANGUAGE_STORAGE_KEY = 'portfolio_language_preference';

// Mapeamento dos países de língua espanhola (código ISO 3166-1 alpha-2)
const SPANISH_SPEAKING_COUNTRIES = new Set([
  'ES', // Espanha
  'MX', // México
  'AR', // Argentina
  'CO', // Colômbia
  'CL', // Chile
  'PE', // Peru
  'VE', // Venezuela
  'EC', // Equador
  'GT', // Guatemala
  'CU', // Cuba
  'BO', // Bolívia
  'DO', // República Dominicana
  'HN', // Honduras
  'PY', // Paraguai
  'SV', // El Salvador
  'NI', // Nicarágua
  'CR', // Costa Rica
  'PR', // Porto Rico
  'PA', // Panamá
  'UY', // Uruguai
  'GQ', // Guiné Equatorial
]);

export type DetectedLanguage = 'pt-BR' | 'es' | 'en';

/**
 * Detecta automaticamente o idioma baseado no país de acesso:
 * 1. Verifica se já existe um idioma salvo no localStorage. Se existir, retorna-o diretamente.
 * 2. Consulta a API gratuita ipapi.co (JSON) com tratamento de erros e timeout.
 * 3. Mapeia o país:
 *    - Brasil (BR) -> 'pt-BR'
 *    - Países de língua espanhola (ES, MX, AR, etc.) -> 'es'
 *    - Outros países -> 'en' (fallback padrão)
 * 4. Salva o idioma detectado no localStorage para evitar novas chamadas em navegações futuras.
 * 5. Se a API falhar ou ocorrer qualquer exceção, retorna 'en' com segurança.
 */
export async function detectUserLanguage(): Promise<DetectedLanguage | string> {
  // 4. Verificação inicial: se já houver um idioma salvo no localStorage, use-o diretamente
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLanguage =
        localStorage.getItem(LANGUAGE_STORAGE_KEY) ||
        localStorage.getItem('user_language') ||
        localStorage.getItem('language');

      if (savedLanguage) {
        return savedLanguage;
      }
    }
  } catch (storageError) {
    console.warn('Não foi possível ler o idioma do localStorage:', storageError);
  }

  // 1 e 5. Requisição para a API gratuita ipapi.co com try/catch e fallback garantido para 'en'
  try {
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timeoutId = controller ? setTimeout(() => controller.abort(), 6000) : null;

    const response = await fetch('https://ipapi.co/json/', {
      headers: {
        Accept: 'application/json',
      },
      signal: controller ? controller.signal : undefined,
    });

    if (timeoutId) clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Falha na requisição ipapi.co: status ${response.status}`);
    }

    const data = await response.json();
    const rawCountryCode = data?.country_code || data?.country || '';
    const countryCode = String(rawCountryCode).trim().toUpperCase();

    // 2. Mapeamento do código do país para os idiomas suportados
    let detectedLanguage: DetectedLanguage;

    if (countryCode === 'BR') {
      detectedLanguage = 'pt-BR';
    } else if (SPANISH_SPEAKING_COUNTRIES.has(countryCode)) {
      detectedLanguage = 'es';
    } else {
      detectedLanguage = 'en';
    }

    // 3. Salvar a preferência detectada no localStorage para evitar chamadas repetidas
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, detectedLanguage);
      }
    } catch (saveError) {
      console.warn('Não foi possível salvar o idioma detectado no localStorage:', saveError);
    }

    return detectedLanguage;
  } catch (error) {
    // 5. Garantir que se a API falhar, o idioma retornado seja 'en'
    console.warn('Erro ao consultar ipapi.co. Aplicando fallback para "en":', error);
    return 'en';
  }
}

// Export alternativo para máxima facilidade de importação
export const detectLanguage = detectUserLanguage;
export default detectUserLanguage;
