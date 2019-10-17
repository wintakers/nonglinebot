const express = require('express');
const line = require('@line/bot-sdk');
const request = require('request')
require('dotenv').config();
const app = express();
const { clientDB } = require("./connect");
// console.log(MSG.data1)
//console.log(address.MSG);

const data = {
    id: null,
    del: null
};
const IDB = "INSERT INTO question (question) VALUES ($1)";
const SDB = "select * from question";
clientDB.connect();
app.get("/data", (req, res) => {
    let result = [];
    clientDB.query(SDB, (err, resDB) => {
        result.push(resDB.rows);
        data.id = JSON.stringify(resDB.rows);
        if (err) throw err;
        for (let row of resDB.rows) {
            console.log(JSON.stringify(row));
        }
        res.status(200).json(result)
        console.log(`this is = ${result}`);
    });
});




const config = {
    channelAccessToken: 'TbEv2xd8cmH6YZ+9FhI6IGgK9sq9iEFqSLGZzWUlhn7/9oYu8YlBI+JlTEFDho+7ai916qqzYFeSncTaIEFF2e6DHeBZsVqp7wIlTDGb2FBR+5TIxBgvhTestwRXMVM7ZMUIC66VMWKAqTtlp368HwdB04t89/1O/w1cDnyilFU=',
    channelSecret: '87aa2aa19807d50703ab7cc38f839695'
};

const client = new line.Client(config);

app.post('/webhook', line.middleware(config), (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result));
});

function handleEvent(event) {

    console.log(event);
    if (event.type === 'message' && event.message.type === 'text') {
        handleMessageEvent(event);
    } else {
        return Promise.resolve(null);
    }
}

