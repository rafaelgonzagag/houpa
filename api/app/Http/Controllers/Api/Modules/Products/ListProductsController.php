<?php


namespace App\Http\Controllers\Api\Modules\Products;


use App\Application\Modules\Products\UseCases\ListProducts\IListProducts;
use App\Http\Controllers\Controller;


class ListProductsController extends Controller
{
    private $listProducts;

    public function __construct(IListProducts $listProducts)
    {
        $this->listProducts = $listProducts;

    }

    public function listAll ()
    {
        $products = $this->listProducts->execute();

        return response()->json([
            'success' => true,
            'products' => $products
        ]);
    }
}
