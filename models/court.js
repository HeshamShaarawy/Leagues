const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const courtSchema = new Schema({
    
    location: String,
    courtType: {
        type: String,
        enum: ['Beach', 'Gym', 'Grass']
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('Court', courtSchema); 