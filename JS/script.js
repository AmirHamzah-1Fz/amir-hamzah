const menu = document.getElementById("hamburgerMenu");
const menuItem = document.getElementById("menuitemDrop");
const exitMenu = document.getElementById("exitMenu");
const exitMenuBox = document.getElementById("exitMenuBox");

menu.addEventListener("click", () => {
    menuItem.classList.remove("h-[0]");
    menuItem.classList.remove("py-[0]");
    menuItem.classList.add("h-[215px]");
    menuItem.classList.add("py-4");
    exitMenu.classList.remove("-top-12");
    exitMenu.classList.add("top-0");
    themeItems.classList.remove("h-[95px]");
    themeItems.classList.remove("py-2");
    themeItems.classList.add("h-[0px]");
    themeItems.classList.add("py-0");
})

exitMenuBox.addEventListener("click", function(){
    menuItem.classList.remove("h-[215px]");
    menuItem.classList.remove("py-4");
    exitMenu.classList.remove("top-0");
    exitMenu.classList.add("-top-12");
})

// MENU DROP END ============================================>

// THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");
const themeItems = document.getElementById("themeItems");
const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");

themeToggle.addEventListener("click", () => {
    themeItems.classList.remove("h-[0px]");
    themeItems.classList.remove("py-0");
    themeItems.classList.add("h-[95px]");
    themeItems.classList.add("py-2");
    menuItem.classList.remove("h-[215px]");
    menuItem.classList.remove("py-4");
    exitMenu.classList.remove("top-0");
    exitMenu.classList.add("-top-12");
})

themeItems.addEventListener("mouseleave", () => {
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
})

const unsupportedInfo = document.getElementById("unsupportedInfo");
const exitUnsupportedInfo = document.getElementById("exitUnsupportedInfo");

exitUnsupportedInfo.addEventListener("click", () => {
    unsupportedInfo.classList.remove("scale-[1]");
    unsupportedInfo.classList.add("scale-[0]");
    exitUnsupportedInfo.classList.remove("scale-[1]");
    exitUnsupportedInfo.classList.add("scale-[0]");
})