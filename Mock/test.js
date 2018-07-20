import Mock from "mockjs";

var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'mts|2': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'account|+1': 512110000021,
            "accountType": 1,
            "audioRvcStreamVO": [],
            "audioSendStreamVO": [],
            "bigProtrait": "/static/common/images/avatar_256_256.png",
            "bitrate": 1024,
            "cascadeId": "0",
            "chairman": 1,
            "confLevel": 2,
            "dialBitRate": "1024",
            "discuss": 0,
            "doubleflow": 0,
            "mix": 0,
            //"moid": "e82563c9-38c3-4142-a38a-2e44f025e908",
            "moid": "@string('lower',8)-@string('lower',4)-@string('lower',4)-@string('lower',4)-@string('lower',12)",
            "mtAlias": "",
            "mtType": "1",
            "mtcascade": "",
            "mtchnid": "",
            "mtid": "2",
            "mute": 0,
            "name": function(){
            	return this.account;
            },
            "online": 1,
            "poll": 0,
            "portrait": "",
            "protocol": "",
            "select": 0,
            "silence": 0,
            "speaker": 0,
            "speaking": 0,
            "stream": 0,
            "svRvcStreamVO": [],
            "svSendStreamVO": [],
            "tvwall": 0,
            "upMt": 0,
            "videoRvcStreamVO": [],
            "videoSendStreamVO": [],
            "vmp": 0
        }]
    })
    // 输出结果
console.log(JSON.stringify(data, null, 4))
