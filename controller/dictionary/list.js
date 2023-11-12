const { Dictionary } = require("../../db");
const { getDictionarySearch } = require("./search");

module.exports.getDictionaryList = async (req) => {
  const { word = "" } = req.body;
  if (word.trim()) {
    return await getDictionarySearch(req);
  }

  const params = {
    attributes: ["id", "word", "pinyin", "radicals", "wubi"],
    order: [["id", "ASC"]],
    offset: 0,
    limit: 10,
    cache: true,
  };

  const { count: totalRows, rows } = await Dictionary.findAndCountAll(params);
  const totalPage = Math.ceil(totalRows / params.limit);

  return {
    code: 0,
    message: "success",
    data: {
      totalRows,
      totalPage,
      rows,
    },
  };
};
