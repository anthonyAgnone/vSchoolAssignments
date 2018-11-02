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

userRouter.route('/current/:id').put((req, res) => {
	console.log(req.params.id);
	User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, editedUser) => {
		if (err) {
			res.status(400);
			next(err);
		} else {
			res.status(200).send(editedUser);
		}
	});
});

userRouter.route('/login').post((req, res, next) => {
	var email = req.body.email;
	var password = req.body.password;
	console.log(email, password);
	User.findOne({ email }, (err, user) => {
		if (password === user.password) {
			return res.status(200).send(user);
		} else return res.status(200).send('password incorrect');
	});
});

module.exports = userRouter;
