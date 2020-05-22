import React from 'react';
import { Link } from 'react-router-dom'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../../Environment'
import DeleteQuestion from '../../DeleteQuestionMutation'
import './style.css';

function handleDelete(id) {
  DeleteQuestion(id)
  window.location.reload();
  alert("Questão removida com sucesso")
}

export default class Home extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query HomeQuery{
              questions{
                id
                content
                answerA
                answerB
                answerC
                answerD
              }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <div className="profile-container">
              <header>
                <h1>Questões</h1>
                <Link className="button-add" to="/add">Adicionar Pergunta</Link>
              </header>
              <ul>
                {props.questions.map(question => (
                  <li key={question.id}>
                    <p><strong>{question.content}</strong></p>
                    <p><strong>A)</strong> {question.answerA}</p>
                    <p><strong>B)</strong> {question.answerB}</p>
                    <p><strong>C)</strong> {question.answerC}</p>
                    <p><strong>D)</strong> {question.answerD}</p>
                    <Link className="button" key={question.id} to={`/updateQuestion?id=${question.id}`}>Editar</Link>
                    <button type='button' onClick={() => handleDelete(question.id)}>Deletar</button>
                  </li>))}
              </ul>
            </div>
          )
        }}
      />
    );
  }
}




