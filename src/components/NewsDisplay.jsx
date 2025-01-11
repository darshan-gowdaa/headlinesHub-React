function NewsDisplay({ title, description, src, url, date, source }) {
  if (!title && !description && !src && !date) return null;

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const [day, month, year] = [dateObj.getDate(), dateObj.getMonth() + 1, dateObj.getFullYear()]
      .map((val) => String(val).padStart(2, '0'));
    const [hours, minutes] = [dateObj.getHours() % 12 || 12, dateObj.getMinutes()]
      .map((val) => String(val).padStart(2, '0'));
    return `${day}/${month}/${year} ${hours}:${minutes} ${dateObj.getHours() >= 12 ? 'PM' : 'AM'}`;
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 position-relative" data-bs-theme="dark" style={{ minHeight: "400px" }}>
        {source && <span className="badge bg-info text-dark position-absolute top-0 start-0 m-2">{source}</span>}
        <img src={src || "https://placehold.co/320x200/png"} className="card-img-top img-fluid" alt={title || "News Image"} style={{ height: "200px", objectFit: "cover" }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            {title ? (title.length > (window.innerWidth < 768 ? 30 : 48) ? `${title.slice(0, window.innerWidth < 768 ? 30 : 48)}...` : title) : "No Title"}
          </h5>
          <p className="card-text flex-grow-1">
            {description ? (description.length > (window.innerWidth < 768 ? 70 : 98) ? `${description.slice(0, window.innerWidth < 768 ? 70 : 98)}...` : description) : "News Description not found."}
          </p>
          <p className="text-muted flex-grow-1 small">Published at: {formatDate(date)}</p>
          <a href={url} className="btn btn-warning mt-auto font-weight-bold d-flex align-items-center justify-content-center" style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}>
            Read More <span className="font-weight-bold" style={{ marginLeft: "5px", fontSize: "1.1rem" }}>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsDisplay;
