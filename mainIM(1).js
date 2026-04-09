let menuOpen = 0;
let m = document.getElementById("menubutton");
let tm = document.getElementsByTagName("ul")[0];

function goToSite(addr) {
    window.location.href = "http://" + addr;
}

function menuTransition() {
	if (menuOpen === 0) {
		m.style.border = "var(--navy) 2px solid";
		m.style.backgroundColor = "var(--ivory)";

		for (const child of m.children) {
			console.log((child.style.backgroundColor = "var(--navy)"));
		}

		m.firstElementChild.style.transform = "translatey(34px) rotate(-45deg)";
		m.lastElementChild.style.transform = "translatey(-34px) rotate(-45deg)";
		m.children[1].style.transform = "rotate(45deg)";
        tm.style.transform = "translatey(0px)"

		menuOpen = 1;
	} else {
		m.style = "";
        tm.style.transform = "translatey(-300px)"

		for (const child of m.children) {
			child.style = "";
			menuOpen = 0;
		}
	}
}
