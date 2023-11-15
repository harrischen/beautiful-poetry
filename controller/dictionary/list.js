const { Dictionary } = require("../../db");
const { getDictionarySearch } = require("./search");

module.exports.getDictionaryList = async (req) => {
  const { word = "", pageLimit = "50", pageOffset = "0" } = req.body;
  if (word.trim()) {
    return await getDictionarySearch(req);
  }

  const params = {
    attributes: ["id", "word", "pinyin", "radicals", "wubi"],
    order: [["id", "ASC"]],
    offset: parseInt(pageOffset, 10),
    limit: parseInt(pageLimit, 10),
    cache: true,
  };

  const { count: totalRows, rows } = await Dictionary.findAndCountAll(params);
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
