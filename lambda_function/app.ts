export const handler = async (event: any = {}): Promise<any> => {
    var body = {Message : "Hello Workshop!"} 
    var response = {
        "statusCode": 200,
        "body": JSON.stringify(body),
        "isBase64Encoded": false
    };
    return response
}