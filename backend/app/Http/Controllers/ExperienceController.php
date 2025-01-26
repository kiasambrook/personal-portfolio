<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function __invoke()
    {
        return Experience::with('experienceType')->get();
    }}
