'use client'
import Image from "next/image";
import { newsreader, montserrat } from "../lib/font";
import { fetchArticles } from "../lib/data";
import { query } from "@/lib/query";
import SimpleDate from "./date";
import { useState, useEffect } from "react";
import Equipe from "./equipe";

interface ArticlesProps {
  selectedTag: string | null;
  onTagSelect?: (tag: string | null) => void;
}

interface Article {
  body?: string;
  image?: string;
  title: string;
  tags?: string;
}

export default function Articles({ selectedTag, onTagSelect }: ArticlesProps) {
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
                <div className="flex items-center justify-between w-full border-b-2 border-black text-sm xl:text-2xl uppercase">
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
        <div className="">
          <div className="flex items-center justify-between w-full border-b-2 border-black text-xs xl:text-2xl uppercase xl:mb-4">
            <h1>{`Les aventures d'honey drop`}</h1>
            <SimpleDate />
          </div>

          {/* Sidebar horizontale pour < XL */}
          {onTagSelect && (
            <div className='xl:hidden w-full'>
              <div className='p-3'>
                <Equipe onTagSelect={onTagSelect} selectedTag={selectedTag} />
              </div>
            </div>
          )}
          {articles.length === 0 ? (
            <div className="flex items-center justify-center">
              <p className="text-xl font-medium">{`Pas encore d'articles disponibles...`}</p>
            </div>
          ) : (
            articles.map((article, index) => (
            <div
              key={index}
              className={`
                w-full border-3 border-black mb-4

                // Layout pour xl+: disposition horizontale actuelle
                xl:flex xl:gap-6 xl:items-center xl:h-max xl:border-none
                ${index % 2 !== 0 ? 'xl:flex-row-reverse' : ''}

                // Layout pour md/lg: disposition verticale avec parties haute et basse
                md:flex md:flex-col md:h-auto lg:flex lg:flex-col lg:h-auto
              `}
            >
              {/* Version xl+ : layout horizontal actuel */}
              <div className="xl:flex xl:w-full xl:gap-6 xl:items-stretch hidden">
                {article.image && (
                  <div className="w-1/5">
                    <Image
                      src={`${article.image}`}
                      alt={article.title}
                      width={500}
                      height={400}
                      className="object-cover border-3 border-black w-full h-full"
                    />
                  </div>
                )}
                <div className={`flex flex-col gap-4 p-6 border-3 border-black w-full`}>
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

              {/* Version md/lg : nouveau layout vertical */}
              <div className="xl:hidden">
                {/* Partie haute : image à gauche, tag/titre à droite */}
                <div className="flex gap-4 p-4">
                  {article.image && (
                    <div className="w-1/3 md:w-1/4">
                      <Image
                        src={`${article.image}`}
                        alt={article.title}
                        width={300}
                        height={200}
                        className="object-cover border-2 border-black w-full h-full"
                      />
                    </div>
                  )}
                  <div className="flex-1 flex flex-col justify-center gap-2 relative">
                    {article.tags && (
                      <div className="border-b border-black pb-1 absolute top-0 left-0 w-full">
                        <p className="uppercase text-[8px] md:text-xs font-semibold">
                          {article.tags.includes(',') ? article.tags.split(',').join(' &') : article.tags}
                        </p>
                      </div>
                    )}
                    <h2 className={`text-sm relative top-3 md:top-0 md:text-3xl font-bold leading-tight uppercase text-center ${newsreader.className}`}>
                      {article.title}
                    </h2>
                  </div>
                </div>

                {/* Partie basse : body de l'article */}
                {article.body && (
                  <div className="px-4 ">
                    <p className={`border-t-1 border-black py-4 leading-relaxed text-xs md:text-base ${montserrat.className}`}>
                      {article.body}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )))}
        </div>
      </>
    );
}
