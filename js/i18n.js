(function () {

	const keys = {
		languages: [ 'en-US', 'pt-BR' ],
		values: {
			'...back': [ '...back', '...voltar' ],
			'left-hand': [ 'left hand', 'm&atildeo esquerda' ],
			'right-hand': [ 'right hand', 'm&atildeo direita' ],
			'thumb': [ 'thumb', 'polegar' ],
			'index': [ 'index', 'indicador' ],
			'middle': [ 'middle', 'm&eacute;dio' ],
			'ring': [ 'ring', 'anelar' ],
			'little': [ 'little', 'm&iacute;nimo' ],
			'parabens-pra-voce': [ 'Happy Birthday to You', 'Parab&eacute;ns pra Voc&ecirc;' ],
			'title.parabens-pra-voce': [ 'Happy Birthday to You - My Piano Charts', 'Parab&eacute;ns pra Voc&ecirc; - My Piano Charts' ]
		}

	};

	function init(event) {
		io.github.crisstanza.I18N.setKeys(keys);
		io.github.crisstanza.I18N.render();
	}

	window.addEventListener('load', init);

})();
