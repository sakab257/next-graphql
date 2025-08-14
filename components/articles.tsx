'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { newsreader, montserrat } from "../lib/font";
import { fetchArticles } from "../lib/data";
import { query } from "@/lib/query";
import SimpleDate from "./date";

interface ArticlesProps {
  selectedTag?: string | null;
}

interface Article {
  title: string;
  body?: string;
  tags?: string;
  image?: string;
}

export default function Articles({ selectedTag }: ArticlesProps) {

    const [allArticles, setAllArticles] = useState<Article[]>([])
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState<string | null>(null)

      useEffect(() => {
        const loadArticles = async () => {
          try {
            setLoading(true)
            const data = await fetchArticles()
            setAllArticles(data)
          } catch (err) {
            console.error("Erreur lors du chargement :", err)
            setError(err instanceof Error ? err.message : 'Une erreur est survenue')
            setAllArticles(query.data.testgraphqlvuesGraphql1.results)
          } finally {
            setLoading(false)
          }
        }
        loadArticles()
      }, [])

      if (loading) {
        return (
          <div className="flex items-center justify-center h-80 border-3 border-black">
            <p className="text-xl font-medium">Chargement des articles...</p>
          </div>
        )
      }


    // const articles = await fetchArticles(); // Utiliser ça au taff pour drupal pcq a la maison j'ai pas la db
    //const allArticles = query.data.testgraphqlvuesGraphql1.results

    const articles = selectedTag
      ? allArticles.filter(article =>
          article.tags?.toLowerCase().includes(selectedTag.toLowerCase())
        )
      : allArticles

    return (
      <>
        <div className="space-y-8">
          <div className="flex items-center justify-between w-full border-b-2 border-black text-2xl uppercase">
            <h1>Les aventures d'honey drop</h1>
            <SimpleDate />
          </div>
          {articles.length === 0 ? (
            <div className="flex items-center justify-center">
              <p className="text-xl font-medium">Pas encore d'articles disponibles...</p>
            </div>
          ) : (
            articles.slice(0,4).map((article, index) => (
            <div
              key={index}
              className={`flex w-full h-80 gap-6 items-stretch ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            >
              {article.image && (
                <div className="flex-shrink-0 w-1/5 h-full">
                  <Image
                    src={`${article.image}`} // mettre ${article.image quand pas acces au back drupal} http://localhost:8084
                    alt={article.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover border-3 border-black"
                  />
                </div>
              )}
              <div className={`flex flex-col gap-4 p-6 border-3 border-black w-4/5 h-full justify-start`}>
                {article.tags && (
                  <div className="border-b-2 border-black pb-2">
                    <p className="uppercase text-sm font-semibold">
                      {article.tags.includes(',') ? article.tags.split(',').join(' &') : article.tags}
                    </p>
                  </div>
                )}
                <div className="flex-1 flex flex-col items-center justify-evenly">
                  <h2 className={`text-3xl font-bold leading-tight uppercase text-center ${newsreader.className}`}>
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