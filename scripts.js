const ELEMENT = {
    NAVBAR: 'navbar',
    FOOTER: 'footer'
};

const SITE = {
    HOME: {title: "Hauptmenü", style: "", class: "", href: "index.html"},
    LOGOUT: {title: "Logout", style: "float:right", class: "logout", href: "logout.html"},
}

/**
 * creates the navbar at the top of the page
 * @param {SITE} active the currently active site
 */
function createNavbar(active) {
    var content = `<ul>`;
    for(s in SITE) {
        var classes = (active === s) ? `active ` : ` `;
        classes += SITE[s].class;
        content += `<li style="${SITE[s].style}"><a href="${SITE[s].href}" class="${classes}">${SITE[s].title}</a></li>`;
    }
    content += `</ul>`;    
    document.getElementById(`navbar`).innerHTML = content;
}

function createFooter() {

}

/**
 * initializes recurring elements
 * @param {ELEMENT} showElements elements should be initialized
 * @param {SITE} activeSite active navbar element
 */
function init(showElements, activeSite) {
    if( showElements.includes(ELEMENT.NAVBAR)) {
        createNavbar(activeSite);
    }

    if( showElements.includes(ELEMENT.FOOTER)) {
        createFooter();
    }
}