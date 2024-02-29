const getHealth = async (req, res) => {
  res.status(200).send({ message: "Health is OK." });
};

module.exports = {
  getHealth,
};
