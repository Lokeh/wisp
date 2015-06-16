#!/usr/bin/env node
/* index.js */
var bcrypt = require('bcrypt');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./ghost-dev.db', sqlite3.OPEN_READWRITE);

bcrypt.genSalt(4, function(err, salt) {
	bcrypt.hash('password', salt, function(err, hash) {
		db.serialize(function() {
			db.run("UPDATE users SET password=? WHERE id = 1", hash);
			
			db.get("SELECT * FROM users WHERE id = 1", function(err, row) {
				if (bcrypt.compareSync("password", row.password)) console.log("Success!");
			});
		});

		db.close();
	});
});