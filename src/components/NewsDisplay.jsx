import { useState } from "react";

const PLACEHOLDER_IMAGE = "https://placehold.co/320x200/1a1a2e/eee?text=No+Image";

function NewsDisplay({ title, description, src, url, date, source }) {
  const [imgError, setImgError] = useState(false);

  // Skip rendering if article has no meaningful content
  if (!title && !description && !url) return null;

  // Safe date formatting with error handling
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";

    try {
      const dateObj = new Date(dateString);

      // Check for invalid date
      if (isNaN(dateObj.getTime())) return "Invalid date";

      const [day, month, year] = [dateObj.getDate(), dateObj.getMonth() + 1, dateObj.getFullYear()]
        .map((val) => String(val).padStart(2, '0'));
      const [hours, minutes] = [dateObj.getHours() % 12 || 12, dateObj.getMinutes()]
        .map((val) => String(val).padStart(2, '0'));
      return `${day}/${month}/${year} ${hours}:${minutes} ${dateObj.getHours() >= 12 ? 'PM' : 'AM'}`;
    } catch {
      return "Date not available";
    }
  };

  // Safe title truncation
  const truncateText = (text, maxLength) => {
    if (!text) return null;
    const limit = window.innerWidth < 768 ? Math.floor(maxLength * 0.6) : maxLength;
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  // Handle image loading errors
  const handleImageError = () => {
    setImgError(true);
  };

  const imageUrl = imgError || !src ? PLACEHOLDER_IMAGE : src;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 position-relative" data-bs-theme="dark" style={{ minHeight: "400px" }}>
        {source && <span className="badge bg-info text-dark position-absolute top-0 start-0 m-2">{source}</span>}
        <img
          src={imageUrl}
          className="card-img-top img-fluid"
          alt={title || "News Image"}
          style={{ height: "200px", objectFit: "cover" }}
          onError={handleImageError}
          loading="lazy"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            {truncateText(title, 48) || "No Title Available"}
          </h5>
          <p className="card-text flex-grow-1">
            {truncateText(description, 98) || "No description available for this article."}
          </p>
          <p className="text-muted small">Published: {formatDate(date)}</p>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning mt-auto font-weight-bold d-flex align-items-center justify-content-center"
              style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}
            >
              Read More <span className="font-weight-bold" style={{ marginLeft: "5px", fontSize: "1.1rem" }}>→</span>
            </a>
          ) : (
            <button className="btn btn-secondary mt-auto" disabled>
              Link Unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsDisplay;

