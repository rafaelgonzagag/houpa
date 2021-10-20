<?php


namespace App\Application\Modules\Colors\UseCases\ListAllColors;


use Illuminate\Database\Eloquent\Collection;

interface IListAllColors
{
    function execute() : Collection ;
}
