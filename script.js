// Navigation between pages
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".container").forEach((page) => (page.style.display = "none"));
    document.querySelector(link.getAttribute("href")).style.display = "block";
  });
});

// Handle Form Submission
const form = document.getElementById("admission-form");
const recordsTable = document.getElementById("records-table").querySelector("tbody");
const records = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    fatherName: document.getElementById("father-name").value,
    dob: document.getElementById("dob").value,
    address: document.getElementById("address").value,
    course: document.getElementById("course").value,
    marks: document.getElementById("marks").value,
    year: document.getElementById("year").value,
    subject: document.getElementById("subject").value,
  };
  records.push(data);
  updateTable();
  form.reset();
});

// Update Records Table
function updateTable() {
  recordsTable.innerHTML = "";
  records.sort((a, b) => b.marks - a.marks || a.subject.localeCompare(b.subject));
  records.forEach((record) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${record.name}</td>
      <td>${record.fatherName}</td>
      <td>${record.dob}</td>
      <td>${record.address}</td>
      <td>${record.course}</td>
      <td>${record.marks}</td>
      <td>${record.year}</td>
      <td>${record.subject}</td>
    `;
    recordsTable.appendChild(row);
  });
}

// Search Functionality
document.getElementById("search").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  [...recordsTable.children].forEach((row) => {
    row.style.display = row.textContent.toLowerCase().includes(searchTerm) ? "" : "none";
  });
});
