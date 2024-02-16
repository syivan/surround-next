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

export const fetchRelatedFeed = async (videoID) => {
  const response = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoID}&part=id%2Csnippet&type=video&maxResults=30`,
    options
  );
  return response;
};

export const fetchVideoDetails = async (videoID) => {
  {
    const response = await fetch(
      `https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${videoID}`,
      options
    );
    return response;
  }
};
