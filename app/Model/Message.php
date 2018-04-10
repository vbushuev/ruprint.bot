<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    const UPDATED_AT = null;
    protected $fillable = [
        'raw', 'update_id', 'message_id', 'chat_id', 'answered'
    ];
    protected $casts = [
        'raw'=>'array'
    ];
    public function chat(){
        return $this->belongsTo('App\Model\Chat');
    }
}
