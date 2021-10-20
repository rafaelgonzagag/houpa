<?php


namespace App\Application\Modules\Products\Repositories\Implementations;


use App\Application\Modules\Products\Models\ProductPhoto;
use App\Application\Modules\Products\Repositories\IProductPhotosRepository;

class ProductPhotosRepository implements IProductPhotosRepository
{

    function create(ProductPhoto $productPhoto): int
    {
        $productPhoto->save();
        return $productPhoto->id;
    }

    function delete(ProductPhoto $productPhoto)
    {
        $productPhoto->delete();
    }
}
