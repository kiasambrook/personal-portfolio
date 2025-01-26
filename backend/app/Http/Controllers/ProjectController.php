<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    public function __invoke()
    {
        // Return all projects with assoicated skills
        return Project::with('skills')->get();
    }
}
