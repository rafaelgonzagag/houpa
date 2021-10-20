<?php


namespace App\Http\Controllers\Api\Modules\Sizes;


use App\Application\Modules\Sizes\UseCases\ListAllSizes\IListAllSizes;
use App\Http\Controllers\Controller;

class ListSizesController extends Controller
{
    private $listAllSizes;

    public function __construct(IListAllSizes $listAllSizes)
    {
        $this->listAllSizes = $listAllSizes;

    }

    public function listAll ()
    {
        $sizes = $this->listAllSizes->execute();

        return response()->json([
            'success' => true,
            'sizes' => $sizes
        ]);
    }
}
