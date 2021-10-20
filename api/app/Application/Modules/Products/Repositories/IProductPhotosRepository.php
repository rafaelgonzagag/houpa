<?php


namespace App\Application\Modules\Products\Repositories;


use App\Application\Modules\Products\Models\ProductPhoto;

interface IProductPhotosRepository
{
    function create(ProductPhoto $productPhoto) : int;
    function delete(ProductPhoto $productPhoto);
}
