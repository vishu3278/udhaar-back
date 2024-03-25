const db = require('../models')

const Udhaar = db.udhaar

const addUdhaar = async (req, res) => {
	let p = {
		amount: req.body.amount,
		date: req.body.date,
		people_id: req.body.people_id,
	}

	const ud = await Udhaar.create(p)
	res.status(200).send(ud)
}

const getAllUdhaar = async (req, res) => {
	let udh = await Udhaar.findAll({})
	res.status(200).send(udh)
}

const getUdhaarById = async (req, res) => {
	// let id = req.params.id
	let udh = await Udhaar.findAll({where: {people_id: req.params.id}})
	res.status(200).send(udh)
}

/*const updateUdhaar = async (req, res) => {
	let id = req.params.id
	const p = await Udhaar.update(req.body, {where: {id: id}})
	res.status(200).send(p)
}*/

/*const deleteUdhaar = async (req, res) => {
	let id = req.params.id
	await Udhaar.destroy({where: {id: id}})
	res.status(200).send("Udhaar deleted")
}*/

module.exports = {
	addUdhaar,
	getAllUdhaar,
	getUdhaarById,
	// updateUdhaar,
}