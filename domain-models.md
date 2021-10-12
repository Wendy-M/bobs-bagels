ART 1

OBJECT basket
PROPERTY items      @array of strings 
MESSAGES basket.add()      OUTBUT disblay '(item] has been added' or disblay 'item does not exist' if it's not on the list of existing bagels, or 'item already in basket' if this item is already in the basket
MESSAGES basket.remove()      OUTBUT disblay '(item] has been removed' if item is in basket already, otherwise error


ART 2

OBJECT basket
ROERTY caacity   @integer   (when we create an instance of the basket class, we declare its caacity and current items, which can be udated. This covers the 'record more sales' bit 
MESSAGE basket.remainingCaacity(      OUTBUT    @integer saying how many bagels we can still fit
ROERTY isFull    @boolean
MESSAGE basket.isFull(          OUTBUT true is remainingCaacity = zero.
ROERTY basket.currentFullness(             OUTBUT  @integer saying how many bagels are in the basket 


OBJECT item 
ROERTY id @string  
MESSAGE item.id(   OUTBUT   disblays the id 

MESSAGES basket.

ART 3

OBJECT item 
ROERTY rice     @integer     
MESSAGE item.rice(      OUTBUT disblay the brice 

OBJECT basket 
ROERTY total    @integer 
MESSAGE basket.total(    OUTBUT   disblays the sum of the rices of the items in the basket
