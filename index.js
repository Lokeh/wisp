#!/usr/bin/env node
/* index.js */
var bcrypt = require('bcrypt');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./ghost-dev.db');

bcrypt.genSalt(10, function(err, salt) {
	bcrypt.hash('password', salt, function(err, hash) {
		console.log(hash);

		db.serialize(function() {
			// db.get("SELECT * FROM users WHERE id = 1", function(err, row) {
			// 	console.log(row);
			// });

			db.run("UPDATE users SET password=? WHERE id = 1", hash);
			
			db.get("SELECT * FROM users WHERE id = 1", function(err, row) {
				// console.log(row);
				console.log("matches: "+bcrypt.compareSync("password", row.password));
			});
		});

		db.close();
	});
});