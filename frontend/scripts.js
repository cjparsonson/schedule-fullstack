// frontend/scripts.js
console.log("Everything connected fine to scripts.js");


// Point to employee-list
const employeeList = document.getElementById("employee-list");

// Test fetch
fetch("http://localhost:3000/api/employees")
    .then(response => {
        console.log("The node application responded");
        return response.json();
    }).then(data => {
        console.log("Employee data received");
        console.log(data);
        // Clear the employee list
        employeeList.innerHTML = "";
        // Populate the employee list
        employeeData = data[0];
        const li = document.createElement("li");
        li.textContent = `${employeeData.employee_id} - ${employeeData.name}`;
        employeeList.appendChild(li);
    });
