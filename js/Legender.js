class Legender {

	constructor(parent) {
		this.parent = parent;
		this.parent.setAttribute('legender', this);
		this.creator = io.github.crisstanza.Creator;
		this.i18n = io.github.crisstanza.I18N;
	}

	render() {

		if (this.parent.classList.contains('left-hand')) {
			this.creator.html('h1', {i18n: 'left-hand'}, this.parent, this.i18n.getValue('left-hand'));
			this.creator.html('span', {i18n: 'little', class: 'color-blue'}, this.parent, this.i18n.getValue('little'));
			this.creator.html('span', {i18n: 'ring', class: 'color-red'}, this.parent, this.i18n.getValue('ring'));
			this.creator.html('span', {i18n: 'middle', class: 'color-violet'}, this.parent, this.i18n.getValue('middle'));
			this.creator.html('span', {i18n: 'index', class: 'color-green'}, this.parent, this.i18n.getValue('index'));
			this.creator.html('span', {i18n: 'thumb', class: 'color-orange'}, this.parent, this.i18n.getValue('thumb'));
		} else if (this.parent.classList.contains('right-hand')) {
			this.creator.html('h1', {i18n: 'right-hand'}, this.parent, this.i18n.getValue('right-hand'));
			this.creator.html('span', {i18n: 'thumb', class: 'color-orange'}, this.parent, this.i18n.getValue('thumb'));
			this.creator.html('span', {i18n: 'index', class: 'color-green'}, this.parent, this.i18n.getValue('index'));
			this.creator.html('span', {i18n: 'middle', class: 'color-violet'}, this.parent, this.i18n.getValue('middle'));
			this.creator.html('span', {i18n: 'ring', class: 'color-red'}, this.parent, this.i18n.getValue('ring'));
			this.creator.html('span', {i18n: 'little', class: 'color-blue'}, this.parent, this.i18n.getValue('little'));
		}
	}

}
