const { Poetry } = require("../../db");

module.exports.getPoetryDetail = async (req) => {
  const { id = 0 } = req.body;
  console.log(req.body);
  if (!(id && typeof id === "number")) {
    return {
      code: 0,
      message: "success",
      data: null,
    };
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
      id,
    },
    offset: 0,
    limit: 1,
    cache: true,
  };

  const res = await Poetry.findOne(params);

  return {
    code: 0,
    message: "success",
    data: res,
  };
};
