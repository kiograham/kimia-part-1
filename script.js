let selectedIndicator = "kubis-merah";

// Fungsi untuk menangani klik pada item indikator
document.querySelectorAll(".indicator-text-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Hapus kelas 'active' dari semua elemen teks
    document.querySelectorAll(".indicator-text-item").forEach((textItem) => {
      textItem.classList.remove("active");
    }); // Tambahkan kelas 'active' ke elemen yang diklik

    this.classList.add("active");
    selectedIndicator = this.dataset.indicator; // Panggil update di sini untuk memperbarui tampilan secara langsung
    updateResult();
  });
});

// Fungsi untuk menangani pencarian
document.getElementById("search-input").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const items = document.querySelectorAll(".indicator-text-item");

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = "inline-block"; // Tampilkan item jika cocok
    } else {
      item.style.display = "none"; // Sembunyikan item jika tidak cocok
    }
  });
});

// Fungsi utama untuk mengubah warna berdasarkan pH
document.getElementById("check-btn").addEventListener("click", function () {
  updateResult();
});

// Menambahkan event listener untuk input pH
document.getElementById("ph-input").addEventListener("input", function () {
  updateResult();
});

function updateResult() {
  const phInput = document.getElementById("ph-input");
  const colorBox = document.getElementById("color-box");
  const resultText = document.getElementById("result-text");

  const phValue = parseInt(phInput.value);
  const selectedIndicatorElement = document.querySelector(
    ".indicator-text-item.active"
  );
  if (!selectedIndicatorElement) {
    colorBox.style.backgroundColor = "#ccc";
    resultText.textContent = "Silakan pilih indikator terlebih dahulu.";
    return;
  }

  const selectedIndicator = selectedIndicatorElement.dataset.indicator; // Data indikator dan perubahan warnanya dalam format objek

  const indicatorData = {
    "kubis-merah": {
      1: { color: "#ff0000", desc: "Merah" },
      2: { color: "#ff4d4d", desc: "Merah muda" },
      3: { color: "#ff66b2", desc: "Merah keunguan" },
      4: { color: "#cc66ff", desc: "Ungu kemerahan" },
      5: { color: "#800080", desc: "Ungu" },
      6: { color: "#6a0dad", desc: "Ungu kebiruan" },
      7: { color: "#4b0082", desc: "Biru keunguan" },
      8: { color: "#0000ff", desc: "Biru" },
      9: { color: "#008080", desc: "Biru kehijauan" },
      10: { color: "#00ff00", desc: "Hijau" },
      11: { color: "#80ff00", desc: "Hijau kekuningan" },
      12: { color: "#ccff33", desc: "Kuning kehijauan" },
      13: { color: "#ffff00", desc: "Kuning" },
      14: { color: "#ffff66", desc: "Kuning cerah" },
    },
    "bunga-sepatu": {
      1: { color: "#8b0000", desc: "Merah tua" },
      2: { color: "#ff4500", desc: "Merah cerah" },
      3: { color: "#ff6666", desc: "Merah muda" },
      4: { color: "#cc66ff", desc: "Ungu kemerahan" },
      5: { color: "#9966ff", desc: "Ungu muda" },
      6: { color: "#800080", desc: "Ungu" },
      7: { color: "#4b0082", desc: "Ungu kebiruan" },
      8: { color: "#4dff88", desc: "Biru kehijauan" },
      9: { color: "#00b33c", desc: "Hijau muda" },
      10: { color: "#008000", desc: "Hijau" },
      11: { color: "#006400", desc: "Hijau tua" },
      12: { color: "#006400", desc: "Hijau tua" },
      13: { color: "#006400", desc: "Hijau tua" },
      14: { color: "#006400", desc: "Hijau tua" },
    },
    "ubi-ungu": {
      1: { color: "#ff0000", desc: "Merah terang" },
      2: { color: "#ff4500", desc: "Merah" },
      3: { color: "#ff66b2", desc: "Merah muda" },
      4: { color: "#cc66ff", desc: "Ungu kemerahan" },
      5: { color: "#800080", desc: "Ungu muda" },
      6: { color: "#800080", desc: "Ungu" },
      7: { color: "#800080", desc: "Ungu kebiruan" },
      8: { color: "#4b0082", desc: "Biru kehijauan" },
      9: { color: "#008000", desc: "Hijau" },
      10: { color: "#80ff00", desc: "Hijau kekuningan" },
      11: { color: "#80ff00", desc: "Hijau kekuningan" },
      12: { color: "#80ff00", desc: "Hijau kekuningan" },
      13: { color: "#80ff00", desc: "Hijau kekuningan" },
      14: { color: "#80ff00", desc: "Hijau kekuningan" },
    },
    "mawar-merah": {
      1: { color: "#8b0000", desc: "Merah tua" },
      2: { color: "#ff0000", desc: "Merah cerah" },
      3: { color: "#ff9999", desc: "Merah muda" },
      4: { color: "#cc66ff", desc: "Ungu kemerahan" },
      5: { color: "#cc66ff", desc: "Ungu muda" },
      6: { color: "#ff0000", desc: "Merah" },
      7: { color: "#ff0000", desc: "Merah" },
      8: { color: "#66ff66", desc: "Hijau muda" },
      9: { color: "#006666", desc: "Hijau kebiruan" },
      10: { color: "#006666", desc: "Hijau kebiruan" },
      11: { color: "#006666", desc: "Hijau kebiruan" },
      12: { color: "#006666", desc: "Hijau kebiruan" },
      13: { color: "#006666", desc: "Hijau kebiruan" },
      14: { color: "#006666", desc: "Hijau kebiruan" },
    },
    "anggur-ungu": {
      1: { color: "#993366", desc: "Merah tua" },
      2: { color: "#993366", desc: "Merah" },
      3: { color: "#ff66b2", desc: "Merah muda" },
      4: { color: "#800080", desc: "Ungu kemerahan" },
      5: { color: "#800080", desc: "Ungu muda" },
      6: { color: "#800080", desc: "Ungu" },
      7: { color: "#800080", desc: "Ungu" },
      8: { color: "#006666", desc: "Biru kehijauan" },
      9: { color: "#008080", desc: "Hijau" },
      10: { color: "#80ff00", desc: "Hijau kekuningan" },
      11: { color: "#80ff00", desc: "Hijau kekuningan" },
      12: { color: "#80ff00", desc: "Hijau kekuningan" },
      13: { color: "#80ff00", desc: "Hijau kekuningan" },
      14: { color: "#80ff00", desc: "Hijau kekuningan" },
    },
    kunyit: {
      1: { color: "#ffcc00", desc: "Kuning cerah" },
      2: { color: "#ffcc00", desc: "Kuning" },
      3: { color: "#ffcc00", desc: "Kuning" },
      4: { color: "#ffcc00", desc: "Kuning" },
      5: { color: "#ffcc00", desc: "Kuning" },
      6: { color: "#ffcc00", desc: "Kuning" },
      7: { color: "#ffcc00", desc: "Kuning" },
      8: { color: "#ff9900", desc: "Oranye" },
      9: { color: "#b22222", desc: "Merah" },
      10: { color: "#800000", desc: "Merah bata" },
      11: { color: "#800000", desc: "Merah bata" },
      12: { color: "#800000", desc: "Merah bata" },
      13: { color: "#800000", desc: "Merah bata" },
      14: { color: "#800000", desc: "Merah bata" },
    },
    "bunga-bougenville": {
      1: { color: "#ff0000", desc: "Merah" },
      2: { color: "#ff9999", desc: "Merah muda" },
      3: { color: "#ff9999", desc: "Merah muda" },
      4: { color: "#ff9999", desc: "Merah muda" },
      5: { color: "#ff69b4", desc: "Pink" },
      6: { color: "#ff69b4", desc: "Pink" },
      7: { color: "#ff69b4", desc: "Pink" },
      8: { color: "#ffff33", desc: "Kuning kehijauan" },
      9: { color: "#ffff00", desc: "Kuning" },
      10: { color: "#ffff00", desc: "Kuning" },
      11: { color: "#ffff00", desc: "Kuning" },
      12: { color: "#ffff00", desc: "Kuning" },
      13: { color: "#ffff00", desc: "Kuning" },
      14: { color: "#ffff00", desc: "Kuning" },
    },
    "jambu-biji-merah": {
      1: { color: "#8b0000", desc: "Merah tua" },
      2: { color: "#ff0000", desc: "Merah" },
      3: { color: "#ff0000", desc: "Merah" },
      4: { color: "#ff0000", desc: "Merah" },
      5: { color: "#ff0000", desc: "Merah" },
      6: { color: "#ff0000", desc: "Merah" },
      7: { color: "#ff0000", desc: "Merah" },
      8: { color: "#ff6666", desc: "Merah muda" },
      9: { color: "#ff6666", desc: "Merah muda" },
      10: { color: "#ff6666", desc: "Merah muda" },
      11: { color: "#ff6666", desc: "Merah muda" },
      12: { color: "#ff6666", desc: "Merah muda" },
      13: { color: "#ff6666", desc: "Merah muda" },
      14: { color: "#ff6666", desc: "Merah muda" },
    },
    rosela: {
      1: { color: "#8b0000", desc: "Merah tua" },
      2: { color: "#8b0000", desc: "Merah tua" },
      3: { color: "#cc66ff", desc: "Ungu kemerahan" },
      4: { color: "#800080", desc: "Ungu" },
      5: { color: "#800080", desc: "Ungu" },
      6: { color: "#800080", desc: "Ungu" },
      7: { color: "#4b0082", desc: "Ungu tua" },
      8: { color: "#77dd77", desc: "Ungu kehijauan" },
      9: { color: "#00b33c", desc: "Hijau muda" },
      10: { color: "#008000", desc: "Hijau" },
      11: { color: "#006400", desc: "Hijau" },
      12: { color: "#006400", desc: "Hijau" },
      13: { color: "#006400", desc: "Hijau" },
      14: { color: "#006400", desc: "Hijau" },
    },
    "bunga-telang": {
      1: { color: "#4b0082", desc: "Ungu tua" },
      2: { color: "#800080", desc: "Ungu" },
      3: { color: "#ff9999", desc: "Merah muda" },
      4: { color: "#cc66ff", desc: "Ungu muda" },
      5: { color: "#6a0dad", desc: "Biru keunguan" },
      6: { color: "#0000ff", desc: "Biru" },
      7: { color: "#0000ff", desc: "Biru" },
      8: { color: "#008080", desc: "Biru kehijauan" },
      9: { color: "#008000", desc: "Hijau" },
      10: { color: "#99ff33", desc: "Hijau kekuningan" },
      11: { color: "#99ff33", desc: "Hijau kekuningan" },
      12: { color: "#99ff33", desc: "Hijau kekuningan" },
      13: { color: "#99ff33", desc: "Hijau kekuningan" },
      14: { color: "#99ff33", desc: "Hijau kekuningan" },
    },
    "kulit-manggis": {
      1: { color: "#5c2a00", desc: "Coklat tua" },
      2: { color: "#993300", desc: "Coklat" },
      3: { color: "#993300", desc: "Coklat" },
      4: { color: "#993300", desc: "Coklat kemerahan" },
      5: { color: "#993300", desc: "Coklat kemerahan" },
      6: { color: "#663366", desc: "Coklat keunguan" },
      7: { color: "#4b0082", desc: "Ungu kehitaman" },
      8: { color: "#0000ff", desc: "Ungu kebiruan" },
      9: { color: "#0000ff", desc: "Biru keunguan" },
      10: { color: "#0000ff", desc: "Biru" },
      11: { color: "#0000ff", desc: "Biru tua" },
      12: { color: "#0000ff", desc: "Biru tua" },
      13: { color: "#0000ff", desc: "Biru tua" },
      14: { color: "#0000ff", desc: "Biru tua" },
    },
    "bayam-merah": {
      1: { color: "#8b0000", desc: "Merah tua" },
      2: { color: "#ff0000", desc: "Merah" },
      3: { color: "#ff0000", desc: "Merah" },
      4: { color: "#ff0000", desc: "Merah" },
      5: { color: "#cc66ff", desc: "Ungu kemerahan" },
      6: { color: "#800080", desc: "Ungu" },
      7: { color: "#800080", desc: "Ungu" },
      8: { color: "#adff2f", desc: "Kuning kehijauan" },
      9: { color: "#ffff00", desc: "Kuning" },
      10: { color: "#ff9900", desc: "Coklat muda" },
      11: { color: "#996633", desc: "Coklat" },
      12: { color: "#663300", desc: "Coklat tua" },
      13: { color: "#663300", desc: "Coklat tua" },
      14: { color: "#663300", desc: "Coklat tua" },
    },
    lemon: {
      1: { color: "#ff0000", desc: "Merah Tua" },
      2: { color: "#ff4d4d", desc: "Merah" },
      3: { color: "#ffff00", desc: "Kuning" },
      4: { color: "#ffff00", desc: "Kuning" },
      5: { color: "#ffff00", desc: "Kuning" },
      6: { color: "#ffff00", desc: "Kuning" },
      7: { color: "#ffff00", desc: "Kuning" },
      8: { color: "#ffff00", desc: "Kuning" },
      9: { color: "#ffff00", desc: "Kuning" },
      10: { color: "#ffff00", desc: "Kuning" },
      11: { color: "#ffff00", desc: "Kuning" },
      12: { color: "#ffff00", desc: "Kuning" },
      13: { color: "#ffff00", desc: "Kuning" },
      14: { color: "#ffff00", desc: "Kuning" },
    },
    "teh-hitam": {
      1: { color: "#cd853f", desc: "Kuning kecoklatan" },
      2: { color: "#cd853f", desc: "Kuning kecoklatan" },
      3: { color: "#cd853f", desc: "Kuning kecoklatan" },
      4: { color: "#cd853f", desc: "Kuning kecoklatan" },
      5: { color: "#cd853f", desc: "Kuning kecoklatan" },
      6: { color: "#cd853f", desc: "Kuning kecoklatan" },
      7: { color: "#d2b48c", desc: "Coklat muda" },
      8: { color: "#a0522d", desc: "Coklat" },
      9: { color: "#8b4513", desc: "Coklat tua" },
      10: { color: "#8b4513", desc: "Coklat tua" },
      11: { color: "#b22222", desc: "Coklat kemerahan" },
      12: { color: "#b22222", desc: "Coklat kemerahan" },
      13: { color: "#b22222", desc: "Coklat kemerahan" },
      14: { color: "#b22222", desc: "Coklat kemerahan" },
    },
    "daun-pandan": {
      1: { color: "#9acd32", desc: "Hijau kekuningan (pudar)" },
      2: { color: "#9acd32", desc: "Hijau pudar" },
      3: { color: "#9acd32", desc: "Hijau pudar" },
      4: { color: "#9acd32", desc: "Hijau pudar" },
      5: { color: "#9acd32", desc: "Hijau pudar" },
      6: { color: "#008000", desc: "Hijau" },
      7: { color: "#008000", desc: "Hijau" },
      8: { color: "#008000", desc: "Hijau" },
      9: { color: "#006400", desc: "Hijau tua" },
      10: { color: "#006400", desc: "Hijau tua" },
      11: { color: "#006400", desc: "Hijau tua" },
      12: { color: "#006400", desc: "Hijau tua" },
      13: { color: "#006400", desc: "Hijau tua" },
      14: { color: "#006400", desc: "Hijau tua" },
    },
    // Data tambahan baru
    "kulit-bawang-merah": {
      1: { color: "#b22222", desc: "Merah" },
      2: { color: "#b22222", desc: "Merah" },
      3: { color: "#ff6347", desc: "Merah muda" },
      4: { color: "#ff6347", desc: "Merah muda" },
      5: { color: "#ff6347", desc: "Merah muda" },
      6: { color: "#6a0dad", desc: "Ungu kebiruan" },
      7: { color: "#6a0dad", desc: "Ungu kebiruan" },
      8: { color: "#adff2f", desc: "Hijau kekuningan" },
      9: { color: "#008000", desc: "Hijau" },
      10: { color: "#008000", desc: "Hijau" },
      11: { color: "#006400", desc: "Hijau tua" },
      12: { color: "#006400", desc: "Hijau tua" },
      13: { color: "#006400", desc: "Hijau tua" },
      14: { color: "#006400", desc: "Hijau tua" },
    },
    "buah-naga-merah": {
      1: { color: "#ff0000", desc: "Merah cerah" },
      2: { color: "#ff0000", desc: "Merah cerah" },
      3: { color: "#ff0000", desc: "Merah cerah" },
      4: { color: "#ff0000", desc: "Merah cerah" },
      5: { color: "#8b0000", desc: "Merah tua" },
      6: { color: "#8b0000", desc: "Merah tua" },
      7: { color: "#8b0000", desc: "Merah tua" },
      8: { color: "#006666", desc: "Biru kehijauan" },
      9: { color: "#008000", desc: "Hijau" },
      10: { color: "#008000", desc: "Hijau" },
      11: { color: "#006400", desc: "Hijau tua" },
      12: { color: "#006400", desc: "Hijau tua" },
      13: { color: "#006400", desc: "Hijau tua" },
      14: { color: "#006400", desc: "Hijau tua" },
    },
    "kembang-sepatu-putih": {
      1: { color: "#ffff99", desc: "Kuning muda" },
      2: { color: "#ffff99", desc: "Kuning muda" },
      3: { color: "#ffff99", desc: "Kuning muda" },
      4: { color: "#ffff99", desc: "Kuning muda" },
      5: { color: "#ffff99", desc: "Kuning muda" },
      6: { color: "#ffff99", desc: "Kuning muda" },
      7: { color: "#ffff00", desc: "Kuning cerah" },
      8: { color: "#ffff00", desc: "Kuning cerah" },
      9: { color: "#ffff00", desc: "Kuning cerah" },
      10: { color: "#ffff00", desc: "Kuning cerah" },
      11: { color: "#ffff00", desc: "Kuning cerah" },
      12: { color: "#ffff00", desc: "Kuning cerah" },
      13: { color: "#ffff00", desc: "Kuning cerah" },
      14: { color: "#ffff00", desc: "Kuning cerah" },
    },
    "bunga-rosela-merah": {
      1: { color: "#ff6347", desc: "Merah muda" },
      2: { color: "#ff6347", desc: "Merah muda" },
      3: { color: "#ff6347", desc: "Merah muda" },
      4: { color: "#cc66ff", desc: "Merah keunguan" },
      5: { color: "#cc66ff", desc: "Merah keunguan" },
      6: { color: "#cc66ff", desc: "Merah keunguan" },
      7: { color: "#cc66ff", desc: "Merah keunguan" },
      8: { color: "#adff2f", desc: "Hijau kekuningan" },
      9: { color: "#008000", desc: "Hijau" },
      10: { color: "#008000", desc: "Hijau" },
      11: { color: "#006400", desc: "Hijau tua" },
      12: { color: "#006400", desc: "Hijau tua" },
      13: { color: "#006400", desc: "Hijau tua" },
      14: { color: "#006400", desc: "Hijau tua" },
    },
    "buah-bit-merah": {
      1: { color: "#ff0000", desc: "Merah cerah" },
      2: { color: "#ff0000", desc: "Merah cerah" },
      3: { color: "#ff0000", desc: "Merah cerah" },
      4: { color: "#ff66b2", desc: "Merah keunguan" },
      5: { color: "#ff66b2", desc: "Merah keunguan" },
      6: { color: "#ff66b2", desc: "Merah keunguan" },
      7: { color: "#ff66b2", desc: "Merah keunguan" },
      8: { color: "#ffcc00", desc: "Kuning keemasan" },
      9: { color: "#ffcc00", desc: "Kuning keemasan" },
      10: { color: "#ffcc00", desc: "Kuning keemasan" },
      11: { color: "#a0522d", desc: "Coklat" },
      12: { color: "#a0522d", desc: "Coklat" },
      13: { color: "#a0522d", desc: "Coklat" },
      14: { color: "#a0522d", desc: "Coklat" },
    },
    "daun-ubi-jalar-ungu": {
      1: { color: "#ff0000", desc: "Merah" },
      2: { color: "#ff0000", desc: "Merah" },
      3: { color: "#ff0000", desc: "Merah" },
      4: { color: "#800080", desc: "Ungu" },
      5: { color: "#800080", desc: "Ungu" },
      6: { color: "#800080", desc: "Ungu" },
      7: { color: "#4b0082", desc: "Biru keunguan" },
      8: { color: "#adff2f", desc: "Hijau kekuningan" },
      9: { color: "#008000", desc: "Hijau" },
      10: { color: "#008000", desc: "Hijau" },
      11: { color: "#006400", desc: "Hijau tua" },
      12: { color: "#006400", desc: "Hijau tua" },
      13: { color: "#006400", desc: "Hijau tua" },
      14: { color: "#006400", desc: "Hijau tua" },
    },
  }; // Periksa apakah nilai pH valid

  if (phValue < 1 || phValue > 14 || isNaN(phValue)) {
    colorBox.style.backgroundColor = "#ccc";
    resultText.textContent =
      "Nilai pH tidak valid. Masukkan angka antara 1-14.";
    return;
  } // Temukan data warna yang sesuai

  const phData = indicatorData[selectedIndicator]?.[phValue.toString()];

  if (phData) {
    colorBox.style.backgroundColor = phData.color;
    resultText.textContent = `pH ${phValue}: ${phData.desc}`;
  } else {
    colorBox.style.backgroundColor = "#ccc";
    resultText.textContent = "Data untuk pH ini tidak tersedia.";
  }
}

// Panggilan awal untuk menampilkan hasil default
updateResult();
