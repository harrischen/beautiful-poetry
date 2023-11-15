const { Idiom } = require("../../db");
const { getIdiomSearch } = require("./search");

module.exports.getIdiomList = async (req) => {
  const { word = "", pageLimit = "50", pageOffset = "0" } = req.body;
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
    offset: parseInt(pageOffset, 10),
    limit: parseInt(pageLimit, 10),
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
