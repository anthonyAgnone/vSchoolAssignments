const express = require('express');

const { Router } = express;

const Piece = require('../models/pieces');
const pieceRouter = Router();

pieceRouter
	.route('/')
	.get((req, res, next) => {
		//ask the database for the right data and send it to the client
		Piece.find({}, (err, pieces) => {
			if (err) {
				res.status(400);
				next(err);
			} else {
				res.status(200).send(pieces);
			}
		});
	})
	.post((req, res, next) => {
		// convert request body into a document
		const newPiece = new Piece(req.body);
		//save the document to the collection (model)
		newPiece.save((err, savedPiece) => {
			if (err) {
				res.status(400);
				next(err);
			} else {
				res.status(201).send(savedPiece);
			}
		});
	});

module.exports = pieceRouter;
