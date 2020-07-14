import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './Locales/en/translation.json';
import translationFR from './Locales/fr/translation.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
	Anglais: {
		translation: translationEN
	},
	Français: {
		translation: translationFR
	}
};

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next) // passes i18n down to react-i18next
.init({
	resources,
	debug: false,
	fallbackLng: 'Français',
	backend: {
		loadPath: 'Locales/{{lng}}/translation.json'
	},
	react: {
		useSuspense: false
	},
	interpolation: {
		escapeValue: false, // react already safes from xss
	}
});

export default i18n;