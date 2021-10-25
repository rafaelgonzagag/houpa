<?php


namespace App\Application\Modules\Products\Repositories\Implementations;


use App\Application\Modules\Products\Models\Product;
use App\Application\Modules\Products\Repositories\IProductsRepository;

class ProductsRepository implements IProductsRepository
{

    function listAll()
    {
        return Product::all();
    }

    function findById($id)
    {
        return Product::find($id);
    }

    function findByName($name)
    {
        return  Product::where('name', $name)->get();
    }

    function create(Product $product) : int
    {
        $product->save();
        return $product->id;
    }

    function update(Product $product)
    {
        $product->update();
    }

    function delete(Product $product)
    {
        $product->productPhotos()->delete();
        $product->productItems()->delete();
        $product->delete();
    }
}
