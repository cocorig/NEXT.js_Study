export default async function getNews() {
  const res = await fetch("http://localhost:8080/news");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
