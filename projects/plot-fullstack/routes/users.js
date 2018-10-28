const express = require('express');

const { Router } = express;

const User = require('../models/users');
const userRouter = Router();

userRouter
	.route('/')
	.get((req, res, next) => {
		//ask the database for the right data and send it to the client
		User.find({}, (err, users) => {
			if (err) {
				res.status(400);
				next(err);
			} else {
				res.status(200).send(users);
			}
		});
	})
	.post((req, res, next) => {
		// convert request body into a document
		const newUser = new User(req.body);
		//save the document to the collection (model)
		newUser.save((err, savedUser) => {
			if (err) {
				res.status(400);
				next(err);
			} else {
				res.status(201).send(savedUser);
			}
		});
	});

module.exports = userRouter;
