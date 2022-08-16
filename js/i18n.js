(function () {

	const keys = {
		languages: [ 'us', 'br', 'fr', 'es' ],
		values: {
			'left-hand': [ 'left hand', 'm&atildeo esquerda', 'main gauche', 'mano izquierda' ],
			'right-hand': [ 'right hand', 'm&atildeo direita', 'main droite', 'mano derecha' ],
			'thumb': [ 'thumb', 'polegar', 'le pouce', 'pulgar' ],
			'index': [ 'index', 'indicador', 'l\'index', '&iacute;ndice' ],
			'middle': [ 'middle', 'm&eacute;dio', 'le majeur', 'medio' ],
			'ring': [ 'ring', 'anelar', 'l\'annulaire', 'anular' ],
			'little': [ 'little', 'm&iacute;nimo', 'l\'auriculaire', 'me&ntilde;ique' ],

			'Backing-Tracks': ['Backing Tracks', 'Pistas de Acompanhamento', 'Pistes d\'Accompagnement', 'Pistas de Acompa&ntilde;amiento' ],

			'parabens-pra-voce': [ 'Happy Birthday to You', 'Parab&eacute;ns pra Voc&ecirc;', 'Happy Birthday to You', 'Happy Birthday to You' ],
			'title.parabens-pra-voce': [ 'Happy Birthday to You - My Piano Charts', 'Parab&eacute;ns pra Voc&ecirc; - My Piano Charts', 'Happy Birthday to You - My Piano Charts', 'Happy Birthday to You - My Piano Charts' ],

			'Circle-of-Fifths': [ 'Circle of Fifths', 'Ciclo das Quintas', 'Cycle des Quintes', 'Ciclo de Quintas' ],

			'c-major': [ 'C Major', 'D&oacute; Maior', 'Do Majeur', 'Do Mayor' ],
			'title.c-major_circle-of-fifths': [ 'C Major - Circle of Fifths - My Piano Charts', 'D&oacute; Maior - Ciclo das Quintas - My Piano Charts', 'Do Majeur - Cycle des Quintes - My Piano Charts', 'Do Mayor - Ciclo de Quintas - My Piano Charts' ],

			'f-major': [ 'F Major (1<i>b</i>)', 'F&aacute; Maior (1<i>b</i>)', 'Fa Majeur (1<i>b</i>)', 'Fa Mayor (1<i>b</i>)' ],
			'title.f-major_circle-of-fifths': [ 'F Major (1b) - Circle of Fifths - My Piano Charts', 'F&aacute; Maior (1b) - Ciclo das Quintas - My Piano Charts', 'Fa Majeur (1b) - Cycle des Quintes - My Piano Charts', 'Fa Mayor (1b) - Ciclo de Quintas - My Piano Charts' ],

			'g-major': [ 'G Major (1#)', 'Sol Maior (1#)', 'Sol Majeur (1#)', 'Sol Mayor (1#)' ],
			'title.g-major_circle-of-fifths': [ 'G Major (1#) - Circle of Fifths - My Piano Charts', 'Sol Maior (1#) - Ciclo das Quintas - My Piano Charts', 'Sol Majeur (1#) - Cycle des Quintes - My Piano Charts', 'Sol Mayor (1#) - Ciclo de Quintas - My Piano Charts' ],

			'bb-major': [ 'B<i>b</i> Major (2<i>b</i>)', 'Si Bem&oacute;l Maior (2<i>b</i>)', 'Si B&eacute;mol Majeur (2<i>b</i>)', 'Si Bemol Mayor (2<i>b</i>)' ],
			'title.bb-major_circle-of-fifths': [ 'Bb Major (2b) - Circle of Fifths - My Piano Charts', 'Bb Maior (2b) - Ciclo das Quintas - My Piano Charts', 'Bb Majeur (2b) - Cycle des Quintes - My Piano Charts', 'B Mayor (2b) - Ciclo de Quintas - My Piano Charts' ],

			'd-major': [ 'D Major (2#)', 'R&eacute; Maior (2#)', 'R&eacute; Majeur (2#)', 'Re Mayor (2#)' ],
			'title.d-major_circle-of-fifths': [ 'D Major (2#) - Circle of Fifths - My Piano Charts', 'R&eacute; Maior (2#) - Ciclo das Quintas - My Piano Charts', 'Re Majeur (2#) - Cycle des Quintes - My Piano Charts', 'Re Mayor (2#) - Ciclo de Quintas - My Piano Charts' ],

			'eb-major': [ 'E<i>b</i> Major (3<i>b</i>)', 'Mi Bem&oacute;l Maior (3<i>b</i>)', 'Mi B&eacute;mol Majeur (3<i>b</i>)', 'Mi Bemol Mayor (3<i>b</i>)' ],
			'title.eb-major_circle-of-fifths': [ 'Eb Major (3b) - Circle of Fifths - My Piano Charts', 'Eb Maior (3b) - Ciclo das Quintas - My Piano Charts', 'Eb Majeur (3b) - Cycle des Quintes - My Piano Charts', 'E Mayor (3b) - Ciclo de Quintas - My Piano Charts' ],

			'a-major': [ 'A Major (3#)', 'L&aacute; Maior (3#)', 'L&aacute; Majeur (3#)', 'La Mayor (3#)' ],
			'title.a-major_circle-of-fifths': [ 'A Major (3#) - Circle of Fifths - My Piano Charts', 'L&aacute; Maior (3#) - Ciclo das Quintas - My Piano Charts', 'La Majeur (3#) - Cycle des Quintes - My Piano Charts', 'La Mayor (3#) - Ciclo de Quintas - My Piano Charts' ],

			'...back': [ '...back', '...voltar', '...retour', '...de vuelta' ],
		}
	};

	function init(event) {
		io.github.crisstanza.I18N.keys(keys);
		io.github.crisstanza.I18N.render();
	}

	window.addEventListener('load', init);

})();
