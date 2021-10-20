<?php


namespace App\Application\Modules\Products\UseCases\UpdateProduct;


use App\Application\Modules\Products\Repositories\IProductsRepository;
use App\Http\Requests\ProductRequest;

class UpdateProductUseCase implements IUpdateProduct
{
    private $repository;

    public function __construct(IProductsRepository $productsRepository)
    {
        $this->repository = $productsRepository;
    }

    public function execute(ProductRequest $request, $id)
    {
        $product = $this->repository->findById($id);

        if (!$product) {
            throw new \Exception('Product does not exist!');
        }

        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->price = $request->input('price');

        $this->repository->update($product);
    }
}
