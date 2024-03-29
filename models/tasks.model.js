// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

// Create a new Schema for our collection
const TasksSchema = new Schema({
  name: {
    type: String,
    required: 'A task name is required to create a new task'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [
      {
        type: String,
        enum: ['todo', 'completed']
      }
    ],
    default: ['todo']
  },
  category: {
    type: [
      {
        type: String,
        enum: ['uncategorized', 'today', 'upcoming', 'later']
      }
    ],
    default: ['uncategorized']
  }
});

// Expose the collections functions for use in our controller
module.exports = mongoose.model('Tasks', TasksSchema);
