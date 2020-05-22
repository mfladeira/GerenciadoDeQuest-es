import React, { useState } from 'react';
import { graphql, commitMutation } from 'react-relay'
import { useHistory } from 'react-router-dom';
import environment from '../../Environment'
import './style.css';

const mutation = graphql`
mutation AddQuery($content: String, $answerA: String, $answerB: String, $answerC:String, $answerD:String){
 createQuestion(content: $content, answerA: $answerA, answerB: $answerB, answerC: $answerC, answerD:$answerD){
  id
  content
  answerA
  answerB
  answerC
  answerD
}}`

export default function NewQuestion() {
    const [content, setContent] = useState('')
    const [answerA, setAnswerA] = useState('')
    const [answerB, setAnswerB] = useState('')
    const [answerC, setAnswerC] = useState('')
    const [answerD, setAnswerD] = useState('')
    const history = useHistory();

    function handleCommit(e) {
        e.preventDefault()
        const variables = {
            content: content,
            answerA: answerA,
            answerB: answerB,
            answerC: answerC,
            answerD: answerD,
        }
        commitMutation(
            environment,
            {
                mutation,
                variables
            },
        );
        alert("Adicionado com sucesso")
        history.push('./');
    }

    return (
        <div className='new-question-container'>
            <div className="content">
                <section>
                    <h1>Cadastrar nova pergunta</h1>
                </section>

                <form onSubmit={handleCommit}>
                    <textarea
                        placeholder='Conteudo da pergunta...'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <input
                        placeholder="Respota A..."
                        value={answerA}
                        onChange={(e) => setAnswerA(e.target.value)}
                    />
                    <input
                        placeholder="Respota B..."
                        value={answerB}
                        onChange={(e) => setAnswerB(e.target.value)}
                    />
                    <input
                        placeholder="Respota C..."
                        value={answerC}
                        onChange={(e) => setAnswerC(e.target.value)}
                    />
                    <input
                        placeholder="Respota D..."
                        value={answerD}
                        onChange={(e) => setAnswerD(e.target.value)}
                    />
                    <button className='button-add-question' type='submit'>Adicionar</button>
                </form>
            </div>
        </div>
    )
}


