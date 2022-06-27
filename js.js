(function () {

	function init(event) {
		console.log(this, event);
	}

	window.addEventListener('load', init);

})();
