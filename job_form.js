// ------ Global data decalration ------
const body = document.querySelector("body");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[- ]\s*)?|0?)?[6-9]\d{9}$/;
const numberPattern = /^[0-9]+$/;

let eduCounter = 0;
let workCounter = 0;

// --- Main containers ---
const form = document.getElementById("application_form");
const basicInfo = document.getElementById("basic_info");
const education = document.getElementById("education");
const work = document.getElementById("work");
const languages = document.getElementById("languages");
const technologies = document.getElementById("technologies");
const reference = document.getElementById("reference");
const preference = document.getElementById("preference");

// --- Basic info elements ---
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const dob = document.getElementById("dob");
const male = document.getElementById("male");
const female = document.getElementById("female");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const designation = document.getElementById("designation");
const relation = document.getElementById("relation");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zipcode = document.getElementById("zipcode");

// --- Reference elements ---
const refName = document.getElementById("ref_name");
const refContact = document.getElementById("ref_contact");
const refRelation = document.getElementById("ref_relation");

// --- Preference elements ---
const prefLocation = document.getElementById("location");
const notice = document.getElementById("notice");
const department = document.getElementById("department");
const expected = document.getElementById("expected");
const current = document.getElementById("current");

// ------ Function to show the error ------
function showError(element) {
  element.style.border = "2px solid #fe6a5f";
}

// ------ Function to clear the error ------
function clearError(element) {
  element.style.border = "1px solid #dddddd";
}

// ------ Function to clear error on change ------
function attachClearListener(element) {
  element.addEventListener("input", () => {
    clearError(element);
  });

  element.addEventListener("change", () => {
    clearError(element);
  });
}

// ------ Function to initialize the language section ------
function initializeLanguages() {
  const languageRecords = document.querySelectorAll(".language_record");
  languageRecords.forEach((record) => {
    const checkboxes = record.querySelectorAll("input[type='checkbox']");
    const languageCheckbox = checkboxes[0];
    const speak = checkboxes[1];
    const write = checkboxes[2];
    const read = checkboxes[3];

    // disable skills initially
    speak.disabled = true;
    write.disabled = true;
    read.disabled = true;

    languageCheckbox.addEventListener("change", () => {
      if (languageCheckbox.checked) {
        speak.disabled = false;
        write.disabled = false;
        read.disabled = false;
      } else {
        speak.disabled = true;
        write.disabled = true;
        read.disabled = true;
        speak.checked = false;
        write.checked = false;
        read.checked = false;
      }
    });
  });
}
initializeLanguages();

// ------ Function to initialize the technology section ------
function initializeTechnologies() {
  const techRecords = document.querySelectorAll(".tech_record");
  techRecords.forEach((record) => {
    const checkbox = record.querySelector("input[type='checkbox']");
    const radios = record.querySelectorAll("input[type='radio']");

    // disable radios initially
    radios.forEach((radio) => {
      radio.disabled = true;
    });

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        radios.forEach((radio) => {
          radio.disabled = false;
        });
      } else {
        radios.forEach((radio) => {
          radio.disabled = true;
          radio.checked = false;
        });
      }
    });
  });
}
initializeTechnologies();

// ------ Function to validate the required fields ------
function validateRequired(element) {
  const value = element.value;

  if (!value || value.trim() === "") {
    showError(element);
    return false;
  }

  clearError(element);
  return true;
}

// ------ Function to validate the email ------
function validateEmail(element) {
  const value = element.value.trim();

  if (!emailRegex.test(value)) {
    showError(element);
    return false;
  }

  clearError(element);
  return true;
}

// ------ Function to validate the phone ------
function validatePhone(element) {
  const value = element.value.trim();

  if (!phoneRegex.test(value)) {
    showError(element);
    return false;
  }

  clearError(element);
  return true;
}

// ------ Function to validate the number ------
function validateNumber(element) {
  const value = element.value.trim();

  if (!numberPattern.test(value)) {
    showError(element);
    return false;
  }

  clearError(element);
  return true;
}

// ------ Function to validate the radio button for gender ------
function validateRadio(name) {
  const radios = document.querySelectorAll(`input[name="${name}"]`);
  let isChecked = false;

  radios.forEach((radio) => {
    if (radio.checked) {
      isChecked = true;
    }
  });

  if (!isChecked) {
    document.getElementById("gender_label").style.color = "#fe6a5f";
    return false;
  }

  document.getElementById("gender_label").style.color = "#000";
  return true;
}

