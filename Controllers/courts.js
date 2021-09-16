const Court = require('../models/court');


 function showAll(req,res){
    Court.find(function(err,courts){
    res.render('courts/all_courts', {courts})
    })
}

function newCourt(req,res){
    res.render('courts/add_Courts')
}

function create(req,res){
    const newCourt = new Court (req.body);
    newCourt.save(function(err){
        if (err) return res.render('courts/new');
        console.log(newCourt);
        res.redirect('/courts')
    });
}

function deleteCourt(req,res){
    Court.deleteOne({_id:req.params.id}, function (err){
        if(err) console.log(err);
        res.redirect('/courts')
    }) 
}
   
function edit(req,res){
    Court.findById({_id: req.params.id}, function(err,court){
        if(err) console.log(err);
        res.render('courts/edit_courts', {court})
    });   
}

function update(req,res) {
   Court.updateOne({_id: req.params.id}, req.body, function(err){
        if(err) console.log(err)
        res.redirect('/courts')
   })
}

module.exports= {
    showAll,
    new: newCourt,
    create,
    delete : deleteCourt,
    edit,
    update
}