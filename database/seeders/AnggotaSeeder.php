<?php

namespace Database\Seeders;

use App\Models\Anggota;
use Illuminate\Database\Seeder;

class AnggotaSeeder extends Seeder
{
    // membuat initial data untuk table `anggota`
    public function run(): void
    {
        $anggota = [
            [
                'nama' => 'Udin',
                'email' => 'udin@gmail.com',
                'no_hp' => '082937281921',
                'alamat' => 'Cirebon'
            ],
            [
                'nama' => 'Endi Stidadi',
                'email' => 'endis@gmail.com',
                'no_hp' => '089387189221',
                'alamat' => 'Bandung'
            ],
        ];

        foreach ($anggota as $item) {
            Anggota::create($item);
        }
    }
}
