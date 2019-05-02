
import * as AWS from 'aws-sdk';

const s3 = new AWS.S3();

export const handler = async (event: any = {}, context: any = {}): Promise<any> => {
    var response = {
        'statusCode': 200,
        'body': " "
    }
    var bucketName = String(process.env.BUCKETNAME); 
    var data
    var imageBuffer

    //Verify the passed in data
    try {
        data = JSON.parse(event.body);
        imageBuffer = new Buffer(data.encoded_image, 'base64');
    }catch(err) {
        response.statusCode = 400
        response.body = `{"message" : ${err}}`
        return response;
    }

    //Send our encoded file to S3
    try {
        const s3Params = {
            Bucket: bucketName,
            Key: data.filename,
            Body: imageBuffer
        };
        var result = await s3.upload(s3Params).promise();
        response.body = `{"url" : ${result.Location}}`
        return response;
    } catch (err) {
        return err;
    }
}