<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    public static function find($slug)
    {
        $post = static::all()->firstWhere('slug', $slug);
        if (! $post) {
            throw new ModelNotFoundException();
        }
        else {
            return $post;
        }
    }
}
