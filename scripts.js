/**
 * enumeration of the core elements of the site
 */
const ELEMENT = {
    NAVBAR: 'navbar',
    FOOTER: 'footer'
};

/**
 * sites that are listed in the navbar
 */
const SITE = {
    HOME: {
        title: "Hauptmenü",
        style: "",
        class: "",
        href: "index.html"
    },
    LOGOUT: {
        title: "Logout",
        style: "float:right",
        class: "logout",
        href: "login.html"
    },
    MENU1: {
        title: "Menü 1",
        style: "",
        class: "",
        href: "#"
    },
    MENU2: {
        title: "Menü 2",
        style: "",
        class: "",
        href: "#"
    },
    MENU3: {
        title: "grp0",
        style: "float:right",
        class: "",
        href: "group.html?g=0"
    },
};

/**
 * creates the navbar at the top of the page
 * @param {SITE} active the currently active site
 */
function createNavbar(active) {
    var content = `<ul>`;
    for (s in SITE) {
        var classes = SITE[s].class;
        classes += (active === SITE[s]) ? ` active` : ``;
        content += `<li style="${SITE[s].style}"><a href="${SITE[s].href}" class="${classes}">${SITE[s].title}</a></li>`;
    }
    content += `</ul>`;
    document.getElementById(`navbar`).innerHTML = content;
}

/**
 * creates the footer at the bottom of the page
 */
function createFooter() {
    var content = ``;
    document.getElementById(`footer`).innerHTML = content;
}

/**
 * initializes recurring elements
 * @param {ELEMENT[]} showElements elements that should be initialized
 * @param {SITE} activeSite active navbar element
 */
function init(showElements, activeSite) {
    if (showElements.includes(ELEMENT.NAVBAR)) {
        createNavbar(activeSite);
    }

    if (showElements.includes(ELEMENT.FOOTER)) {
        createFooter();
    }
}