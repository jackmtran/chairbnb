const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const asyncHandler  = require('express-async-handler')

//READ
router.get('/', asyncHandler(async(req, res) => {

	const chairs = await db.Chair.findAll()

	return res.json(chairs)
}));


//CREATE
router.post('/create',  asyncHandler(async (req, res) => {
		const { name, price, address, city, state, userId } = req.body;

    const newChair = await Chair.create({ name, price, address, city, state, userId })
    const thisChair = await Chair.findByPK(newChair.id, {
    })
    return res.json(thisChair)
	}));


  //UPDATE
router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const chairId = parseInt(req.params.id, 10);
  const chair = await db.Chair.findByPk(chairId);

  if (chair) {
    await chair.update({
            name: req.body.name,
            chair: req.body.chair,
        });

        res.send({message: 'Success!', chair})
  } else {
    next(chairNotFoundError);
  }
}))


//DELETING
router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
	const id =req.params.id;
	const chairs = await db.Chair.findByPk(id);
	await chairs.destroy();
	return res.json(id)
}))

module.exports = router;
