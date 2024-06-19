import axios from "axios";

export async function fetchNews(category, searchKey) {
  const country = "in";
  const apiKey = `d7c898c18cd84514af021d89d8365459`;
  let url = `https://newsapi.org/v2/top-headlines?`;

  if (searchKey) {
    url += `q=${searchKey}&`;
  }

  url += `country=${country}&`;

  if (category != "All-News") {
    url += `category=${category}&`;
  }

  url += `apiKey=${apiKey}`;
  console.log(url);
  const response = await axios.get(url);

  return response;
}
