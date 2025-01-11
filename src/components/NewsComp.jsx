import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsDisplay from "./NewsDisplay";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

function NewsComp() {
  const { category = "general" } = useParams();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [animate, setAnimate] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchNews = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=10`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setArticles((prev) => [...prev, ...(data.articles || [])]);
      setHasMore(data.articles.length > 0);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${category.charAt(0).toUpperCase() + category.slice(1)} - HeadlinesHub`;
    setArticles([]); setPage(1); setHasMore(true); setAnimate(false); fetchNews();
  }, [category]);

  useEffect(() => { if (page > 1) fetchNews(); }, [page]);
  useEffect(() => { if (articles.length > 0) setAnimate(true); }, [articles]);

  return (
    <div>
      {loading ? <Spinner /> : (
        <div className={animate ? "animate-slide-in" : ""}>
          {articles.length > 0 && (
            <>
              <h2 className="text-center my-4">Top Headlines - {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <InfiniteScroll 
              dataLength={articles.length} 
              next={() => setPage((prev) => prev + 1)} 
              hasMore={hasMore} 
              loader={<Spinner />}>
                <div className="container">
                  <div className="row">
                    {articles.map((article, index) => (
                      <NewsDisplay 
                      key={index} 
                      title={article.title} 
                      description={article.description} 
                      src={article.urlToImage} 
                      url={article.url} 
                      date={article.publishedAt} 
                      source={article.source.id} />
                    ))}
                  </div>
                </div>
              </InfiniteScroll>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default NewsComp;