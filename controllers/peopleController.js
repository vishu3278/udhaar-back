const db = require('../models')

const People = db.people
const Udhaar = db.udhaar
const Transact = db.transaction

People.hasMany(Udhaar, {
  foreignKey: 'people_id'
})
Udhaar.belongsTo(People)

People.hasMany(Transact, {
  foreignKey: 'people_id'
})
Transact.hasMany(People)

const addPeople = async (req, res) => {
	let p = {
		name: req.body.name,
		phone: req.body.phone,
		email: req.body.email,
	}

	const people = await People.create(p)
	res.status(200).send(people)
}

const getPeopleById = async (req, res) => {
	// console.log(req.params)
	// let pp = await People.findAll({where: {id: req.params.id}})
	let pp = await People.findByPk(req.params.id)
	res.status(200).send(pp)
}

const getPeoples = async (req, res) => {
	let ppl = await People.findAll({include: Udhaar})
	/*let data = ppl
	data.map((p,i) => {
		let t = p.udhaars.reduce((a,c) => a + Number(c.amount), 0)
		console.log(t)
		ppl[i].total = t
	})*/
	res.status(200).json({data:ppl})
}

const getPeopleDetail = async (req, res) => {
	// console.log(req.params)
	// let pp = await People.findAll({ where: {id: req.params.id}, include: [Udhaar, Transact]})
	let pp = await People.findOne({ where: {id: req.params.id}, include: [Udhaar, Transact]})
	res.status(200).json(pp)
}

const updatePeople = async (req, res) => {
	// console.log(req.body, req.params)
	// let id = req.params.id
	const p = await People.update(req.body, {where: {id: req.params.id}})
	res.status(200).send({p, message: "Updated successfully"})
}

const deletePeople = async (req, res) => {
	// let id = req.params.id
	await People.destroy({where: {id: req.params.id}})
	res.status(200).send({message: "People deleted"})
}

module.exports = {
	addPeople,
	getPeoples,
	getPeopleById,
	updatePeople,
	deletePeople,
	getPeopleDetail,
}