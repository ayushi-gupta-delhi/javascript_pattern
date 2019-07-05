function caltip(billAmt,serviceQual,numOfPeople)
{
    this.billAmt=function(){ this.billAmt=billAmt;
        return this.billAmt};
    this.serviceQual=function(){this.serviceQual=serviceQual;
        return this.serviceQual};
    this.numOfPeople=function(){this.numOfPeople=numOfPeople;
        return this.numOfPeople};

}
function calculateres(obj)
        {//console.log(obj.billAmt());
          //  console.log(obj.numOfPeople());
           var b=obj.serviceQual();
    var total = (obj.billAmt() *b) / obj.numOfPeople();
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
        }
function chbillamt(caltipob)
    {
      var ba=caltipob.billAmt();
      //console.log(ba);
      caltipob.billAmt = function(){ba=parseInt(ba)+50
        return ba;
       
    };
}
    

    
    function chnpeople(caltiopob)
    {
        var cp=caltiopob.numOfPeople();
        caltiopob.numOfPeople=function(){
        return parseInt(cp)+2;
    };
}
    function display(obj)
    {
        console.log(obj.billAmt());
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
        
  
    var ct=new caltip( billAmt,serviceQual,numOfPeople );
    chbillamt(ct);
    
    chnpeople(ct);
    //display(ct);
    calculateres(ct);
    }
    document.getElementById("calculate").onclick = function() {
        calculateTip();
      
      };
      window.onload=function(){
        document.getElementById("totalTip").style.display = "none";
        document.getElementById("each").style.display = "none";
        
    
      }


