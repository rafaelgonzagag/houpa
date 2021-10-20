<?php


namespace App\Application\Modules\Sizes\Repositories\Implementations;


use App\Application\Modules\Sizes\Models\Size;
use App\Application\Modules\Sizes\Repositories\ISizesRepository;
use Illuminate\Database\Eloquent\Collection;


class SizesRepository implements ISizesRepository
{

    function listAll(): Collection
    {
        return Size::all();
    }

    function findById(int $id): Size
    {
        return Size::find($id);
    }
}
