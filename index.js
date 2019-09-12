const express = require('express');
const line = require('@line/bot-sdk');

require('dotenv').config();
const app = express();

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