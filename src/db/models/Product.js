module.exports = (sequelize, DataTypes) => {
    const alias = "Product",
    const cols  = {
        category_id: {
            type: DataTypes.INTEGER
        },
        type_id: {
            type: DataTypes.INTEGER
        },
        model_id: {
            type: DataTypes.INTEGER
        },
        description_id: {
            type: DataTypes.INTEGER
        },
        size_id: {
            type: DataTypes.INTEGER
        },
        color_id: {
            type: DataTypes.INTEGER
        },
        image_id: {
            type: DataTypes.INTEGER
        },
        discount_id: {
            type: DataTypes.INTEGER
        },
        stock: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER
        }
    },

    const config = {
        tableName: "products"
    }
    
    const productModel = sequelize.define(alias, cols, config)
    return productModel;
}