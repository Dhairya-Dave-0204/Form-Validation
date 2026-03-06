// ------ Sample format for the form submission without any validations ------
/*
  {fname: '', lname: '', dob: '', email: '', phone: '', …}
address: ""
board: ""
city: ""
company: ""
course: ""
current: ""
designation: ""
dob: ""
email: ""
expected: ""
fname: ""
from_date: ""
lname: ""
notice: ""
package: ""
pass_year: ""
percent: ""
phone: ""
reason: ""
ref_contact: ""
ref_name: ""
ref_relation: ""
to_date: ""
zipcode: ""

[[Prototype]]: Object
*/

/* 
// ------ Education detials input elements by id ------
const course = document.getElementById("course");
const board = document.getElementById("board");
const passYear = document.getElementById("pass_year");
const percent = document.getElementById("percent");

// ------ Work experience input elements by id ------
const company = document.getElementById("company");
const fromDate = document.getElementById("from_date");
const toDate = document.getElementById("to_date");
const package = document.getElementById("package");
const reason = document.getElementById("reason");
const workRefNumber = document.getElementById("work_ref_number");
const workRefName = document.getElementById("work_ref_name");





  <div class="edu_record" id="edu_record">
            <h3 id="record_title">The title of the record</h3>

            <div class="input_fields" id="input_fields">
              <div class="input-container">
                <label for="board">Course</label>
                <input
                  type="text"
                  name="course"
                  id="course"
                  placeholder="Ex: I.T."
                />
              </div>

              <div class="input-container">
                <label for="board">Name of the Board</label>
                <input type="text" name="board" id="board" placeholder="GSEB" />
              </div>

              <div class="input-container">
                <label for="pass_year">Passing Year</label>
                <input
                  type="text"
                  name="pass_year"
                  id="pass_year"
                  placeholder="Ex: 2020"
                />
              </div>

              <div class="input-container">
                <label for="percent">Percentage</label>
                <input
                  type="text"
                  name="percent"
                  id="percent"
                  placeholder="Ex: 80"
                />
              </div>
            </div>
          </div>
*/



/* 
<div class="work_record" id="work_record">
            <div class="company_to_from_package">
              <div class="input-container">
                <label for="company">Company Name</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Company Name"
                />
              </div>
              <div class="input-container">
                <label for="from_date">Starting Date</label>
                <input
                  type="date"
                  name="from_date"
                  id="from_date"
                  min="2005-01-01"
                  max="2025-12-31"
                />
              </div>
              <div class="input-container">
                <label for="from_date">Ending Date</label>
                <input
                  type="date"
                  name="to_date"
                  id="to_date"
                  min="2005-01-01"
                  max="2026-01-31"
                />
              </div>
              <div class="input-container">
                <label for="package">Annual Package (Lakhs)</label>
                <input
                  type="text"
                  name="package"
                  id="package"
                  placeholder="Ex : 1.00"
                />
              </div>
            </div>
            <div class="reason_contact_name">
              <div class="input-container">
                <label for="reason">Reason to Leave</label>
                <input
                  type="text"
                  name="reason"
                  id="reason"
                  placeholder="Leave Reason"
                />
              </div>

              <div class="input-container">
                <label for="work_ref_name">Refrence Contact Name</label>
                <input
                  type="text"
                  name="work_ref_name"
                  id="work_ref_name"
                  placeholder="Jon Doe"
                />
              </div>

              <div class="input-container">
                <label for="work_ref_number">Refrence Contact Number</label>
                <input
                  type="text"
                  name="work_ref_number"
                  id="work_ref_number"
                  placeholder="Ex: 0123456789"
                />
              </div>
            </div>
          </div>
*/