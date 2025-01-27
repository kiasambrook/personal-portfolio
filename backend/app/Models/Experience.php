<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'start_date',
        'end_date',
        'is_current',
        'description',
        'grade',
        'experience_type_id',
    ];
    protected $table = 'experience';

    public function experienceType()
    {
        //  One to many relationship
        return $this->belongsTo(ExperienceType::class);
    }
}