// ------ Function to validate the dates and range ------
function validateDateRange(startElement, endElement) {
  const startValue = startElement.value;
  const endValue = endElement.value;

  const startDate = new Date(startValue);
  const endDate = new Date(endValue);

  if (startDate > endDate) {
    showError(startElement);
    showError(endElement);
    return false;
  }

  clearError(startElement);
  clearError(endElement);
  return true;
}

// ------ Function to validate the basic info section ------
function validateBasicInfo() {
  let isValid = true;

  if (!validateRequired(fname)) isValid = false;
  if (!validateRequired(lname)) isValid = false;
  if (!validateRequired(dob)) isValid = false;
  if (!validateRadio("gender")) isValid = false;
  if (!validateRequired(email) || !validateEmail(email)) isValid = false;
  if (!validateRequired(phone) || !validatePhone(phone)) isValid = false;
  if (!validateRequired(designation)) isValid = false;
  if (!validateRequired(relation)) isValid = false;
  if (!validateRequired(address)) isValid = false;
  if (!validateRequired(city)) isValid = false;
  if (!validateRequired(state)) isValid = false;
  if (!validateRequired(zipcode) || !validateNumber(zipcode)) isValid = false;

  return isValid;
}

// ------ Function to validate the reference section ------
function validateReferences() {
  let isValid = true;

  if (!validateRequired(refName)) isValid = false;
  if (!validateRequired(refContact) || !validatePhone(refContact))
    isValid = false;
  if (!validateRequired(refRelation)) isValid = false;

  return isValid;
}

// ------ Function to validate the preference section ------
function validatePreferences() {
  let isValid = true;

  if (!validateRequired(prefLocation)) isValid = false;
  if (!validateRequired(notice) || !validateNumber(notice)) isValid = false;
  if (!validateRequired(department)) isValid = false;
  if (!validateRequired(expected) || !validateNumber(expected)) isValid = false;
  if (!validateRequired(current) || !validateNumber(current)) isValid = false;

  // Expected salary must be >= current salary
  const expectedValue = parseInt(expected.value.trim());
  const currentValue = parseInt(current.value.trim());
  if (!isNaN(expectedValue) && !isNaN(currentValue)) {
    if (expectedValue < currentValue) {
      showError(expected);
      showError(current);
      isValid = false;
    }
  }
  return isValid;
}

// ------ Function to check the validation of languages ------
function validateLanguages() {
  let isValid = true;

  const languageRecords = document.querySelectorAll(".language_record");
  languageRecords.forEach((record) => {
    const checkboxes = record.querySelectorAll("input[type='checkbox']");
    const language = checkboxes[0];
    const speak = checkboxes[1];
    const write = checkboxes[2];
    const read = checkboxes[3];

    if (language.checked) {
      if (!speak.checked && !write.checked && !read.checked) {
        showError(language);
        isValid = false;
      } else {
        clearError(language);
      }
    }
  });
  return isValid
}

// ------ Function to check the validation of technologies ------
function validateTechnologies() {
  let isValid = true;

  const techRecords = document.querySelectorAll(".tech_record");
  techRecords.forEach((record) => {
    const checkbox = record.querySelector("input[type='checkbox']");
    const radios = record.querySelectorAll("input[type='radio']");

    if (checkbox.checked) {
      let radioSelected = false;
      radios.forEach((radio) => {
        if (radio.checked) {
          radioSelected = true;
        }
      });

      if (!radioSelected) {
        showError(checkbox);
        isValid = false;
      } else {
        clearError(checkbox);
      }
    }
  });
  return isValid;
}

// ------ Function to check the validation of education ------
function validateEducation() {
  let isValid = true;

  for (let i = 1; i <= eduCounter; i++) {
    const course = document.getElementById(`course${i}`);
    const board = document.getElementById(`board${i}`);
    const passYear = document.getElementById(`pass_year${i}`);
    const percent = document.getElementById(`percent${i}`);

    if (!validateRequired(course)) isValid = false;
    if (!validateRequired(board)) isValid = false;
    if (!validateRequired(passYear) || !validateNumber(passYear))
      isValid = false;
    if (!validateRequired(percent) || !validateNumber(percent)) isValid = false;
  }
  return isValid;
}

