class calculatetip{
    constructor(billAmt,serviceQual,numOfPeople) {
		if (calculatetip.exists) {
			return calculatetip.instance;
		}
        this._billAmt = billAmt;
        this._serviceQual=serviceQual;
        this._numOfPeople=numOfPeople;
		calculatetip.instance = this;
		calculatetip.exists = true;
		return this;
}
getData() {
    return this._billAmt;
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
    var ctip=new calculatetip(billAmt,serviceQual,numOfPeople);
console.log(ctip.getData());
var ctip2=new calculatetip(billAmt,serviceQual,numOfPeople);
console.log(ctip2.getData());
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };
  window.onload=function(){
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    

  }

