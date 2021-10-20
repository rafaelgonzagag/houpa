<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Modules\Sizes\ListSizesController;

Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::get('/sizes', [ListSizesController::class, 'listAll']);
});
