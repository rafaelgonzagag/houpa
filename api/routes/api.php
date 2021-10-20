<?php
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\AuthController;

Broadcast::routes(['middleware' => ['auth:sanctum']]);
Route::post('/login', [AuthController::class, 'login']);

