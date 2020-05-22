const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    content: String,
    answerA: String,
    answerB: String,
    answerC: String,
    answerD: String,
})

module.exports = mongoose.model("Question", QuestionSchema)