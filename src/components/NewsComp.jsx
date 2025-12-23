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
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchNews = async () => {
    try {
      setError(null);
      // Direct API call in dev (localhost is allowed), serverless function in production
      const url = import.meta.env.DEV
        ? `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=10`
        : `/api/news?category=${category}&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();

      // Check for API errors (rate limit, invalid key, etc.)
      if (data.status === "error") {
        if (data.code === "rateLimited") {
          setError("API rate limit exceeded. Please try again later or use your own API key.");
        } else if (data.code === "apiKeyInvalid" || data.code === "apiKeyExhausted") {
          setError("API key limit exhausted. Please try again later or use your own API key from newsapi.org");
        } else {
          setError(data.message || "Failed to fetch news. Please try again.");
        }
        setHasMore(false);
        return;
      }

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      setArticles((prev) => [...prev, ...(data.articles || [])]);
      setHasMore(data.articles && data.articles.length > 0);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${category.charAt(0).toUpperCase() + category.slice(1)} - HeadlinesHub`;
    setArticles([]); setPage(1); setHasMore(true); setAnimate(false); setError(null); fetchNews();
  }, [category]);

  useEffect(() => { if (page > 1) fetchNews(); }, [page]);
  useEffect(() => { if (articles.length > 0) setAnimate(true); }, [articles]);

  return (
    <div>
      {loading ? <Spinner /> : (
        <div className={animate ? "animate-slide-in" : ""}>
          {/* Error Alert */}
          {error && (
            <div className="container mt-4">
              <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong><i className="bi bi-exclamation-triangle-fill me-2"></i>Oops!</strong> {error}
                <hr />
                <p className="mb-0 small">
                  Get your free API key at <a href="https://newsapi.org/register" target="_blank" rel="noopener noreferrer" className="alert-link">newsapi.org</a>
                </p>
                <button type="button" className="btn-close" onClick={() => setError(null)} aria-label="Close"></button>
              </div>
            </div>
          )}

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

          {/* No articles and no error - empty state */}
          {articles.length === 0 && !error && !loading && (
            <div className="container mt-5 text-center">
              <div className="alert alert-info" role="alert">
                No articles found for this category. Please try another category.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NewsComp;