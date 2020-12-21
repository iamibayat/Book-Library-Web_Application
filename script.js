//array containing book objects {title: '', author: ''}
let Books = [];




/*Check localStorage for books */
if(window.localStorage.getItem('Books'))
{
  Books = JSON.parse(window.localStorage.getItem('Books'))
}





/*Check if 'books' is empty and show/hide relevant message */ 
if(Books.length == 0)
{
	$("#book_empty").show()
}
else
{
	$("#book_empty").hide()	
}




/*If books is not empty, populate view with book details in #list 
Also if there is any previous Books item stored it will be displayed in the list view*/
if(Books.length != 0)
{
	for(let i=0; i<Books.length; i++)
	{
		let each_item1 = $("<li>").text(Books[i].title + "  -  " + Books[i].author)
		$("#book_list").append(each_item1)
	}
}





/*Clicking the 'Add a book' button should reveal the form */
$("#book_add").click(function(){
	$("#book_inputform").show()
})






/* On ADD button click, ensure the input fields contain values, 
   then add the book to HTML view also save updated books array to localStorage 
*/
$("#book_submit").click(function(){
	let var_title = $("#book_title").val()
	let var_author = $("#book_author").val()

	if(var_title && var_author)
	{
		//just displaying the items in page
		let each_item2 = $("<li>").text(var_title + "  -  " + var_author)
		$("#book_list").append(each_item2)

		//here we can store the input items in local storage also 
		Books.push({title:var_title, author:var_author})
		window.localStorage.setItem("Books", JSON.stringify(Books))
	}
	else
	{
		alert("Book item fields cannot be empty.")
	}

})