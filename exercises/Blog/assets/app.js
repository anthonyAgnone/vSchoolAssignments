window.onscroll = () => {
	const nav = document.getElementById('navbar');
	const sideBar = document.getElementById('sideBar');
	if (this.scrollY <= 60) {
		nav.className = '';
		sideBar.className = '';
	} else {
		nav.className = 'scroll';
		sideBar.className = 'moved';
	}
};
