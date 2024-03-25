const peoplesController = require("../controllers/peopleController.js")
const router = require('express').Router()

router.post("/", peoplesController.addPeople)
router.get("/", peoplesController.getPeoples)
router.get("/:id", peoplesController.getPeopleById)
router.get("/detail/:id", peoplesController.getPeopleDetail)
router.put("/:id", peoplesController.updatePeople)
router.delete("/:id", peoplesController.deletePeople)


module.exports = router