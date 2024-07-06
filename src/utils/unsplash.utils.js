import config from "../data/config.json";

const fetchOptions = {
  method: "GET", // or 'POST', 'PUT', 'DELETE', etc.
  headers: {
    "Content-Type": "application/json",
    Authorization: `Client-ID ${config.client_id}`,
    "Accept-Version": config.Accept_version,
  },
};

async function searchUnsplash(search) {
  if (!search) return;
  const apiUrl = `${config.base_url}search/photos?query=${search}`;
  const result = await fetch(apiUrl, fetchOptions);
  console.log(result);
  return await result.json();
}

export { searchUnsplash };
