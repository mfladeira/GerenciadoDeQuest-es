/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteQuestionMutationVariables = {|
  id: string
|};
export type DeleteQuestionMutationResponse = {|
  +deleteQuestion: ?{|
    +id: string
  |}
|};
export type DeleteQuestionMutation = {|
  variables: DeleteQuestionMutationVariables,
  response: DeleteQuestionMutationResponse,
|};
*/


/*
mutation DeleteQuestionMutation(
  $id: ID!
) {
  deleteQuestion(id: $id) {
    id
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
    "name": "deleteQuestion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "DeleteQuestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteQuestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteQuestionMutation(\n  $id: ID!\n) {\n  deleteQuestion(id: $id) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a36873457b10f500a0d41923e26292c3';

module.exports = node;
