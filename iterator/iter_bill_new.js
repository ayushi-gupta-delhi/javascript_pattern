class serviceQualc
{
    constructor(serviceQual)
    {  
        this.serviceQual=serviceQual;
      
    }
    get()
    {
        return this.serviceQual;
    }

}
class caltip
{constructor()
    {
        this.initialvalue=[]
    }

 createvalues(serviceQual)
   { var cal=this.getvalue(serviceQual);
    if(cal)
    {
        return cal;
    }
    else

    {const newcal=new serviceQualc(serviceQual)   
     this.initialvalue.push(newcal);
     console.log(newcal);
        return newcal;
    }
  }

  getvalue(serviceQual) {
    return this.initialvalue.find(value => value.serviceQual === serviceQual);
  }
}
function calres(billAmt,serviceQual,numOfPeople)
    //Calculate tip
  {  var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
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
    var factory=new caltip();
//console.log(factory);
var cap=factory.createvalues(serviceQual);

console.log(cap);
calres(billAmt,cap.get(),numOfPeople)
}

document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }
