<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Use Cases

        $this->app->bind(
            'App\Application\Modules\Products\UseCases\ListProducts\IListProducts',
            'App\Application\Modules\Products\UseCases\ListProducts\ListProductsUseCase'
        );

        $this->app->bind(
            'App\Application\Modules\Products\UseCases\CreateProduct\ICreateProduct',
            'App\Application\Modules\Products\UseCases\CreateProduct\CreateProductUseCase'
        );

        $this->app->bind(
            'App\Application\Modules\Products\UseCases\UpdateProduct\IUpdateProduct',
            'App\Application\Modules\Products\UseCases\UpdateProduct\UpdateProductUseCase'
        );

        $this->app->bind(
            'App\Application\Modules\Products\UseCases\DeleteProduct\IDeleteProduct',
            'App\Application\Modules\Products\UseCases\DeleteProduct\DeleteProductUseCase'
        );

        $this->app->bind(
            'App\Application\Modules\Colors\UseCases\ListAllColors\IListAllColors',
            'App\Application\Modules\Colors\UseCases\ListAllColors\ListAllColorsUseCase'
        );

        $this->app->bind(
            'App\Application\Modules\Sizes\UseCases\ListAllSizes\IListAllSizes',
            'App\Application\Modules\Sizes\UseCases\ListAllSizes\ListAllSizesUseCase'
        );



        // Repositories

        $this->app->bind(
            'App\Application\Modules\Products\Repositories\IProductsRepository',
            'App\Application\Modules\Products\Repositories\Implementations\ProductsRepository'
        );

        $this->app->bind(
            'App\Application\Modules\Products\Repositories\IProductItemsRepository',
            'App\Application\Modules\Products\Repositories\Implementations\ProductItemsRepository'
        );

        $this->app->bind(
            'App\Application\Modules\Colors\Repositories\IColorsRepository',
            'App\Application\Modules\Colors\Repositories\Implementations\ColorsRepository'
        );

        $this->app->bind(
            'App\Application\Modules\Sizes\Repositories\ISizesRepository',
            'App\Application\Modules\Sizes\Repositories\Implementations\SizesRepository'
        );

        $this->app->bind(
            'App\Application\Modules\Products\Repositories\IProductPhotosRepository',
            'App\Application\Modules\Products\Repositories\Implementations\ProductPhotosRepository'
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
