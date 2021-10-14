class Basket  {
    //properties
    numberOfItems;
    
    constructor(numberOfItems, capacity) {
        // set values for object instance 
        this.numberOfItems = numberOfItems
        this.capacity = capacity
    }
    // messages 
    isBasketFull() { }
    removeItem() { }
    addItem() { }
}

module.exports = Basket;