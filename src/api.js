import axios from "axios";

const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID KOAmVqqDpmT8Hx0WP7fviOFDeT6Jg9hhj4HwO79YoE8",
    },
    params: { query: term },
  });

  return response.data.results;
};

export default searchImage;
