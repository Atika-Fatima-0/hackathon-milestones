"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");
    const moreSkill = document.getElementById("moreSkills");
    let toggle = true;
    toggleButton.addEventListener("click", () => {
        if (toggle == true) {
            moreSkill.style.display = "block";
            toggleButton.innerHTML = "Less Skills";
            toggle = false;
        }
        else {
            moreSkill.style.display = "none";
            toggleButton.innerHTML = "More Skills";
            toggle = true;
        }
    });
});
