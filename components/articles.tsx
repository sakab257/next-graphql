'use client'
import Image from "next/image";
import { newsreader, montserrat } from "../lib/font";
import { fetchArticles } from "../lib/data";
import { query } from "@/lib/query";
import SimpleDate from "./date";
import { useState, useEffect } from "react";

interface ArticlesProps {
  selectedTag?: string | null;
}

interface Article {
  body?: string;
  image?: string;
  title: string;
  tags?: string;
}

export default function Articles({ selectedTag }: ArticlesProps) {
    const [allArticles, setAllArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadArticles = async () => {
            try {
                // const articles = await fetchArticles(); // Utiliser ça au taff pour drupal pcq a la maison j'ai pas la db
                // setAllArticles(articles);
                setAllArticles(query.data.viewsArticle.results);
            } catch (error) {
              // console.log(error);
              setAllArticles(query.data.viewsArticle.results);
            } finally {
                setLoading(false);
            }
        };

        loadArticles();
    }, []);

    const articles = selectedTag
      ? allArticles.filter(article => {
          if (!article.tags) return false;

          const normalizeTag = (tag: string) => tag.toLowerCase().trim();
          const normalizedSelectedTag = normalizeTag(selectedTag);

          // Séparer les tags par virgule et par &
          const articleTags = article.tags.split(/[,&]/).map(tag => normalizeTag(tag));

          // Vérifier si le tag sélectionné correspond exactement à l'un des tags de l'article
          return articleTags.some(tag => tag === normalizedSelectedTag);
        })
      : allArticles

    if (loading) {
        return (
            <div className="space-y-8">
                <div className="flex items-center justify-between w-full border-b-2 border-black text-2xl uppercase">
                    <h1>{`Les aventures d'honey drop`}</h1>
                    <SimpleDate />
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-xl font-medium">Chargement des articles...</p>
                </div>
            </div>
        );
    }

    return (
      <>
        <div className="space-y-8">
          <div className="flex items-center justify-between w-full border-b-2 border-black text-2xl uppercase">
            <h1>{`Les aventures d'honey drop`}</h1>
            <SimpleDate />
          </div>
          {articles.length === 0 ? (
            <div className="flex items-center justify-center">
              <p className="text-xl font-medium">{`Pas encore d'articles disponibles...`}</p>
            </div>
          ) : (
            articles.map((article, index) => (
            <div
              key={index}
              className={`flex w-full h-80 gap-6 pb-2 items-stretch ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            >
              {article.image && (
                <div className="w-1/6 h-full">
                  <Image
                    src={`${article.image}`} // mettre ${article.image quand pas acces au back drupal} http://localhost:8084
                    alt={article.title}
                    width={500}
                    height={300}
                    className="h-full object-cover border-3 border-black"
                  />
                </div>
              )}
              <div className={`flex flex-col gap-4 p-6 border-3 border-black w-full h-full justify-start`}>
                {article.tags && (
                  <div className="border-b-2 border-black pb-2">
                    <p className="uppercase text-sm font-semibold">
                      {article.tags.includes(',') ? article.tags.split(',').join(' &') : article.tags}
                    </p>
                  </div>
                )}
                <div className="flex-1 flex flex-col items-center justify-evenly">
                  <h2 className={`text-2xl font-bold leading-tight uppercase text-center ${newsreader.className}`}>
                    {article.title}
                  </h2>
                  {article.body && (
                    <p className={`leading-relaxed text-md ${montserrat.className}`}>
                      {article.body}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )))}
        </div>
      </>
    );
}
