const knex = require("../../config/knex");

async function getBannerList(req, res) {
  let result = await knex("banner").where("status", 1);

  res.send(result);
}
async function getBanner(req, res) {
  let id = req.params.id;
  let result = await knex("banner").where("id", id).first();

  res.send(result);
}
module.exports = {
  getBannerList,
  getBanner,
};
