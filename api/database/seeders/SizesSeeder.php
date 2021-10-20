<?php

namespace Database\Seeders;

use App\Application\Modules\Sizes\Models\Size;
use Illuminate\Database\Seeder;

class SizesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $start = microtime(true);
        echo "*** Iniciando SizesSeeder ***";

        $data = [
            ['description' => 'P'],
            ['description' => 'M'],
            ['description' => 'G'],
            ['description' => 'PP'],
            ['description' => 'EXG'],
            ['description' => 'G1'],
            ['description' => 'G2'],
            ['description' => 'G3'],
            ['description' => 'G4'],
        ];

        foreach ($data as $dt) {
            $size = Size::where('description', $dt['description'])->get()->first();

            if (!$size) {
                Size::create($dt);
            }
        }
        echo "\n*** Completo em " . round((microtime(true) - $start), 3) . "s ***";
    }
}
