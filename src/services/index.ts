import { apiUrl, newsApiKey } from "../constants/API";

export default function getData(country: string, date: string, page: number, searchQuery: string) {
  const data = fetch(`${apiUrl}/v2/top-headlines?pageSize=${20}&page=${page}&q=${searchQuery}&language=${country}&apiKey=${newsApiKey}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
  return data;
}