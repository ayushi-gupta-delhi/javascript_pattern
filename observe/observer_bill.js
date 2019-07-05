class subject{
    constructor() {
        this._observers = [];
      }
    
      subscribe(observer) {
        this._observers.push(observer);
      }
    
      unsubscribe(observer) {
        this._observers = this._observers.filter(obs => observer !== obs);
      }
    
      fire(change) {
        this._observers.forEach(observer => {
          observer.update(change);
        });
      }

}
class Observer{
   
    constructor(billAmt,serviceQual,numOfPeople)
    {
        this.billAmt=billAmt;
        this.serviceQual=serviceQual;
        this.numOfPeople=numOfPeople;
    }
    update(change)
{var res;
    switch(change)
    {
        case '3*tip':
            res=this.calculate3tip();
            break;
        case '2*tip':
            res=this.calculate2tip();
            break;
        case '1*tip':
            res= this.calculatetip();
            break;       
    }
    return res;
}
calculate3tip()
{
    var total = (3*(this.billAmt * this.serviceQual) )/ this.numOfPeople;
    //round to two decimal places
    total = Math.round(total * 10000) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    document.getElementById("tip2").innerHTML = total;
    return total;
}
calculate2tip()
{
    var total = (2*(this.billAmt * this.serviceQual) )/ this.numOfPeople;
    //round to two decimal places
    total = Math.round(total * 10000) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    document.getElementById("tip2").innerHTML = total;
    return total;
}
calculatetip()
{
    var total = (this.billAmt * this.serviceQual)/ this.numOfPeople;
    //round to two decimal places
    total = Math.round(total * 10000) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    document.getElementById("tip2").innerHTML = total;
    return total;
}


}
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
const sub=new subject();
const obs1=new Observer(billAmt,serviceQual,numOfPeople);
const obs2=new Observer(billAmt,serviceQual,numOfPeople);
sub.subscribe(obs1);
sub.subscribe(obs2);
sub.fire('1*tip');
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }

