const featureIsAnExperimentalAlertBox = document.getElementById("featureIsAnExperimentalAlertBox");
const featureIsAnExperimentalAlertContainer = document.getElementById("featureIsAnExperimentalAlertContainer");
const darkOverlay = document.getElementById("darkOverlay");
const exitFeatureAlert = document.getElementById("exitFeatureAlert");

function showAlert(){
    featureIsAnExperimentalAlertContainer.classList.remove("-translate-y-32");
    featureIsAnExperimentalAlertContainer.classList.add("translate-y-4");
}

function showBlackOverlay(){
    darkOverlay.classList.remove("pointer-events-none");
    darkOverlay.classList.remove("opacity-[0%]");
    darkOverlay.classList.add("opacity-[100%]");
    darkOverlay.classList.remove("backdrop-blur-none");
    darkOverlay.classList.add("backdrop-blur-md");
}

function exitBlackOverlay(){
    darkOverlay.addEventListener("click", () => {
        darkOverlay.classList.add("pointer-events-none");
        darkOverlay.classList.remove("opacity-[100%]");
        darkOverlay.classList.add("opacity-[0%]");
        darkOverlay.classList.add("backdrop-blur-none");
        darkOverlay.classList.remove("backdrop-blur-md");
        featureIsAnExperimentalAlertContainer.classList.remove("translate-y-4");
        featureIsAnExperimentalAlertContainer.classList.add("-translate-y-32");
    })
}

function exitAlert(){
    exitFeatureAlert.addEventListener("click", function(){
        featureIsAnExperimentalAlertContainer.classList.remove("translate-y-4");
        featureIsAnExperimentalAlertContainer.classList.add("-translate-y-32");
        darkOverlay.classList.add("pointer-events-none");
        darkOverlay.classList.remove("opacity-[100%]");
        darkOverlay.classList.add("opacity-[0%]");
        darkOverlay.classList.add("backdrop-blur-none");
        darkOverlay.classList.remove("backdrop-blur-md");
    })
}

function exitMenuF(){
    menuItem.classList.remove("h-[215px]");
    menuItem.classList.remove("py-4");
    exitMenu.classList.remove("top-0");
    exitMenu.classList.add("-top-12");
    themeItems.classList.remove("h-[95px]");
    themeItems.classList.remove("py-2");
    themeItems.classList.add("h-[0px]");
    themeItems.classList.add("py-0");
    singleArrowTopTheme.classList.add("hidden");
    singleArrowBottomTheme.classList.remove("hidden");
}

const menu = document.getElementById("hamburgerMenu");
const menuItem = document.getElementById("menuitemDrop");
const exitMenu = document.getElementById("exitMenu");
const exitMenuBox = document.getElementById("exitMenuBox");

menu.addEventListener("click", () => {
    menuItem.classList.toggle("h-[0]");
    menuItem.classList.toggle("py-[0]");
    menuItem.classList.toggle("h-[215px]");
    menuItem.classList.toggle("py-4");
    exitMenu.classList.toggle("-top-12");
    exitMenu.classList.toggle("top-0");
    themeItems.classList.remove("h-[95px]");
    themeItems.classList.remove("py-2");
    themeItems.classList.add("h-[0px]");
    themeItems.classList.add("py-0");
    singleArrowTopTheme.classList.add("hidden");
    singleArrowBottomTheme.classList.remove("hidden");
})

exitMenuBox.addEventListener("click", function(){
    menuItem.classList.remove("h-[215px]");
    menuItem.classList.remove("py-4");
    exitMenu.classList.remove("top-0");
    exitMenu.classList.add("-top-12");
})

const navbarBox = document.getElementById("navbar");
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuItem.contains(e.target) && !navbarBox.contains(e.target) && !themeItems.contains(e.target)){
        menuItem.classList.remove("h-[215px]");
        menuItem.classList.remove("py-4");
        exitMenu.classList.remove("top-0");
        exitMenu.classList.add("-top-12");
        themeItems.classList.remove("h-[95px]");
        themeItems.classList.remove("py-2");
        themeItems.classList.add("h-[0px]");
        themeItems.classList.add("py-0");
        singleArrowTopTheme.classList.add("hidden");
        singleArrowBottomTheme.classList.remove("hidden");
    }
})

// MENU DROP END ============================================>

// THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");
const themeItems = document.getElementById("themeItems");

themeToggle.addEventListener("click", () => {
    themeItems.classList.toggle("h-[0px]");
    themeItems.classList.toggle("py-0");
    themeItems.classList.toggle("h-[95px]");
    themeItems.classList.toggle("py-2");
    menuItem.classList.remove("h-[215px]");
    menuItem.classList.remove("py-4");
    exitMenu.classList.remove("top-0");
    exitMenu.classList.add("-top-12");
    singleArrowBottomTheme.classList.toggle("hidden");
    singleArrowTopTheme.classList.toggle("hidden");
})

const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const singleArrowTopTheme = document.getElementById("singleArrowTopTheme");
const singleArrowBottomTheme = document.getElementById("singleArrowBottomTheme");
const lightToggle = document.getElementById("lightToggle");
const darkToggle = document.getElementById("darkToggle");
const html = document.querySelector('html');

darkToggle.addEventListener("click", () => {
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
    themeItems.classList.toggle("h-[0px]");
    themeItems.classList.toggle("py-0");
    themeItems.classList.toggle("h-[95px]");
    themeItems.classList.toggle("py-2");
    singleArrowBottomTheme.classList.toggle("hidden");
    singleArrowTopTheme.classList.toggle("hidden");
    html.classList.add('dark');
    // document.body.classList.add("dark:bg-dark-bg")
    // showAlert()
    // exitAlert()
    // showBlackOverlay()
    // exitBlackOverlay()
})

lightToggle.addEventListener("click", () => {
    sun.classList.remove("hidden");
    moon.classList.add("hidden");
    themeItems.classList.toggle("h-[0px]");
    themeItems.classList.toggle("py-0");
    themeItems.classList.toggle("h-[95px]");
    themeItems.classList.toggle("py-2");
    singleArrowBottomTheme.classList.toggle("hidden");
    singleArrowTopTheme.classList.toggle("hidden");
    html.classList.remove('dark');
    // document.body.classList.remove("dark:bg-dark-bg")
    // document.body.classList.remove("dark:bg-dark-bg");
})

window.addEventListener("scroll", () => {
    exitMenuF()
    themeItems.classList.remove("h-[95px]");
    themeItems.classList.remove("py-2");
    themeItems.classList.add("h-[0px]");
    themeItems.classList.add("py-0");
})

// CURSOR
const cursorDot = document.getElementById("round");
const cursorBlur = document.getElementById("roundBlur");
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.8; // Kecepatan pergerakan (semakin kecil, semakin lambat)

window.addEventListener("mousemove", function(e) {
    targetX = e.pageX;
    targetY = e.pageY;
});

function animate() {
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;

    cursorBlur.style.left = `${currentX}px`;
    cursorBlur.style.top = `${currentY}px`;

    requestAnimationFrame(animate);
}

animate(); // Memulai animasi

window.addEventListener("mousemove", function(f){
    const posXx = f.pageX;
    const posYy = f.pageY;

    cursorDot.style.left = `${posXx}px`;
    cursorDot.style.top = `${posYy}px`;
});

window.addEventListener("mousemove", function(g){
    const posXx = g.pageX;
    const posYy = g.pageY;

    letMiTingCursor.style.left = `${posXx}px`;
    letMiTingCursor.style.top = `${posYy}px`;

    letMiTingCursor.animate({
        left: `${posXx}px`,
        top: `${posYy}px`
    }, {duration: 400, fill:"forwards"});
});

window.addEventListener("mousemove", function(g){
    const posXx = g.pageX;
    const posYy = g.pageY;

    gacorKangMeme.style.left = `${posXx}px`;
    gacorKangMeme.style.top = `${posYy}px`;

    gacorKangMeme.animate({
        left: `${posXx}px`,
        top: `${posYy}px`
    }, {duration: 400, fill:"forwards"});
});

window.addEventListener("mousemove", function(g){
    const posXx = g.pageX;
    const posYy = g.pageY;

    lumayanSenangMeme.style.left = `${posXx}px`;
    lumayanSenangMeme.style.top = `${posYy}px`;

    lumayanSenangMeme.animate({
        left: `${posXx}px`,
        top: `${posYy}px`
    }, {duration: 400, fill:"forwards"});
});

window.addEventListener("mousemove", function(g){
    const posXx = g.pageX;
    const posYy = g.pageY;

    siapaSangka.style.left = `${posXx}px`;
    siapaSangka.style.top = `${posYy}px`;

    siapaSangka.animate({
        left: `${posXx}px`,
        top: `${posYy}px`
    }, {duration: 400, fill:"forwards"});
});

window.addEventListener("mousemove", function(g){
    const posXx = g.pageX;
    const posYy = g.pageY;

    amimir.style.left = `${posXx}px`;
    amimir.style.top = `${posYy}px`;

    amimir.animate({
        left: `${posXx}px`,
        top: `${posYy}px`
    }, {duration: 400, fill:"forwards"});
});

window.addEventListener("mousemove", function(g){
    const posXx = g.pageX;
    const posYy = g.pageY;

    dotOutline.style.left = `${posXx}px`;
    dotOutline.style.top = `${posYy}px`;

    dotOutline.animate({
        left: `${posXx}px`,
        top: `${posYy}px`
    }, {duration: 500, fill:"forwards"});
});

window.addEventListener("mousemove", function(g){
    const posXx = g.pageX;
    const posYy = g.pageY;

    gojoSitoru.style.left = `${posXx}px`;
    gojoSitoru.style.top = `${posYy}px`;

    gojoSitoru.animate({
        left: `${posXx}px`,
        top: `${posYy}px`
    }, {duration: 500, fill:"forwards"});
});

const course = document.getElementById("course");
const photo = document.getElementById("myPhoto");

function showMeme(){
    letMiTingCursor.classList.remove("scale-[0]");
    letMiTingCursor.classList.add("scale-[1]");
    letMiTingCursor.addEventListener("mouseover", () => {
})
}

function showCursorOutlineDot(){
    dotOutline.classList.remove("scale-[0]");
    dotOutline.classList.add("scale-[1]");
    dotOutline.classList.remove("opacity-[0%]");
    dotOutline.classList.add("opacity-[100%]");
}

function hideCursorOutlineDot(){
    dotOutline.classList.remove("opacity-[100%]");
    dotOutline.classList.add("opacity-[0%]");
}

function hideCursorOutlineDotOnClick(){
    addEventListener("click", function(){
        dotOutline.classList.remove("opacity-[100%]");
        dotOutline.classList.add("opacity-[0%]");
    })
}

photo.addEventListener("mouseover", () => {
    showMeme()
})

photo.addEventListener("mouseleave", () => {
    letMiTingCursor.classList.remove("scale-[1]");
    letMiTingCursor.classList.add("scale-[0]");
})

photo.addEventListener("click", () => {
    letMiTingCursor.classList.remove("scale-[1]");
    letMiTingCursor.classList.add("scale-[0]");
})

course.addEventListener("mouseover", () => {
    gacorKangMeme.classList.remove("scale-[0]");
    gacorKangMeme.classList.add("scale-[1]");
})

course.addEventListener("mouseleave", function() {
    gacorKangMeme.classList.remove("scale-[1]");
    gacorKangMeme.classList.add("scale-[0]");
})

course.addEventListener("click", () => {
    gacorKangMeme.classList.remove("scale-[1]");
    gacorKangMeme.classList.add("scale-[0]");
})

const certificate = document.getElementById("certificate");

certificate.addEventListener("mouseover", () => {
    lumayanSenangMeme.classList.remove("scale-[0]");
    lumayanSenangMeme.classList.add("scale-[1]");
})

certificate.addEventListener("mouseleave", function() {
    lumayanSenangMeme.classList.remove("scale-[1]");
    lumayanSenangMeme.classList.add("scale-[0]");
})

certificate.addEventListener("click", () => {
    lumayanSenangMeme.classList.remove("scale-[1]");
    lumayanSenangMeme.classList.add("scale-[0]");
})

const genericOverviewAbout = document.getElementById("genericOverviewAbout");

genericOverviewAbout.addEventListener("mouseover", () => {
    siapaSangka.classList.remove("scale-[0]");
    siapaSangka.classList.add("scale-[1]");
})

genericOverviewAbout.addEventListener("mouseleave", function() {
    siapaSangka.classList.remove("scale-[1]");
    siapaSangka.classList.add("scale-[0]");
})

genericOverviewAbout.addEventListener("click", () => {
    siapaSangka.classList.remove("scale-[1]");
    siapaSangka.classList.add("scale-[0]");
})

const landingParagraph = document.getElementById('landingParagraph');
const AmirHamzahHome = document.getElementById("AmirHamzah");

landingParagraph.addEventListener("mouseover", () => {
    amimir.classList.remove("scale-[0]");
    amimir.classList.add("scale-[1]");
    showCursorOutlineDot()
})

landingParagraph.addEventListener("mouseleave", function() {
    amimir.classList.remove("scale-[1]");
    amimir.classList.add("scale-[0]");
    hideCursorOutlineDot()
})

landingParagraph.addEventListener("click", () => {
    amimir.classList.remove("scale-[1]");
    amimir.classList.add("scale-[0]");
    hideCursorOutlineDot()
})

const aboutHeadContent = document.getElementById('aboutHeadContent');
const removeLogo = document.getElementById('removeLogo');
const aboutButtonContent = document.getElementById('aboutButtonContent');

removeLogo.addEventListener("mouseover", () => {
    hideCursorOutlineDot()
})

const aboutMeSection = document.getElementById("aboutMeSection");

