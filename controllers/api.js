const Match =  require('../models/match')

function apiDocs(req,res){
    res.render('api/docs.ejs')
}
function allMatches(req,res ){
        Match.find({}).populate(['team1', 'team2', 'court']).exec(function(err, matches){
       res.status(200).json(matches)
        })
    }


module.exports = {
    allMatches,
    apiDocs
}