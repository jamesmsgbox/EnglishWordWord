var example2Left = document.getElementById('example2-left'),
	gridDemo = document.getElementById('gridDemo'),
	gridDemo2 = document.getElementById('gridDemo2');

// Example 2 - Shared lists
new Sortable(example2Left, {
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
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
  csvData.push(jsonObject[i].split(','));
}
// Retrived data from csv file content
console.log(csvData);