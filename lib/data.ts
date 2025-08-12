interface Article {
  body?: string;
  image?: string;
  title: string;
  tags?: string;
}

interface GraphQLResponse {
  data: {
    testgraphqlvuesGraphql1: {
      results: Article[];
    };
  };
}

export const fetchArticles = async () => {
  const data = await fetch('http://localhost:8084/graphql?query={testgraphqlvuesGraphql1{results{body,image,title,tags}}}');
  const response: GraphQLResponse = await data.json();
  return response.data.testgraphqlvuesGraphql1.results;
}
