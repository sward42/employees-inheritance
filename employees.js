var Employee = function(){
	this.firstName = null;
	this.lastName = null;
	this.department = null;
};

Employee.prototype.setFirstName = function(Name){
	this.firstName = Name;
};
Employee.prototype.setLastName = function(Name){
	this.lastName = Name;
};



var Clinician = function(){
	this.title = "Clinician"
	this.field = null;
};
Clinician.prototype = new Employee();
Clinician.prototype.setField = function(newField){
	this.field = newField;
}


var Operations = function(){
	this.title = "Operations"
	this.area = null;
};
Operations.prototype = new Employee();
Operations.prototype.setArea = function(newArea){
	this.area = newArea;
}




var Department = function () {
	this.name = null;

};
Department.prototype.setDeptName = function(newDeptName){
	this.name = newDeptName
}

var FieldOffice = function(){
	this.name = "FieldOffice";
	this.city = null;
};
FieldOffice.prototype = new Department();
FieldOffice.prototype.setCity = function(newCity){
	this.city = newCity;
}

var Headquarters = function(){
	this.name = "Headquarters";

};
Headquarters.prototype = new Department();




var Employee01 = new Clinician();
Employee01.setFirstName("Mary");
Employee01.setLastName("Jones");
Employee01.setField("Psychology");

var Employee01Dept = new Headquarters();

Employee01.department = Employee01Dept;

console.log("Employee01", Employee01); 
console.log(Employee01.firstName + " " + Employee01.lastName + " works in " + Employee01.department.name + " as a " +
Employee01.title + " in " + Employee01.field + ".");


var Employee02 = new Operations();
Employee02.setFirstName("John");
Employee02.setLastName("Martins");
Employee02.setArea("Security");

var Employee02Dept = new Headquarters();

Employee02.department = Employee02Dept;

console.log("Employee02", Employee02);
console.log(Employee02.firstName + " " + Employee02.lastName + " works in " + Employee02.department.name + " in " +
Employee02.title + " in " + Employee02.area + ".");



var Employee03 = new Clinician();
Employee03.setFirstName("Megan");
Employee03.setLastName("Lujambio");
Employee03.setField("Orthopedics");

var Employee03Dept = new FieldOffice();
Employee03Dept.setCity("Dallas");

Employee03.department = Employee03Dept;

console.log("Employee03", Employee03);
console.log(Employee03.firstName + " " + Employee03.lastName + " works in our " + Employee03.department.name + " in "+ Employee03.department.city + " as a " +
Employee03.title + " in " + Employee03.field + ".");


var Employee04 = new Operations();
Employee04.setFirstName("Arthur");
Employee04.setLastName("Bommel");
Employee04.setArea("Revenue");

var Employee04Dept = new FieldOffice();
Employee04Dept.setCity("San Francisco");

Employee04.department = Employee04Dept;

console.log("Employee04", Employee04);
console.log(Employee04.firstName + " " + Employee04.lastName + " works in our " + Employee04.department.name + " in "+ Employee04.department.city + " in " +
Employee04.title + " in " + Employee04.area + ".");







