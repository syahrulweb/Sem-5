// Data Produk Awal
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Headset", harga: 500000 },
  { id: 5, nama: "Smartwatch", harga: 2000000 }
];

// Event Handler
const eventHandler = {
  // ** Menambahkan Produk (Spread Operator) **
  tambahProduk: (id, nama, harga) => {
    produkList = [...produkList, { id, nama, harga }];
    console.log(`Produk "${nama}" berhasil ditambahkan!`);
  },

  // ** Menghapus Produk (Rest Parameter) **
  hapusProduk: (...ids) => {
    produkList = produkList.filter((produk) => !ids.includes(produk.id));
    console.log(`Produk dengan id ${ids.join(", ")} berhasil dihapus!`);
  },

  // ** Menampilkan Produk (Destructuring) **
  tampilkanProduk: () => {
    console.log("=== Daftar Produk ===");
    produkList.forEach(({ id, nama, harga }) => {
      console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    });
    console.log("=====================\n");
  },
};

// === Simulasi Program di Console ===
eventHandler.tampilkanProduk();

eventHandler.tambahProduk(6, "Keyboard", 350000);
eventHandler.tampilkanProduk();

eventHandler.hapusProduk(2, 4);
eventHandler.tampilkanProduk();
