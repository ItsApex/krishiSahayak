const mongoose = require("mongoose");
const plotSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  coordinates: [
    {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Plots = mongoose.model("Plot", plotSchema);
module.exports = Plots;
