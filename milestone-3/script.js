"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const addSkillBtn = document.getElementById("addSkillBtn");
    const removeSkillBtn = document.getElementById("removeSkillBtn");
    const additionalSkills = document.getElementById("additionalSkills");
    if (addSkillBtn && additionalSkills) {
        addSkillBtn.addEventListener("click", () => {
            console.log("clicked");
            const newSkillBox = document.createElement("div");
            newSkillBox.classList.add("fieldBox");
            const newSkillLabel = document.createElement("label");
            newSkillLabel.textContent = "Additional Skill";
            const newSkillInput = document.createElement("input");
            newSkillInput.name = "additionalSkill";
            newSkillInput.placeholder = "Enter additional skill";
            newSkillInput.required = true;
            newSkillBox.appendChild(newSkillLabel);
            newSkillBox.appendChild(newSkillInput);
            additionalSkills.appendChild(newSkillBox);
        });
    }
    if (removeSkillBtn && additionalSkills) {
        removeSkillBtn.addEventListener("click", () => {
            if (additionalSkills.children.length > 0) {
                additionalSkills.removeChild(additionalSkills.lastElementChild);
            }
        });
    }
    const generateBtn = document.getElementById("btn");
    if (generateBtn) {
        generateBtn.addEventListener("click", () => {
            const personalForm = document.getElementById("personalForm");
            const professionalForm = document.getElementById("professionalForm");
            const output = document.getElementById("output");
            if (!personalForm || !professionalForm || !output) {
                console.error("One or more elements not found.");
                return;
            }
            const personalDataObj = {};
            const professionalDataObj = {};
            let skills = [];
            const personalData = new FormData(personalForm);
            const professionalData = new FormData(professionalForm);
            let allFieldsFilled = true;
            personalData.forEach((value, key) => {
                if (!value) {
                    allFieldsFilled = false;
                    alert(`Please fill out the ${key} field.`);
                }
                personalDataObj[key] = value;
            });
            professionalData.forEach((value, key) => {
                if (!value) {
                    allFieldsFilled = false;
                    alert(`Please fill out the ${key} field.`);
                }
                professionalDataObj[key] = value;
            });
            document.querySelectorAll("#additionalSkills input").forEach((input) => {
                if (input.value) {
                    skills.push(input.value);
                }
            });
            const initialSkills = professionalDataObj.skills
                ? professionalDataObj.skills.split(",")
                : [];
            skills.unshift(...initialSkills);
            if (allFieldsFilled) {
                document.body.innerHTML = `
         <div class="container2">
      <div class="sideBar">
        <div class="profile">
          <div class="profile">
            <img src="/images/dummy-profile.png" alt="Profile Picture" />
            <h2>${personalDataObj.fullName || ""}</h2>
            <p>${professionalDataObj.currentJob || ""}</p>
          </div>
        </div>
          <div class="contactInfo">
          <h3>CONTACT INFO</h3>
          <p><i class="fas fa-phone"></i>Phone: ${personalDataObj.phone || ""}</p>
          <p><i class="fas fa-envelope"></i>Email: ${personalDataObj.email || ""}</p>
          <p><i class="fas fa-map-marker-alt"></i>Address: ${personalDataObj.address || ""}</p>
        </div>
        <div class="social">
          <h3>SOCIAL</h3>
          <ul>
            <li><a class="facebook" href="${personalDataObj.facebook || "#"}">Facebook: ${personalDataObj.facebook || ""}</a></li>
            <li><a class="linkedin" href="${personalDataObj.linkedin || "#"}">LinkedIn: ${personalDataObj.linkedin || ""}</a></li>
          </ul>
        </div>
      </div>
  
      <div class="mainContent">
        <div class="about">
          <h3>Objective</h3>
          <p>${professionalDataObj.Objective || ""}</p>
        </div>
       
        <div>
          <h3>Current Job</h3>
          <p>${professionalDataObj.currentJob || ""} at ${professionalDataObj.company || ""}</p>
        </div>
        <div>
          <h3>Experience</h3>
          <p>${professionalDataObj.experience || ""} years</p>
        </div>
        <div>
          <h3>Skills</h3>
          <p>${skills.join(", ")}</p>
        </div>
        <div>
          <h3>Education</h3>
          <p>${professionalDataObj.education || "Not provided"}</p>
        </div>
        <div>
          <h3>Certifications</h3>
          <p>${professionalDataObj.certifications || "Not provided"}</p>
        </div>
      </div>
    </div>`;
            }
            else {
                output.innerHTML = `<p class="warning">Please fill out all fields.</p>`;
            }
        });
    }
});
