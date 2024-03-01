import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  jobDescription: { type: String },
  companyName: { type: String, required: true },
  location: { type: String },
  salary: { type: Number },
  jobNature: {
    type: String,
    enum: ['full-time', 'part-time', 'internship'],
    default: 'full-time',
  },
});

export default mongoose.model('Job', JobSchema);
