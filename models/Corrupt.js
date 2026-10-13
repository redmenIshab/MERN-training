import mongoose from "mongoose";

const CorruptSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Corrupt name is required"],
      trim: true,
      minlength: 2,
      maxlength: 120,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 2000,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Corrupt = mongoose.model("Corrupt", CorruptSchema);

export default Corrupt;