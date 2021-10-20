<?php


namespace App\Application\Modules\Colors\Repositories\Implementations;

use App\Application\Modules\Colors\Models\Color;
use App\Application\Modules\Colors\Repositories\IColorsRepository;
use Illuminate\Database\Eloquent\Collection;


class ColorsRepository implements IColorsRepository
{

    function listAll(): Collection
    {
        return Color::all();
    }

    function findById(int $id): Color
    {
        return Color::find($id);
    }
}
