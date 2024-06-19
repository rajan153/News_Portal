import { useEffect, useState } from "react";
import { fetchNews } from "./hooks/useNewsData";
import Navbar from "./components/Common/Navbar";

function App() {
  const [searchKey, setSearchKey] = useState("");
  const [news, setNews] = useState("");
  const [loading, setLoading] = useState("");

  async function searchForNews(category = "All-News", searchKey = "") {
    setLoading(true);
    const response = await fetchNews(category, searchKey);
    setNews(response.data);
    setLoading(false);
  }

  useEffect(() => {
    // searchForNews();
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
