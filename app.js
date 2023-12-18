const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));

app.use(express.json());

app.use((req,res,next)=>{
console.log("Hello from middleware😁");
next();
});

app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
    });

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tour_simple.json`));



const getTour = (req,res)=>{
    console.log(req.params);
const id = req.params.id * 1;
 const tour = tours.find(el => el.id === id);
if(!tour){
    res.status(404).json(
        {
            status: "failed"
        }
    )
}
   
res.status(200).json(
   { status: 'success', 
   data: {
    tour
   }
}
)
}

const getAllTours = (req,res)=>{
    console.log(req.requestTime);
    res.status(200).json(
       { status: 'success', 
       requestAt: req.requestTime,
       results: tours.length,
       data : {
        tours
       }
    }
    )
    }

const createTours = (req,res)=>{
    // console.log(req.body);
    const newID = tours[tours.length- 1].id + 1;
    const newTour = Object.assign({id:newID},req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tour_simple.json`, JSON.stringify(tours), error =>{
    res.status(201).json({
        status: "success",
        data: {
            tour: newTour
        }
    })
    });
    // res.send('Done');
    }

    const updateTour = (req,res)=>{
        if(req.params.id * 1 > tours.length){
            res.status(404).json({
                status: "failed"
            })
        }
        res.status(200).json({
            status: "success",
            data: {
                tour: "Touse Dara"
            }
        })
        }

const deleteTour = (req,res)=>{
    if(req.params.id * 1 > tours.length){
        res.status(404).json({
            status: "failed"
        })
    }
    res.status(204).json({
        status: "success",
        data: null
    })
    }
    

const getAllUsers = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This Route is not yet Define'
    })
}
const createUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This Route is not yet Define'
    })
}
const getUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This Route is not yet Define'
    })
}
const updateUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This Route is not yet Define'
    })
}
const deleteUser = (req, res) =>{
    res.status(500).json({
        status: 'error',
        message: 'This Route is not yet Define'
    })
}

app.route('/api/v1/tours')
.get(getAllTours)
.post(createTours);


    
app.route('/api/v1/tours/:id')
.get(getTour)
.patch(updateTour)
.delete(deleteTour);


app.route('/api/v1/users').get(getAllUsers).post(createUser);

app.route('/api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser);

const port = 3000;
    app.listen(port, ()=>{
        console.log(`App is running ${port}`);
    });