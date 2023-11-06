<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Company;
use Illuminate\Support\Facades\Redirect;

class CompanyController extends Controller
{
    
    /**
     * Display company update form
     */
    public function edit(Request $request):\Inertia\Response
    {
       $company = Company::find($request->route("company_id"));
        return Inertia::render("CompanyForm",[
            'data' => $company,
            "update" => true,
        ]);
    }

    public function store(Request $request)
    {
        Company::create([
            "name" => $request->name,
        ]);

        return Redirect::to('/companies');
    }

    public function index()
    {
        $companies = Company::with('jobs')->paginate(15);
        return Inertia::render("Companies",["data"=>$companies]);
    }

    public function update(Request $request)
    {
        Company::find($request->route("company_id"))->update($request->all());
        return Redirect::to('/companies');
    }

    public function delete(Request $request)
    {
        Company::find($request->route("company_id"))->delete();
    }
}
