const mongoose = require('mongoose');
const { config } = require("../config/secret");

main().catch(err => console.log(err));

async function main() {
    mongoose.set('strictQuery', false);

    // to use with the database locali(localhost-3001)
    // await mongoose.connect('mongodb://localhost:27017/toys-project');

    await mongoose.connect(`mongodb+srv://${config.userDb}:${config.passDb}@chanydatabase.w2offix.mongodb.net/toys-project`);
    console.log("connect to toys-project in data-base mongo-atlas ");
}