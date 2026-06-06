<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [AuthController::class, 'login'])->name('login');

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return inertia('Welcome', [
            'laravelVersion' => app()->version(),
            'phpVersion' => PHP_VERSION,
        ]);
    })->name('dashboard');
});
