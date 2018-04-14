<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $fillable = [
        'name'
    ];
    public function executors(){
        return $this->hasMany('App\Model\Executor');
    }
}
