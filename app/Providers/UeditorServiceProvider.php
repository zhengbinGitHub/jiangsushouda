<?php

namespace App\Providers;

use App\Ueditor\StorageManager;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;

class UeditorServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
		$this->app->singleton('ueditor.storage', function ($app) {
			return new StorageManager(Storage::disk($app['config']->get('ueditor.disk', 'public')));
		});
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
