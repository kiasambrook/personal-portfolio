<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function __invoke()
    {
        $projects =  Project::with('skills')->get();

        foreach ($projects as $project) {
            $disk = Storage::disk('public');
            $project->image_url = $project->image ? $disk->url($project->image) : null;
        }

        return $projects;
    }
}
