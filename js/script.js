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
                    "<strong>SUMBER INFORMASI RESMI</strong><br><br>" +
                    "<strong>1. Kementerian Kesehatan Republik Indonesia (Kemenkes RI)</strong><br>" +
                    "Kemenkes, melalui Direktorat Jenderal Pencegahan dan Pengendalian Penyakit (P2P), menyediakan berbagai materi edukasi dan pedoman resmi mengenai hipertensi di Indonesia.<br><br>" +
                    "• <strong>Artikel Edukasi Hipertensi:</strong> Halaman ini berisi informasi dasar, data, dan tips pencegahan hipertensi untuk masyarakat umum.<br>" +
                    "URL: <a href='https://p2ptm.kemkes.go.id/penyakit-tidak-menular/hipertensi-penyakit-jantung-dan-pembuluh-darah' target='_blank'>https://p2ptm.kemkes.go.id/penyakit-tidak-menular/hipertensi-penyakit-jantung-dan-pembuluh-darah</a><br><br>" +
                    "• <strong>Buku Pedoman Pengendalian Hipertensi (PDF):</strong> Dokumen ini adalah panduan komprehensif yang digunakan oleh tenaga kesehatan di Indonesia.<br>" +
                    "URL: <a href='https://p2ptm.kemkes.go.id/uploads/VHcrbkVobjRzU2VIaUpvZW9iMکل/10.pdf' target='_blank'>https://p2ptm.kemkes.go.id/uploads/VHcrbkVobjRzU2VIaUpvZW9iMکل/10.pdf</a>",

                    "<strong>2. World Health Organization (WHO)</strong><br>" +
                    "WHO adalah badan kesehatan dunia yang menyediakan data global, lembar fakta, dan rekomendasi internasional mengenai hipertensi.<br><br>" +
                    "• <strong>Lembar Fakta Hipertensi (Global):</strong> Halaman ini merangkum semua informasi penting tentang hipertensi secara global, termasuk statistik, faktor risiko, dan strategi penanganan WHO.<br>" +
                    "URL: <a href='https://www.who.int/news-room/fact-sheets/detail/hypertension' target='_blank'>https://www.who.int/news-room/fact-sheets/detail/hypertension</a><br><br>" +
                    "• <strong>Laporan Global tentang Hipertensi (2023):</strong> Laporan mendalam pertama dari WHO mengenai dampak hipertensi secara global beserta rekomendasi untuk setiap negara.<br>" +
                    "URL: <a href='https://www.who.int/publications/i/item/9789240079435' target='_blank'>https://www.who.int/publications/i/item/9789240079435</a>",

                    "<strong>3. Perhimpunan Dokter Hipertensi Indonesia (PERHI / InaSH)</strong><br>" +
                    "PERHI atau Indonesian Society of Hypertension (InaSH) adalah organisasi profesi dokter di Indonesia yang berfokus pada hipertensi. Mereka mengeluarkan pedoman klinis yang menjadi acuan utama bagi dokter di Indonesia.<br><br>" +
                    "• <strong>Konsensus Penatalaksanaan Hipertensi 2019 (PDF):</strong> Ini adalah panduan klinis yang digunakan oleh dokter di seluruh Indonesia untuk mendiagnosis dan mengobati hipertensi.<br>" +
                    "URL: <a href='https://www.inash.or.id/wp-content/uploads/2019/12/Konsensus-Hipertensi-2019.pdf' target='_blank'>https://www.inash.or.id/wp-content/uploads/2019/12/Konsensus-Hipertensi-2019.pdf</a><br><br>" +
                    "<strong>4. American Heart Association (AHA)</strong><br>" +
                    "AHA adalah organisasi nirlaba di Amerika Serikat yang menjadi salah satu rujukan utama dunia untuk kesehatan jantung dan pembuluh darah.<br><br>" +
                    "• <strong>Informasi Umum tentang Tekanan Darah Tinggi:</strong> Halaman ini menjelaskan secara detail apa itu tekanan darah tinggi, gejalanya, dan cara mengelolanya, ditujukan untuk publik.<br>" +
                    "URL: <a href='https://www.heart.org/en/health-topics/high-blood-pressure' target='_blank'>https://www.heart.org/en/health-topics/high-blood-pressure</a>",

                    "<strong>SUMBER INFORMASI TAMBAHAN</strong><br><br>" +
                    "<strong>5. Referensi Akademik Diabetes Melitus:</strong><br>" +
                    "Dokumen akademik yang membahas tentang diabetes melitus dari perspektif penelitian dan pendidikan kesehatan.<br>" +
                    "URL: <a href='https://eprints.poltekkesjogja.ac.id/1352/4/Chapter2.pdf' target='_blank'>Politekkes Jogja - Chapter 2 PDF</a><br><br>" +
                    "<strong>6. Artikel Diabetes Melitus - RS Elizabeth:</strong><br>" +
                    "Artikel komprehensif tentang pengertian, gejala, penyebab, dan pengelolaan diabetes melitus.<br>" +
                    "URL: <a href='https://rselizabeth.ihc.id/artikel-detail-796-Diabetes-Melitus-Pengertian-Gejala-Penyebab-dan-Pengelolaan.html' target='_blank'>RS Elizabeth - Diabetes Melitus</a><br><br>" +
                    "<strong>7. Portal Ayo Sehat Kemenkes - Diabetes Tipe 2:</strong><br>" +
                    "Informasi resmi dari Kementerian Kesehatan tentang diabetes melitus tipe 2 dan penyakit ginjal.<br>" +
                    "URL: <a href='https://ayosehat.kemkes.go.id/topik-penyakit/diabetes--penyakit-ginjal/diabetes-melitus-tipe-2' target='_blank'>Ayo Sehat Kemenkes - DM Tipe 2</a>"
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
        // PERUBAHAN: Bank soal sekarang berisi 20 pertanyaan
        const questionBank = [
            // 5 Soal Asli
            { question: "Berdasarkan video, dalam slogan pencegahan hipertensi 'CERDIK', huruf 'R' merupakan singkatan dari...", answers: ["Rawat inap rutin", "Rileks dan santai", "Rajin aktivitas fisik"], correctAnswerIndex: 2 },
            { question: "Menurut data yang ditampilkan dalam video, berapa persentase penderita yang tidak menyadari dirinya mengidap Diabetes Melitus?", answers: ["34,11%", "Sekitar 75%", "90%"], correctAnswerIndex: 1 },
            { question: "Video tersebut menyebutkan beberapa komplikasi serius. Manakah komplikasi yang disebutkan untuk kedua penyakit (hipertensi dan diabetes)?", answers: ["Amputasi", "Kerusakan Ginjal", "Aneurisma"], correctAnswerIndex: 1 },
            { question: "Sesuai penjelasan di video, bagaimana tekanan darah seseorang bisa dikategorikan sebagai hipertensi?", answers: ["Gula darahnya tinggi", "Sistolik ≥ 140 atau Diastolik ≥ 90", "Selalu merasa pusing"], correctAnswerIndex: 1 },
            { question: "Dalam slogan 'PATUH' untuk mengendalikan hipertensi, apa arti dari huruf 'A'?", answers: ["Awasi asupan garam", "Atasi dengan pengobatan teratur", "Aktivitas fisik dianjurkan"], correctAnswerIndex: 1 },
            
            // 15 Soal Tambahan (Contoh)
            { question: "Manakah di antara berikut ini yang merupakan faktor risiko utama untuk diabetes tipe 2?", answers: ["Terlalu banyak minum air", "Kurang tidur", "Obesitas dan gaya hidup tidak aktif"], correctAnswerIndex: 2 },
            { question: "Apa nama lain dari 'tekanan darah tinggi'?", answers: ["Hipotensi", "Hipertensi", "Anemia"], correctAnswerIndex: 1 },
            { question: "Berapa batas asupan garam harian yang dianjurkan untuk penderita hipertensi?", answers: ["1 sendok makan", "Tidak ada batas", "Kurang dari 1 sendok teh"], correctAnswerIndex: 2 },
            { question: "Hormon apa yang berfungsi mengatur kadar gula dalam darah?", answers: ["Insulin", "Adrenalin", "Testosteron"], correctAnswerIndex: 0 },
            { question: "Dalam slogan 'CERDIK', huruf 'E' berarti...", answers: ["Enyahkan asap rokok", "Edukasi kesehatan", "Energi yang cukup"], correctAnswerIndex: 0 },
            { question: "Komplikasi diabetes yang dapat menyebabkan kebutaan disebut...", answers: ["Nefropati diabetik", "Neuropati diabetik", "Retinopati diabetik"], correctAnswerIndex: 2 },
            { question: "Aktivitas fisik yang dianjurkan untuk penderita hipertensi adalah selama...", answers: ["5 menit setiap hari", "30 menit, 3-5 kali seminggu", "2 jam setiap akhir pekan"], correctAnswerIndex: 1 },
            { question: "Manakah makanan yang sebaiknya dihindari oleh penderita diabetes?", answers: ["Sayuran hijau", "Buah-buahan segar", "Minuman manis dan kue"], correctAnswerIndex: 2 },
            { question: "Apa yang dimaksud dengan tekanan darah 'Sistolik'?", answers: ["Tekanan saat jantung beristirahat", "Tekanan saat jantung memompa darah", "Rata-rata tekanan darah"], correctAnswerIndex: 1 },
            { question: "Dalam slogan 'PATUH', huruf 'H' berarti...", answers: ["Hindari stres", "Hadapi dengan senyuman", "Hubungi dokter segera"], correctAnswerIndex: 0 },
            { question: "Pemeriksaan gula darah yang umum dilakukan setelah berpuasa selama 8 jam adalah...", answers: ["Tes Gula Darah Puasa", "Tes Gula Darah Sewaktu", "Tes HbA1c"], correctAnswerIndex: 0 },
            { question: "Manakah yang BUKAN merupakan gejala klasik diabetes?", answers: ["Sering haus (polidipsi)", "Sering buang air kecil (poliuri)", "Sering merasa kenyang"], correctAnswerIndex: 2 },
            { question: "Mengapa hipertensi dijuluki 'The Silent Killer'?", answers: ["Karena suaranya pelan", "Karena seringkali tidak menunjukkan gejala", "Karena hanya menyerang di malam hari"], correctAnswerIndex: 1 },
            { question: "Indeks Glikemik (IG) adalah ukuran yang digunakan untuk...", answers: ["Mengukur tekanan darah", "Mengukur seberapa cepat makanan meningkatkan gula darah", "Mengukur detak jantung"], correctAnswerIndex: 1 },
            { question: "Dalam slogan 'CERDIK', huruf 'K' berarti...", answers: ["Kendalikan penyakit penyerta", "Kelola stres", "Kalori seimbang"], correctAnswerIndex: 2 }
        ];

        let questionsForThisQuiz = [];
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
            // PERUBAHAN: Acak seluruh bank soal, lalu ambil 5 soal pertama
            const shuffledBank = shuffleArray(questionBank);
            questionsForThisQuiz = shuffledBank.slice(0, 5);

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
            const currentQuestion = questionsForThisQuiz[currentQuestionIndex];
            questionNumberText.innerText = `Soal ${currentQuestionIndex + 1} dari ${questionsForThisQuiz.length}`;
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
            const correct = selectedAnswerIndex === questionsForThisQuiz[currentQuestionIndex].correctAnswerIndex;
            
            userAnswers.push(selectedAnswerIndex);

            if (correct) {
                score++;
                selectedButton.classList.add('correct');
            } else {
                selectedButton.classList.add('incorrect');
            }

            Array.from(answerButtonsContainer.children).forEach(button => {
                if (parseInt(button.dataset.index) === questionsForThisQuiz[currentQuestionIndex].correctAnswerIndex) {
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
            const incorrectAnswers = questionsForThisQuiz.length - score;
            scoreSummaryText.innerText = `Benar: ${correctAnswers}, Salah: ${incorrectAnswers}`;

            reviewContainer.innerHTML = ''; 
            questionsForThisQuiz.forEach((question, index) => {
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
            if (currentQuestionIndex < questionsForThisQuiz.length) {
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
