import Image from "next/image";
import { newsreader, montserrat } from "../lib/font";
import { fetchArticles } from "../lib/data";
import { query } from "@/lib/query";

export default async function Articles() {
  try {
    const articles = await fetchArticles();
    // const articles = query.data.testgraphqlvuesGraphql1.results

    return (
      <>
        {articles.map((article, index) => (
          <div
            key={index}
            className={`flex w-full gap-2 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
          >
            {article.image && (
              <Image
                src={`http://localhost:8084${article.image}`}
                alt={article.title}
                width={500}
                height={300}
                className="border-3 border-black"
              />
            )}
            <div className="w-full flex flex-col items-center gap-2 border-3">
              {article.tags && (
                <p className="uppercase w-full border-b-3 px-2 py-1">
                  {article.tags}
                </p>
              )}
              <h2 className={`text-4xl font-bold text-center border-b-3 w-full ${newsreader.className}`}>
                {article.title}
              </h2>
              {article.body && (
                <p className={`text-center h-full w-1/2 flex items-center justify-center ${montserrat.className}`}>
                  {article.body}
                </p>
              )}
            </div>
          </div>
        ))}
      </>
    );
  } catch (error) {
    console.error("erreur :", error);
    return <p>Erreur pendant le chargement (jsp pq frr....)</p>;
  }
}
