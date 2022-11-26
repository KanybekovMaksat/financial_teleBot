export const  selectOptions = {
    reply_markup: JSON.stringify({
       inline_keyboard:[
            [{text:"Что такое инвестиция?", callback_data:"$0"}],
            [{text:'Что нужно знать об инвестициях?', callback_data:"$1"}],
            [{text:'Как вести личные финансы?', callback_data:"$2"}],
            [{text:'Зачем нужен брокер?', callback_data:"$3"},{text:'Как работают фьючерсы?', callback_data:"$4"}],
            [{text:"Что такое криптовалюта", callback_data:"$5"}, {text:'Как устроены банки?', callback_data:"$6"}],
            [{text:"Как сравнить компании?",callback_data:"$7"}, {text:"Как работают облигации", callback_data:"$8"}],
            [{text:"Как работают акции?",callback_data:"$9"}],
            [{text:"Маржинальная торговля",callback_data:"$10"}]
        ]
    })
}


export const menuOptions = {
    reply_markup: JSON.stringify({
       keyboard:[
            [{text:"О боте", callback_data:"descriptions"},{text:'Меню', callback_data:"menu"}],
            [{text:'Канал', callback_data:"channel"},{text:"Биржа", callback_data:"stock exchange"}],
        ]
    })
}


export const exchangeOptions = {
    reply_markup: JSON.stringify({
       inline_keyboard:[
            [{text:"Binance.com", callback_data:"binance"}],
            [{text:'investing.com', callback_data:"investing"}],
        ]
    })
}




