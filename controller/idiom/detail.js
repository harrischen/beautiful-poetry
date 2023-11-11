const { Idiom } = require("../../db");

module.exports.getIdiomDetail = async (req) => {
  const { id = 0 } = req.body;
  if (!id) {
    return {
      code: 0,
      message: "success",
      data: null,
    };
  }

  const params = {
    where: {
      id,
    },
    offset: 0,
    limit: 1,
    cache: true,
  };

  const res = await Idiom.findOne(params);

  return {
    code: 0,
    message: "success",
    data: res,
  };
};
