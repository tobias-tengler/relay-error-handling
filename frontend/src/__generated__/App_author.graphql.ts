/**
 * @generated SignedSource<<092771c0565efa5aceb8db8db005faad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type App_author$data = {
  readonly name: string;
  readonly " $fragmentType": "App_author";
};
export type App_author$key = {
  readonly " $data"?: App_author$data;
  readonly " $fragmentSpreads": FragmentRefs<"App_author">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_author",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Author",
  "abstractKey": null
};

(node as any).hash = "a13bf715282c1ee063257fc27ddb11ad";

export default node;
