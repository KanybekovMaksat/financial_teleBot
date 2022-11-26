export const howInvestOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard:[
             [{text:"Введение", callback_data:"$1.1"}],
             [{text:'Зачем нужны инвестиции?', callback_data:"$1.2"}],
             [{text:'Во что инвестировать?', callback_data:"$1.3"}],
             [{text:'Почему сейчас самое время', callback_data:"$1.4"}],
             [{text:'А как инвестировать?', callback_data:"$1.5"}]
         ]
     })
}


export const howToManageFin = {
    reply_markup: JSON.stringify({
        inline_keyboard:[
             [{text:"Зачем вести учет финансов", callback_data:"$2.1"}],
             [{text:'Зачем нужны инвестиции?', callback_data:"$2.2"}],
             [{text:'Проводим аудит активов и пассивов', callback_data:"$2.3"}],
             [{text:'Оцениваем денежные потоки', callback_data:"$2.4"}],
             [{text:'Увеличиваем свободный денежный поток', callback_data:"$2.5"}],
             [{text:'Защищаем финансы от незапланированных трат', callback_data:"$2.6"}],
             [{text:'Состовляем бюджет', callback_data:"$2.7"}]
         ]
     })
}


export const whyNeedBroker = {
    reply_markup: JSON.stringify({
        inline_keyboard:[
             [{text:"Как и зачем появился брокер?", callback_data:"$3.1"}],
             [{text:'Как устроен бизнес брокера', callback_data:"$3.2"}],
             [{text:'Как заявка инвестрова попадает в биржу', callback_data:"$3.3"}],
             [{text:'Учет активов и выплат дивидендов', callback_data:"$3.4"}],
             [{text:'Как заработать на трендах рынка', callback_data:"$3.5"}]
         ]
     })
}

export const howToWorkFutures = {
    reply_markup: JSON.stringify({
        inline_keyboard:[
             [{text:"Зачем нужны деривативы?", callback_data:"$4.1"}],
             [{text:'ОТ форварда к фьючерсу', callback_data:"$4.2"}],
             [{text:'Парметры фьючерсов', callback_data:"$4.3"}],
             [{text:'Как тоговать фьючерсами', callback_data:"$4.4"}],
             [{text:'Фьючерс как индикатор', callback_data:"$4.5"}]
         ]
     })
}