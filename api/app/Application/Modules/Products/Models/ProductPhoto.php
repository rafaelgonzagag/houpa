<?php

namespace App\Application\Modules\Products\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed id
 * @property mixed productId
 * @property mixed image
 */
class ProductPhoto extends Model
{
    use HasFactory;

    protected $fillable = [
        'productId',
        'image'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
