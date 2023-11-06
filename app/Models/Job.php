<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Company;

class Job extends Model
{
    use HasFactory;

    protected $fillable = ["role", "min_salary","max_salary", "location", "descriptions", "remote", "company_id"];

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }
}
