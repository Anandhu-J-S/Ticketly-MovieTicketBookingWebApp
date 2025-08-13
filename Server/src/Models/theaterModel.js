import mongoose from "mongoose";

const theaterSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "please add profilePic"]
    },
    theaterName: {
      type: String,
      unique: true,
      required: [true, "please add Theater Name"]
    },
    email: {
      type: String,
      unique: true,
      required: [true, "please add Email"]
    },
    password: {
      type: String,
      required: [true, "please add Password"]
    },
    address: {
      type: String,
      unique: true,
      required: [true, "please add address"]
    },
    location: {
      type: String,
      unique: [true, "should be unique"],
      required: [true, "please add Location"]
    },
    contact: {
      type: Number,
      unique: true,
      required: true
    },
    openingHours: {
      start: { type: String, required: true },
      end: { type: String, required: true },
    },
    numberOfscreens: { type: Number, required: true, min: 1 },
    role: { type: String, enum: ["user", "theater", "admin"] }
  },
  {
    timestamps: true,
  }
);

export const createTheaterSchema = mongoose.model("theater", theaterSchema);
