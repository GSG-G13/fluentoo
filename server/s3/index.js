require('dotenv').config();
const aws = require('aws-sdk');
const crypto = require('crypto');
const { promisify } = require('util');

const randomBytes = promisify(crypto.randomBytes);

const region = 'us-east-1';
const bucketName = 'fluentotoexpresstest';
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
});

const generateUploadURL = async () => {
  const rawBytes = await randomBytes(16);
  const imageName = rawBytes.toString('hex');

  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  });

  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
};
const uploadS3 = async (req, res) => {
  const url = await generateUploadURL();
  res.send(url);
};
module.exports = uploadS3;
