const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const PetSchema = new mongoose.Schema({

   name: {
      type: String,
      required: [true, "You must name your pet, thank you so much"],
      minlength: [3, "The name needs to be at least 3 characters or longer, thank you so much"],
      unique: [true, "Pet name is already in use, try again, thank you so much"]
   },
   type: {
      type: String,
      required: [true, "You must give your pet a type, thank you so much"],
      minlength: [3, "The type needs to be at least 3 characters or longer, thank you so much"]
   },
   description: {
      type: String,
      required: [true, "You must give your pet a description, thank you so much"],
      minlength: [3, "The description needs to be at least 3 characters or longer, thank you so much"]
   },
   skill1: {
      type: String
   },
   skill2: {
      type: String
   },
   skill3: {
      type: String
   },
   likes: {
      type: Number,
      default: 0
   }
}, {timestamps: true}).plugin(uniqueValidator, {message: "Name is taken, try again, thank you so much"});

mongoose.model("Pet", PetSchema);
