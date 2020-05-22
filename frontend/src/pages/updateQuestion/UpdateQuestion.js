import React, { useState, useEffect } from 'react';
import { graphql, commitMutation, QueryRenderer } from 'react-relay'
import { useHistory } from 'react-router-dom';
import environment from '../../Environment'

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
    const [id, setId] = useState('')
    const history = useHistory();

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        setId(id)
    }, [])


    function handleCommit(event, content, answerA, answerB, answerC, answerD) {
        event.preventDefault();
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

    return (<QueryRenderer
        environment={environment}
        query={graphql`
          query UpdateQuestion_Query($id:ID!){
              question(id:$id){
                id
                content
                answerA
                answerB
                answerC
                answerD
              }
          }
        `}
        variables={{ id: id }}
        render={({ error, props }) => {
            if (error) {
                return <div>Error!</div>;
            }
            if (!props) {
                return <div>Loading...</div>;
            }
            return (
                <div className='new-question-container'>
                    <Content handleCommit={handleCommit}
                        content={props.question.content}
                        answerA={props.question.answerA}
                        answerB={props.question.answerB}
                        answerC={props.question.answerC}
                        answerD={props.question.answerD}
                    />
                </div>
            )
        }}
    />
    )
}

const Content = function (props) {
    const [content, setContent] = useState('')
    const [answerA, setAnswerA] = useState('')
    const [answerB, setAnswerB] = useState('')
    const [answerC, setAnswerC] = useState('')
    const [answerD, setAnswerD] = useState('')

    useEffect(() => {
        if (props) {        
            setContent(props.content)
            setAnswerA(props.answerA)
            setAnswerB(props.answerB)
            setAnswerC(props.answerC)
            setAnswerD(props.answerD)
        }
    }, [props])

    return (
        <div className="content">
            <section>
                <h1>Editar pergunta</h1>
            </section>

            <form onSubmit={(event) => props.handleCommit(event, content, answerA, answerB, answerC, answerD)}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                < input
                    value={answerA}
                    onChange={(e) => setAnswerA(e.target.value)}
                />
                <input
                    value={answerB}
                    onChange={(e) => setAnswerB(e.target.value)}
                />
                <input
                    value={answerC}
                    onChange={(e) => setAnswerC(e.target.value)}
                />
                <input
                    value={answerD}
                    onChange={(e) => setAnswerD(e.target.value)}
                />
                <button className='button-add-question' type='submit'>Editar</button>
            </form>
        </div>
    )
}