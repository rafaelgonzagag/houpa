<?php

namespace App\Application\Modules\Products\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed id
 * @property mixed name
 * @property mixed description
 * @property mixed price
 */

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'description'
    ];

    public function productItems()
    {
        return $this->hasMany(ProductItem::class, 'productId');
    }

    public function productPhotos()
    {
        return $this->hasMany(ProductPhoto::class, 'productId');
    }
}
