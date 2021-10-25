<?php

namespace Database\Seeders;

use App\Application\Modules\Products\Models\Product;
use App\Application\Modules\Products\Models\ProductItem;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {

        $data = [
            [
                'name' => 'VESTIDO - ' . strtoupper($faker->name()),
                'price' => $faker->randomFloat(2, 2, 200),
                'description' => $faker->text(),
            ],
            [
                'name' => 'VESTIDO - ' . strtoupper($faker->name()),
                'price' => $faker->randomFloat(2, 2, 200),
                'description' => $faker->text(),
            ],
            [
                'name' => 'VESTIDO - ' . strtoupper($faker->name()),
                'price' => $faker->randomFloat(2, 2, 200),
                'description' => $faker->text(),
            ],
            [
                'name' => 'VESTIDO - ' . strtoupper($faker->name()),
                'price' => $faker->randomFloat(2, 2, 200),
                'description' => $faker->text(),
            ],
            [
                'name' => 'VESTIDO - ' . strtoupper($faker->name()),
                'price' => $faker->randomFloat(2, 2, 200),
                'description' => $faker->text(),
            ],
            [
                'name' => 'VESTIDO - ' . strtoupper($faker->name()),
                'price' => $faker->randomFloat(2, 2, 200),
                'description' => $faker->text(),
            ]
        ];

        foreach ($data as $dt) {
            DB::beginTransaction();

            $product = Product::create($dt);
            $items = [
                [
                    'colorId' => 1,
                    'sizeId' => 1,
                    'amount' => $faker->randomDigitNotZero()
                ],
                [
                    'colorId' => 1,
                    'sizeId' => 2,
                    'amount' => $faker->randomDigitNotZero()
                ],
                [
                    'colorId' => 1,
                    'sizeId' => 3,
                    'amount' => $faker->randomDigitNotZero()
                ]
            ];


            foreach ($items as $item) {
                $item['productId'] = $product->id;
                $productItem =  ProductItem::create($item);
            }

            DB::commit();
        }
    }
}
