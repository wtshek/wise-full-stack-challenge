<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $jobs = Job::with(["company"])->paginate(15);

       
        return Inertia::render("Home",["data"=>$jobs]);
    }
}
