class Charter {

	static #KEYS = 'wbwbwwbwbwbw';

	constructor(parent) {
		this.parent = parent;
		this.start = parent.getAttribute('start');
		this.size = Number(parent.getAttribute('size'));
		this.maxKeys = this.#getMaxKeys(this.size, this.start);
		this.data = this.parent.innerText ? JSON.parse(this.parent.innerText.trim()) : [];
		this.creator = io.github.crisstanza.Creator;
		this.player = new JSSoundPlayer(parent);
		this.parent.setAttribute('charter', this);
		this.parent.innerText = '';
	}

	render() {
		const startKeyIndex = this.#getStartKeyIndex(this.start);
		for (let currentKeyIndex = startKeyIndex, currentFreqIndex = startKeyIndex, i = 0 ; i < this.maxKeys ; i++) {
			const color = Charter.#KEYS.charAt(currentKeyIndex);
			const className = this.#getClassName(color);
			const freq = JSSoundPlayer.getFreq(currentFreqIndex, this.start.charAt(1));
			const key = this.creator.html('div', {class: className, freq: freq}, this.parent);
			currentKeyIndex++;
			currentKeyIndex %= Charter.#KEYS.length;
			currentFreqIndex++;
			const extras = this.data[i];
			if (extras) {
				extras.forEach(extra => {
					if (extra.order) {
						this.creator.html('b', extra.color ? {class: 'color-' + extra.color} : {}, key, extra.order);
					}
				});
			}
		}
		this.player.render();
	}

	#getClassName(color) {
		return color == 'w' ? 'white' : 'black';
	}

	#getMaxKeys(size, start) {
		const sizeFloor = Math.floor(size);
		return sizeFloor * Charter.#KEYS.length + (size == sizeFloor ? 0 : this.#getHalfOctaveSize(start));
	}

	#getStartKeyIndex(start) {
		return start.charAt(0) == 'C' ? 0 : 5;
	}

	#getHalfOctaveSize(start) {
		return start.charAt(0) == 'C' ? 5 : 7;
	}

}
