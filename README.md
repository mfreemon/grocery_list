# grocery_list
ui buildouts of mock shopping list

# Project consists of two Grocery List UI that are very similar but different in how the users input is retrieved

The first UI consists of an accordion style grocerlist. An item can be added to the dom through the input field. Once the item is added, the user has the options to add commment via the 'Comments' tab. After clicking the tab, the item acts as an accordion revealing input and select field to enter text/comments associated with that Item. Once the 'Post' button is clicked, that item is then appended to the bottom of the comments input section. Subsequent additions of comments follow suit.

Upon a second click of the 'Comments tab', the accordion toggles back to its original postion, only displaying the itme to buy.

The second UI follow much of the same layout as UI-1. The main difference being that the users comments are captured via a dropdown modal that displays once the user clicks 'Add Comment'. Once the 'Post' button is clicked, the comment is then appened(initially hidded) to the corresponding item. 

Both UIs have the ability to strike through items,via the checkbox, that have been 'bought' or delete items that are no longer desired or have been bought as well, via the delete button on the far right-hand side of each 'item div'.


# CSS/Responsive
I used Sass as the CSS preprocessor. I have used Less in the past for other projects and professionally but simply decided to use Sass because of greater familiarity  of runnging commands from the command line.

For this project,  I decided to use Foundation.css. I'm new to foundation but have used boostrap in the past. Figured I would try something new and so far, I can see my self using it in the future. Foundation is fairly lightweight and east to implement, once you become accostomed to some things.

For the most part, everything is responsive but still working out some spacing kinks on the app as I become more familiar with Foundation.

#Things not implemented...
