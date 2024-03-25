module.exports = (sequelize, DataTypes) => {

    const Transaction = sequelize.define("transactions", {
    	amount: {
    		type: DataTypes.DECIMAL(10,2),
    		allowNull: false
    	},
    	date: {
    		type: DataTypes.DATEONLY
    	},
        udhaar_id: {
            type: DataTypes.INTEGER
        },
        people_id: {
            type: DataTypes.INTEGER
        },
    })

    return Transaction
}