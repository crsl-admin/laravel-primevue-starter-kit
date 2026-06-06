<?php

namespace App\Http\Middleware;

use App\Data\UserData;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => Auth::check() ? UserData::from($request->user()) : null,
            ],
            'notification' => $this->notifications($request),
        ];
    }

    public function notifications(Request $request): Collection
    {
        return collect(Arr::only($request->session()->all(), ['success', 'error', 'warning', 'info']))
            ->mapWithKeys(fn ($notification, $key) => [
                'type' => $key,
                'body' => $notification,
            ]);
    }
}
