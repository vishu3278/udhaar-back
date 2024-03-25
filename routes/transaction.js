const transactController = require("../controllers/transactController.js")
const router = require('express').Router()

router.post("/", transactController.addTransaction)
router.get("/people/:id", transactController.getTransactionByPeople)
router.get("/udhaar/:id", transactController.getTransactionByUdhaar)

module.exports = router
