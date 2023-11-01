const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dictionary', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    word: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "汉字"
    },
    oldWord: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "旧版本的汉字"
    },
    strokes: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "笔画数量"
    },
    pinyin: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "拼音"
    },
    radicals: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "偏旁部首"
    },
    explanation: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "解释"
    },
    svg: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "svg配置信息"
    },
    wubi: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "五笔写法"
    },
    spelling: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "去除音节的拼音信息"
    },
    strokeOrder: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "笔画顺序"
    },
    ext_5: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "扩展字段5"
    }
  }, {
    sequelize,
    tableName: 'dictionary',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
