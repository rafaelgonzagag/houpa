<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Modules\Colors\ListColorsController;


Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::get('/colors', [ListColorsController::class, 'listAll']);
});


