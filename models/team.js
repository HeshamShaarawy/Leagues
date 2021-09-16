const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema ({
    name: String,
    age : Number,    
},{
    timestamps: true,
})


const teamSchema = new Schema ({
    name: {
        type: String
    },
    aboutTeam: String,
    players :[playerSchema]

},{
    timestamps: true,
})


module.exports = mongoose.model('Team', teamSchema);