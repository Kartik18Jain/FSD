let students = [];

const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");
const search = document.getElementById("search");


// ADD STUDENT
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("studentName").value;
    const roll = document.getElementById("rollNo").value;
    const course = document.getElementById("course").value;
    const marks = Number(document.getElementById("marks").value);

    const student = {
        name: name,
        roll: roll,
        course: course,
        marks: marks
    };

    students.push(student);

    form.reset();

    displayStudents();
});


// GET GRADE
function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }

    if (marks >= 80) {
        return "A";
    }

    if (marks >= 70) {
        return "B";
    }

    if (marks >= 60) {
        return "C";
    }

    if (marks >= 50) {
        return "D";
    }

    return "F";
}


// DISPLAY STUDENTS
function displayStudents(data = students) {

    table.innerHTML = "";

    data.forEach((student, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.roll}</td>

            <td>${student.name}</td>

            <td>${student.course}</td>

            <td>${student.marks}</td>

            <td>${getGrade(student.marks)}</td>

            <td>
                <button
                    class="edit-btn"
                    onclick="editStudent(${index})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });

    updateStats();
}


// DELETE STUDENT
function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}


// EDIT STUDENT
function editStudent(index) {

    const student = students[index];

    document.getElementById("studentName").value =
        student.name;

    document.getElementById("rollNo").value =
        student.roll;

    document.getElementById("course").value =
        student.course;

    document.getElementById("marks").value =
        student.marks;

    students.splice(index, 1);

    displayStudents();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// SEARCH STUDENTS
search.addEventListener("input", function () {

    const value = search.value.toLowerCase();

    const filtered = students.filter(student =>

        student.name
            .toLowerCase()
            .includes(value)

        ||

        student.roll
            .toString()
            .includes(value)
    );

    displayStudents(filtered);
});


// UPDATE STATISTICS
function updateStats() {

    document.getElementById("totalStudents").textContent =
        students.length;

    if (students.length === 0) {

        document.getElementById("averageMarks").textContent =
            "0";

        return;
    }

    const total = students.reduce(
        (sum, student) => sum + student.marks,
        0
    );

    const average = total / students.length;

    document.getElementById("averageMarks").textContent =
        average.toFixed(2);
}