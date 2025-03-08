const allproduct = async (req, res) => {
  try {
    res.status(200).json({ suuccess: true, data: "data" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { allproduct };
