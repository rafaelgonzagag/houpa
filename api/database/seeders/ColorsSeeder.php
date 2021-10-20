<?php

namespace Database\Seeders;

use App\Application\Modules\Colors\Models\Color;
use Illuminate\Database\Seeder;

class ColorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $start = microtime(true);
        echo "*** Iniciando ColorsSeeder ***";

        $data = [
            [
                'description' => 'FFFFFF',
                'hexagonalCode' => '#FFFFFF'
            ],
            [
                'description' => 'FEFDF9',
                'hexagonalCode' => '#FEFDF9'
            ],
            [
                'description' => 'C8C8C8',
                'hexagonalCode' => '#C8C8C8'
            ],
            [
                'description' => '222222',
                'hexagonalCode' => '#222222'
            ],
            [
                'description' => 'A79881',
                'hexagonalCode' => '#A79881'
            ],
            [
                'description' => '00BFCB',
                'hexagonalCode' => '#00BFCB'
            ],
            [
                'description' => 'CDEEFC',
                'hexagonalCode' => '#CDEEFC'
            ],
            [
                'description' => '1637E6',
                'hexagonalCode' => '#1637E6'
            ],
            [
                'description' => '214090',
                'hexagonalCode' => '#214090'
            ],
            [
                'description' => 'F8C4E3',
                'hexagonalCode' => '#F8C4E3'
            ],
            [
                'description' => 'F23DF5',
                'hexagonalCode' => '#F23DF5'
            ],
            [
                'description' => 'D8BCF8',
                'hexagonalCode' => '#D8BCF8'
            ],
            [
                'description' => '9905CC',
                'hexagonalCode' => '#9905CC'
            ],
            [
                'description' => '129731',
                'hexagonalCode' => '#129731'
            ],
            [
                'description' => '94EBA8',
                'hexagonalCode' => '#94EBA8'
            ],
            [
                'description' => 'FFFD00',
                'hexagonalCode' => '#FFFD00'
            ],
            [
                'description' => 'E2DECA',
                'hexagonalCode' => '#E2DECA'
            ],
            [
                'description' => 'D8AF72',
                'hexagonalCode' => '#D8AF72'
            ],
            [
                'description' => '832619',
                'hexagonalCode' => '#832619'
            ],
            [
                'description' => 'BC0000',
                'hexagonalCode' => '#BC0000'
            ],
            [
                'description' => 'FF0606',
                'hexagonalCode' => '#FF0606'
            ],
            [
                'description' => 'FF8A00',
                'hexagonalCode' => '#FF8A00'
            ],
            [
                'description' => 'FFBDA8',
                'hexagonalCode' => '#FFBDA8'
            ],
            [
                'description' => 'F7D6BE',
                'hexagonalCode' => '#F7D6BE'
            ],
            [
                'description' => 'F9EFBB',
                'hexagonalCode' => '#F9EFBB'
            ],
            [
                'description' => 'ADADAD',
                'hexagonalCode' => '#ADADAD'
            ],
            [
                'description' => '214090',
                'hexagonalCode' => '#214090'
            ],
            [
                'description' => 'E16868',
                'hexagonalCode' => '#E16868'
            ],
        ];

        foreach ($data as $dt) {
            $color = Color::where('description', $dt['description'])->get()->first();
            if(!$color){
                Color::create($dt);
            }
        }
        echo "\n*** Completo em " . round((microtime(true) - $start), 3) . "s ***";
    }
}
