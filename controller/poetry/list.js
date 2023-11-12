const { Poetry } = require("../../db");
const { getPoetrySearch } = require("./search");

module.exports.getPoetryList = async (req) => {
  const { word = "" } = req.body;
  if (word.trim()) {
    return await getPoetrySearch(req);
  }

  const params = {
    attributes: [
      "id",
      "articleId",
      "title",
      "authorName",
      "authorId",
      "dynasty",
      "appreciation",
      "content",
      "pinyin",
      "comment",
      "translation",
      "intro",
      "annotation",
    ],
    order: [["id", "ASC"]],
    offset: 0,
    limit: 10,
    cache: true,
  };

  const { count: totalRows, rows } = await Poetry.findAndCountAll(params);
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
