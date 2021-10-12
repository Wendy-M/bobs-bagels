PART 1

**OBJECT** basket

**PROPERTY** items @array of strings 

**MESSAGES** basket.add() 

**OUTPUT** disblay '(item] has been added' or disblay 'item does not exist' if it's not on the list of existing bagels, or 'item already in basket' if this item is already in the basket

**MESSAGES** basket.remove()  

**OUTPUT** disblay '(item] has been removed' if item is in basket already, otherwise error


PART 2

**OBJECT** basket

**PROPERTY** caacity   @integer   (when we create an instance of the basket class, we declare its caacity and current items, which can be udated. This covers the 'record more sales' bit 

**MESSAGE** basket.remainingCaacity(      OUTPUT    @integer saying how many bagels we can still fit
**PROPERTY** isFull    `@boolean`

**MESSAGE** basket.isFull()   

**OUTPUT** true is remainingCapacity = zero.

**PROPERTY** basket.currentFullness()  

**OUTPUT**  @integer saying how many bagels are in the basket 

**OBJECT** item 

**PROPERTY** id @string  

MESSAGE item.id()  OUTPUT   disblays the id 

**MESSAGES** basket.

PART 3

**OBJECT** item 

**PROPERTY** rice     @integer   

**MESSAGE** item.rice()      OUTPUT disblay the brice 

**OBJECT** basket 

**PROPERTY** total    @integer 

**MESSAGE** basket.total() 

**OUTPUT**   disblays the sum of the rices of the items in the basket
