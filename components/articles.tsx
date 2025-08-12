import Image from "next/image";
import { newsreader, montserrat } from "../lib/font";
import { fetchArticles } from "../lib/data";
import { query } from "@/lib/query";
import SimpleDate from "./date";

export default async function Articles() {
  try {
    // const articles = await fetchArticles(); Utiliser ça au taff pour drupal pcq a la maison j'ai pas la db
    const articles = query.data.testgraphqlvuesGraphql1.results

    return (
      <>
        <div className="space-y-8">
          <div className="flex items-center justify-between w-full border-b-2 border-black text-2xl uppercase">
            <h1>Dernières Infos</h1>
            <SimpleDate />
          </div>
          {articles.map((article, index) => (
            <div
              key={index}
              className={`flex w-full h-80 gap-6 items-stretch ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            >
              {article.image && (
                <div className="flex-shrink-0 w-1/2 h-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover border-2 border-black"
                  />
                </div>
              )}
              <div className={`flex flex-col gap-4 p-6 border-2 border-black w-1/2 h-full justify-between`}>
                {article.tags && (
                  <div className="border-b-2 border-black pb-2">
                    <p className="uppercase text-sm font-semibold text-gray-600">
                      {article.tags}
                    </p>
                  </div>
                )}
                <h2 className={`text-3xl font-bold leading-tight ${newsreader.className}`}>
                  {article.title}
                </h2>
                {article.body && (
                  <p className={`text-base leading-relaxed text-sm ${montserrat.className}`}>
                    {article.body}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error("erreur :", error);
    return <p>Erreur pendant le chargement (jsp pq frr....)</p>;
  }
}
