<?php


namespace App\Http\Controllers\Api\Modules\Colors;


use App\Application\Modules\Colors\UseCases\ListAllColors\IListAllColors;
use App\Http\Controllers\Controller;

class ListColorsController extends Controller
{
    private $listAllColors;

    public function __construct(IListAllColors $listAllColors)
    {
        $this->listAllColors = $listAllColors;

    }

    public function listAll ()
    {
        $colors = $this->listAllColors->execute();

        return response()->json([
            'success' => true,
            'colors' => $colors
        ]);
    }
}
