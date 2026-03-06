// ------ Global elements selection and declared data ------
const body = document.querySelector("body");

const from = document.getElementById("application_form");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[- ]\s*)?|0?)?[6-9]\d{9}$/;
const numberPattern = /^[0-9]+$/;

let eduCounter = 0;
let workCounter = 0;

// ------ Fieldset elements by id ------
const basicInfo = document.getElementById("basic_info");
const education = document.getElementById("education");
const work = document.getElementById("work");
const languages = document.getElementById("languages");
const technologies = document.getElementById("technologies");
const reference = document.getElementById("reference");
const preference = document.getElementById("preference");

// ------ Basic Info Input elements by id ------
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const male = document.getElementById("male");
const female = document.getElementById("female");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const designation = document.getElementById("designation");
const address = document.getElementById("address");
const city = document.getElementById("city");
const zipcode = document.getElementById("zipcode");
const relation = document.getElementById("relation");
const state = document.getElementById("state");

// ------ References input elements by id ------
const refName = document.getElementById("ref_name");
const refContact = document.getElementById("ref_contact");
const refRelation = document.getElementById("ref_relation");

// ------ Preferences input elements by id ------
const notice = document.getElementById("notice");
const prefLocation = document.getElementById("location");
const department = document.getElementById("department");
const expected = document.getElementById("expected");
const current = document.getElementById("current");

// ------ Function to check the event of submission of the form and validate------
from.addEventListener("submit", (event) => {
  event.preventDefault();
  const fromData = new FormData(event.target);
  const dataObj = Object.fromEntries(fromData.entries());

  // Condition to check the radion is selected or not
  const gender = Object.entries(dataObj).some(
    ([k, v]) => k == "gender" && v == "on",
  );
  if (!gender) checkRadio();
  console.log(dataObj);

  // --- Validation of the basic information ---
  validateLength(fname, dataObj.fname);
  validateLength(lname, dataObj.lname);
  validateLength(dob, dataObj.dob);
  validateLength(email, dataObj.email);
  validateLength(phone, dataObj.phone);
  validateLength(designation, dataObj.designation);
  validateLength(relation, dataObj.relation);
  validateLength(address, dataObj.address);
  validateLength(city, dataObj.city);
  validateLength(state, dataObj.state);
  validateLength(zipcode, dataObj.zipcode);
  validateNumber(zipcode, dataObj.zipcode);

  // --- Validation of the reference details ---
  validateLength(refName, dataObj.ref_name);
  validateLength(refContact, dataObj.ref_contact);
  validateLength(refRelation, dataObj.ref_relation);

  // --- Validation of the preference details ---
  validateLength(notice, dataObj.notice);
  validateNumber(notice, dataObj.notice);
  validateLength(prefLocation, dataObj.location);
  validateLength(department, dataObj.department);
  validateLength(expected, dataObj.expected);
  validateNumber(expected, dataObj.expected);
  validateLength(current, dataObj.current);
  validateNumber(current, dataObj.current);

  // --- Validation of the education details ---
  for (let i = 1; i <= eduCounter; i++) {
    let elementCourse = document.getElementById(`course${eduCounter}`);
    validateEducation(elementCourse, dataObj[`course${eduCounter}`]);

    let elementBoard = document.getElementById(`board${eduCounter}`);
    validateEducation(elementBoard, dataObj[`course${eduCounter}`]);

    let elementPassYear = document.getElementById(`pass_year${eduCounter}`);
    validateEducation(elementPassYear, dataObj[`course${eduCounter}`]);

    let elementPercent = document.getElementById(`percent${eduCounter}`);
    validateEducation(elementPercent, dataObj[`course${eduCounter}`]);
  }

  // --- Validation of the work details ---
  for (let i = 1; i <= workCounter; i++) {
    let elementCompany = document.getElementById(`company${workCounter}`);
    validateWork(elementCompany, dataObj[`company${workCounter}`]);

    let elementFromDate = document.getElementById(`from_date${workCounter}`);
    validateWork(elementFromDate, dataObj[`from_date${workCounter}`]);

    let elementToDate = document.getElementById(`to_date${workCounter}`);
    validateWork(elementToDate, dataObj[`to_date${workCounter}`]);

    let elementPackage = document.getElementById(`package${workCounter}`);
    validateWork(elementPackage, dataObj[`package${workCounter}`]);

    let elementReason = document.getElementById(`reason${workCounter}`);
    validateWork(elementReason, dataObj[`reason${workCounter}`]);

    let elementWorkRefName = document.getElementById(
      `work_ref_name${workCounter}`,
    );
    validateWork(elementWorkRefName, dataObj[`work_ref_name${workCounter}`]);

    let elementWorkRefNumber = document.getElementById(
      `work_ref_number${workCounter}`,
    );
    validateWork(
      elementWorkRefNumber,
      dataObj[`work_ref_number${workCounter}`],
    );
  }
});

