/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddQueryVariables = {|
  content?: ?string,
  answerA?: ?string,
  answerB?: ?string,
  answerC?: ?string,
  answerD?: ?string,
|};
export type AddQueryResponse = {|
  +createQuestion: ?{|
    +id: string,
    +content: string,
    +answerA: string,
    +answerB: string,
    +answerC: string,
    +answerD: string,
  |}
|};
export type AddQuery = {|
  variables: AddQueryVariables,
  response: AddQueryResponse,
|};
*/


/*
mutation AddQuery(
  $content: String
  $answerA: String
  $answerB: String
  $answerC: String
  $answerD: String
) {
  createQuestion(content: $content, answerA: $answerA, answerB: $answerB, answerC: $answerC, answerD: $answerD) {
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
      }
    ],
    "concreteType": "Question",
    "kind": "LinkedField",
    "name": "createQuestion",
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
    "name": "AddQuery",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AddQuery",
    "operationKind": "mutation",
    "text": "mutation AddQuery(\n  $content: String\n  $answerA: String\n  $answerB: String\n  $answerC: String\n  $answerD: String\n) {\n  createQuestion(content: $content, answerA: $answerA, answerB: $answerB, answerC: $answerC, answerD: $answerD) {\n    id\n    content\n    answerA\n    answerB\n    answerC\n    answerD\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b5a863e355d5a4771bcfdce535de905d';

module.exports = node;
