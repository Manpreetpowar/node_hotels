const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

//save menu***************
router.post('/', async(req, res) => {
    try {
         const data = req.body;
         const newMenu = new MenuItem(data);
         const response = await newMenu.save();
         console.log('data saved successfully');
         res.status(200).json(response);
    } catch (error) {
       console.log('error', error);
       res.status(500).json({error: 'Internal server error'});
    }
   });
   
   
   router.get('/', async(req, res) => {
       try {
         const data = await MenuItem.find();
         res.status(200).json(data);
       } catch (error) {
         console.log('error', error);
         res.status(500).json({error: 'Internal server error'});
       }
   })


   router.get('/:taste', async(req, res) => {
    try {
      const taste = req.params.taste;  
      const data = await MenuItem.find({taste: taste});
      res.status(200).json(data);
    } catch (error) {
      console.log('error', error);
      res.status(500).json({error: 'Internal server error'});
    }
})

module.exports = router;   