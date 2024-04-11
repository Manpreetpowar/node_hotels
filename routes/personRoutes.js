const express = require('express');
const router = express.Router();
const Person = require('../models/Person');
//save data
router.post('/', async (req,res) => {
    try{
        const data = req.body // Assuming the request body contains the person data
        const newPerson   = new Person(data);
        const response = await newPerson.save();
        console.log('data saved successfully');
        res.status(200).json(response);
      } catch (error) {
          console.log('error', error);
          res.status(500).json({error: 'Internal server error'});
        }
  });
  
  //get data************
router.get('/', async(req, res) => {
      try {
        const data = await Person.find();
        res.status(200).json(data);
      } catch (error) {
         console.log('error', error);
          res.status(500).json({error: 'Internal server error'});
      }
});
  
  
router.get('/:workType', async(req, res) => {
        try {
          const workType = req.params.workType;
          if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
              const response = await Person.find({work:workType});
              console.log('response fetched');
              res.status(404).json(response);
          }else{
            res.status(404).json({error: 'Invalid work type'});
          }
        } catch (error) {
            console.log('error', error);
            res.status(500).json({error: 'Internal server error'});
        }
});


// Update the record
router.put('/:id', async(req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
            new:true,       // Return the updated document
            runValidators: true, //Run Mongoose Validation
        });

        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }

        res.status(200).json(response);

    } catch (error) {
      console.log('error', error);
      res.status(500).json({error: 'Internal server error'});
    }
});


// Delete the record
router.delete('/:id', async(req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }
        console.log('data delete');
        res.status(200).json({message: 'Person delete successfully'})
    } catch (error) {
        console.log('error', error);
        res.status(500).json({error: 'Internal server error'});
    }
});

module.exports = router;
  