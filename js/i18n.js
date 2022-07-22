(function () {

	const keys = {
		languages: [ 'us', 'br', 'fr', 'es' ],
		values: {
			'Backing-Tracks': ['Backing Tracks', 'Pistas de Acompanhamento', 'Pistes d\'Accompagnement', 'Pistas de Acompa&ntilde;amiento' ],
			'...back': [ '...back', '...voltar', '...retour', '...de vuelta' ],
			'left-hand': [ 'left hand', 'm&atildeo esquerda', 'main gauche', 'mano izquierda' ],
			'right-hand': [ 'right hand', 'm&atildeo direita', 'main droite', 'mano derecha' ],
			'thumb': [ 'thumb', 'polegar', 'le pouce', 'pulgar' ],
			'index': [ 'index', 'indicador', 'l\'index', '&iacute;ndice' ],
			'middle': [ 'middle', 'm&eacute;dio', 'le majeur', 'medio' ],
			'ring': [ 'ring', 'anelar', 'l\'annulaire', 'anular' ],
			'little': [ 'little', 'm&iacute;nimo', 'l\'auriculaire', 'me&ntilde;ique' ],
			'parabens-pra-voce': [ 'Happy Birthday to You', 'Parab&eacute;ns pra Voc&ecirc;', 'Happy Birthday to You', 'Happy Birthday to You' ],
			'title.parabens-pra-voce': [ 'Happy Birthday to You - My Piano Charts', 'Parab&eacute;ns pra Voc&ecirc; - My Piano Charts', 'Happy Birthday to You - My Piano Charts', 'Happy Birthday to You - My Piano Charts' ]
		}

	};

	function init(event) {
		io.github.crisstanza.I18N.keys(keys);
		io.github.crisstanza.I18N.render();
	}

	window.addEventListener('load', init);

})();
