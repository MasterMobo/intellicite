import "dotenv/config";
const env = {
    // MONGO
    MONGO_USERNAME: process.env.MONGO_USERNAME || "foo",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "bar",
    MONGO_DB_NAME: process.env.MONGO_DB_NAME || "test",

    SEARCH_SERVICE_IP: process.env.SEARCH_SERVICE_IP,

    // JWT
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY,

    // Can be kept default
    PORT: process.env.PORT || 3000,
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_IP: process.env.MONGO_IP || "database",
};

export default env;
