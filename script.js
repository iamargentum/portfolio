const lifeStrip = document.getElementById("lifeStrip");
const workStrip = document.getElementById("workStrip");
const projectsStrip = document.getElementById("projectsStrip");
const workSectionContent = document.getElementById("workSectionContent");
const lifeSectionContent = document.getElementById("lifeSectionContent");
const projectsSectionContent = document.getElementById("projectsSectionContent");
const slidingWordsParents = document.getElementsByClassName("slidingWordsParent");
var slidingWordContainers;

if(document.documentElement.scrollTop > window.innerHeight) {
    document.documentElement.style.setProperty("--slidingWordOpacity", "0");
}

for (var i = 0; i < slidingWordsParents.length; i++) {
    const slidingWordsParent = slidingWordsParents.item(i);
    slidingWordContainers = slidingWordsParent.children;
}

document.addEventListener("scroll", (e) => {
    var st = document.documentElement.scrollTop;
    // console.log("st is - ", st);
    // console.log("window.innerHeight is ", window.innerHeight);
    if(st <= window.innerHeight) {
        document.documentElement.style.setProperty("--evenBottom", ((st/window.innerHeight).toString() + "em"));
        document.documentElement.style.setProperty("--oddBottom", "-" + ((st/window.innerHeight).toString() + "em"));
        document.documentElement.style.setProperty("--slidingWordOpacity", (1 - st/window.innerHeight).toString());
    }

    if(st >= workSectionContent.offsetTop && st <= projectsSectionContent.offsetTop) {
        if(!workStrip.classList.contains("topLeftSticky")) {
            workStrip.classList.add("topLeftSticky");
        }
    } else {
        if(workStrip.classList.contains("topLeftSticky")) {
            workStrip.classList.remove("topLeftSticky");
        }
    }

    if(st >= projectsSectionContent.offsetTop && st <= lifeSectionContent.offsetTop) {
        if(!projectsStrip.classList.contains("topRightSticky")) {
            projectsStrip.classList.add("topRightSticky");
        }
    } else {
        if(projectsStrip.classList.contains("topRightSticky")) {
            projectsStrip.classList.remove("topRightSticky");
        }
    }

    if(st >= lifeSectionContent.offsetTop) {
        if(!lifeStrip.classList.contains("topLeftSticky")) {
            lifeStrip.classList.add("topLeftSticky");
        }
    } else {
        if(lifeStrip.classList.contains("topLeftSticky")) {
            lifeStrip.classList.remove("topLeftSticky");
        }
    }
});