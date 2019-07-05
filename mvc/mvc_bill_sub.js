
var Model={
    init:function(billAmt,serviceQual,numOfPeople)
    {
        this.billAmt=billAmt;
        this.serviceQual=serviceQual;
        this.numOfPeople=numOfPeople;
    },
    caltip:function()
    {
        var total = (this.billAmt * this.serviceQual) / this.numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //console.log(total);
    return total;
   
   
    }
};
var View = {
    notify: function(res) {
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = res;    
    }
 };
 var controller={
    model: Model,
    view :View,
    init: function (billAmt,serviceQual,numOfPeople) {
      this.model.init(billAmt,serviceQual,numOfPeople);
      return this;
    },
    caltip: function () {
     var res=this.model.caltip();
     // console.log(res);
     return res;
    },
    notify:function(res)
    {
        this.view.notify(res);
    }

 }

 //subscribers.push(View);


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
    controller.init(billAmt,serviceQual,numOfPeople);
    var res=controller.caltip();
    controller.notify(res);
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }