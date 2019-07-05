class tipfactory
{
    constructor()
    {
        this.createtipclass=function(billAmt,serviceQual,numOfPeople)
        {let tipclass
            if(billAmt<10000 && billAmt>8000)tipclass=new goodtip(billAmt,serviceQual,numOfPeople);
             else if(billAmt<8000 && billAmt>5000)tipclass=new modtip(billAmt,serviceQual,numOfPeople);
          
             return tipclass;
        };

        
        
    }
}
class goodtip
{
constructor(billAmt,serviceQual,numOfPeople)
{
    this.billAmt=billAmt;
    this.serviceQual=serviceQual;
    this.numOfPeople=numOfPeople;

this.calc1tip=function()
{
    var total = (3*(this.billAmt * this.serviceQual))/ this.numOfPeople;
    //round to two decimal places
    total = Math.round(total * 10000) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
   
};
}
}
class modtip
{
constructor(billAmt,serviceQual,numOfPeople)
{
    this.billAmt=billAmt;
    this.serviceQual=serviceQual;
    this.numOfPeople=numOfPeople;

this.calc2tip=function()
{console.log(this.billAmt);
    console.log(this.serviceQual);
    console.log(this.numOfPeople);
    var total = (this.billAmt * this.serviceQual)/ this.numOfPeople;
    //round to two decimal places
    total = Math.round(total * 10000) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip2").innerHTML = total;
   
};
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
const factory=new tipfactory();
const good=factory.createtipclass(9000,serviceQual,numOfPeople);
const modp=factory.createtipclass(6000,serviceQual,numOfPeople);
console.log(modp);
good.calc1tip();
modp.calc2tip();
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }

