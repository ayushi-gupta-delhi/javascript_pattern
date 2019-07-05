class value{
    constructor(billAmt,serviceQual,numOfPeople)
    {
        this.billAmt=billAmt;
        this.serviceQual=serviceQual;
        this.numOfPeople=numOfPeople;
    }
}

class caltip
{constructor()
    {
        this.initialvalue=[]
    }

 createvalues(billAmt,serviceQual,numOfPeople)
   { var cal=this.getvalue(billAmt,serviceQual,numOfPeople);
    if(cal)
    {
        return cal;
    }
    else

    {const newcal=new value(billAmt,serviceQual,numOfPeople)   
     this.initialvalue.push(newcal);
     console.log(newcal);
        return newcal;
    }
  }

  getvalue(billAmt,serviceQual,numOfPeople) {
    return this.initialvalue.find(value => value.billAmt === billAmt);
  }
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
    var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

var factory=new caltip();
console.log(factory);
var cap=factory.createvalues(billAmt,serviceQual,numOfPeople);
var cap1=factory.createvalues("1000","0.20","2");
if(cap==cap1)
{
    console.log("same instance");
}
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }