"use strict";

if (!io) var io = {};
if (!io.github) io.github = {};
if (!io.github.crisstanza) io.github.crisstanza = {};
if (!io.github.crisstanza.I18N) io.github.crisstanza.I18N = {};

(function() {

	io.github.crisstanza.I18N.keys = (keys) => {
		io.github.crisstanza.I18N.KEYS = keys;
	};

	io.github.crisstanza.I18N.match = (language, part) => {
		const parts = language.split('-');
		return parts.length > 1 ? parts[part] : language;
	};

	io.github.crisstanza.I18N.language = (currentLanguage) => {
		const lastLanguage = io.github.crisstanza.CookieIsGood.get('language');
		if (lastLanguage === io.github.crisstanza.CookieIsGood.NOT_FOUND) {
			currentLanguage = (currentLanguage ? currentLanguage : navigator.language).toLowerCase();
		} else {
			currentLanguage = lastLanguage;
		}
		const keys = io.github.crisstanza.I18N.KEYS;
		let exactMatch = keys.languages.findIndex(language => language.toLowerCase() == currentLanguage);
		if (exactMatch >= 0) {
			return keys.languages[exactMatch];
		}
		let countryMatch = keys.languages.findIndex(language => io.github.crisstanza.I18N.match(language, 1) == io.github.crisstanza.I18N.match(currentLanguage, 1));
		if (countryMatch >= 0) {
			return keys.languages[countryMatch];
		}
		let languageMatch = keys.languages.findIndex(language => io.github.crisstanza.I18N.match(language, 0) == io.github.crisstanza.I18N.match(currentLanguage, 0));
		if (languageMatch >= 0) {
			return keys.languages[languageMatch];
		}
		return keys.languages[0];
	};

	io.github.crisstanza.I18N.value = (key, currentLanguage) => {
		currentLanguage = io.github.crisstanza.I18N.language(currentLanguage);
		const keys = io.github.crisstanza.I18N.KEYS;
		let language = keys.languages.findIndex(language => language == currentLanguage);
		if (language == -1) {
			language = 0;
		}
		const values = keys.values[key];
		if (values) {
			const value = values[language];
			if (value) {
				return value;
			}
		}
		return `???${key}???`;
	};

	io.github.crisstanza.I18N.render = (currentLanguage) => {
		io.github.crisstanza.I18N.flags(currentLanguage);
		const elements = document.querySelectorAll('[i18n]');
		elements.forEach((element) => {
			const key = element.getAttribute('i18n');
			if (key) {
				const value = io.github.crisstanza.I18N.value(key, currentLanguage);
				if (value) {
					element.innerHTML = value;
				}
			}
		});
	};

	io.github.crisstanza.I18N.flags = (currentLanguage) => {
		currentLanguage = io.github.crisstanza.I18N.language(currentLanguage);
		const elements = document.querySelectorAll('[i18n-flags]');
		elements.forEach((element) => {
			const flagsString = element.getAttribute('i18n-flags');
			if (flagsString) {
				element.innerText = '';
				const flags = flagsString.split(/\s*,\s*/)
				flags.forEach((flag) => {
					const link = io.github.crisstanza.Creator.html('a', {href: `#${flag}`, border: 0, class: flag == currentLanguage ? 'on' : 'off'}, element);
					io.github.crisstanza.Creator.html('img', {src: `img/${flag}.png`, border: 0}, link);
					link.addEventListener('click', io.github.crisstanza.I18N.click);
				});
			}
		});
	};

	io.github.crisstanza.I18N.click = (event) => {
		const newLanguage = event.target.getAttribute('href').substring(1);
		io.github.crisstanza.CookieIsGood.set('language', newLanguage, null, 365);
		io.github.crisstanza.I18N.render(newLanguage);
	};

})();
