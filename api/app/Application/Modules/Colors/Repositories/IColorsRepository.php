<?php


namespace App\Application\Modules\Colors\Repositories;



use App\Application\Modules\Colors\Models\Color;
use Illuminate\Database\Eloquent\Collection;


interface IColorsRepository
{
    function listAll() : Collection;
    function findById(int $id) : Color;
}
