const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poetry', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    articleId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "文章的唯一标识"
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "标题"
    },
    authorName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "作者姓名"
    },
    authorId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "作者ID编号"
    },
    dynasty: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "朝代"
    },
    appreciation: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "欣赏、评价"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "内容"
    },
    pinyin: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "拼音"
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "评论"
    },
    translation: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "翻译"
    },
    intro: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "简介"
    },
    annotation: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "注解"
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
    ext_51: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "扩展字段5"
    }
  }, {
    sequelize,
    tableName: 'poetry',
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
