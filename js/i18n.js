(function () {

	const keys = {
		languages: [ 'pt-BR', 'en-US' ],
		values: {
			'...back': [ '...voltar', '...back' ],
			'left-hand': [ 'm&atildeo esquerda', 'left hand' ],
			'right-hand': [ 'm&atildeo direita', 'right hand' ],
			'thumb': [ 'polegar', 'thumb' ],
			'index': [ 'indicador', 'index' ],
			'middle': [ 'm&eacute;dio', 'middle' ],
			'ring': [ 'anelar', 'ring' ],
			'little': [ 'm&iacute;nimo', 'little' ],
			'parabens-pra-voce': [ 'Parab&eacute;ns pra Voc&ecirc;', 'Happy Birthday to You' ],
			'title.parabens-pra-voce': [ 'Parab&eacute;ns pra Voc&ecirc; - My Piano Charts', 'Happy Birthday to You - My Piano Charts' ]
		}

	};

	function init(event) {
		io.github.crisstanza.I18N.setKeys(keys);
		io.github.crisstanza.I18N.render();
	}

	window.addEventListener('load', init);

})();
