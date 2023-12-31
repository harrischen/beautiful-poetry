const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const { init: initDB, Counter } = require("./db");
const { getIdiomList } = require("./controller/idiom/list");
const { getIdiomDetail } = require("./controller/idiom/detail");

const { getPoetryList } = require("./controller/poetry/list");
const { getPoetryDetail } = require("./controller/poetry/detail");

const { getDictionaryList } = require("./controller/dictionary/list");
const { getDictionaryDetail } = require("./controller/dictionary/detail");

const logger = morgan("tiny");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger);

// 首页
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 更新计数
app.post("/api/count", async (req, res) => {
  const { action } = req.body;
  if (action === "inc") {
    await Counter.create();
  } else if (action === "clear") {
    await Counter.destroy({
      truncate: true,
    });
  }
  res.send({
    code: 0,
    data: await Counter.count(),
  });
});

// 获取计数
app.get("/api/count", async (req, res) => {
  const result = await Counter.count();
  res.send({
    code: 0,
    data: result,
  });
});

// 获取字典列表
app.post("/api/dictionary/list", async (req, res) => {
  const { code, message, data } = await getDictionaryList(req);
  res.send({
    code,
    message,
    data,
  });
});
app.post("/api/dictionary/detail", async (req, res) => {
  const { code, message, data } = await getDictionaryDetail(req);
  res.send({
    code,
    message,
    data,
  });
});

// 获取成语列表
app.post("/api/idiom/list", async (req, res) => {
  const { code, message, data } = await getIdiomList(req);
  res.send({
    code,
    message,
    data,
  });
});
app.post("/api/idiom/detail", async (req, res) => {
  const { code, message, data } = await getIdiomDetail(req);
  res.send({
    code,
    message,
    data,
  });
});

// 获取诗词列表
app.post("/api/poetry/list", async (req, res) => {
  const { code, message, data } = await getPoetryList(req);
  res.send({
    code,
    message,
    data,
  });
});
app.post("/api/poetry/detail", async (req, res) => {
  const { code, message, data } = await getPoetryDetail(req);
  res.send({
    code,
    message,
    data,
  });
});

// 小程序调用，获取微信 Open ID
app.get("/api/wx_openid", async (req, res) => {
  if (req.headers["x-wx-source"]) {
    res.send(req.headers["x-wx-openid"]);
  }
});

const port = process.env.PORT || 80;

async function bootstrap() {
  await initDB();
  app.listen(port, () => console.log("启动成功", port));
}

bootstrap();
