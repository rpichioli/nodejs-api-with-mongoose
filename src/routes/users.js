// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');
const lodash = require('lodash');
// Model
const Users = require('../models/users');

const router = express.Router();

/**
 * Find all users
 */
router.get('/', (req, res) => {
	try {
		Users.find({}, (err, projects) => {
			// Error returned
			if (err) res.status(400).json({ error: "Invalid request, something went wrong!" });
			// Invalid data received
			if (!projects) res.status(401).json({ error: "Unauthorized action!" });
			// Everything OK
			res.json({ success: true, projects });
		});
	} catch (e) {
		res.status(401).json({ error: "Unauthorized action!" });
	}
})

/**
 * Find user by identifier (id)
 */
router.get('/:id', (req, res) => {
	try {
		let _id = req.params.id || null;

		// Basic identifier validation
		if (!_id || validator.isEmpty(_id))
			res.status(400).json({ success: false, error: "Invalid identifier has been sent!" });

		// Converting ID to OID through mongoose
		_id = mongoose.Types.ObjectId(_id);

		// Querying by document '$oid'
		Users.find({ _id }, (err, project) => {
			// Error returned
			if (err) res.status(400).json({ error: "Invalid request, something went wrong!" });
			// Invalid data received
			if (!project) res.status(401).json({ error: "Unauthorized action!" });
			// Everything OK
			res.json({ success: true, project });
		});
	} catch (e) {
		res.status(401).json({ error: "Unauthorized action!" });
	}
})


/**
 * @description New user
 */
router.post('/', (req, res) => {
	try {
		let { username, password, name, email, country } = req.body;
		let _id = mongoose.Types.ObjectId(); // Generating new MongoDB _ID

		Users.create({ _id, username, password, name, email, country }, (err, user) => {
			// Error returned
			if (err) res.status(400).json({ error: "Invalid request, something went wrong!", err });
			// Everything OK
			res.status(201).json({ success: true, user });
		});
	} catch (e) {
		res.status(401).json({ error: "Unauthorized action!" });
	}
});

/**
 * @description Update user
 */
router.put('/', (req, res) => {
	try {
		let { _id, username, password, name, email, country } = req.body;

		// Find the user by it's ID and update it
		Users.findByIdAndUpdate(
			_id,
			{ $set: { username, password, name, email, country }}, // spotlight
			{ new: true },
			(err, user) => {
				// Something wrong happens
				if (err) res.status(400).json({ success: false, error: "Can't update user!" });
				// Everything OK
				res.json({ success: true, user });
			}
		);
	} catch (e) {
		res.status(401).json({ error: "Unauthorized action!" });
	}
});

/**
 * @description Delete user
 */
router.delete('/:id', (req, res) => {
	try {
		const _id = req.params.id || null;
		// Remove user by it's _ID
		if (_id) {
			Users.deleteOne({ _id }, err => {
				// Something wrong happens
				if (err) res.status(400).json({ success: false, error: "Can't remove user!" });
				// Everything OK
				res.json({ success: true });
			});
		} else {
			res.status(400).json({ error: "Source required to perform the search!" });
		}
	} catch (e) {
		res.status(401).json({ error: "Unauthorized action!" });
	}
});

module.exports = router;
