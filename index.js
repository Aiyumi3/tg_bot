const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN)
//console.log(msg.message)
bot.start((msg) => msg.reply(`Hello~~~✨🌸 [${msg.message.from.id}] ${msg.message.from.first_name ? msg.message.from.first_name :
    msg.message.from.username} @${msg.message.from.username ? msg.message.from.username : ''}`));//  when send /start
bot.help((msg) => msg.reply('autoreply bot, when gets bts/бтс, tbz/the boyz/зе бойз/добоидж/дбз, txt/тхт/tomorrow x together,' +
    'skz/stray kids/скз/стреи/стрей кидз msg will send member\'s name \n /start => start bot\n /help => all commands')); // when send /help display message

bot.on('text', (msg) => {
    try {
        if(msg.message.text == 'bts' || msg.message.text == 'бтс') {
             msg.telegram.sendMessage(msg.message.chat.id, `to~~~✨🌸 [${msg.message.from.id}] ${msg.message.from.first_name ? msg.message.from.first_name :
                msg.message.from.username} @${msg.message.from.username ? msg.message.from.username : ''} 
                \n` + 'Kim NamJoon 🐨 \n' +
                 'Kim SeokJin 🐹/🦙 \n' +
                 'Min YoonGi 🐱 \n' +
                 'Jung HoSeok 🌞/🐿️ \n' +
                 'Park JiMin 🐣/🐥 \n' +
                 'Kim TaeHyung 🐻/🐯 \n' +
                 'Jeon JungKook 🐰 \n' +
                 '💜BTS💜');
        }else if(msg.message.text == 'tbz' || msg.message.text == 'the boyz' || msg.message.text == 'зе бойз' ||
            msg.message.text == 'добоидж' || msg.message.text == 'дбз') {
            msg.telegram.sendMessage(msg.message.chat.id, `to~~~✨🌸 [${msg.message.from.id}] ${msg.message.from.first_name ? msg.message.from.first_name :
                msg.message.from.username} @${msg.message.from.username ? msg.message.from.username : ''} 
                \n` + 'Lee SangYeon \n' +
                'Jacob Bae, Bae JoonYoung 🍐\n' +
                'Kim YoungHoon 🍞\n' +
                'Lee JaeHyun \n' +
                'Lee JuYeon 🐱\n' +
                'Kevin Moon, Moon HyungSeo 🌕\n' +
                'Choi ChanHee \n' +
                'Ji ChangMin 🐿️\n' +
                'Ju HakNyeon, Zhou HeNian 🍊\n' +
                'Kim SunWoo ☀\n' +
                'Eric Son, Son YoungJae 🦄\n' +
                '❤THE BOYZ❤');
        }else if(msg.message.text == 'txt' || msg.message.text == 'тхт' || msg.message.text == 'tomorrow x together'){
            msg.telegram.sendMessage(msg.message.chat.id, `to~~~✨🌸 [${msg.message.from.id}] ${msg.message.from.first_name ? msg.message.from.first_name :
                msg.message.from.username} @${msg.message.from.username ? msg.message.from.username : ''} 
                \n` + 'Choi SooBin, Steve Choi 🐰 \n' +
                'Choi YeonJun, Daniel Choi 🦊\n' +
                'Choi BeomGyu, Ben Choi 🐯/🐻\n' +
                'Kang TaeHyun, Terry Kang 🐿️\n' +
                'Kai Kamal Huening, Jung Kai, Xiuning Kai 🐧\n' +
                '💙TOMORROW X TOGETHER💙');
        }else if(msg.message.text == 'skz' || msg.message.text == 'stray kids' || msg.message.text == 'скз' ||
            msg.message.text == 'стреи' || msg.message.text == 'стрей кидз'){
            msg.telegram.sendMessage(msg.message.chat.id, `to~~~✨🌸 [${msg.message.from.id}] ${msg.message.from.first_name ? msg.message.from.first_name :
                msg.message.from.username} @${msg.message.from.username ? msg.message.from.username : ''} 
                \n` + 'Bang Chan, Christopher Bang 🐺\n' +
                'Lee MinHo 🐰/🐱\n' +
                'Seo ChangBin 🐷🐰\n' +
                'Hwang HyunJin 🦙\n' +
                'Han JiSung, Peter Han 🐿️\n' +
                'Felix Lee, Lee YongBok 🐥\n' +
                'Kim SeungMin 🐶\n' +
                'Yang JeongIn 🦊\n' +
                '💚Stray Kids💚');
        }

    }catch (e){
        console.error(e);
    }
});



bot.launch(); // start

//enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
