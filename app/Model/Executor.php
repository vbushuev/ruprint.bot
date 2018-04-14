<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Executor extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'name', 'last_name', 'deposited', 'activity_id','city_id','phone'
    ];
    protected $hidden = [
        'activity_id','city_id'
    ];
    protected $casts = [
        'deposited'=>'integer'
    ];
    public function chat(){
        return $this->hasMany('App\Model\Chat');
    }
    public function account(){
        return $this->hasOne('App\Model\Account');
    }
    public function activity(){
        return $this->belongsTo('App\Model\Activity');
    }
    public function city(){
        return $this->belongsTo('App\Model\City');
    }
    public function messages(){
        return $this->hasMany('App\Model\Message');
    }
}
