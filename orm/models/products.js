"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        
        static associate(models){

        }
}

Products.init(
    {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        category: DataTypes.STRING,
    }, 
    {
        sequelize,
        modelName: "Products",
    }
);

return Products;
};