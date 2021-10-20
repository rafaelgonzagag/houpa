<?php


namespace App\Application\Modules\Products\Repositories;


use App\Application\Modules\Products\Models\Product;

interface IProductsRepository
{
    function listAll();
    function findById($id);
    function findByName($name);
    function create(Product $product) : int;
    function update(Product $product);
    function delete(Product $product);
}
