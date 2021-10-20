<?php


namespace App\Application\Modules\Products\UseCases\CreateProduct;


use App\Application\Modules\Colors\Repositories\IColorsRepository;
use App\Application\Modules\Products\Models\ProductItem;
use App\Application\Modules\Products\Models\ProductPhoto;
use App\Application\Modules\Products\Repositories\IProductItemsRepository;
use App\Application\Modules\Products\Repositories\IProductPhotosRepository;
use App\Application\Modules\Products\Repositories\IProductsRepository;
use App\Application\Modules\Sizes\Repositories\ISizesRepository;
use App\Http\Requests\ProductRequest;
use App\Application\Modules\Products\Models\Product;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


class CreateProductUseCase implements ICreateProduct
{
    private $repository;
    private $repositoryProductItem;
    private $colorsRepository;
    private $sizesRepository;
    private $photosRepository;

    public function __construct(IProductsRepository $productsRepository, IProductItemsRepository $repositoryProductItem,
                                IColorsRepository $colorsRepository, ISizesRepository $sizesRepository, IProductPhotosRepository $photosRepository)
    {
        $this->repository = $productsRepository;
        $this->repositoryProductItem = $repositoryProductItem;
        $this->colorsRepository = $colorsRepository;
        $this->sizesRepository = $sizesRepository;
        $this->photosRepository = $photosRepository;
    }

    public function execute(ProductRequest $request): int
    {

        $productAlreadyExists = $this->repository->findByName($request->input('name'));

        if (count($productAlreadyExists)) {
            throw new \Exception('Product already exists!');
        }
        DB::beginTransaction();

        $product = new Product();
        $product->name = strtoupper($request->input('name'));
        $product->description = $request->input('description');
        $product->price = $request->input('price');

        $productId = $this->repository->create($product);

        $items = $request->input('items');

        foreach ($items as $item) {
            $productItem = new ProductItem();

            $colorExists = $this->colorsRepository->findById($item['colorId']);

            if(!$colorExists) {
                throw new \Exception('Color does not exist! - ' . $item['colorId']);
            }

            $productItem->colorId = $item['colorId'];

            $sizeExists = $this->sizesRepository->findById($item['sizeId']);

            if(!$sizeExists) {
                throw new \Exception('Size does not exist!');
            }

            $productItem->sizeId = $item['sizeId'];
            $productItem->amount = $item['amount'];
            $productItem->productId = $productId;

            $this->repositoryProductItem->create($productItem);
        }

        $photos = $request->input('photos');

        foreach ($photos as $photo) {

            if (!strpos($photo['file'], ';base64')) {
                throw new \Exception('Upload the file in base64 format!');
            }

            $url_photo = $this->uploadPhoto($photo['file']);

            $productPhoto = new ProductPhoto();
            $productPhoto->image = $url_photo;
            $productPhoto->productId = $productId;

            $this->photosRepository->create($productPhoto);

        }

        DB::commit();

        return $productId;
    }

    private function uploadPhoto ($fileBase64)
    {
        $name = $this->createNamePhoto($fileBase64);
        $separatorFile = explode(',', $fileBase64);
        $file = $separatorFile[1];
        $path = 'public/products/';

        Storage::put($path.$name, base64_decode($file));

        return $name;
    }

    private function createNamePhoto ($fileBase64)
    {
        $extension = explode('/', $fileBase64);
        $extension = explode(';', $extension[1]);
        $extension = '.'.$extension[0];

        return rand(0, 99999).time().$extension;

    }
}
