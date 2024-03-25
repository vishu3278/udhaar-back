module.exports = (sequelize, DataTypes) => {

    const Udhaar = sequelize.define("udhaars", {
    	amount: {
    		type: DataTypes.DECIMAL(10,2),
    		allowNull: false
    	},
    	date: {
    		type: DataTypes.DATEONLY
    	},
        people_id: {
            type: DataTypes.INTEGER
        },
        isDone: {
            type: DataTypes.BOOLEAN
        },
        isBad: {
            type: DataTypes.BOOLEAN
        },
    })

    return Udhaar
}