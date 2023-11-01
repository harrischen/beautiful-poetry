const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idiom', {
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
      comment: "汉语成语"
    },
    derivation: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "成语来源"
    },
    explanation: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "成语解释"
    },
    example: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "示例"
    },
    pinyin: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "拼音全称"
    },
    abbreviation: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "拼音缩写"
    },
    ext_1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "扩展字段1"
    },
    ext_2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "扩展字段2"
    },
    ext_3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "扩展字段3"
    },
    ext_4: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "扩展字段4"
    },
    ext_5: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "扩展字段5"
    }
  }, {
    sequelize,
    tableName: 'idiom',
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
