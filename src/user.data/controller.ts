export async function addImage(req, res) {
  try {
    console.log(req.files);

    res.status(200).json({ m: "dsa" });
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}
