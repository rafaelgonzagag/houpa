<?php


namespace App\Application\Modules\Products\UseCases\ListProducts;


use Illuminate\Database\Eloquent\Collection;

interface IListProducts
{
    function execute() : Collection ;
}
