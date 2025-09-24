// Class Kendaraan (sebagai parent class)
class Kendaraan {
  constructor(nama, jenis, hargaSewa) {
    this.nama = nama;
    this.jenis = jenis;
    this.hargaSewa = hargaSewa;
  }

  infoKendaraan() {
    return `${this.jenis} - ${this.nama} (Rp${this.hargaSewa}/hari)`;
  }
}

// Class turunan dari Kendaraan
class Mobil extends Kendaraan {
  constructor(nama, hargaSewa, kapasitas) {
    super(nama, "Mobil", hargaSewa);
    this.kapasitas = kapasitas;
  }

  infoKendaraan() {
    return `${super.infoKendaraan()}, Kapasitas: ${this.kapasitas} orang`;
  }
}

class Motor extends Kendaraan {
  constructor(nama, hargaSewa, cc) {
    super(nama, "Motor", hargaSewa);
    this.cc = cc;
  }

  infoKendaraan() {
    return `${super.infoKendaraan()}, ${this.cc}cc`;
  }
}

// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(
      `${this.nama} menyewa ${kendaraan.nama} (${kendaraan.jenis})`
    );
  }

  infoPelanggan() {
    if (this.kendaraanDisewa) {
      return `${this.nama} (${this.nomorTelepon}) - Menyewa: ${this.kendaraanDisewa.infoKendaraan()}`;
    } else {
      return `${this.nama} (${this.nomorTelepon}) - Belum menyewa kendaraan`;
    }
  }
}

// Manajemen Transportasi
class ManajemenTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanPelanggan() {
    console.log("\n=== Daftar Pelanggan yang Menyewa Kendaraan ===");
    this.daftarPelanggan.forEach((pelanggan, index) => {
      console.log(`${index + 1}. ${pelanggan.infoPelanggan()}`);
    });
  }
}

// ====== SIMULASI PROGRAM ======

// Buat beberapa kendaraan
const avanza = new Mobil("Avanza", 300000, 6);
const beat = new Motor("Honda Beat", 100000, 110);
const Alpart = new Mobil("Yamaha", 200000, 8);
const Scopy = new Motor("Honda Scopy", 100000, 110);

// Buat manajemen transportasi
const manajemen = new ManajemenTransportasi();

// Buat pelanggan
const pelanggan1 = new Pelanggan("Ayuy", "08123456789");
const pelanggan2 = new Pelanggan("Syahrul", "08987654321");
const pelanggan3 = new Pelanggan("Syahrulnya", "08987654321");
const pelanggan4 = new Pelanggan("MS 25", "08987654321");

// Pelanggan menyewa kendaraan
pelanggan1.sewaKendaraan(avanza);
pelanggan2.sewaKendaraan(beat);
pelanggan3.sewaKendaraan(Alpart);
pelanggan4.sewaKendaraan(Scopy);

// Tambahkan ke daftar manajemen
manajemen.tambahPelanggan(pelanggan1);
manajemen.tambahPelanggan(pelanggan2);
manajemen.tambahPelanggan(pelanggan3);
manajemen.tambahPelanggan(pelanggan4);

// Tampilkan daftar pelanggan
manajemen.tampilkanPelanggan();
