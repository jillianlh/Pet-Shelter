const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

class PetController {

   getAll(req, res) {
      Pet.find({}).sort("type").exec()
         .then(all_pets => res.json(all_pets))
         .catch(err => res.json(err));
   }

   getOne(req, res) {
      Pet.findOne({_id: req.params._id})
         .then(one_pet => res.json(one_pet))
         .catch(err => res.json(err));
   }

   create(req, res) {
      let pet = new Pet(req.body);
      pet.save()
         .then(() => res.json({"msg": "Pet time"}))
         .catch(err => res.json(err));
   }

   update(req, res) {
      let _id = req.params._id;
      Pet.findByIdAndUpdate({_id}, req.body, {runValidators: true, context: "query"})
         .then(() => res.json({"msg": "Okay"}))
         .catch(err => res.json(err));
   }

   delete(req, res) {
      Pet.remove({_id: req.params._id})
         .then(() => res.json({"msg": "Pet's over :("}))
         .catch(err => res.json(err));
   }

   like(req, res) {
      let _id = req.params._id;
      Pet.findOneAndUpdate({_id}, {$inc: {likes: 1}})
         .then(() => res.json({"msg": "Liked"}))
         .catch(err => res.json(err));
   }

}

module.exports = new PetController();
