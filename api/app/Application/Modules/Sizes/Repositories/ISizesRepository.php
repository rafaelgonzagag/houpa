<?php


namespace App\Application\Modules\Sizes\Repositories;


use App\Application\Modules\Sizes\Models\Size;
use Illuminate\Database\Eloquent\Collection;


interface ISizesRepository
{
    function listAll() : Collection;
    function findById (int $id) : Size;
}
