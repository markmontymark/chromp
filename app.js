

(function(window,document){
	console.log( "have window? " + window);


	function loadApp(){
		console.log( "have a button? " + document.getElementById("loginButton"));
	
		var status = document.getElementById("status");
		var loginInfo = function(){ 
			var loginId;
			return {
				setLoginId: function(c){loginId = c;}
			};
		};

		function updateOnlineStatus(event) {
			var condition = navigator.onLine ? "online" : "offline";
			status.className = condition;
			status.innerHTML = condition.toUpperCase();
//			log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
		}
		
	  
	  	window.login = function (){
			var mcid = document.getElementById("loginId").value;
			var p	 = document.getElementById("password").value;
		    console.log("got ", mcid, p);
			return false;
		};

		window.addEventListener('online',  updateOnlineStatus);
		window.addEventListener('offline', updateOnlineStatus);
		updateOnlineStatus();
		document.getElementById("loginButton").addEventListener('click',window.login);
	};
	window.addEventListener('load',loadApp);

})(window,document);
