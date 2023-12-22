const TourModel = require('../model/tour_model');
class TourServices{
    static async createTour(name,rating,price){
        try{
const create = new TourModel(
   { name,rating,price}
);
return await create.save();
        }catch (e){
            throw e;
        }
    }
}
