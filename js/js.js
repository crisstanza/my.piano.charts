(function () {

	function init(event) {
		const charts = document.querySelectorAll('div.chart[start][size]');
		charts.forEach((chart) => new Charter(chart).render());
		const legends = document.querySelectorAll('div.legend.left-hand, div.legend.right-hand');
		legends.forEach((legend) => new Legender(legend).render());
		Charter.fixSizes();
		JSSoundPlayer.volume();
	}

	window.addEventListener('load', init);

})();
