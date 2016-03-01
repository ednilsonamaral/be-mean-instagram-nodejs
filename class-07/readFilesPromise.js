'use strict';

const fs = require('fs');

function readDir (path) {
	return new Promise(function (res, rej) {
		fs.readdir(path, function (err, data) {
			err ? rej(err) : res(res);
		});
	});
}

readDir('./exemploo/')
	.then(function (data) {
		success(data);
	})
	.catch(function (err){
		error(err);
	});

function success (data) {
	console.log(data);
}

function error (err) {
	console.log(err);
}