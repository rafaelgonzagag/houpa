<?php


namespace App\Application\Modules\Products\Repositories\Implementations;


use App\Application\Modules\Products\Models\ProductItem;
use App\Application\Modules\Products\Repositories\IProductItemsRepository;

class ProductItemsRepository implements IProductItemsRepository
{
    function create(ProductItem $productItem)
    {
        $productItem->save();
        return $productItem->id;
    }

    function findById(int $id)
    {
        return ProductItem::find($id);
    }

    function update(ProductItem $productItem)
    {
        $productItem->update();
    }

    function delete(ProductItem $productItem)
    {
        $productItem->delete();
    }
}
