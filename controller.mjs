// controller.mjs
import users from "./data.mjs";

// Melihat data
const index = () => {
  console.log("=== Data Users ===");
  users.map((user, i) => {
    console.log(
      `${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`
    );
  });
};

// Menambah data
const store = (user) => {
  users.push(user);
  console.log("Data berhasil ditambahkan!");
};

// Menghapus data terakhir
const destroy = () => {
  users.pop();
  console.log("Data terakhir berhasil dihapus!");
};

export { index, store, destroy };
