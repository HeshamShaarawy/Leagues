
const Team = require('../models/team')
const Court = require('../models/court')
const Match =  require('../models/match')


// async functions has been used for all functions of this model

async function showAll(req,res){
    const courts = await  Court.find({})
    const teams =  await Team.find({})
    Match.find({}).populate(['team1', 'team2', 'court']).exec(function(err, matches){
        res.render('matches/index',{courts, teams, matches})
    })
}

async function addMatch(req,res){
    const newMatch = new Match(req.body)
    await newMatch.save(function(err){ if (err) console.log(err, "error of add Match")})
    showAll(req,res)
}

async function deleteMatch(req,res){
    await Match.deleteOne({_id:req.params.matchID})
    console.log("delete function is calling")
    showAll(req,res)
}

async function editMatch(req,res){
    const match = await Match.findById(req.params.matchID).populate(['team1', 'team2', 'court'])
    const courts = await  Court.find({})
    const teams =  await Team.find({})
    res.render('matches/edit_match',{courts, teams, match})
}

function updateMatch(req,res) {
    Match.updateOne({_id: req.params.id}, req.body, function(err){
         if(err) console.log(err)
         res.redirect('/matches')
    })
 }

module.exports = {
showAll,
addMatch,
deleteMatch,
editMatch,
updateMatch
}