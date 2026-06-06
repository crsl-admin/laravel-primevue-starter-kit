<?php

namespace App\Data;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Data;

class UserData extends Data
{
    public function __construct(
        public int $id,
        public string $first_name,
        public string $last_name,
        public string $email,
        public CarbonImmutable|string|null $email_verified_at,
        public CarbonImmutable|string $createdAt,
        public CarbonImmutable|string $updatedAt,
    ) {}
}
