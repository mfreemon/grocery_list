# grocery_list
ui buildouts of mock shopping list

# Project consists of two Grocery List UIs that are very similar but different in how the users input is retrieved

The first UI consists of an accordion style grocery list. An item can be added to the dom through the input field. Once the item is added, the user has the options to add a commment via the 'Comments' tab. After clicking the tab, the item acts as an accordion revealing input and select field to enter text/comments associated with that Item and the user associated with that Item. I did not add functionality to remove comment but could haves. Once the 'Post' button is clicked, that item is then appended to the bottom of the comments input section. Subsequent additions of comments follow suit. 

Upon a second click of the 'Comments tab', the accordion toggles back to its original postion, only displaying the itme to buy.



The second UI follows much of the same layout as UI-1. The main difference being that the users comments are captured via a dropdown modal that displays once the user clicks 'Add Comment'. Once the 'Post' button is clicked, the comment is then appened(initially hidded) to the corresponding item and the modal is dismissed. 

Both UIs have the ability to strike through those items,via the checkbox, that have been 'bought' or delete items that are no longer desired or have been bought as well, via the delete button on the far right-hand side of each 'item div'.


# CSS/Responsive
I used Sass as the CSS preprocessor. I have used Less in the past for other projects and professionally but simply decided to use Sass because of greater familiarity  of running commands from the command line.

For this project,  I decided to use Foundation.css as the CSS framework for prototyping. Though I'm more familiar with Twitter Boostrap, I figured I would try something new and so far, I can see my self using it in the future. Foundation is fairly lightweight and east to implement, once you become accostomed to some things.

For the most part, everything is responsive but still working out some spacing kinks on the app as I become more familiar with Foundation.

#Things not implemented...

I would typically use Require.js to optimize the page and manage depencies but given the that this is not a large application and has only one page and a maximum of four js files per ui, I did not implement require. Namespacing is another technique I use on large apps, but in this case, I didn't believe it to be necessary.

I wasn't really sure on how to implement some things based on the feature set desired without use of a server and some backend code..These are listed below.

	1. Ability to share list with other users
		- I understand the feature as requested but am unsure how to implement it without a backend and some sort of user login and management. On the wireframe and app I placed a 'share' symbol to callout a possible location where the user could click the icon an be presented some sort of modal that allowed them to share the list.
	2. Email the List.
		- Very similar to above, I placed an email symbol on the wireframe  and app to callout a where a user could email the someone but it seems to me that this would require an ajax call to a server and would be beyond the allowed frontend tools for this code challenge. 

