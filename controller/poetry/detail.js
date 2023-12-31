const { Poetry } = require("../../db");

module.exports.getPoetryDetail = async (req) => {
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

  const res = await Poetry.findOne(params);

  return {
    code: 0,
    message: "success",
    data: res,
  };
};
