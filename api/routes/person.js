const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const Person = require('../schema/Person')

// create
router.post('/', (req, res, next)=>{
    const person = new Person({
        name : req.body.name
    })
    person.save()
    .then((result) => {
        console.log(result);
        const response = {
            message: "Person saved successfully",
            person: {
                id: result._id,
                name:result.name,
            },
        };
        res.status(201).json(response);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({
            error: err.message,
            message: "Person not svaed",
        });
    });
});

//to get all persons
router.get ("/", async (req, res, next) => {
    Person.find()
    .select("_id name")
    .exec()
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({
            error: error.message,
            message:"Cannot get persons",
        });
    });
});

//to get person using id 
router.get("/:ID", async (req, res, next) => {
    const ID= req.params.personId;
    Person.findById(ID)
    .select("_id name")
    .exec()
    .then((result) => {
        if(result) {
            const response ={
                _id: result._id,
                name: result.name,
            };
            res.status(200).json(response);
        } else{
            res.status(404).json({
                message: "invalid user id",
            });
        }
    
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            error: err.message,
            message: "Cannot find id",
        });  
    });
 });

 //update person
 router.put("/:personId" , (req, res, next) => {
    const personId = req.params.personId.toString();
    const name = req.body.name;
    console.log(name, personId);

    Person.findByIdAndUpdate(personId, {name: name})
    .exec()
    .then((updatedPerson) => {
        if (!updatedPerson) {
            return res.status(404).json({message: "Person not found"});
        }

        res.status(200).json({
            message:"Updated Successfully",
            updatedPerson:{
                id: updatedPerson._id,
                name: name,
            },
        });
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).json({
            message: err.message,
        });
    });
 });

 // delete 
 router.delete("/:personId", (req, res, next) => {
    const personId = req.params.personId;
    Person.exists({ _id: personId})
    .then((exists) => {
        if(exists) {
            return res.status(404).json({
                message: "This ID does not exist."
            });
        } else {
            Person.deleteOne({ _id: personId })
            .exec()
            .then((result) => { 
                res.status(200).json({
                    _id: personId,
                    message: "This Id has been deleted" ,
                });
            })
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
 });
});

module.exports = router;