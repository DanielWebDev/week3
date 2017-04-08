// 1
// function printOut(what, callback) {
// 	return callback(what);
// };

// function makeLower(str) {
// 	return str.toLowerCase();
// }

// var result = printOut("TOM",makeLower);

// console.log(result);

//2
// function printOut(what, callback) {
// 	return callback(what);
// };

// function makeLower(str) {
// 	return str.toLowerCase();
// }

// var result = printOut("TOM",makeLower);

// var result2 = printOut('tim',function(x) {
// 	return x.toUpperCase(x);
// });
// console.log(result2);

//3
// function printOut(what, callback) {
// 	return callback(what);
// };
// function makeLower(str) {
// 	return str.toLowerCase();
// }
// var result = printOut("TOMMy",makeLower);

// var result2 = printOut('timmy',function(x) {
// 	return x.toUpperCase(x).substring(0,3);
// });
// console.log(result2);

// //4
// var fs = require('fs');// file system, built into 

// fs.readFile('test.txt', function(err,data){
// 	// check for error, eg. no permission, bad path, etc.
// 	if (err) {console.log(err)}
// 	else {
// 		console.log("print out our hipster lorum ipsum\n", data.toString());
// 	}
// });

// function printOut(what, callback) {
// 	return callback(what);
// };

// function makeLower(str) {
// 	return str.toLowerCase();
// }

// var result = printOut("TOMMy",makeLower);

// var result2 = printOut('timmy',function(x) {
// 	return x.toUpperCase(x).substring(0,3);
// });
// console.log(result2);


// //5 
// var fs = require('fs');// file system, built into 

// fs.readFile('test.txt', function(err,data){
// 	// check for error, eg. no permission, bad path, etc.
// 	if (err) {console.log(err)}
// 	else {
// 		console.log("print out our hipster lorum ipsum\n", data.toString().toUpperCase());
// 		var result2 = printOut('timmy', function(x){
// 		return x.toUpperCase().substring(1,4);

// 		});
// 		console.log(result2);
// 	}
// 			//console.log(result2);

// });

// function printOut(what, callback) {
// 	return callback(what);
// };

// function makeLower(str) {
// 	return str.toLowerCase();
// }

// var result = printOut("TOMMY",makeLower);

// var result2 = printOut('timmy',function(x) {
// 	return x.toUpperCase(x).substring(0,3);
// });
// console.log(result2);

// 6, http library
// var http = require('http');
// // set up socket communtion, http
// var server = http.createServer(function(req,res){
// 	console.log(req.url);
// 	res.writeHead(200,{'Content-Type': 'text/plain'});
// 	// 200 good status
// 	// 400 bad status
// 	// 500 server is down
// 	res.end('Hello World');
// });

// console.log("Server running on localhost port 5000");
// server.listen(5000,'127.0.0.1');

//7 apache-like server
var fs = require('fs');// looks in node's lib fs/index.js

var http = require('http');
// install lodash
var = reqwuire('lodash');

// set up socket communtion, http
var server = http.createServer(function(req,res){
	console.log(req.url);
	fs.readFile('test.txt', function(err,data){

		if (err) { 
			console.log('somethign is wrong', err);
			res.writeHead(200,{'Content-Type': 'text/plain'});
			//res.writeHead(200,{'Content-Type': 'text/plain'});
			res.end('Some thing is wrong' + err);
		} else {
			res.writeHead(200,{'Content-Type': 'text/html'});
			res.end(data.toString());
		}
	})
	// 200 good status
	// 400 bad status
	// 500 server is down
	//res.end('Hello World');
});

console.log("Server running on localhost port 5000");
server.listen(5000,'127.0.0.1');

