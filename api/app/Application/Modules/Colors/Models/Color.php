<?php

namespace App\Application\Modules\Colors\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'hexagonalCode'
    ];

    public function productItems()
    {
        return $this->hasMany(ProductItem::class);
    }
}
