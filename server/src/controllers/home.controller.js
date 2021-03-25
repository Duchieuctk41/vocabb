let getHome = (req, res) => {
  return res.render("home/home");
};

module.exports = {
  getHome: getHome,
};
