<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Dotzero\LaravelAmoCrm\Facades\AmoCrm;

class GetLead extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'amo:leads';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get leads';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $amo = AmoCrm::getClient();
        $leads = $amo->lead->apiList([

        ]);
        print_r($leads);
    }
}
