import { bot} from './index.js'

import { getInvestZero } from './db/info/investZero.db.js';

import { howInvestOptions } from './menuOptions.js';
import { howToManageFin } from './menuOptions.js';
import { whyNeedBroker } from './menuOptions.js';
import { howToWorkFutures } from './menuOptions.js';




export function reply() {
      bot.on("callback_query", async msg =>{
    const data = msg.data
    const chatId = msg.message.chat.id;

    //stock exchange
    if(data === "binance"){
        return bot.sendMessage(chatId, "<a>https://www.binance.com/ru</a>",{parse_mode:"HTML"})
    }
    if(data === "investing"){
        return bot.sendMessage(chatId, "<a>https://ru.investing.com/</a>",{parse_mode:"HTML"})
    }

    //learn investing
    if(data === "$0"){
        await bot.sendPhoto(chatId,"https://images.unsplash.com/photo-1640340434863-6932029a76ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGludmVzdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
        return bot.sendMessage(chatId, getInvestZero)
    }
    if(data === '$1'){
        await bot.sendPhoto(chatId, "https://imgproxy.cdn-tinkoff.ru/retina_x2/aHR0cHM6Ly9pbnZlc3QtZWR1Y2F0aW9uLW1lZGlhLmNkbi10aW5rb2ZmLnJ1L2NlNDUxNzA0LTc5ZWYtNDU0Zi1iNzBkLWExNzM5MmEzNzkyYi1iaWcucG5n");
        return bot.sendMessage(chatId ,"Урок состоит из 5 частей:", howInvestOptions)
    }
    if(data === "$2"){
        await bot.sendPhoto(chatId, "https://i.pinimg.com/564x/33/57/89/33578916ef1f6084177c4510bab293ed.jpg");
        return bot.sendMessage(chatId, "Урок состоит из 7 частей:", howToManageFin);
    }
    if(data === "$3"){
        await bot.sendPhoto(chatId, "https://i.pinimg.com/236x/0f/77/3c/0f773c84b62812517239a96b3c221dfa.jpg");
        return bot.sendMessage(chatId,"Урок состоит из 5 частей:", whyNeedBroker)
    }
    if(data === "$4"){
        await bot.sendPhoto(chatId,"https://i.pinimg.com/564x/9c/bb/e0/9cbbe0ca2134e729b312f7d2dd232fa6.jpg");
        return bot.sendMessage(chatId, "Урок состоит из 5 частей:", howToWorkFutures);
    }
    return bot.sendMessage(chatId, "Error")
})
}




    // if(data === "$5"){
        
    // }
    // if(data === "$6"){
        
    // }
    // if(data === "$7"){
        
    // }
    // if(data === "$8"){
        
    // }
    // if(data === "$9"){
        
    // }