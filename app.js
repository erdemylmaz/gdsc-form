const questionsArea = document.querySelector('.questions');
const endBtn = document.querySelector('.end-btn');
const headerText = document.querySelector('.header-text');
const endText = document.querySelector('.end-text');

let questions;

class App {
    teams = [
        {
            title: 'Tasarım Ekibi',
            point: 0,
        },
        {
            title: 'Sosyal Medya ve İçerik Pazarlama Ekibi',
            point: 0,
        },
        {
            title: 'İş Birliği ve İş Geliştirme Ekibi',
            point: 0,
        },
        {
            title: 'Yapay Zeka ve Veri Bilimi Ekibi',
            point: 0,
        },
        {
            title: 'Proje Geliştirme Ekibi',
            point: 0,
        },
        {
            title: 'Etkinlik ve Organizasyon Ekibi',
            point: 0,
        },
        {
            title: 'Teknik Ekip',
            point: 0,
        },
];

    questions = [
        // TASARIM EKIBI
        {
            title: 'Logolar, afişler ve diğer görsel malzemeler tasarlamayı seviyorum.',
            category: 0,
        },
        {
            title: 'Görsel kimlikler oluşturmak ve web siteleri tasarlamak beni heyecanlandırıyor.',
            category: 0,
        },
        {
            title: 'Teknolojiyi ve estetiği bir araya getirmek, bana ilham veriyor.',
            category: 0,
        },
        {
            title: 'Etkinlik ve projelerin görsel anlamda etkileyici bir şekilde sunulmasına yardımcı olmaktan mutluluk duyuyorum.',
            category: 0,
        },
        // SOSYAL MEDYA EKIBI
        {
            title: 'Sosyal medya platformlarını etkili bir şekilde kullanmayı biliyorum.',
            category: 1,
        },
        {
            title: 'Etkinlikler ve projeler hakkında ilgi çekici ve bilgilendirici içerikler oluşturabiliyorum.',
            category: 1,
        },
        {
            title: 'İzleyici kitlesi ile etkili bir şekilde etkileşim kurabiliyorum.',
            category: 1,
        },
        {
            title: 'Pazarlama stratejileri oluşturabiliyorum.',
            category: 1,
        },
        {
            title: "GDSC IZTECH'i geniş kitlelere tanıtmak için sosyal medyayı etkin bir şekilde kullanabiliyorum",
            category: 1,
        },

        // IS BIRLIGI EKIBI
        {
            title: "İş birliği ve ortaklıklar yoluyla GDSC IZTECH'in marka bilinirliğini ve etkisini artırmaya katkıda bulunmak istiyorum.",
            category: 2,
        },
        {
            title: "Yeni insanlarla tanışmayı ve iş birliği yapmayı seviyorum.",
            category: 2,
        },
        {
            title: "Farklı disiplinlerden ve sektörlerden insanlarla çalışmaktan keyif alıyorum.",
            category: 2,
        },
        {
            title: "İş birliği ve ortaklıklar yoluyla öğrencilerin gelişimine katkıda bulunmak istiyorum.",
            category: 2,
        },
        {
            title: "GDSC IZTECH'in bir parçası olarak üniversite dışı kuruluşlarla ve iş dünyasıyla iş birliği yapmaktan gurur duyuyorum.",
            category: 2,
        },
        {
            title: "Teknoloji şirketleri, kuruluşlar ve diğer topluluklarla iş birliği fırsatlarını değerlendirerek öğrencilerin yeni deneyimler kazanmalarına ve iş dünyasına hazırlanmalarına yardımcı olmaktan keyif alıyorum.",
            category: 2,
        },

        // YAPAY ZEKA
        {
            title: "Yapaz Zeka alanındaki bilgi ve becerilerimi diğerleriyle paylaşmaktan mutluluk duyuyorum.",
            category: 3,
        },
        {
            title: "Yapay zeka ve veri bilimi alanında bilgi ve beceri kazanmak için tutkuluyum.",
            category: 3,
        },
        {
            title: "GDSC IZTECH'in bir parçası olarak yapay zeka ve veri bilimi alanındaki öğrencilere yardımcı olmaktan gurur duyuyorum.",
            category: 3,
        },
        {
            title: "Yeni teknolojileri araştırarak topluluğu güncel tutarak öğrencilerin bu teknolojileri öğrenmesine yardımcı olmaktan heyecan duyuyorum.",
            category: 3,
        },
        {
            title: "Eğitimler, atölye çalışmaları ve projeler düzenleyerek yapay zeka ve veri bilimi alanındaki öğrencilerin beceri kazanmasına yardımcı olmaktan keyif alıyorum.",
            category: 3,
        },

        // PROJE GELISTIRME
        {
            title: "Proje geliştirme sürecine katılmak ve kod yazmaktan gurur duyuyorum.",
            category: 4,
        },

        {
            title: "Projelerin test edilmesi ve hataların tespit edilmesinden keyif alıyorum.",
            category: 4,
        },
        {
            title: "Teknolojiyi kullanarak gerçek dünya sorunları çözmek için projeler geliştirmekten keyif alıyorum.",
            category: 4,
        },
        {
            title: "Diğerleriyle birlikte çalışmak ve projelere katkıda bulunmaktan mutluluk duyuyorum.",
            category: 4,
        },
        {
            title: "Projelerin başarılı bir şekilde tamamlanması için çalışmaktan gurur duyuyorum.",
            category: 4,
        },

        // ETKINLIK
        {
            title: "Teknolojiye ilgi duyan öğrencileri bir araya getirmenin ve bilgi paylaşımını teşvik etmenin önemli olduğuna inanıyorum.",
            category: 5,
        },
        {
            title: "GDSC IZTECH üyeleri arasında etkileşimi artırmak için yaratıcı etkinlik fikirleri bulmaktan ve dönemsel etkinlik planı oluşturmaktan keyif alıyorum.",
            category: 5,
        },
        {
            title: "Konuşmacılar, eğitmenler ve uzmanları etkinliklere davet etmek ve onların katılımını koordine etmekten mutluluk duyuyorum.",
            category: 5,
        },
        {
            title: "GDSC etkinliklerini planlamak, bu etkinliklerin tarihlerini belirlemek ve konseptlerini oluşturmaktan heyecan duyuyorum.",
            category: 5,
        },
        {
            title: "Yeni insanlarla tanışmayı ve etkinlikler düzenlemekten keyif alıyorum.",
            category: 5,
        },

        // TEKNIK EKIP
        {
            title: "Teknik sorunları çözmek ve yeni çözümler geliştirmek için çalışmaktan heyecan duyuyorum.",
            category: 6,
        },
        {
            title: "Teknik bilgi ve becerilerimi başkalarıyla paylaşmaktan mutluluk duyuyorum.",
            category: 6,
        },
        {
            title: "GDSC üyelerine Google'ın geliştirici ürünleri hakkında bilgi vermekten ve bu ürünlerle nasıl çalışacaklarını öğretmekten keyif alıyorum.",
            category: 6,
        },
        {
            title: "Üyeleri hackathonlara veya kodlama yarışmalarına katılmaya teşvik etmekten ve bu tür etkinliklere destek vermekten mutluluk duyuyorum.",
            category: 6,
        },
        {
            title: "Özellikle Google teknolojileri alanlarındaki teknik konularda eğitimler düzenlemek ve atölyeleri yönetmekten keyif alıyorum.",
            category: 6,
        },
    ];

