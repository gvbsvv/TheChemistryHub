export default function handler(req, res) {
  const { query } = req.query;

  // Mock search results (Replace this with actual logic)
  const results = [
    { title: "Introduction to Acids and Bases", url: "/acid-base-learn-more" },
    { title: "pH Scale and Indicators", url: "/ph-scale" },
  ];

  res.status(200).json({ results });
}
