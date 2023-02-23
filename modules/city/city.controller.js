const knex = require("../../config/knex");

async function getCityList(req, res) {
  let query = knex("city").where("status", 1);
  let result = await query;
  res.send(result);
}
module.exports = {
  getCityList,
};