async function handleMessageEvent(event) {

    // let msg = {
    //     type: 'text',
    //     text: 'dffd'
    // };

    let eventText = event.message.text.toLowerCase();

    if (eventText === 'ขอที่อยู่') {
        msg = {
            'type': 'text',
            text: address.MSG
        }
    } else if (eventText === 'สอบถาม') {
        // console.dir();
        msg = {
            'type': 'text',
            text: query.MSG
        }
    } else if (eventText === 'สอบถามหน่อยครับ') {
        msg = {
            'type': 'text',
            text: query.MSG

        }
    } else if (eventText === 'สอบถามหน่อยค่ะ') {
        msg = {
            'type': 'text',
            text: query.MSG

        }
    } else if (eventText === 'ถามไรหน่อย') {
        msg = {
            'type': 'text',
            text: query.MSG

        }
    } else if (eventText === 'สวัสดีครับ') {
        msg = {
            'type': 'text',
            text: query.MSG
        }
    } else if (eventText === 'สวัสดีค่ะ') {
        msg = {
            'type': 'text',
            text: query.MSG

        }
    } else if (eventText === 'สวัสดี') {
        msg = {
            'type': 'text',
            text: query.MSG
        }
    } else if (eventText === 'หวัดดี') {
        msg = {
            'type': 'text',
            text: query.MSG

        }
    } else if (eventText.replace(/\s+/g, '').slice(0, 6) === "delete") {

        let delparams = eventText.slice(6, eventText.length);
        //  data.id=delparams
        await clientDB.query("DELETE FROM question WHERE id=$1", [delparams], (err, resDB) => {
            if (err) throw err;
            else {
                if (resDB.rowCount) {
                    data.del = "Delete success"
                    let msg = {
                        type: "text",
                        text: data.del
                    };
                    request(
                        {
                            method: "POST",
                            uri: "https://notify-api.line.me/api/notify",
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            auth: {
                                bearer: "WWfQVqxh4p9lb6q97aDEk3p5HgxGIeBFjQUyiuto7SK" //token
                            },
                            form: {
                                message: `this is eventext=${data.del}` //ข้อความที่จะส่ง
                            }
                        },
                        (err, httpResponse, body) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(body);
                            }
                        }
                    );
                    return client.replyMessage(event.replyToken, msg);
                }
                else {
                    data.del = "Delete error"
                    let msg = {
                        type: "text",
                        text: data.del
                    };
                    request(
                        {
                            method: "POST",
                            uri: "https://notify-api.line.me/api/notify",
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            auth: {
                                bearer: "WWfQVqxh4p9lb6q97aDEk3p5HgxGIeBFjQUyiuto7SK" //token
                            },
                            form: {
                                message: `this is eventext=${data.del}` //ข้อความที่จะส่ง
                            }
                        },
                        (err, httpResponse, body) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(body);
                            }
                        }
                    );
                    return client.replyMessage(event.replyToken, msg);
                }
            }
        });
    }


    else if (eventText === 'report') {


        let result = []
        clientDB.query(SDB, (err, resDB) => {


            if (err) throw err;
            for (let row of resDB.rows) {
                result.push(row)
                console.log(JSON.stringify(row));
            }
            data.id = JSON.stringify(result)
            let  msg = {
                'type': 'text',
                'text': data.id
            }
            
            console.log(`this is = ${result}`);
            return client.replyMessage(event.replyToken, msg);
        });
        request({
            method: 'POST',
            uri: 'https://notify-api.line.me/api/notify',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                bearer: 'WWfQVqxh4p9lb6q97aDEk3p5HgxGIeBFjQUyiuto7SK', //token
            },
            form: {
                message: `this is eventext=${data.id}`, //ข้อความที่จะส่ง
            },
        }, (err, httpResponse, body) => {
            if (err) {
                console.log(err)
            } else {
                console.log(body)
            }
        })

    

    } else if (eventText === 'ทุนวิจัย') {
        msg = {
            'type': 'text',
            text: capital.MSG

        }
    } else if (eventText === 'ขอรายละเอียดทุนวิจัย') {
        msg = {
            'type': 'text',
            text: capital.MSG1

        }
    } else if (eventText === 'ทุนวิจัย2564') {
        msg = {
            'type': 'text',
            text: capital.MSG2

        }
    } else if (eventText === 'ทุนวิจัย2563') {
        msg = {
            'type': 'text',
            text: capital.MSG3

        }
    } else if (eventText === 'เบิกเงินวิจัย') {
        msg = {
            'type': 'text',
            text: withdraw.MSG
        }
    } else if (eventText === 'ขอรายละเอียดเบิกเงินวิจัย') {
        msg = {
            'type': 'text',
            text: withdraw.MSG1

        }
    } else if (eventText === 'เบิกเงินงวดที่1') {
        msg = {
            'type': 'text',
            text: withdraw.MSG2

        }
    } else if (eventText === 'เบิกเงินงวดที่2') {
        msg = {
            'type': 'text',
            text: withdraw.MSG3

        }
    } else if (eventText === 'เบิกเงินงวดที่3') {
        msg = {
            'type': 'text',
            text: withdraw.MSG4

        }
    } else if (eventText === 'กองทุนสนับสนุนงานวิจัย') {
        msg = {
            'type': 'text',
            text: fund.MSG

        }
    } else if (eventText === 'คุยกับบอท') {
        msg = {
            'type': 'text',
            text: 'สวัสดีค่ะท่านสามารถสอบถามเกี่ยวกับ\n-ทุนวิจัย\n-เบิกเงินวิจัย\n-กองทุนสนับสนุนงานวิจัย\n-เอกสารดาวน์โหลด\n' +
                'ท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละหัวข้อกับน้องบอทได้ เช่น ทุนวิจัย เป็นต้น'

        }
    } else if (eventText === 'สามารถติดต่อได้ทางไหนบ้าง') {
        msg = {
            'type': 'text',
            text: 'สวัสดีค่ะท่านสามารถติดต่อ สถาบันวิจัยและพัฒนา มทร.รัตนโกสินทร์ ได้ตามช่องทางการติดต่อด้านล่างนี้\nFacebook : https://www.facebook.com/irdrmutr\nWebsite : https://ird.rmutr.ac.th\nEmail : ird.r@rmutr.ac.th , irdrmutr@hotmail.co.th\nสามารถติดต่อได้ที่ 02-441-6060 ต่อ 2420-2426'

        }
    } else if (eventText === 'เอกสารดาวน์โหลด') {
        msg = {
            'type': 'text',
            text: 'สวัสดีค่ะท่านสามารถดาวน์โหลดเอกสารต่างๆได้ในลิงค์ด้านล่างนี้\nhttps://ird.rmutr.ac.th/formdownload/ '

        }
    }
    else {

        msg = {
            type: 'text',
            text: 'น้องวิทบอทประจำสักนักวิทย ยินดีรับใช้เสมอนะครับขอบคุณครับ'
        };
        if (eventText !== "hello, world" && eventText !== null) {
            //   clientDB.connect();
            clientDB.query(IDB, [eventText], (err, resDB) => {
                if (err) throw err;
                for (let row of resDB.rows) {
                    console.log(JSON.stringify(row));
                }
                //  clientDB.end();
            });
        }
        
    return client.replyMessage(event.replyToken, msg);

    }

}

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('run at port', app.get('port'));
});
