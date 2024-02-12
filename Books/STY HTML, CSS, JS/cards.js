/*	document.hr.style.height="10";	*/
document.write("<h1>Here are some addresses.</h1>")
function printCard() {
	var name_line = "<hr><strong>Name: </strong>" + this.name + "<br>\n";
	var email_line = "<strong>Email: </strong>" + this.email + "<br>\n";
	var address_line = "<strong>Address: </strong>" + this.address + "<br>\n";
	var phone_line = "<strong>Phone: </strong>" + this.phone + "<br>\n";
	document.write(name_line, email_line, address_line, phone_line);
}
function Card(name,email,address,phone) {
	this.name = name;
	this.email = email;
	this.address = address;
	this.phone = phone;
	this.printCard = printCard;
}
var dad = new Card("Daddy/Mommy", "mwv@ymail.com/robynvine@ymail.com", "53 Bluberry Hill RD.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Winterport ME. 04496", "525-1000");
var kayl = new Card("Kaylee Leavitt", "No email", "195 Mudgett RD.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Newburgh ME. 04444", "234-7271");
var jay = new Card("Jaydon Hersey", "No email", "73 Huges DR.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hampden ME. 04444", "299-4321");
var grandparents1 = new Card("Gramie/Grampie", "jivine@bellsouth.com", "196 Fuller RD.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hermon ME. 044", "848-7445");
var grandparents2 = new Card("Nani/Bumpa-bob", "pamleavitt@ymail.com/rpleavitt@cs.com", "195 Mugett RD.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Newburgh ME. 04444", "234-7271<hr>");
dad.printCard();
kayl.printCard();
jay.printCard();
grandparents1.printCard();
grandparents2.printCard();