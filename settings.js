const fs = require('fs');
const chalk = require('chalk');

/*
	* Create By Naze
	* Follow https://github.com/nazedev
	* Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['6285852536578','6287872363060','6283869909316'] //['628','628'] 2 owner atau lebih
global.packname = 'ZORO BOTZ'
global.author = 'IZHARDEV'
global.botname = 'ZORO BOTZ'
global.listprefix = ['+','!','.']
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.tempatStore = 'baileys_store.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.pairing_code = true
global.number_bot = '' // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/naze.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/c/',
	gh: 'https://github.com/',
	gc: 'https://chat.whatsapp.com/',
	ch: '@newsletter',
}

global.limit = {
	free: 20,
	premium: 999,
	vip: 9999
}

global.money = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'Fitur Khusus Owner!',
	admin: 'Fitur Khusus Admin!',
	botAdmin: 'Bot Bukan Admin!',
	group: 'Gunakan Di Group!',
	private: 'Gunakan Di Privat Chat!',
	limit: 'Limit Anda Telah Habis!',
	prem: 'Khusus User Premium!',
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done',
    ress: '*Mohon maaf,* Anda tidak dapat mengakses fitur ini. Karena anda *belum terdaftar* di dalam Reseller Panel.\n\nAnda dapat mendaftarkan sebagai reseller dengan menghubungi kami di:\n\n* *IZHARDEV :*\n`https://wa.me/6285852536578`\n\n* *Owner :*\n`https://wa.me/6287872363060`\n\n\n\n\n\n\n`Copyright`\n`@𝙸𝚣𝚑𝚊𝚛𝙳𝚎𝚟𝚎𝚕𝚘𝚙`\n`𝙵𝚁𝙾𝙼 @𝙸𝙽𝚅_𝙼𝚞𝚕𝚝𝚒𝙼𝚎𝚍𝚒𝚊`',
}

global.APIs = {
	hitori: 'https://api.hitori.pw',
}
global.APIKeys = {
	'https://api.hitori.pw': 'htrkey-77eb83c0eeb39d40',
	geminiApikey: ['AIzaSyD0lkGz6ZhKi_MHSSmJcCX3wXoDZhELPaQ','AIzaSyDnBPd_EhBfr73NssnThVQZYiKZVhGZewU','AIzaSyA94OZD-0V4quRbzPb2j75AuzSblPHE75M','AIzaSyB5aTYbUg2VQ0oXr5hdJPN8AyLJcmM84-A','AIzaSyB1xYZ2YImnBdi2Bh-If_8lj6rvSkabqlA']
}

// Lainnya

global.badWords = ['tolol','goblok','asu','pantek','kampret','ngentot','jancok','kontol','memek','lonte']
global.chatLength = 1000

//------------- private settings --------------\\
global.domain = "https://kalszmarket.yubii.my.id";
global.apikey = "ptla_7VomRtlEs2h8KDlnMzG2GIQp7M4H4tT9hp5pBGBGcjh";
global.capikey = "ptlc_VV7eg9IkSeriw5TE5WoHf7YxbblqcZKrj44MkDa6V3V";
global.eggsnya = "15"; // id eggs yang dipakai
global.location = "2"; // id location
global.thumb = 'https://raw.githubusercontent.com/IzharDevelop/database/main/LOGO%20INV.jpg' // THUMBAIL DARI PANEL
global.nodejs = "ghcr.io/parkervcp/yolks:nodejs_23";
global.excludedServerIdsPrivate = ["23", "1"]; // Ganti dengan ID server owner



//------------- public settings --------------\\
global.domain2 = "https://reyzofficial.dzakkyofficial.my.id";
global.apikey2 = "ptla_g1qNrwrD6KnI0IwROhAu8TutM9KY4HGTVc8qRhfbukP";
global.capikey2 = "ptlc_pZg8NnMyaUNxh6XH3fGtF1IOSdAGnwW8YNcmfbDYaTd";
global.eggsnya2 = "15"; // id eggs yang dipakai
global.location2 = "1"; // id location
global.thumb2 = 'https://raw.githubusercontent.com/IzharDevelop/database/main/LOGO%20INV.jpg' // THUMBAIL DARI PANEL global.nodejs2 = "ghcr.io/parkervcp/yolks:nodejs_23";
global.excludedServerIdsPublic = ["2", "1"]; // Ganti dengan id panel owner 


//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
