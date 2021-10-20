<?php

namespace App\Application\Modules\Products\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed id
 * @property mixed productId
 * @property mixed sizeId
 * @property mixed colorId
 * @property mixed amount
 */
class ProductItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'productId',
        'sizeId',
        'colorId',
        'amount'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function color()
    {
        return $this->belongsTo(Color::class);
    }

    public function size()
    {
        return $this->belongsTo(Size::class);
    }

}