// ------ Function to check the validation of work experience ------
function validateWork() {
  let isValid = true;

  for (let i = 1; i <= workCounter; i++) {
    const company = document.getElementById(`company${i}`);
    const fromDate = document.getElementById(`from_date${i}`);
    const toDate = document.getElementById(`to_date${i}`);
    const packageField = document.getElementById(`package${i}`);
    const reason = document.getElementById(`reason${i}`);
    const refName = document.getElementById(`work_ref_name${i}`);
    const refNumber = document.getElementById(`work_ref_number${i}`);

    if (!validateRequired(company)) isValid = false;
    if (!validateRequired(fromDate)) isValid = false;
    if (!validateRequired(toDate)) isValid = false;
    if (!validateRequired(packageField) || !validateNumber(packageField))
      isValid = false;
    if (!validateRequired(reason)) isValid = false;
    if (!validateRequired(refName)) isValid = false;
    if (!validateRequired(refNumber) || !validatePhone(refNumber))
      isValid = false;

    // Validate date range only if both dates exist
    if (fromDate.value && toDate.value) {
      if (!validateDateRange(fromDate, toDate)) {
        isValid = false;
      }
    }
  }
  return isValid;
}

// ------ Main function to check the validation of all section combined ------
function validateForm(event) {
  event.preventDefault();

  let isFormValid = true;

  if (!validateBasicInfo()) isFormValid = false;
  if (!validateReferences()) isFormValid = false;
  if (!validatePreferences()) isFormValid = false;
  if (!validateLanguages()) isFormValid = false;
  if (!validateTechnologies()) isFormValid = false;
  if (!validateEducation()) isFormValid = false;
  if (!validateWork()) isFormValid = false;

  if (isFormValid) {
    alert("Form submitted successfully!");
    const data = collectFormData();
    console.log("Form Data:", data);
  }
}
form.addEventListener("submit", validateForm);

// ------ Function to add education record -------
const addEduBtn = document.getElementById("add_edu");

const educationTitles = [
  "Enter SSC Record",
  "Enter HSC Record",
  "Enter Graduation Record",
  "Enter Post Graduation Record",
  "Enter PhD Record",
];

addEduBtn.addEventListener("click", () => {
  if (eduCounter >= 5) {
    alert("Maximum 5 education records allowed");
    return;
  }
  eduCounter++;

  const container = document.createElement("div");
  container.classList.add("edu_record");
  container.id = `edu_record${eduCounter}`;

  const title = educationTitles[eduCounter - 1];

  container.innerHTML = `
    <h3>${title}</h3>

    <div class="input_fields">

      <div class="input-container">
        <label for="course${eduCounter}">Course</label>
        <input type="text" id="course${eduCounter}" name="course${eduCounter}" placeholder="Ex: B.Tech">
      </div>

      <div class="input-container">
        <label for="board${eduCounter}">Board / University</label>
        <input type="text" id="board${eduCounter}" name="board${eduCounter}" placeholder="University name">
      </div>

      <div class="input-container">
        <label for="pass_year${eduCounter}">Passing Year</label>
        <input type="text" id="pass_year${eduCounter}" name="pass_year${eduCounter}" placeholder="Ex: 2020">
      </div>

      <div class="input-container">
        <label for="percent${eduCounter}">Percentage</label>
        <input type="text" id="percent${eduCounter}" name="percent${eduCounter}" placeholder="Ex: 80">
      </div>

    </div>
  `;

  education.appendChild(container);

  // attach error clearing listeners
  attachClearListener(document.getElementById(`course${eduCounter}`));
  attachClearListener(document.getElementById(`board${eduCounter}`));
  attachClearListener(document.getElementById(`pass_year${eduCounter}`));
  attachClearListener(document.getElementById(`percent${eduCounter}`));
});

// ------ Function to remove the latest added record ------
const removeEduBtn = document.getElementById("rem_edu");

removeEduBtn.addEventListener("click", () => {
  if (eduCounter === 0) {
    alert("No education records to remove");
    return;
  }

  const record = document.getElementById(`edu_record${eduCounter}`);
  record.remove();
  eduCounter--;
});

// ------ Function to add the work record ------
const addWorkBtn = document.getElementById("add_work");

