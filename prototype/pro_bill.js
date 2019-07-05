class tip
{
    tipset(billAmt,serviceQual,numOfPeople){
        this.billAmt=billAmt;
        this.serviceQual=serviceQual;
        this.numOfPeople=numOfPeople;
    
    }
}
function display(obj)
{
    console.log(obj.billAmt);

}
function calc1tip(obj)
{
    var total = (obj.billAmt * obj.serviceQual) / obj.numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
function calc2tip(obj)
{
    var total = (obj.billAmt * obj.serviceQual) / obj.numOfPeople;
    //round to two decimal places
    total = Math.round(total * 10000) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip2").innerHTML = total;
}
function calculateTip() {
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
//calculateTipclass.set(billAmt,serviceQual,numOfPeople);
//display(calculateTipclass);
var t=new tip();
t.tipset(billAmt,serviceQual,numOfPeople)
var c1=Object.create(t);
//display(c1);
//console.log(c1.name);

var c2=Object.create(t);
//display(c2);
//console.log(c2.name);

//c2.set(billAmt,serviceQual,numOfPeople);
calc1tip(c1);
calc2tip(c2);
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }