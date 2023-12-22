
// const fs = require('fs');
const Tour = require('../model/tour_model');
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tour_simple.json`));

// exports.checkID = (req, res, next, val)=>{
//     if(req.params.id * 1 > tours.length){
//         return res.status(404).json({
//             status: 'Failed',
//             message: "Inavlid ID"
//         });
//     }
//     next();
// }

// exports.checkBody = (req, res, next)=>{
//     if(!req.body.name || !req.body.price){
//         return res.status(400).json({
//             status: 'Failed',
//             message: "No Data"
//         });
//     }
//     next();
// }
exports.getTour = (req,res)=>{
    console.log(req.params);
const id = req.params.id * 1;
//  const tour = tours.find(el => el.id === id);

   
// res.status(200).json(
//    { status: 'success', 
//    data: {
//     tour
//    }
// }
// )
}

exports.getAllTours = (req,res)=>{
    console.log(req.requestTime);
    // res.status(200).json(
    //    { status: 'success', 
    //    requestAt: req.requestTime,
    //    results: tours.length,
    //    data : {
    //     tours
    //    }
    // }
    // )
    }

exports.createTours = async (req,res)=>{
    try{
const newTour = await Tour.create(req.body);

    
    // fs.writeFile(`${__dirname}/dev-data/data/tour_simple.json`, JSON.stringify(tours), error =>{
    res.status(201).json({
        status: "success",
        data: {
            tour: newTour
        }
    });
} catch (e){
    res.status(400).json({
        status: "Failed",
        message: e
    });
}
    // });
    }

   exports.updateTour = (req,res)=>{
        
        res.status(200).json({
            status: "success",
            data: {
                tour: "Touse Dara"
            }
        })
        }

exports.deleteTour = (req,res)=>{

    res.status(204).json({
        status: "success",
        data: null
    })
    }
    