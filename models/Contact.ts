import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    maxlength: [64, "Name cannot be more than 64 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email address"],
    maxlength: [128, "Email cannot be more than 128 characters"],
  },
  organization: {
    type: String,
    required: [
      true,
      "Please provide the name of the organization you represent",
    ],
    maxlength: [64, "Organization name cannot be more than 64 characters"],
  },
  role: {
    type: String,
    required: [true, "Please provide your role in your organization"],
    maxlength: [64, "Role cannot be more than 64 characters"],
  },
  description: {
    type: String,
    required: [
      true,
      "Please describe the development needs of your organization",
    ],
    maxlength: [4096, "Description cannot be more than 4096 characters"],
  },
});

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
