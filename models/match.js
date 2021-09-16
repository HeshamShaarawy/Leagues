const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const matchSchema = new Schema({
    team1 :  [{type: Schema.Types.ObjectId, ref:'Team'}],
    team2 :  [{type: Schema.Types.ObjectId, ref:'Team'}],
    court :   [{type: Schema.Types.ObjectId, ref:'Court'}],
    date : {
        type : Date,
        required : true
    },
    played : Boolean
},{
    timestamps: true,
})

module.exports = mongoose.model('Match', matchSchema);
