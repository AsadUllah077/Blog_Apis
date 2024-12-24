import User from "../models/User.model.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
  
      const user = await newUser.save();
      res.status(200).send("User Inserted successfully");
  } catch (error) {
    console.error('Error creating user:', error.message);
    
  }
};

export const getUser = async (req, res) => {
    try{
        const username = req.params.name;
        const user = await User.findOne({ name: username });
        
        if(!user) return res.status(404).send("User not found");
        res.status(200).json
        ({
            user
        });
    }catch (error) {
        console.error('Error getting user:', error.message);
    }
};

export const getUsers = async(req, res) => {
    try{
        let limit=req.query.limit;
        const users = await User.find().limit(limit);
        res.status(200).json
        ({
            users
        });
    }catch (error) {
        console.error('Error getting users:', error.message);
    }
};
