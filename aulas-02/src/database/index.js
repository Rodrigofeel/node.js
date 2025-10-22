import { Sequelize } from "sequelize";

import config from "./config/database";

import Customer from "../app/models/Customer";
import Contact from "../app/models/Contact";
import Users from "../app/models/User";

const models = [Customer, Contact, Users];

class Database {
    constructor() {
        this.connection = new Sequelize(config);
    }
    init() {
        models.forEach((model) => model.init(this.connection));
    }
}

export default new Database();
