<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'skills';

    protected $fillable = ['name', 'icon'];

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
