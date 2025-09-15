function getFormvalue(event) {
    //Write your code here
	event.preventDefault(); 
	let form=event.target;
	let firstName=form["fname"].value.trim();
	let lastName=form["lname"].value.trim();
	alert(firstName+" "+lastName);
}
