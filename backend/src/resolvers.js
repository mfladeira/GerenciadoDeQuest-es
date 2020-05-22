const Question = require('./Model/Question')

module.exports = {
    Query: {
        questions: () => Question.find(),
        question: (_, { id }) => Question.findById(id)
    },

    Mutation: {
        createQuestion: (_, { content, answerA, answerB, answerC, answerD }) => Question.create({ content, answerA, answerB, answerC, answerD }),
        deleteQuestion: (_, { id }) => Question.findByIdAndDelete(id),
        updateQuestion: (_, { id, content, answerA, answerB, answerC, answerD }) => Question.findByIdAndUpdate(id, {
            content: content, answerA: answerA,
            answerB: answerB, answerC: answerC, answerD: answerD
        })
    }
}