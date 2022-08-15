class Spacer {

	static #MAIN_ATTRIBUTE = 'spacer';
	static #MAIN_SELECTOR = `[${Spacer.#MAIN_ATTRIBUTE}]`;
	static #DEFAULT_SPACER = '&nbsp;';

	static init() {
		const elements = document.querySelectorAll(Spacer.#MAIN_SELECTOR);
		elements.forEach(element => new Spacer(element).render());
	}

	constructor(parent) {
		this.parent = parent;
	}

	render() {
		const times = this.#getTimes();
		const toRepeat = this.#getToRepeat();
		const repetitions = this.#getRepeatitions(times, toRepeat);
		this.#setRepeatitions(repetitions);
	}

	#getTimes() {
		return +this.parent.getAttribute(Spacer.#MAIN_ATTRIBUTE);
	}

	#getToRepeat() {
		return this.parent.innerHTML ? this.parent.innerHTML : Spacer.#DEFAULT_SPACER;
	}

	#getRepeatitions(times, toRepeat) {
		return Array.from({ length: times }, () => toRepeat);
	}

	#setRepeatitions(repetitions) {
		this.parent.innerHTML = repetitions.join('');
	}

}

window.addEventListener('load', Spacer.init);
