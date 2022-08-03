async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch('https://netflix-test-22.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret':
        'iEgiuo6EnOACEOOj8vfpH5ui5Aa9iphhDU0DwFOPGnEjAD0zcxk5YKCH2X30bu6x',
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
  return fetchGraphQL(operationsDoc, 'MyQuery', {});
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
