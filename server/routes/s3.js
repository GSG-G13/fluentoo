const s3 = require('express').Router();
const uploadS3 = require('../s3/index');

s3.get('/s3url', uploadS3);
module.exports = s3;
