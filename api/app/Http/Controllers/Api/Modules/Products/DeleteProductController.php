<?php


namespace App\Http\Controllers\Api\Modules\Products;


use App\Application\Modules\Products\UseCases\DeleteProduct\IDeleteProduct;
use App\Http\Controllers\Controller;

class DeleteProductController extends Controller
{
    private $deleteProduct;

    public function __construct(IDeleteProduct $deleteProduct)
    {
        $this->deleteProduct = $deleteProduct;
    }

    public function delete ($id)
    {
        try {

            $this->deleteProduct->execute($id);

            return response()->json([
                'message' => 'Product deleted',
                'success' => true,
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'success' => false
            ], 500);
        }
    }
}
