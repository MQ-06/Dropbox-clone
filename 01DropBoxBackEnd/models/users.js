const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');





const fileSchema = new mongoose.Schema({
  fileName: { type: String, required: true }, // Name of the file
  uploadedAt: { type: Date, default: Date.now }, // Upload timestamp
});

const folderSchema = new mongoose.Schema({
  folderName: { type: String, required: true }, // Name of the folder
  files: [fileSchema], // List of files in the folder
  createdAt: { type: Date, default: Date.now }, // Folder creation timestamp
});
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  folders: [folderSchema], // List of folders and their files

}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);
