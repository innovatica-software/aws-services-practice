const { Router } = require("express");
const multer = require("multer");

const { s3UploadFile } = require("../controllers/aws.controller");

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
router.post("/file/upload", upload.single("file"), s3UploadFile);
module.exports = router;
