const Workout = require('../models/workout')

module.exports = {

    get_workout: (req,res)=>{
        Workout.find()
        .then((response)=>{
            res.json(response)
        })
        .catch((e)=>{
            res.json(e)
        })
    },
    post_workout: (req,res)=>{
        Workout.create({})
        .then((response)=>{
            res.json(response)
        })
        .catch((e)=>{
            res.json(e)
        })
    },
    get_range: (req,res)=>{
        Workout.find({}).limit(7)
        .then((response)=>{
            console.log(response)
            res.json(response)
        })
        .catch((e)=>{
            res.json(e)
        })
    },
    delete_workout : ({body},res)=>{
        Workout.findByIdandDelete(body.id)
        .then((response)=>{
            res.json({success:true})
        })
        .catch((e)=>{
            res.json(e)
        })
    },
    put_workout: ({body,params},res)=>{
        Workout.findByIdAndUpdate(
            params.id,
            {$push:{exercises:body}},
            {new:true,runValidators:true})
        .then((response)=>{
            res.json(response)
        })
        .catch((e)=>{
            res.json(e)
        })
    }

}