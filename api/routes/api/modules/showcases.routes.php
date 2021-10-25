<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Modules\Products\ListProductsController;

Route::get('/showcases', [ListProductsController::class, 'listAll']);
