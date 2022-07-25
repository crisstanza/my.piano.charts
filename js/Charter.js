class Charter {

	static #KEYS = {
		C: 'wbwbwwbwbwbw',
		F: 'wbwbwbwwbwbw'
	};

	static fixSizes() {
		window.removeEventListener('resize', Charter.fixSize);
		document.body.classList.remove('smaller');
		document.body.classList.remove('small');
		document.body.classList.remove('medium');
		const bodyWidth = document.body.scrollWidth;
		const windowWidth = window.innerWidth;
		if (bodyWidth > window.innerWidth) {
			document.body.classList.add('medium');
		}
		const newBodyWidth = document.body.scrollWidth;
		if (newBodyWidth > windowWidth) {
			document.body.classList.remove('medium');
			document.body.classList.add('small');
		}
		const newBodyWidth2 = document.body.scrollWidth;
		if (newBodyWidth2 > windowWidth) {
			document.body.classList.remove('medium');
			document.body.classList.remove('small');
			document.body.classList.add('smaller');
		}
		window.addEventListener('resize', Charter.fixSizes);
	}

	constructor(parent) {
		this.parent = parent;
		this.start = parent.getAttribute('start');
		this.size = Number(parent.getAttribute('size'));
		this.maxKeys = this.#getMaxKeys(this.size, this.start);
		this.data = this.parent.innerText ? JSON.parse(this.parent.innerText.trim()) : [];
		this.creator = io.github.crisstanza.Creator;
		this.player = new JSSoundPlayer(parent);
		this.parent.innerText = '';
	}

	render() {
		for (let currentKeyIndex = 0, i = 0 ; i < this.maxKeys ; i++) {
			const color = Charter.#KEYS[this.start[0]].charAt(currentKeyIndex);
			const className = this.#getClassName(color);
			const freq = JSSoundPlayer.getFreq(i, this.start);
			const key = this.creator.html('div', {class: className, freq: freq}, this.parent);
			currentKeyIndex++;
			currentKeyIndex %= Charter.#KEYS[this.start[0]].length;
			const extras = this.data[i];
			if (extras) {
				extras.forEach(extra => {
					if (extra.order) {
						this.creator.html('b', extra.finger ? {class: 'color-finger-' + extra.finger} : {}, key, extra.order);
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
		return sizeFloor * Charter.#KEYS[this.start[0]].length + (size == sizeFloor ? 0 : this.#getHalfOctaveSize(start));
	}

	#getHalfOctaveSize(start) {
		return start.charAt(0) == 'C' ? 5 : 7;
	}

}
