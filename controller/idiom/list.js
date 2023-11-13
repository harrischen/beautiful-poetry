const { Idiom } = require("../../db");
const { getIdiomSearch } = require("./search");

module.exports.getIdiomList = async (req) => {
  const { word = "" } = req.body;
  if (word.trim()) {
    return await getIdiomSearch(req);
  }

  const params = {
    attributes: [
      "id",
      "word",
      "derivation",
      "explanation",
      "example",
      "pinyin",
      "abbreviation",
    ],
    order: [["id", "ASC"]],
    offset: 0,
    limit: 10,
    cache: true,
  };

  const { count: totalRows, rows } = await Idiom.findAndCountAll(params);
  const totalPages = Math.ceil(totalRows / params.limit);

  return {
    code: 0,
    message: "success",
    data: {
      totalRows,
      totalPages,
      rows,
    },
  };
};
