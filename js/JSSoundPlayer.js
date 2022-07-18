class JSSoundPlayer {

	static #FREQS = [-1, -1, -1, -1, -1, -1, -1, -1, -1, 440, -1, -1];
	static #REFERENCE_FREQ_INDEX = 9;

	static #MAX_VOLUME = 0.5;

	static #DEFAULT_OCTAVE = 4;

	static getFreq(index, octave) {
		octave = octave ? octave : JSSoundPlayer.#DEFAULT_OCTAVE;
		let diff = octave - JSSoundPlayer.#DEFAULT_OCTAVE;
		const nextOctave = Math.floor(index / JSSoundPlayer.#FREQS.length) + 1;
		index %= JSSoundPlayer.#FREQS.length;
		let freq = JSSoundPlayer.#FREQS[index] * nextOctave;
		if (diff < 0) {
			while(diff < 0) {
				freq /= 2;
				diff++;
			}
		} else if (diff > 0) {
			while(diff > 0) {
				freq *= 2;
				diff--;
			}
		}
		return freq;
	}

	constructor(parent) {
		this.parent = parent;
		this.down = false;
		this.playing = {};
		this.context = null;
		this.#initFreqs();
	}

	#initFreqs() {
		if (JSSoundPlayer.#FREQS[0] == -1) {
			const multi = Math.pow(2, 1/12);
			const length = JSSoundPlayer.#FREQS.length;
			for (let i = JSSoundPlayer.#REFERENCE_FREQ_INDEX + 1; i < length ; i++) {
				JSSoundPlayer.#FREQS[i] = JSSoundPlayer.#FREQS[i - 1] * multi;
			}
			for (let i = JSSoundPlayer.#REFERENCE_FREQ_INDEX - 1; i >= 0 ; i--) {
				JSSoundPlayer.#FREQS[i] = JSSoundPlayer.#FREQS[i + 1] / multi;
			}
		}
	}

	render() {
		const keys = this.parent.querySelectorAll('div[freq]');
		keys.forEach((key) => {
			key.addEventListener('mousedown', this.mouseDown.bind(this));
			key.addEventListener('mouseup', this.mouseUp.bind(this));
			key.addEventListener('mouseover', this.mouseOver.bind(this));
			key.addEventListener('mouseout', this.mouseOut.bind(this));
		});
		document.body.addEventListener('mouseup', this.mouseUpBody.bind(this));
	}

	stopAll() {
		Object.keys(this.playing).forEach((freq) => this.stop(freq));
	}

	stop(freq) {
		const gainNode = this.playing[freq];
		if (gainNode) {
			gainNode.gain.setTargetAtTime(0, this.context.currentTime + 0.01, 0.01);
		}
		delete this.playing[freq];
	}

	play(freq) {
		if (!this.context) {
			this.context = new AudioContext();
		}
		if (!this.playing[freq]) {
			const oscillator = this.context.createOscillator();
			oscillator.type = 'sine';
			oscillator.frequency.value = freq;
			const gainNode = this.context.createGain();
			oscillator.connect(gainNode);
			gainNode.connect(this.context.destination);
			this.playing[freq] = gainNode;
			oscillator.start(0);
		} else {
			return;
		}
		const gainNode = this.playing[freq];
		gainNode.gain.setValueAtTime(0, this.context.currentTime);
		gainNode.gain.setTargetAtTime(JSSoundPlayer.#MAX_VOLUME, this.context.currentTime + 0.01, 0.01);
	}

	freq(event) {
		return +event.target.getAttribute('freq');
	}

	mouseDown(event) {
		this.down = true;
		this.play(this.freq(event));
	}

	mouseUp(event) {
		this.down = false;
		this.stop(this.freq(event));
	}

	mouseOver(event) {
		if (this.down) {
			this.play(this.freq(event));
		}
	}

	mouseOut(event) {
		if (this.down) {
			this.stop(this.freq(event));
		}
	}

	mouseUpBody(event) {
		this.down = false;
		this.stopAll();
	}

}
