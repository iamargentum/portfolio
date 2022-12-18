const workW = document.getElementById("work_w")
const workO = document.getElementById("work_o")
const workR = document.getElementById("work_r")
const workK = document.getElementById("work_k")
const someElement = document.getElementById("something")
const slidingWordsParents = document.getElementsByClassName("slidingWordsParent")
var slidingWordContainers;

for (var i = 0; i < slidingWordsParents.length; i++) {
    const slidingWordsParent = slidingWordsParents.item(i)
    slidingWordContainers = slidingWordsParent.children
}

document.addEventListener("scroll", (e) => {
    var st = document.documentElement.scrollTop
    // console.log("st is - ", st);
    // console.log("window.innerHeight is ", window.innerHeight);
    if(st <= window.innerHeight) {
        document.documentElement.style.setProperty("--evenBottom", ((st/window.innerHeight).toString() + "em"))
        document.documentElement.style.setProperty("--oddBottom", "-" + ((st/window.innerHeight).toString() + "em"))
        document.documentElement.style.setProperty("--slidingWordOpacity", (1 - st/window.innerHeight).toString())

        const workWPathLength = workW.getTotalLength()
        workW.style.strokeDasharray = workWPathLength + "   " + workWPathLength
        workW.style.strokeDashoffset = workWPathLength

        const drawLengthWorkW = workWPathLength*(st/window.innerHeight)

        workW.style.strokeDashoffset = workWPathLength - drawLengthWorkW

        const workOPathLength = workO.getTotalLength()
        workO.style.strokeDasharray = workOPathLength + "   " + workOPathLength
        workO.style.strokeDashoffset = workOPathLength

        const drawLengthWorkO = workOPathLength*(st/window.innerHeight)

        workO.style.strokeDashoffset = workOPathLength - drawLengthWorkO

        const workRPathLength = workR.getTotalLength()
        workR.style.strokeDasharray = workRPathLength + "   " + workRPathLength
        workR.style.strokeDashoffset = workRPathLength

        const drawLengthWorkR = workRPathLength*(st/window.innerHeight)

        workR.style.strokeDashoffset = workRPathLength - drawLengthWorkR

        const workKPathLength = workK.getTotalLength()
        workK.style.strokeDasharray = workKPathLength + "   " + workKPathLength
        workK.style.strokeDashoffset = workKPathLength

        const drawLengthWorkK = workKPathLength*(st/window.innerHeight)

        workK.style.strokeDashoffset = workKPathLength - drawLengthWorkK
    } else if(st/2 <= window.innerHeight) {
        workW.style.opacity = (2*window.innerHeight - st)/window.innerHeight
        workO.style.opacity = (2*window.innerHeight - st)/window.innerHeight
        workR.style.opacity = (2*window.innerHeight - st)/window.innerHeight
        workK.style.opacity = (2*window.innerHeight - st)/window.innerHeight
    }

    lastScrollTop = st <= 0 ? 0 : st;
})