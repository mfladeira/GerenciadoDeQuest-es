import React, { useState, useEffect } from 'react';
import { graphql, commitMutation } from 'react-relay'
import { useHistory } from 'react-router-dom';
import environment from '../../Environment'
//import './style.css';

const mutation = graphql`
mutation UpdateQuestionQuery($id:ID!,$content: String, $answerA: String, $answerB: String, $answerC:String, $answerD:String){
 updateQuestion(id:$id,content: $content, answerA: $answerA, answerB: $answerB, answerC: $answerC, answerD:$answerD){
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
    const [id, setId] = useState('')

    const history = useHistory();

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        setId(id)
    }, [])

    function handleCommit(e) {
        e.preventDefault()
        const variables = {
            id: id,
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
        alert("Editado com sucesso")
        history.push('./');
    }

    return (
        <div className='new-question-container'>
            <div className="content">
                <section>
                    <h1>Editar pergunta</h1>
                </section>

                <form onSubmit={handleCommit}>
                    <textarea
                        // placeholder}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <input
                        // placeholder}
                        value={answerA}
                        onChange={(e) => setAnswerA(e.target.value)}
                    />
                    <input
                        // placeholder}
                        value={answerB}
                        onChange={(e) => setAnswerB(e.target.value)}
                    />
                    <input
                        // placeholder}
                        value={answerC}
                        onChange={(e) => setAnswerC(e.target.value)}
                    />
                    <input
                        // placeholder}
                        value={answerD}
                        onChange={(e) => setAnswerD(e.target.value)}
                    />
                    <button className='button' type='submit'>Adicionar</button>
                </form>
            </div>
        </div>
    )
}


