<?php

use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\SocialLinkController;
use Illuminate\Support\Facades\Route;
use Livewire\Livewire;

Route::get('/projects', ProjectController::class);
Route::get('/experience', ExperienceController::class);
Route::get('/skills', SkillController::class);
Route::get('/social-links', SocialLinkController::class);
