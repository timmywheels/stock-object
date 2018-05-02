//Objective: Take inputs from a user to create a stock object.
	
//Ticker, name, price, change, market cap

//Use constructor objects to build the object using the above information. Then, add the created object to a main object

var stocks = {
    
    stockList: [],
    
    stock: function(ticker, name, price, change, marketCap){
        
    	    this.ticker = ticker;
    	    this.name = name;
    	    this.price = price;
    	    this.change = change;
    	    this.marketCap = marketCap;
    	
    	document.getElementById('submit').addEventListener('click', function(e){
    	   e.preventDefault();//prevent default button behavior
    	   
    	   if(ticker == '' || name == '' || price == '' || change == '' || marketCap == '' ){//check if values are empty
    	       console.log('Please enter all required fields.');
    	   } else {
    	        stocks.displayStocks(); //display stockList on submit
    	   }
    	});
        
        if(ticker !== '' || name !== '' || price !== '' || change !== '' || marketCap !== '' ){//if all values aren't blank
    	stocks.stockList.push(this.ticker); //add new stock to stockList
        }
    	
    },
    
    displayStocks: function(){
        
        console.log(`My Portfolio: ${this.stockList}`); //display stockList
    },
    
};

var AMZN = new stocks.stock('AMZN', 'Amazon', 1000, 15, 800);
var FB = new stocks.stock('FB', 'Facebook', 200, 7, 300);


