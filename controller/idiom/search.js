const { Op } = require("sequelize");
const { Idiom } = require("../../db");
const { getIdiomList } = require("./list");

module.exports.getIdiomSearch = async (req) => {
  const { type = "", word = "", pageLimit = "50", pageOffset = "0" } = req.body;
  if (!word.trim()) {
    return await getIdiomList(req);
  }

  // 当前指定页面的数据;
  const whereAbbreviation = decodeURIComponent(word.trim());

  // 查询关键字,则按Like进行匹配
  const whereWord = {
    [Op.like]: `%${whereAbbreviation}%`,
  };

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
    where: {
      word: type === "word" ? whereWord : whereAbbreviation,
    },
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
