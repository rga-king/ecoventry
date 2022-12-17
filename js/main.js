
/*
	toggles visibility of gallery card details
*/
const toggle = (containerId, contentId) => {
  const container = document.querySelector(containerId);
	let containerHeight = container.style.height;

	const content =  document.querySelector(contentId);
	const contentHeight = content.offsetHeight;

	

	// boxHeight is null on page load (why?)
	containerHeight = containerHeight ? containerHeight : '0px';
	if(containerHeight === '0px') {
	 	container.style.height = `${contentHeight}px`;

	 } else {
	 	container.style.height = '0px';
	}
}
