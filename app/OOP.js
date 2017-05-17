function Laptop(name, color, memory, dimension, operatingSystem){
        
    this.name = name;
    this.color = color;
    this.memory = memory;
    this.dimension = dimension;
    this.operatingSystem = operatingSystem;
       
    this.cost = 70000;
}
     
Laptop.prototype.increaseCost = function(amount){
    if(typeof amount==="number"){     
        if(amount <= (this.cost/2)){ 
            this.cost += amount;
        }
        else{
            throw new Error("Amount must be less than 50% of the current Cost");
        }
    }
    else{
        throw new Error("Amount to add must be a number");
    }
}
       
Laptop.prototype.getCost = function(){
    return this.cost;
}
         
Laptop.prototype.setOperatingSystem = function(newOperatingSystem){
    this.operatingSystem = newOperatingSystem;
}
       
Laptop.prototype.getOperatingSystem = function(){
    return this.operatingSystem;
}
   
Laptop.prototype.memoryUpgrade = function(newMemory){
    if(typeof memory ==="number"){
        this.memory = newMemory;
    }
    else{
        throw new Error("Only RAM size can be upgraded");
    }
}
    
function Hp(name, color, memory, dimension, OperatingSystem){
    Laptop.call(this,name,color,memory,dimension,OperatingSystem);  
    this.Battery = 1;        
    this.cost = 60000;
}

Hp.prototype = Object.create(Laptop.prototype);
   
Hp.prototype.nosBattery = function(howMany){
    if(typeof howMany === "number"){
        this.Battery += howMany;
    }
    else{
        throw new Error("The argument must be a number");
    }
}   

Hp.prototype.increaseCost = function(amount){
    if(typeof amount==="number"){
        if(amount<=(this.cost/5)){
            this.cost += amount;
        }
        else{
            throw new Error("Amount must be less than 20% of the current Cost");
        }
    }
    else {
        throw new Error("Amount must be a number");
    }
}

//Example
let hp = new Laptop('Hp');
hp.name
