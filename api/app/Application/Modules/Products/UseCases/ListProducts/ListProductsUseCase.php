<?php


namespace App\Application\Modules\Products\UseCases\ListProducts;


use App\Application\Modules\Products\Repositories\IProductsRepository;
use Illuminate\Database\Eloquent\Collection;

class ListProductsUseCase implements IListProducts
{
    private $repository;

    public function __construct(IProductsRepository $listProductsRepository)
    {
        $this->repository = $listProductsRepository;
    }

    function execute() : Collection
    {
        return $this->repository->listAll();
    }
}
