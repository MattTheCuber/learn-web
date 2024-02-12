var t;
function StartSearch() {
	if (t) window.clearTimeout(t);
	t = window.setTimeout("LiveSearch()",200);
}
function LiveSearch() {
	query = document.getElementById("searchlive").value;
	filename = "search.php?query=" + query;

	ajaxCallback = DisplayResults;

	ajaxRequest(filename);
}
function DisplayResults() {
	ul = document.getElementById("list");
	div = document.getElementById("results");
	div.removeChild(ul);

	ul = document.createElement("ul");
	ul.id="list";
	names = ajaxreq.responseXML.getElementsByTagName("name")
	for (i = 0; i < names.length; i++) {
		li = document.createElement("li")
		name = names[i].firstChild.nodeValue;
		text = document.createTextNode(name);
		li.appendChild(text);
		ul.appendChild(li);
	}
	if (names.length==0) {
		li = document.createElement("li");
		li.appendChild(document.createTextNode("No Results"));
		ul.appendChild(li);
	}
	div.appendChild(ul);
}
obj = document.getElementById("searchlive");
obj.onkeydown = StartSearch;