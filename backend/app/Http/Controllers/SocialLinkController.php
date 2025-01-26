<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SocialLink;

class SocialLinkController extends Controller
{
    function __invoke()
    {
        return SocialLink::all();
    }
}
