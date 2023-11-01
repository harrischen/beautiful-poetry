const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('author', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Primary Key"
    },
    authorId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "作者唯一标识"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "作者名称"
    },
    dynasty: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "作者名称"
    },
    birthYear: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "作者出生年份"
    },
    deathYear: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "作者死亡年份"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "作者详细描述"
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
    tableName: 'author',
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
