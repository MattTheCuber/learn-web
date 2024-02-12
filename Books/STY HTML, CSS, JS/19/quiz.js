var qn = 0;

function getQuestions() {
	obj = document.getElementById("question");
	obj.firstChild.nodeValue = "(Please wait...)";
	ajaxCallback = nextQuestion;
	ajaxRequest("questions.xml");
}

function nextQuestion() {
	questions = ajaxreq.responseXML.getElementsByTagName("q");
	obj=document.getElementById("question");
	if (qn < questions.length) {
		q = questions[qn].firstChild.nodeValue;
		obj.firstChild.nodeValue=q;
	} else {
		obj.firstChild.nodeValue="(No more questions)";
	}
}

function checkAnswer() {
	answers = ajaxreq.responseXML.getElementsByTagName("a");
	a = answers[qn].firstChild.nodeValue;
	answerfield = document.getElementById("answer");
	if (a == answerfield.value) {
		alert("Correct!");
	} else {
		alert("Incorrect. The Correct Answer is: " + a);
	}
	qn = qn + 1;
	answerfield.value="";
	nextQuestion();
}
obj = document.getElementById("start_quiz");
obj.onclick = getQuestions;
ansBTN = document.getElementById("submit");
ansBTN.onclick = checkAnswer;