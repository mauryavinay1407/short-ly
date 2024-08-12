const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectURL: {
    type: String,
    required: true,
  },
  visitInfo: [{
    timestamp: { type: Number }
  }]
}, { timestamps: true });

const URL = mongoose.models.URL || mongoose.model('URL', urlSchema);

export default URL;
