export type CalculatorCategory =
  | 'Health'
  | 'Finance'
  | 'Date & Time'
  | 'Math & Grades'
  | 'Everyday';

export interface CalculatorFaq {
  question: string;
  answer: string;
}

export interface CalculatorVariantLink {
  label: string;
  slug: string;
}

export interface CalculatorDefinition {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: CalculatorCategory;
  tagline: string;
  keywords: string[];
  h1: string;
  metaTitle: string;
  metaDescription: string;
  directAnswer: string;
  formulaTitle: string;
  formulaExpression: string;
  formulaNotes: string;
  workedExample: string;
  tableTitle: string;
  tableHeaders: string[];
  tableRows: string[][];
  faqs: CalculatorFaq[];
  relatedSlugs: string[];
  variants?: CalculatorVariantLink[];
}

export const CALCULATOR_CATEGORIES: CalculatorCategory[] = [
  'Health',
  'Finance',
  'Date & Time',
  'Math & Grades',
  'Everyday',
];

export const CALCULATORS: CalculatorDefinition[] = [
  {
    id: 'bmi-general',
    slug: '/bmi-calculator',
    name: 'Online BMI Calculator',
    shortName: 'BMI',
    category: 'Health',
    tagline: 'Calculate Body Mass Index in kg, cm, lbs, and feet with age and gender context.',
    keywords: [
      'bmi calculator',
      'bmi calculator online',
      'bmi calculator kg',
      'bmi calculator with age',
      'bmi calculator kg with age',
      'bmi calculator age',
      'bmi calculator men',
      'bmi calculator women',
      'bmi calculator male',
      'bmi calculator female',
    ],
    h1: 'Online BMI Calculator (kg & cm) – Body Mass Index with Age',
    metaTitle: 'BMI Calculator Online (kg & cm) – Check Body Mass Index with Age | Ultimatrix',
    metaDescription:
      'Free online BMI calculator in kg, cm, lbs, and feet. Instantly calculate your Body Mass Index with age and gender context, healthy weight range, and WHO BMI chart.',
    directAnswer:
      'Use this free online BMI calculator in kg and cm (or lbs and feet) to calculate your Body Mass Index with age and gender context. According to the World Health Organization (WHO), a healthy adult BMI falls between 18.5 and 24.9 kg/m².',
    formulaTitle: 'BMI Calculator Formula (kg/cm & lbs/in)',
    formulaExpression: 'BMI = weight (kg) ÷ [height (m)]²   |   BMI = 703 × weight (lb) ÷ [height (in)]²',
    formulaNotes:
      'Convert height from cm to meters by dividing by 100 before squaring. While the adult BMI formula is identical for male and female adults aged 20+, children ages 2–19 require age- and sex-specific percentiles.',
    workedExample:
      'For an adult weighing 70 kg at 175 cm (1.75 m): Height squared = 1.75 × 1.75 = 3.0625 m². BMI = 70 ÷ 3.0625 = 22.86 kg/m² (Normal Weight). Healthy weight range for 175 cm is 56.7 kg to 76.3 kg.',
    tableTitle: 'WHO Adult BMI Chart & Weight Classifications',
    tableHeaders: ['Category', 'BMI Range (kg/m²)', 'Health Context'],
    tableRows: [
      ['Underweight', 'Below 18.5', 'Elevated risk of nutritional deficiency or low bone mass'],
      ['Normal Weight', '18.5 – 24.9', 'Healthy adult target range across men and women'],
      ['Overweight', '25.0 – 29.9', 'Moderate risk; pair with waist circumference check'],
      ['Obesity Class I', '30.0 – 34.9', 'Increased cardiometabolic risk'],
      ['Obesity Class II', '35.0 – 39.9', 'High risk; clinical guidance recommended'],
      ['Obesity Class III', '40.0 and above', 'Very high risk; comprehensive medical evaluation'],
    ],
    faqs: [
      {
        question: 'How is BMI calculated in kg and cm?',
        answer:
          'Divide your weight in kilograms by your height in meters squared: BMI = weight (kg) ÷ [height (m)]². For example, if you weigh 70 kg and are 175 cm (1.75 m) tall, your BMI is 70 ÷ (1.75 × 1.75) = 22.86, which falls in the healthy weight range.',
      },
      {
        question: 'What is a normal healthy BMI range for adults?',
        answer:
          'According to the World Health Organization (WHO), a normal healthy BMI for adults aged 20 and older is 18.5 to 24.9 kg/m². Below 18.5 is underweight, 25.0 to 29.9 is overweight, and 30.0 or higher is classified as obesity.',
      },
      {
        question: 'Does BMI change with age and gender?',
        answer:
          'The mathematical BMI formula is identical for adult men and women aged 20+, though older adults naturally carry slightly more body fat at the same BMI. For children and teens aged 2 to 19, BMI is interpreted using age- and sex-specific growth percentiles rather than fixed adult cutoffs.',
      },
      {
        question: 'What are the main limitations of a BMI calculator?',
        answer:
          'BMI is a screening tool rather than a direct measure of body fat. Because muscle weighs more than fat, muscular athletes may register a high BMI despite having low body fat, while older adults with low muscle mass may have excess visceral fat even at a normal BMI.',
      },
    ],
    relatedSlugs: ['/bmi-calculator/men', '/bmi-calculator/women', '/bmi-calculator-by-age', '/child-bmi-calculator'],
    variants: [
      { label: 'General', slug: '/bmi-calculator' },
      { label: 'For Men', slug: '/bmi-calculator/men' },
      { label: 'For Women', slug: '/bmi-calculator/women' },
      { label: 'By Age', slug: '/bmi-calculator-by-age' },
    ],
  },
  {
    id: 'bmi-men',
    slug: '/bmi-calculator/men',
    name: 'BMI Calculator for Men',
    shortName: 'BMI (Men)',
    category: 'Health',
    tagline: 'Check male Body Mass Index, healthy weight ranges, and male body fat context.',
    keywords: ['BMI Calculator for Men', 'male bmi calculator', 'bmi calculator for men'],
    h1: 'BMI Calculator for Men – Male Body Mass Index & Healthy Weight',
    metaTitle: 'BMI Calculator for Men – Check Male Body Mass Index & Healthy Weight | Ultimatrix',
    metaDescription:
      "Calculate BMI for men in kg or lbs. Check male healthy weight ranges, understand how muscle mass impacts male BMI scores, and view the adult men's BMI chart.",
    directAnswer:
      'This BMI calculator for men computes male Body Mass Index in kg/cm or lbs/ft and estimates adult male body fat percentage. Because men typically carry higher skeletal muscle mass and lower essential fat (2–5%), pairing male BMI with waist circumference helps distinguish athletic muscle from excess fat.',
    formulaTitle: 'Male BMI & Deurenberg Body Fat Formula',
    formulaExpression: 'BMI = weight (kg) ÷ [height (m)]²   |   Male BF% = (1.20 × BMI) + (0.23 × Age) − 16.2',
    formulaNotes:
      'The standard BMI ratio is identical for men and women, while the Deurenberg constant (-16.2) accounts for higher average male lean muscle density.',
    workedExample:
      'A 32-year-old man weighing 81 kg at 180 cm (1.80 m) has a BMI of 81 ÷ 3.24 = 25.0 kg/m² and an estimated body fat of (1.20 × 25.0) + (0.23 × 32) − 16.2 = 21.16%.',
    tableTitle: "Adult Men's BMI & Body Composition Chart",
    tableHeaders: ['Male Fitness Tier', 'Typical Body Fat %', 'BMI Context'],
    tableRows: [
      ['Essential Fat', '2% – 5%', 'Typically below 18.5 BMI (clinical minimum)'],
      ['Athletes', '6% – 13%', 'Often 21.0 – 26.5 BMI due to dense lean muscle'],
      ['Fitness', '14% – 17%', 'Typically 20.0 – 24.9 BMI'],
      ['Average Adult Male', '18% – 24%', 'Commonly 22.0 – 26.5 BMI'],
      ['Elevated Risk', '25% and above', 'Aligns with BMI 27+ and waist > 40 in (102 cm)'],
    ],
    faqs: [
      {
        question: 'What is the ideal BMI for an adult man?',
        answer:
          'For adult men aged 20 and older, a healthy BMI falls between 18.5 and 24.9. However, men with higher lean muscle mass or athletic builds may sit between 25.0 and 27.0 while still maintaining healthy body fat levels.',
      },
      {
        question: 'Is the BMI formula different for men than for women?',
        answer:
          'No, the calculation (weight in kg ÷ height in meters²) is the same for both sexes. The difference lies in body composition: adult men typically carry more skeletal muscle and bone density and less essential fat than women at an identical BMI.',
      },
      {
        question: 'Why do muscular men often get an "overweight" BMI result?',
        answer:
          'The BMI formula cannot distinguish between lean muscle tissue and adipose (fat) tissue. Because muscle is denser than fat, strength-trained men often exceed a BMI of 25.0 despite having low body fat and healthy metabolic markers.',
      },
      {
        question: 'What waist size should men aim for alongside a healthy BMI?',
        answer:
          'Health guidelines recommend that adult men keep their waist circumference below 40 inches (102 cm)—or below 35.5 inches (90 cm) for South Asian men—to reduce risks linked to visceral abdominal fat.',
      },
    ],
    relatedSlugs: ['/bmi-calculator', '/bmi-calculator/women', '/bmi-calculator-by-age', '/weight-loss-percentage-calculator'],
    variants: [
      { label: 'General', slug: '/bmi-calculator' },
      { label: 'For Men', slug: '/bmi-calculator/men' },
      { label: 'For Women', slug: '/bmi-calculator/women' },
      { label: 'By Age', slug: '/bmi-calculator-by-age' },
    ],
  },
  {
    id: 'bmi-women',
    slug: '/bmi-calculator/women',
    name: 'BMI Calculator for Women',
    shortName: 'BMI (Women)',
    category: 'Health',
    tagline: 'Check female Body Mass Index, ideal weight by height, and female body fat norms.',
    keywords: ['bmi calculator women', 'bmi calculator female', 'bmi calculator for women', 'female bmi calculator'],
    h1: 'BMI Calculator for Women – Female Body Mass Index & Ideal Weight',
    metaTitle: 'BMI Calculator for Women – Female Body Mass Index & Ideal Weight | Ultimatrix',
    metaDescription:
      'Free female BMI calculator in kg, cm, and feet. Find your healthy BMI range for women, compare female body fat norms, and check ideal weight by height.',
    directAnswer:
      'This female BMI calculator helps adult women check their Body Mass Index in kg, cm, or feet and inches alongside age-adjusted female body fat estimates. Non-pregnant women generally target a healthy BMI of 18.5 to 24.9 kg/m², where natural essential body fat is higher than in men.',
    formulaTitle: 'Female BMI & Deurenberg Body Fat Formula',
    formulaExpression: 'BMI = weight (kg) ÷ [height (m)]²   |   Female BF% = (1.20 × BMI) + (0.23 × Age) − 5.4',
    formulaNotes:
      'The Deurenberg female constant (-5.4 vs -16.2 for men) reflects women’s higher essential physiological fat (10–13%). Intended for non-pregnant adult women aged 20+.',
    workedExample:
      'A 28-year-old woman weighing 60 kg at 165 cm (1.65 m) has a BMI of 60 ÷ 2.7225 = 22.04 kg/m² (Normal Weight) and an estimated body fat of 27.49%.',
    tableTitle: "Adult Women's BMI & Body Fat Norms",
    tableHeaders: ['Female Fitness Tier', 'Typical Body Fat %', 'BMI Context'],
    tableRows: [
      ['Essential Fat', '10% – 13%', 'Minimum physiological fat for endocrine & bone health'],
      ['Athletes', '14% – 20%', 'Commonly 19.0 – 23.5 BMI'],
      ['Fitness', '21% – 24%', 'Usually 19.5 – 23.5 BMI'],
      ['Average Adult Female', '25% – 31%', 'Typically 21.0 – 25.5 BMI'],
      ['Elevated Risk', '32% and above', 'Often aligns with BMI 27+ and waist > 35 in (88 cm)'],
    ],
    faqs: [
      {
        question: 'What is a healthy BMI range for women?',
        answer:
          'A healthy BMI for non-pregnant adult women aged 20+ is 18.5 to 24.9 kg/m². Within this band, women naturally carry higher essential body fat (typically 21%–32%) than men at the exact same BMI score.',
      },
      {
        question: 'Should pregnant or breastfeeding women use a standard BMI calculator?',
        answer:
          'No. Standard BMI cutoffs do not apply during pregnancy because weight gain includes the baby, placenta, amniotic fluid, and increased blood volume. Healthcare providers use pre-pregnancy BMI to guide healthy pregnancy weight gain targets.',
      },
      {
        question: 'How does menopause affect a woman\'s BMI and body composition?',
        answer:
          'Hormonal shifts during perimenopause and menopause can reduce lean muscle mass and redistribute fat toward the abdomen, meaning a woman\'s body fat percentage can rise even if her scale weight and BMI stay unchanged.',
      },
      {
        question: 'What is a healthy waist measurement for women alongside BMI?',
        answer:
          'For non-pregnant adult women, a waist circumference below 35 inches (88 cm)—or below 31.5 inches (80 cm) for South Asian women—is associated with lower cardiometabolic risk.',
      },
    ],
    relatedSlugs: ['/bmi-calculator', '/bmi-calculator/men', '/bmi-calculator-by-age', '/pregnancy-due-date-calculator'],
    variants: [
      { label: 'General', slug: '/bmi-calculator' },
      { label: 'For Men', slug: '/bmi-calculator/men' },
      { label: 'For Women', slug: '/bmi-calculator/women' },
      { label: 'By Age', slug: '/bmi-calculator-by-age' },
    ],
  },
  {
    id: 'child-bmi-calculator',
    slug: '/child-bmi-calculator',
    name: 'Child & Teen BMI Calculator',
    shortName: 'Child BMI',
    category: 'Health',
    tagline: 'Calculate child and teen BMI (ages 2–19) in kg/cm or lbs/ft with CDC percentiles.',
    keywords: ['child bmi calculator', 'bmi calculator kg with age', 'bmi calculator kids'],
    h1: 'Child & Teen BMI Calculator (Ages 2 to 19) – Kids BMI Percentile',
    metaTitle: 'Child BMI Calculator (Ages 2–19) – Kids & Teen BMI Percentile in kg | Ultimatrix',
    metaDescription:
      'Calculate child and teen BMI (ages 2 to 19) in kg/cm or lbs/ft. Get accurate CDC/WHO sex-specific BMI-for-age percentiles for boys and girls.',
    directAnswer:
      'This child BMI calculator evaluates Body Mass Index for kids and teens aged 2 to 19 in kg/cm or lbs/ft using CDC/WHO sex-specific BMI-for-age growth percentiles. A healthy weight falls between the 5th percentile and less than the 85th percentile for the child’s exact age and sex.',
    formulaTitle: 'Pediatric BMI & CDC Box-Cox Z-Score Formula',
    formulaExpression: 'BMI = weight (kg) ÷ [height (m)]²   |   Z = [(BMI ÷ M)^L − 1] ÷ (L × S)',
    formulaNotes:
      'Raw BMI is converted to a growth percentile using CDC LMS parameters (L, M, S) interpolated by exact age in months and biological sex (boy or girl).',
    workedExample:
      'A 10-year-6-month-old boy (126 months) measuring 141 cm and 34 kg has a BMI of 34 ÷ (1.41)² = 17.10 kg/m², placing him near the 51st CDC percentile (Healthy Weight).',
    tableTitle: 'CDC Pediatric BMI-for-Age Percentile Categories',
    tableHeaders: ['Weight Category', 'Percentile Range', 'Pediatric Guidance'],
    tableRows: [
      ['Underweight', 'Less than 5th percentile', 'Evaluate growth curve and nutrition with a pediatrician'],
      ['Healthy Weight', '5th to less than 85th percentile', 'Maintain balanced meals and daily physical activity'],
      ['Overweight', '85th to less than 95th percentile', 'Track longitudinal growth velocity and lifestyle habits'],
      ['Obesity', '95th percentile or greater', 'Consult a pediatrician for comprehensive growth care'],
    ],
    faqs: [
      {
        question: "How is a child's BMI calculated differently from an adult's?",
        answer:
          'While the raw number uses weight (kg) ÷ height (m)², children and teens (ages 2–19) are actively growing at different rates by age and sex. Instead of fixed adult cutoffs, pediatric BMI is plotted on CDC/WHO growth charts to determine a BMI-for-age percentile.',
      },
      {
        question: 'What is a healthy BMI percentile for kids and teenagers?',
        answer:
          "A BMI between the 5th percentile and less than the 85th percentile for a child's exact age and sex is considered a healthy weight. Below the 5th percentile is underweight, 85th to <95th is overweight, and the 95th percentile or above is obesity.",
      },
      {
        question: 'Why does a child need exact age in months and biological sex for BMI?',
        answer:
          'Body fat levels change rapidly during childhood growth spurts and puberty, and boys and girls follow distinct growth trajectories. Entering exact age and sex ensures the BMI number is compared against the right peer reference group.',
      },
      {
        question: 'Can this child BMI calculator be used for babies under 2 years old?',
        answer:
          'No. Pediatricians do not use BMI for infants and toddlers under age 2; instead, they track weight-for-length percentiles and head circumference on WHO infant growth charts.',
      },
    ],
    relatedSlugs: ['/bmi-calculator-by-age', '/child-age-calculator', '/bmi-calculator', '/height-calculator'],
    variants: [
      { label: 'Adult BMI', slug: '/bmi-calculator' },
      { label: 'Child (2–19)', slug: '/child-bmi-calculator' },
      { label: 'By Age', slug: '/bmi-calculator-by-age' },
    ],
  },
  {
    id: 'bmi-calculator-by-age',
    slug: '/bmi-calculator-by-age',
    name: 'BMI Calculator by Age & Gender',
    shortName: 'BMI by Age',
    category: 'Health',
    tagline: 'Switch automatically between kids/teen percentiles (2–19) and adult age benchmarks (20–80+).',
    keywords: [
      'bmi calculator by age',
      'bmi calculator women age',
      'bmi calculator for women',
      'bmi calculator kids',
      'child bmi calculator',
      'bmi calculator online',
      'adult bmi calculator',
      'bmi calculator for female',
      'womens bmi calculator',
      'female bmi calculator',
      'male bmi calculator',
      'bmi calculator kg',
      'bmi calculator for men',
      'bmi calculator with age',
    ],
    h1: 'BMI Calculator by Age & Gender – Kids, Men & Women',
    metaTitle: 'BMI Calculator by Age & Gender – Kids, Adult Men & Women Chart | Ultimatrix',
    metaDescription:
      'Calculate your BMI by age and gender online in kg or lbs. Automatically switches between kids/teen percentiles (2–19) and adult male/female age benchmarks (20–80+).',
    directAnswer:
      'This BMI calculator by age and gender automatically adapts its evaluation model based on age: ages 2 to 19 use CDC pediatric BMI-for-age percentiles for boys and girls, while ages 20 and older apply WHO adult BMI classifications alongside age-decade body composition benchmarks.',
    formulaTitle: 'Age-Adaptive BMI & Body Fat Formulas',
    formulaExpression: 'BMI = kg ÷ m²   |   Adult BF% = (1.20 × BMI) + (0.23 × Age) − (10.8 × Sex) − 5.4',
    formulaNotes:
      'Sex = 1 for male and 0 for female. Under age 20, CDC LMS growth charts replace adult cutoffs automatically.',
    workedExample:
      'A 35-year-old man weighing 74 kg at 176 cm (1.76 m) has a BMI of 74 ÷ 3.0976 = 23.89 kg/m² (Normal Weight) and an estimated body fat of 20.5%.',
    tableTitle: 'Healthy BMI & Body Fat Benchmarks by Age Group',
    tableHeaders: ['Age Bracket', 'Healthy BMI Range', 'Healthy Body Fat (Men / Women)'],
    tableRows: [
      ['Ages 2–19 (Kids & Teens)', '5th – 84th CDC Percentile', '12%–20% (Boys) / 16%–25% (Girls)'],
      ['Ages 20–39', '18.5 – 24.9 kg/m²', '8%–19% (Men) / 21%–32% (Women)'],
      ['Ages 40–59', '18.5 – 24.9 kg/m²', '11%–21% (Men) / 23%–33% (Women)'],
      ['Ages 60–80+', '21.0 – 26.5 kg/m² (23.0–27.0 protective)', '13%–24% (Men) / 24%–35% (Women)'],
    ],
    faqs: [
      {
        question: 'Does ideal BMI increase as you get older?',
        answer:
          'Official WHO adult categories remain 18.5 to 24.9 for all adults over 20. However, clinical research suggests that for adults aged 65 and older, a slightly higher BMI between 23.0 and 27.0 is often protective against frailty and muscle loss.',
      },
      {
        question: 'How does this BMI calculator by age work for both kids and adults?',
        answer:
          'When you enter an age between 2 and 19, the calculator evaluates sex-specific pediatric BMI-for-age percentiles. When you enter age 20 or older, it applies adult BMI classifications alongside age-decade body composition context.',
      },
      {
        question: 'Why do two people of the same age, height, and weight have different health risks?',
        answer:
          'BMI does not measure fat distribution, bone density, or muscle mass. Two 40-year-olds with a BMI of 26 can have very different health profiles depending on waist size, visceral fat, fitness level, and ethnicity.',
      },
      {
        question: 'Is the BMI cutoff lower for Asian and Indian adults?',
        answer:
          'Yes. Because South and East Asian populations tend to carry higher visceral fat at lower body weights, many health authorities define 18.5 to 22.9 as normal BMI and 23.0 or higher as overweight for Asian adults.',
      },
    ],
    relatedSlugs: ['/bmi-calculator', '/child-bmi-calculator', '/bmi-calculator/men', '/bmi-calculator/women'],
    variants: [
      { label: 'General', slug: '/bmi-calculator' },
      { label: 'Child (2–19)', slug: '/child-bmi-calculator' },
      { label: 'By Age', slug: '/bmi-calculator-by-age' },
    ],
  },
  {
    id: 'pregnancy-due-date-calculator',
    slug: '/pregnancy-due-date-calculator',
    name: 'IVF & Pregnancy Due Date Calculator',
    shortName: 'IVF & Due Date',
    category: 'Health',
    tagline: 'Estimate due date from IVF embryo transfer (Day 3/5/6), conception, or LMP.',
    keywords: [
      'ivf pregnancy due date calculator',
      'pregnancy due date calculator',
      'pregnancy due date calculator from conception',
    ],
    h1: 'IVF & Pregnancy Due Date Calculator – Transfer, Conception & LMP',
    metaTitle: 'IVF & Pregnancy Due Date Calculator – From Transfer, Conception or LMP | Ultimatrix',
    metaDescription:
      'Calculate your exact due date from IVF embryo transfer (Day 3 or Day 5 blastocyst), conception date, or last menstrual period (LMP) with trimester milestones.',
    directAnswer:
      'Calculate your exact pregnancy due date from an IVF embryo transfer (Day 3, Day 5, or Day 6 blastocyst), a known conception date, or your Last Menstrual Period (LMP). IVF calculations add 266 minus embryo age days directly to your fresh or frozen embryo transfer date.',
    formulaTitle: 'IVF Transfer, Conception & Naegele’s Rule',
    formulaExpression:
      'IVF Day 5: Transfer + 261d   |   IVF Day 3: Transfer + 263d   |   Conception + 266d   |   LMP + 280d',
    formulaNotes:
      'Fresh and Frozen Embryo Transfers (FET) use identical transfer-date math. Informational estimate only; confirm dating with a first-trimester ultrasound.',
    workedExample:
      'For a Day 5 blastocyst IVF transfer on May 1, 2026: Adding 261 days (266 − 5) yields an estimated due date of January 17, 2027.',
    tableTitle: 'Pregnancy Trimester & Dating Milestones',
    tableHeaders: ['Stage / Method', 'Gestational Window', 'Key Milestone'],
    tableRows: [
      ['First Trimester', 'Weeks 1 – 13', 'Early dating ultrasound and prenatal screening'],
      ['Second Trimester', 'Weeks 14 – 27', '20-week anatomy scan and fetal movement'],
      ['Third Trimester', 'Weeks 28 – 40+', 'Rapid fetal growth and birth preparation'],
      ['Full Term Window', 'Weeks 39 – 40', 'Optimal delivery window for uncomplicated pregnancies'],
    ],
    faqs: [
      {
        question: 'How does an IVF pregnancy due date calculator work?',
        answer:
          'Because the exact embryo transfer date and embryo age are known, IVF due dates are more precise than natural cycle estimates. For a Day 5 blastocyst transfer, add 261 days (266 - 5) to the transfer date; for a Day 3 embryo transfer, add 263 days (266 - 3).',
      },
      {
        question: 'How is a due date calculated from conception date vs. LMP?',
        answer:
          "From a known conception or ovulation date, add 266 days (38 weeks). From the first day of your Last Menstrual Period (LMP), Naegele's rule adds 280 days (40 weeks) assuming a standard 28-day menstrual cycle.",
      },
      {
        question: 'Does an IVF frozen embryo transfer (FET) use the same formula?',
        answer:
          'Yes. Whether you had a fresh transfer or a Frozen Embryo Transfer (FET), the due date depends strictly on the transfer date and the developmental age of the embryo (Day 3, Day 5, or Day 6) on the day it was placed in the uterus.',
      },
      {
        question: 'How accurate is a calculated pregnancy due date?',
        answer:
          'Only about 4% to 5% of babies arrive on their exact estimated due date, though most births occur within two weeks before or after that date. A first-trimester dating ultrasound provides the most reliable clinical confirmation.',
      },
    ],
    relatedSlugs: ['/bmi-calculator/women', '/child-age-calculator', '/dog-pregnancy-due-date-calculator'],
  },
  {
    id: 'dog-pregnancy-due-date-calculator',
    slug: '/dog-pregnancy-due-date-calculator',
    name: 'Dog Pregnancy Due Date & Whelping Calculator',
    shortName: 'Dog Pregnancy',
    category: 'Health',
    tagline: 'Estimate canine whelping due date (+63 days), 58–68 day window, and vet milestones.',
    keywords: [
      'Dog Pregnancy Due Date & Whelping Calculator',
      'dog pregnancy due date calculator',
      'dog whelping calculator',
      'canine gestation calculator',
    ],
    h1: 'Dog Pregnancy Due Date & Whelping Calculator',
    metaTitle: 'Dog Pregnancy Due Date & Whelping Calculator – 63-Day Gestation | Ultimatrix',
    metaDescription:
      "Estimate your dog's whelping due date from mating, ovulation, or LH surge date. Includes the 58–68 day delivery window and week-by-week puppy development guide.",
    directAnswer:
      'Canine gestation averages 63 days (9 weeks) from ovulation or breeding, with normal deliveries occurring within a 58- to 68-day whelping window. Track your dog’s mating date to plan veterinary ultrasound confirmation (Day 25–30), puppy-count X-rays (Day 55+), and whelping box prep.',
    formulaTitle: 'Canine Gestation & Whelping Window Formula',
    formulaExpression: 'Due Date = Mating Date + 63 days   |   Probable Whelping Window = Day 58 to Day 68',
    formulaNotes:
      'Without progesterone hormone testing, mating-date estimates span Days 58–68 because canine sperm can survive several days prior to ovulation.',
    workedExample:
      'If a dog is bred on October 1, 2026: Day 63 expected due date is December 3, 2026, with a probable whelping window from November 28 to December 8, 2026.',
    tableTitle: 'Canine Gestation & Vet Checkup Reference',
    tableHeaders: ['Gestation Stage', 'Days Post-Mating', 'Veterinary & Care Focus'],
    tableRows: [
      ['Week 3', 'Days 15 – 21', 'Embryo implantation; maintain balanced adult diet'],
      ['Week 4', 'Days 22 – 28', 'Vet abdominal ultrasound confirms pregnancy & heartbeats'],
      ['Weeks 5–6', 'Days 29 – 42', 'Organ development completes; transition to puppy food'],
      ['Week 8', 'Days 50 – 56', 'Vet X-ray after Day 55 counts puppy skeletons safely'],
      ['Week 9', 'Days 57 – 63+', 'Monitor rectal temp drop below 99°F (37.2°C) for labor'],
    ],
    faqs: [
      {
        question: 'How long is a dog pregnant?',
        answer:
          'Canine gestation averages 63 days from ovulation. When counted from a breeding or mating date without hormone testing, normal delivery typically falls within a 58- to 68-day whelping window because sperm can survive several days before fertilization.',
      },
      {
        question: 'Which date gives the most accurate dog due date?',
        answer:
          'A progesterone-confirmed ovulation date (+63 days) is the most accurate. If hormone timing is unavailable, use the LH surge date (+65 days) or the first/most fertile mating date (+63 days) as a planning range.',
      },
      {
        question: 'When can a vet confirm dog pregnancy and count puppies?',
        answer:
          'Veterarians typically confirm pregnancy via abdominal ultrasound around Day 25 to 30 after breeding, and use an X-ray after Day 55—once puppy skeletons mineralize—for an accurate litter count before whelping.',
      },
      {
        question: 'What are the signs that a dog is about to go into labor?',
        answer:
          "Within 12 to 24 hours before stage-one labor begins, a pregnant dog's rectal temperature usually drops below 99°F (37.2°C), accompanied by nesting behavior, restlessness, panting, and refusal of food.",
      },
    ],
    relatedSlugs: ['/pregnancy-due-date-calculator', '/date-calculator', '/age-calculator'],
  },
  {
    id: 'weight-loss-percentage-calculator',
    slug: '/weight-loss-percentage-calculator',
    name: 'Weight Loss Percentage Calculator',
    shortName: 'Weight Loss %',
    category: 'Math & Grades',
    tagline: 'Track exact % body weight lost in kg or lbs and progress toward your goal weight.',
    keywords: [
      'weight loss percentage calculator',
      'percentage weight loss calculator',
      'body weight loss percentage formula',
    ],
    h1: 'Weight Loss Percentage Calculator (kg & lbs)',
    metaTitle: 'Weight Loss Percentage Calculator – Track % Body Weight Lost (kg/lbs) | Ultimatrix',
    metaDescription:
      'Calculate your exact weight loss percentage in kg or lbs. Track total weight lost, progress toward your goal weight, and clinically meaningful milestones.',
    directAnswer:
      'Weight loss percentage measures how much weight you have lost relative to your starting weight in kg or lbs, allowing fair comparisons across different body sizes. Losing 5% to 10% of initial body weight is widely linked to improved blood pressure and metabolic health.',
    formulaTitle: 'Body Weight Loss Percentage Formula',
    formulaExpression:
      'Weight Loss % = [(Starting Weight − Current Weight) ÷ Starting Weight] × 100',
    formulaNotes:
      'Always divide weight lost by your original starting weight rather than your current weight. Add an optional Goal Weight to track goal completion percentage.',
    workedExample:
      'Starting at 200 lbs and reaching 180 lbs (goal 165 lbs): Total Lost = 20 lbs. Weight Loss % = (20 ÷ 200) × 100 = 10.00%. Goal Completion = (20 ÷ 35) × 100 = 57.1%.',
    tableTitle: '5% & 10% Clinical Weight Loss Benchmarks',
    tableHeaders: ['Starting Weight', '5% Weight Loss', '10% Weight Loss'],
    tableRows: [
      ['150 lbs (68.0 kg)', '7.5 lbs (3.4 kg)', '15.0 lbs (6.8 kg)'],
      ['180 lbs (81.6 kg)', '9.0 lbs (4.1 kg)', '18.0 lbs (8.2 kg)'],
      ['200 lbs (90.7 kg)', '10.0 lbs (4.5 kg)', '20.0 lbs (9.1 kg)'],
      ['250 lbs (113.4 kg)', '12.5 lbs (5.7 kg)', '25.0 lbs (11.3 kg)'],
    ],
    faqs: [
      {
        question: 'What is the formula for weight loss percentage?',
        answer:
          'Subtract your current weight from your starting weight, divide by your starting weight, and multiply by 100: Weight Loss % = [(Starting Weight - Current Weight) ÷ Starting Weight] × 100.',
      },
      {
        question: 'Why is percentage weight loss better than tracking pounds or kilos alone?',
        answer:
          'Losing 5 kg means something very different for a 60 kg person (8.3% loss) than for a 100 kg person (5.0% loss). Tracking percentage normalizes progress regardless of starting size.',
      },
      {
        question: 'How much weight loss percentage improves health markers?',
        answer:
          'Clinical health guidelines note that losing even 5% to 10% of initial body weight can meaningfully improve blood pressure, blood sugar control, and cholesterol levels.',
      },
      {
        question: 'What is a healthy weekly rate of weight loss?',
        answer:
          'Sustainable weight management typically targets 0.5% to 1.0% of total body weight per week (roughly 0.5 to 1 kg per week for most adults), helping preserve lean muscle mass.',
      },
    ],
    relatedSlugs: ['/percentage-calculator', '/bmi-calculator', '/bmi-calculator-by-age'],
  },
  {
    id: 'height-calculator',
    slug: '/height-calculator',
    name: 'Height Calculator & Converter',
    shortName: 'Height',
    category: 'Health',
    tagline: 'Convert feet/inches to cm and meters, or predict child adult height.',
    keywords: [
      'height calculator',
      'height converter feet to cm',
      'cm to feet and inches calculator',
      'child height predictor',
    ],
    h1: 'Height Calculator & Converter – Feet, Inches & cm',
    metaTitle: 'Height Calculator & Converter – Feet/Inches to cm & Growth Estimate | Ultimatrix',
    metaDescription:
      "Convert height between feet, inches, centimeters, and meters instantly, or estimate a child's adult height using the mid-parental height formula.",
    directAnswer:
      'Convert human height instantly between feet and inches, centimeters, and meters using exact international standards (1 foot = 30.48 cm, 1 inch = 2.54 cm). Switch to the Child Height Predictor tab to estimate adult height from both parents’ heights using the mid-parental formula.',
    formulaTitle: 'Height Conversion & Mid-Parental Predictor Formulas',
    formulaExpression:
      'cm = (ft × 30.48) + (in × 2.54)   |   Mid-Parental (cm) = (Father + Mother ± 13) ÷ 2',
    formulaNotes:
      'For the mid-parental child height predictor, add 13 cm for boys and subtract 13 cm for girls before dividing by 2 (typical genetic accuracy margin ±8.5 cm).',
    workedExample:
      'Converting 5 feet 8 inches to centimeters: (5 × 30.48) + (8 × 2.54) = 152.40 + 20.32 = 172.72 cm (1.727 m).',
    tableTitle: 'Common Feet & Inches to Centimeters Chart',
    tableHeaders: ['Feet & Inches', 'Total Inches', 'Centimeters (cm)', 'Meters (m)'],
    tableRows: [
      ["5' 0\"", '60 in', '152.40 cm', '1.524 m'],
      ["5' 4\"", '64 in', '162.56 cm', '1.626 m'],
      ["5' 6\"", '66 in', '167.64 cm', '1.676 m'],
      ["5' 8\"", '68 in', '172.72 cm', '1.727 m'],
      ["5' 10\"", '70 in', '177.80 cm', '1.778 m'],
      ["6' 0\"", '72 in', '182.88 cm', '1.829 m'],
    ],
    faqs: [
      {
        question: 'How do you convert height in feet and inches to centimeters?',
        answer:
          'Multiply the feet by 30.48, multiply the remaining inches by 2.54, and add the two numbers together (1 foot = 30.48 cm, 1 inch = 2.54 cm). For example, 5\'8" is (5 × 30.48) + (8 × 2.54) = 172.72 cm.',
      },
      {
        question: 'How do you convert centimeters to feet and inches?',
        answer:
          'Divide centimeters by 2.54 to get total inches, then divide by 12—the whole number is feet and the remainder is inches (e.g., 165 cm ÷ 2.54 = 64.96 inches ≈ 5 feet 5 inches).',
      },
      {
        question: 'How does the mid-parental child height predictor formula work?',
        answer:
          "Add both parents' heights in centimeters: for boys, add 13 cm and divide by 2; for girls, subtract 13 cm and divide by 2 (± 8.5 cm genetic margin).",
      },
      {
        question: 'Why is accurate height important for BMI and calorie calculators?',
        answer:
          'Because height is squared in the BMI formula (kg ÷ m²), even a 2 cm (nearly 1 inch) measurement error can shift your calculated BMI by 0.5 to 0.8 points.',
      },
    ],
    relatedSlugs: ['/bmi-calculator', '/child-bmi-calculator', '/bmi-calculator-by-age'],
  },
  {
    id: 'emi-calculator',
    slug: '/emi-calculator',
    name: 'Loan EMI Calculator',
    shortName: 'EMI',
    category: 'Finance',
    tagline: 'Calculate monthly EMI, total interest, and principal breakdown for home, car, or personal loans.',
    keywords: [
      'emi calculator',
      'home loan emi calculator',
      'loan emi calculator',
      'car emi calculator',
      'emi calculator usa',
    ],
    h1: 'Loan EMI Calculator – Home, Car & Personal Loan Monthly Payments',
    metaTitle: 'EMI Calculator – Home Loan, Car Loan & Personal Loan Monthly EMI | Ultimatrix',
    metaDescription:
      'Free online EMI calculator for home loans, car loans, and personal loans in INR (₹) or USD ($). Compute monthly EMI, total interest, and principal breakdown instantly.',
    directAnswer:
      'Calculate Equated Monthly Installments (EMI), total interest payable, and total loan repayment for home loans, car loans, and personal loans across INR, USD, or any currency. Adjust loan tenure between years and months to see how reducing-balance compounding changes monthly cash flow.',
    formulaTitle: 'Reducing-Balance Loan EMI Formula',
    formulaExpression: 'EMI = [P × R × (1 + R)^N] ÷ [(1 + R)^N − 1]',
    formulaNotes:
      'P is the principal loan amount, R is the monthly interest rate (Annual Rate ÷ 12 ÷ 100), and N is the total tenure in months. At 0% interest, EMI equals P ÷ N.',
    workedExample:
      'For a loan of 1,000,000 at 8.5% p.a. over 10 years (N = 120 months, R = 0.0070833): Monthly EMI = 12,398.57, Total Interest = 487,828, and Total Payment = 1,487,828.',
    tableTitle: 'Sample Loan EMI per 100,000 Borrowed (8.5% p.a.)',
    tableHeaders: ['Loan Tenure', 'Monthly EMI', 'Total Interest Paid'],
    tableRows: [
      ['3 Years (36 mo)', '3,156.75', '13,643'],
      ['5 Years (60 mo)', '2,051.65', '23,099'],
      ['10 Years (120 mo)', '1,239.86', '48,783'],
      ['15 Years (180 mo)', '984.74', '77,253'],
      ['20 Years (240 mo)', '867.82', '108,278'],
    ],
    faqs: [
      {
        question: 'What is the formula to calculate loan EMI?',
        answer:
          'Equated Monthly Installment (EMI) uses the standard reducing-balance formula: EMI = [P × R × (1+R)^N] ÷ [(1+R)^N - 1], where P is the principal loan amount, R is the monthly interest rate (annual rate ÷ 12 ÷ 100), and N is the loan tenure in months.',
      },
      {
        question: 'How does loan tenure affect monthly EMI and total interest?',
        answer:
          'Choosing a longer tenure lowers your monthly EMI payment, making monthly cash flow easier, but significantly increases the total interest you pay over the life of the loan. A shorter tenure raises the monthly EMI while saving substantial interest.',
      },
      {
        question: 'What is the difference between a reducing-balance EMI and a flat-rate loan?',
        answer:
          'In a reducing-balance loan (used for almost all home and auto loans), interest is charged only on the remaining unpaid principal each month. In a flat-rate loan, interest is calculated on the original full principal for the entire tenure, making the effective cost much higher.',
      },
      {
        question: 'How can I reduce my EMI burden after taking a loan?',
        answer:
          'You can lower your total interest and remaining tenure by making periodic lump-sum part-prepayments directly toward your principal, refinancing to a lower interest rate, or increasing your EMI annually as your income grows.',
      },
    ],
    relatedSlugs: ['/hdfc-emi-calculator', '/sip-calculator', '/gst-calculator'],
    variants: [
      { label: 'General EMI', slug: '/emi-calculator' },
      { label: 'HDFC Loan EMI', slug: '/hdfc-emi-calculator' },
      { label: 'SIP', slug: '/sip-calculator' },
      { label: 'GST', slug: '/gst-calculator' },
    ],
  },
  {
    id: 'hdfc-emi-calculator',
    slug: '/hdfc-emi-calculator',
    name: 'HDFC Loan EMI Calculator',
    shortName: 'HDFC EMI',
    category: 'Finance',
    tagline: 'Calculate HDFC home, car, and mortgage loan EMIs in India with amortization table.',
    keywords: [
      'hdfc emi calculator',
      'hdfc home loan emi calculator',
      'emi calculator for home loan',
      'home loan emi calculator formula india',
      'mortgage emi calculator',
      'mortgage loan emi calculator',
      'housing loan emi calculator',
      'auto emi calculator',
      'car emi calculator india',
    ],
    h1: 'HDFC Loan EMI Calculator – Home, Car & Mortgage EMI India',
    metaTitle: 'HDFC EMI Calculator – Home Loan, Car Loan & Mortgage EMI India | Ultimatrix',
    metaDescription:
      'Calculate HDFC home loan, car loan, and personal loan EMI online in India. Check monthly installments, total interest payable, and year-by-year amortization schedule.',
    directAnswer:
      'Estimate HDFC home loan, car loan, mortgage, and personal loan EMIs in Indian Rupees (₹) using the standard monthly reducing-balance formula. Review your principal-versus-interest breakdown and expand the year-by-year amortization schedule to plan prepayments. Independent tool not affiliated with HDFC Bank.',
    formulaTitle: 'Indian Home & Auto Loan EMI Formula',
    formulaExpression: 'EMI = [P × R × (1 + R)^N] ÷ [(1 + R)^N − 1]',
    formulaNotes:
      'P = Loan Principal (₹), R = Annual Interest Rate ÷ 12 ÷ 100, and N = Tenure in months. Independent estimation calculator not affiliated with HDFC Bank Ltd.',
    workedExample:
      'A ₹25,00,000 housing loan at 8.60% p.a. over 20 years (240 months) produces a monthly EMI of ₹21,854, with ₹27,44,960 total interest and ₹52,44,960 total repayment.',
    tableTitle: 'Housing Loan EMI Reference (per ₹10,00,000 at 8.60% p.a.)',
    tableHeaders: ['Tenure', 'Monthly EMI (₹)', 'Total Interest (₹)', 'Total Payment (₹)'],
    tableRows: [
      ['5 Years', '₹20,565', '₹2,33,914', '₹12,33,914'],
      ['10 Years', '₹12,451', '₹4,94,148', '₹14,94,148'],
      ['15 Years', '₹9,906', '₹7,83,039', '₹17,83,039'],
      ['20 Years', '₹8,742', '₹10,97,984', '₹20,97,984'],
    ],
    faqs: [
      {
        question: 'How is HDFC home loan EMI calculated in India?',
        answer:
          'HDFC home and auto loans use the monthly reducing-balance formula EMI = P × R × (1+R)^N ÷ [(1+R)^N - 1]. For example, a ₹25 lakh housing loan at 8.60% p.a. for 20 years (240 months) yields an estimated monthly EMI of ₹21,854.',
      },
      {
        question: 'What is the maximum loan tenure for an HDFC housing loan?',
        answer:
          "Home loan tenures in India typically extend up to 30 years, subject to the borrower's retirement age and repayment capacity. Auto and personal loans generally carry shorter tenures ranging from 1 to 7 years.",
      },
      {
        question: 'Are there prepayment charges on floating-rate home loans in India?',
        answer:
          'Under RBI guidelines, banks and housing finance companies cannot levy prepayment or foreclosure penalties on individual borrowers repaying floating-rate home loans from their own funds. Fixed-rate loans and business loans may carry nominal charges.',
      },
      {
        question: 'Does checking my EMI on an online calculator affect my CIBIL score?',
        answer:
          'No. Using an online EMI calculator is completely private and does not trigger a credit bureau inquiry. Your CIBIL score is only checked when you formally submit a loan application to a lender.',
      },
    ],
    relatedSlugs: ['/emi-calculator', '/sip-calculator', '/gst-calculator'],
    variants: [
      { label: 'General EMI', slug: '/emi-calculator' },
      { label: 'HDFC Loan EMI', slug: '/hdfc-emi-calculator' },
      { label: 'SIP', slug: '/sip-calculator' },
    ],
  },
  {
    id: 'sip-calculator',
    slug: '/sip-calculator',
    name: 'Mutual Fund SIP Calculator India',
    shortName: 'SIP',
    category: 'Finance',
    tagline: 'Estimate regular and Step-Up mutual fund SIP wealth, invested total, and returns.',
    keywords: [
      'sip calculator',
      'mutual fund sip calculator',
      'sip calculator india',
      'step up sip calculator',
      'groww sip calculator',
      'sbi sip calculator',
      'hdfc sip calculator',
    ],
    h1: 'Mutual Fund SIP Calculator India – Regular & Step-Up Returns',
    metaTitle: 'SIP Calculator India – Mutual Fund & Step-Up SIP Return Estimator | Ultimatrix',
    metaDescription:
      'Free online mutual fund SIP calculator for India. Estimate future wealth, total invested amount, and compound returns for regular or step-up SIP investments.',
    directAnswer:
      'Plan your long-term mutual fund Systematic Investment Plan (SIP) wealth in India with support for both fixed monthly SIPs and annual Step-Up SIP increments. View your total invested capital, compounded wealth gains, and maturity value instantly.',
    formulaTitle: 'Annuity-Due Mutual Fund SIP Formula',
    formulaExpression: 'FV = P × [((1 + i)^n − 1) ÷ i] × (1 + i)',
    formulaNotes:
      'P is the monthly SIP investment, i is the expected monthly rate of return (Annual CAGR ÷ 12 ÷ 100), and n is the total number of monthly installments. Adding an annual Step-Up % increases your monthly SIP each year.',
    workedExample:
      'Investing ₹10,000 per month at 12% expected annual return for 15 years (n = 180, i = 0.01): Total Invested = ₹1,800,000; Estimated Gains = ₹3,245,760; Future Value = ₹5,045,760.',
    tableTitle: 'Mutual Fund SIP Compounding Table (10,000/month at 12% p.a.)',
    tableHeaders: ['Duration', 'Total Invested', 'Estimated Returns', 'Maturity Value'],
    tableRows: [
      ['5 Years', '600,000', '224,864', '824,864'],
      ['10 Years', '1,200,000', '1,123,391', '2,323,391'],
      ['15 Years', '1,800,000', '3,245,760', '5,045,760'],
      ['20 Years', '2,400,000', '7,591,479', '9,991,479'],
    ],
    faqs: [
      {
        question: 'How does a mutual fund SIP calculator estimate returns?',
        answer:
          'It uses the future value of an annuity-due compound formula: FV = P × [((1 + i)^n - 1) ÷ i] × (1 + i), where P is your monthly SIP amount, i is the expected monthly rate of return (annual return ÷ 12), and n is the total number of monthly installments.',
      },
      {
        question: 'What is a Step-Up SIP and how does it grow wealth faster?',
        answer:
          'A Step-Up (or Top-Up) SIP automatically increases your monthly investment by a fixed percentage (such as 10%) every year in line with your salary increments, dramatically boosting long-term compounding compared to a flat SIP.',
      },
      {
        question: 'Are mutual fund SIP returns guaranteed?',
        answer:
          'No. Because equity and hybrid mutual funds are market-linked, actual returns fluctuate with market cycles. A SIP calculator projects wealth based on an assumed annualized return rate (CAGR) for financial planning.',
      },
      {
        question: 'What happens if I miss a monthly SIP installment?',
        answer:
          'Mutual fund houses do not penalize you for missing a SIP installment due to insufficient balance (though your bank may charge a standard NACH bounce fee). Your existing invested units continue compounding normally, and your SIP resumes the next month.',
      },
    ],
    relatedSlugs: ['/emi-calculator', '/hdfc-emi-calculator', '/gst-calculator'],
    variants: [
      { label: 'EMI', slug: '/emi-calculator' },
      { label: 'HDFC EMI', slug: '/hdfc-emi-calculator' },
      { label: 'SIP', slug: '/sip-calculator' },
      { label: 'GST', slug: '/gst-calculator' },
    ],
  },
  {
    id: 'gst-calculator',
    slug: '/gst-calculator',
    name: 'GST Calculator India',
    shortName: 'GST',
    category: 'Finance',
    tagline: 'Add GST (exclusive) or remove GST (inclusive) across 5%, 12%, 18%, and 28% slabs.',
    keywords: [
      'gst calculator',
      'gst calculator india',
      'gst calculator online',
      'free gst calculator',
      'indian gst calculator',
      'gst calculator formula',
      'gst calculator rapid',
    ],
    h1: 'GST Calculator India Online – Add or Remove GST (5%, 12%, 18%, 28%)',
    metaTitle: 'GST Calculator India Online – Add or Remove GST (CGST & SGST) | Ultimatrix',
    metaDescription:
      'Fast, free Indian GST calculator online. Instantly add GST (exclusive) or remove GST (inclusive) across 5%, 12%, 18%, and 28% slabs with CGST/SGST breakdown.',
    directAnswer:
      'This fast, free Indian GST calculator lets you add Goods and Services Tax to a net price (GST exclusive) or extract the original pre-tax base price from a gross bill (reverse GST inclusive). Select 5%, 12%, 18%, 28%, or custom rates with an instant 50/50 CGST and SGST breakdown.',
    formulaTitle: 'Indian GST Exclusive & Reverse GST Formulas',
    formulaExpression:
      'Add GST: Total = Net × (1 + GST% ÷ 100)   |   Reverse GST: Net = Gross ÷ (1 + GST% ÷ 100)',
    formulaNotes:
      'Intra-state GST splits evenly into 50% CGST and 50% SGST, while inter-state supplies charge the full rate as IGST.',
    workedExample:
      'On a gross bill of 11,800 inclusive of 18% GST: Pre-Tax Net Price = 11,800 ÷ 1.18 = 10,000. Total GST = 1,800 (900 CGST + 900 SGST).',
    tableTitle: 'Standard Indian GST Tax Slabs (CGST / SGST Split)',
    tableHeaders: ['GST Slab', 'CGST (50%)', 'SGST (50%)', 'Typical Goods & Services'],
    tableRows: [
      ['5%', '2.5%', '2.5%', 'Essential packaged foods, economy transport'],
      ['12%', '6.0%', '6.0%', 'Processed foods, standard apparel & business travel'],
      ['18%', '9.0%', '9.0%', 'IT services, SaaS, restaurants, electronics'],
      ['28%', '14.0%', '14.0%', 'Automobiles, luxury goods, appliances'],
    ],
    faqs: [
      {
        question: 'What is the formula to add GST vs. remove (reverse) GST?',
        answer:
          'To add GST to a base price: GST Amount = (Original Price × GST%) ÷ 100, and Net Price = Original Price + GST Amount. To remove GST from a tax-inclusive price: Original Price = Inclusive Price ÷ (1 + GST%/100).',
      },
      {
        question: 'How are CGST, SGST, and IGST split on an invoice?',
        answer:
          'For intra-state sales (within the same Indian state), the GST rate is split equally between Central GST (CGST) and State GST (SGST)—for example, an 18% GST rate splits into 9% CGST + 9% SGST. For inter-state sales, the full 18% is charged as Integrated GST (IGST).',
      },
      {
        question: 'What are the standard GST tax slabs in India?',
        answer:
          "India's primary Goods and Services Tax rate slabs are 5% (essential goods and transport), 12% (processed foods and standard electronics/apparel), 18% (most services, IT, software, and industrial goods), and 28% (luxury items and automobiles).",
      },
      {
        question: 'Why is reverse GST not calculated by simply subtracting 18% from the total?',
        answer:
          'Because the 18% tax was originally added onto the smaller base price, not the final total. Subtracting 18% directly from an inclusive price overstates the tax; dividing by 1.18 extracts the exact pre-tax base amount.',
      },
    ],
    relatedSlugs: ['/discount-calculator-with-tax', '/emi-calculator', '/sip-calculator'],
    variants: [
      { label: 'EMI', slug: '/emi-calculator' },
      { label: 'HDFC EMI', slug: '/hdfc-emi-calculator' },
      { label: 'SIP', slug: '/sip-calculator' },
      { label: 'GST', slug: '/gst-calculator' },
    ],
  },
  {
    id: 'age-calculator',
    slug: '/age-calculator',
    name: 'Chronological Age Calculator',
    shortName: 'Age',
    category: 'Date & Time',
    tagline: 'Exact chronological age in years, months, weeks, days, and next birthday countdown.',
    keywords: [
      'chronological age calculator',
      'age calculator',
      'age calculator on birthday',
      'age calculator of child',
      'dog age calculator',
    ],
    h1: 'Chronological Age Calculator – Exact Years, Months & Days',
    metaTitle: 'Chronological Age Calculator – Exact Age in Years, Months & Days | Ultimatrix',
    metaDescription:
      'Free chronological age calculator. Find your exact age in years, months, weeks, and days from your date of birth to any target date, plus next birthday countdown.',
    directAnswer:
      'A chronological age calculator computes the exact elapsed time from your date of birth to today or any past/future cutoff date in years, months, and days. It automatically accounts for leap years and varying 28–31 day month lengths for school admissions, exam eligibility, and birthday countdowns.',
    formulaTitle: 'Chronological Calendar Borrowing Method',
    formulaExpression: 'Age = (Target Year − Birth Year, Target Month − Birth Month, Target Day − Birth Day)',
    formulaNotes:
      'If the target day is smaller than the birth day, exact calendar days are borrowed from the preceding month (28, 29, 30, or 31 days) before subtracting.',
    workedExample:
      'Born March 15, 1998 and checked on November 20, 2026: Years = 28, Months = 8, Days = 5 — an exact chronological age of 28 years, 8 months, and 5 days.',
    tableTitle: 'Milestone Chronological Age Conversions',
    tableHeaders: ['Age in Years', 'Total Months', 'Approximate Total Days'],
    tableRows: [
      ['10 Years', '120 months', '3,652 – 3,653 days'],
      ['18 Years', '216 months', '6,574 – 6,575 days'],
      ['25 Years', '300 months', '9,131 – 9,132 days'],
      ['30 Years', '360 months', '10,957 – 10,958 days'],
      ['50 Years', '600 months', '18,262 – 18,263 days'],
    ],
    faqs: [
      {
        question: 'What is chronological age and how is it calculated?',
        answer:
          'Chronological age is the exact amount of time elapsed from your date of birth to a specific target date, expressed in years, months, and days. It is widely used for school admissions, developmental assessments, and government exam cutoffs.',
      },
      {
        question: 'How does the age calculator handle leap years and 30- vs. 31-day months?',
        answer:
          'The calculator counts full calendar years and completed calendar months first, then calculates the exact remaining days based on the actual calendar length (28, 29, 30, or 31 days) of the preceding month.',
      },
      {
        question: 'How is chronological age calculated if someone was born on February 29?',
        answer:
          'In non-leap years, individuals born on February 29 celebrate their legal age milestone on either February 28 or March 1 depending on jurisdiction, while total days lived are counted accurately across every 366-day leap year.',
      },
      {
        question: 'Can I calculate my age as of a future or past exam cutoff date?',
        answer:
          'Yes. Simply change the "Target / As-Of Date" field from today\'s date to your exam eligibility cutoff date (such as UPSC, SSC, or school admission dates) to see your exact age on that day.',
      },
    ],
    relatedSlugs: ['/child-age-calculator', '/date-calculator', '/time-duration-calculator'],
    variants: [
      { label: 'Age', slug: '/age-calculator' },
      { label: 'Child & Baby Age', slug: '/child-age-calculator' },
      { label: 'Date Diff', slug: '/date-calculator' },
      { label: 'Time Duration', slug: '/time-duration-calculator' },
    ],
  },
  {
    id: 'child-age-calculator',
    slug: '/child-age-calculator',
    name: 'Child & Baby Age Calculator',
    shortName: 'Child Age',
    category: 'Date & Time',
    tagline: 'Calculate exact baby and child age in months, weeks, and days for checkups.',
    keywords: [
      'age calculator of child',
      'baby age calculator in months',
      'child age calculator in weeks and days',
      'infant age calculator',
    ],
    h1: 'Child & Baby Age Calculator – Exact Months, Weeks & Days',
    metaTitle: 'Child & Baby Age Calculator – Exact Months, Weeks & Days | Ultimatrix',
    metaDescription:
      "Calculate your baby or child's exact age in months, weeks, and days for pediatric checkups, vaccination schedules, and developmental milestones.",
    directAnswer:
      'This child and baby age calculator displays exact pediatric age in total months plus days (such as 18 months, 12 days), total weeks plus days, and calendar years/months/days. Designed for tracking infant checkups, immunization windows, and preschool enrollment dates.',
    formulaTitle: 'Pediatric Months & Weeks Conversion',
    formulaExpression: 'Total Months = (Years × 12) + Months   |   Total Weeks = ⌊Total Days ÷ 7⌋',
    formulaNotes:
      'Accounts for 28-, 29-, 30-, and 31-day calendar months when determining completed months and remaining days from birth.',
    workedExample:
      'A baby born 18 months and 12 days prior to today registers 18 months, 12 days (1 year, 6 months, 12 days) alongside exact total weeks and total days.',
    tableTitle: 'Pediatric Age & Milestone Schedule',
    tableHeaders: ['Age in Months', 'Approximate Weeks', 'Pediatric Checkup Focus'],
    tableRows: [
      ['2 Months', '8 – 9 weeks', 'Early infant immunization visit and weight gain review'],
      ['6 Months', '26 weeks', 'Solid food readiness and motor milestones'],
      ['12 Months (1 Year)', '52 weeks', 'First-year well-child exam and vaccinations'],
      ['18 Months', '78 weeks', 'Speech, walking, and developmental screening'],
      ['24 Months (2 Years)', '104 weeks', 'Child BMI-for-age growth percentile tracking begins'],
    ],
    faqs: [
      {
        question: "Why do pediatricians track a baby's age in months and weeks instead of years?",
        answer:
          'During the first 24 to 36 months, growth spurts, motor skills, and immunization windows change every few weeks, making total months and weeks far more useful than rounded years.',
      },
      {
        question: "How do you calculate a baby's age in weeks?",
        answer:
          "Count the total number of calendar days between the baby's birth date and today, then divide by 7 (Total Days ÷ 7) to get completed weeks plus remaining days.",
      },
      {
        question: 'What is "adjusted age" vs. chronological age for premature babies?',
        answer:
          'Chronological age is counted from the actual birth date, whereas adjusted (corrected) age subtracts the number of weeks the baby was born early (before 40 weeks gestation) to evaluate developmental milestones fairly.',
      },
      {
        question: 'How does this calculator count months when a baby is born on the 31st?',
        answer:
          'When the target month has fewer than 31 days (such as February or April), a completed month is reached on the last calendar day of that month.',
      },
    ],
    relatedSlugs: ['/age-calculator', '/child-bmi-calculator', '/date-calculator'],
    variants: [
      { label: 'General Age', slug: '/age-calculator' },
      { label: 'Child & Baby Age', slug: '/child-age-calculator' },
      { label: 'Date Diff', slug: '/date-calculator' },
    ],
  },
  {
    id: 'date-calculator',
    slug: '/date-calculator',
    name: 'Date Calculator',
    shortName: 'Date',
    category: 'Date & Time',
    tagline: 'Count exact days between two dates or add and subtract days, weeks, and months.',
    keywords: [
      'date calculator',
      'days between two dates calculator',
      'add days to date calculator',
      'date duration calculator',
    ],
    h1: 'Date Calculator – Days Between Dates & Add/Subtract Days',
    metaTitle: 'Date Calculator – Days Between Dates & Add/Subtract Days | Ultimatrix',
    metaDescription:
      'Free online date calculator. Count exact days, weeks, and months between two dates or add and subtract days from any calendar date instantly.',
    directAnswer:
      'Count the exact number of calendar days, weeks, and weekday business days between two dates, or project any future or past calendar date by adding or subtracting days, weeks, months, or years. Normalized to UTC midnight to eliminate Daylight Saving anomalies.',
    formulaTitle: 'UTC Calendar Span & Offset Arithmetic',
    formulaExpression: 'Total Days = (End UTC Midnight − Start UTC Midnight) ÷ 86,400,000 ms',
    formulaNotes:
      'Toggle "Include end date (+1 day)" for inclusive leave or booking counts. Adding months clamps end-of-month overflow cleanly.',
    workedExample:
      'From March 1, 2026 to April 15, 2026: 45 elapsed calendar days (6 weeks and 3 days), including 32 Monday–Friday business days.',
    tableTitle: 'Common Calendar Duration Reference',
    tableHeaders: ['Duration', 'Calendar Days', 'Typical Weekdays (Mon–Fri)'],
    tableRows: [
      ['1 Week', '7 days', '5 weekdays'],
      ['30 Days', '30 days', '21 – 22 weekdays'],
      ['90 Days (Quarter)', '90 days', '64 – 65 weekdays'],
      ['180 Days (Half Year)', '180 days', '128 – 129 weekdays'],
      ['1 Standard Year', '365 days', '260 – 261 weekdays'],
    ],
    faqs: [
      {
        question: 'How does the date calculator count days between two dates?',
        answer:
          'It computes the exact calendar difference between your start date and end date, automatically accounting for 30-day months, 31-day months, and February 29 in leap years.',
      },
      {
        question: 'Does "days between dates" include the end date?',
        answer:
          'By standard convention, date subtraction counts elapsed nights/days between dates (e.g., Jan 1 to Jan 2 is 1 day), with an optional toggle to include the end date (+1 day) for event or leave counting.',
      },
      {
        question: 'How do I find the exact date 90 days or 6 months from today?',
        answer:
          'Switch to the "Add / Subtract Time" tab, select your starting date, enter 90 days (or 6 months), and the tool immediately displays the resulting weekday and calendar date.',
      },
      {
        question: 'How are leap years factored into multi-year date ranges?',
        answer:
          'Any year divisible by 4 (and divisible by 400 for century years like 2000) adds an extra day on February 29, which is automatically included in your total day count.',
      },
    ],
    relatedSlugs: ['/age-calculator', '/time-duration-calculator', '/child-age-calculator'],
    variants: [
      { label: 'Age', slug: '/age-calculator' },
      { label: 'Date Diff', slug: '/date-calculator' },
      { label: 'Time Duration', slug: '/time-duration-calculator' },
    ],
  },
  {
    id: 'time-duration-calculator',
    slug: '/time-duration-calculator',
    name: 'Time Duration Calculator',
    shortName: 'Time',
    category: 'Date & Time',
    tagline: 'Calculate elapsed hours, minutes, seconds, and decimal hours or add/subtract time.',
    keywords: [
      'time duration calculator',
      'hours calculator',
      'elapsed time calculator',
      'time card calculator',
    ],
    h1: 'Time Duration Calculator – Elapsed Hours, Minutes & Seconds',
    metaTitle: 'Time Duration Calculator – Elapsed Hours, Minutes & Seconds | Ultimatrix',
    metaDescription:
      'Calculate exact elapsed time in hours, minutes, and seconds between two timestamps, or add and subtract time blocks for work shifts and study logs.',
    directAnswer:
      'Measure exact elapsed hours, minutes, seconds, and decimal hours between any two timestamps—including overnight work shifts across midnight—or add and subtract time durations effortlessly for timesheets, payroll, and study logs.',
    formulaTitle: 'Elapsed Time & Decimal Hours Conversion',
    formulaExpression:
      'Elapsed Sec = (End − Start + 86,400) mod 86,400   |   Decimal Hours = Hours + (Minutes ÷ 60) + (Seconds ÷ 3600)',
    formulaNotes:
      'Enable overnight shift wrap when the end time occurs on the next morning after midnight.',
    workedExample:
      'From 08:45:00 to 17:15:30: Elapsed duration is 8 hours, 30 minutes, 30 seconds, equal to 8.5083 decimal hours or 510.50 total minutes.',
    tableTitle: 'Minutes to Decimal Hours Payroll Reference',
    tableHeaders: ['Minutes', 'Decimal Hours', 'Fraction of Hour'],
    tableRows: [
      ['15 min', '0.25 hrs', '1/4 hour'],
      ['20 min', '0.33 hrs', '1/3 hour'],
      ['30 min', '0.50 hrs', '1/2 hour'],
      ['45 min', '0.75 hrs', '3/4 hour'],
      ['50 min', '0.83 hrs', '5/6 hour'],
    ],
    faqs: [
      {
        question: 'How do I calculate elapsed time across midnight (overnight shifts)?',
        answer:
          'Enter your start time (e.g., 10:30 PM) and end time (e.g., 6:15 AM); if the end time is earlier than the start time, the calculator automatically treats it as the next morning (7 hours 45 minutes).',
      },
      {
        question: 'How do you convert hours and minutes into decimal hours for payroll?',
        answer:
          'Divide the minutes by 60 and add them to the whole hours—for example, 7 hours 45 minutes equals 7 + (45 ÷ 60) = 7.75 decimal hours.',
      },
      {
        question: 'Can I add multiple time durations together?',
        answer:
          'Yes. Use the "Add / Subtract Time" mode to sum hours, minutes, and seconds without manually carrying over every 60 seconds or 60 minutes.',
      },
      {
        question: 'Does this calculator support both 12-hour (AM/PM) and 24-hour military time?',
        answer:
          'Yes, you can enter times in standard 12-hour AM/PM format or 24-hour format and view outputs in HH:MM:SS, total minutes, and decimal hours simultaneously.',
      },
    ],
    relatedSlugs: ['/date-calculator', '/age-calculator', '/percentage-calculator'],
    variants: [
      { label: 'Age', slug: '/age-calculator' },
      { label: 'Date Diff', slug: '/date-calculator' },
      { label: 'Time Duration', slug: '/time-duration-calculator' },
    ],
  },
  {
    id: 'percentage-calculator',
    slug: '/percentage-calculator',
    name: 'Online Percentage Calculator',
    shortName: 'Percentage',
    category: 'Math & Grades',
    tagline: 'Calculate X% of Y, exam marks %, and percentage increase or decrease.',
    keywords: [
      'percentage calculator',
      'marks percentage calculator',
      'percentage increase calculator',
      'how to calculate percentage',
    ],
    h1: 'Percentage Calculator Online – Marks, % Of & Percentage Change',
    metaTitle: 'Percentage Calculator Online – Find %, Marks % & % Change | Ultimatrix',
    metaDescription:
      'Free all-in-one percentage calculator online. Calculate X% of Y, exam marks percentage, and percentage increase or decrease with step-by-step math.',
    directAnswer:
      'Solve all three everyday percentage problems in one place: find X% of a number, calculate exam marks percentage (X out of Y), and compute percentage increase or decrease between two values with full step-by-step formulas.',
    formulaTitle: 'Percentage & Marks Equations',
    formulaExpression:
      'X% of Y = (X ÷ 100) × Y   |   Marks % = (Obtained ÷ Total) × 100   |   Change % = [(New − Old) ÷ |Old|] × 100',
    formulaNotes:
      'Divisors must be non-zero in ratio and percentage-change modes. Positive percentage change reflects growth; negative reflects decline.',
    workedExample:
      'Scoring 435 marks out of 500: Percentage = (435 ÷ 500) × 100 = 87.00%. Moving from 80 to 100 is a +25.00% increase.',
    tableTitle: 'Common Percentage to Decimal & Fraction Chart',
    tableHeaders: ['Percentage', 'Decimal', 'Simplified Fraction'],
    tableRows: [
      ['10%', '0.10', '1 / 10'],
      ['12.5%', '0.125', '1 / 8'],
      ['20%', '0.20', '1 / 5'],
      ['25%', '0.25', '1 / 4'],
      ['33.33%', '0.3333', '1 / 3'],
      ['50%', '0.50', '1 / 2'],
      ['75%', '0.75', '3 / 4'],
    ],
    faqs: [
      {
        question: 'How do I calculate the percentage of exam marks?',
        answer:
          'Divide your obtained marks by the total maximum marks and multiply by 100: Percentage = (Obtained Marks ÷ Total Marks) × 100. For example, 435 ÷ 500 × 100 = 87%.',
      },
      {
        question: 'What is the formula for percentage increase or decrease?',
        answer:
          'Subtract the old value from the new value, divide by the original old value, and multiply by 100: [(New Value - Old Value) ÷ Old Value] × 100.',
      },
      {
        question: 'How do I find X percent of a number quickly?',
        answer:
          'Convert the percentage to a decimal by dividing by 100, then multiply by the number—for instance, 15% of 240 is 0.15 × 240 = 36.',
      },
      {
        question: 'Why is a 20% increase followed by a 20% decrease not equal to the original number?',
        answer:
          'Because the 20% decrease applies to the larger post-increase total. Increasing 100 by 20% gives 120, and decreasing 120 by 20% subtracts 24, leaving 96.',
      },
    ],
    relatedSlugs: ['/cgpa-to-percentage-calculator', '/weight-loss-percentage-calculator', '/discount-calculator'],
    variants: [
      { label: 'Percentage', slug: '/percentage-calculator' },
      { label: 'CGPA to %', slug: '/cgpa-to-percentage-calculator' },
      { label: 'Weight Loss %', slug: '/weight-loss-percentage-calculator' },
    ],
  },
  {
    id: 'cgpa-to-percentage-calculator',
    slug: '/cgpa-to-percentage-calculator',
    name: 'CGPA to Percentage Calculator',
    shortName: 'CGPA to %',
    category: 'Math & Grades',
    tagline: 'Convert CGPA or SGPA to percentage using CBSE (×9.5), university, or 4.0 scales.',
    keywords: [
      'cgpa to percentage calculator',
      'cbse cgpa to percentage',
      '10 point cgpa to percentage',
      'sgpa to percentage calculator',
    ],
    h1: 'CGPA to Percentage Calculator – 10-Point & 4-Point Scales',
    metaTitle: 'CGPA to Percentage Calculator – CBSE (9.5x) & University Scales | Ultimatrix',
    metaDescription:
      'Convert CGPA or SGPA to percentage instantly using CBSE (×9.5), VTU, AKTU, Mumbai University, or custom 10-point and 4-point grading formulas.',
    directAnswer:
      'Convert 10-point CBSE CGPA, university SGPA, or 4.0-scale GPA into percentage instantly. Standard CBSE conversion multiplies 10-point CGPA by 9.5, while custom presets support direct 10× and university-specific multipliers.',
    formulaTitle: 'CBSE & University CGPA Conversion Formulas',
    formulaExpression: 'CBSE % = CGPA × 9.5   |   Custom 10-Pt % = CGPA × Multiplier   |   4-Pt % = (GPA ÷ 4.0) × 100',
    formulaNotes:
      'Confirm your university’s official conversion factor on the back of your transcript or marksheet before submitting formal applications.',
    workedExample:
      'An 8.4 CBSE CGPA converts to 8.4 × 9.5 = 79.80%. On a direct 10× engineering scale, 8.4 equals 84.00%.',
    tableTitle: '10-Point CGPA to Percentage Reference Table',
    tableHeaders: ['CGPA (Out of 10)', 'CBSE (× 9.5)', 'Direct (× 10.0)'],
    tableRows: [
      ['10.0', '95.00%', '100.00%'],
      ['9.5', '90.25%', '95.00%'],
      ['9.0', '85.50%', '90.00%'],
      ['8.5', '80.75%', '85.00%'],
      ['8.0', '76.00%', '80.00%'],
      ['7.5', '71.25%', '75.00%'],
      ['7.0', '66.50%', '70.00%'],
    ],
    faqs: [
      {
        question: 'How do you convert CGPA to percentage in CBSE?',
        answer:
          'Multiply your 10-point CGPA by 9.5 (Percentage = CGPA × 9.5). For example, an 8.4 CGPA converts to 8.4 × 9.5 = 79.8%.',
      },
      {
        question: 'Why do different universities use different CGPA conversion formulas?',
        answer:
          'Each university calibrates its grade points differently—while CBSE and many universities use CGPA × 9.5, others like VTU/Anna University use (CGPA - 0.75) × 10, and some use CGPA × 10. Always check your official marksheet rules.',
      },
      {
        question: 'How do I calculate overall CGPA from semester SGPAs?',
        answer:
          'If all semesters have equal credits, add your semester SGPAs and divide by the number of semesters. If credits differ, multiply each SGPA by its semester credits, sum them, and divide by total credits.',
      },
      {
        question: 'How do I convert percentage back into CGPA?',
        answer:
          "Divide your percentage by your board's multiplier—under the standard CBSE rule, CGPA = Percentage ÷ 9.5 (e.g., 76% ÷ 9.5 = 8.0 CGPA).",
      },
    ],
    relatedSlugs: ['/gpa-calculator', '/high-school-gpa-calculator', '/percentage-calculator'],
    variants: [
      { label: 'CGPA to %', slug: '/cgpa-to-percentage-calculator' },
      { label: 'College GPA', slug: '/gpa-calculator' },
      { label: 'High School GPA', slug: '/high-school-gpa-calculator' },
    ],
  },
  {
    id: 'gpa-calculator',
    slug: '/gpa-calculator',
    name: 'College GPA Calculator',
    shortName: 'GPA',
    category: 'Math & Grades',
    tagline: 'Calculate semester and cumulative college GPA on a 4.0 scale from credits and grades.',
    keywords: [
      'gpa calculator',
      'weighted gpa calculator',
      'unweighted gpa calculator 4.0 scale',
      'cumulative gpa calculator',
    ],
    h1: 'College GPA Calculator – Semester & Cumulative 4.0 Scale',
    metaTitle: 'GPA Calculator (4.0 Scale) – Semester & Cumulative College GPA | Ultimatrix',
    metaDescription:
      'Calculate your weighted semester and cumulative college GPA on a 4.0 scale. Add courses with credit hours, letter grades, and prior cumulative standing.',
    directAnswer:
      'Calculate your semester and cumulative college Grade Point Average (GPA) on a standard 4.0 scale by weighting each course’s letter grade against its credit hours. Combine optional prior completed credits and prior GPA to project your updated cumulative GPA.',
    formulaTitle: 'Credit-Weighted Quality Point Formula',
    formulaExpression: 'GPA = Σ (Course Credits × Grade Point) ÷ Σ (Course Credits)',
    formulaNotes:
      'Standard 4.0 plus/minus weights range from A/A+ (4.0) and A- (3.7) to D (1.0) and F (0.0).',
    workedExample:
      'A 4-credit A (16.0 pts) and a 3-credit B+ (9.9 pts) yield 25.9 quality points ÷ 7 credits = 3.70 Semester GPA.',
    tableTitle: 'Standard 4.0 College Letter Grade Scale',
    tableHeaders: ['Letter Grade', 'Grade Points', 'Typical Percentage Band'],
    tableRows: [
      ['A+ / A', '4.0', '93% – 100%'],
      ['A-', '3.7', '90% – 92%'],
      ['B+', '3.3', '87% – 89%'],
      ['B', '3.0', '83% – 86%'],
      ['B-', '2.7', '80% – 82%'],
      ['C+', '2.3', '77% – 79%'],
      ['C', '2.0', '73% – 76%'],
      ['D', '1.0', '60% – 69%'],
      ['F', '0.0', 'Below 60%'],
    ],
    faqs: [
      {
        question: 'What is the difference between weighted and unweighted GPA?',
        answer:
          'An unweighted GPA grades all classes on a standard 0.0 to 4.0 scale regardless of difficulty. A weighted GPA adds extra points (typically +0.5 for Honors and +1.0 for AP/IB courses) on a 5.0 scale to reward rigorous coursework.',
      },
      {
        question: 'How is semester GPA calculated with course credits?',
        answer:
          "Multiply each course's grade point value (e.g., A = 4.0, B = 3.0) by its credit hours to get quality points, add all quality points together, and divide by total attempted credits.",
      },
      {
        question: 'How do I calculate my cumulative GPA across multiple years?',
        answer:
          'Multiply your existing cumulative GPA by your prior earned credits, add the quality points from your current semester, and divide by the combined total credits.',
      },
      {
        question: 'Do Pass/Fail classes affect my GPA?',
        answer:
          'Usually no. Passing a Pass/Fail course earns graduation credits without adding grade points to the GPA numerator or denominator, though failing may count as a 0.0 at some schools.',
      },
    ],
    relatedSlugs: ['/high-school-gpa-calculator', '/cgpa-to-percentage-calculator', '/percentage-calculator'],
    variants: [
      { label: 'College GPA', slug: '/gpa-calculator' },
      { label: 'High School GPA', slug: '/high-school-gpa-calculator' },
      { label: 'CGPA to %', slug: '/cgpa-to-percentage-calculator' },
    ],
  },
  {
    id: 'high-school-gpa-calculator',
    slug: '/high-school-gpa-calculator',
    name: 'High School GPA Calculator',
    shortName: 'High School GPA',
    category: 'Math & Grades',
    tagline: 'Calculate Weighted (5.0) and Unweighted (4.0) GPA for Regular, Honors, and AP/IB.',
    keywords: [
      'high school gpa calculator',
      'weighted gpa calculator',
      'unweighted gpa calculator 4.0 scale',
      'cumulative gpa calculator',
    ],
    h1: 'High School & College GPA Calculator (Weighted & Unweighted)',
    metaTitle: 'High School GPA Calculator – Weighted (5.0) & Unweighted (4.0) | Ultimatrix',
    metaDescription:
      'Calculate your weighted and unweighted high school or college GPA on a 4.0 scale. Add regular, Honors (+0.5), and AP/IB (+1.0) courses with credit hours.',
    directAnswer:
      'Calculate both Unweighted GPA (4.0 scale) and Weighted GPA (5.0 scale) simultaneously for your high school courses. Regular classes follow the standard 4.0 scale, Honors courses add +0.5 quality points, and AP/IB courses add +1.0 quality points.',
    formulaTitle: 'Unweighted vs. Weighted High School GPA',
    formulaExpression:
      'Unweighted = Σ(Credits × Base) ÷ Σ Credits   |   Weighted = Σ[Credits × (Base + Level Bonus)] ÷ Σ Credits',
    formulaNotes:
      'Level Bonus adds +0.0 for Regular, +0.5 for Honors, and +1.0 for AP/IB on passing grades (D through A+). Failing an F earns 0.0 weighted points.',
    workedExample:
      'With 4 courses of 1.0 credit each: AP Calc (A = 5.0), Honors Chem (A- = 4.2), English (B+ = 3.3), AP History (A = 5.0): Unweighted = 3.75 / 4.00; Weighted = 4.38 / 5.00.',
    tableTitle: 'High School Grade Weighting Scale (Regular / Honors / AP-IB)',
    tableHeaders: ['Letter Grade', 'Regular (4.0)', 'Honors (+0.5)', 'AP / IB (+1.0)'],
    tableRows: [
      ['A+ / A', '4.0', '4.5', '5.0'],
      ['A-', '3.7', '4.2', '4.7'],
      ['B+', '3.3', '3.8', '4.3'],
      ['B', '3.0', '3.5', '4.0'],
      ['C', '2.0', '2.5', '3.0'],
      ['F', '0.0', '0.0', '0.0'],
    ],
    faqs: [
      {
        question: 'What is the difference between weighted and unweighted GPA?',
        answer:
          'An unweighted GPA grades all classes on a standard 0.0 to 4.0 scale regardless of difficulty. A weighted GPA adds extra points (typically +0.5 for Honors and +1.0 for AP/IB courses) on a 5.0 scale to reward rigorous coursework.',
      },
      {
        question: 'How is semester GPA calculated with course credits?',
        answer:
          "Multiply each course's grade point value (e.g., A = 4.0, B = 3.0) by its credit hours to get quality points, add all quality points together, and divide by total attempted credits.",
      },
      {
        question: 'How do I calculate my cumulative GPA across multiple years?',
        answer:
          'Multiply your existing cumulative GPA by your prior earned credits, add the quality points from your current semester, and divide by the combined total credits.',
      },
      {
        question: 'Do Pass/Fail classes affect my GPA?',
        answer:
          'Usually no. Passing a Pass/Fail course earns graduation credits without adding grade points to the GPA numerator or denominator, though failing may count as a 0.0 at some schools.',
      },
    ],
    relatedSlugs: ['/gpa-calculator', '/cgpa-to-percentage-calculator', '/percentage-calculator'],
    variants: [
      { label: 'College GPA', slug: '/gpa-calculator' },
      { label: 'High School GPA', slug: '/high-school-gpa-calculator' },
      { label: 'CGPA to %', slug: '/cgpa-to-percentage-calculator' },
    ],
  },
  {
    id: 'scientific-calculator',
    slug: '/scientific-calculator',
    name: 'Scientific Calculator',
    shortName: 'Scientific',
    category: 'Math & Grades',
    tagline: 'Evaluate trigonometry, logarithms, roots, factorials, and bracketed expressions.',
    keywords: ['scientific calculator', 'online scientific calculator', 'trig log calculator'],
    h1: 'Online Scientific Calculator – Trig, Logarithms & Exponents',
    metaTitle: 'Scientific Calculator Online – Trig, Log, Exponents & History | Ultimatrix',
    metaDescription:
      'Free online scientific calculator with trigonometry (sin, cos, tan), log & ln, exponents, factorials, DEG/RAD mode switching, and clickable calculation history.',
    directAnswer:
      'Evaluate multi-step mathematical expressions online with full PEMDAS/BODMAS operator precedence, trigonometric functions (sin, cos, tan and inverse), base-10 and natural logarithms (log, ln), exponents, square roots, factorials, and DEG/RAD angle switching.',
    formulaTitle: 'Order of Operations & Angle Mode',
    formulaExpression: 'Radians = Degrees × (π ÷ 180)   |   Precedence: ( ) → f(x), n! → xʸ → ×, ÷ → +, −',
    formulaNotes:
      'Select DEG for degrees (e.g., sin(30) = 0.5) or RAD for calculus and radians. Press Enter or = to evaluate and log to history.',
    workedExample:
      'In DEG mode, evaluating sin(30) + log(100) × 2^3 computes 0.5 + (2 × 8) = 16.5.',
    tableTitle: 'Scientific Function Reference',
    tableHeaders: ['Function', 'Meaning', 'Mode / Domain Note'],
    tableRows: [
      ['sin, cos, tan', 'Trigonometric ratios', 'Uses active DEG or RAD angle mode'],
      ['log(x)', 'Base-10 common logarithm', 'Defined for x > 0'],
      ['ln(x)', 'Natural logarithm (base e)', 'Defined for x > 0'],
      ['n!', 'Factorial product', 'Integers 0 ≤ n ≤ 170'],
      ['x^y', 'Exponentiation', 'Supports negative and fractional powers'],
    ],
    faqs: [
      {
        question: 'How do I switch between Degrees (DEG) and Radians (RAD) for trigonometry?',
        answer:
          'Click the DEG / RAD mode toggle at the top of the calculator display before running sin, cos, or tan. Use DEG for standard geometry angles (e.g., sin(30°) = 0.5) and RAD for calculus and physics.',
      },
      {
        question: 'What is the difference between log and ln on a scientific calculator?',
        answer:
          'log computes the base-10 common logarithm (log₁₀), while ln computes the natural logarithm using Euler\'s number e ≈ 2.71828 (logₑ).',
      },
      {
        question: 'How does order of operations (PEMDAS/BODMAS) work in this calculator?',
        answer:
          'The expression parser automatically evaluates parentheses first, followed by exponents/roots, multiplication/division from left to right, and addition/subtraction last.',
      },
      {
        question: 'How do I use the Ans or memory keys (M+, M-, RCL)?',
        answer:
          'Ans automatically recalls your previous calculation result into a new formula, while M+ and M- add or subtract the displayed value to stored memory for multi-step calculations.',
      },
    ],
    relatedSlugs: [
      '/casio-fx-115es-scientific-calculator',
      '/sharp-12-digit-scientific-calculator',
      '/percentage-calculator',
    ],
    variants: [
      { label: 'Scientific', slug: '/scientific-calculator' },
      { label: 'Casio fx-115ES', slug: '/casio-fx-115es-scientific-calculator' },
      { label: 'Sharp 12-Digit', slug: '/sharp-12-digit-scientific-calculator' },
    ],
  },
  {
    id: 'casio-fx-115es-scientific-calculator',
    slug: '/casio-fx-115es-scientific-calculator',
    name: 'Casio fx-115ES Plus Style Calculator',
    shortName: 'Casio fx-115ES',
    category: 'Math & Grades',
    tagline: 'Natural Textbook Display simulator with SHIFT/ALPHA, fractions (S⇔D), log_a(b), and nCr/nPr.',
    keywords: [
      'casio advanced scientific calculator fx-115es',
      'casio fx-115es plus online',
      'natural display scientific calculator',
    ],
    h1: 'Casio fx-115ES Plus Style Online Scientific Calculator',
    metaTitle: 'Casio Advanced Scientific Calculator fx-115ES Style Online | Ultimatrix',
    metaDescription:
      'Use an online Casio fx-115ES Plus Natural Textbook scientific calculator with SHIFT/ALPHA keys, DEG/RAD/GRAD, fractions (S⇔D), log_a(b), nPr/nCr, and Ans memory.',
    directAnswer:
      'Built after the Casio fx-115ES Plus Natural Textbook Display, this simulator pairs two-line equation and result readouts with SHIFT and ALPHA modifiers, DEG/RAD/GRAD modes, S⇔D decimal-to-fraction conversion, logₐ(b), permutations (nPr), combinations (nCr), and Ans recall.',
    formulaTitle: 'Natural Textbook Functions & Combinatorics',
    formulaExpression: 'nPr = n! ÷ (n − r)!   |   nCr = n! ÷ [r!(n − r)!]   |   logₐ(b) = ln(b) ÷ ln(a)',
    formulaNotes:
      'Click SHIFT to unlock amber secondary keys (sin⁻¹, cos⁻¹, tan⁻¹, x³, ∛, nPr, π). Click S⇔D to toggle rational results between decimal and mixed fraction display.',
    workedExample:
      'Evaluating logBase(2, 64) + sin(30) in DEG mode returns 6.5, which S⇔D converts cleanly into mixed fraction 6 ⌟ 1/2.',
    tableTitle: 'Casio fx-115ES Plus Simulator Key Guide',
    tableHeaders: ['Key', 'Primary Function', 'SHIFT / Secondary Action'],
    tableRows: [
      ['S⇔D', 'Toggle Decimal ↔ Fraction', 'Converts 0.75 to 3/4 or 6.5 to 6 ⌟ 1/2'],
      ['logₐ(b)', 'Arbitrary-base logBase(a, b)', '10^x power of ten'],
      ['nCr', 'Combinations nCr(n, r)', 'Permutations nPr(n, r)'],
      ['sin / cos / tan', 'Forward trig (DEG/RAD/GRAD)', 'Inverse trig (asin, acos, atan)'],
      ['Ans', 'Inserts last answer', 'Chains multi-step equations'],
    ],
    faqs: [
      {
        question: 'How do I switch between Degrees (DEG) and Radians (RAD) for trigonometry?',
        answer:
          'Click the DEG / RAD mode toggle at the top of the calculator display before running sin, cos, or tan. Use DEG for standard geometry angles (e.g., sin(30°) = 0.5) and RAD for calculus and physics.',
      },
      {
        question: 'What is the difference between log and ln on a scientific calculator?',
        answer:
          'log computes the base-10 common logarithm (log₁₀), while ln computes the natural logarithm using Euler\'s number e ≈ 2.71828 (logₑ).',
      },
      {
        question: 'How does order of operations (PEMDAS/BODMAS) work in this calculator?',
        answer:
          'The expression parser automatically evaluates parentheses first, followed by exponents/roots, multiplication/division from left to right, and addition/subtraction last.',
      },
      {
        question: 'How do I use the Ans or memory keys (M+, M-, RCL)?',
        answer:
          'Ans automatically recalls your previous calculation result into a new formula, while M+ and M- add or subtract the displayed value to stored memory for multi-step calculations.',
      },
    ],
    relatedSlugs: [
      '/sharp-12-digit-scientific-calculator',
      '/scientific-calculator',
      '/percentage-calculator',
    ],
    variants: [
      { label: 'Scientific', slug: '/scientific-calculator' },
      { label: 'Casio fx-115ES', slug: '/casio-fx-115es-scientific-calculator' },
      { label: 'Sharp 12-Digit', slug: '/sharp-12-digit-scientific-calculator' },
    ],
  },
  {
    id: 'sharp-12-digit-scientific-calculator',
    slug: '/sharp-12-digit-scientific-calculator',
    name: 'Sharp 12-Digit Scientific Calculator',
    shortName: 'Sharp 12-Digit',
    category: 'Math & Grades',
    tagline: 'Sharp EL-series 12-digit precision D.A.L. scientific & business calculator.',
    keywords: [
      'sharp 12-digit scientific calculator',
      'sharp el scientific calculator online',
      '12 digit calculator',
    ],
    h1: 'Sharp 12-Digit Scientific Calculator Online (D.A.L.)',
    metaTitle: 'Sharp 12-Digit Scientific Calculator Online – D.A.L. & Memory | Ultimatrix',
    metaDescription:
      'Calculate with a Sharp EL-series 12-digit scientific & business calculator featuring thousands-comma formatting, D.A.L. input, M+/M-/STO/RCL memory, and DRG.',
    directAnswer:
      'Inspired by Sharp’s EL-series 12-digit scientific calculators, this tool combines Direct Algebraic Logic (D.A.L.) equation entry with 12-digit comma-grouped precision formatting, full M+/M-/STO/RCL/MC memory registers, 2ndF inverse trig, and DRG angle cycling.',
    formulaTitle: 'Direct Algebraic Logic & Memory Accumulator',
    formulaExpression: 'Display = Format₁₂(Value)   |   Memory Register: M ← M ± Result',
    formulaNotes:
      'D.A.L. parses formulas left-to-right under standard mathematical precedence. Use STO, RCL, M+, M-, and 2ndF + MC to track running totals.',
    workedExample:
      'Evaluating 12500 * 1.18 + sqrt(144) calculates 14,750 + 12 = 14,762, displayed with 12-digit thousands-comma formatting.',
    tableTitle: 'Sharp 12-Digit Memory & Function Keys',
    tableHeaders: ['Key', 'Function', 'Purpose'],
    tableRows: [
      ['STO / RCL', 'Store or Recall Memory M', 'Hold constants between independent calculations'],
      ['M+ / M−', 'Add or Subtract to Memory M', 'Accumulate invoices or engineering subtotals'],
      ['2ndF', 'Activates secondary functions', 'Access sin⁻¹, cos⁻¹, tan⁻¹, ∛x, 10^x, e^x, MC'],
      ['DRG', 'Cycles DEG → RAD → GRAD', 'Switch trigonometry angle units'],
      ['C·CE', 'Clear Active Entry', 'Clears screen while preserving stored Memory M'],
    ],
    faqs: [
      {
        question: 'How do I switch between Degrees (DEG) and Radians (RAD) for trigonometry?',
        answer:
          'Click the DEG / RAD mode toggle at the top of the calculator display before running sin, cos, or tan. Use DEG for standard geometry angles (e.g., sin(30°) = 0.5) and RAD for calculus and physics.',
      },
      {
        question: 'What is the difference between log and ln on a scientific calculator?',
        answer:
          'log computes the base-10 common logarithm (log₁₀), while ln computes the natural logarithm using Euler\'s number e ≈ 2.71828 (logₑ).',
      },
      {
        question: 'How does order of operations (PEMDAS/BODMAS) work in this calculator?',
        answer:
          'The expression parser automatically evaluates parentheses first, followed by exponents/roots, multiplication/division from left to right, and addition/subtraction last.',
      },
      {
        question: 'How do I use the Ans or memory keys (M+, M-, RCL)?',
        answer:
          'Ans automatically recalls your previous calculation result into a new formula, while M+ and M- add or subtract the displayed value to stored memory for multi-step calculations.',
      },
    ],
    relatedSlugs: [
      '/casio-fx-115es-scientific-calculator',
      '/scientific-calculator',
      '/gst-calculator',
    ],
    variants: [
      { label: 'Scientific', slug: '/scientific-calculator' },
      { label: 'Casio fx-115ES', slug: '/casio-fx-115es-scientific-calculator' },
      { label: 'Sharp 12-Digit', slug: '/sharp-12-digit-scientific-calculator' },
    ],
  },
  {
    id: 'discount-calculator',
    slug: '/discount-calculator',
    name: 'Discount Calculator',
    shortName: 'Discount',
    category: 'Everyday',
    tagline: 'Calculate percentage off, stacked double discounts, and final price after tax.',
    keywords: [
      'discount calculator',
      'percentage discount calculator',
      'percent discount calculator',
      'discount calculator online',
      'discount calculator with tax',
    ],
    h1: 'Discount Calculator Online – Percentage Off & Final Sale Price',
    metaTitle: 'Discount Calculator Online – Percentage Off, Stacked Deals & Tax | Ultimatrix',
    metaDescription:
      'Free online percentage discount calculator. Calculate final sale price, total money saved, double/stacked discounts, and final price after sales tax or GST.',
    directAnswer:
      'Calculate final sale price, total money saved, and effective discount percentage across single or double/stacked coupon discounts, with optional sales tax or GST added at checkout.',
    formulaTitle: 'Percentage & Stacked Discount Formula',
    formulaExpression: 'Final Price = Original × (1 − d₁/100) × (1 − d₂/100) × (1 + Tax/100)',
    formulaNotes:
      'Stacked discounts apply sequentially to the reduced subtotal—so 20% off plus an extra 10% off yields 28% total savings rather than 30%.',
    workedExample:
      'A $200 item with 25% off ($150) plus an extra 10% promo ($135) and 8% tax costs $145.80 at checkout, with $65.00 pre-tax discount savings (32.5% off).',
    tableTitle: 'Stacked Discount Effective Savings Chart',
    tableHeaders: ['Primary Discount', 'Extra Coupon', 'Effective Total Discount'],
    tableRows: [
      ['10% off', '+ 10% extra', '19.0% total off'],
      ['20% off', '+ 10% extra', '28.0% total off'],
      ['25% off', '+ 20% extra', '40.0% total off'],
      ['30% off', '+ 15% extra', '40.5% total off'],
      ['50% off', '+ 20% extra', '60.0% total off'],
    ],
    faqs: [
      {
        question: 'How do you calculate a percentage discount manually?',
        answer:
          'Multiply the original price by the discount percentage divided by 100 to get your savings (Savings = Original Price × Discount% ÷ 100), then subtract those savings from the original price (Final Price = Original Price - Savings).',
      },
      {
        question: 'How do double or stacked discounts (like 20% off + extra 10% off) work?',
        answer:
          'Stacked discounts are applied sequentially, not added together. On a $100 item, 20% off brings the price to $80, and an extra 10% off takes $8 off $80 for a final price of $72 (an effective 28% discount, not 30%).',
      },
      {
        question: 'Is sales tax or GST calculated before or after a store discount?',
        answer:
          'In almost all retail transactions, sales tax or GST is calculated on the discounted net price (after subtracting the store discount), except for manufacturer coupons in certain jurisdictions where tax applies to the pre-coupon price.',
      },
      {
        question: 'How do I find the discount percentage if I only know the original and sale prices?',
        answer:
          'Subtract the sale price from the original price to find the dollar savings, divide that savings by the original price, and multiply by 100: Discount % = [(Original Price - Sale Price) ÷ Original Price] × 100.',
      },
    ],
    relatedSlugs: ['/discount-calculator-with-tax', '/gst-calculator', '/percentage-calculator'],
    variants: [
      { label: 'Discount', slug: '/discount-calculator' },
      { label: 'Discount + Tax', slug: '/discount-calculator-with-tax' },
      { label: 'GST', slug: '/gst-calculator' },
    ],
  },
  {
    id: 'discount-calculator-with-tax',
    slug: '/discount-calculator-with-tax',
    name: 'Discount Calculator with Tax',
    shortName: 'Discount + Tax',
    category: 'Everyday',
    tagline: 'Compute sale price with stacked discounts and tax before or after discount.',
    keywords: [
      'discount calculator with tax',
      'sales tax after discount',
      'gst discount calculator',
    ],
    h1: 'Discount Calculator with Sales Tax / GST – Final Checkout Price',
    metaTitle: 'Discount Calculator with Sales Tax / GST – Final Checkout Price | Ultimatrix',
    metaDescription:
      'Compute final checkout price with stacked coupon discounts, total savings %, and toggleable Sales Tax or GST calculated after or before discount.',
    directAnswer:
      'Calculate your exact checkout total when combining percentage markdowns, extra promo coupons, and sales tax or GST. Switch instantly between Tax After Discount (standard retail rule) and Tax Before Discount (manufacturer rebate rule).',
    formulaTitle: 'Tax After vs. Tax Before Discount Formulas',
    formulaExpression:
      'Tax After: Final = Subtotal × (1 + Tax)   |   Tax Before: Final = Subtotal + (Original × Tax)',
    formulaNotes:
      'Subtotal = Original × (1 − d₁/100) × (1 − d₂/100). Useful for US state sales tax, Canadian HST, UK VAT, and Indian GST invoices.',
    workedExample:
      'On a $150 item with 20% off ($120), an extra 10% coupon ($108 subtotal), and 8.25% tax after discount: Tax = $8.91, Final Payable = $116.91.',
    tableTitle: 'Checkout Tax Rule Comparison ($100 Item, 20% Off, 10% Tax)',
    tableHeaders: ['Tax Mode', 'Discounted Subtotal', 'Sales Tax', 'Final Price'],
    tableRows: [
      ['Tax After Discount (Standard Retail)', '$80.00', '$8.00 (10% of $80)', '$88.00'],
      ['Tax Before Discount (Rebate Rule)', '$80.00', '$10.00 (10% of $100)', '$90.00'],
    ],
    faqs: [
      {
        question: 'When is sales tax calculated before a discount?',
        answer:
          'In most states, store markdowns and store coupons are taxed after the discount, whereas certain manufacturer rebates or carrier-subsidized deals are taxed on the full pre-discount retail price.',
      },
      {
        question: 'How are stacked discounts like 20% + 10% calculated?',
        answer:
          'The first 20% reduces $150 to $120, and the extra 10% takes $12 off $120 to reach $108—an effective 28% markdown rather than 30%.',
      },
      {
        question: 'Can I use this for GST-registered invoices as well as US sales tax?',
        answer:
          'Yes. The percentage tax field works identically for US/Canadian sales tax, UK/EU VAT, and Indian/Australian GST.',
      },
      {
        question: 'What if I only have one discount and no second coupon?',
        answer:
          'Set Stacked Extra Discount (%) to 0 and the calculator computes a clean single-discount plus tax total.',
      },
    ],
    relatedSlugs: ['/discount-calculator', '/gst-calculator', '/percentage-calculator'],
    variants: [
      { label: 'Discount', slug: '/discount-calculator' },
      { label: 'Discount + Tax', slug: '/discount-calculator-with-tax' },
      { label: 'GST', slug: '/gst-calculator' },
    ],
  },
];

export const CALCULATOR_BY_SLUG: Record<string, CalculatorDefinition> = Object.fromEntries(
  CALCULATORS.map((calc) => [calc.slug, calc])
);

export function getCalculatorBySlug(slug: string): CalculatorDefinition | undefined {
  const normalized = slug === '/' ? '/' : slug.replace(/\/+$/, '');
  return CALCULATOR_BY_SLUG[normalized];
}
