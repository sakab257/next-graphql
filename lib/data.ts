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
  let allArticles: Article[] = [];
  let page = 0;
  let hasMorePages = true;

  while (hasMorePages) {
    const query = `{testgraphqlvuesGraphql1(page: ${page}){results{body,image,title,tags}}}`;
    const data = await fetch(`/api/graphql?query=${encodeURIComponent(query)}`);
    const response: GraphQLResponse = await data.json();
    
    const pageResults = response.data.testgraphqlvuesGraphql1.results;
    
    if (pageResults && pageResults.length > 0) {
      allArticles = [...allArticles, ...pageResults];
      page++;
    } else {
      hasMorePages = false;
    }
  }

  return allArticles;
}
