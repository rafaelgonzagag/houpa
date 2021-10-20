<?php


namespace App\Application\Modules\Products\UseCases\CreateProduct;


use App\Http\Requests\ProductRequest;

interface ICreateProduct
{
    function execute(ProductRequest $request) : int;
}
