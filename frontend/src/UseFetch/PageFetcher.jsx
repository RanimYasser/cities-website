import axios from "axios";

const PageFetcher = async (slug) => {
  const url = `http://localhost:1337/api/pages?filters[slug][$eq]=${slug}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN`
      }
    });
    const pageData = response.data.data;

    if (!pageData || pageData.length === 0) {
      throw new Error(`No page found with slug: ${slug}`);
    }

    return pageData[0];
  } catch (error) {
    console.error("Error fetching page data: ", error.message);
    throw error;
  }
};

export default PageFetcher;