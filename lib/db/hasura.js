async function queryHasuraGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(process.env.HASURA_ADMIN_URL, {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

const operationsDoc = `
  query MyQuery {
    users {
      email
      id
      publicAdress
      issuer
    }
  }
`;

function fetchMyQuery() {
  return queryHasuraGraphQL(operationsDoc, 'MyQuery', {});
}

export async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}