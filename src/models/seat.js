"use strict";
const { Model } = require("sequelize");
const { Enum } = require("../utils/common");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
      });
    } 
  }
  Seat.init(
    {
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      row: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      col: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      types: {
        type: DataTypes.ENUM,
        values: [
          Enum.SEAT_TYPE.BUSINESS,
          Enum.SEAT_TYPE.ECONOMY,
          Enum.SEAT_TYPE.FIRST_CLASS,
          Enum.SEAT_TYPE.PREMIUM_ECONOMY,
        ],
        defaultValue: Enum.SEAT_TYPE.ECONOMY,
        allowNull:false
      },
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};
