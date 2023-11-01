const { Sequelize, DataTypes } = require("sequelize");

console.log("-------------------------");
console.log(process.env);
console.log("-------------------------");

// 从环境变量中读取数据库配置
const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_ADDRESS = "" } = process.env;
console.log("db的配置信息", process.env);

const [host, port] = MYSQL_ADDRESS.split(":");

const sequelize = new Sequelize("nodejs_demo", MYSQL_USERNAME, MYSQL_PASSWORD, {
  host,
  port,
  /** 如果表不存在,则创建该表(如果已经存在,则不执行任何操作) */
  sync: false,
  /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  dialect: "mysql",
});

// 定义数据模型
const Counter = sequelize.define("Counter", {
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

// 数据库初始化方法
async function init() {
  await Counter.sync({ alter: true });
}

// 导出初始化方法和模型
module.exports = {
  init,
  Counter,
};
