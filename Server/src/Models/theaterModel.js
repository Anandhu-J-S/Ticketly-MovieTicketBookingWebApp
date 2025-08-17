import mongoose from "mongoose";

const theaterSchema = new mongoose.Schema({
  image: { type: String },
  theaterName: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },

  address: {
    type: String,
    unique: true
  },
  location: {
    type: String
  },
  contact: {
    type: Number,
    unique: true
  },
  openingHours: {
    start: { type: String },
    end: { type: String },
  },
  numberOfscreens: {
    type: Number,
    min: 1
  },
  role: {
    type: String,
    enum: ["user", "theater", "admin"]
  },
  status: {
    type: String,
    enum: ["active", "banned", "pending", "approved", "rejected"],
    default: "pending",
  },
}, { timestamps: true });

export const createTheaterSchema = mongoose.model("theater", theaterSchema);
