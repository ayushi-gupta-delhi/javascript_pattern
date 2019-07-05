class tip
{
    constructor(billAmt,serviceQual,numOfPeople)
    {
        this.billAmt=billAmt;
        this.serviceQual=serviceQual;
        this.numOfPeople=numOfPeople;
    }
}
class best extends tip{
    constructor(billAmt,serviceQual,numOfPeople)

    { super(billAmt,serviceQual,numOfPeople)
     
    }
res()
{
    var total = (3*(this.billAmt * this.serviceQual))/ this.numOfPeople;
    //round to two decimal places
    total = Math.round(total * 10000) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
   // document.getElementById("tip2").innerHTML = total;
    return total;
}
    }

class good extends tip{
   
      constructor(billAmt,serviceQual,numOfPeople)
        { 
            super(billAmt,serviceQual,numOfPeople)
           
        }

res()
{
    var total = (2*(this.billAmt * this.serviceQual))/ this.numOfPeople;
    //round to two decimal places
    total = Math.round(total * 10000) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
 //   document.getElementById("tip").innerHTML = total;
    document.getElementById("tip2").innerHTML = total;
    return total;
}}
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
    const besttip=new best(billAmt,serviceQual,numOfPeople)
    besttip.res();
    const goodtip=new good(billAmt,serviceQual,numOfPeople)
     goodtip.res();
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }

