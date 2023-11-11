const { Dictionary } = require("../../db");

module.exports.getDictionaryDetail = async (req) => {
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

  const res = await Dictionary.findOne(params);

  return {
    code: 0,
    message: "success",
    data: res,
  };
};
