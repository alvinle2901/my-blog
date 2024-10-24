import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function replies(req, res) {
  console.log({ graphcmsToken });

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`
    }
  });

  const query = gql`
    mutation CreateReply($name: String!, $email: String!, $reply: String!, $commentId: ID!) {
      createReply(
        data: {
          name: $name
          email: $email
          reply: $reply
          comment: { connect: { id: $commentId } }
        }
      ) {
        id
      }
    }
  `;
  const result = await graphQLClient.request(query, req.body);
  return res.status(200).send(result);
}
