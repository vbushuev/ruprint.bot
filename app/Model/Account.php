<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Account extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'executor_id','amount'
    ];
    public function executor(){
        return $this->belongsTo('App\Model\Executor');
    }
}
