<?php

namespace App\Application\Modules\Sizes\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    use HasFactory;

    protected $fillable = [
        'description'
    ];

    public function productItems()
    {
        return $this->hasMany(ProductItem::class);
    }
}
