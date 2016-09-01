var Calculator = function() {
    this.total = 0;
    this.current = 0;
    this.operation = null;
    this.fractionExp = 0;
};

Calculator.prototype = {
    //    Add method for two numbers
    add: function() {
        this.getResult();
        this.operation = function(a, b) {
            return a + b;
        };
        this.setCurrent(0, "");
        this.fractionExp = 0;
        this.updateDisplay(this.total);
    },
    //    Subtract method for two numbers
    
    subtract: function() {
        this.getResult();
        this.operation = function(a, b) {
            return a - b;
        };
        this.setCurrent(0, "");
        this.fractionExp = 0; 
        this.updateDisplay(this.total);
    },
    //    Multiplication method for two numbers
    
    multiply: function() {
        this.getResult();
        this.operation = function(a, b) {
            return a * b;
        };
        this.setCurrent(0, "");
        this.fractionExp = 0;
        this.updateDisplay(this.total);
    },
    //    Division method for two numbers
    
    divide: function() {
        this.getResult();
        this.operation = function(a, b) {
            return a / b;
        };
        this.setCurrent(0, "");
        this.fractionExp = 0; 
        this.updateDisplay(this.total);
    },
    //    Clear method for clearing display without clearing old value
    
    clear: function() {
        this.setCurrent(0, "");
        this.fractionExp = 0; 
    },
    //    Clear method for clearing display with clearing old value
    
    allClear: function() {
        this.clear();
        this.total = 0;
        this.operation = null;
        console.log("total: " + this.total);
        this.fractionExp = 0; 
    },
    //    Get Result method for fetching result of operation
    
    getResult: function() {
        if (this.operation) {
            this.total = this.operation(this.total, this.current);
        } else {
            this.total = this.current;
        }
        
    },
    //    Get Number method for setting up initial value to be displayed
    
    getNumber: function(number) {
        if (this.fractionExp) {
            this.setCurrent(this.current + (number / Math.pow(10, this.fractionExp)));
            this.fractionExp = this.fractionExp + 1
        } else {            
            this.setCurrent((this.current * 10) + number);
        };
    
    },
    //    Point method for intializing fraction expression
    
    point: function() {
        this.fractionExp = 1;
    },
    //    Set Current method for updating numbers displayed on screen
    
    setCurrent: function(value, text) {
        this.current = value;
        this.updateDisplay(typeof text == "undefined" ? this.current : text);
    },
    //    Multiplication method for two numbers
    
    updateDisplay: function(value) {
        document.getElementById("display").innerHTML = value;
    }
};

var ScientificCalculator = function(){
    this.total = 0;
    this.current = 0;
    this.operation = null;
    this.fractionExp = 0;
    this.screen = document.getElementById("display").innerText;
    this.sine = function(){
        var screen = document.getElementById("display").innerText;
        var operation = Math.sin(screen);
        this.current = operation;
        this.updateDisplay(operation);
    };
    this.cos = function(){
        var screen = document.getElementById("display").innerText;
        var operation = Math.cos(screen);
        this.current = operation;
        this.updateDisplay(operation);
    };
    this.tan = function(){
        var screen = document.getElementById("display").innerText;
        var operation = Math.tan(screen);
        this.current = operation;
        this.updateDisplay(operation);
    };
    
    this.log = function(){
        var screen = document.getElementById("display").innerText;
        var operation = Math.log(screen);
        this.current = operation;
        this.updateDisplay(operation);
    };
};

var calc = new Calculator();
//Inheriting properties of Calculator's prototype into ScientificCalculator's prototype

ScientificCalculator.prototype = Object.create(Calculator.prototype);
calc = new ScientificCalculator();



var listelems = document.getElementsByTagName("li");

for (var i = 0; i < listelems.length; i++) {
    listelems[i].addEventListener('click', function(e){
    var raw = this.innerHTML;
    number = parseInt(raw, 10);
    if (isNaN(number)) { 
        switch (raw) {
        case "C":
            calc.clear();
            break;
        case "AC":
            calc.allClear();
            break;
        case "x":
            calc.multiply();
            break;
        case "/":
            calc.divide();
            break;
        case "+":
            calc.add();
            break;
        case "-":
            calc.subtract();
            break;
        case "=":
            calc.equals();
            break;
        case ".":
            calc.point();
            break;
        case ".":
            calc.point();
            break;
        case "sin":
            calc.sine();
            break;
        case "cos":
            calc.cos();
            break;
        case "tan":
            calc.tan();
            break;
        case "log":
            calc.log();
            break;
         }
    } 
    else {
        calc.getNumber(number);
    }

}, false)
                                
}

    