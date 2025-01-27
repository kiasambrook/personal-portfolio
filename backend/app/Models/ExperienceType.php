<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ExperienceType extends Model
{
    use HasFactory;

    protected $fillable = ['name'];
    protected $table = 'experience_types';

    public function experiences()
    {
        // One to many relationship
        return $this->hasMany(Experience::class);
    }
}
