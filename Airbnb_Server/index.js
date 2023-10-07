const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 4000;


//middleware
app.use(express.json())
app.use(cors());



//console.log(process.env.DB_USER,process.env.DB_PASS)
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0msnto3.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    // CRUD operation Start

    const AirbnbCollection = client.db('Airbnb').collection('airbnbData');

  app.get('/rooms', async (req,res) => {
    
    const room = AirbnbCollection.find();
    const result = await room.toArray();
    res.send(result);
  })

  // Search by name 
    // const indexKeys = { name: 1};
    // const indexOptions = { name: "nameSearch" };
    
    //const result = await productCollection.createIndex(indexKeys, indexOptions);

    app.get("/rooms/:text/:searchPrice/:searchBedroom/:searchBed/:searchBath", async (req, res) => {
      const search = req.params.text;
      const searchPrice = parseFloat(req.params.searchPrice); // Convert the search price to a number
      const searchBedroom = parseInt(req.params.searchBedroom); // Convert bedroom to an integer
      const searchBed = parseInt(req.params.searchBed); // Convert beds to an integer
      const searchBath = parseInt(req.params.searchBath); // Convert bathrooms to an integer
    
      const result = await AirbnbCollection.find({
        $and: [
          {
            $or: [
              { category: { $regex: search, $options: "i" } },
                 
            ]
          },
          { price: { $lte: searchPrice } }, // Filter by price less than or equal to the search price
          { "room.bedroom": { $gte: searchBedroom } },
          { "room.bath": { $gte: searchBath } } ,
          { "room.bed": { $gte: searchBed } },
        ]
      }).toArray();
    
      // Debugging
      console.log("Search:", search);
      console.log("Search Price:", searchPrice);
      console.log("Search Bedroom:", searchBedroom);
      console.log("Search Bed:", searchBed);
      console.log("Search Bath:", searchBath);
      console.log("Result:", result);
    
      res.send(result);
    });
    
    
    

   // search by name end 





      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      
    }
  }
  run().catch(console.dir);
  
  
  
  
  
  app.listen(port,() => {
      console.log("Server is running port:",port)
  });