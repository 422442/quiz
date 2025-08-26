document.addEventListener('DOMContentLoaded', function() {
  // --- PASTE YOUR EMAILJS KEYS HERE ---
  const EMAILJS_PUBLIC_KEY = 'OzAUn8LFZpjwVjlpf';
  const EMAILJS_SERVICE_ID = 'service_ld9oeie';
  const EMAILJS_TEMPLATE_ID = 'template_pa43kas';

  // Initialize EmailJS
  (function(){
      emailjs.init(EMAILJS_PUBLIC_KEY);
  })();

  const quizData = [
    { question: "π/3 है-", options: ["परिमेय संख्या", "अपरिमेय संख्या", "पूर्णांक संख्या", "इनमें से कोई नहीं"], answer: "अपरिमेय संख्या" },
    { question: "किस नदी को 'बंगाल का शोक' कहा जाता है?", options: ["गंगा", "दामोदर", "कोसी", "ब्रह्मपुत्र"], answer: "दामोदर" },
    { question: "भारत की सबसे बड़ी कृत्रिम झील कौन है?", options: ["गोविन्द सागर", "पंत सागर", "सरदार सरोवर", "कृष्णा सागर"], answer: "गोविन्द सागर" },
    { question: "गंगा मैदान की पुरानी जलोढ़ मृदा क्या कहलाती है?", options: ["खादर", "बांगर", "रेगुर", "इनमें से कोई नहीं"], answer: "बांगर" },
    { question: "निम्नलिखित में से कौन जर्मन चांसलर था?", options: ["मेजिनी", "हीगेल", "बिस्मार्क", "विक्टर इमैनुएल"], answer: "बिस्मार्क" },
    { question: "नेपल्स की क्रांति कब हुई थी?", options: ["1789", "1820", "1839", "1917"], answer: "1820" },
    { question: "वैज्ञानिक समाजवाद का जनक किसे माना जाता है?", options: ["हीगेल", "कार्ल मार्क्स", "सेंट साइमन", "मार्टिन लूथर"], answer: "कार्ल मार्क्स" },
    { question: "आस्वान बाँध किस नदी पर बना है?", options: ["नील नदी", "ब्रह्मपुत्र नदी", "अमेजन नदी", "गंगा नदी"], answer: "नील नदी" },
    { question: "निम्न में से किन्हें कैसर-ए-हिन्द की उपाधि दी गई थी?", options: ["रवीन्द्रनाथ टैगोर", "महात्मा गाँधी", "शंकरन नायर", "सुरेन्द्रनाथ बनर्जी"], answer: "महात्मा गाँधी" },
    { question: "2011 में जनसंख्या की दृष्टि से भारत का विश्व में कौन स्थान था?", options: ["प्रथम", "द्वितीय", "तृतीय", "चतुर्थ"], answer: "द्वितीय" },
    { question: "भारत किस जलडमरूमध्य द्वारा श्रीलंका से पृथक होता है?", options: ["पाक जलडमरूमध्य", "मलक्का जलडमरूमध्य", "बेरिंग जलडमरूमध्य", "होर्मुज जलडमरूमध्य"], answer: "पाक जलडमरूमध्य" },
    { question: "निम्न में से किस आन्दोलन की शुरुआत 'दांडी मार्च' से हुई थी?", options: ["सविनय अवज्ञा आन्दोलन", "असहयोग आन्दोलन", "भारत छोड़ो आन्दोलन", "खिलाफत आन्दोलन"], answer: "सविनय अवज्ञा आन्दोलन" },
    { question: "भारत की सबसे पुरानी तेल शोधन इकाई कौन है?", options: ["बरौनी", "जामनगर", "डिगबोई", "बम्बई हाई"], answer: "डिगबोई" },
    { question: "निम्नलिखित में से कौन रोपण फसल है?", options: ["चाय", "रबड़", "गन्ना", "इनमें से सभी"], answer: "इनमें से सभी" },
    { question: "प्राकृतिक गैस किस खनिज के साथ पायी जाती है?", options: ["यूरेनियम", "चूनापत्थर", "कोयला", "पेट्रोलियम"], answer: "यूरेनियम" },
    { question: "बिहार में जीवनयापन का मुख्य स्त्रोत क्या है?", options: ["कृषि", "उद्योग", "व्यापार", "इनमें से सभी"], answer: "कृषि" },
    { question: "निम्न में से क्या आर्थिक गतिविधि नहीं है?", options: ["कृषि", "संचार", "गरीबी", "परिवहन"], answer: "गरीबी" },
    { question: "मुद्रा का प्राथमिक कार्य क्या है?", options: ["मूल्य का संचय", "मूल्य का हस्तांतरण", "विनिमय का माध्यम", "(A) और (C) दोनों"], answer: "विनिमय का माध्यम" },
    { question: "निम्न में कौन दीर्घकालीन ऋण प्रदान करता है?", options: ["प्राथमिक कृषि साख समिति", "भूमि विकास बैंक", "वाणिज्यिक बैंक", "इनमें से कोई नहीं"], answer: "भूमि विकास बैंक" },
    { question: "निम्न में से क्या गैर-आर्थिक आधारभूत संरचना का अंग है?", options: ["वित्त", "शिक्षा", "ऊर्जा", "संचार"], answer: "शिक्षा" },
    { question: "वैश्वीकरण के परिणामस्वरूप विभिन्न देशों के बीच, निम्न में से किसका निर्बाध प्रवाह होता है?", options: ["पूँजी", "प्रौद्योगिकी", "श्रम", "इनमें से सभी"], answer: "इनमें से सभी" },
    { question: "भारत सरकार अधिनियम, 1919 को किस अन्य नाम से भी जाना जाता है?", options: ["मांटेग्यू-चेम्सफोर्ड सुधार", "इलबर्ट बिल", "इंडियन स्टेट्यूटरी कमीशन", "नेहरू रिपोर्ट"], answer: "मांटेग्यू-चेम्सफोर्ड सुधार" },
    { question: "अखिल भारतीय मुस्लिम लीग की स्थापना किसने की?", options: ["मोहम्मद अली जिन्ना", "जाकिर हुसैन", "नवाब सलीमुल्लाह खान", "मोहम्मद इस्माइल"], answer: "नवाब सलीमुल्लाह खान" },
    { question: "दक्षिण वियतनाम में बाओदाई की सरकार निम्न में से किसकी समर्थक थी?", options: ["चीन", "स्पेन", "फ्रांस", "पुर्तगल"], answer: "फ्रांस" },
    { question: "रूस में कृषि दासता को किसने समाप्त किया?", options: ["लेनिन", "जार एलेक्जेंडर द्वितीय", "स्टालिन", "ट्रॉटस्की"], answer: "जार एलेक्जेंडर द्वितीय" },
    { question: "भारत में प्रथम जल विद्युत संयंत्र की स्थापना कहाँ की गई थी?", options: ["गंगटोक", "दार्जिलिंग", "डिब्रुगढ़", "कलकत्ता"], answer: "दार्जिलिंग" },
    { question: "गुजरात का कच्छ प्रदेश किस भूकम्पीय जोन में आता है?", options: ["जोन-II", "जोन-III", "जोन-IV", "जोन-V"], answer: "जोन-V" },
    { question: "कुशेश्वर स्थान अभयारण्य कहाँ स्थित है?", options: ["मुरैना", "दरभंगा", "भागलपुर", "नन्दन कानन"], answer: "दरभंगा" },
    { question: "समोच्च जुताई कहाँ की जाती है?", options: ["मैदानी क्षेत्र", "तटीय क्षेत्र", "पहाड़ी क्षेत्र", "इनमें से सभी"], answer: "पहाड़ी क्षेत्र" },
    { question: "जोहानसबर्ग में कौन-सा पृथ्वी सम्मेलन आयोजित हुआ था?", options: ["प्रथम", "द्वितीय", "तृतीय", "चतुर्थ"], answer: "द्वितीय" },
    { question: "सरकार द्वारा आर्थिक क्रियाओं पर अनावश्यक नियंत्रणों एवं प्रतिबंधों को हटाना क्या कहलाता है?", options: ["निजीकरण", "विनिवेश", "उदारीकरण", "वैश्वीकरण"], answer: "उदारीकरण" },
    { question: "वस्तु या सेवा का मूल्य या क्षतिपूर्ति राशि 1 करोड़ से अधिक होने पर उपभोक्ता कहाँ शिकायत कर सकता है?", options: ["जिला फोरम", "राज्य आयोग", "राष्ट्रीय आयोग", "इनमें से सभी"], answer: "जिला फोरम" },
    { question: "सर्वोत्तम कोयले का प्रकार कौन है?", options: ["पीट", "लिग्नाइट", "एन्थ्रासाइट", "बिटुमिनस"], answer: "एन्थ्रासाइट" },
    { question: "मूँगफली किस प्रकार की फसल है?", options: ["रबी", "खरीफ", "जायद", "इनमें से कोई नहीं"], answer: "खरीफ" },
    { question: "सब्जी उत्पादन में बिहार का कौन स्थान है?", options: ["प्रथम", "द्वितीय", "तृतीय", "चतुर्थ"], answer: "तृतीय" },
    { question: "बागमती परियोजना कहाँ स्थित है?", options: ["सीतामढ़ी", "दरभंगा", "सारण", "रोहतास"], answer: "सीतामढ़ी" },
    { question: "शेतकारी संगठन कहाँ स्थापित हुआ?", options: ["राजस्थान", "उत्तर प्रदेश", "बिहार", "महाराष्ट्र"], answer: "महाराष्ट्र" },
    { question: "राजनीतिक दलों का चुनाव चिह्न कौन आवंटित करता है?", options: ["भारत सरकार", "भारतीय संविधान", "चुनाव आयोग", "राष्ट्रपति"], answer: "चुनाव आयोग" },
    { question: "73 वाँ संवैधानिक संशोधन निम्न में से किससे संबंधित है?", options: ["पंचायती राज", "नगरपालिका", "सर्वोच्च न्यायालय", "राष्ट्रपति चुनाव"], answer: "पंचायती राज" },
    { question: "राज्य पुनर्गठन आयोग, 1953 का गठन किसकी अध्यक्षता में हुआ?", options: ["फजल अली", "सरदार वल्लभभाई पटेल", "मोरारजी देसाई", "लाल बहादुर शास्त्री"], answer: "फजल अली" },
    { question: "निम्न में से किस शहर में नगर-निगम की स्थापना हो चुकी है?", options: ["भागलपुर", "गोपालगंज", "सीतामढ़ी", "रोहतास"], answer: "भागलपुर" },
    { question: "निम्नलिखित में से कहाँ संघीय सरकार प्रणाली नहीं है?", options: ["भारत", "चीन", "स्पेन", "संयुक्त राज्य अमेरिका"], answer: "चीन" },
    { question: "निम्न में से किस विषय को राज्य-सूची में रखा गया है?", options: ["कृषि", "पुलिस", "सिंचाई", "इनमें से सभी"], answer: "इनमें से सभी" },
    { question: "भारतीय संविधान की 8 वीं अनुसूची में कितनी भाषाएँ शामिल हैं?", options: ["15", "22", "25", "21"], answer: "22" },
    { question: "भारत में राष्ट्रीय आय की गणना किसके द्वारा की जाती है?", options: ["केन्द्रीय सांख्यिकी कार्यालय", "योजना आयोग", "नीति आयोग", "राष्ट्रीय विकास परिषद्"], answer: "केन्द्रीय सांख्यिकी कार्यालय" },
    { question: "बोल्शेविक दल का नाम बदलकर साम्यवादी दल किसने किया?", options: ["लेनिन", "ट्रॉटस्की", "स्टालिन", "बिस्मार्क"], answer: "लेनिन" },
    { question: "बंगाल विभाजन को कब रद्द किया गया था?", options: ["1907", "1905", "1907", "1911"], answer: "1911" },
    { question: "लाला हरदयाल ने निम्न में से किसकी स्थापना की?", options: ["होम रूल लीग", "गदर पार्टी", "भारतीय कम्यूनिस्ट पार्टी", "ब्रह्म समाज"], answer: "गदर पार्टी" },
    { question: "सकल घरेलू उत्पाद में किस क्षेत्र का योगदान सर्वाधिक है?", options: ["प्राथमिक क्षेत्र", "द्वितीयक क्षेत्र", "तृतीयक क्षेत्र", "इनमें से कोई नहीं"], answer: "तृतीयक क्षेत्र" },
    { question: "निम्न में किसका त्रिस्तरीय ढाँचा है?", options: ["सहकारी साख समिति", "उपभोक्ता संरक्षण अधिनियम", "पंचायती राज", "इनमें से सभी"], answer: "पंचायती राज" },
    { question: "निम्नलिखित में किसमें मूल्यह्रास का मान शामिल नहीं है?", options: ["GDP", "GNP", "NNP", "इनमें से सभी"], answer: "NNP" },
    { question: "भारतीय आर्थिक सुधारों में किसे शामिल किया गया है?", options: ["उदारीकरण", "निजीकरण", "वैश्वीकरण", "इनमें से सभी"], answer: "इनमें से सभी" },
    { question: "पूँजी का पारिश्रमिक क्या है?", options: ["लगान", "मजदूरी", "ब्याज", "मिश्रित आय"], answer: "मजदूरी" },
    { question: "निम्नलिखित में से किस सम्पत्ति की तरलता सबसे कम है?", options: ["मुद्रा", "बॉण्ड", "अचल सम्पत्ति", "बैंक जमा"], answer: "अचल सम्पत्ति" },
    { question: "गाँधीजी ने साबरमती आश्रम की स्थापना कहाँ की?", options: ["गाँधीनगर", "अहमदाबाद", "सूरत", "वड़ोदरा"], answer: "अहमदाबाद" },
    { question: "सेडॉन के युद्ध में किसकी पराजय हुई थी?", options: ["फ्रांस", "जर्मनी", "ऑस्ट्रिया", "प्रशा"], answer: "फ्रांस" },
    { question: "निम्न में किसने अपने देश में अनिवार्य सैन्य सेवा लागू की थी?", options: ["मेजिनी", "मेटरनिख", "बिस्मार्क", "लेनिन"], answer: "बिस्मार्क" },
    { question: "जवाहर रोजगार योजना कब शुरू हुई?", options: ["1988", "1989", "1990", "1991"], answer: "1989" },
    { question: "निम्न में से किसका गठन आर्थिक नियोजन में राज्यों की भागीदारी सुनिश्चित करने के लक्ष्य से हुआ था?", options: ["योजना आयोग", "राष्ट्रीय विकास परिषद्", "नाबार्ड", "मुद्रा बाजार"], answer: "योजना आयोग" },
    { question: "पेरिस की प्रधान सड़कों की योजना किसने बनाई थी?", options: ["बैरॉन हॉसमान", "एवेनेजर हावर्ड", "ले कार्बुसीयर", "सैम्यूल क्राम्पटन"], answer: "बैरॉन हॉसमान" },
    { question: "किस राज्य को काटकर मेघालय राज्य का गठन किया गया?", options: ["त्रिपुरा", "असम", "नागालैण्ड", "अरुणाचल प्रदेश"], answer: "असम" },
    { question: "2011 की जनगणना के अनुसार बिहार के किस जिले का जनसंख्या घनत्व सबसे अधिक है?", options: ["शिवहर", "पटना", "कैमूर", "नालन्दा"], answer: "शिवहर" },
    { question: "राज्यपाल की नियुक्ति कौन करता है?", options: ["प्रधानमंत्री", "राष्ट्रपति", "मुख्यमंत्री", "मुख्य न्यायाधीश"], answer: "राष्ट्रपति" },
    { question: "लोक जनशक्ति पार्टी का गठन किसने किया?", options: ["राम विलास पासवान", "मुलायम सिंह", "कांशीराम", "शरद यादव"], answer: "राम विलास पासवान" },
    { question: "पंचायती राज संस्थानों के विघटन की स्थिति में कितने समय अन्तराल में चुनाव करवाना अनिवार्य है?", options: ["2 माह", "6 माह", "1 वर्ष", "1 माह"], answer: "6 माह" },
    { question: "ग्राम कचहरी का प्रधान कौन होता है?", options: ["सरपंच", "जिला मजिस्ट्रेट", "न्याय मित्र", "मुखिया"], answer: "सरपंच" },
    { question: "निम्न में से किस देश में एकात्मक शासन व्यवस्था है?", options: ["ग्रेट ब्रिटेन", "फ्रांस", "चीन", "इनमें से सभी"], answer: "इनमें से सभी" },
    { question: "निम्न में से कौन दबाव समूह नहीं है?", options: ["अखिल भारतीय विद्यार्थी परिषद्", "ऑल इंडिया ट्रेड यूनियन काँग्रेस", "भारतीय राष्ट्रीय काँग्रेस", "राष्ट्रीय स्वयं सेवक संघ"], answer: "भारतीय राष्ट्रीय काँग्रेस" },
    { question: "बिजू जनता दल किस राज्य से संबंधित है?", options: ["बिहार", "झारखण्ड", "ओडिशा", "छत्तीसगढ़"], answer: "ओडिशा" },
    { question: "अमृत बाजार पत्रिका किस भाषा का समाचार पत्र था?", options: ["हिन्दी", "बंगला", "मराठी", "गुजराती"], answer: "बंगला" },
    { question: "भारत में सार्वजनिक क्षेत्र के कितने तेल परिष्करण केन्द्र कार्य कर रहे हैं?", options: ["18", "20", "23", "25"], answer: "18" },
    { question: "ब्रह्मपुत्र नदी तिब्बत में किस नाम से जानी जाती है?", options: ["यमुना नदी", "सांग्पो नदी", "यांग्त्जी नदी", "मानस नदी"], answer: "सांग्पो नदी" },
    { question: "'अखिल भारतीय ट्रेड यूनियन काँग्रेस' की स्थापना कब हुई?", options: ["1848", "1881", "1885", "1920"], answer: "1920" },
    { question: "सोवियत संघ का विघटन कब हुआ?", options: ["1985", "1991", "1968", "1990"], answer: "1991" },
    { question: "सबसे लम्बा राष्ट्रीय जलमार्ग कौन है?", options: ["राष्ट्रीय जलमार्ग-1", "राष्ट्रीय जलमार्ग-II", "राष्ट्रीय जलमार्ग-III", "राष्ट्रीय जलमार्ग-IV"], answer: "राष्ट्रीय जलमार्ग-1" },
    { question: "सरिस्का वन्य जीव अभयारण्य कहाँ स्थित है?", options: ["ओडिशा", "महाराष्ट्र", "राजस्थान", "कर्नाटक"], answer: "राजस्थान" },
    { question: "कैगा परमाणु विद्युत संयंत्र कहाँ स्थित है?", options: ["तमिलनाडु", "कर्नाटक", "केरल", "उत्तर प्रदेश"], answer: "कर्नाटक" }
  ];


  const quizForm = document.getElementById('quizForm');
  const submitBtn = document.getElementById('submitBtn');
  const resultDiv = document.getElementById('result');
  const scoreEl = document.getElementById('score');
  const answersDiv = document.getElementById('answers');
  const viewScoreBtn = document.getElementById('viewScoreBtn');
  
  let userAnswers = [];

  function loadQuiz() {
    let quizHTML = '';
    quizData.forEach((q, index) => {
      quizHTML += `<div class="question-block">`;
      quizHTML += `<p class="question">${index + 1}. ${q.question}</p>`;
      quizHTML += `<div class="options">`;
      q.options.forEach(option => {
        const optionId = `q${index}_${(option || '').toString().replace(/\s+/g, '')}`;
        quizHTML += `<label for="${optionId}"><input type="radio" id="${optionId}" name="question${index}" value="${option}"> ${option}</label>`;
      });
      quizHTML += `</div></div>`;
    });
    quizForm.innerHTML = quizHTML;
  }

  function sendEmailInBackground() {
    let score = 0;
    let resultsBody = '';
    quizData.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.answer;
        if(isCorrect) score++;

        resultsBody += `
            <div style="border-left: 4px solid ${isCorrect ? '#34a853' : '#ea4335'}; padding: 10px; margin-bottom: 10px; background-color: ${isCorrect ? '#e6f4ea' : '#fce8e6'};">
                <p><strong>${index + 1}. ${q.question}</strong></p>
                <p>Your answer: ${userAnswer || 'Not answered'}</p>
                ${!isCorrect ? `<p style="color: #34a853;">Correct answer: ${q.answer}</p>` : ''}
            </div>
        `;
    });

    const templateParams = {
        // This is where the email address is now hardcoded
        to_email: "sanataniayushjha07@gmail.com",
        score: `${score} / ${quizData.length}`,
        results_body: resultsBody
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
           console.log('SUCCESS! Email sent.', response.status, response.text);
        }, function(error) {
           console.log('FAILED to send email.', error);
        });
  }

  function showResults() {
    let score = 0;
    userAnswers = []; // Clear previous answers
    quizData.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      const userAnswer = selectedOption ? selectedOption.value : null;
      userAnswers.push(userAnswer);
      if (userAnswer === q.answer) {
        score++;
      }
    });

    scoreEl.textContent = `${score} / ${quizData.length}`;
    quizForm.classList.add('hidden');
    submitBtn.classList.add('hidden');
    resultDiv.classList.remove('hidden');
    
    // --- THIS IS THE NEW CHANGE ---
    // Send the email automatically in the background
    sendEmailInBackground();

    viewScoreBtn.onclick = () => {
        let answersHTML = '<h3>Answer Review</h3>';
        quizData.forEach((q, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === q.answer;
            answersHTML += `
                <div class="answer-review ${isCorrect ? 'correct' : 'incorrect'}">
                    <p class="question">${index + 1}. ${q.question}</p>
                    <p>Your answer: ${userAnswer || 'Not answered'}</p>
                    ${!isCorrect ? `<p>Correct answer: <span class="correct-answer-text">${q.answer}</span></p>` : ''}
                </div>
            `;
        });
        answersDiv.innerHTML = answersHTML;
        answersDiv.classList.remove('hidden');
        viewScoreBtn.classList.add('hidden');
    };
  }

  loadQuiz();
  submitBtn.addEventListener('click', showResults);
});