<?php


namespace App\Application\Modules\Products\UseCases\DeleteProduct;


interface IDeleteProduct
{
    function execute(int $id);
}
