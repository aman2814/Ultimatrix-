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
      'Learn about Ultimatrix Calculator, created by Aman Gutpta ("Call me azmath"), delivering fast, zero-clutter calculators with transparent formulas across 8 languages.',
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
          'Whether you are checking pediatric BMI percentiles, estimating loan EMIs, converting CGPA to percentage, or using a scientific keypad on mobile, our goal is accuracy, speed, and accessibility across all 8 supported languages.',
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
        'Conoce Ultimatrix Calculator, creado por Aman Gutpta ("Call me azmath"), con calculadoras rápidas y fórmulas claras en 8 idiomas.',
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
