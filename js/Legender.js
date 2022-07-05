class Legender {

	constructor(parent) {
		this.parent = parent;
		this.parent.setAttribute('legender', this);
		this.creator = io.github.crisstanza.Creator;
	}

	render() {
		if (this.parent.classList.contains('left-hand')) {
			this.creator.html('h1', {}, this.parent, 'm&atildeo esquerda');
			this.creator.html('span', {class: 'color-blue'}, this.parent, 'm&iacute;nimo');
			this.creator.html('span', {class: 'color-red'}, this.parent, 'anelar');
			this.creator.html('span', {class: 'color-violet'}, this.parent, 'm&eacute;dio');
			this.creator.html('span', {class: 'color-green'}, this.parent, 'indicador');
			this.creator.html('span', {class: 'color-orange'}, this.parent, 'polegar');
		} else if (this.parent.classList.contains('right-hand')) {
			this.creator.html('h1', {}, this.parent, 'm&atildeo direita');
			this.creator.html('span', {class: 'color-orange'}, this.parent, 'polegar');
			this.creator.html('span', {class: 'color-green'}, this.parent, 'indicador');
			this.creator.html('span', {class: 'color-violet'}, this.parent, 'm&eacute;dio');
			this.creator.html('span', {class: 'color-red'}, this.parent, 'anelar');
			this.creator.html('span', {class: 'color-blue'}, this.parent, 'm&iacute;nimo');
		}
	}

}
