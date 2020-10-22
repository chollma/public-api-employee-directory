# Public API Requests

## Background
This project is meant to test my skills with asynchronous JavaScript. Utilizing the fetch API, the program processes a GET request that returns data for 12 random users from the United States. Iterating through this response object, the **generateCards** function creates the HTML for 12 user cards that are displayed on the page. It also adds an event listener to each parent card div to await a user's click. In the background, the HTML for a modal popup is generated but left void of data. 

A click action from a user on a calls the **pushData** function and sets the modal's hidden property to false. The **pushData** function is used to overwrite the innerHTML for each element in the modal. To do this successfully, there's also 2 utilities built in the clean the phone number and birthday data so that we can display it properly.

The **pushData** function has one more surprise. It adds an event listener to both the previous and next buttons that are displayed on screen for the user, with a conditional statement that prevents a user from going beyond the contraints of the data.
  
## Running the Project

## Credits

- Inspired by [Team Treehouse](https://teamtreehouse.com/)
- Built by Cooper Hollmaier 
[GitHub](https://github.com/chollma) 
[Twitter](https://twitter.com/cooperhollmaier) 
[Website](https://cooperhollmaier.com)


