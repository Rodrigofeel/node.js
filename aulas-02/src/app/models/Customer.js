import Sequelize, { Model } from "sequelize";

class Customer extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                // status: Sequelize.ENUM("ACTIVE", "INATIVE"),
            },
            {
                sequelize,
            }
        );
    }
}

export default Customer;
