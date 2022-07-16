class JSSoundPlayer {

	static #FREQS = [261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392, 415.3, 440, 466.16, 493.88];

	static #MAX_VOLUME = 0.75;

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