    selectAnswer = (e) => {
        e.target.parentElement.parentElement.classList.add("answered-question");
        let answersArea = e.target.parentElement;
        let answerDiv = e.target;
        let answerIndex = parseInt(e.target.dataset.answerindex);
        let categoryIndex = answersArea.dataset.category;

        let nextQuestionIndex = parseInt(answersArea.dataset.question) + 1;

        let nextPosY = questions[nextQuestionIndex].offsetTop - 18;

        window.scrollTo({
            top: nextPosY,
        });


        let answersDivs = answersArea.querySelectorAll('.question-answer');

        answersDivs.forEach((div, index) => {
            if(div.classList.contains('active-answer')) {
                this.teams[categoryIndex].point -= (index - 2);

                div.classList.remove('active-answer');
                div.style.backgroundColor = "#fff";
            }
        });

        answerDiv.classList.add('active-answer');
        answerDiv.style.backgroundColor = `var(--answerColor${(answerIndex + 2)})`;
        this.teams[categoryIndex].point += answerIndex;

        console.log(this.teams);
    }

    finishTest = () => {
        // congrats (emoji); we though you would fit...

        let balloons = document.querySelectorAll('.background-balloon');

        balloons.forEach((balloon) => {
            if(balloon.offsetTop > 500) {
                balloon.style.display = "none";
            }
        })

        let bestTeam = this.teams.sort((a, b) => b.point - a.point)[0];

        questionsArea.style.display = "none";
        endBtn.style.display = "none";
        headerText.style.display = "none";

        endText.style.display = "flex";

        endText.innerHTML = `

        <div class="end-header">
            <div class="cong-text">Tebrikler 🥳</div>
            <div class="end-bot-text">
                Verdiğiniz cevaplara göre size en uygun gördüğümüz ekibimiz <span class="end-span">${bestTeam.title}.</span>
            </div>

        </div>
        `;

    }

    initQuestions = () => {
        this.questions.map((question, index) => {
            let div = document.createElement('div');
            div.className = "question";

            div.innerHTML = `
                <div class="question-index">${index + 1}</div>
                <div class="question-title">${question.title}</div>

                <div class="question-answers" data-question = "${index}" data-category="${question.category}">
                    <div class="question-answer answer-0" data-answerindex = "-2" ></div>
                    <div class="question-answer answer-1" data-answerindex = "-1" ></div>
                    <div class="question-answer answer-2" data-answerindex = "0" ></div>
                    <div class="question-answer answer-3" data-answerindex = "1" ></div>
                    <div class="question-answer answer-4" data-answerindex = "2" ></div>
                </div> 
            `;

            let randomNumber = Math.floor(Math.random() * 4);

            // div.querySelector('.question-index').style.color = `var(--color${randomNumber})`;

            div.querySelectorAll('.question-answer').forEach((answer) => {
                answer.addEventListener('click', this.selectAnswer);
            });

            questionsArea.appendChild(div);
        });
    }

    initBackground = () => {
        // random balloons randmo colors random positions
        const SIZES = [12, 16, 24, 32, 48];
        const COUNT = 50;

        const WIDTH = window.innerWidth;
        const HEIGHT = document.body.clientHeight - 64;

        for(let x = 0; x < COUNT; x++) {
            let randomNumber = Math.floor(Math.random() * SIZES.length);
            let randomColorNumber = Math.floor(Math.random() * 4);

            let randomX = Math.floor(Math.random() * WIDTH);
            let randomY = Math.floor(Math.random() * HEIGHT);

            let size = SIZES[randomNumber];

            let div = document.createElement('div');
            div.className = "background-balloon";

            div.style.width = `${size}px`;
            div.style.height = `${size}px`;

            div.style.top = `${randomY}px`;
            div.style.left = `${randomX}px`;

            div.style.backgroundColor = `var(--color${randomColorNumber})`;

            document.body.appendChild(div);
        }
    }
}

const app = new App();

app.initQuestions();
app.initBackground();
questions = document.querySelectorAll('.question');

endBtn.addEventListener('click', app.finishTest);
