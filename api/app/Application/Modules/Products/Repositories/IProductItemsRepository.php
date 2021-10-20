<?php


namespace App\Application\Modules\Products\Repositories;


use App\Application\Modules\Products\Models\ProductItem;

interface IProductItemsRepository
{
    function create(ProductItem $productItem);
    function findById(int $id);
    function update(ProductItem $productItem);
    function delete(ProductItem $productItem);
}
