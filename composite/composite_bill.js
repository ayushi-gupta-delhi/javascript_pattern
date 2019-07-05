class component
{
    constructor(name,value)
    {
        this.name=name;
        this.value=value;
    }
gettype()
{
    return this.gettype;
}
    getNodeName()
    {
        return this.name;
    }
    getNodeValue(){
        return this.value;
    }
    addChild(component)
    {}
    getChildbyName(componentname)
    {}
    noOfChildren(){}
    getChildbyIndex(index){}
    static treetraverse(root)
    {
        let tree='';
        function traverse(node,indent=0)
        {
            tree += `${'--'.repeat(indent)}${node.getNodeName()}${node.getNodeValue()}\n`;
      indent++;
      for (let i = 0, length = node.noOfChildren(); i < length; i++) {
        traverse(node.getChildByIndex(i), indent);
        }
    }
    traverse(root);
    return tree;
}
}
class single extends component{
    constructor(name,value)
    {
        super(name,value);
        this.type='single';
    }
gettype()
{
    return this.type;
}
noofChildren()
{
    return 0;
}
}
class composite extends component{
    constructor(name,value)
    {
        super(name,value);
        this.type='composite';
        this.children=[];

    }
    gettype()
    {
        return this.type;
    }
    addChild(component)
    {
        this.children=[...this.children,component];
    }
    getChildByName(componentName) {
        if( this.children.find(component => component.name === componentName))
        return component.value;
      }
    
      getChildByIndex(index) {
        return this.children[index];
      }
    
      noOfChildren() {
        return this.children.length;
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
  
    //Calculate tip
    var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total;
const tree = new composite('total',total);
tree.addChild(new single('billamt',billAmt));
const right = new composite('servicequal',serviceQual);
tree.addChild(right);
right.addChild(new single('oustanding',0.30));
right.addChild(new single('good',0.20));
right.addChild(new single('ok',0.15));
right.addChild(new single('bad',0.10));
right.addChild(new single('terrible',0.05));
tree.addChild(new single('num_of_people',numOfPeople));


console.log(component.treetraverse(tree));
  
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
