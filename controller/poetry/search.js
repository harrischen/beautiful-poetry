const { Op } = require("sequelize");
const { Poetry } = require("../../db");
const { getPoetryList } = require("./list");

module.exports.getPoetrySearch = async (req) => {
  const { word = "", pageLimit = "20", pageOffset = "0" } = req.body;
  if (!word.trim()) {
    return await getPoetryList(req);
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
    where: {
      content: {
        [Op.like]: `%${decodeURIComponent(word.trim())}%`,
      },
    },
    order: [["id", "ASC"]],
    offset: parseInt(pageOffset, 10),
    limit: parseInt(pageLimit, 10),
    cache: true,
  };

  const { count: totalRows, rows } = await Poetry.findAndCountAll(params);
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
