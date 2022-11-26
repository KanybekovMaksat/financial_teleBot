import TelegramBot from 'node-telegram-bot-api';

const token = "5905198548:AAGVKIH7QvhqQVaggNgo-rL3FFNcryNGTCc";

export const bot = new TelegramBot(token, {polling:true})

import { reply } from './reply.js';

import { menuOptions } from './options.js'
import { selectOptions } from './options.js';
import { exchangeOptions } from './options.js';


const numberOne = ('./db/img/ramzan.jpg')


const start = () => {
    bot.setMyCommands([
        {command:'/start',description: "welcome the my telegram bot"},
    ])

    bot.on('message', async msg =>{
        const text = msg.text;
        const userName = msg.from.first_name
        const chatId = msg.chat.id;
    
        if(text === '/start'){
           await bot.sendSticker(chatId, "https://cdn.tlgrm.app/stickers/af4/8a8/af48a831-3849-460d-ba93-58719d5d363b/192/7.webp")
           await  bot.sendMessage(chatId, `Hello my dear friend ${userName}!`);
           return bot.sendMessage(chatId, `${userName} ,давно хотел знать такие термины как акции,облигации и фьючерсы?Тогда ты по нужному адресу!`, menuOptions);
        }
        if(text === 'О боте'){
            await bot.sendAnimation(chatId, "https://tlgrm.ru/_/stickers/161/308/1613082c-3dba-3614-820c-78aea0adbc52/19.webp");
            return bot.sendMessage(chatId, "Этот бот, научит вас инвестировать правильно и собрать свой инвестиционный портфель")
        }
        if(text === 'Канал'){
            await bot.sendAnimation(chatId, "https://tlgrm.ru/_/stickers/161/308/1613082c-3dba-3614-820c-78aea0adbc52/22.webp");
            return bot.sendMessage(chatId, "Этот канал, научит вас инвестировать правильно и собрать свой инвестиционный портфель")
        }
        if(text === 'Меню'){
            await bot.sendSticker(chatId, 'https://cdn.tlgrm.app/stickers/161/308/1613082c-3dba-3614-820c-78aea0adbc52/192/5.webp')
            return bot.sendMessage(chatId,"Учимся правильно инвестировать:", selectOptions)
        }
        if(text === 'Биржа'){
            return bot.sendMessage(chatId, "Биржа", exchangeOptions)
        }
        if(text === "Кто тут намбер ван?" || text === "Кто тут number one?" || text === "кто тут намбер ван" || text === "who is number one here?"){
            return bot.sendPhoto(chatId, numberOne,{caption:"He is number one here"});
        }
        
        return bot.sendMessage(chatId, "i don't understand you")
    
    })
    reply()

}


start()