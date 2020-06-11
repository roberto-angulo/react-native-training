const requestApi = (movie) => {
  // ENDPOINT
  const apiKey = "gSn1I9WyEmbPQYCocfxzXr8g7BBCP7si";
  const endPoint = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie}&api-key=${apiKey}`;

  // REQUEST
  const getData = async () => {
    await fetch(endPoint)
      .then((response) => response.json())
      .then((data) => console.log(`Response: `, data))
      .catch((error) => console.log(`ERROR: `, error));
  };
  return getData();
};
export default requestApi;
