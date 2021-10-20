<?php


namespace App\Http\Controllers\Api\Modules\Products;


use App\Application\Modules\Products\UseCases\UpdateProduct\IUpdateProduct;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;

class UpdateProductController extends Controller
{
    private $updateProduct;

    public function __construct(IUpdateProduct $updateProduct)
    {
        $this->updateProduct = $updateProduct;
    }

    public function update (ProductRequest $request, $id)
    {
        try {

            $this->updateProduct->execute($request, $id);

            return response()->json([
                'message' => 'Product updated!',
                'success' => true
            ], 200);

        } catch (\Exception $e) {

            return response()->json([
                'message' => $e->getMessage(),
                'success' => false
            ], 500);
        }
    }
}
