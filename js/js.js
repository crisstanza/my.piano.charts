(function () {

	function init(event) {
		const charts = document.querySelectorAll('div.chart[start][size]');
		charts.forEach((value, i, parent) => {
			// console.log(value, i, parent);
			const charter = new Charter(value);
			charter.render();
		});
	}

	window.addEventListener('load', init);

})();
