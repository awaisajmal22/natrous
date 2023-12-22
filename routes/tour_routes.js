const express = require('express');
const router = express.Router();
const tourController = require('../controller/tour_controller');

// router.param('id',tourController.checkID);
router.route('/')
.get(tourController.getAllTours)
.post(tourController.createTours);


    
router.route('/:id')
.get(tourController.getTour)
.patch(tourController.updateTour)
.delete(tourController.deleteTour);


module.exports = router;