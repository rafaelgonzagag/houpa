<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Modules\Products\ListProductsController;
use App\Http\Controllers\Api\Modules\Products\CreateProductController;
use App\Http\Controllers\Api\Modules\Products\UpdateProductController;
use App\Http\Controllers\Api\Modules\Products\DeleteProductController;


Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::get('/products', [ListProductsController::class, 'listAll']);
    Route::post('/products', [CreateProductController::class, 'create']);
    Route::put('/products/{id}',  [UpdateProductController::class, 'update']);
    Route::delete('/products/{id}', [DeleteProductController::class, 'delete']);
});