// aboutMeSection.addEventListener("mouseover", function() {
//     gojoSitoru.classList.remove("scale-[0]");
//     gojoSitoru.classList.add("scale-[1]");
// })

// aboutMeSection.addEventListener("mouseleave", function() {
//     gojoSitoru.classList.remove("scale-[1]");
//     gojoSitoru.classList.add("scale-[0]");
// })

// aboutMeSection.addEventListener("click", () => {
//     gojoSitoru.classList.remove("scale-[1]");
//     gojoSitoru.classList.add("scale-[0]");
// })

// CURSOR COLLECTION
const gojoSitoru = document.getElementById("gojoSitoru");
const dotOutline = document.getElementById("dotOutline");
const amimir = document.getElementById("amimir");
const siapaSangka = document.getElementById("siapaSangka");
const lumayanSenangMeme = document.getElementById("lumayanSenang");
const gacorKangMeme = document.getElementById("gacorKangCursor");
const letMiTingCursor = document.getElementById("letMiTingCursor");
const cursorDefaultOff = document.getElementById("cursorDefaultToggleOff");
const cursorGlassOff = document.getElementById("cursorGlassToggleOff");
const cursorBlurOff = document.getElementById("cursorBlurToggleOff");

const cursorDefaultOn = document.getElementById("cursorDefaultToggleOn");
const cursorGlassOn = document.getElementById("cursorGlassToggleOn");
const cursorBlurOn = document.getElementById("cursorBlurToggleOn");

cursorDefaultOff.addEventListener("click", () => {
    cursorDot.classList.add("hidden");
    cursorDefaultOff.classList.add("hidden");
    cursorDefaultOn.classList.remove("hidden");
    cursorGlassOn.classList.add("hidden");
    cursorGlassOff.classList.remove("hidden");
    cursorBlurOn.classList.add("hidden");
    cursorBlurOff.classList.remove("hidden");
    cursorBlur.classList.add("hidden");
    dotOutline.classList.remove("hidden");
    amimir.classList.remove("hidden");
})

cursorGlassOff.addEventListener("click", function(){
    cursorGlassOff.classList.add("hidden");
    cursorGlassOn.classList.remove("hidden");
    cursorDot.classList.remove("hidden");
    cursorDefaultOn.classList.add("hidden");
    cursorDefaultOff.classList.remove("hidden");
    cursorBlurOn.classList.add("hidden");
    cursorBlurOff.classList.remove("hidden");
    cursorBlur.classList.add("hidden");
    dotOutline.classList.remove("hidden");
    amimir.classList.remove("hidden");
})

cursorBlurOff.addEventListener("click", () => {
    cursorBlurOff.classList.add("hidden");
    cursorBlurOn.classList.remove("hidden");
    cursorGlassOn.classList.add("hidden");
    cursorGlassOff.classList.remove("hidden");
    cursorDefaultOn.classList.add("hidden");
    cursorDefaultOff.classList.remove("hidden");
    cursorDot.classList.add("hidden");
    cursorBlur.classList.remove("hidden");
    dotOutline.classList.add("hidden");
    amimir.classList.add("hidden");
})

const unsupportedInfo = document.getElementById("unsupportedInfo");
const exitUnsupportedInfo = document.getElementById("exitUnsupportedInfo");
const cursorDefaultUs = document.getElementById("cursorDefaultToggleOffUs");
const cursorGlassUs = document.getElementById("cursorGlassToggleOnUs");
const cursorBlurUs = document.getElementById("cursorBlurToggleOffUs");

exitUnsupportedInfo.addEventListener("click", () => {
    unsupportedInfo.classList.remove("scale-[1]");
    unsupportedInfo.classList.add("scale-[0]");
    exitUnsupportedInfo.classList.remove("scale-[1]");
    exitUnsupportedInfo.classList.add("scale-[0]");
})

cursorDefaultUs.addEventListener("click", function(){
    unsupportedInfo.classList.remove("scale-[0]");
    unsupportedInfo.classList.add("scale-[1]");
    exitUnsupportedInfo.classList.remove("scale-[0]");
    exitUnsupportedInfo.classList.add("scale-[1]");
})

cursorGlassUs.addEventListener("click", function(){
    unsupportedInfo.classList.remove("scale-[0]");
    unsupportedInfo.classList.add("scale-[1]");
    exitUnsupportedInfo.classList.remove("scale-[0]");
    exitUnsupportedInfo.classList.add("scale-[1]");
})
cursorBlurUs.addEventListener("click", function(){
    unsupportedInfo.classList.remove("scale-[0]");
    unsupportedInfo.classList.add("scale-[1]");
    exitUnsupportedInfo.classList.remove("scale-[0]");
    exitUnsupportedInfo.classList.add("scale-[1]");
})