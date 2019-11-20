(function() {
	const $toc = document.querySelector("#toc");
	if ($toc == null) {
		return;
	}
	const $sticky = $toc.children[0];
	if ($sticky == null) {
		return;
	}

	const css = {
		sticky: "TOC--sticky",
	};
	const threshold =
		$toc.getBoundingClientRect().top -
		document.body.getBoundingClientRect().top -
		72;
	let y = 0;

	window.addEventListener("scroll", handleScroll, { passive: true });
	// Call for setting initial state.
	handleScroll();

	function handleScroll() {
		let { pageYOffset } = window;

		// Need to add the sticky class
		if (y < threshold && pageYOffset >= threshold) {
			$sticky.classList.add(css.sticky);
		}
		// Need to remove the sticky class
		if (y >= threshold && pageYOffset < threshold) {
			$sticky.classList.remove(css.sticky);
		}

		// Update current scroll position
		y = pageYOffset;
	}
})();
