const Team = require('../models/team')


function showAll(req,res){
    Team.find(function(err,teams){
    res.render('teams/all_teams', {teams})
    })
}

async function show(req,res){
    const team = await Team.findById(req.params.id) 
     //const player = team.player.slice().sort((a, b) => a.age - b.age);
     res.render('teams/team_details',{team})
}

function newTeam(req,res){
    res.render('teams/add_teams')
}

function create(req,res){
    const newTeam = new Team (req.body);
    newTeam.save(function(err){
        if (err) return res.render('teams/new');
        console.log(newTeam);
        res.redirect('/teams')
    });
}

async function deleteTeam(req,res){
    await Team.deleteOne({_id:req.params.id})
    res.redirect('/teams')
}

async function edit(req,res){
    console.log("async function edit")
   const team = await Team.findById(req.params.id)
   res.render('teams/edit_teams', {team})
}

async function update(req,res){
    console.log("async function update")
    await Team.updateOne({_id: req.params.id}, req.body);
    res.redirect(`/teams/${req.params.id}`)
}


async function addPlayer(req,res){
    console.log("async function addPLayer")
    let team= await Team.findById(req.params.id)
    team.players.push({
        name: req.body.name,
        age: req.body.age
    })
    await team.save()
    res.redirect(`/teams/${team.id}`)
}


 async  function deletePlayer (req,res){
        const playerId = req.params.playerId
        let team= await Team.findById(req.params.teamId)
        await team.players.id(playerId).remove();
        await team.save()
        res.redirect(`/teams/${req.params.teamId}`)
}
 



module.exports= {
    showAll,
    new: newTeam,
    show,
    create,
    delete: deleteTeam,
    edit,
    update,
    addPlayer,
    deletePlayer

}
