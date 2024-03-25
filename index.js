const express = require('express')
const cors = require('cors')

var corsOptions = {
	origin: "http://localhost:3000"
}

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

const peopleRoutes = require('./routes/people.js')
const udhaarRoutes = require('./routes/udhaar.js')
const transactRoutes = require('./routes/transaction.js')
app.use("/people", peopleRoutes)
app.use("/udhaar", udhaarRoutes)
app.use("/transact", transactRoutes)

app.get("/", (req, res) => {
	console.log('[test]')
	res.json({message: "Hello from homepage."})
})

const PORT = 5000
app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`)
})