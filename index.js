const express = require('express');
const line = require('@line/bot-sdk');
const MSG= require('./data') ;
require('dotenv').config();
const app = express();
// console.log(MSG.data1);

const config = {
    channelAccessToken:'ThXtHfpRU4AJDAQbAXs2UP3QSLzsqXi/TQ5D3nn85jPlrXJmyELlgXRCq1m3a54n7bzjjm5rF+y2ABIh4hdY/Mlm452KEu3QUPR/cwR7WLpSSVhU1e900yQcMZOoV8mhfdqohkHoDwLk88ZeSn4DNQdB04t89/1O/w1cDnyilFU=',
    channelSecret: '0d3c6048012faf01cf74af21a7a85631'
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

function handleMessageEvent(event) {

   let msg = {
        type: 'text',
        text: 'น้องบอทสามารถตอบคำถามเกี่ยวกับ ทุนวิจัย เบิกเงินวิจัยและกองทุนสนับสนุนงานวิจัย'
    };

   let eventText = event.message.text.toLowerCase();

    if (eventText === 'ขอที่อยู่') {
        msg = {
            'type': 'text',
            text: ' สถาบันวิจัยและพัฒนาแห่ง มหาวิทยาลัยเทคโนโลยีราชมงคลรัตนโกสินทร์ เลขที่ 96 หมู่ 3 ถนนพุทธมณฑลสาย 5 ต.ศาลายา อ.พุทธมณฑล จ.นครปฐม 73170'
        }
    }else if (eventText === 'ทุนวิจัย2564') {
        msg = {
            'type': 'text',
            text: ' วิทยาศาสตร์ วิจัยและนวัตกรรม,-	http://www.ird.rmutr.ac.th/blog/2019/09/03/budget_a2564/'

        }
    }else if (eventText === 'ทุนวิจัย2563') {
        msg = {
            'type': 'text',
            text: ' งบประมาณเงินรายได้-	อยู่ระหว่างการจัดสรรงบประมาณ ประกาศผลช่วงประมาณ ต.ค. – พ.ย. 2562 สอบถาม คุณศิรินภา โทร 2425, งบประมาณเงินแผ่นดิน (บูรณา)-	อยู่ระหว่างการพิจารณาของสำนักงบประมาณ ประกาศผลช่วงประมาณ ต.ค. – พ.ย. 2562 สอบถาม คุณศิรินภา โทร 2425, งบประมาณภายนอกอื่น ๆ-	ติดต่อคุณวรารัตน์ โทร 2425, วช.-	https://www.nrms.go.th/'

        }
    }else if (eventText === 'เบิกเงินวิจัย') {
        msg = {
            'type': 'text',
            text: 'เบิกเงินงวดที่ 1, เบิกเงินงวดที่ 2, เบิกเงินงวดที่ 3 ท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละงวดกับน้องบอทได้ เช่น เบิกเงินงวดที่ 1 เป็นต้น'

        }
    }else if (eventText === 'เบิกเงินงวดที่ 1') {
        msg = {
            'type': 'text',
            text: MSG[0]+MSG[1]+MSG[2]+MSG[3]

        }
    }else if (eventText === 'เบิกเงินงวดที่ 2') {
        msg = {
            'type': 'text',
            text: '1. แบบ สวพ.4\n2. แบบ สวพ.5\n3. หลักฐานการใช้จ่ายเงิน (ตัวจริง) จำนวน ....... ฉบับ\n4. แบบ สวพ.6 รายงานความก้าวหน้าโครงการวิจัย จำนวน 5 หน้า\n- (รายงานความก้าวหน้าโครงการวิจัย) แบบ สวพ. 6.1\n- (รายงานความก้าวหน้าแผนวิจัยของชุดโครงการวิจัย) แบบ สวพ. 6.2\n5. การส่งรายงานความก้าวหน้าผ่านระบบ NRMS (กรณีจัดทำข้อเสนอโครงการวิจัยผ่านระบบ NRMS) ดาวน์โหลดเอกสาร http://www.ird.rmutr.ac.th/doc/ ติดต่อคุณวรารักษ์ โทร 2424 '

        }
    }else if (eventText === 'เบิกเงินงวดที่ 3') {
        msg = {
            'type': 'text',
            text: '1. แบบ สวพ. 4\n2. แบบ สวพ. 5\n3. แบบ สวพ. 7\n4. หลักฐานการใช้จ่ายเงิน (ตัวจริง) จำนวน ........ ฉบับ\n5. การส่งรายงานฉบับสมบูรณ์ผ่านระบบ NRMS (กรณีจัดทำข้อเสนอโครงการวิจัยผ่านระบบ NRMS)\n6. รายงานวิจัยฉบับสมบูรณ์ จำนวน 3 เล่ม แบ่งเป็น\n6.1 ต้นสังกัด จำนวน 1 เล่ม\n6.2 ส่งสถาบันวิจัยและพัฒนา จำนวน 2 เล่ม\n7. บทสรุปการดำเนินงานและผลงานวิจัย (แบบสวพ. 13)\n8. แผ่นซีดีบันทึกข้อมูลรายงานวิจัยฉบับสมบูรณ์  (ข้อ 6) และบทสรุปการดำเนินงาน และผลงานวิจัย (ข้อ 7) โดยบันทึกเป็นไฟล์นามสกุล  (docx. และ pdf.) จำนวน 5 แผ่น แบ่งเป็น\n8.1 ติดท้ายเล่มรายงานส่งต้นสังกัด 1 แผ่น\n8.2 ติดท้ายเล่มรายงานส่งสถาบันวิจัยฯ 2 แผ่น 8.3 ใส่ซองแผ่นซีดี  จำนวน 2 แผ่น\n9. หลักฐานของผลผลิต/ผลลัพธ์ของงานวิจัย (ภาคผนวกท้ายเล่มรายงานวิจัย) (ถ้ามี)\n10. หลักฐานการส่งมอบครุภัณฑ์ให้กับหน่วยงานต้นสังกัดจำนวน  ........ ฉบับ(ถ้ามี) ดาวน์โหลดเอกสาร http://www.ird.rmutr.ac.th/doc/ ติดต่อคุณวรารักษ์ โทร 2424'

        }
    }else if (eventText === 'กองทุนสนับสนุนงานวิจัย') {
        msg = {
            'type': 'text',
            text: 'กำหนดการประชุม\n-	ติดต่อคุณพัชรี\nเอกสารที่ใช้ยืนต่อกองทุน\nhttp://www.ird.rmutr.ac.th/%e0%b8%81%e0%b8%ad%e0%b8%87%e0%b8%97%e0%b8%b8%e0%b8%99%e0%b8%aa%e0%b8%99%e0%b8%b1%e0%b8%9a%e0%b8%aa%e0%b8%99%e0%b8%b8%e0%b8%99%e0%b8%87%e0%b8%b2%e0%b8%99%e0%b8%a7%e0%b8%b4%e0%b8%88%e0%b8%b1%e0%b8%a2/ '

        }
    }else if (eventText === 'location') {
        msg = {
            "type": "location",
            "title": "my location",
            "address": "〒150-0002 東京都渋谷区渋谷２丁目２１−１",
            "latitude": 35.65910807942215,
            "longitude": 139.70372892916203
        }
    } else if (eventText === 'template button') {
        msg = {
            "type": "template",
            "altText": "this is a buttons template",
            "template": {
                "type": "buttons",
                "thumbnailImageUrl": "https://www.thesun.co.uk/wp-content/uploads/2017/03/fifa-17-2.jpg?strip=all&w=742&quality=100",
                "title": "Menu",
                "text": "Please select",
                "actions": [{
                    "type": "postback",
                    "label": "Buy",
                    "data": "action=buy&itemid=123"
                }, {
                    "type": "postback",
                    "label": "Add to cart",
                    "data": "action=add&itemid=123"
                }, {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                }]
            }
        }
    } else if (eventText === 'template confirm') {
        msg = {
            "type": "template",
            "altText": "this is a confirm template",
            "template": {
                "type": "confirm",
                "text": "Are you sure?",
                "actions": [{
                    "type": "message",
                    "label": "Yes",
                    "text": "yes"
                }, {
                    "type": "message",
                    "label": "No",
                    "text": "no"
                }]
            }
        }
    } else if (eventText === 'carousel') {
        msg = {
            "type": "template",
            "altText": "this is a carousel template",
            "template": {
                "type": "carousel",
                "columns": [
                    {
                        "thumbnailImageUrl": "https://www.thesun.co.uk/wp-content/uploads/2017/03/fifa-17-2.jpg?strip=all&w=742&quality=100",
                        "title": "this is menu",
                        "text": "description",
                        "actions": [
                            {
                                "type": "postback",
                                "label": "Buy",
                                "data": "action=buy&itemid=111"
                            },
                            {
                                "type": "postback",
                                "label": "Add to cart",
                                "data": "action=add&itemid=111"
                            },
                            {
                                "type": "uri",
                                "label": "View detail",
                                "uri": "http://example.com/page/111"
                            }
                        ]
                    },
                    {
                        "thumbnailImageUrl": "https://www.thesun.co.uk/wp-content/uploads/2017/03/fifa-17-2.jpg?strip=all&w=742&quality=100",
                        "title": "this is menu",
                        "text": "description",
                        "actions": [
                            {
                                "type": "postback",
                                "label": "Buy",
                                "data": "action=buy&itemid=222"
                            },
                            {
                                "type": "postback",
                                "label": "Add to cart",
                                "data": "action=add&itemid=222"
                            },
                            {
                                "type": "uri",
                                "label": "View detail",
                                "uri": "http://example.com/page/222"
                            }
                        ]
                    }
                ]
            }
        }
    }

    return client.replyMessage(event.replyToken, msg);
}

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('run at port', app.get('port'));
});