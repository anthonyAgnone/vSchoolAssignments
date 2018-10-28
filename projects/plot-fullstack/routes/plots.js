const express = require('express');

const { Router } = express;

const Plot = require('../models/plots');
const plotRouter = Router();

plotRouter
	.route('/')
	.get((req, res, next) => {
		//ask the database for the right data and send it to the client
		Plot.find({}, (err, plots) => {
			if (err) {
				res.status(400);
				next(err);
			} else {
				res.status(200).send(plots);
			}
		});
	})
	.post((req, res, next) => {
		// convert request body into a document
		const newPlot = new Plot(req.body);
		//save the document to the collection (model)
		newPlot.save((err, savedPlot) => {
			if (err) {
				res.status(400);
				next(err);
			} else {
				res.status(201).send(savedPlot);
			}
		});
	});

module.exports = plotRouter;
