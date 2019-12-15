var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseDB=require('../DB/Connect.js');

var DishSchema = new Schema({
    foodMenuID:{ type: String, required: true },
    foodMenutitle:{ type: String, required: true },
    foodMenuProductInfo:{ type: String, required: true },
    foodMenuProductPrice:{ type: String, required: true },
    foodMenuProductHalfPrice:{ type: String, required: true },
    foodMenuProductStrikePrice:{ type: String, required: true },
    foodMenuProductType:{ type: String, required: true },
    foodMenuProductImage:{ type: String, required: true },
    foodMenuProductPreferenceIcon:{ type: String, required: true },
    foodMenuProductInCart:{ type: String, required: true }
  });


const InsertDish=()=>{
    try {
        var db=mongooseDB.getDB();
        debugger;

    } catch (error) {
        
    }
    

}

//var Dish = mongoose.model('User', DishSchema);
module.exports = InsertDish;