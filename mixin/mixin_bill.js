var tip={
    caltip:function()
{
var total = (this.billAmtc * this.serviceQualc) / this.numOfPeoplec;
//round to two decimal places
total = Math.round(total * 100) / 100;
//next line allows us to always have two digits after decimal point
total = total.toFixed(2);
//Display the tip
document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total;
   
    
}
}
var billAmtc={
    initb:function(billAmt)
    {
        this.billAmtc=billAmt
        console.log(this.billAmtc);
        return this.billAmtc;
    }

}
var serviceQualc={
    inits:function(serviceQual)
    {
        this.serviceQualc=serviceQual;
        return this.serviceQualc;
    }
}
var numOfPeoplec={
    initn:function(numOfPeople)
    {
        this.numOfPeoplec=numOfPeople;
        return this.numOfPeoplec;
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
  
    Object.assign(tip,billAmtc,serviceQualc,numOfPeoplec);
    var bill=tip.initb(billAmt);
    var service= tip.inits(serviceQual);
    var people= tip.initn(numOfPeople);
    console.log(tip);
    tip.caltip();
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }