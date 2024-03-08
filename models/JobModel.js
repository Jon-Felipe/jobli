import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    jobDescription: { type: String },
    requiredSkills: { type: [String] },
    experience: { type: [String] },
    location: { type: String },
    salary: { type: Number },
    jobNature: {
      type: String,
      enum: ['full-time', 'part-time', 'internship'],
      default: 'full-time',
    },
    companyName: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
