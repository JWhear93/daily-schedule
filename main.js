////    Console log to HTML
(function () {
	var old_logger = console.log;
	var html_logger = document.getElementById('html_logger');
	console.log = function(msg) {
	  old_logger.call(this, arguments);
	  if (typeof msg == 'object') {
		html_logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(msg) : msg);
	  } else {
		html_logger.innerHTML += msg;
	  }
	}
})();
////        END

if (typeof(Storage) !== "undefined") {
    console.log(localStorage.time + '  ---  ' + localStorage.task + '<hr>');
}

function addNewTask (time, task) {
	localStorage.setItem('time', time);
	localStorage.setItem('task', task);
	console.log(localStorage.time + '  ---  ' + localStorage.task + '<hr>');
};

var dateButton = document.querySelector('div > button#dateButton');
dateButton.onclick = function () {
	document.getElementById("date").innerHTML = Date();
};


var addButton = document.querySelector('div > button#addButton');
addButton.onclick = function () {
	var userInput = prompt("Insert time frame for new task", "00:00");
	var secondUserInput = prompt("Insert name for new task", "unnamed");
	addNewTask(userInput, secondUserInput);
};

var clearButton = document.querySelector('div > button#clearButton');
clearButton.onclick = function () {
	localStorage.removeItem("time");
	localStorage.removeItem("task");
};