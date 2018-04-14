<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Chat extends Model
{
    use SoftDeletes;
    protected $table = 'chats';
    protected $primaryKey = 'id'; // or null
    public $incrementing = false;
    protected $fillable = [
        'id','first_name', 'last_name', 'username', 'deposited','language','executor_id'
    ];
    protected $hidden = [
        'executor_id'
    ];
    public function executor(){
        return $this->belongsTo('App\Model\Executor');
    }
    // public function activity(){
    //     return $this->belongsTo('App\Model\Activity');
    // }
    // public function city(){
    //     return $this->belongsTo('App\Model\City');
    // }
    public function messages(){
        return $this->hasMany('App\Model\Message');
    }
}
