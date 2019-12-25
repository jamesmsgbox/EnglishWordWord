var example2Left = document.getElementById('example2-left'),
	example2LeftA = document.getElementById('example2-a'),
	gridDemo = document.getElementById('gridDemo'),
	gridDemoN = document.getElementById('gridDemo-n'),
	gridDemoS = document.getElementById('gridDemo-s'),
	gridDemo2 = document.getElementById('gridDemo2');

// Example 2 - Shared lists
new Sortable(example2Left, {
	group: {
		name: 'grid',
		pull: 'clone' // To clone: set pull to 'clone'
	},
	animation: 150
});

// Example 2 - Shared lists
new Sortable(example2LeftA, {
	group: {
		name: 'grid',
		pull: 'clone' // To clone: set pull to 'clone'
	},
	animation: 150
});

// Grid demo
new Sortable(gridDemo, {
	animation: 150,
	group: 'grid',
	ghostClass: 'blue-background-class'
});

// Grid demo
new Sortable(gridDemoS, {
	animation: 150,
	group: 'grid',
	ghostClass: 'blue-background-class'
});

// Grid demo
new Sortable(gridDemoN, {
	animation: 150,
	group: 'grid',
	ghostClass: 'blue-background-class'
});


// Grid demo
new Sortable(gridDemo2, {
	animation: 150,
	group: 'grid',
	ghostClass: 'blue-background-class'
});

var url = "./data.csv";

var request = new XMLHttpRequest();  
request.open("GET", url, false);   
request.send(null);  

var csvData = new Array();
var jsonObject = request.responseText.split(',');
for (var i = 0; i < jsonObject.length; i++) {
  csvData.push(jsonObject[i].replace(/"/g,''));
}
// csvData.sort(randomSort);
// Retrived data from csv file content
// console.log(csvData);
$(document).ready(function(){
	for(var i =0; i < csvData.length; i++) {
		$("#gridDemo").append('<div class="grid-square">'+csvData[i]+'</div>');
	}
});

function randomSort(a, b) {
	return Math.random() > 0.5 ? -1 : 1;
}