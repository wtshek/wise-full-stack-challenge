<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Job;
use App\Models\Company;
use Illuminate\Support\Facades\Redirect;

class JobController extends Controller
{
    /**
     * Display Job update form
     */
    public function edit(Request $request):\Inertia\Response
    {
        $job = Job::find($request->route("job_id"));
        $companies = Company::all();
        return Inertia::render("JobForm", [
            'data'=> $job,
            "companies"=>$companies,
            'update' => true
        ]);
    }

    public function index()
    {
        $jobs = Job::with(["company"])->paginate(100);
       
        return Inertia::render("Jobs",["data"=>$jobs]);
    }

    public function store(Request $request)
    {

        Job::create($request->all());

        return Redirect::to('/jobs');
    }

    public function showCreateForm():\Inertia\Response
    {
        $companies = Company::all();


        return Inertia::render('JobForm', [
            "companies"=>$companies,
            'update'=>false,
        ]);
    }

    public function update(Request $request)
    {
        Job::find($request->route("job_id"))->update($request->all());
        return Redirect::to('/jobs');
    }

    public function delete(Request $request)
    {
        Job::find($request->route("job_id"))->delete();
    }

    
}
