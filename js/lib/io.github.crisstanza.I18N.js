"use strict";

if (!io) var io = {};
if (!io.github) io.github = {};
if (!io.github.crisstanza) io.github.crisstanza = {};
if (!io.github.crisstanza.I18N) io.github.crisstanza.I18N = {};

(function() {

	io.github.crisstanza.I18N.setKeys = (keys) => {
		io.github.crisstanza.I18N.keys = keys;
	};

	io.github.crisstanza.I18N.getValue = (key, currentLanguage) => {
		currentLanguage = currentLanguage ? currentLanguage : navigator.language;
		const keys = io.github.crisstanza.I18N.keys;
		let language = keys.languages.findIndex(language => language == currentLanguage);
		if (language == -1) {
			language = 0;
		}
		const values = keys.values[key];
		if (values) {
			return values[language];
		}
		return `???${key}???`;
	};

	io.github.crisstanza.I18N.render = (currentLanguage) => {
		const elements = document.querySelectorAll('[i18n]');
		elements.forEach((element) => {
			const key = element.getAttribute('i18n');
			if (key) {
				const value = io.github.crisstanza.I18N.getValue(key, currentLanguage);
				if (value) {
					element.innerHTML = value;
				}
			}
		});
	};

})();
