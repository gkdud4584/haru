require('dotenv').config();
const crypto = require('crypto');

function createToken(userid) {
    let header = { "tpy": "JWT", "alg": "HS256" }
    let exp = new Date().getTime() + (1000 * 60 * 60 * 2) //지금으로부터 2시간 뒤
    let payload = { userid, exp, }

    const encodingHeader = Buffer.from(JSON.stringify(header)).toString('base64')
                            .replace('==', '').replace('=', '');

    const encodingPayload = Buffer.from(JSON.stringify(payload)).toString('base64')
                            .replace('==', '').replace('=', '');

    const signature = crypto.createHmac('sha256', Buffer.from(process.env.salt))
                            .update(encodingHeader + '.' + encodingPayload)
                            .digest('base64').replace('==', '').replace('=', '');

    let jwt = `${encodingHeader}.${encodingPayload}.${signature}`;
    return jwt;
}

let token = createToken('asdf');
module.exports=createToken;