import { Lang } from '../i18n/ui';

export type InfoPageSlug = '/about' | '/privacy-policy' | '/terms-and-conditions' | '/contact';

export interface InfoSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface InfoPageContent {
  slug: InfoPageSlug;
  schemaType: 'AboutPage' | 'ContactPage' | 'WebPage';
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  sections: InfoSection[];
  showCreatorCard?: boolean;
  showContactActions?: boolean;
}

const EN_INFO_PAGES: Record<InfoPageSlug, InfoPageContent> = {
  '/about': {
    slug: '/about',
    schemaType: 'AboutPage',
    metaTitle: 'About Us – Ultimatrix Calculator',
    metaDescription:
      'Learn about Ultimatrix Calculator, created by Aman Gutpta ("Call me azmath"), delivering fast, zero-clutter calculators with transparent formulas across 14 languages.',
    h1: 'About Ultimatrix Calculator',
    subtitle:
      'Precision calculation instruments engineered for instant answers, transparent math formulas, and zero visual clutter.',
    showCreatorCard: true,
    sections: [
      {
        heading: 'Our Mission',
        paragraphs: [
          'Ultimatrix Calculator (ultimatrixcalculator.com) was built to solve a simple frustration: too many online calculators bury basic tools behind popups, slow scripts, and vague results without explaining the formula behind the number.',
          'Every tool on Ultimatrix Calculator runs in real time directly in your browser and pairs the interactive widget with worked examples, reference tables, and clear FAQ explanations across Health, Finance, Date & Time, Math & Grades, and Everyday utilities.',
        ],
      },
      {
        heading: 'Who Runs Ultimatrix Calculator',
        paragraphs: [
          'Ultimatrix Calculator is independently created and maintained by Aman Gutpta (known online as "Call me azmath").',
          'Whether you are checking pediatric BMI percentiles, estimating loan EMIs, converting CGPA to percentage, or using a scientific keypad on mobile, our goal is accuracy, speed, and accessibility across all 14 supported languages.',
        ],
        bullets: [
          'Creator & Maintainer: Aman Gutpta ("Call me azmath")',
          'Direct Contact: amangu2814@gmail.com',
          'Official Domain: https://ultimatrixcalculator.com',
        ],
      },
      {
        heading: 'Accuracy & Formula Transparency',
        paragraphs: [
          'Every calculator displays the exact mathematical equation and a concrete worked example beneath the interactive panel so students, professionals, and everyday users can verify every calculation step.',
        ],
      },
    ],
  },
  '/privacy-policy': {
    slug: '/privacy-policy',
    schemaType: 'WebPage',
    metaTitle: 'Privacy Policy – Ultimatrix Calculator',
    metaDescription:
      'Read the Privacy Policy for Ultimatrix Calculator (ultimatrixcalculator.com). Learn how client-side calculations protect your financial, health, and personal inputs.',
    h1: 'Privacy Policy',
    subtitle:
      'Your health, financial, and academic calculator inputs are processed locally in your browser with minimal data footprint.',
    sections: [
      {
        heading: '1. Local Browser Calculations',
        paragraphs: [
          'All calculators on Ultimatrix Calculator—including BMI, Child BMI, Loan EMI, SIP, GST, Pregnancy Due Date, and GPA tools—execute formulas directly inside your browser using JavaScript.',
          'Numbers, dates, heights, weights, and financial figures you type into any calculator widget are not uploaded to or stored in our databases.',
        ],
      },
      {
        heading: '2. Information We May Receive',
        paragraphs: [
          'Like most websites, our hosting infrastructure may record standard technical request logs (such as IP address, browser type, referring URL, and requested path) strictly to maintain uptime, prevent abuse, and diagnose errors.',
          'If you email us directly at amangu2814@gmail.com, we use your email address and message solely to respond to your inquiry or bug report.',
        ],
      },
      {
        heading: '3. Cookies, Local Storage & Third-Party Services',
        paragraphs: [
          'Ultimatrix Calculator does not require user registration or accounts. Your browser may store basic technical preferences (such as selected language route) locally to keep navigation consistent.',
          'External links or third-party infrastructure providers operate under their own privacy policies.',
        ],
      },
      {
        heading: '4. Children’s Privacy & Your Rights',
        paragraphs: [
          'We do not knowingly collect personal information from children under 13. Depending on your jurisdiction (such as GDPR or CCPA), you may request clarification or deletion of any direct email correspondence you have sent us.',
          'For privacy questions, please contact Aman Gutpta ("Call me azmath") at amangu2814@gmail.com.',
        ],
      },
    ],
  },
  '/terms-and-conditions': {
    slug: '/terms-and-conditions',
    schemaType: 'WebPage',
    metaTitle: 'Terms and Conditions – Ultimatrix Calculator',
    metaDescription:
      'Review the Terms and Conditions for using Ultimatrix Calculator (ultimatrixcalculator.com), including informational disclaimers and acceptable use.',
    h1: 'Terms and Conditions',
    subtitle:
      'Guidelines, informational disclaimers, and terms governing access to Ultimatrix Calculator.',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        paragraphs: [
          'By accessing or using Ultimatrix Calculator (https://ultimatrixcalculator.com), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of the website.',
        ],
      },
      {
        heading: '2. Informational & Educational Purpose Only',
        paragraphs: [
          'All calculators, tables, formulas, and explanations on this site are provided for general informational and educational purposes only:',
        ],
        bullets: [
          'Health & Pet Care tools (BMI, Child BMI, Pregnancy Due Date, Dog Whelping) do not constitute medical or veterinary advice. Always consult a licensed physician or veterinarian.',
          'Finance tools (EMI, HDFC EMI, SIP, GST, Discount) provide mathematical estimates and do not represent official bank offers, tax filings, or certified financial advice.',
          'Academic tools (GPA, High School GPA, CGPA to Percentage) follow standard scales, though individual institutions may apply custom weighting rules.',
        ],
      },
      {
        heading: '3. Acceptable Use & Intellectual Property',
        paragraphs: [
          'You may use the calculators freely for personal, educational, and professional reference. You agree not to scrape at abusive rates, disrupt server availability, or misrepresent our tools as your own standalone service.',
          'All site branding, custom interface layouts, and original explanatory copy belong to Ultimatrix Calculator.',
        ],
      },
      {
        heading: '4. Limitation of Liability & Contact',
        paragraphs: [
          'Ultimatrix Calculator is provided "as is" without warranties of any kind. We are not liable for any direct or indirect damages arising from reliance on calculated outputs.',
          'Questions about these Terms and Conditions may be sent to Aman Gutpta ("Call me azmath") at amangu2814@gmail.com.',
        ],
      },
    ],
  },
  '/contact': {
    slug: '/contact',
    schemaType: 'ContactPage',
    metaTitle: 'Contact Us – Ultimatrix Calculator',
    metaDescription:
      'Contact Ultimatrix Calculator creator Aman Gutpta ("Call me azmath") at amangu2814@gmail.com for feedback, bug reports, formula suggestions, or partnerships.',
    h1: 'Contact Us',
    subtitle:
      'Have a calculator suggestion, found an edge case in a formula, or want to reach the creator directly? Get in touch anytime.',
    showCreatorCard: true,
    showContactActions: true,
    sections: [
      {
        heading: 'Direct Contact Details',
        paragraphs: [
          'Ultimatrix Calculator is operated by Aman Gutpta ("Call me azmath"). The fastest way to reach us for support, formula corrections, translation feedback, or general inquiries is by email.',
        ],
        bullets: [
          'Name: Aman Gutpta',
          'Handle / Alias: "Call me azmath"',
          'Email: amangu2814@gmail.com',
          'Website: https://ultimatrixcalculator.com',
        ],
      },
      {
        heading: 'Helpful Details to Include',
        paragraphs: [
          'If you are reporting a calculation issue or requesting a new tool, including a few quick details helps us respond faster:',
        ],
        bullets: [
          'The calculator URL or name (for example, /emi-calculator or /child-bmi-calculator)',
          'The exact input values you entered and the expected vs. displayed result',
          'Your language version or device (mobile or desktop) if reporting a display issue',
        ],
      },
    ],
  },
};

