/**
 * @generated SignedSource<<3ca1b3f43135250ba8a01f8e67820821>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type App_book$data = {
  readonly author: {
    readonly " $fragmentSpreads": FragmentRefs<"App_author">;
  };
  readonly title: string;
  readonly " $fragmentType": "App_book";
};
export type App_book$key = {
  readonly " $data"?: App_book$data;
  readonly " $fragmentSpreads": FragmentRefs<"App_book">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_book",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Author",
      "kind": "LinkedField",
      "name": "author",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "App_author"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Book",
  "abstractKey": null
};

(node as any).hash = "f354f7d2f2741e628b39b38441287a6c";

export default node;
