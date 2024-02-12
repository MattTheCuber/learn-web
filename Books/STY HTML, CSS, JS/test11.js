		//Greetings
		function Greet(who) {
			alert("Greetings, " + who + "!")
		}
		//Why
		function Have_fun(why) {
			alert("Have fun doing, " + why + "!")
		}
		//why-2
		function Have_fun_r(why) {
			alert("Have fun, " + why + "!")
		}
		//averagre
		function Average(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) {
			var result = (a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q + r + s + t + u + v + w + x + y + z) / 26;
			return result;
		}
		//average5
		function Average5(a,b,c,d,e) {
			var result = (a + b + c + d + e) / 5;
			return result;
		}
		//greeting accoring to time
		function timeGreet() {
			now = new Date();
			
			hour_of_day = now.getHours();
			minute_of_hour = now.getMinutes();
			seconds_of_minute = now.getSeconds();

			document.write("<h2>");
			document.write(hour_of_day + ":" + minute_of_hour + ":" + seconds_of_minute);
			document.write("</h2>");

			document.write("<p>");
			if (hour_of_day < 10) {
				document.write("<strong><h2>Good morning.</h2></strong>");
			} else if ((hour_of_day >=14) && (hour_of_day <= 17)) {
				document.write("<strong><h2>Good arfternoon.</h2></strong>");
			} else if (hour_of_day >= 17) {
				document.write("<strong><h2>Good evening.</h2></strong>");
			} else {
				document.write("<strong><h2>Good day.</h2></strong>");
			}
			document.write("</p>");
		}
		//alert to bad 
		function test1() {
			alert("Too bad!");
		}
		//alert really
		function m_l() {
			alert("Really?")
		}
		//button switching
		function switch1() {
			if (!document.getElementById) return;
			btn1 = document.getElementById("button1");
			btn1.firstChild.nodeValue = "No";
			btn2 = document.getElementById("button2");
			btn2.firstChild.nodeValue = "Yes";			
		}
		//button switching
		function switch2() {
			if (!document.getElementById) return;
			btn1 = document.getElementById("button1");
			btn1.firstChild.nodeValue = "Yes";
			btn2 = document.getElementById("button2");
			btn2.firstChild.nodeValue = "No";			
		}

		//timed hover words
		//first function
		var HoverListener = {
			addElem: function( elem, callback, delay ) {

			    if ( delay === undefined ) {
				    delay = 0001;
			    }

		    var hoverTimer;

		    addEvent( elem, 'mouseover', function() {
		    	hoverTimer = setTimeout( callback, delay );
		    } );

				    addEvent( elem, 'mouseout', function() {
				      clearTimeout( hoverTimer );
				    } );
				}
			}
			//second function
			function tester() {
			  alert( 'Hello again!' );
			}
			//third function
			function addEvent( obj, evt, fn ) {
		  		if ( 'undefined' != typeof obj.addEventListener ) {
			    	obj.addEventListener( evt, fn, false );
				}
				else if ( 'undefined' != typeof obj.attachEvent ) {
			    	obj.attachEvent( "on" + evt, fn );
			  	}
			}
			//forth function
			addEvent( window, 'load', function() {//opens
		  		HoverListener.addElem(
		      	document.getElementById( 'hover2' )
		    	, tester 
		  		);

			  	HoverListener.addElem(
			      	document.getElementById( 'hover1' )
			    	, function() {
			        	alert( 'Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello!' );
			      	}
			    	, 1354
			  	);
			}/*closes*/ 	);