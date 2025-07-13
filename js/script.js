// Menunggu sampai seluruh halaman HTML dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', () => {

    // Cek apakah kita berada di halaman konten
    const contentTextElement = document.getElementById('content-text');
    if (contentTextElement) {

        // --- DATABASE KONTEN ---
        const contentData = {
            // Data untuk setiap topik
            pengenalanHipertensi: {
                title: "PENGENALAN HIPERTENSI",
                pages: [
                    "<b>Hipertensi</b> adalah suatu keadaan dimana tekanan darah sistolik pada tubuh seseorang lebih dari atau sama dengan 140 mmhg dan atau tekanan darah diastolik lebih dari atau sama dengan 90 mmhg. Hipertensi sebagai salah satu penyakit yang cukup berbahaya hingga mendapatkan julukan <b>THE SILENT KILLER</b>, hipertensi atau yang biasa dikenal dengan darah tinggi sangat perlu mendapatkan perhatian dari setiap individu. Pada tahun 2025, hipertensi diperkirakan menjadi penyebab kematian nomor satu di dunia. Di indonesia, hipertensi menjadi penyebab kematian keempat tertinggi. Sekitar 34,11% populasi dewasa di indonesia mengalami hipertensi, dengan banyak kasus yang belum terdeteksi. "
                    
                ],
                video: "video/pengenalan_hipertensi.mov"
            },
            pengenalanDiabetes: {
                title: "PENGENALAN DIABETES",
                pages: [
                    "Diabetes melitus (DM) didefinisikan sebagai suatu penyakit atau gangguan metabolisme kronis dengan multi etiologi yang ditandai dengan tingginya kadar gula darah disertai dengan gangguan metabolisme karbohidrat, lipid, dan protein sebagai akibat insufisiensi fungsi insulin. Diabetes merupakan penyakit kronis yang paling tinggi kenaikan angka prevalensinya saat ini dan merupakan 10 besar penyebab kematian di dunia (who 2016).Permasalahan yang ada saat ini terkait penyakit dm adalah sebagian besar (sekitar 3 diantara 4 orang) penderita dm tidak menyadari kalau dirinya menderita penyakit dm dan kurangya kesadaran klien terhadap kontrol berkala.<br>Faktor resiko dan penyebab :<ul><li>Keturunan</li><li>Kegemukan</li><li>Gaya hidup/ pola makan yang tidak sehat</li><li>Kurangnya olahraga</li>"
                ],
                video: "video/pengenalan_diabetes.mov"
            },
            pencegahanHipertensi: {
                title: "PENCEGAHAN HIPERTENSI",
                pages: [
                    "Penderita hipertensi tidak menunjukkan gejala atau keluhan tertentu, namun terdapat keluhan tidak spesifik yang bisa dirasakan oleh penderita hipertensi, diantaranya adalah <ul><li>Sakit kepala dan pusing</li><li>Jantung berdebar-debar</li><li>Rasa sakit di dada</li><li>Gelisah</li><li>Penglihatan kabur</li><li>Mudah lelah</li></ul>",
                    "Hipertensi dapat menyebabkan berbagai komplikasi serius apabila tidak dikelola dengan baik. Beberapa penyakit yang akan timbul jika terjadi komplikasi pada penyakit hipertensi.<br>Pencegahan hipertensi dapat dilakukan dengan <b>CERDIK</b> : <ul><li>C : Cek kesehatan secara rutin</li><li>E : Enyahkan asap rokok</li><li>R : Rajin aktivitas fisik</li><li>D : Diet seimbang</li><li>I : Istirahat cukup</li><li>K : Kelola stress</li> ",
                    "Pengobatan Penyakit Hipertensi dapat dilakukan dengan cara : <ul><li>Modifikasi gaya hidup, yang meliputi diet sehat rendah garam, rutin berolahraga, menjaga berat badan ideal, berhenti merokok dan minum alkohol, serta mengelola stres.</li><li>Terapi obat (medikamentosa), yaitu menggunakan resep obat dari dokter untuk menurunkan tekanan darah dan mencegah risiko komplikasi lebih lanjut.</li>"
                ],
                video: "video/pencegahan_hipertensi.mov"
            },
            pencegahanDiabetes: {
                title: "PENCEGAHAN DIABETES",
                pages: [
                    "Berikut beberapa gejala penyakit diabetes diantaanya : <ul><li>Intensitas buang air yang cukup sering</li><li>Cepat merasa lapar</li><li>Sering merasa haus</li><li>Berat badan menurun tanpa sebab</li><li>Kesemutan</li><li>Luka yang sulit sembuh</li><li>Penglihatan yang kabur</li><li>Cepat lelah</li><br> Penyakit diabetes dapat menyebabkan berbagai komplikasi serius, termasuk kerusakan ginjal, gangguan pada mata, penyakit kardiovaskular, kerusakan saraf, serta masalah pada kulit dan kaki. Komplikasi ini dapat berujung pada kondisi yang lebih parah seperti stroke dan amputasi jika tidak ditangani dengan baik.",
                    "Pencegahan Penyakit Diabetes dapat dilakukan dengan cara : <ul><li>Mengatur makanan yang sehat</li><li>Menjalani pemeriksaan gula darah</li><li>Berolahraga secara teratur</il><il>Menjaga Keseimbangan berat badan</il><il>Mengelola stress</il><il>Menggunakan obat sesuai anjuran dokter</il>",
                    "Pengobatan diabetes bertujuan untuk mengendalikan kadar gula darah dan mencegah komplikasi. Berikut adalah beberapa metode pengobatan yang umum digunakan : <ul><li>Terapi insulin</li><li>Obat - Obatan</li><li>Perubahan gaya hidup</li><li>Pemantauan kadar gula darah</li><li>Pencegahan Komplikasi dengan mengedukasi serta melakukan pemeriksaan rutin</li><br>Bahan makanan yang baik diberikan untuk penderita diabetes : <ul><li>Kurangi alkohol dan makanan cepat saji</li><li>Susu dan keju</li><li>Daging 2-3 kali penyajian </li><li>Buah 2-4 kali penyajian</li><li>Sayur 3-5 kali penyajian</li>"
                ],
                video: "video/pencegahan_diabetes.mov"
            },
            sumberInformasi: {
                title: "SUMBER INFORMASI",
                pages: [
                    "Adapun penelitian ini memiliki beberapa perbedaan dari penelitian terdahulu. Salah satunya adalah fokus pada penyakit berbahaya secara umum, seperti hipertensi dan diabetes, serta penyampaian informasi berbasis web dengan fitur offline yang dapat diakses oleh masyarakat tanpa koneksi internet. Selain itu, penelitian ini juga menggunakan pendekatan lokal untuk mendukung edukasi kesehatan di wilayah tertentu yang belum memiliki sistem serupa sebelumnya."
                ],
                video: null
            },
            animasiHipertensiDiabetes: {
                title: "ANIMASI HIPERTENSI & DIABETES",
                pages: [
                    ""
                ],
                video: "video/full_version.mp4"
            },
            // Tambahkan data untuk topik lain di sini...
            default: {
                title: "KONTEN TIDAK DITEMUKAN",
                pages: ["Maaf, konten yang Anda cari tidak tersedia. Silakan kembali ke menu utama."],
                video: ""
            }
        };

        // --- FUNGSI UNTUK MEMBACA PARAMETER DARI URL ---
        function getTopicFromURL() {
            const params = new URLSearchParams(window.location.search);
            return params.get('topic'); // Mengambil nilai dari ?topic=...
        }

        // --- LOGIKA UTAMA ---
        const topic = getTopicFromURL();
        // Pilih data berdasarkan topic dari URL, atau gunakan 'default' jika tidak ada/tidak cocok
        const currentTopicData = contentData[topic] || contentData.default;
        
        let currentPageIndex = 0;

        const textElement = contentTextElement;
        const titleElement = document.getElementById('content-title');
        const videoSourceElement = document.querySelector("#video-player source");
        const videoPlayerElement = document.getElementById("video-player");
        const backButton = document.getElementById('btn-back');
        const nextButton = document.getElementById('btn-next');

        function updateContent() {
            titleElement.textContent = currentTopicData.title;
            textElement.innerHTML = currentTopicData.pages[currentPageIndex];
            
            if (currentTopicData.video) {
                // Jika ADA video, tampilkan player dan muat videonya
                videoPlayerElement.classList.remove('hidden');
                videoPlayerElement.querySelector("source").src = currentTopicData.video;
                videoPlayerElement.load();
            } else {
                // Jika TIDAK ada video, sembunyikan seluruh elemen player
                videoPlayerElement.classList.add('hidden');
            }

            backButton.classList.toggle('invisible', currentPageIndex === 0);

            if (currentPageIndex < currentTopicData.pages.length - 1) {
                nextButton.innerHTML = 'NEXT <i class="bi bi-arrow-right-circle"></i>';
            } else {
                nextButton.innerHTML = 'SELESAI <i class="bi bi-check-circle"></i>';
            }
        }

        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPageIndex < currentTopicData.pages.length - 1) {
                currentPageIndex++;
                updateContent();
            } else {
                window.location.href = 'menu.html';
            }
        });

        backButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPageIndex > 0) {
                currentPageIndex--;
                updateContent();
            }
        });

        updateContent(); // Panggil pertama kali untuk memuat konten
    }

    // =================================================
    // LOGIKA UNTUK FORM NAMA (index.html)
    // =================================================
    const nameForm = document.getElementById('name-form');
    if (nameForm) {
        nameForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Mencegah halaman reload
            const nameInput = document.getElementById('name-input');
            const userName = nameInput.value;

            // Simpan nama ke sessionStorage
            sessionStorage.setItem('userName', userName);

            // Arahkan ke halaman menu
            window.location.href = 'menu.html';
        });
    }

    // =================================================
    // LOGIKA UNTUK PESAN SELAMAT DATANG (menu.html)
    // =================================================
    const welcomeContainer = document.getElementById('welcome-message-container');
    if (welcomeContainer) {
        // Ambil nama dari sessionStorage
        const userName = sessionStorage.getItem('userName');

        if (userName) {
            // Jika ada nama, tampilkan pesan
            welcomeContainer.innerHTML = `Selamat Datang, ${userName}!`;
        }
    }

    // =================================================
    // LOGIKA UNTUK HALAMAN PROFIL (profil.html)
    // =================================================
    const authorProfileElement = document.getElementById('author-profile');
    if (authorProfileElement) {
        const lecturerProfile = document.getElementById('lecturer-profile');
        const backButton = document.getElementById('profile-btn-back');
        const nextButton = document.getElementById('profile-btn-next');
        let isShowingLecturers = false;

        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (!isShowingLecturers) {
                authorProfileElement.classList.add('hidden');
                lecturerProfile.classList.remove('hidden');
                backButton.classList.remove('invisible');
                nextButton.innerHTML = 'SELESAI <i class="bi bi-check-circle"></i>';
                isShowingLecturers = true;
            } else {
                window.location.href = 'menu.html';
            }
        });

        backButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (isShowingLecturers) {
                authorProfileElement.classList.remove('hidden');
                lecturerProfile.classList.add('hidden');
                backButton.classList.add('hidden');
                nextButton.innerHTML = 'NEXT <i class="bi bi-arrow-right-circle"></i>';
                isShowingLecturers = false;
            }
        });
    }

    // =================================================
    // LOGIKA UNTUK HALAMAN KUIS (kuis.html)
    // =================================================
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        const quizQuestions = [
            {
                question: "Berdasarkan video, dalam slogan pencegahan hipertensi 'CERDIK', huruf 'R' merupakan singkatan dari...",
                answers: ["Rawat inap rutin", "Rileks dan santai", "Rajin aktivitas fisik"],
                correctAnswerIndex: 2
            },
            {
                question: "Menurut data yang ditampilkan dalam video, berapa persentase penderita yang tidak menyadari dirinya mengidap Diabetes Melitus?",
                answers: ["34,11%", "Sekitar 75%", "90%"],
                correctAnswerIndex: 1
            },
            {
                question: "Video tersebut menyebutkan beberapa komplikasi serius. Manakah komplikasi yang disebutkan untuk kedua penyakit (hipertensi dan diabetes)?",
                answers: ["Amputasi", "Kerusakan Ginjal", "Aneurisma"],
                correctAnswerIndex: 1
            },
            {
                question: "Sesuai penjelasan di video, bagaimana tekanan darah seseorang bisa dikategorikan sebagai hipertensi?",
                answers: ["Gula darahnya tinggi", "Sistolik ≥ 140 atau Diastolik ≥ 90", "Selalu merasa pusing"],
                correctAnswerIndex: 1
            },
            {
                question: "Dalam slogan 'PATUH' untuk mengendalikan hipertensi, apa arti dari huruf 'A'?",
                answers: ["Awasi asupan garam", "Atasi dengan pengobatan teratur", "Aktivitas fisik dianjurkan"],
                correctAnswerIndex: 1
            }
        ];

        let shuffledQuestions = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let userAnswers = [];

        const questionNumberText = document.getElementById('question-number');
        const questionText = document.getElementById('question-text');
        const answerButtonsContainer = document.getElementById('answer-buttons');
        const nextQuestionBtn = document.getElementById('next-question-btn');
        const resultsContainer = document.getElementById('results-container');
        const scoreSummaryText = document.getElementById('score-summary');
        const reviewContainer = document.getElementById('review-container');
        const retryQuizBtn = document.getElementById('retry-quiz-btn');

        function shuffleArray(array) {
            let shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        function startQuiz() {
            shuffledQuestions = shuffleArray(quizQuestions);
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = [];
            quizContainer.classList.remove('hidden');
            resultsContainer.classList.add('hidden');
            nextQuestionBtn.classList.add('hidden');
            showQuestion();
        }

        function showQuestion() {
            resetState();
            const currentQuestion = shuffledQuestions[currentQuestionIndex];
            questionNumberText.innerText = `Soal ${currentQuestionIndex + 1} dari ${shuffledQuestions.length}`;
            questionText.innerText = currentQuestion.question;

            currentQuestion.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.innerText = answer;
                button.classList.add('btn', 'btn-answer');
                button.dataset.index = index;
                button.addEventListener('click', selectAnswer);
                answerButtonsContainer.appendChild(button);
            });
        }

        function resetState() {
            while (answerButtonsContainer.firstChild) {
                answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
            }
            nextQuestionBtn.classList.add('hidden');
        }

        function selectAnswer(e) {
            const selectedButton = e.target;
            const selectedAnswerIndex = parseInt(selectedButton.dataset.index);
            const correct = selectedAnswerIndex === shuffledQuestions[currentQuestionIndex].correctAnswerIndex;
            
            userAnswers.push(selectedAnswerIndex);

            if (correct) {
                score++;
                selectedButton.classList.add('correct');
            } else {
                selectedButton.classList.add('incorrect');
            }

            Array.from(answerButtonsContainer.children).forEach(button => {
                if (parseInt(button.dataset.index) === shuffledQuestions[currentQuestionIndex].correctAnswerIndex) {
                    button.classList.add('correct');
                }
                button.disabled = true;
            });

            nextQuestionBtn.classList.remove('hidden');
        }

        function showResults() {
            quizContainer.classList.add('hidden');
            resultsContainer.classList.remove('hidden');

            const correctAnswers = score;
            const incorrectAnswers = shuffledQuestions.length - score;
            scoreSummaryText.innerText = `Benar: ${correctAnswers}, Salah: ${incorrectAnswers}`;

            reviewContainer.innerHTML = ''; // Kosongkan ulasan sebelumnya
            shuffledQuestions.forEach((question, index) => {
                const reviewCard = document.createElement('div');
                reviewCard.classList.add('review-card');

                const questionP = document.createElement('p');
                questionP.classList.add('review-question');
                questionP.innerText = `${index + 1}. ${question.question}`;
                reviewCard.appendChild(questionP);

                question.answers.forEach((answer, answerIndex) => {
                    const answerDiv = document.createElement('div');
                    answerDiv.classList.add('review-answer');
                    answerDiv.innerText = answer;

                    if (answerIndex === question.correctAnswerIndex) {
                        answerDiv.classList.add('correct');
                    } else if (answerIndex === userAnswers[index]) {
                        answerDiv.classList.add('incorrect');
                    }
                    reviewCard.appendChild(answerDiv);
                });
                reviewContainer.appendChild(reviewCard);
            });
        }

        nextQuestionBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < shuffledQuestions.length) {
                showQuestion();
            } else {
                showResults();
            }
        });

        retryQuizBtn.addEventListener('click', startQuiz);

        // Mulai kuis saat halaman dimuat
        startQuiz();
    }

    // =================================================
    // LOGIKA UNTUK MUSIK LATAR (Berjalan di semua halaman)
    // =================================================
    const audio = document.getElementById('background-music');
    const volumeBtn = document.getElementById('volume-toggle-btn');
    const volumeIcon = document.getElementById('volume-icon');

    function updateVolumeButton() {
        if (audio.paused) {
            volumeIcon.classList.remove('bi-volume-up-fill');
            volumeIcon.classList.add('bi-volume-mute-fill');
        } else {
            volumeIcon.classList.remove('bi-volume-mute-fill');
            volumeIcon.classList.add('bi-volume-up-fill');
        }
    }

    // Cek status musik dari session sebelumnya saat halaman dimuat
    if (sessionStorage.getItem('musicState') === 'playing') {
        audio.play().catch(e => console.log("Autoplay diblokir oleh browser, butuh interaksi pengguna."));
    }
    // Perbarui ikon tombol saat halaman dimuat (jika tombolnya ada)
    if (volumeIcon) {
        updateVolumeButton();
    }

    // Tambahkan event listener ke tombol volume (jika ada)
    if (volumeBtn) {
        volumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (audio.paused) {
                audio.play();
                sessionStorage.setItem('musicState', 'playing');
            } else {
                audio.pause();
                sessionStorage.setItem('musicState', 'paused');
            }
            updateVolumeButton();
        });
    }
});
