module.exports = (sequelize, DataTypes) => {

    const People = sequelize.define("payee", {
    	name: {
    		type: DataTypes.STRING,
    		allowNull: false
    	},
    	phone: {
    		type: DataTypes.BIGINT(15)
    	},
    	email: {
    		type: DataTypes.STRING
    	}
    })

    return People
}