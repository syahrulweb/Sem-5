// main.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // tambah dua data dengan alamat ngasal + email sesuai nama
  store({ nama: "Saipul", umur: 30, alamat: "Jl. Pecel Lele Depan Indomaret", email: "saipul@mail.com" });
  store({ nama: "Anwarrrr", umur: 31, alamat: "Gang Cireng Isi Sosis No. 12", email: "anwarrrr@mail.com" });

  // tampilkan semua data
  index();

  // hapus data terakhir
  destroy();

  // tampilkan setelah hapus
  index();
};

main();
