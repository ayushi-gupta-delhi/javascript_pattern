//Calculate Tip
var calculateTipclass = (function () {
    
        var billAmt,serviceQual,numOfPeople;
       
      // var billAmt=100;
       //var serviceQual=20;
       //var numOfPeople=2;
        //var billAmt = document.getElementById("billamt").value;
        //var serviceQual = document.getElementById("serviceQual").value;
        //var numOfPeople = document.getElementById("peopleamt").value;
       
       set = function( billAmtp,serviceQualp,numOfPeoplep ) {
      billAmt=billAmtp;
      serviceQual=serviceQualp;
        numOfPeople=numOfPeoplep;
     //   console.log(billAmt);
        };
       
        return {
       
          // A public variable
        
       
          // A public function utilizing privates
       calres: function( billAmt,serviceQual,numOfPeople) {
             set(billAmt,serviceQual,numOfPeople);
       },
        caltipres:function(){
            var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
       }
        };
       
      })();

    //Calculate tip
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
    
   
       calculateTipclass.calres(billAmt,serviceQual,numOfPeople);
       calculateTipclass.caltipres();

   }
  
  
  
  //Hide the tip amount on load
  //document.getElementById("totalTip").style.display = "none";
  //document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }