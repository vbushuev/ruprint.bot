<?php

namespace App\Http\Controllers;

use Log;
use Redirect;
use App\Model\Account;
use App\Model\Executor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;

class ExecutorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response()->json(Executor::with(['account','activity','city'])->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Log::debug($request->all());
        $validator = Validator::make($request->all(), [
            "city_id" => 'required|exists:cities,id',
            "activity_id" => 'required|exists:activities,id',
            "name"=>'required|string',
            "last_name"=>'required|string',
            "phone"=>"required|regex:/^\+7\d{10}$/"
        ],[
            'exists' => 'Выберете параметр из списка существующих',
            'numeric' => 'Значение должно быть числовым',
            'required' => 'Это поле является обязательным',
        ]);
        $ret = [];
        $code = 200;
        if ($validator->fails()) {
            $ret = $validator->errors();
            $code = 500;
        }
        else {
            $executor = Executor::create($request->all());
            Account::create([
                'executor_id'=>$executor->id,
                'amount'=>0
            ]);
            $executor->load(['activity','account','city']);
            $ret = $executor;
        }

        return response()->json($ret,$code);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Executor  $executor
     * @return \Illuminate\Http\Response
     */
    public function show(Executor $executor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Executor  $executor
     * @return \Illuminate\Http\Response
     */
    public function edit(Executor $executor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Executor  $executor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Executor $executor)
    {
        Log::debug($executor);
        $executor->update($request->all());
        $executor->load(['account','activity','city']);
        return response()->json($executor);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Executor  $executor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,Executor $executor)
    {
        Log::debug($executor);
        $executor->delete();
        return $this->index($request);
    }
}
