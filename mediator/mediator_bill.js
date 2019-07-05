class Employee
{
    constructor(name,value)
    {
        this.name=name;
        this.value= value;
        this.manager=null;
    }
    reportsto(manager) {
		this.manager = manager;
		console.log(manager);
	}

	getvalue() {
		if (this.manager) return this.manager.getvalue(this);
		return null;
	}
}
class Manager
{
    constructor()
    {console.log("manager");
        this._employees=[];
    }
    reportsto(employee)
    {
        this._employees.push(employee);
        employee.reportsto(this);
    }
    getvalue(employee)
    {
        return this._employees.filter(empl => employee !== empl).map(empl => empl.value);
    }
}
function calculateTip(){
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
   
  
    //validate input
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
let m=new Manager();
let emp=new Employee("billAmt",billAmt);
let emp2=new Employee("servicequal",serviceQual);
let emp3=new Employee("numberofPeople",numOfPeople);
m.reportsto(emp);
m.reportsto(emp2)
m.reportsto(emp3)
let a=emp2.getvalue();
console.log("values of other employees");
console.log(a)
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
  }