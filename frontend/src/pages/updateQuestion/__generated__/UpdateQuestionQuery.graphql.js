/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateQuestionQueryVariables = {|
  id: string,
  content?: ?string,
  answerA?: ?string,
  answerB?: ?string,
  answerC?: ?string,
  answerD?: ?string,
|};
export type UpdateQuestionQueryResponse = {|
  +updateQuestion: ?{|
    +id: string,
    +content: string,
    +answerA: string,
    +answerB: string,
    +answerC: string,
    +answerD: string,
  |}
|};
export type UpdateQuestionQuery = {|
  variables: UpdateQuestionQueryVariables,
  response: UpdateQuestionQueryResponse,
|};
*/


/*
mutation UpdateQuestionQuery(
  $id: ID!
  $content: String
  $answerA: String
  $answerB: String
  $answerC: String
  $answerD: String
) {
  updateQuestion(id: $id, content: $content, answerA: $answerA, answerB: $answerB, answerC: $answerC, answerD: $answerD) {
    id
    content
    answerA
    answerB
    answerC
    answerD
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "content",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "answerA",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "answerB",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "answerC",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "answerD",
    "type": "String"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "answerA",
        "variableName": "answerA"
      },
      {
        "kind": "Variable",
        "name": "answerB",
        "variableName": "answerB"
      },
      {
        "kind": "Variable",
        "name": "answerC",
        "variableName": "answerC"
      },
      {
        "kind": "Variable",
        "name": "answerD",
        "variableName": "answerD"
      },
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Question",
    "kind": "LinkedField",
    "name": "updateQuestion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "answerA",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "answerB",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "answerC",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "answerD",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateQuestionQuery",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateQuestionQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateQuestionQuery",
    "operationKind": "mutation",
    "text": "mutation UpdateQuestionQuery(\n  $id: ID!\n  $content: String\n  $answerA: String\n  $answerB: String\n  $answerC: String\n  $answerD: String\n) {\n  updateQuestion(id: $id, content: $content, answerA: $answerA, answerB: $answerB, answerC: $answerC, answerD: $answerD) {\n    id\n    content\n    answerA\n    answerB\n    answerC\n    answerD\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '99ca4fe93b651f7577f7d1860e277892';

module.exports = node;
