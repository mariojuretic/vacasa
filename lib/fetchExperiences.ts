const BASE_URL = "https://api.jsonbin.io/v3/b/";
const API_KEY = process.env.JSONBIN_API_KEY!;

export const fetchExperiences = async () => {
  const response = await fetch(BASE_URL + "64a813d49d312622a37bc867", {
    headers: {
      "X-Master-Key": API_KEY,
    },
  });

  const { record: experiences } = await response.json();
  return experiences;
};
