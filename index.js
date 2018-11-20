'use strict';

const express = require('express');
var path = require('path');

const app = express();

app.get('/invoke', (req, res) => {
	res.status(200).end();
});

const server = app.listen(process.env.PORT || 3001, () => {
	const port = server.address().port;
	console.log(`Cron app listening on port ${port}`);
});

module.exports = app;