/*
   * Base By Dika Ardnt
   * Create By Naze
   * Recode By Danta
   * Contact Me on wa.me/6281356484612
   * Follow https://github.com/Nazedev
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// Other
global.owner = ['6282193252764']
global.ownernomer = "6282193252764"
global.premium = ['6282193252764']
global.packname = '𝑺𝒕𝒊𝒄𝒌𝒆𝒓 𝑩𝒚'
global.ownername = "𝑫𝒂𝒓𝒌 𝑴𝑫"
global.author = '𝑫𝒂𝒓𝒌 𝑴𝑫'
global.sessionName = 'dantadev'
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['.']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "∞",
    free: 15
}
global.thumb = fs.readFileSync('./image/dantaa.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
