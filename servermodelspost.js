const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
  image: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);