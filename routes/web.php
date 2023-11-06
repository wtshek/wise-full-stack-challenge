<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\JobController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, "index"]);

Route::middleware(['auth', 'verified'])->group(function() {
    Route::get("/companies", [CompanyController::class, "index"])->name("companies.index");

    Route::get("/companies/{company_id}", [CompanyController::class, "edit"])->name("companies.edit");
    
    Route::put("/companies/{company_id}", [CompanyController::class, "update"])->name("companies.update");
    
    Route::post("/companies", [CompanyController::class, "store"])->name('companies.store');
    
    Route::get("/companies/{company_id}/delete", [CompanyController::class, "delete"])->name('companies.delete');

    Route::get("/add-company", function(){
        return Inertia::render("CompanyForm");
    })->name("add-company");


    Route::get("/jobs", [JobController::class, "index"])->name("jobs.index");

    Route::get("/jobs/create", [JobController::class, "showCreateForm"])->name('jobs.create');

    Route::get("/jobs/{job_id}", [JobController::class, "edit"])->name('jobs.edit');

    Route::put("/jobs/{job_id}", [JobController::class, "update"])->name("jobs.update");

    Route::post("/jobs", [JobController::class, "store"])->name('jobs.store');
    
    Route::get("/jobs/{job_id}/delete", [JobController::class, "delete"])->name('jobs.delete');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
