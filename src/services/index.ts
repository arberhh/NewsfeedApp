const newsApiKey = 'd2f2d97d8fef488cae12b09c43824aa9';

export default function getData(country: string, date: string) {
  const data = fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${newsApiKey}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
  return data;
}