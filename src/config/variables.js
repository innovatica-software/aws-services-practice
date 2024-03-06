const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URL;
const NODE_ENV = process.env.NODE_ENV;
const jwtSecret = process.env.JWT_SECRET;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;
const Bucket = process.env.S3_BUCKET;
module.exports = {
  PORT,
  DB_URL,
  NODE_ENV,
  jwtSecret,
  accessKeyId,
  secretAccessKey,
  region,
  Bucket
};
