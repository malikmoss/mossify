//abstracts http fetching mechanism
export default function fetcher(url: string, data = undefined) {
  //fetch is the browser's default fetch function to interact with apis
  return fetch(`${window.location.origin}/api{$url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
