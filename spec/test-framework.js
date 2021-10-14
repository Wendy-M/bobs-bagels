const Basket =
    require('../src/basket.js');

let basket;

// Arrange 
basket = new Basket(0);
expectedOutput = false;

//Act 
actualOutput =
    basket.isBasketFull();
    reduceNumberOfItems();

// Assert 
result =
    assertEquals(expectedOutput, actualOutput);
    
    
    
    