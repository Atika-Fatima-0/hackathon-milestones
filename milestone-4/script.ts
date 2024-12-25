document.addEventListener("DOMContentLoaded", function () {
  const addSkillBtn = document.getElementById(
    "addSkillBtn"
  ) as HTMLButtonElement | null;
  const removeSkillBtn = document.getElementById(
    "removeSkillBtn"
  ) as HTMLButtonElement | null;
  const additionalSkills = document.getElementById(
    "additionalSkills"
  ) as HTMLDivElement | null;

  if (addSkillBtn && additionalSkills) {
    addSkillBtn.addEventListener("click", () => {
      console.log("clicked");

      const newSkillBox = document.createElement("div");
      newSkillBox.classList.add("fieldBox");

      const newSkillLabel = document.createElement("label");
      newSkillLabel.textContent = "Additional Skill";

      const newSkillInput = document.createElement("input") as HTMLInputElement;
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
        additionalSkills.removeChild(
          additionalSkills.lastElementChild as HTMLElement
        );
      }
    });
  }

  const generateBtn = document.getElementById("btn");
  if (generateBtn) {
    generateBtn.addEventListener("click", () => {
      const personalForm = document.getElementById(
        "personalForm"
      ) as HTMLFormElement | null;
      const professionalForm = document.getElementById(
        "professionalForm"
      ) as HTMLFormElement | null;
      const output = document.getElementById("output");

      if (!personalForm || !professionalForm || !output) {
        console.error("One or more elements not found.");
        return;
      }

      const personalDataObj: { [key: string]: string } = {};
      const professionalDataObj: { [key: string]: string } = {};
      let skills: string[] = [];

      const personalData = new FormData(personalForm);
      const professionalData = new FormData(professionalForm);

      let allFieldsFilled = true;

      personalData.forEach((value, key) => {
        if (!value) {
          allFieldsFilled = false;
          alert(`Please fill out the ${key} field.`);
        }
        personalDataObj[key] = value as string;
      });

      professionalData.forEach((value, key) => {
        if (!value) {
          allFieldsFilled = false;
          alert(`Please fill out the ${key} field.`);
        }
        professionalDataObj[key] = value as string;
      });

      document.querySelectorAll("#additionalSkills input").forEach((input) => {
        if ((input as HTMLInputElement).value) {
          skills.push((input as HTMLInputElement).value);
        }
      });
      const initialSkills = professionalDataObj.skills
        ? professionalDataObj.skills.split(",")
        : [];
      skills.unshift(...initialSkills);

      if (allFieldsFilled) {
        const container2HTML = `
          <div class="container2">
            <div class="sideBar">
              <div class="profile">
                <img src="/images/dummy-profile.png" alt="Profile Picture" />
                <h2 class="para">${personalDataObj.fullName || ""}</h2>
                <input class="editable" type="text" value="${
                  personalDataObj.fullName || ""
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn" style="display:none;">Done</button>
                <div>
                <p class="para">${professionalDataObj.currentJob || ""}</p>
                <input class="editable" type="text" value="${
                  professionalDataObj.currentJob || ""
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn" style="display:none;">Done</button>
                </div>
              </div>
              <div class="contactInfo">
                <h3>CONTACT INFO</h3>
                <div class="field">
                  <p><i class="fas fa-phone"></i>Phone: <span class="para">${
                    personalDataObj.phone || ""
                  }</span></p>
                  <input class="editable" type="text" value="${
                    personalDataObj.phone || ""
                  }" readonly />
                  <button class="editBtn">Edit</button>
                  <button class="doneBtn" style="display:none;">Done</button>
                </div>
                <div class="field">
                  <p><i class="fas fa-envelope"></i>Email: <span class="para">${
                    personalDataObj.email || ""
                  }</span></p>
                  <input class="editable" type="email" value="${
                    personalDataObj.email || ""
                  }" readonly />
                  <button class="editBtn">Edit</button>
                  <button class="doneBtn" style="display:none;">Done</button>
                </div>
                <div class="field">
                  <p><i class="fas fa-map-marker-alt"></i>Address: <span class="para">${
                    personalDataObj.address || ""
                  }</span></p>
                  <input class="editable" type="text" value="${
                    personalDataObj.address || ""
                  }" readonly />
                  <button class="editBtn">Edit</button>
                  <button class="doneBtn" style="display:none;">Done</button>
                </div>
              </div>
              <div class="social">
                <h3>SOCIAL</h3>
                <div class="field">
                  <p><a class="facebook" href="${
                    personalDataObj.facebook || "#"
                  }">Facebook: <span class="para">${
          personalDataObj.facebook || ""
        }</span></a></p>
                  <input class="editable" type="text" value="${
                    personalDataObj.facebook || ""
                  }" readonly />
                  <button class="editBtn">Edit</button>
                  <button class="doneBtn" style="display:none;">Done</button>
                </div>
                <div class="field">
                  <p><a class="linkedin" href="${
                    personalDataObj.linkedin || "#"
                  }">LinkedIn: <span class="para">${
          personalDataObj.linkedin || ""
        }</span></a></p>
                  <input class="editable" type="text" value="${
                    personalDataObj.linkedin || ""
                  }" readonly />
                  <button class="editBtn">Edit</button>
                  <button class="doneBtn" style="display:none;">Done</button>
                </div>
              </div>
            </div>
            <div class="mainContent">
              <div class="about">
                <h3>Objective</h3>
                <p class="para">${professionalDataObj.Objective || ""}</p>
                <input class="editable" type="text" value="${
                  professionalDataObj.Objective || ""
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn" style="display:none;">Done</button>
              </div>
              <div>
                <h3>Current Job</h3>
                <p class="para">${professionalDataObj.currentJob || ""} at ${
          professionalDataObj.company || ""
        }</p>
                <input class="editable" type="text" value="${
                  professionalDataObj.currentJob || ""
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn" style="display:none;">Done</button>
              </div>
              <div>
                <h3>Experience</h3>
                <p class="para">${
                  professionalDataObj.experience || ""
                } years</p>
                <input class="editable" type="text" value="${
                  professionalDataObj.experience || ""
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn" style="display:none;">Done</button>
              </div>
              <div>
                <h3>Skills</h3>
                <p class="para">${skills.join(", ")}</p>
                <input class="editable" type="text" value="${skills.join(
                  ", "
                )}" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn" style="display:none;">Done</button>
              </div>
              <div>
                <h3>Education</h3>
                <p class="para">${
                  professionalDataObj.education || "Not provided"
                }</p>
                <input class="editable" type="text" value="${
                  professionalDataObj.education || "Not provided"
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn" style="display:none;">Done</button>
              </div>
              <div>
                <h3>Certifications</h3>
                <p class="para">${
                  professionalDataObj.certifications || "Not provided"
                }</p>
                <input class="editable" type="text" value="${
                  professionalDataObj.certifications || "Not provided"
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn" style="display:none;">Done</button>
              </div>
            </div>
          </div>`;

        document.body.innerHTML = container2HTML;

        document.querySelectorAll(".editBtn").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const button = e.target as HTMLButtonElement;
            const parentDiv = button.closest(".field") || button.parentElement;
            const para = parentDiv?.querySelector(
              ".para"
            ) as HTMLParagraphElement | null;
            const input = parentDiv?.querySelector(
              ".editable"
            ) as HTMLInputElement | null;
            const doneBtn = parentDiv?.querySelector(
              ".doneBtn"
            ) as HTMLButtonElement | null;

            if (input && para && doneBtn) {
              para.style.display = "none";
              (btn as HTMLButtonElement).style.display = "none";
              input.style.display = "block";
              doneBtn.style.display = "block";
              input.readOnly = false;
              input.focus();
            }
          });
        });

        document.querySelectorAll(".doneBtn").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const button = e.target as HTMLButtonElement;
            const parentDiv = button.closest(".field") || button.parentElement;
            const para = parentDiv?.querySelector(
              ".para"
            ) as HTMLParagraphElement | null;
            const input = parentDiv?.querySelector(
              ".editable"
            ) as HTMLInputElement | null;
            const doneBtn = parentDiv?.querySelector(
              ".doneBtn"
            ) as HTMLButtonElement | null;
            const editBtn = parentDiv?.querySelector(
              ".editBtn"
            ) as HTMLButtonElement | null;

            if (input && para && doneBtn) {
              para.textContent = input.value;
              para.style.display = "block";
              (editBtn as HTMLButtonElement).style.display = "block";
              input.style.display = "none";
              doneBtn.style.display = "none";
              input.readOnly = true;
            }
          });
        });
      } else {
        output.innerHTML = `<p class="warning">Please fill out all fields.</p>`;
      }
    });
  }
});
