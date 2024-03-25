const db = require('../models')

const Transact = db.transaction

const addTransaction = async (req, res) => {
	let p = {
		amount: req.body.amount,
		date: req.body.date,
		udhaar_id: req.body.udhaar_id,
		people_id: req.body.people_id,
	}

	const tr = await Transact.create(p)
	res.status(200).send(tr)
}

const getTransactionByUdhaar = async (req, res) => {
	let id = req.params.id
	let trs = await Transact.findAll({where: {udhaar_id: id}})
	res.status(200).send(trs)
}

const getTransactionByPeople = async (req, res) => {
	let id = req.params.id
	let trs = await Transact.findAll({where: {people_id: id}})
	res.status(200).json({data:trs})
}

/*const getTransactById = async (req, res) => {
	let id = req.params.id
	let udh = await Transact.findAll({where: {id: id}})
	res.status(200).send(udh)
}*/

/*const updateTransact = async (req, res) => {
	let id = req.params.id
	const p = await Transact.update(req.body, {where: {id: id}})
	res.status(200).send(p)
}*/

/*const deleteTransaction = async (req, res) => {
	let id = req.params.id
	await Transact.destroy({where: {id: id}})
	res.status(200).send("Transact deleted")
}*/

module.exports = {
	addTransaction,
	getTransactionByUdhaar,
	getTransactionByPeople,
	// deleteTransaction,
}