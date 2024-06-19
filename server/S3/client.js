const dotenv = require('dotenv').config();
const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;

const s3 = new S3Client({
    region: bucketRegion
});

const createImageLink = async(link) => {
    const getObjectParams = {
        Bucket: bucketName,
        Key: link
    }

    const command = new GetObjectCommand(getObjectParams);
    return await getSignedUrl(s3, command,  {expiresIn: 3600});
}

module.exports = { s3, bucketName, PutObjectCommand, createImageLink };