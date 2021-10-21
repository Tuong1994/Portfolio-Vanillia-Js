// HEADER
const header = document.querySelector("#header");
const navbar = document.querySelector("#navbar");
const navbarList = document.querySelector("#navbarList");
const headerButton = document.querySelector("#headerButton");

const contents = document.querySelectorAll(".content");
const links = document.querySelectorAll(".list__link .link");
const subLinks = document.querySelectorAll(".list__sub-link .sub-link");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
        header.classList.add("portfolio__header--sticky")
    } else {
        header.classList.remove("portfolio__header--sticky")
    }
    contents.forEach(content => {
        const offsetTop = content.offsetTop - 300;
        const offsetHeight = content.offsetHeight;
        const contentId = content.getAttribute("id");
        if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            links.forEach(link => {
                link.classList.remove("link-active");
                document.querySelector(".list__link .link[href*=" + contentId + "]").classList.add("link-active");
            })
        }
    })
})

headerButton.addEventListener("click", () => {
    navbar.classList.toggle("responsive-navbar__wrapper--active");
    navbarList.classList.toggle("wrapper__list--active");
    if (navbar.classList.contains("responsive-navbar__wrapper--active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }
});

subLinks.forEach(subLink => {
    subLink.addEventListener("click", () => {
        if (navbar.classList.contains("responsive-navbar__wrapper--active")) {
            headerButton.click()
        }
    })
})

// PROJECT
const projectButtonOne = document.querySelector("#projectButtonOne");
const projectButtonTwo = document.querySelector("#projectButtonTwo");
const iconButtonOne = projectButtonOne.querySelector(".fa");
const iconButtonTwo = projectButtonTwo.querySelector(".fa");
const tix = document.getElementById("tix");
const cybersoft = document.getElementById("cybersoft");

const handleClick = (index) => {
    if (index === 1) {
        if (cybersoft.classList.contains("card__info--active") || iconButtonTwo.classList.contains("fa--rotate")) {
            cybersoft.classList.remove("card__info--active");
            iconButtonTwo.classList.remove("fa--rotate")
        }
        tix.classList.toggle("card__info--active");
        iconButtonOne.classList.toggle("fa--rotate")
    } else if (index === -1) {
        if (tix.classList.contains("card__info--active") || iconButtonOne.classList.contains("fa--rotate")) {
            tix.classList.remove("card__info--active");
            iconButtonOne.classList.remove("fa--rotate")
        }
        cybersoft.classList.toggle("card__info--active")
        iconButtonTwo.classList.toggle("fa--rotate")
    }
}

projectButtonOne.addEventListener("click", () => {
    handleClick(1);
})

projectButtonTwo.addEventListener("click", () => {
    handleClick(-1);
})

// CHANGE THEME
const container = document.querySelector(".portfolio");
const changeTheme = document.querySelector("#changeTheme");

changeTheme.addEventListener("click", function () {
    const iconDark = this.querySelector(".fa-moon");
    const iconLight = this.querySelector(".fa-lightbulb")
    container.classList.toggle("portfolio-dark");
    if (container.classList.contains("portfolio-dark")) {
        iconDark.style.opacity = 0;
        iconDark.style.visibility = "hidden";
        iconLight.style.opacity = 1;
        iconLight.style.visibility = "visible";
    } else {
        iconDark.style.opacity = 1;
        iconDark.style.visibility = "visible";
        iconLight.style.opacity = 0;
        iconLight.style.visibility = "hidden";
    }
})

// REVEAL WHILE SCROLL
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const revealContent = reveals[i];
        const windowHeight = window.innerHeight;
        const contentTop = revealContent.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealPoint < windowHeight - contentTop) {
            revealContent.classList.add("reveal-active");
        } else {
            revealContent.classList.remove("reveal-active");
        }
    }
}

window.addEventListener("scroll", reveal);