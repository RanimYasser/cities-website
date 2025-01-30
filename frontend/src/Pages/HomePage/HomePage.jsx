import React, { useEffect, useState } from "react";
import PageFetcher from "../../UseFetch/PageFetcher";

const HomePage = ({ slug = "home" }) => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const data = await PageFetcher(slug);
        setPageData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{pageData.attributes.title}</h1>
      <pre>{JSON.stringify(pageData.attributes.json, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
