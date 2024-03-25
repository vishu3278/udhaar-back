const udhaarController = require("../controllers/udhaarController.js")
const router = require('express').Router()

router.post("/", udhaarController.addUdhaar)
router.get("/", udhaarController.getAllUdhaar)
router.get("/:id", udhaarController.getUdhaarById)

module.exports = router
