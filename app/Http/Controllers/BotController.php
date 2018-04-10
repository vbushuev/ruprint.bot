<?php

namespace App\Http\Controllers;

use Log;
use Telegram;
use App\Model\Chat;
use App\Model\City;
use App\Model\Account;
use App\Model\Activity;
use App\Model\Message;
use Illuminate\Http\Request;

class BotController extends Controller
{
    public function index(Request $request){
        $result = Telegram::getWebhookUpdates();
        // Log::debug('webhook data:['.gettype($result->getMessage()->getRawResult()).'::'.get_class($result->getMessage()->getRawResult()).'] '.json_encode($result));
        $message = Message::create([
            'update_id'=>$result->get('update_id'),
            'message_id'=>$result->getMessage()->getMessageId(),
            'chat_id'=>$result->getMessage()->getFrom()->get("id"),
            'raw'=>json_encode($result)
        ]);
        $chat = $this->chat($result);
        $command = $result->getMessage()->get('text');
        $keyboard = [
            ['Баланс'],
            ['Внести средства'],
            ['Установить город'],
            ['Род деятельности'],
        ];
        $answer = $command;
        if( $command == 'Пополнить баланс' || $command == '/pay' ){

        }
        else if( $command == 'Баланс' || $command == '/balance'){
            Telegram::sendMessage([ 'chat_id' => $chat->id, 'text' => 'Ваш баланс: <b>'.number_format($chat->account->amount,2,'.',' ').'</b>','parse_mode'=>'HTML' ]);
        }
        else if( $command == 'Помощь' || $command == '/help' ){
            $text = 'Список команд:'."\n";
            $text.= "\n".'<b>Настройка</b>'."\n";
            $text.= '<a>/city</a> - Задать свой город'."\n";
            $text.= '<a>/activity</a> - Задать свой род деятельности'."\n";
            $text.= "\n".'<b>Платежи</b>'."\n";
            $text.= '<a>/pay</a> - Пополнить баланс'."\n";
            $text.= '<a>/balance</a> - Узнать свой баланс'."\n";
            $text.= "\n".'<b>Прочее</b>'."\n";
            $text.= '<a>/help</a> - Получить это сообщение'."\n";
            $text.= '<a>/support</a> - Связаться со службой поддержки'."\n";
            Telegram::sendMessage([ 'chat_id' => $chat->id, 'text' => $text,'parse_mode'=>'HTML' ]);
        }
        else if( $command == 'Поддержка' || $command == '/support'  ){

        }
        else if( $command == 'Город' || $command == '/city'  ){
            $answer = 'Ваш город: '.$chat->city->name;
            Telegram::sendMessage([ 'chat_id' => $chat->id, 'text' => $answer ]);
        }
        else if( $command == 'Род деятельности' || $command == '/activity'  ){
            $answer = 'Ваш род деятельности: '.$chat->activity->name;
            Telegram::sendMessage([ 'chat_id' => $chat->id, 'text' => $answer ]);
        }
        else {
            $reply_markup = Telegram::replyKeyboardMarkup([ 'keyboard' => [
                ['Баланс'],
                ['Помощь'],
                ['Поддержка'],
            ], 'resize_keyboard' => true, 'one_time_keyboard' => false ]);
            Telegram::sendMessage([ 'chat_id' => $chat->id, 'text' => 'Введите команду или запросите помощь', 'reply_markup' => $reply_markup]);
        }
        $message->answered = 1;
        $message->save();
        return 'Ok';
        // return response()->json(['Ok']);
    }
    protected function city(Chat $chat, $n){
        Log::debug('set city '.$n);
        $city = City::where('name','like','%'.$n.'%')->first();
        if( is_null($city) ) $city = City::create(["name"=>$n]);
        $chat->city_id = $city->id;
        $chat->save();
        $chat->load(['city','activity','account']);
        return $chat;
    }
    protected function activity(Chat $chat,$n){
        Log::debug('set activity '.$n);
        $activity = Activity::where('name','like','%'.$n.'%')->first();
        if( is_null($activity) ) $activity = Activity::create(["name"=>$n]);
        $chat->activity_id = $activity->id;
        $chat->save();
        $chat->load(['city','activity','account']);
        return $chat;
    }
    protected function chat($result){
        $chat = Chat::find($result->getMessage()->getFrom()->get("id"));
        if( is_null($chat) ){
            $chat = Chat::Create([
                'id'=>$result->getMessage()->getFrom()->get("id"),
                'first_name'=>$result->getMessage()->getFrom()->get("first_name"),
                'last_name'=>$result->getMessage()->getFrom()->get("last_name"),
                'username'=>$result->getMessage()->getFrom()->get("username"),
                // 'language'=>$result->getMessage()->getRawResult(),
            ]);
            Account::create([
                'chat_id'=>$chat->id,
                'amount'=>0
            ]);
        }
        $chat->load(['account','city','activity']);
        return $chat;
    }
}

/*
 *
 {
    "update_id": 157253190,
    "message": {
        "message_id": 1,
        "from": {
            "id": 49448620,
            "is_bot": false,
            "first_name": "Vladimir",
            "last_name": "Bushuev",
            "username": "vsbGram",
            "language_code": "en-RU"
        },
        "chat": {
            "id": 49448620,
            "first_name": "Vladimir",
            "last_name": "Bushuev",
            "username": "vsbGram",
            "type": "private"
        },
        "date": 1523256843,
        "text": "/start",
        "entities": [
            {
                "offset": 0,
                "length": 6,
                "type": "bot_command"
            }
        ]
    }
}
 */
