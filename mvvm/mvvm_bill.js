

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
var Viewc = {
  //control:controller,
  initv:function (billAmt,serviceQual,numOfPeople) {
   
    presenter.initc(billAmt,serviceQual,numOfPeople);
    
  },
 notify:function()
  {var res=presenter.caltip();
//var res=presenter.caltip();
document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = res; 
  },
    
 };
 
 var presenter={
    model: Model,
    view :Viewc,
    initc: function (billAmt,serviceQual,numOfPeople) {
      this.model.init(billAmt,serviceQual,numOfPeople);
      return this;
    },
    caltip: function () {
     var res=this.model.caltip();
     // console.log(res);
     return res;
    },
   
    

 }
var viewmodel={
    constructor(viewc)
    {
        this.Viewc=null
    },
    changeview:function(viewc)
    {
        this.Viewc=viewc;
    },
    initv:function(billAmt,serviceQual,numOfPeople) {
   
        this.Viewc.initv(billAmt,serviceQual,numOfPeople);
    },
    notify:function()
  {this.Viewc.notify();
  }
    
}
 
//there are multiple views

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
    viewmodel.changeview(Viewc);
    viewmodel.initv(billAmt,serviceQual,numOfPeople);
    
    //controller.init(billAmt,serviceQual,numOfPeople);
   // var res=controller.caltip();
   viewmodel.notify();
    
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }