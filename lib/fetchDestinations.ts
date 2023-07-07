const BASE_URL = "https://api.jsonbin.io/v3/b/";
const API_KEY = process.env.JSONBIN_API_KEY!;

export const fetchDestinations = async () => {
  const response = await fetch(BASE_URL + "64a80f4b9d312622a37bc679", {
    headers: {
      "X-Master-Key": API_KEY,
    },
  });

  const { record: destinations } = await response.json();
  return destinations;
};
