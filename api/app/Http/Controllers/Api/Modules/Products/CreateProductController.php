<?php


namespace App\Http\Controllers\Api\Modules\Products;


use App\Application\Modules\Products\UseCases\CreateProduct\ICreateProduct;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;

class CreateProductController extends Controller
{
    private $createProduct;

    public function __construct(ICreateProduct $createProduct)
    {
        $this->createProduct = $createProduct;

    }

    public function create (ProductRequest $request)
    {
        try {

            $id = $this->createProduct->execute($request);

            return response()->json([
                'message' => 'Product created!',
                'success' => true,
                'id' => $id
            ], 201);

        } catch (\Exception $e) {

            return response()->json([
                'message' => $e->getMessage(),
                'success' => false,
            ], 500);
        }
    }
}


