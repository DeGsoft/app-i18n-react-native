import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import es from '@/languages/es.json';

// Set the key-value pairs for the different languages you want to support.
const translations = {
    en: { welcome: 'Hello', name: 'Charlie' },
    ja: { welcome: 'こんにちは' },
    es
};
const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0]?.languageCode ?? 'en';

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment the line below to force the app to use the Japanese language.
i18n.locale = 'es';

export const getText = (txt:string) => i18n.t(txt);
