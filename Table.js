var selectedRow = null

function onSubmit() {
	 if (validate()) {
     var formData = readFormData();
     if (selectedRow == null)
     insertNewRecord(formData);
 else
 	updateRecord(formData)
     resetForm();
 }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullname").value;
    formData["Domain"] = document.getElementById("Domain").value;
    formData["Company"] = document.getElementById("Company").value;
    formData["EmployeeID"] = document.getElementById("EmployeeID").value;
    formData["emailID"] = document.getElementById("emailID").value;
    formData["Phone"] = document.getElementById("Phone").value;
    formData["City"] = document.getElementById("City").value;
    return formData;
}

function insertNewRecord(data) {

    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Domain;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Company;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.EmployeeID;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.emailID;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.Phone;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = data.City;
    cell6 = newRow.insertCell(7);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm()
 {
	document.getElementById("fullname").value = "";
	document.getElementById("Domain").value = "";
	document.getElementById("Company").value = "";
	document.getElementById("EmployeeID").value = "";
	document.getElementById("emailID").value = "";
	document.getElementById("Phone").value = "";
	document.getElementById("City").value = "";
    selectedRow = null;
}
function onEdit(td) {
      selectedRow = td.parentElement.parentElement;
      document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
      document.getElementById("Domain").value = selectedRow.cells[1].innerHTML;
      document.getElementById("Company").value = selectedRow.cells[2].innerHTML;
      document.getElementById("EmployeeID").value = selectedRow.cells[3].innerHTML;
      document.getElementById("emailID").value = selectedRow.cells[4].innerHTML;
      document.getElementById("Phone").value = selectedRow.cells[5].innerHTML;
      document.getElementById("City").value = selectedRow.cells[6].innerHTML;

}
function updateRecord(formData) {
	selectedRow.cells[0].innerHTML = formData.fullName;
	selectedRow.cells[1].innerHTML = formData.Domain;
	selectedRow.cells[2].innerHTML = formData.Company;
	selectedRow.cells[3].innerHTML = formData.EmployeeID;
	selectedRow.cells[4].innerHTML = formData.emailID;
	selectedRow.cells[5].innerHTML = formData.Phone;
	selectedRow.cells[6].innerHTML = formData.City;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullname").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}