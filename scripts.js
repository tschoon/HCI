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
        href: "index.html?fake=1"
    },
    LOGOUT: {
        title: "Logout",
        style: "float:right",
        class: "logout",
        href: "login.html"
    },
    PROFILE: {
        title: "Profile",
        style: "float:right",
        class: "",
        href: "profile.html"
    },
};

function parseDates(dates) {
    const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
    result = ``;
    for(i in dates) {
        result += `${days[dates[i][0].getDay()]} ${dates[i][0].getHours()}:${dates[i][0].getMinutes()} Uhr - ${dates[i][1].getHours()}:${dates[i][1].getMinutes()}`;
        if(i % dates.length + 1 != dates.length) result += `, `;
    }
    return result;
}

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