addWorkBtn.addEventListener("click", () => {
  workCounter++;

  const container = document.createElement("div");
  container.classList.add("work_record");
  container.id = `work_record${workCounter}`;

  container.innerHTML = `
  <div class="company_to_from_package">

    <div class="input-container">
      <label for="company${workCounter}">Company Name</label>
      <input type="text" id="company${workCounter}" name="company${workCounter}" placeholder="Company Name">
    </div>

    <div class="input-container">
      <label for="from_date${workCounter}">Starting Date</label>
      <input type="date" id="from_date${workCounter}" name="from_date${workCounter}">
    </div>

    <div class="input-container">
      <label for="to_date${workCounter}">Ending Date</label>
      <input type="date" id="to_date${workCounter}" name="to_date${workCounter}">
    </div>

    <div class="input-container">
      <label for="package${workCounter}">Annual Package</label>
      <input type="text" id="package${workCounter}" name="package${workCounter}" placeholder="Ex: 5">
    </div>

  </div>


  <div class="reason_contact_name">

    <div class="input-container">
      <label for="reason${workCounter}">Reason to Leave</label>
      <input type="text" id="reason${workCounter}" name="reason${workCounter}" placeholder="Reason">
    </div>

    <div class="input-container">
      <label for="work_ref_name${workCounter}">Reference Contact Name</label>
      <input type="text" id="work_ref_name${workCounter}" name="work_ref_name${workCounter}" placeholder="Name">
    </div>

    <div class="input-container">
      <label for="work_ref_number${workCounter}">Reference Contact Number</label>
      <input type="text" id="work_ref_number${workCounter}" name="work_ref_number${workCounter}" placeholder="Phone">
    </div>

  </div>
  `;
  work.appendChild(container);

  // attach clear listeners
  attachClearListener(document.getElementById(`company${workCounter}`));
  attachClearListener(document.getElementById(`from_date${workCounter}`));
  attachClearListener(document.getElementById(`to_date${workCounter}`));
  attachClearListener(document.getElementById(`package${workCounter}`));
  attachClearListener(document.getElementById(`reason${workCounter}`));
  attachClearListener(document.getElementById(`work_ref_name${workCounter}`));
  attachClearListener(document.getElementById(`work_ref_number${workCounter}`));
});

// ------ Function to remove the latest added record ------
const removeWorkBtn = document.getElementById("rem_work");

removeWorkBtn.addEventListener("click", () => {
  if (workCounter === 0) {
    alert("No work records to remove");
    return;
  }

  const record = document.getElementById(`work_record${workCounter}`);
  record.remove();
  workCounter--;
});

// ------ Function to get all the form data upon submission ------
// ================= COLLECT FORM DATA =================

function collectFormData() {
  const formData = {
    personalInfo: {
      firstName: fname.value.trim(),
      lastName: lname.value.trim(),
      dob: dob.value,
      gender: document.querySelector('input[name="gender"]:checked')?.value || "",
      email: email.value.trim(),
      phone: phone.value.trim(),
      designation: designation.value.trim(),
      relationship: relation.value,
      address: address.value.trim(),
      city: city.value.trim(),
      state: state.value,
      zipcode: zipcode.value.trim()
    },

    references: {
      name: refName.value.trim(),
      contact: refContact.value.trim(),
      relation: refRelation.value.trim()
    },

    preferences: {
      location: prefLocation.value,
      noticePeriod: notice.value.trim(),
      department: department.value,
      expectedCTC: expected.value.trim(),
      currentCTC: current.value.trim()
    },

    languages: [],
    technologies: [],
    education: [],
    workExperience: []
  };

  // ---------- Languages ----------
  const languageRecords = document.querySelectorAll(".language_record");
  languageRecords.forEach(record => {
    const checkboxes = record.querySelectorAll("input[type='checkbox']");
    const language = checkboxes[0];
    const speak = checkboxes[1];
    const write = checkboxes[2];
    const read = checkboxes[3];

    if (language.checked) {
      formData.languages.push({
        language: language.id,
        speak: speak.checked,
        write: write.checked,
        read: read.checked
      });
    }
  });

  // ---------- Technologies ----------
  const techRecords = document.querySelectorAll(".tech_record");
  techRecords.forEach(record => {
    const checkbox = record.querySelector("input[type='checkbox']");
    const radios = record.querySelectorAll("input[type='radio']");

    if (checkbox.checked) {
      let level = "";
      radios.forEach(radio => {
        if (radio.checked) level = radio.nextElementSibling?.innerText || "selected";
      });

      formData.technologies.push({
        technology: checkbox.id,
        level: level
      });
    }
  });

  // ---------- Education ----------
  for (let i = 1; i <= eduCounter; i++) {
    formData.education.push({
      course: document.getElementById(`course${i}`).value.trim(),
      board: document.getElementById(`board${i}`).value.trim(),
      passingYear: document.getElementById(`pass_year${i}`).value.trim(),
      percentage: document.getElementById(`percent${i}`).value.trim()
    });
  }

  // ---------- Work Experience ----------
  for (let i = 1; i <= workCounter; i++) {
    formData.workExperience.push({
      company: document.getElementById(`company${i}`).value.trim(),
      fromDate: document.getElementById(`from_date${i}`).value,
      toDate: document.getElementById(`to_date${i}`).value,
      package: document.getElementById(`package${i}`).value.trim(),
      reason: document.getElementById(`reason${i}`).value.trim(),
      referenceName: document.getElementById(`work_ref_name${i}`).value.trim(),
      referenceNumber: document.getElementById(`work_ref_number${i}`).value.trim()
    });
  }

  return formData;
}