function checkDate() {
  const input = document.getElementById("dateInput").value;
  const targetDate = "2025-05-17";

  if (input === targetDate) {
    document.getElementById("greeting").style.display = "block";
    document.getElementById("slideshowWrapper").style.display = "block";
    document.querySelector(".container").style.display = "none";

    populateSlideshows();

    const music = document.getElementById("backgroundMusic");
    const slashIcon = document.getElementById("slashIcon");

    music.muted = false;
    music
      .play()
      .then(() => {
        slashIcon.style.display = "none";
      })
      .catch((e) => {
        console.log("Autoplay ditolak:", e);
      });

    const cardWrapper = document.createElement("div");
    cardWrapper.className = "birthday-card-wrapper";

    const card = document.createElement("div");
    card.className = "birthday-card";
    card.innerHTML = `
      <h2>💖Selamat Ulang Tahun sayaanggg!</h2>
      <p>"Selamat ulang tahun yang ke-23 untuk wanita paling istimewa dalam hidupku. Di hari spesialmu ini, aku ingin kamu tahu betapa berharganya dirimu dalam hidupku. Senyummu adalah cahaya dalam hariku, dan hadirmu adalah anugerah terindah yang pernah kuterima. <br> Semoga setiap detik dalam hidupmu dipenuhi kebahagiaan, cinta, dan semua hal yang membuatmu tersenyum. Terima kasih telah menjadi sosok yang selalu membawa kehangatan, canda dan tawa, serta cinta. Semoga setiap langkahmu dipenuhi kebahagiaan, dan segala impianmu perlahan menjadi nyata. Aku sayang kamu, hari ini dan selamanya." 🎂</p>
    `;

    // document.body.appendChild(card);
    cardWrapper.appendChild(card);
    document.body.appendChild(cardWrapper);
  } else {
    alert("Ooopsss, hari ini bukan tanggal yang ditunggu 😅");
  }
}

const totalImages = 57;
const imagePaths = [];

// Isi array dengan path gambar
for (let i = 1; i <= totalImages; i++) {
  imagePaths.push(`img/img${i}.jpg`);
  imagePaths.push(`img/img${i}.JPG`);
}

// Bagi gambar menjadi 4 grup merata
function distributeImages(images) {
  const groups = [[], [], [], []];
  images.forEach((img, i) => {
    groups[i % 4].push(img);
  });
  return groups;
}

function populateSlideshows() {
  const [left, right, extra1, extra2] = distributeImages(imagePaths);

  const trackLeft = document.getElementById("slideTrackLeft");
  const trackRight = document.getElementById("slideTrackRight");
  const trackExtra1 = document.getElementById("slideTrackExtra1");
  const trackExtra2 = document.getElementById("slideTrackExtra2");

  function addImagesToTrack(track, images) {
    // Bersihkan dulu biar tidak duplikat saat dipanggil ulang
    track.innerHTML = "";

    // Gandakan gambar untuk loop tanpa putus
    const doubledImages = [...images, ...images];

    doubledImages.forEach((src) => {
      const slide = document.createElement("div");
      slide.className = "slide";

      const img = document.createElement("img");
      img.src = src;
      img.alt = "Slideshow Image";

      slide.appendChild(img);
      track.appendChild(slide);
    });
  }

  addImagesToTrack(trackLeft, left);
  addImagesToTrack(trackRight, right);
  addImagesToTrack(trackExtra1, extra1);
  addImagesToTrack(trackExtra2, extra2);
}

// toggle music
function toggleMusic() {
  const music = document.getElementById("backgroundMusic");
  const slashIcon = document.getElementById("slashIcon");

  // Jika musik sedang diputar, hentikan
  if (music.paused) {
    music.muted = false;
    music
      .play()
      .then(() => {
        slashIcon.style.display = "none";
      })
      .catch((error) => {
        console.warn("Audio gagal diputar:", error);
      });
  } else {
    music.pause();
    slashIcon.style.display = "inline";
  }
}
