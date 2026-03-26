const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());

// ✅ Connect MongoDB FIRST
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected 🔥"))
  .catch(err => console.log(err));

// ✅ Schema & Model BEFORE routes
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

const Student = mongoose.model("Student", studentSchema);

// ✅ Routes

// CREATE
app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ ALL
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
app.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE
app.delete("/students/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});