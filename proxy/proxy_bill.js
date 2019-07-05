function Origtip(){
    this.getvalue=function(value)
    {
        if(value=="billAmt")
        {
            return 1000;
        }
        if(value=="serviceQual")
        {
            return 0.20;
        }
        if(value=="numOfpeople")
        {
            return 4;
        }
    };

}
function tipproxy(){
    var orig=new Origtip();
    var valuecache={};
    
       this. getvalue=function(value)
        {if(!valuecache[value])
            { console.log(orig.getvalue(value));
                valuecache[value]=orig.getvalue(value);
            }
          return valuecache[value];

        };
        this.getcount=function()
        {
            var count=0;
            for(var code in valuecache)
            {
                count++;
            }
            return count;

        };
    }

function caltip()
{
    var valuein=new tipproxy();
    billAmtv=valuein.getvalue("billAmt");
    serviceQual=valuein.getvalue("serviceQual");
    numOfpeople=valuein.getvalue("numOfpeople");
    console.log(billAmt);
    var total = (billAmtv * serviceQual) / numOfpeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    document.getElementById("billAmt").innerHTML = billAmtv;
    document.getElementById("servicequal").innerHTML = serviceQual;
    document.getElementById("numberofpeople").innerHTML = numOfpeople;

}
document.getElementById("calculate").onclick = function() {
    caltip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }

