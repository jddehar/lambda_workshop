
import * as AWS from 'aws-sdk';
import { S3 } from 'aws-sdk';


export const handler = async (event: any = {}, context: any = {}): Promise<any> => {
    var s3 = new AWS.S3();
    var bucketName = String(process.env.BUCKETNAME); 
    var imageBuffer = new Buffer(event.encoded_image, 'base64');

    const s3Params = {
        Bucket: bucketName,
        Key: event.filename,
        Body: imageBuffer    
    };

    s3.upload(s3Params, function(err: Error, data: any) {
        console.log(err);
        if(err) { return console.log(err) }
        console.log(`Uploaded to ${data.Location}`);
        var body = { imageURL: data.Location}
        return {
            statusCode: 200,
            isBase64Encoded: false,
            body: JSON.stringify(body)
        }
    })
}