// ------ Generalized function to validate the length of inputs and verify regex of phone and mail------
function validateLength(element, dataStr) {
  // document.getElementById("submit").disabled = true;
  // -- Condition to check empty string and regex for phone and numeber
  if (!dataStr || !dataStr.trim()) {
    element.style.border = "2px solid #fe6a5f";
  } else {
    if (element.id == "email") {
      let validEmail = emailRegex.test(dataStr);
      if (!validEmail) element.style.border = "2px solid #fe6a5f";
    } else if (element.id == "phone" || element.id == "ref_contact") {
      let validPhone = phoneRegex.test(dataStr);
      if (!validPhone) element.style.border = "2px solid #fe6a5f";
    }
  }

  // event for change to moniter the modified elements and show error
  element.addEventListener("change", () => {
    element.style.border = "1px solid #dddddd";
    if (element.value == "") {
      element.style.border = "2px solid #fe6a5f";
    }
  });
}

// ------ Function to validate the numbers if present ------
function validateNumber(element, dataStr) {
  if (!dataStr || !dataStr.trim()) {
    element.style.border = "2px solid #fe6a5f";
  } else {
    if (!numberPattern.test(dataStr)) {
      element.style.border = "2px solid #fe6a5f";
    }
  }

  element.addEventListener("change", () => {
    element.style.border = "1px solid #dddddd";
    if (element.value == "") {
      element.style.border = "2px solid #fe6a5f";
    }
  });
}

// ------ Function to check that the radio button for gender is selected ------
function checkRadio() {
  document.getElementById("gender_lable").style.color = "#fe6a5f";

  gender.addEventListener("click", () => {
    document.getElementById("gender_lable").style.color = "#000";
  });
}

// ------ Function to check the data of the languages known ------
const hindiCheck = document.getElementById("hindi")
const gujaratiCheck = document.getElementById("gujrati")
const englishCheck = document.getElementById("english")

function checkLanguage (element, i) {
  document.getElementById(`speak${i}`).disabled = true
  document.getElementById(`write${i}`).disabled = true
  document.getElementById(`read${i}`).disabled = true

  element.addEventListener("change", (event) => {
    if (event.target.checked) {
      document.getElementById(`speak${i}`).disabled = false
      document.getElementById(`write${i}`).disabled = false
      document.getElementById(`read${i}`).disabled = false
    } else {
      document.getElementById(`speak${i}`).disabled = true
      document.getElementById(`speak${i}`).checked = false

      document.getElementById(`write${i}`).disabled = true
      document.getElementById(`write${i}`).checked = false

      document.getElementById(`read${i}`).disabled = true
      document.getElementById(`read${i}`).checked = false
    }
  })
}

// ------ Function to check the data of the technologies known ------
const jsCheck = document.getElementById("js");
const nodeCheck = document.getElementById("node");
const reactCheck = document.getElementById("react")
const pythonCheck = document.getElementById("python")
const sqlCheck = document.getElementById("sql")
function checkData(element, i) {
    // initially radio buttons are disabled
    document.getElementById(`beginner${i}`).disabled = true;
    document.getElementById(`intermediate${i}`).disabled = true;
    document.getElementById(`advenced${i}`).disabled = true;
    
    // event to moniter and handle checkbox and radio
    element.addEventListener("change", (event) => {
      if (event.target.checked) {
        document.getElementById(`beginner${i}`).disabled = false;
        document.getElementById(`intermediate${i}`).disabled = false;
        document.getElementById(`advenced${i}`).disabled = false;
      } else {
        document.getElementById(`beginner${i}`).disabled = true;
        document.getElementById(`beginner${i}`).checked = false;
        document.getElementById(`intermediate${i}`).disabled = true;
        document.getElementById(`intermediate${i}`).checked = false;
        document.getElementById(`advenced${i}`).disabled = true;
        document.getElementById(`advenced${i}`).checked = false;
      }
    });
  }
checkData(jsCheck, 1);
checkData(nodeCheck, 2);
checkData(reactCheck,3);
checkData(pythonCheck, 4);
checkData(sqlCheck, 5);

