<?php


namespace App\Application\Modules\Products\UseCases\DeleteProduct;


use App\Application\Modules\Products\Repositories\IProductsRepository;

class DeleteProductUseCase implements IDeleteProduct
{
    private $repository;

    public function __construct(IProductsRepository $productsRepository)
    {
        $this->repository = $productsRepository;
    }

    function execute(int $id)
    {
       $product = $this->repository->findById($id);

        if (!$product) {
            throw new \Exception('Product does not exist!');
        }

        $this->repository->delete($product);

    }
}
