class oldtip
{
    constructor()
    {
        
    
    this.tipold=function(billAmt,serviceQual,numOfPeople)
    {//console.log(billAmt);
        var total = (billAmt * serviceQual) / numOfPeople;
        //round to two decimal places
        total = Math.round(total * 100) / 100;
        //next line allows us to always have two digits after decimal point
        total = total.toFixed(2);
        //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
   // return total;
    
};
    }
}
class newtip
{
    constructor()
    {
    
    this.tipnew=function(billAmt,serviceQual,numOfPeople)
    {console.log(serviceQual);
        var serviceQualn=parseFloat(serviceQual)+0.1;
        console.log(serviceQualn);
        var total = (3*(billAmt * serviceQualn)) / numOfPeople;
        //round to two decimal places
        total = Math.round(total * 100) / 100;
        //next line allows us to always have two digits after decimal point
        total = total.toFixed(2);
        //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    return total;
    };
}

}
class tipadapter
{
    constructor()
    {
        const newtipob=new newtip();
        //newtipob.tipnew(billAmt,serviceQual,numOfPeople);
        this.tipold=function(billAmt,serviceQual,numOfPeople)
        { //console.log("hel");
          return newtipob.tipnew(billAmt,serviceQual,numOfPeople);
        };
    }
}

function calculateTip()
{ var billAmt = document.getElementById("billamt").value;
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
const tipadapterob=new tipadapter();
tipadapterob.tipold(billAmt,serviceQual,numOfPeople)
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
  }

