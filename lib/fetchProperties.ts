const BASE_URL = "https://api.jsonbin.io/v3/b/";
const API_KEY = process.env.JSONBIN_API_KEY!;

export const fetchProperties = async () => {
  const response = await fetch(BASE_URL + "64ba2630b89b1e2299c1df26", {
    headers: {
      "X-Master-Key": API_KEY,
    },
  });

  const { record: properties } = await response.json();
  return properties;
};
