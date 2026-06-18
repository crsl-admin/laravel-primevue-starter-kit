<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register()
    {
        return inertia('Auth/Register');
    }

    public function login()
    {
        return inertia('Auth/Login');
    }

    /*public function recover()
    {
        return inertia()->modal('Auth/Recover')
            ->baseRoute('auth.login');
    }*/

    /*public function reset(Request $request)
    {
        return inertia()->modal('Auth/Reset')
            ->with([
                'token' => $request->token,
                'email' => $request->email,
            ])
            ->baseRoute('auth.login');
    }*/
}
