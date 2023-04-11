const express = require("express");
const { default: mongoose } = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique:true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  donationAmount: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    // default: Date.now,
  },
  PANNo: {
    type: String,
    required: true,
    // unique:true
  },
  subscribeNewsLetter: {
    // type:String,
    type:Boolean,
    default: false,
  },
});

const Donate = new mongoose.model("Donate", donationSchema);

module.exports = Donate;
