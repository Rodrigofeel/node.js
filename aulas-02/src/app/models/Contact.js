import Sequelize, { Model } from "sequelize";

class Contact extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                status: Sequelize.ENUM("ACTIVE", "INATIVE"),
            },
            {
                sequelize,
            }
        );
    }
    static associate(models) {
        this.hasMany(models.Contact);
    }
}

export default Contact;
