var module = (function() {
 
    var _private = {
        billAmt:0,
        serviceQual:0,
        numOfPeople:0,
        get:function()
        {
            console.log("billamt"+this.billAmt);
        },
        set:function(billAmt,serviceQual,numOfPeople)
        {
            this.billAmt=billAmt;
            this.serviceQual=serviceQual;
            this.numOfPeople=numOfPeople;
        },
        calculateres:function()
        {
            var total = (this.billAmt * this.serviceQual) / this.numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
        }
    };
 
    return {
 
        facade: function( args ) {
            _private.set(args.billAmt,args.serviceQual,args.numOfPeople)
               _private.get();
               if(args.calculateres)
               {
                   _private.calculateres();
               }
            }
    };
}());
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
    
 
// Outputs: "current value: 10" and "running"
module.facade( {calculateres: true, billAmt,serviceQual,numOfPeople} );
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }