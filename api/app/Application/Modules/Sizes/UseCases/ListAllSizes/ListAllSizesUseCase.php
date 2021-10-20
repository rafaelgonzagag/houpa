<?php


namespace App\Application\Modules\Sizes\UseCases\ListAllSizes;



use App\Application\Modules\Sizes\Repositories\ISizesRepository;
use Illuminate\Database\Eloquent\Collection;

class ListAllSizesUseCase implements IListAllSizes
{
    private $repository;

    public function __construct(ISizesRepository $sizesRepository)
    {
        $this->repository = $sizesRepository;
    }

    function execute(): Collection
    {
        return $this->repository->listAll();
    }
}