// ------ Function to add new record for the education detials ------
document.getElementById("add_edu").addEventListener("click", (event) => {
  eduCounter++;
  const eduRecordContainer = document.createElement("div");
  eduRecordContainer.setAttribute("id", `edu_record${eduCounter}`);
  eduRecordContainer.classList.add("edu_record");

  // - Creation of the title element and generating the title dynamically -
  const recordTitle = document.createElement("h3");

  recordTitle.setAttribute("id", `record_title${eduCounter}`);

  switch (eduCounter) {
    case 1:
      recordTitle.innerText = "Enter SSC record";
      break;
    case 2:
      recordTitle.innerText = "Enter HSC record";
      break;
      eduCounter++;
    case 3:
      recordTitle.innerText = "Enter Graduation record";
      break;
    case 4:
      recordTitle.innerText = "Enter Post Graduation record";
      break;
    case 5:
      recordTitle.innerText = "Enter PhD record";
      break;

    default:
      alert("No more records to add, Max limit reached!");
      break;
  }

  // - Appending the inputs and title
  eduRecordContainer.innerHTML = `<h3 id="record_title">${recordTitle.innerText}</h3>
  <div class="input_fields" id="input_fields">
              <div class="input-container">
                <label for="course${eduCounter}">Course</label>
                <input
                  type="text"
                  name="course${eduCounter}"
                  id="course${eduCounter}"
                  placeholder="Ex: I.T."
                />
              </div>

              <div class="input-container">
                <label for="board${eduCounter}">Name of the Board</label>
                <input type="text" name="board${eduCounter}" id="board${eduCounter}" placeholder="GSEB" />
              </div>

              <div class="input-container">
                <label for="pass_year${eduCounter}">Passing Year</label>
                <input
                  type="text"
                  name="pass_year${eduCounter}"
                  id="pass_year${eduCounter}"
                  placeholder="Ex: 2020"
                />
              </div>

              <div class="input-container">
                <label for="percent${eduCounter}">Percentage</label>
                <input
                  type="text"
                  name="percent${eduCounter}"
                  id="percent${eduCounter}"
                  placeholder="Ex: 80"
                />
              </div>
            </div>`;

  education.appendChild(eduRecordContainer);
});

// ------ Function to remove the latest added edu record ------
document.getElementById("rem_edu").addEventListener("click", () => {
  if (eduCounter == 0) {
    alert("No records to remove, Add a new record");
    return;
  }

  document.getElementById(`edu_record${eduCounter}`).replaceChildren();
  eduCounter--;
});

// ------ Funtion to add the work record dynamically ------
document.getElementById("add_work").addEventListener("click", () => {
  workCounter++;

  const workRecordContainer = document.createElement("div");
  workRecordContainer.setAttribute("id", `work_record${workCounter}`);
  workRecordContainer.classList.add("work_record");

  // - Appending the inputs
  workRecordContainer.innerHTML = ` <div class="company_to_from_package">
              <div class="input-container">
                <label for="company${workCounter}">Company Name</label>
                <input
                  type="text"
                  name="company${workCounter}"
                  id="company${workCounter}"
                  placeholder="Company Name"
                />
              </div>
              <div class="input-container">
                <label for="from_date${workCounter}">Starting Date</label>
                <input
                  type="date"
                  name="from_date${workCounter}"
                  id="from_date${workCounter}"
                  min="2005-01-01"
                  max="2025-12-31"
                />
              </div>
              <div class="input-container">
                <label for="from_date${workCounter}">Ending Date</label>
                <input
                  type="date"
                  name="to_date${workCounter}"
                  id="to_date${workCounter}"
                  min="2005-01-01"
                  max="2026-01-31"
                />
              </div>
              <div class="input-container">
                <label for="package${workCounter}">Annual Package (Lakhs)</label>
                <input
                  type="text"
                  name="package${workCounter}"
                  id="package${workCounter}"
                  placeholder="Ex : 1.00"
                />
              </div>
            </div>
            <div class="reason_contact_name">
              <div class="input-container">
                <label for="reason${workCounter}">Reason to Leave</label>
                <input
                  type="text"
                  name="reason${workCounter}"
                  id="reason${workCounter}"
                  placeholder="Leave Reason"
                />
              </div>

              <div class="input-container">
                <label for="work_ref_name${workCounter}">Refrence Contact Name</label>
                <input
                  type="text"
                  name="work_ref_name${workCounter}"
                  id="work_ref_name${workCounter}"
                  placeholder="Jon Doe"
                />
              </div>

              <div class="input-container">
                <label for="work_ref_number${workCounter}">Refrence Contact Number</label>
                <input
                  type="text"
                  name="work_ref_number${workCounter}"
                  id="work_ref_number${workCounter}"
                  placeholder="Ex: 0123456789"
                />
              </div>
            </div>`;

  work.appendChild(workRecordContainer);

  validateEducation();
});

// ------ Function to remove the latest added work record ------
document.getElementById("rem_work").addEventListener("click", () => {
  if (workCounter == 0) {
    alert("No more records to delete!");
    return;
  }

  document.getElementById(`work_record${workCounter}`).style.border = "none";
  document.getElementById(`work_record${workCounter}`).replaceChildren();
  workCounter--;
});

// ------ Function to validate the dynamic added education records ------
function validateEducation(element, dataStr) {
  if (eduCounter > 0) {
    if (!dataStr || !dataStr.trim()) {
      element.style.border = "2px solid #fe6a5f";
    }
  }
}

// ------ Function to validate the dynamically added work records ------
function validateWork(element, dataStr) {
  if (workCounter > 0) {
    if (!dataStr || !dataStr.trim()) {
      element.style.border = "2px solid #fe6a5f";
    }

    for (let i = 1; i <= workCounter; i++) {
      if (element.id == `work_ref_number${workCounter}`) {
        let validPhone = phoneRegex.test(dataStr);
        if (!validPhone) {
          element.style.border = "2px solid #fe6a5f";
          alert("invalid numbner");
        }
      }
    }
  }
}
