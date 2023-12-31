const { Op } = require("sequelize");
const { Dictionary } = require("../../db");
const { getDictionaryList } = require("./list");

module.exports.getDictionarySearch = async (req) => {
  const { word = "", pageLimit = "50", pageOffset = "0" } = req.body;
  if (!word.trim()) {
    return await getDictionaryList(req);
  }

  // 当前指定页面的数据;
  const keyword = decodeURIComponent(word.trim());
  const whereWord = {
    word: {
      [Op.in]: keyword.split(""),
    },
  };
  const whereSpelling = {
    spelling: {
      [Op.in]: keyword.split(" "),
    },
  };

  const params = {
    attributes: ["id", "word", "pinyin", "radicals", "wubi"],
    where: /^[a-zA-Z|\s]+$/.test(keyword) ? whereSpelling : whereWord,
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
