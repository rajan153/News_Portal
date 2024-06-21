import React from "react";
import Cards from "../components/Cards/Cards";
import { useSelector } from "react-redux";
import Footer from "../components/Common/Footer";

function Home() {
  const { data, totalPages, loading } = useSelector((state) => state.newsData);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl">Loading...</p>
        </div>
      ) : (
        <div>
          {data.length === 0 ? (
            <h1 className="text-center text-2xl font-bold mt-4">
              No data found
            </h1>
          ) : (
            <>
              <Cards data={data} />
              <Footer totalPages={totalPages} />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
