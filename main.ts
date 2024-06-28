const urls = [
  "https://susmitha-maria.onrender.com/",
  "https://jnj-scam.onrender.com/",
  "https://global-chat-zl7b.onrender.com/",
];

async function fetchUrl(url: string) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      console.log(`Successfully fetched ${url} at ${new Date().toISOString()}`);
    } else {
      console.error(`Failed to fetch ${url}. Status: ${response.status}`); 
    }
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
  }
}

// Function to repeatedly fetch each URL in the array every specified interval
function startFetching(urls: string[], interval: number) {
  urls.forEach((url) => {
    fetchUrl(url); // Initial fetch
    setInterval(() => fetchUrl(url), interval);
  });
}

// 15 minutes in milliseconds
const fifteenMinutes = 1 * 60 * 1000;

// Start fetching all URLs at the specified interval
startFetching(urls, fifteenMinutes);

// To keep the script running on Deno Deploy, we need to handle requests
addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Fetch triggers are running", {
      status: 200,
      headers: { "content-type": "text/plain" },
    }) 
  );
});
