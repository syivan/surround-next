const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "529b2900a2mshb478767e4246faap14a8eejsn33937c42f859",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchSearch = async (query) => {
  const response = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?q=${query}&part=snippet%2Cid&&maxResults=40`,
    options
  );
  return response;
};