const TRANSLATED_TITLES: Partial<
  Record<
    Lang,
    Record<
      InfoPageSlug,
      {
        metaTitle: string;
        metaDescription: string;
        h1: string;
        subtitle: string;
      }
    >
  >
> = {
  es: {
    '/about': {
      metaTitle: 'Sobre Nosotros – Ultimatrix Calculator',
      metaDescription:
        'Conoce Ultimatrix Calculator, creado por Aman Gutpta ("Call me azmath"), con calculadoras rápidas y fórmulas claras en 14 idiomas.',
      h1: 'Sobre Ultimatrix Calculator',
      subtitle:
        'Instrumentos de cálculo de precisión diseñados para respuestas instantáneas, fórmulas transparentes y cero distracciones.',
    },
    '/privacy-policy': {
      metaTitle: 'Política de Privacidad – Ultimatrix Calculator',
      metaDescription:
        'Consulta la Política de Privacidad de Ultimatrix Calculator y cómo los cálculos locales en tu navegador protegen tus datos.',
      h1: 'Política de Privacidad',
      subtitle:
        'Tus datos de salud, finanzas y educación se calculan localmente en tu navegador sin almacenamiento en servidores.',
    },
    '/terms-and-conditions': {
      metaTitle: 'Términos y Condiciones – Ultimatrix Calculator',
      metaDescription:
        'Revisa los Términos y Condiciones de uso de Ultimatrix Calculator, avisos informativos y uso aceptable.',
      h1: 'Términos y Condiciones',
      subtitle: 'Condiciones de uso y avisos informativos para Ultimatrix Calculator.',
    },
    '/contact': {
      metaTitle: 'Contáctanos – Ultimatrix Calculator',
      metaDescription:
        'Contacta a Aman Gutpta ("Call me azmath") en amangu2814@gmail.com para soporte, sugerencias o reportes de Ultimatrix Calculator.',
      h1: 'Contáctanos',
      subtitle:
        '¿Tienes sugerencias o comentarios? Escribe directamente a Aman Gutpta ("Call me azmath") en amangu2814@gmail.com.',
    },
  },
  ja: {
    '/about': {
      metaTitle: '運営者情報 – Ultimatrix Calculator',
      metaDescription:
        'Aman Gutpta（"Call me azmath"）が運営する多言語オンライン計算スイート Ultimatrix Calculator の概要。',
      h1: 'Ultimatrix Calculator について',
      subtitle: '計算式と解説付きで、高速・高精度な計算をすぐに行えるオンラインツール集です。',
    },
    '/privacy-policy': {
      metaTitle: 'プライバシーポリシー – Ultimatrix Calculator',
      metaDescription: 'Ultimatrix Calculator のプライバシーポリシーおよびブラウザ内計算の安全性について。',
      h1: 'プライバシーポリシー',
      subtitle: '入力された数値や日付はブラウザ内でローカル処理され、外部サーバーに保存されません。',
    },
    '/terms-and-conditions': {
      metaTitle: '利用規約 – Ultimatrix Calculator',
      metaDescription: 'Ultimatrix Calculator の利用規約および免責事項について。',
      h1: '利用規約',
      subtitle: 'Ultimatrix Calculator のご利用にあたっての規約と免責事項。',
    },
    '/contact': {
      metaTitle: 'お問い合わせ – Ultimatrix Calculator',
      metaDescription:
        '運営者 Aman Gutpta（"Call me azmath" / amangu2814@gmail.com）へのお問い合わせページ。',
      h1: 'お問い合わせ',
      subtitle:
        'ご要望や不具合のご報告は Aman Gutpta（"Call me azmath"）宛に amangu2814@gmail.com までお送りください。',
    },
  },
  fr: {
    '/about': {
      metaTitle: 'À Propos – Ultimatrix Calculator',
      metaDescription:
        'Découvrez Ultimatrix Calculator, créé par Aman Gutpta ("Call me azmath"), des calculatrices rapides avec formules détaillées.',
      h1: 'À Propos d’Ultimatrix Calculator',
      subtitle: 'Des outils de calcul de précision conçus pour la rapidité, la clarté des formules et zéro encombrement.',
    },
    '/privacy-policy': {
      metaTitle: 'Politique de Confidentialité – Ultimatrix Calculator',
      metaDescription: 'Consultez la Politique de Confidentialité d’Ultimatrix Calculator.',
      h1: 'Politique de Confidentialité',
      subtitle: 'Vos calculs sont exécutés localement dans votre navigateur pour protéger votre vie privée.',
    },
    '/terms-and-conditions': {
      metaTitle: 'Conditions Générales – Ultimatrix Calculator',
      metaDescription: 'Consultez les Conditions Générales d’utilisation d’Ultimatrix Calculator.',
      h1: 'Conditions Générales d’Utilisation',
      subtitle: 'Règles d’utilisation et mentions d’information pour Ultimatrix Calculator.',
    },
    '/contact': {
      metaTitle: 'Nous Contacter – Ultimatrix Calculator',
      metaDescription:
        'Contactez Aman Gutpta ("Call me azmath") à amangu2814@gmail.com pour toute question sur Ultimatrix Calculator.',
      h1: 'Nous Contacter',
      subtitle: 'Écrivez directement à Aman Gutpta ("Call me azmath") à amangu2814@gmail.com.',
    },
  },
  de: {
    '/about': {
      metaTitle: 'Über Uns – Ultimatrix Calculator',
      metaDescription:
        'Erfahren Sie mehr über Ultimatrix Calculator von Aman Gutpta ("Call me azmath").',
      h1: 'Über Ultimatrix Calculator',
      subtitle: 'Präzise Online-Rechner mit transparenten Formeln und sofortigen Ergebnissen.',
    },
    '/privacy-policy': {
      metaTitle: 'Datenschutzrichtlinie – Ultimatrix Calculator',
      metaDescription: 'Datenschutzrichtlinie für Ultimatrix Calculator.',
      h1: 'Datenschutzrichtlinie',
      subtitle: 'Alle Berechnungen erfolgen lokal in Ihrem Browser ohne Speicherung Ihrer Eingaben.',
    },
    '/terms-and-conditions': {
      metaTitle: 'Allgemeine Geschäftsbedingungen – Ultimatrix Calculator',
      metaDescription: 'Nutzungsbedingungen und Haftungsausschluss für Ultimatrix Calculator.',
      h1: 'Allgemeine Geschäftsbedingungen',
      subtitle: 'Hinweise und Nutzungsbedingungen für Ultimatrix Calculator.',
    },
    '/contact': {
      metaTitle: 'Kontakt – Ultimatrix Calculator',
      metaDescription:
        'Kontaktieren Sie Aman Gutpta ("Call me azmath") unter amangu2814@gmail.com.',
      h1: 'Kontakt',
      subtitle: 'Kontaktieren Sie Aman Gutpta ("Call me azmath") direkt per E-Mail an amangu2814@gmail.com.',
    },
  },
  pt: {
    '/about': {
      metaTitle: 'Sobre Nós – Ultimatrix Calculator',
      metaDescription:
        'Conheça a Ultimatrix Calculator, criada por Aman Gutpta ("Call me azmath").',
      h1: 'Sobre a Ultimatrix Calculator',
      subtitle: 'Ferramentas de cálculo de precisão com respostas instantâneas e fórmulas transparentes.',
    },
    '/privacy-policy': {
      metaTitle: 'Política de Privacidade – Ultimatrix Calculator',
      metaDescription: 'Leia a Política de Privacidade da Ultimatrix Calculator.',
      h1: 'Política de Privacidade',
      subtitle: 'Seus cálculos são processados localmente no navegador para proteger sua privacidade.',
    },
    '/terms-and-conditions': {
      metaTitle: 'Termos e Condições – Ultimatrix Calculator',
      metaDescription: 'Consulte os Termos e Condições de uso da Ultimatrix Calculator.',
      h1: 'Termos e Condições',
      subtitle: 'Diretrizes de uso e avisos informativos da Ultimatrix Calculator.',
    },
    '/contact': {
      metaTitle: 'Fale Conosco – Ultimatrix Calculator',
      metaDescription:
        'Entre em contato com Aman Gutpta ("Call me azmath") pelo e-mail amangu2814@gmail.com.',
      h1: 'Fale Conosco',
      subtitle: 'Envie dúvidas ou sugestões para Aman Gutpta ("Call me azmath") em amangu2814@gmail.com.',
    },
  },
  ko: {
    '/about': {
      metaTitle: '소개 – Ultimatrix Calculator',
      metaDescription:
        'Aman Gutpta("Call me azmath")가 만든 다국어 정밀 온라인 계산기 Ultimatrix Calculator 소개.',
      h1: 'Ultimatrix Calculator 소개',
      subtitle: '투명한 공식과 즉각적인 결과를 제공하는 정밀 계산기 플랫폼입니다.',
    },
    '/privacy-policy': {
      metaTitle: '개인정보 처리방침 – Ultimatrix Calculator',
      metaDescription: 'Ultimatrix Calculator 개인정보 처리방침.',
      h1: '개인정보 처리방침',
      subtitle: '모든 계산 입력값은 브라우저 내에서 로컬 처리되며 외부 서버에 저장되지 않습니다.',
    },
    '/terms-and-conditions': {
      metaTitle: '이용약관 – Ultimatrix Calculator',
      metaDescription: 'Ultimatrix Calculator 이용약관 및 면책 조항.',
      h1: '이용약관',
      subtitle: 'Ultimatrix Calculator 서비스 이용에 관한 기본 약관입니다.',
    },
    '/contact': {
      metaTitle: '문의하기 – Ultimatrix Calculator',
      metaDescription:
        '운영자 Aman Gutpta("Call me azmath", amangu2814@gmail.com) 문의 페이지.',
      h1: '문의하기',
      subtitle: '피드백이나 오류 신고는 Aman Gutpta("Call me azmath")에게 amangu2814@gmail.com으로 보내주세요.',
    },
  },
  it: {
    '/about': {
      metaTitle: 'Chi Siamo – Ultimatrix Calculator',
      metaDescription:
        'Scopri Ultimatrix Calculator, creato da Aman Gutpta ("Call me azmath").',
      h1: 'Chi Siamo – Ultimatrix Calculator',
      subtitle: 'Strumenti di calcolo ad alta precisione con formule chiare e calcolo istantaneo.',
    },
    '/privacy-policy': {
      metaTitle: 'Informativa sulla Privacy – Ultimatrix Calculator',
      metaDescription: 'Leggi l’Informativa sulla Privacy di Ultimatrix Calculator.',
      h1: 'Informativa sulla Privacy',
      subtitle: 'Tutti i calcoli vengono eseguiti localmente nel browser senza salvare i tuoi dati.',
    },
    '/terms-and-conditions': {
      metaTitle: 'Termini e Condizioni – Ultimatrix Calculator',
      metaDescription: 'Consulta i Termini e Condizioni di Ultimatrix Calculator.',
      h1: 'Termini e Condizioni',
      subtitle: 'Condizioni di utilizzo e note informative per Ultimatrix Calculator.',
    },
    '/contact': {
      metaTitle: 'Contattaci – Ultimatrix Calculator',
      metaDescription:
        'Contatta Aman Gutpta ("Call me azmath") all’indirizzo amangu2814@gmail.com.',
      h1: 'Contattaci',
      subtitle: 'Scrivi ad Aman Gutpta ("Call me azmath") all’indirizzo amangu2814@gmail.com.',
    },
  },
  id: {
    '/about': {
      metaTitle: 'Tentang Kami – Ultimatrix Calculator',
      metaDescription:
        'Kenali Ultimatrix Calculator, dibuat oleh Aman Gutpta ("Call me azmath"), kalkulator cepat dengan rumus transparan dalam 14 bahasa.',
      h1: 'Tentang Ultimatrix Calculator',
      subtitle:
        'Instrumen perhitungan presisi yang dirancang untuk hasil instan, rumus matematika transparan, dan tampilan bebas gangguan.',
    },
    '/privacy-policy': {
      metaTitle: 'Kebijakan Privasi – Ultimatrix Calculator',
      metaDescription:
        'Baca Kebijakan Privasi Ultimatrix Calculator dan bagaimana perhitungan lokal di browser menjaga privasi data Anda.',
      h1: 'Kebijakan Privasi',
      subtitle:
        'Data kesehatan, keuangan, dan akademik Anda dihitung langsung di browser tanpa disimpan di server kami.',
    },
    '/terms-and-conditions': {
      metaTitle: 'Syarat & Ketentuan – Ultimatrix Calculator',
      metaDescription:
        'Tinjau Syarat & Ketentuan penggunaan Ultimatrix Calculator, disclaimer informasi, dan aturan penggunaan.',
      h1: 'Syarat & Ketentuan',
      subtitle: 'Pedoman penggunaan dan penafian informasi untuk Ultimatrix Calculator.',
    },
    '/contact': {
      metaTitle: 'Hubungi Kami – Ultimatrix Calculator',
      metaDescription:
        'Hubungi pembuat Ultimatrix Calculator Aman Gutpta ("Call me azmath") di amangu2814@gmail.com.',
      h1: 'Hubungi Kami',
      subtitle:
        'Punya saran kalkulator atau menemukan kendala? Hubungi Aman Gutpta ("Call me azmath") melalui amangu2814@gmail.com.',
    },
  },
  tr: {
    '/about': {
      metaTitle: 'Hakkımızda – Ultimatrix Calculator',
      metaDescription:
        'Aman Gutpta ("Call me azmath") tarafından oluşturulan ve 14 dilde şeffaf formüller sunan Ultimatrix Calculator hakkında bilgi edinin.',
      h1: 'Ultimatrix Calculator Hakkında',
      subtitle:
        'Anlık yanıtlar, anlaşılır matematiksel formüller ve sade bir deneyim için tasarlanmış hassas hesaplama araçları.',
    },
    '/privacy-policy': {
      metaTitle: 'Gizlilik Politikası – Ultimatrix Calculator',
      metaDescription:
        'Ultimatrix Calculator Gizlilik Politikasını ve tarayıcı tabanlı hesaplamaların verilerinizi nasıl koruduğunu okuyun.',
      h1: 'Gizlilik Politikası',
      subtitle:
        'Sağlık, finans ve eğitim verileriniz sunucularımıza kaydedilmeden doğrudan tarayıcınızda yerel olarak işlenir.',
    },
    '/terms-and-conditions': {
      metaTitle: 'Kullanım Koşulları – Ultimatrix Calculator',
      metaDescription:
        'Ultimatrix Calculator kullanım koşullarını, bilgilendirme amaçlı feragatnameleri ve kuralları inceleyin.',
      h1: 'Kullanım Koşulları',
      subtitle: 'Ultimatrix Calculator erişim kuralları ve bilgilendirme amaçlı yasal uyarılar.',
    },
    '/contact': {
      metaTitle: 'İletişim – Ultimatrix Calculator',
      metaDescription:
        'Geri bildirim veya destek için Aman Gutpta ("Call me azmath") ile amangu2814@gmail.com üzerinden iletişime geçin.',
      h1: 'İletişim',
      subtitle:
        'Öneri veya hata bildirimleriniz için Aman Gutpta ("Call me azmath") ile amangu2814@gmail.com adresinden iletişime geçebilirsiniz.',
    },
  },
  ar: {
    '/about': {
      metaTitle: 'من نحن – Ultimatrix Calculator',
      metaDescription:
        'تعرّف على Ultimatrix Calculator من تطوير Aman Gutpta ("Call me azmath") لتقديم حاسبات دقيقة ومعادلات واضحة بـ 14 لغة.',
      h1: 'حول Ultimatrix Calculator',
      subtitle:
        'أدوات حساب دقيقة مصممة لإعطاء نتائج فورية ومعادلات رياضية واضحة دون أي تشويش.',
    },
    '/privacy-policy': {
      metaTitle: 'سياسة الخصوصية – Ultimatrix Calculator',
      metaDescription:
        'اطلع على سياسة الخصوصية لموقع Ultimatrix Calculator وكيف تحمي الحسابات المحلية في المتصفح بياناتك.',
      h1: 'سياسة الخصوصية',
      subtitle:
        'تُعالج مدخلاتك الصحية والمالية والأكاديمية محلياً داخل متصفحك دون تخزينها على خوادمنا.',
    },
    '/terms-and-conditions': {
      metaTitle: 'الشروط والأحكام – Ultimatrix Calculator',
      metaDescription:
        'راجع شروط وأحكام استخدام موقع Ultimatrix Calculator وإخلاء المسؤولية المعلوماتي.',
      h1: 'الشروط والأحكام',
      subtitle: 'الإرشادات وشروط الاستخدام وإخلاء المسؤولية الخاص بـ Ultimatrix Calculator.',
    },
    '/contact': {
      metaTitle: 'اتصل بنا – Ultimatrix Calculator',
      metaDescription:
        'تواصل مع مطوّر Ultimatrix Calculator أمان غوبتا ("Call me azmath") عبر amangu2814@gmail.com.',
      h1: 'اتصل بنا',
      subtitle:
        'هل لديك اقتراح لأداة جديدة أو ملاحظة؟ راسل Aman Gutpta ("Call me azmath") عبر amangu2814@gmail.com.',
    },
  },
  pl: {
    '/about': {
      metaTitle: 'O nas – Ultimatrix Calculator',
      metaDescription:
        'Poznaj Ultimatrix Calculator autorstwa Amana Gutpty ("Call me azmath") — szybkie kalkulatory z przejrzystymi wzorami w 14 językach.',
      h1: 'O Ultimatrix Calculator',
      subtitle:
        'Precyzyjne narzędzia obliczeniowe stworzone z myślą o natychmiastowych wynikach, jasnych wzorach i czystym interfejsie.',
    },
    '/privacy-policy': {
      metaTitle: 'Polityka prywatności – Ultimatrix Calculator',
      metaDescription:
        'Zapoznaj się z Polityką prywatności Ultimatrix Calculator i dowiedz się, jak obliczenia w przeglądarce chronią Twoje dane.',
      h1: 'Polityka prywatności',
      subtitle:
        'Twoje dane zdrowotne, finansowe i akademickie są przetwarzane lokalnie w przeglądarce i nie trafiają do baz danych.',
    },
    '/terms-and-conditions': {
      metaTitle: 'Regulamin – Ultimatrix Calculator',
      metaDescription:
        'Sprawdź regulamin korzystania z Ultimatrix Calculator oraz zastrzeżenia informacyjne.',
      h1: 'Regulamin',
      subtitle: 'Zasady korzystania z serwisu oraz informacje prawne dla Ultimatrix Calculator.',
    },
    '/contact': {
      metaTitle: 'Kontakt – Ultimatrix Calculator',
      metaDescription:
        'Skontaktuj się z twórcą Ultimatrix Calculator Amanem Gutptą ("Call me azmath") pod adresem amangu2814@gmail.com.',
      h1: 'Kontakt',
      subtitle:
        'Masz sugestię lub chcesz zgłosić błąd? Napisz do Amana Gutpty ("Call me azmath") na amangu2814@gmail.com.',
    },
  },
  vi: {
    '/about': {
      metaTitle: 'Giới thiệu – Ultimatrix Calculator',
      metaDescription:
        'Tìm hiểu về Ultimatrix Calculator do Aman Gutpta ("Call me azmath") phát triển, cung cấp máy tính nhanh với công thức minh bạch bằng 14 ngôn ngữ.',
      h1: 'Giới thiệu Ultimatrix Calculator',
      subtitle:
        'Bộ công cụ tính toán chính xác được thiết kế cho kết quả tức thì, công thức rõ ràng và giao diện tối giản.',
    },
    '/privacy-policy': {
      metaTitle: 'Chính sách bảo mật – Ultimatrix Calculator',
      metaDescription:
        'Xem Chính sách bảo mật của Ultimatrix Calculator và cách tính toán trực tiếp trên trình duyệt bảo vệ dữ liệu của bạn.',
      h1: 'Chính sách bảo mật',
      subtitle:
        'Dữ liệu sức khỏe, tài chính và học tập của bạn được xử lý cục bộ trên trình duyệt và không lưu trữ trên máy chủ.',
    },
    '/terms-and-conditions': {
      metaTitle: 'Điều khoản sử dụng – Ultimatrix Calculator',
      metaDescription:
        'Xem Điều khoản sử dụng của Ultimatrix Calculator cùng các lưu ý miễn trừ trách nhiệm thông tin.',
      h1: 'Điều khoản sử dụng',
      subtitle: 'Quy định sử dụng và tuyên bố miễn trừ trách nhiệm của Ultimatrix Calculator.',
    },
    '/contact': {
      metaTitle: 'Liên hệ – Ultimatrix Calculator',
      metaDescription:
        'Liên hệ tác giả Ultimatrix Calculator Aman Gutpta ("Call me azmath") qua email amangu2814@gmail.com.',
      h1: 'Liên hệ',
      subtitle:
        'Bạn có góp ý tính năng hoặc báo lỗi? Hãy liên hệ Aman Gutpta ("Call me azmath") qua amangu2814@gmail.com.',
    },
  },
  'zh-tw': {
    '/about': {
      metaTitle: '關於我們 – Ultimatrix Calculator',
      metaDescription:
        '認識由 Aman Gutpta（"Call me azmath"）打造的 Ultimatrix Calculator，支援 14 種語言的即時精準線上計算工具。',
      h1: '關於 Ultimatrix Calculator',
      subtitle: '專為即時解答、透明數學公式與零干擾操作體驗而設計的精密計算平台。',
    },
    '/privacy-policy': {
      metaTitle: '隱私權政策 – Ultimatrix Calculator',
      metaDescription:
        '閱讀 Ultimatrix Calculator 隱私權政策，了解瀏覽器端本地運算如何保護您的健康、財務與個人數值資料。',
      h1: '隱私權政策',
      subtitle: '您的所有計算數值皆直接在瀏覽器本地端執行，不會上傳或儲存至我們的伺服器。',
    },
    '/terms-and-conditions': {
      metaTitle: '服務條款 – Ultimatrix Calculator',
      metaDescription:
        '檢視 Ultimatrix Calculator 服務條款、資訊參考免責聲明與合理使用規範。',
      h1: '服務條款',
      subtitle: '使用 Ultimatrix Calculator 的服務條款與資訊僅供參考之聲明。',
    },
    '/contact': {
      metaTitle: '聯絡我們 – Ultimatrix Calculator',
      metaDescription:
        '透過 amangu2814@gmail.com 聯絡 Ultimatrix Calculator 創辦人 Aman Gutpta（"Call me azmath"）。',
      h1: '聯絡我們',
      subtitle:
        '有任何功能建議、公式回饋或問題回報？歡迎直接致信 Aman Gutpta（"Call me azmath"）：amangu2814@gmail.com。',
    },
  },
};

export function isInfoPageSlug(slug: string): slug is InfoPageSlug {
  return (
    slug === '/about' ||
    slug === '/privacy-policy' ||
    slug === '/terms-and-conditions' ||
    slug === '/contact'
  );
}

export function getInfoPageContent(slug: InfoPageSlug, lang: Lang): InfoPageContent {
  const base = EN_INFO_PAGES[slug];
  const localized = TRANSLATED_TITLES[lang]?.[slug];
  if (!localized) return base;
  return {
    ...base,
    ...localized,
  };
}
