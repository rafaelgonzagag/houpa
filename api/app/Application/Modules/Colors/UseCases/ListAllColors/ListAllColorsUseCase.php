<?php


namespace App\Application\Modules\Colors\UseCases\ListAllColors;



use App\Application\Modules\Colors\Repositories\IColorsRepository;
use Illuminate\Database\Eloquent\Collection;

class ListAllColorsUseCase implements IListAllColors
{
    private $repository;

    public function __construct(IColorsRepository $colorsRepository)
    {
        $this->repository = $colorsRepository;
    }

    function execute(): Collection
    {
        return $this->repository->listAll();
    }
}
