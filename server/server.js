const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

app.use(bodyParser.json());

mongoose.set('strictQuery', false);

// Define a schema for the User model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

// Route to create a new user
app.post('/users', async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(9992, function check(err){
    if(err){
        console.log("error");
    }
    else{
        console.log("started");
    }
});

mongoose.connect("mongodb://localhost:27017/gbs", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully Connected to DB");
  })
  .catch((error) => {
    console.error("Error Connecting to DB:", error);
  });


