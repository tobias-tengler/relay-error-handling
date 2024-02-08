import { Environment, Network, RecordSource, Store, FetchFunction, RelayFeatureFlags } from "relay-runtime";

// @ts-expect-error Not yet in the types
RelayFeatureFlags.ENABLE_FIELD_ERROR_HANDLING = true;
// @ts-expect-error Not yet in the types
RelayFeatureFlags.ENABLE_FIELD_ERROR_HANDLING_THROW_BY_DEFAULT = true;

const HTTP_ENDPOINT = "http://localhost:5095/graphql";

const fetchFn: FetchFunction = async (request, variables) => {
  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
      // <-- Additional headers like 'Authorization' would go here
    },
    body: JSON.stringify({
      query: request.text, // <-- The GraphQL document composed by Relay
      variables,
    }),
  });

  const result = await resp.json();

  console.log(JSON.stringify(result, null, 2));

  return result;
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
