<?php


namespace App\Application\Modules\Products\UseCases\UpdateProduct;


use App\Http\Requests\ProductRequest;


interface IUpdateProduct
{
    function execute(ProductRequest $request, int $id);
}
