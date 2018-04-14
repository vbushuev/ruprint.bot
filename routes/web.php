<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Auth::routes();
Route::middleware(['auth'])->group(function(){
    // Route::get('/', 'HomeController@index')->name('default');
    Route::get('/admin/{p?}', function (){return view('react');})
        ->where('p','.*')
        ->name('react');
    Route::apiResource('city','CityController');
    Route::apiResource('activity','ActivityController');
    Route::apiResource('executor','ExecutorController');
});
Route::any('bot','BotController@index')->name('bot');


// Route::post('/580068706:AAEbr3vZlel-gkpkWzUfyK-vnG6u2NGmr-M/webhook','BotController@index')->name('bot');
// Route::resource('bot','BotController@index')->name('bot');
// Route::get('/home', 'HomeController@index')->name('home');
