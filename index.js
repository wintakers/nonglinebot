const express = require('express');
const line = require('@line/bot-sdk');
const MSG = require('./data');
require('dotenv').config();
const app = express();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./demo1.sqlite", err => {
    console.log(err);
})
// console.log(MSG.data1)

const data = {
    id: null
}
app.get('/data', (req, res) => {
    db.all("SELECT * FROM question", [], (err, row) => {
        // console.dir(row);
        data.id = JSON.stringify(row)
        row.map((item) => { console.dir(item) })
    });
    res.setHeader('Content-Type', 'application/json');
  res.send(data.id)
})
const request = require('request')




const config = {
    channelAccessToken: 'ThXtHfpRU4AJDAQbAXs2UP3QSLzsqXi/TQ5D3nn85jPlrXJmyELlgXRCq1m3a54n7bzjjm5rF+y2ABIh4hdY/Mlm452KEu3QUPR/cwR7WLpSSVhU1e900yQcMZOoV8mhfdqohkHoDwLk88ZeSn4DNQdB04t89/1O/w1cDnyilFU=',
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

async function handleMessageEvent(event) {

    let msg = {
        type: 'text',
        text: 'dffd'
    };

    let eventText = event.message.text.toLowerCase();

    if (eventText === 'ขอที่อยู่') {
        msg = {
            'type': 'text',
            text: ' สถาบันวิจัยและพัฒนาแห่ง มหาวิทยาลัยเทคโนโลยีราชมงคลรัตนโกสินทร์ เลขที่ 96 หมู่ 3 ถนนพุทธมณฑลสาย 5 ต.ศาลายา อ.พุทธมณฑล จ.นครปฐม 73170'
        }
    } else if (eventText === 'สอบถาม') {
        // console.dir();
 


        msg = {
            'type': 'text',
            text: 'สวัสดีค่ะท่านสามารถสอบถามเกี่ยวกับ\n-ทุนวิจัย\n-เบิกเงินวิจัย\n-กองทุนสนับสนุนงานวิจัย\n-เอกสารดาวน์โหลด\n' +
                'ท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละหัวข้อกับน้องบอทได้ เช่น ทุนวิจัย เป็นต้น'

        }
    } else if (eventText === 'สอบถาม') {
        msg = {
            'type': 'text',
            text: 'สวัสดีค่ะท่านสามารถสอบถามเกี่ยวกับ\n-ทุนวิจัย\n-เบิกเงินวิจัย\n-กองทุนสนับสนุนงานวิจัย\n-เอกสารดาวน์โหลด\n' +
                'ท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละหัวข้อกับน้องบอทได้ เช่น ทุนวิจัย เป็นต้น'

        }
    } else if (eventText === 'สอบถามหน่อยครับ') {
        msg = {
            'type': 'text',
            text: 'สวัสดีค่ะท่านสามารถสอบถามเกี่ยวกับ\n-ทุนวิจัย\n-เบิกเงินวิจัย\n-กองทุนสนับสนุนงานวิจัย\n-เอกสารดาวน์โหลด\n' +
                'ท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละหัวข้อกับน้องบอทได้ เช่น ทุนวิจัย เป็นต้น'

        }
    } else if (eventText === 'สอบถามหน่อยค่ะ') {
        msg = {
            'type': 'text',
            text: 'สวัสดีค่ะท่านสามารถสอบถามเกี่ยวกับ\n-ทุนวิจัย\n-เบิกเงินวิจัย\n-กองทุนสนับสนุนงานวิจัย\n-เอกสารดาวน์โหลด\n' +
                'ท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละหัวข้อกับน้องบอทได้ เช่น ทุนวิจัย เป็นต้น'

        }
    } else if (eventText === 'ถามไรหน่อย') {
        msg = {
            'type': 'text',
            text: 'สวัสดีค่ะท่านสามารถสอบถามเกี่ยวกับ\n-ทุนวิจัย\n-เบิกเงินวิจัย\n-กองทุนสนับสนุนงานวิจัย\n-เอกสารดาวน์โหลด\n' +
                'ท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละหัวข้อกับน้องบอทได้ เช่น ทุนวิจัย เป็นต้น'

        }
    } else if (eventText === 'สวัสดีครับ') {
        msg = {
            'type': 'text',
            text: 'สวัสดีค่ะท่านสามารถสอบถามเกี่ยวกับ\n-ทุนวิจัย\n-เบิกเงินวิจัย\n-กองทุนสนับสนุนงานวิจัย\n-เอกสารดาวน์โหลด\n' +
                'ท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละหัวข้อกับน้องบอทได้ เช่น ทุนวิจัย เป็นต้น'

        }
    } else if (eventText === 'สวัสดีค่ะ') {
        msg = {
            'type': 'text',
            text: 'สวัสดีค่ะท่านสามารถสอบถามเกี่ยวกับ\n-ทุนวิจัย\n-เบิกเงินวิจัย\n-กองทุนสนับสนุนงานวิจัย\n-เอกสารดาวน์โหลด\n' +
                'ท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละหัวข้อกับน้องบอทได้ เช่น ทุนวิจัย เป็นต้น'

        }
    } else if (eventText === 'สวัสดี') {
        msg = {
            'type': 'text',
            text: 'สวัสดีค่ะท่านสามารถสอบถามเกี่ยวกับ\n-ทุนวิจัย\n-เบิกเงินวิจัย\n-กองทุนสนับสนุนงานวิจัย\n-เอกสารดาวน์โหลด\n' +
                'ท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละหัวข้อกับน้องบอทได้ เช่น ทุนวิจัย เป็นต้น'

        }
    } else if (eventText === 'หวัดดี') {
        msg = {
            'type': 'text',
            text: 'สวัสดีค่ะท่านสามารถสอบถามเกี่ยวกับ\n-ทุนวิจัย\n-เบิกเงินวิจัย\n-กองทุนสนับสนุนงานวิจัย\n-เอกสารดาวน์โหลด\n' +
                'ท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละหัวข้อกับน้องบอทได้ เช่น ทุนวิจัย เป็นต้น'

        }
    }
    else if (eventText === 'report') {


        db.all("SELECT * FROM question", [], (err, row) => {
            // console.dir(row);
            data.id = JSON.stringify(row)
            row.map((item) => { console.dir(item) })
        });
        request({
            method: 'POST',
            uri: 'https://notify-api.line.me/api/notify',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                bearer: 'KkD5Q5KrOjTl9BcwQBxBstj4qZpo8bu0Kk6q9bAPJqv', //token
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

        msg={
            'type':'text',
            'text':data.id
        }
        
    } else if (eventText === 'ทุนวิจัย') {
        msg = {
            'type': 'text',
            text: 'ทุนวิจัย2564\nทุนวิจัย2563\nท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละปี พ.ศ. กับน้องบอทได้ เช่น ทุนวิจัย 2564 เป็นต้น'

        }
    } else if (eventText === 'ขอรายละเอียดทุนวิจัย') {
        msg = {
            'type': 'text',
            text: '2564\n' +
                ' วิทยาศาสตร์ วิจัยและนวัตกรรม\n' +
                -	'http://www.ird.rmutr.ac.th/blog/2019/09/03/budget_a2564/\n' +
                '2563\n' +
                'งบประมาณเงินรายได้\n' +
                '-	อยู่ระหว่างการจัดสรรงบประมาณ ประกาศผลช่วงประมาณ ต.ค. – พ.ย. 2562 สอบถาม คุณศิรินภา โทร 2425\n' +
                '2563\n' +
                'งบประมาณเงินแผ่นดิน (บูรณา)\n' +
                '-	อยู่ระหว่างการพิจารณาของสำนักงบประมาณ ประกาศผลช่วงประมาณ ต.ค. – พ.ย. 2562 สอบถาม คุณศิรินภา โทร 2425\n' +
                '2563\n' +
                'งบประมาณภายนอกอื่น ๆ\n' +
                '-	ติดต่อคุณวรารัตน์ โทร 2425\n' +
                '2563\n' +
                'วช.\n' +
                '-	https://www.nrms.go.th/'





        }
    } else if (eventText === 'ทุนวิจัย2564') {
        msg = {
            'type': 'text',
            text: ' วิทยาศาสตร์ วิจัยและนวัตกรรม\n	http://www.ird.rmutr.ac.th/blog/2019/09/03/budget_a2564/'

        }
    } else if (eventText === 'ทุนวิจัย2563') {
        msg = {
            'type': 'text',
            text: ' งบประมาณเงินรายได้\n-	อยู่ระหว่างการจัดสรรงบประมาณ ประกาศผลช่วงประมาณ ต.ค. – พ.ย. 2562 สอบถาม คุณศิรินภา โทร 2425, งบประมาณเงินแผ่นดิน (บูรณา)-	อยู่ระหว่างการพิจารณาของสำนักงบประมาณ ประกาศผลช่วงประมาณ ต.ค. – พ.ย. 2562 สอบถาม คุณศิรินภา โทร 2425, งบประมาณภายนอกอื่น ๆ-	ติดต่อคุณวรารัตน์ โทร 2425, วช.\n-	https://www.nrms.go.th/'

        }
    } else if (eventText === 'เบิกเงินวิจัย') {
        msg = {
            'type': 'text',
            text: 'เบิกเงินงวดที่ 1\n' +
                'เบิกเงินงวดที่ 2\n' +
                'เบิกเงินงวดที่ 3\n' +
                'ท่านสามารถดูรายละเอียดโดยการพิมพ์ขอรายละเอียดแต่ละงวดกับน้องบอทได้ เช่น เบิกเงินงวดที่ 1 เป็นต้น'

        }
    } else if (eventText === 'ขอรายละเอียดเบิกเงินวิจัย') {
        msg = {
            'type': 'text',
            text: 'เบิกเงินงวดที่ 1\n' +
                '1. ข้อเสนอโครงการ\n' +
                '2. แผนการใช้จ่ายเงิน (สวพ.2)\n' +
                '3. อนุมัติโครงการ (สวพ. 1 เฉพาะงบบูรณาการ)\n' +
                'ดาวน์โหลดเอกสาร https://ird.rmutr.ac.th/formdownload/\n' +
                'ติดต่อคุณวรารักษ์ โทร 2424\n' +
                'เบิกเงินงวดที่ 2\n' +
                '1. แบบ สวพ.4\n' +
                '2. แบบ สวพ.5\n' +
                '3. หลักฐานการใช้จ่ายเงิน (ตัวจริง) จำนวน ....... ฉบับ\n' +
                '4. แบบ สวพ.6 รายงานความก้าวหน้าโครงการวิจัย จำนวน 5 หน้า\n' +
                '- (รายงานความก้าวหน้าโครงการวิจัย) แบบ สวพ. 6.1\n' +
                '- (รายงานความก้าวหน้าแผนวิจัยของชุดโครงการวิจัย) แบบ สวพ. 6.2\n' +
                '5. การส่งรายงานความก้าวหน้าผ่านระบบ NRMS (กรณีจัดทำข้อเสนอโครงการวิจัยผ่านระบบ NRMS)\n' +
                'ดาวน์โหลดเอกสาร https://ird.rmutr.ac.th/formdownload/\n' +
                'ติดต่อคุณวรารักษ์ โทร 2424\n' +
                'เบิกเงินงวดที่ 3\n' +
                '1. แบบ สวพ. 4\n' +
                '2. แบบ สวพ. 5\n' +
                '3. แบบ สวพ. 7\n' +
                '4. หลักฐานการใช้จ่ายเงิน (ตัวจริง) จำนวน ........ ฉบับ\n' +
                '5. การส่งรายงานฉบับสมบูรณ์ผ่านระบบ NRMS (กรณีจัดทำข้อเสนอโครงการวิจัยผ่านระบบ NRMS)\n' +
                '6. รายงานวิจัยฉบับสมบูรณ์ จำนวน 3 เล่ม แบ่งเป็น\n' +
                '6.1 ต้นสังกัด จำนวน 1 เล่ม\n' +
                '6.2 ส่งสถาบันวิจัยและพัฒนา จำนวน 2 เล่ม\n' +
                '7. บทสรุปการดำเนินงานและผลงานวิจัย (แบบสวพ. 13)\n' +
                '8. แผ่นซีดีบันทึกข้อมูลรายงานวิจัยฉบับสมบูรณ์  (ข้อ 6) และบทสรุปการดำเนินงาน และผลงานวิจัย (ข้อ 7) โดยบันทึกเป็นไฟล์นามสกุล  (docx. และ pdf.) จำนวน 5 แผ่น แบ่งเป็น\n' +
                '8.1 ติดท้ายเล่มรายงานส่งต้นสังกัด 1 แผ่น \n' +
                '8.2 ติดท้ายเล่มรายงานส่งสถาบันวิจัยฯ 2 แผ่น\n' +
                '8.3 ใส่ซองแผ่นซีดี  จำนวน 2 แผ่น\n' +
                '9. หลักฐานของผลผลิต/ผลลัพธ์ของงานวิจัย (ภาคผนวกท้ายเล่มรายงานวิจัย) (ถ้ามี)\n' +
                '10. หลักฐานการส่งมอบครุภัณฑ์ให้กับหน่วยงานต้นสังกัดจำนวน  ........ ฉบับ (ถ้ามี)\n' +
                'ดาวน์โหลดเอกสาร https://ird.rmutr.ac.th/formdownload/\n' +
                'ติดต่อคุณวรารักษ์ โทร 2424'





        }
    } else if (eventText === 'เบิกเงินงวดที่1') {
        msg = {
            'type': 'text',
            text: MSG[0] + MSG[1] + MSG[2]

        }
    } else if (eventText === 'เบิกเงินงวดที่2') {
        msg = {
            'type': 'text',
            text: '1. แบบ สวพ.4\n2. แบบ สวพ.5\n3. หลักฐานการใช้จ่ายเงิน (ตัวจริง) จำนวน ....... ฉบับ\n4. แบบ สวพ.6 รายงานความก้าวหน้าโครงการวิจัย จำนวน 5 หน้า\n- (รายงานความก้าวหน้าโครงการวิจัย) แบบ สวพ. 6.1\n- (รายงานความก้าวหน้าแผนวิจัยของชุดโครงการวิจัย) แบบ สวพ. 6.2\n5. การส่งรายงานความก้าวหน้าผ่านระบบ NRMS (กรณีจัดทำข้อเสนอโครงการวิจัยผ่านระบบ NRMS) ดาวน์โหลดเอกสาร https://ird.rmutr.ac.th/formdownload/\nติดต่อคุณวรารักษ์ โทร 2424 '

        }
    } else if (eventText === 'เบิกเงินงวดที่3') {
        msg = {
            'type': 'text',
            text: '1. แบบ สวพ. 4\n' +
                '2. แบบ สวพ. 5\n3. แบบ สวพ. 7\n' +
                '4. หลักฐานการใช้จ่ายเงิน (ตัวจริง) จำนวน ........ ฉบับ\n' +
                '5. การส่งรายงานฉบับสมบูรณ์ผ่านระบบ NRMS (กรณีจัดทำข้อเสนอโครงการวิจัยผ่านระบบ NRMS)\n' +
                '6. รายงานวิจัยฉบับสมบูรณ์ จำนวน 3 เล่ม แบ่งเป็น\n' +
                '6.1 ต้นสังกัด จำนวน 1 เล่ม\n' +
                '6.2 ส่งสถาบันวิจัยและพัฒนา จำนวน 2 เล่ม\n' +
                '7. บทสรุปการดำเนินงานและผลงานวิจัย (แบบสวพ. 13)\n' +
                '8. แผ่นซีดีบันทึกข้อมูลรายงานวิจัยฉบับสมบูรณ์  (ข้อ 6) และบทสรุปการดำเนินงาน และผลงานวิจัย (ข้อ 7) โดยบันทึกเป็นไฟล์นามสกุล  (docx. และ pdf.) จำนวน 5 แผ่น แบ่งเป็น\n' +
                '8.1 ติดท้ายเล่มรายงานส่งต้นสังกัด 1 แผ่น\n' +
                '8.2 ติดท้ายเล่มรายงานส่งสถาบันวิจัยฯ 2 แผ่น\n' +
                '8.3 ใส่ซองแผ่นซีดี  จำนวน 2 แผ่น\n' +
                '9. หลักฐานของผลผลิต/ผลลัพธ์ของงานวิจัย (ภาคผนวกท้ายเล่มรายงานวิจัย) (ถ้ามี)\n' +
                '10. หลักฐานการส่งมอบครุภัณฑ์ให้กับหน่วยงานต้นสังกัดจำนวน  ........ ฉบับ(ถ้ามี)\n' +
                'ดาวน์โหลดเอกสาร https://ird.rmutr.ac.th/formdownload/ \n' +
                'ติดต่อคุณวรารักษ์ โทร 2424'

        }
    } else if (eventText === 'กองทุนสนับสนุนงานวิจัย') {
        msg = {
            'type': 'text',
            text: 'กำหนดการประชุม\n' +
                '-ติดต่อคุณพัชรี\nเอกสารที่ใช้ยืนต่อกองทุน\n' +
                'http://www.ird.rmutr.ac.th/%e0%b8%81%e0%b8%ad%e0%b8%87%e0%b8%97%e0%b8%b8%e0%b8%99%e0%b8%aa%e0%b8%99%e0%b8%b1%e0%b8%9a%e0%b8%aa%e0%b8%99%e0%b8%b8%e0%b8%99%e0%b8%87%e0%b8%b2%e0%b8%99%e0%b8%a7%e0%b8%b4%e0%b8%88%e0%b8%b1%e0%b8%a2/ '

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
    } else if (eventText === 'location') {
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
    else {
        
        msg = {
            type: 'text',
            text: 'น้องบอทสามารถตอบคำถามเกี่ยวกับ\n-ทุนวิจัย\n-เบิกเงินวิจัย\n-กองทุนสนับสนุนงานวิจัย\n-เอกสารดาวน์โหลด'
        };
       await db.all("INSERT INTO  question(question) VALUES(?)", [eventText], (err) => {
            if(err) console.dir(err.message);

        });
    }

    return client.replyMessage(event.replyToken, msg);
}

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('run at port', app.get('port'));
});