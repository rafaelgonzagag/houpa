<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Psy\Util\Str;

class UserSeeder extends Seeder
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

        DB::table('users')->insert([
            'name' => 'AppVitrine',
            'email' => 'vitrine@houpa.com',
            'password' => Hash::make('password'),
        ]);

        echo "\n*** Completo em " . round((microtime(true) - $start), 3) . "s ***";
    }
}
