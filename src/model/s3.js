const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuidv4 } = require("uuid");
const {
  accessKeyId,
  secretAccessKey,
  region,
  Bucket,
} = require("../config/variables");

const s3Client = new S3Client({
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

const uploadFile = async (file) => {
  try {
    const key = `${uuidv4()}_${file.originalname}`;
    const params = {
      Bucket: Bucket,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    };
    const command = new PutObjectCommand(params);

    await s3Client.send(command);
    const objectUrl = `https://${Bucket}.s3.amazonaws.com/${key}`;

    return objectUrl;
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw new Error("Error uploading file to S3");
  }
};

module.exports = { uploadFile };
