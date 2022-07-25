class Legender {

	constructor(parent) {
		this.parent = parent;
		this.inv = parent.getAttribute('inv') == 'true';
		this.creator = io.github.crisstanza.Creator;
		this.i18n = io.github.crisstanza.I18N;
	}

	render() {
		if (this.parent.classList.contains('left-hand')) {
			if (!this.inv) {
				this.creator.html('h1', {i18n: 'left-hand'}, this.parent, this.i18n.value('left-hand'));
			}
			this.creator.html('span', {i18n: 'little', class: 'color-finger-5'}, this.parent, this.i18n.value('little'));
			this.creator.html('span', {i18n: 'ring', class: 'color-finger-4'}, this.parent, this.i18n.value('ring'));
			this.creator.html('span', {i18n: 'middle', class: 'color-finger-3'}, this.parent, this.i18n.value('middle'));
			this.creator.html('span', {i18n: 'index', class: 'color-finger-2'}, this.parent, this.i18n.value('index'));
			this.creator.html('span', {i18n: 'thumb', class: 'color-finger-1'}, this.parent, this.i18n.value('thumb'));
			if (this.inv) {
				this.creator.html('h1', {i18n: 'left-hand'}, this.parent, this.i18n.value('left-hand'));
			}
		} else if (this.parent.classList.contains('right-hand')) {
			if (!this.inv) {
				this.creator.html('h1', {i18n: 'right-hand'}, this.parent, this.i18n.value('right-hand'));
			}
			this.creator.html('span', {i18n: 'thumb', class: 'color-finger-1'}, this.parent, this.i18n.value('thumb'));
			this.creator.html('span', {i18n: 'index', class: 'color-finger-2'}, this.parent, this.i18n.value('index'));
			this.creator.html('span', {i18n: 'middle', class: 'color-finger-3'}, this.parent, this.i18n.value('middle'));
			this.creator.html('span', {i18n: 'ring', class: 'color-finger-4'}, this.parent, this.i18n.value('ring'));
			this.creator.html('span', {i18n: 'little', class: 'color-finger-5'}, this.parent, this.i18n.value('little'));
			if (this.inv) {
				this.creator.html('h1', {i18n: 'right-hand'}, this.parent, this.i18n.value('right-hand'));
			}
		}
	}

}
