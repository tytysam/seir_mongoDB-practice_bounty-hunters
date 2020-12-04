// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const app = express();
const PORT = 3000;
// Create our sub-database called HUNTERS by passing through the MONGO_STRING
const MONGO_STRING =
  "mongodb+srv://tytysam:&lcan$treeT82295@cluster0.rp9dn.mongodb.net/hunters?retryWrites=true&w=majority";
const mongoose = require("mongoose");

// =======================================
//                DATABASE
// =======================================

const bountySchema = new mongoose.Schema({
  name: { type: String, required: true },
  wantedFor: { type: String, required: true },
  client: { type: String, required: true },
  reward: { type: Number, required: true },
  ship: { type: String, required: true },
  hunters: { type: Array, required: true },
  captured: { type: Boolean, required: true },
});

const Bounties = mongoose.model("Bountie", bountySchema); // mongoose.model is what connects us to our MongoDB Collection (here, called Bounties)

mongoose.connect(MONGO_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log(
    "Connected. All is well in the world of Bounty Hunters... For now."
  );
});

// =======================================
//               MIDDLEWARE
// =======================================
app.use(express.urlencoded({ extended: true })); // * note: .urlencoded is what gives us access to req.body

// =======================================
//                ROUTES
// =======================================

// ************
// * C.R.U.D. *
// ************

// CREATE | POST request
app.post("/", (req, res) => {
  Bounties.create(req.body, (err, createdBounty) => {
    if (err) {
      res.send(err);
    } else {
      res.send(createdBounty);
    }
  });
});

// READ | GET request
app.get("/", (req, res) => {
  Bounties.find({}, (err, allBounties) => {
    if (err) {
      res.send(err);
    } else {
      res.send(allBounties);
    }
  });
});

// UPDATE | PUT request
app.put("/:id", (req, res) => {
  // Param 1 = the id of the document in the MongoDB collection that we are looking up
  // Param 2 = an object with all of the data that we want to change
  // Param 3 = our error first callback that runs after we attempt to update the item that we found
  Bounties.findByIdAndUpdate(req.params.id, req.body, (err, updatedBounty) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedBounty);
    }
  });
});

// DESTROY | DELETE request
app.delete("/:id", (req, res) => {
  // Param 1 = the id of the document in the MongoDB collection that we are looking up
  // Param 2 = our error first callback that runs after we attempt to update the item that we found
  Bounties.findByIdAndDelete(req.params.id, (err, deletedItem) => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        result: "Bounty successfully deleted.",
        deletedItem: deletedItem,
      });
    }
  });
});

// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => {
  console.log(`Bounty Database App is listening on port: ${PORT}`);
});
