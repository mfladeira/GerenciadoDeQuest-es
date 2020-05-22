import {
    commitMutation,
    graphql,
} from 'react-relay'
import environment from './Environment'


const mutation = graphql`
    mutation DeleteQuestionMutation($id:ID!){
      deleteQuestion(id: $id) {
        id
      }
    }
  `

export default (id) => {
    const variables = {
        id: id,
    }
    commitMutation(
        environment,
        {
            mutation,
            variables,
        },
    )
}