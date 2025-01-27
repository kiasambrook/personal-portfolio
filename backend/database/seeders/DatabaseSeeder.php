<?php

namespace Database\Seeders;

use App\Models\ExperienceType;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        ExperienceType::factory()
            ->count(2)
            ->create();
    }
}
