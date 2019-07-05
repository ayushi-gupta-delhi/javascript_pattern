class autoclass
{
    autofill()

    {var billamt="1000";
    var serviceQual="0.2";
    var numOfPeople="2";
        document.getElementById("billamt").value=billamt;
        document.getElementById("serviceQual").value=serviceQual;
        document.getElementById("peopleamt").value=numOfPeople;


    }
}
class calres{
    constructor(billamt,serviceQual,numOfPeople)
    {
        this.billamt=billamt;
        this.serviceQual=serviceQual;
        this.numOfPeople=numOfPeople;
    }
    calculate()
    {
        var total = (this.billamt * this.serviceQual) / this.numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    }
}

function auto(){
    alert("default values are taken")
    var t=new autoclass();
    t.autofill();
}
function calculateTip()
{
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
    var cr=new calres(billAmt,serviceQual,numOfPeople);
    cr.calculate();
}

window.setTimeout(auto(),3000);
  window.onload=function (){
    //document.getElementById("billamt").innerHTML="1000";

    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
   
    //document.getElementById("autofill").onclick = function() {
     //   auto();
    
     // };
      document.getElementById("calculate").onclick = function() {
        calculateTip();
    
      };
    }

  
 