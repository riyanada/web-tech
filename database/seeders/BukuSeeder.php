<?php

namespace Database\Seeders;

use App\Models\Buku;
use Illuminate\Database\Seeder;

class BukuSeeder extends Seeder
{
    // membuat initial data untuk table `buku`
    public function run(): void
    {
        $buku = [
            [
                'judul' => 'Belajar Pemrograman Web',
                'penulis' => 'Sandhika',
                'stok' => 10
            ],
            [
                'judul' => 'Belajar Laravel',
                'penulis' => 'Taylor Otwell',
                'stok' => 7
            ],
        ];

        foreach ($buku as $data) {
            Buku::create($data);
        }
    }
}
