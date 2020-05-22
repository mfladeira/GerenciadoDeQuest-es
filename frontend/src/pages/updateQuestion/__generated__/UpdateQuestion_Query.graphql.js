/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateQuestion_QueryVariables = {|
  id: string
|};
export type UpdateQuestion_QueryResponse = {|
  +question: ?{|
    +id: string,
    +content: string,
    +answerA: string,
    +answerB: string,
    +answerC: string,
    +answerD: string,
  |}
|};
export type UpdateQuestion_Query = {|
  variables: UpdateQuestion_QueryVariables,
  response: UpdateQuestion_QueryResponse,
|};
*/


/*
query UpdateQuestion_Query(
  $id: ID!
) {
  question(id: $id) {
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
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Question",
    "kind": "LinkedField",
    "name": "question",
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
    "name": "UpdateQuestion_Query",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateQuestion_Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateQuestion_Query",
    "operationKind": "query",
    "text": "query UpdateQuestion_Query(\n  $id: ID!\n) {\n  question(id: $id) {\n    id\n    content\n    answerA\n    answerB\n    answerC\n    answerD\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '68fc515e0dc5a238aaf535a19b597721';

module.exports = node;
