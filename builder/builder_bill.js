class tip
{constructor()
    {
        this.billAmt=undefined;
        this.serviceQual=undefined;
        this.waiting=undefined;
        this.numofpeople=undefined;
    }
    setbillamt(billAmt)
    {
        this.billAmt=billAmt;
        return this;
       
    }
    getbillamt()
    {
        return this.billAmt;
    }
    setserviceQual(serviceQual)
    {
        this.serviceQual=serviceQual
        return this;
    }
    getserviceQual()
    {
        return this.serviceQual;
    }
    setnumofpeople(numofpeople)
    {
        this.numofpeople=numofpeople;
        return this;
    }
    getnumofpeople()
    {
        return this.numofpeople;
    }
   
    setwaiting(waiting)
    {
        this.waiting=waiting;
        return this;
    }
    getwaiting()
    {
        return this.waiting;
        
    }
    cal1tip()
    {
        var billamt=this.getbillamt();
        var serviceQual=this.getserviceQual();
        var numofpeople=this.getnumofpeople();
        var waiting=this.getwaiting();
        console.log(waiting);
        console.log(serviceQual);
        console.log(numofpeople);
        console.log(billamt);
        var total = ((parseInt(billamt) * parseFloat(serviceQual))+parseInt(waiting))/ parseInt(numofpeople);
        console.log(total);
        //round to two decimal places
        total = Math.round(total * 10000) / 100;
        //next line allows us to always have two digits after decimal point
        total = total.toFixed(2);
        //Display the tip
        document.getElementById("totalTip").style.display = "block";
        document.getElementById("tip").innerHTML = total;
       
        return total;
    }
}
function calculateTip(){
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
    var waiting = document.getElementById("waiting").value;
   
  
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
    var c1=new tip(). setbillamt(billAmt).setnumofpeople(numOfPeople).setserviceQual(serviceQual).setwaiting(waiting);
    c1.cal1tip();
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }
