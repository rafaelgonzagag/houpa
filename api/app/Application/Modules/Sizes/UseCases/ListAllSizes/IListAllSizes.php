<?php


namespace App\Application\Modules\Sizes\UseCases\ListAllSizes;


use Illuminate\Database\Eloquent\Collection;

interface IListAllSizes
{
    function execute() : Collection ;
}
