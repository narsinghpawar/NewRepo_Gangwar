// language.js
const Language = (function () {
  const STORAGE_KEY = "selectedLang";

  const translations = {
    en: {
      title: "Hazrat Multani Baba Gangwar Chishti-O-Mirzaai",
      home: "Home",
      about: "About Us",
      gallery: "Divine Moment's",
      contact: "Contact Us",
      location:
        "Hazrat Multani Baba Dargah, Near Gangwar Village, Bidar-Zaheerabad Road, Telangana, India",
      card1_title: "Spiritual Place",
      card1_desc:
        "Discover peace and blessings at Hazrat Multani Baba Gangwar Dargah.",
      card2_title: "Community",
      card2_desc:
        "A place that unites people of all faiths with love and harmony.",
      card3_title: "Events",
      card3_desc:
        "Annual gatherings bring devotees together in celebration and prayers.",
      footer_text: "© 2025 Hazrat Multani Baba Gangwar. All Rights Reserved.",
      visitors_tel_title: "Visitors from Telangana",
      visitors_tel_desc:
        "If you are coming from Telangana, you need to get down at Gangwar Village.",
      visitors_mah_title: "Visitors from Maharashtra",
      visitors_mah_desc:
        "If you are coming from Maharashtra, get down at Bidar. From there, take a government bus towards Hyderabad and get down at Gangwar Village.",
      how_to_reach: "How to Reach",
      photo_gallery: "Photo Gallery",
    },
    hi: {
      title: "हज़रत मुल्तानी बाबा गंगवार",
      home: "मुख्य पृष्ठ",
      about: "हमारे बारे में",
      gallery: "गैलरी",
      contact: "संपर्क करें",
      location:
        "हज़रत मुल्तानी बाबा दरगाह, गंगवार गाँव के पास, बीदर-ज़हीराबाद रोड, तेलंगाना, भारत",
      card1_title: "आध्यात्मिक स्थल",
      card1_desc:
        "हज़रत मुल्तानी बाबा गंगवार दरगाह में शांति और आशीर्वाद का अनुभव करें।",
      card2_title: "समुदाय",
      card2_desc:
        "यह सभी धर्मों के लोगों को प्रेम और एकता के साथ जोड़ने वाला स्थान है।",
      card3_title: "कार्यक्रम",
      card3_desc:
        "वार्षिक समारोह भक्तों को प्रार्थना और उत्सव में एकत्र करते हैं।",
      footer_text: "© 2025 हज़रत मुल्तानी बाबा गंगवार। सर्वाधिकार सुरक्षित।",
      visitors_tel_title: "तेलंगाना से आने वाले आगंतुक",
      visitors_tel_desc:
        "यदि आप तेलंगाना से आ रहे हैं, तो आपको गंगवार गांव में उतरना होगा।",
      visitors_mah_title: "महाराष्ट्र से आने वाले आगंतुक",
      visitors_mah_desc:
        "यदि आप महाराष्ट्र से आ रहे हैं, तो बीदर में उतरें। वहां से हैदराबाद की ओर जाने वाली सरकारी बस लें और गंगवार गांव में उतरें।",
      how_to_reach: "कैसे पहुँचें",
      photo_gallery: "फोटो गैलरी",
    },
    kn: {
      title: "ಹಜರತ್ ಮುಲ್ತಾನಿ ಬಾಬಾ ಗಂಗವಾರ",
      home: "ಮುಖಪುಟ",
      about: "ನಮ್ಮ ಬಗ್ಗೆ",
      gallery: "ಗ್ಯಾಲರಿ",
      contact: "ಸಂಪರ್ಕಿಸಿ",
      location:
        "ಹಜರತ್ ಮುಲ್ತಾನಿ ಬಾಬಾ ದರ್ಗಾ, ಗಂಗವಾರ ಗ್ರಾಮ ಸಮೀಪ, ಬೀದರ-ಜಹೀರಾಬಾದ್ ರಸ್ತೆ, ತೆಲಂಗಾಣ, ಭಾರತ",
      card1_title: "ಆಧ್ಯಾತ್ಮಿಕ ಸ್ಥಳ",
      card1_desc:
        "ಹಜರತ್ ಮುಲ್ತಾನಿ ಬಾಬಾ ಗಂಗವಾರ ದರ್ಗಾದಲ್ಲಿ ಶಾಂತಿ ಮತ್ತು ಆಶೀರ್ವಾದವನ್ನು ಅನುಭವಿಸಿ.",
      card2_title: "ಸಮುದಾಯ",
      card2_desc: "ಎಲ್ಲಾ ಧರ್ಮದ ಜನರನ್ನು ಪ್ರೀತಿಯಿಂದ ಏಕತೆಯಿಂದ ಒಟ್ಟುಗೂಡಿಸುವ ಸ್ಥಳ.",
      card3_title: "ಕಾರ್ಯಕ್ರಮಗಳು",
      card3_desc:
        "ವಾರ್ಷಿಕ ಸಮಾರಂಭಗಳು ಭಕ್ತರನ್ನು ಆರಾಧನೆ ಮತ್ತು ಉತ್ಸವಕ್ಕೆ ಒಟ್ಟಿಗೆ ತರುತ್ತವೆ.",
      footer_text:
        "© 2025 ಹಜರತ್ ಮುಲ್ತಾನಿ ಬಾಬಾ ಗಂಗವಾರ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
      visitors_tel_title: "ತೆಲಂಗಾಣದಿಂದ ಬರುವ ಭಕ್ತರು",
      visitors_tel_desc:
        "ನೀವು ತೆಲಂಗಾಣದಿಂದ ಬರುತ್ತಿದ್ದರೆ, ಗಂಗವಾರ ಗ್ರಾಮದ ಬಳಿ ಇಳಿಯಬೇಕು.",
      visitors_mah_title: "ಮಹಾರಾಷ್ಟ್ರದಿಂದ ಬರುವ ಭಕ್ತರು",
      visitors_mah_desc:
        "ನೀವು ಮಹಾರಾಷ್ಟ್ರದಿಂದ ಬರುತ್ತಿದ್ದರೆ, ಬೀದರಿನಲ್ಲಿ ಇಳಿಯಿರಿ. ಅಲ್ಲಿ ಹೈದರಾಬಾದ್ ಕಡೆಗೆ ಹೋಗುವ ಸರ್ಕಾರಿ ಬಸ್ ಹಿಡಿದು, ಗಂಗವಾರ ಗ್ರಾಮದಲ್ಲಿ ಇಳಿಯಿರಿ.",
      how_to_reach: "ಹೇಗೆ ತಲುಪುವುದು",
      photo_gallery: "ಫೋಟೋ ಗ್ಯಾಲರಿ",
    },
    ur: {
      title: "حضرت ملتانی بابا گنگوار",
      home: "ہوم",
      about: "ہمارے بارے میں",
      gallery: "گیلری",
      contact: "رابطہ کریں",
      location:
        "حضرت ملتانی بابا درگاہ، گنگوار گاؤں کے قریب، بیدر۔زہیرآباد روڈ، تلنگانہ، بھارت",
      card1_title: "روحانی جگہ",
      card1_desc:
        "حضرت ملتانی بابا گنگوار درگاہ میں سکون اور برکت کا تجربہ کریں۔",
      card2_title: "کمیونٹی",
      card2_desc:
        "یہ جگہ تمام مذاہب کے لوگوں کو محبت اور اتحاد کے ساتھ جوڑتی ہے۔",
      card3_title: "تقاریب",
      card3_desc:
        "سالانہ اجتماعات عقیدت مندوں کو جشن اور دعاؤں کے لیے یکجا کرتے ہیں۔",
      footer_text: "© 2025 حضرت ملتانی بابا گنگوار۔ جملہ حقوق محفوظ ہیں۔",
      visitors_tel_title: "تلنگانہ سے آنے والے زائرین",
      visitors_tel_desc:
        "اگر آپ تلنگانہ سے آ رہے ہیں تو آپ کو گنگوار گاؤں میں اترنا ہوگا۔",
      visitors_mah_title: "مہاراشٹر سے آنے والے زائرین",
      visitors_mah_desc:
        "اگر آپ مہاراشٹر سے آ رہے ہیں تو بیدر میں اتریں۔ وہاں سے حیدرآباد جانے والی سرکاری بس لیں اور گنگوار گاؤں میں اتریں۔",
      how_to_reach: "کیسے پہنچیں",
      photo_gallery: "تصویری گیلری",
    },
    te: {
      title: "హజ్రత్ ముల్తానీ బాబా గంగ్వార్",
      home: "హోమ్",
      about: "మాకు గురించి",
      gallery: "గ్యాలరీ",
      contact: "సంప్ర్కించండి",
      location:
        "హజ్రత్ ముల్తానీ బాబా దర్గా, గంగ్వార్ గ్రామం దగ్గర, బీదర్-జహీరాబాద్ రోడ్, తెలంగాణ, భారత్",
      card1_title: "ఆధ్యాత్మిక స్థలం",
      card1_desc:
        "హజ్రత్ ముల్తానీ బాబా గంగ్వార్ దర్గాలో శాంతి మరియు ఆశీర్వాదాన్ని అనుభవించండి.",
      card2_title: "సమాజం",
      card2_desc: "ప్రేమ మరియు ఐక్యతతో అన్ని మతాల ప్రజలను కలిపే స్థలం.",
      card3_title: "సంఘటనలు",
      card3_desc:
        "వార్షిక సభలు భక్తులను ప్రార్థనలు మరియు ఉత్సవాల్లో కలపడం జరుగుతుంది.",
      footer_text:
        "© 2025 హజ్రత్ ముల్తానీ బాబా గంగ్వార్. అన్ని హక్కులు محفوظం.",
      visitors_tel_title: "తెలంగాణ నుండి వచ్చే సందర్శకులు",
      visitors_tel_desc:
        "మీరు తెలంగాణ నుండి వస్తే, గంగ్వార్ గ్రామం వద్ద దిగాలి.",
      visitors_mah_title: "మహారాష్ట్ర నుండి వచ్చే సందర్శకులు",
      visitors_mah_desc:
        "మీరు మహారాష్ట్ర నుండి వస్తే, బీదర్ వద్ద దిగండి. అక్కడ నుండి హైదరాబాద్ వైపు వెళ్లే ప్రభుత్వ బస్సు ఎక్కి, గంగ్వార్ గ్రామం వద్ద దిగండి.",
      how_to_reach: "ఎలా చేరుకోవాలి",
      photo_gallery: "ఫోటో గ్యాలరీ",
    },
  };

  function apply(lang) {
    if (!lang || !translations[lang]) lang = "en";

    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.getAttribute("data-key");
      // fallback to English if missing
      el.textContent = translations[lang][key] || translations["en"][key] || "";
    });
  }

  function set(lang) {
    if (!lang || !translations[lang]) lang = "en";
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);

    const sel = document.getElementById("language");
    if (sel) sel.value = lang;
  }

  function get() {
    return localStorage.getItem(STORAGE_KEY) || "en";
  }

  // On page load
  document.addEventListener("DOMContentLoaded", () => {
    const saved = Language.get();
    Language.apply(saved); // Apply translations to all elements

    const sel = document.getElementById("language");
    if (sel) {
      sel.value = saved;
      sel.addEventListener("change", (e) => Language.set(e.target.value));
    }
  });

  return { set, get, apply };
})();
