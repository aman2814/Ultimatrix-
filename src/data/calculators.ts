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
    name: 'BMI Calculator',
    shortName: 'BMI',
    category: 'Health',
    tagline: 'Calculate Body Mass Index and healthy weight range in metric or imperial units.',
    keywords: ['bmi', 'body mass index', 'healthy weight', 'height weight', 'obesity'],
    h1: 'BMI Calculator',
    metaTitle: 'BMI Calculator – Body Mass Index & Healthy Weight Range',
    metaDescription:
      'Calculate your exact Body Mass Index (BMI), weight category, and ideal healthy weight range in kg/cm or lbs/ft with Ultimatrix Calculator.',
    directAnswer:
      'Body Mass Index (BMI) is a standardized screening ratio derived from your weight and height to estimate body fat levels and categorize weight status. A standard healthy adult BMI falls between 18.5 and 24.9 kg/m² according to World Health Organization guidelines.',
    formulaTitle: 'Metric & Imperial BMI Formulas',
    formulaExpression: 'BMI = weight (kg) / [height (m)]²   |   BMI = 703 × weight (lb) / [height (in)]²',
    formulaNotes:
      'Convert height in centimeters to meters by dividing by 100 before squaring. Healthy weight boundaries use the same formula rearranged for BMI 18.5 and 24.9.',
    workedExample:
      'For an adult weighing 70 kg at 175 cm (1.75 m): Height squared = 1.75 × 1.75 = 3.0625 m². BMI = 70 / 3.0625 = 22.86 kg/m² (Normal Weight). Healthy weight range for 1.75 m is 56.7 kg to 76.3 kg.',
    tableTitle: 'WHO Adult BMI Classification',
    tableHeaders: ['Category', 'BMI Range (kg/m²)', 'Health Risk Note'],
    tableRows: [
      ['Underweight', 'Below 18.5', 'Elevated risk of nutritional deficiency'],
      ['Normal Weight', '18.5 – 24.9', 'Lowest population health risk range'],
      ['Overweight', '25.0 – 29.9', 'Moderate risk; evaluate waist circumference'],
      ['Obesity Class I', '30.0 – 34.9', 'Increased cardiometabolic risk'],
      ['Obesity Class II', '35.0 – 39.9', 'High risk; clinical guidance advised'],
      ['Obesity Class III', '40.0 and above', 'Very high risk; comprehensive medical care'],
    ],
    faqs: [
      {
        question: 'What is a healthy BMI range for most adults?',
        answer:
          'For adults aged 20 and older, a BMI between 18.5 and 24.9 kg/m² is classified as normal or healthy weight by both the WHO and CDC.',
      },
      {
        question: 'Does BMI apply equally to athletes and bodybuilders?',
        answer:
          'No. Because muscle tissue is denser than fat tissue, muscular athletes often register a BMI above 25 despite having low body fat percentages.',
      },
      {
        question: 'Are BMI cutoffs different for Asian populations?',
        answer:
          'Yes. Health agencies often use lower action points for Asian adults: 23.0–27.4 for overweight and 27.5 or higher for obesity due to higher visceral fat risk.',
      },
      {
        question: 'How often should I check my BMI?',
        answer:
          'Checking monthly or quarterly alongside waist circumference provides a practical trend without overreacting to normal daily water weight fluctuations.',
      },
    ],
    relatedSlugs: ['/bmi-calculator/men', '/bmi-calculator/women', '/age-calculator'],
    variants: [
      { label: 'General', slug: '/bmi-calculator' },
      { label: 'For Men', slug: '/bmi-calculator/men' },
      { label: 'For Women', slug: '/bmi-calculator/women' },
    ],
  },
  {
    id: 'bmi-men',
    slug: '/bmi-calculator/men',
    name: 'BMI Calculator for Men',
    shortName: 'BMI (Men)',
    category: 'Health',
    tagline: 'Male-context BMI, estimated body fat percentage, and lean mass notes.',
    keywords: ['bmi men', 'male bmi', 'men body fat', 'ideal weight men'],
    h1: 'BMI Calculator for Men',
    metaTitle: 'BMI Calculator for Men – Male Body Fat & Ideal Weight',
    metaDescription:
      'Calculate male BMI, estimated body fat percentage, and healthy weight ranges tailored with men’s muscle mass and waist-to-height context.',
    directAnswer:
      'While the mathematical BMI formula is identical for adult men and women, men naturally carry higher skeletal muscle mass and lower essential body fat (2–5% vs 10–13%). Pairing male BMI with age-adjusted body fat estimates helps distinguish muscular build from excess visceral fat.',
    formulaTitle: 'Male BMI & Deurenberg Body Fat Estimate',
    formulaExpression: 'Body Fat % (Men) = (1.20 × BMI) + (0.23 × Age) - 16.2',
    formulaNotes:
      'The Deurenberg equation estimates adult male body fat percentage using BMI and chronological age. Athletic men with high lean mass may score slightly higher than actual DEXA body fat.',
    workedExample:
      'A 32-year-old man at 180 cm and 81 kg has a BMI of 81 / (1.80)² = 25.0 kg/m². Estimated body fat = (1.20 × 25.0) + (0.23 × 32) - 16.2 = 21.16%.',
    tableTitle: 'Adult Male Body Composition Benchmarks',
    tableHeaders: ['Male Fitness Tier', 'Typical Body Fat %', 'BMI Context'],
    tableRows: [
      ['Essential Fat', '2% – 5%', 'Typically below 18.5 BMI (clinical threshold)'],
      ['Athletes', '6% – 13%', 'Often 21.0 – 26.5 BMI depending on sport'],
      ['Fitness', '14% – 17%', 'Usually 20.0 – 24.9 BMI'],
      ['Average Adult', '18% – 24%', 'Commonly 22.0 – 26.5 BMI'],
      ['Elevated Risk', '25% and above', 'Correlates with BMI 27+ and higher waist size'],
    ],
    faqs: [
      {
        question: 'What is the ideal BMI for an adult man?',
        answer:
          'Clinically, a BMI between 18.5 and 24.9 is healthy, with many male longevity studies observing optimal outcomes around 21.5 to 24.5.',
      },
      {
        question: 'Why does a muscular man sometimes show an overweight BMI?',
        answer:
          'Standard BMI cannot separate muscle mass from fat mass. A man with substantial lean muscle at 12% body fat can easily reach a BMI of 26–28.',
      },
      {
        question: 'What waist measurement should men pair with BMI?',
        answer:
          'Men should aim to keep waist circumference below 94 cm (37 inches), or under half their height, to minimize central visceral fat risk.',
      },
      {
        question: 'Does male BMI change with age?',
        answer:
          'The BMI threshold remains 18.5–24.9 throughout adulthood, though men naturally lose lean muscle after age 40 unless countered by resistance training.',
      },
    ],
    relatedSlugs: ['/bmi-calculator', '/bmi-calculator/women', '/age-calculator'],
    variants: [
      { label: 'General', slug: '/bmi-calculator' },
      { label: 'For Men', slug: '/bmi-calculator/men' },
      { label: 'For Women', slug: '/bmi-calculator/women' },
    ],
  },
  {
    id: 'bmi-women',
    slug: '/bmi-calculator/women',
    name: 'BMI Calculator for Women',
    shortName: 'BMI (Women)',
    category: 'Health',
    tagline: 'Female-context BMI, estimated body fat percentage, and healthy range.',
    keywords: ['bmi women', 'female bmi', 'women ideal weight', 'women body fat'],
    h1: 'BMI Calculator for Women',
    metaTitle: 'BMI Calculator for Women – Female Healthy Weight & Body Fat',
    metaDescription:
      'Calculate female BMI, estimated body fat percentage, and healthy weight range with women-specific body composition and age context.',
    directAnswer:
      'Adult women use the standard weight-to-height-squared BMI formula, where 18.5 to 24.9 kg/m² indicates a healthy range. Because women physiologically carry higher essential fat (10–13%) than men, age-adjusted body fat estimation offers clearer health insight.',
    formulaTitle: 'Female BMI & Deurenberg Body Fat Estimate',
    formulaExpression: 'Body Fat % (Women) = (1.20 × BMI) + (0.23 × Age) - 5.4',
    formulaNotes:
      'Notice the constant difference (-5.4 vs -16.2 for men), reflecting women’s higher essential physiological fat for hormonal and reproductive health. Not intended for use during pregnancy.',
    workedExample:
      'A 28-year-old woman at 165 cm and 60 kg has a BMI of 60 / (1.65)² = 22.04 kg/m². Estimated body fat = (1.20 × 22.04) + (0.23 × 28) - 5.4 = 27.49%.',
    tableTitle: 'Adult Female Body Composition Benchmarks',
    tableHeaders: ['Female Fitness Tier', 'Typical Body Fat %', 'BMI Context'],
    tableRows: [
      ['Essential Fat', '10% – 13%', 'Minimum physiological threshold; avoid dropping below'],
      ['Athletes', '14% – 20%', 'Often 19.0 – 23.5 BMI'],
      ['Fitness', '21% – 24%', 'Usually 19.5 – 23.5 BMI'],
      ['Average Adult', '25% – 31%', 'Commonly 21.0 – 25.5 BMI'],
      ['Elevated Risk', '32% and above', 'Often aligns with BMI 27+'],
    ],
    faqs: [
      {
        question: 'Should women use BMI during pregnancy?',
        answer:
          'No. During pregnancy, weight gain reflects fetal growth, placenta, and fluid volume; clinicians use pre-pregnancy BMI to guide healthy pregnancy weight gain.',
      },
      {
        question: 'What is a healthy BMI range for women?',
        answer:
          'A BMI between 18.5 and 24.9 kg/m² is the standard healthy range for non-pregnant adult women, with slight flexibility for bone frame size.',
      },
      {
        question: 'How does menopause affect female BMI interpretation?',
        answer:
          'Hormonal shifts after menopause often redistribute fat toward the abdomen even if BMI remains stable, making waist-to-height ratio a valuable companion metric.',
      },
      {
        question: 'Why is essential body fat higher in women than men?',
        answer:
          'Women require roughly 10–13% essential fat for endocrine function, bone density maintenance, and reproductive health, compared with 2–5% in men.',
      },
    ],
    relatedSlugs: ['/bmi-calculator', '/bmi-calculator/men', '/pregnancy-due-date-calculator'],
    variants: [
      { label: 'General', slug: '/bmi-calculator' },
      { label: 'For Men', slug: '/bmi-calculator/men' },
      { label: 'For Women', slug: '/bmi-calculator/women' },
    ],
  },
  {
    id: 'age-calculator',
    slug: '/age-calculator',
    name: 'Age Calculator',
    shortName: 'Age',
    category: 'Date & Time',
    tagline: 'Exact age in years, months, days, total weeks, and next birthday countdown.',
    keywords: ['age calculator', 'exact age', 'birthday countdown', 'dob calculator'],
    h1: 'Age Calculator',
    metaTitle: 'Age Calculator – Exact Age in Years, Months, Days & Countdown',
    metaDescription:
      'Find your exact chronological age in years, months, days, total weeks, and days until your next birthday with leap-year precision.',
    directAnswer:
      'An exact age calculator computes the elapsed calendar interval between a date of birth and a target date, accounting for varying month lengths (28–31 days) and leap years. It outputs both standard calendar age (years, months, days) and cumulative totals in weeks, days, and hours.',
    formulaTitle: 'Calendar Borrowing Method',
    formulaExpression: 'Age = (Target Year - Birth Year, Target Month - Birth Month, Target Day - Birth Day)',
    formulaNotes:
      'When the target day is smaller than the birth day, borrow the exact number of days in the preceding calendar month (28, 29, 30, or 31). When the target month is smaller, borrow 12 months and subtract 1 year.',
    workedExample:
      'Born March 15, 1998, checked on November 20, 2026: Years = 2026 - 1998 = 28; Months = 11 - 3 = 8; Days = 20 - 15 = 5. Exact age is 28 years, 8 months, and 5 days.',
    tableTitle: 'Milestone Age Conversions (Approximate)',
    tableHeaders: ['Age in Years', 'Total Months', 'Approximate Days (incl. Leap Years)'],
    tableRows: [
      ['10 Years', '120 months', '3,652 – 3,653 days'],
      ['18 Years', '216 months', '6,574 – 6,575 days'],
      ['25 Years', '300 months', '9,131 – 9,132 days'],
      ['30 Years', '360 months', '10,957 – 10,958 days'],
      ['50 Years', '600 months', '18,262 – 18,263 days'],
    ],
    faqs: [
      {
        question: 'How does the calculator handle February 29 leap-year birthdays?',
        answer:
          'Elapsed days count every actual February 29 between birth and the target date. For next-birthday countdowns in non-leap years, February 29 birthdays align to March 1 or February 28.',
      },
      {
        question: 'Can I calculate my age on a future or past date?',
        answer:
          'Yes. Change the "Age at Date" field to any past or future date to check how old you were or will be on a specific milestone.',
      },
      {
        question: 'Why does the total day count vary for the same number of years?',
        answer:
          'Depending on where a lifespan falls within the 4-year and 100-year leap-year cycle, a 10-year span includes either 2 or 3 leap days.',
      },
      {
        question: 'Does this use Western chronological age or East Asian age reckoning?',
        answer:
          'It calculates international chronological age starting at 0 on your date of birth and incrementing on each anniversary.',
      },
    ],
    relatedSlugs: ['/date-calculator', '/time-duration-calculator', '/pregnancy-due-date-calculator'],
    variants: [
      { label: 'Age', slug: '/age-calculator' },
      { label: 'Date Diff', slug: '/date-calculator' },
      { label: 'Time Duration', slug: '/time-duration-calculator' },
    ],
  },
  {
    id: 'date-calculator',
    slug: '/date-calculator',
    name: 'Date Calculator',
    shortName: 'Date',
    category: 'Date & Time',
    tagline: 'Count days between dates or add/subtract days, weeks, months, and years.',
    keywords: ['date calculator', 'days between dates', 'add days to date', 'business days'],
    h1: 'Date Calculator',
    metaTitle: 'Date Calculator – Days Between Dates & Add/Subtract Days',
    metaDescription:
      'Calculate exact days, weeks, and business days between two dates, or add and subtract days, weeks, months, or years from any date.',
    directAnswer:
      'A date calculator measures the exact calendar duration between two dates—including total days, weeks, and weekday business days—or projects a future or past date by adding or subtracting days, weeks, months, or years.',
    formulaTitle: 'Julian Day & Calendar Offset Arithmetic',
    formulaExpression: 'Total Days = (End UTC Midnight - Start UTC Midnight) / 86,400,000 ms',
    formulaNotes:
      'Computing in UTC midnight eliminates Daylight Saving Time 23-hour or 25-hour anomalies. Adding months clamps end-of-month dates cleanly (e.g., Jan 31 + 1 month → Feb 28/29).',
    workedExample:
      'Between March 1, 2026 and April 15, 2026: 31 days in March - 1 + 15 = 45 calendar days, which equals 6 weeks and 3 days (and 32 weekdays excluding weekends).',
    tableTitle: 'Common Calendar Interval Reference',
    tableHeaders: ['Interval', 'Calendar Days', 'Typical Weekdays (Mon–Fri)'],
    tableRows: [
      ['1 Week', '7 days', '5 weekdays'],
      ['30 Days', '30 days', '21 – 22 weekdays'],
      ['90 Days (Quarter)', '90 days', '64 – 65 weekdays'],
      ['180 Days (Half Year)', '180 days', '128 – 129 weekdays'],
      ['1 Standard Year', '365 days', '260 – 261 weekdays'],
    ],
    faqs: [
      {
        question: 'Does the days-between-dates count include the end date?',
        answer:
          'By default, duration measures the elapsed difference (end minus start). You can toggle "Include end date (+1 day)" when counting inclusive project days or hotel nights.',
      },
      {
        question: 'How are business days calculated?',
        answer:
          'Business days count Monday through Friday between the selected dates, excluding Saturdays and Sundays. Regional public holidays are not deducted automatically.',
      },
      {
        question: 'What happens if I add 1 month to January 31?',
        answer:
          'Because February has 28 days (or 29 in a leap year), standard calendar arithmetic clamps the result to the last valid day of February rather than spilling into March.',
      },
      {
        question: 'Are Daylight Saving Time clock shifts handled accurately?',
        answer:
          'Yes. All date math normalizes to UTC calendar dates so spring-forward or fall-back transitions never cause off-by-one day errors.',
      },
    ],
    relatedSlugs: ['/age-calculator', '/time-duration-calculator', '/pregnancy-due-date-calculator'],
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
    tagline: 'Calculate elapsed hours, minutes, seconds or add/subtract time.',
    keywords: ['time duration', 'hours calculator', 'elapsed time', 'add time'],
    h1: 'Time Duration Calculator',
    metaTitle: 'Time Duration Calculator – Elapsed Hours, Minutes & Seconds',
    metaDescription:
      'Compute exact hours, minutes, seconds, and decimal hours between two times or add and subtract time durations effortlessly.',
    directAnswer:
      'A time duration calculator finds the exact elapsed hours, minutes, and seconds between a start time and end time—including overnight shifts—and converts the interval into decimal hours for timesheets and payroll.',
    formulaTitle: 'Sexagesimal Time Subtraction',
    formulaExpression: 'Total Seconds = (End Seconds - Start Seconds + 86,400) mod 86,400',
    formulaNotes:
      'When overnight wrap is enabled and the end time is earlier than the start time (e.g., 22:30 to 06:15), 24 hours (86,400 seconds) is added automatically.',
    workedExample:
      'From 08:45:00 to 17:15:30: Elapsed duration = 8 hours, 30 minutes, 30 seconds, which equals 8.5083 decimal hours or 510.5 total minutes.',
    tableTitle: 'Minutes to Decimal Hours Conversion',
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
        question: 'How do I calculate an overnight work shift?',
        answer:
          'Keep the "Overnight wrap if end is earlier" option enabled. Entering 22:00 as start and 06:30 as end will accurately yield 8 hours and 30 minutes.',
      },
      {
        question: 'Why does the calculator show decimal hours?',
        answer:
          'Payroll and billing systems multiply hourly rates by decimal hours (for example, 7 hours 45 minutes = 7.75 hours) rather than hours and minutes.',
      },
      {
        question: 'Can I add more than 24 hours in Add/Subtract mode?',
        answer:
          'Yes. You can add or subtract any number of hours, minutes, and seconds; the output shows both the resulting 24-hour clock time and how many days forward or backward it shifted.',
      },
      {
        question: 'Does it support seconds precision?',
        answer:
          'Yes. Both elapsed duration and time arithmetic modes support full hours, minutes, and seconds inputs.',
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
    id: 'pregnancy-due-date-calculator',
    slug: '/pregnancy-due-date-calculator',
    name: 'Pregnancy Due Date Calculator',
    shortName: 'Due Date',
    category: 'Health',
    tagline: 'Estimate due date, current week, and trimester milestones from LMP or conception.',
    keywords: ['pregnancy due date', 'lmp due date', 'gestational age', 'trimester calculator'],
    h1: 'Pregnancy Due Date Calculator',
    metaTitle: 'Pregnancy Due Date Calculator – LMP, Conception & Trimesters',
    metaDescription:
      'Estimate your expected pregnancy due date, current gestational week, and trimester milestones from your last menstrual period or conception date.',
    directAnswer:
      'A pregnancy due date calculator estimates your Estimated Date of Delivery (EDD) by adding 280 days (40 weeks) to the first day of your Last Menstrual Period (LMP), adjusted for your typical cycle length, or by adding 266 days (38 weeks) to a known conception date.',
    formulaTitle: 'Naegele’s Rule (Cycle-Adjusted)',
    formulaExpression: 'EDD = LMP + 280 days + (Cycle Length - 28 days)   |   EDD = Conception + 266 days',
    formulaNotes:
      'Informational estimate only: only about 4% of births occur on the exact due date. First-trimester ultrasound dating by a healthcare provider is the clinical gold standard.',
    workedExample:
      'With an LMP of March 1, 2026 and a 30-day cycle (+2 day offset): 280 + 2 = 282 days after March 1, yielding an estimated due date of December 8, 2026.',
    tableTitle: 'Pregnancy Trimester Milestones',
    tableHeaders: ['Trimester', 'Gestational Weeks', 'Key Developmental Window'],
    tableRows: [
      ['First Trimester', 'Week 1 – Week 13', 'Embryonic organogenesis and early screening'],
      ['Second Trimester', 'Week 14 – Week 27', 'Anatomy scan (Weeks 18–22) and fetal movement'],
      ['Third Trimester', 'Week 28 – Week 40+', 'Rapid growth, lung maturation, birth readiness'],
      ['Full Term', 'Week 39 – Week 40', 'Optimal delivery window for uncomplicated pregnancies'],
    ],
    faqs: [
      {
        question: 'How accurate is an LMP-based due date?',
        answer:
          'LMP assumes ovulation occurred on day 14 of a 28-day cycle. Adjusting for cycle length improves accuracy, though an early ultrasound provides the most reliable medical estimate.',
      },
      {
        question: 'Why does pregnancy count from the last period instead of conception?',
        answer:
          'Because the exact day of ovulation and fertilization is rarely known with certainty, obstetrics standardizes gestational age from the first day of the last menstrual period.',
      },
      {
        question: 'What is the difference between 38 weeks and 40 weeks?',
        answer:
          'Fetal age from conception is about 38 weeks (266 days), whereas gestational age from LMP is about 40 weeks (280 days)—both point to the same delivery window.',
      },
      {
        question: 'Is this tool a substitute for medical care?',
        answer:
          'No. This calculator provides general educational estimates only. Always confirm your due date and prenatal schedule with an obstetrician or midwife.',
      },
    ],
    relatedSlugs: ['/bmi-calculator/women', '/date-calculator', '/age-calculator'],
  },
  {
    id: 'percentage-calculator',
    slug: '/percentage-calculator',
    name: 'Percentage Calculator',
    shortName: 'Percentage',
    category: 'Math & Grades',
    tagline: 'Solve X% of Y, X is what % of Y, and percentage increase or decrease.',
    keywords: ['percentage calculator', 'percent change', 'percent of number', 'percent increase'],
    h1: 'Percentage Calculator',
    metaTitle: 'Percentage Calculator – Percent Of, Ratio & Percent Change',
    metaDescription:
      'Calculate percentages instantly across three modes: X% of Y, X is what percent of Y, and percentage increase or decrease with step-by-step formulas.',
    directAnswer:
      'A percentage expresses a dimensionless ratio out of 100. Whether finding a portion of a total, determining what share one value represents of another, or measuring relative growth and decline, every percentage converts between a decimal fraction and parts per hundred.',
    formulaTitle: 'Core Percentage Equations',
    formulaExpression: 'Part = (P / 100) × Total   |   Percent = (Part / Total) × 100   |   Change % = ((New - Old) / |Old|) × 100',
    formulaNotes:
      'When calculating percentage change, the denominator must be non-zero. Positive results indicate percentage increase; negative results indicate percentage decrease.',
    workedExample:
      'If a product rises from $80 to $100: Difference = 100 - 80 = +$20. Percentage increase = (20 / 80) × 100 = +25%.',
    tableTitle: 'Quick Percentage-to-Fraction Conversions',
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
        question: 'Why does a 20% increase followed by a 20% decrease not return to the original number?',
        answer:
          'Because the 20% decrease applies to the new, larger base. For example, 100 + 20% = 120, and 120 - 20% (24) = 96.',
      },
      {
        question: 'How do I find what percent X is of Y?',
        answer:
          'Divide X by Y and multiply the decimal result by 100. For instance, 45 out of 60 is (45 / 60) × 100 = 75%.',
      },
      {
        question: 'What happens if the starting value is zero in percentage change?',
        answer:
          'Percentage change from an initial value of zero is mathematically undefined because division by zero is invalid.',
      },
      {
        question: 'What is the difference between percent change and percentage points?',
        answer:
          'Moving from 10% to 15% is a rise of 5 percentage points, which is a 50% relative increase.',
      },
    ],
    relatedSlugs: ['/discount-calculator', '/cgpa-to-percentage-calculator', '/gst-calculator'],
    variants: [
      { label: 'Percentage', slug: '/percentage-calculator' },
      { label: 'CGPA to %', slug: '/cgpa-to-percentage-calculator' },
      { label: 'GPA', slug: '/gpa-calculator' },
    ],
  },
  {
    id: 'cgpa-to-percentage-calculator',
    slug: '/cgpa-to-percentage-calculator',
    name: 'CGPA to Percentage Calculator',
    shortName: 'CGPA to %',
    category: 'Math & Grades',
    tagline: 'Convert 10-point CBSE/University CGPA or 4-point GPA to percentage.',
    keywords: ['cgpa to percentage', 'cbse cgpa', '10 point cgpa', 'gpa to percentage'],
    h1: 'CGPA to Percentage Calculator',
    metaTitle: 'CGPA to Percentage Calculator – 10-Point CBSE & 4-Point Scale',
    metaDescription:
      'Convert 10-point Indian CBSE or university CGPA and 4.0-scale GPA into accurate percentage scores with custom multiplier options.',
    directAnswer:
      'To convert a 10-point Indian CBSE CGPA to an approximate percentage, multiply your CGPA by 9.5. Universities using direct 10-point or 4-point scales may apply a custom multiplier (such as 10× or 25×) or specific linear offsets defined in their transcript policy.',
    formulaTitle: 'Standard CGPA Conversion Formulas',
    formulaExpression: 'CBSE 10-Point % = CGPA × 9.5   |   Custom % = CGPA × Multiplier   |   4-Point Scale % = (GPA / 4.0) × 100',
    formulaNotes:
      'CBSE introduced the 9.5 multiplier based on the historical average marks of top-scoring students. Always verify your specific university’s official conversion certificate for admissions or employment.',
    workedExample:
      'For a CBSE CGPA of 8.6 on a 10-point scale: Percentage = 8.6 × 9.5 = 81.7%. On a direct 10× scale, 8.6 equals 86.0%.',
    tableTitle: '10-Point CGPA to Percentage Reference (9.5× & 10×)',
    tableHeaders: ['CGPA (Out of 10)', 'CBSE (× 9.5)', 'Direct (× 10.0)'],
    tableRows: [
      ['10.0', '95.00% (max CBSE scale)', '100.00%'],
      ['9.5', '90.25%', '95.00%'],
      ['9.0', '85.50%', '90.00%'],
      ['8.5', '80.75%', '85.00%'],
      ['8.0', '76.00%', '80.00%'],
      ['7.5', '71.25%', '75.00%'],
      ['7.0', '66.50%', '70.00%'],
    ],
    faqs: [
      {
        question: 'Why does CBSE multiply CGPA by 9.5 instead of 10?',
        answer:
          'CBSE analyzed board exam marks over five years and found that the average score of students in the 91–100 band was 95, establishing 9.5 as the conversion factor.',
      },
      {
        question: 'Do all Indian universities use the 9.5 multiplier?',
        answer:
          'No. Many engineering and state universities use (CGPA - 0.75) × 10, (CGPA - 0.5) × 10, or a direct 10× multiplier. Use our Custom Multiplier preset to match your university.',
      },
      {
        question: 'How do I convert a 4.0 US-style GPA to percentage?',
        answer:
          'Select the 4-Point GPA Scale mode, which proportionally scales GPA out of 4.0 to 100% (for example, 3.6 / 4.0 = 90%).',
      },
      {
        question: 'Can I convert percentage back to CGPA?',
        answer:
          'Yes. Divide your percentage by 9.5 (or your institution’s multiplier) to estimate the equivalent 10-point CGPA.',
      },
    ],
    relatedSlugs: ['/gpa-calculator', '/percentage-calculator', '/scientific-calculator'],
    variants: [
      { label: 'Percentage', slug: '/percentage-calculator' },
      { label: 'CGPA to %', slug: '/cgpa-to-percentage-calculator' },
      { label: 'GPA', slug: '/gpa-calculator' },
    ],
  },
  {
    id: 'gpa-calculator',
    slug: '/gpa-calculator',
    name: 'GPA Calculator',
    shortName: 'GPA',
    category: 'Math & Grades',
    tagline: 'Calculate weighted semester and cumulative GPA from courses, credits, and grades.',
    keywords: ['gpa calculator', 'semester gpa', 'college gpa', 'grade point average'],
    h1: 'GPA Calculator',
    metaTitle: 'GPA Calculator – Weighted Semester & Cumulative 4.0 Scale',
    metaDescription:
      'Calculate your weighted semester and cumulative GPA on a 4.0 scale by entering course credits, letter grades, and optional prior GPA.',
    directAnswer:
      'Grade Point Average (GPA) is the credit-weighted mean of your course grade points. Multiply each course’s credit hours by the numerical value of its letter grade, sum all quality points, and divide by the total attempted credit hours.',
    formulaTitle: 'Weighted Quality Point Formula',
    formulaExpression: 'GPA = Σ (Course Credits × Grade Point) / Σ (Course Credits)',
    formulaNotes:
      'Standard US 4.0 plus/minus weights range from A/A+ (4.0) and A- (3.7) down to D (1.0) and F (0.0). Include prior cumulative credits and GPA to project your updated cumulative GPA.',
    workedExample:
      'A 4-credit course with an A (4.0 = 16.0 pts) and a 3-credit course with a B+ (3.3 = 9.9 pts) yield 25.9 quality points / 7 credits = 3.70 Semester GPA.',
    tableTitle: 'Standard 4.0 Letter Grade Scale',
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
        question: 'Why do course credits matter when calculating GPA?',
        answer:
          'A 4-credit lab or core class carries twice the weight of a 2-credit seminar, so higher-credit courses impact your GPA more strongly.',
      },
      {
        question: 'How do I calculate my new Cumulative GPA?',
        answer:
          'Enter your existing cumulative GPA and completed credits in the Prior Standing section. The calculator combines prior quality points with your current semester.',
      },
      {
        question: 'Are A+ and A both worth 4.0 points?',
        answer:
          'Most standard 4.0 college scales cap both A and A+ at 4.00. Some universities award 4.3 for A+, while weighted high school scales add +0.5 or +1.0 for Honors/AP.',
      },
      {
        question: 'Do Pass/Fail courses affect GPA?',
        answer:
          'Typically a Passing (P) grade earns credit toward graduation without affecting quality points, so exclude Pass/Fail courses from GPA rows.',
      },
    ],
    relatedSlugs: ['/cgpa-to-percentage-calculator', '/percentage-calculator', '/scientific-calculator'],
    variants: [
      { label: 'Percentage', slug: '/percentage-calculator' },
      { label: 'CGPA to %', slug: '/cgpa-to-percentage-calculator' },
      { label: 'GPA', slug: '/gpa-calculator' },
    ],
  },
  {
    id: 'discount-calculator',
    slug: '/discount-calculator',
    name: 'Discount Calculator',
    shortName: 'Discount',
    category: 'Everyday',
    tagline: 'Compute final sale price, stacked discounts, sales tax, and total savings.',
    keywords: ['discount calculator', 'sale price', 'stacked discount', 'percent off'],
    h1: 'Discount Calculator',
    metaTitle: 'Discount Calculator – Final Price, Stacked Discounts & Savings',
    metaDescription:
      'Calculate final sale price, total savings, stacked extra coupon discounts, and optional sales tax or GST in real time.',
    directAnswer:
      'A discount calculator determines the net sale price after applying a percentage markdown, optional additional coupon discount (applied sequentially to the reduced subtotal), and optional sales tax or GST on the discounted price.',
    formulaTitle: 'Sequential Discount & Tax Equation',
    formulaExpression: 'Final Price = Price × (1 - d₁/100) × (1 - d₂/100) × (1 + tax/100)',
    formulaNotes:
      'Stacked discounts are multiplicative, not additive: a 20% markdown plus an extra 10% coupon equals a 28% effective discount (1 - 0.80 × 0.90 = 0.28), not 30%.',
    workedExample:
      'A $200 jacket with 25% off ($150) plus an extra 10% promo ($135) and 8% sales tax: Final Price = $135 × 1.08 = $145.80, with $65.00 pre-tax savings (32.5% effective discount).',
    tableTitle: 'Effective Savings for Stacked Discounts',
    tableHeaders: ['Primary Discount', 'Extra Coupon', 'Combined Effective Discount'],
    tableRows: [
      ['10% off', '+ 10% extra', '19.0% total off'],
      ['20% off', '+ 10% extra', '28.0% total off'],
      ['25% off', '+ 20% extra', '40.0% total off'],
      ['30% off', '+ 15% extra', '40.5% total off'],
      ['50% off', '+ 20% extra', '60.0% total off'],
    ],
    faqs: [
      {
        question: 'Why isn’t 20% off plus an extra 10% off equal to 30% off?',
        answer:
          'Retailers apply the second coupon to the already-discounted price rather than the original tag price, producing 28% total savings instead of 30%.',
      },
      {
        question: 'Is sales tax or GST applied before or after the discount?',
        answer:
          'In nearly all retail jurisdictions, sales tax and GST are calculated on the final discounted transaction price.',
      },
      {
        question: 'How do I calculate the effective discount percentage?',
        answer:
          'Divide your total pre-tax dollar savings by the original price and multiply by 100.',
      },
      {
        question: 'Can I use this for single-discount calculations?',
        answer:
          'Yes. Simply leave the Additional Discount and Tax fields at 0% for an instant single-stage markdown calculation.',
      },
    ],
    relatedSlugs: ['/gst-calculator', '/percentage-calculator', '/emi-calculator'],
    variants: [
      { label: 'Discount', slug: '/discount-calculator' },
      { label: 'GST', slug: '/gst-calculator' },
      { label: 'Percentage', slug: '/percentage-calculator' },
    ],
  },
  {
    id: 'scientific-calculator',
    slug: '/scientific-calculator',
    name: 'Scientific Calculator',
    shortName: 'Scientific',
    category: 'Math & Grades',
    tagline: 'Full trigonometric, logarithmic, factorial, and algebraic expression engine.',
    keywords: ['scientific calculator', 'sin cos tan', 'logarithm', 'factorial', 'deg rad'],
    h1: 'Scientific Calculator',
    metaTitle: 'Scientific Calculator – Trig, Log, Exponents & History',
    metaDescription:
      'Perform trigonometry, logarithms, roots, factorials, and multi-step bracketed expressions with DEG/RAD switching and calculation history.',
    directAnswer:
      'A scientific calculator evaluates multi-operator algebraic expressions following strict PEMDAS/BODMAS precedence, supporting trigonometric functions (sin, cos, tan), common and natural logarithms (log₁₀, ln), exponents, square roots, factorials, and instant DEG/RAD angle conversion.',
    formulaTitle: 'Angle Conversion & Operator Precedence',
    formulaExpression: 'Radians = Degrees × (π / 180)   |   Precedence: ( ) → f(x), n! → xʸ → ×, ÷ → +, −',
    formulaNotes:
      'Switch between DEG (degrees, 360° circle) and RAD (radians, 2π circle) before evaluating trigonometric expressions. Click any entry in the History log to reload its result.',
    workedExample:
      'In DEG mode, evaluating sin(30) + log(100) × 2³: sin(30°) = 0.5, log₁₀(100) = 2, 2³ = 8. Following precedence: 0.5 + (2 × 8) = 16.5.',
    tableTitle: 'Essential Scientific Function Reference',
    tableHeaders: ['Function', 'Mathematical Meaning', 'Domain / Mode Note'],
    tableRows: [
      ['sin, cos, tan', 'Trigonometric ratios', 'Respects DEG or RAD toggle'],
      ['log(x)', 'Base-10 common logarithm', 'Defined for x > 0'],
      ['ln(x)', 'Base-e natural logarithm', 'Defined for x > 0'],
      ['n!', 'Factorial (n × (n-1) × ... × 1)', 'Non-negative integers 0 ≤ n ≤ 170'],
      ['x^y', 'Exponentiation (x raised to y)', 'Supports fractional and negative powers'],
    ],
    faqs: [
      {
        question: 'When should I use DEG vs RAD mode?',
        answer:
          'Use DEG for geometry, navigation, and standard school trigonometry problems given in degrees (like sin 30° = 0.5). Use RAD for calculus, physics, and radian angles (like sin(π/6) = 0.5).',
      },
      {
        question: 'Can I type expressions directly from my keyboard?',
        answer:
          'Yes. Numbers, +, -, *, /, ^, parentheses, Enter (evaluate), Backspace, and Escape (clear) all work directly from your keyboard.',
      },
      {
        question: 'How large of a factorial can the calculator compute?',
        answer:
          'Double-precision floating-point arithmetic supports factorials up to 170! before exceeding standard IEEE-754 numeric limits.',
      },
      {
        question: 'Does the calculator follow standard order of operations?',
        answer:
          'Yes. Parentheses, functions, exponents, multiplication/division, and addition/subtraction are parsed using a recursive-descent mathematical evaluator.',
      },
    ],
    relatedSlugs: ['/percentage-calculator', '/gpa-calculator', '/cgpa-to-percentage-calculator'],
  },
  {
    id: 'emi-calculator',
    slug: '/emi-calculator',
    name: 'EMI Calculator',
    shortName: 'EMI',
    category: 'Finance',
    tagline: 'Calculate monthly loan EMI, total interest payable, and principal breakdown.',
    keywords: ['emi calculator', 'loan emi', 'home loan', 'car loan', 'monthly installment'],
    h1: 'EMI Calculator',
    metaTitle: 'EMI Calculator – Monthly Loan Payment & Interest Breakdown',
    metaDescription:
      'Calculate Equated Monthly Installment (EMI), total interest payable, and principal-vs-interest ratio for home, car, or personal loans.',
    directAnswer:
      'An Equated Monthly Installment (EMI) is the fixed monthly payment required to repay a loan’s principal and compound interest over a chosen tenure. Early installments pay mostly interest, while later installments pay down mostly principal.',
    formulaTitle: 'Standard Reducing-Balance EMI Formula',
    formulaExpression: 'EMI = [P × r × (1 + r)ⁿ] / [(1 + r)ⁿ − 1]',
    formulaNotes:
      'Here P is the principal loan amount, r is the monthly interest rate (Annual Rate / 12 / 100), and n is the total number of monthly installments. At 0% interest, EMI simplifies to P / n.',
    workedExample:
      'For a loan of 1,000,000 at 8.5% p.a. for 10 years (n = 120, r = 0.0070833): Monthly EMI = 12,398.57. Total payment = 1,487,828, of which 487,828 is total interest.',
    tableTitle: 'Sample EMI per 100,000 Borrowed (8.5% p.a.)',
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
        question: 'How does tenure length affect total interest paid?',
        answer:
          'Longer tenures lower your monthly EMI obligation, but dramatically increase total interest because compound interest accrues over more months.',
      },
      {
        question: 'What happens when the annual interest rate is 0%?',
        answer:
          'For zero-interest financing, the monthly installment is simply the principal divided by the number of months, with zero interest cost.',
      },
      {
        question: 'Can I switch between years and months for tenure?',
        answer:
          'Yes. Toggle the Tenure unit between Years and Months directly in the calculator to test short-term 18-month or long-term 30-year loans.',
      },
      {
        question: 'How can I reduce my loan interest burden?',
        answer:
          'Making periodic principal prepayments or selecting a shorter tenure reduces the outstanding principal early, cutting total interest significantly.',
      },
    ],
    relatedSlugs: ['/sip-calculator', '/gst-calculator', '/discount-calculator'],
    variants: [
      { label: 'EMI', slug: '/emi-calculator' },
      { label: 'SIP', slug: '/sip-calculator' },
      { label: 'GST', slug: '/gst-calculator' },
    ],
  },
  {
    id: 'sip-calculator',
    slug: '/sip-calculator',
    name: 'SIP Calculator',
    shortName: 'SIP',
    category: 'Finance',
    tagline: 'Project Systematic Investment Plan wealth, returns, and compounded corpus.',
    keywords: ['sip calculator', 'mutual fund sip', 'compounding', 'investment return'],
    h1: 'SIP Calculator',
    metaTitle: 'SIP Calculator – Mutual Fund Returns & Compounding Projection',
    metaDescription:
      'Estimate future wealth, total invested capital, and compounding gains for your monthly Systematic Investment Plan (SIP) with optional step-up.',
    directAnswer:
      'A Systematic Investment Plan (SIP) calculator projects the future maturity value of regular monthly investments compounded at an expected annual rate of return. Consistent monthly contributions harness compounding to grow wealth exponentially over multi-year horizons.',
    formulaTitle: 'Annuity-Due Monthly SIP Formula',
    formulaExpression: 'FV = P × [((1 + i)ⁿ − 1) / i] × (1 + i)',
    formulaNotes:
      'P is the monthly investment, i is the monthly compounded rate (Annual % / 12 / 100), and n is total months (Years × 12). Optional annual step-up compounds your monthly contribution each year.',
    workedExample:
      'Investing 10,000 monthly at 12% expected annual return for 15 years (n = 180, i = 0.01): Total Invested = 1,800,000; Estimated Gains = 3,245,760; Future Value = 5,045,760.',
    tableTitle: 'Power of Compounding (10,000/month at 12% p.a.)',
    tableHeaders: ['Duration', 'Total Invested', 'Estimated Returns', 'Maturity Value'],
    tableRows: [
      ['5 Years', '600,000', '224,864', '824,864'],
      ['10 Years', '1,200,000', '1,123,391', '2,323,391'],
      ['15 Years', '1,800,000', '3,245,760', '5,045,760'],
      ['20 Years', '2,400,000', '7,591,479', '9,991,479'],
    ],
    faqs: [
      {
        question: 'What is the difference between regular SIP and Step-Up SIP?',
        answer:
          'A regular SIP keeps the monthly contribution fixed, whereas a Step-Up SIP increases your monthly amount by a fixed percentage each year alongside income growth.',
      },
      {
        question: 'Are mutual fund SIP returns guaranteed?',
        answer:
          'No. Market-linked investments fluctuate over time. The expected annual return rate represents an illustrative annualized average for planning.',
      },
      {
        question: 'Why does the wealth ratio accelerate after year 10?',
        answer:
          'In later years, compounded returns earned on your existing corpus exceed your new annual contributions, creating exponential growth.',
      },
      {
        question: 'What happens if expected return is 0%?',
        answer:
          'At 0% return, maturity value equals the exact sum of your monthly contributions with zero capital gains.',
      },
    ],
    relatedSlugs: ['/emi-calculator', '/gst-calculator', '/percentage-calculator'],
    variants: [
      { label: 'EMI', slug: '/emi-calculator' },
      { label: 'SIP', slug: '/sip-calculator' },
      { label: 'GST', slug: '/gst-calculator' },
    ],
  },
  {
    id: 'gst-calculator',
    slug: '/gst-calculator',
    name: 'GST Calculator',
    shortName: 'GST',
    category: 'Finance',
    tagline: 'Add GST or reverse-calculate pre-tax value across 5%, 12%, 18%, and 28% slabs.',
    keywords: ['gst calculator', 'reverse gst', 'cgst sgst', 'tax inclusive'],
    h1: 'GST Calculator',
    metaTitle: 'GST Calculator – Add or Remove GST with CGST & SGST Split',
    metaDescription:
      'Calculate Goods and Services Tax (GST) both forward (Add GST) and reverse (Remove GST) across 5%, 12%, 18%, and 28% slabs with CGST/SGST split.',
    directAnswer:
      'A GST calculator computes the tax component and final invoice total when adding Goods and Services Tax to a base price, or extracts the original net price and embedded tax from a tax-inclusive gross amount, automatically splitting intra-state tax equally into CGST and SGST.',
    formulaTitle: 'Exclusive (Add) & Inclusive (Reverse) GST Formulas',
    formulaExpression: 'Add GST: Total = Net × (1 + Rate/100)   |   Reverse GST: Net = Gross / (1 + Rate/100)',
    formulaNotes:
      'To reverse-calculate GST from a tax-inclusive bill, never subtract the GST percentage directly from the gross price—divide by (1 + Rate/100) instead. Intra-state GST splits 50/50 into CGST and SGST.',
    workedExample:
      'On an invoice of 11,800 inclusive of 18% GST: Net Base Price = 11,800 / 1.18 = 10,000. Total GST = 1,800, split evenly into 900 CGST (9%) and 900 SGST (9%).',
    tableTitle: 'Standard GST Tax Slabs & Split',
    tableHeaders: ['GST Slab', 'CGST (50%)', 'SGST (50%)', 'Common Goods & Services'],
    tableRows: [
      ['5%', '2.5%', '2.5%', 'Essential packaged foods, economy transport'],
      ['12%', '6.0%', '6.0%', 'Processed foods, standard apparel, business class'],
      ['18%', '9.0%', '9.0%', 'IT services, electronics, restaurants, SaaS'],
      ['28%', '14.0%', '14.0%', 'Automobiles, luxury items, white goods'],
    ],
    faqs: [
      {
        question: 'How do I remove GST from an inclusive price?',
        answer:
          'Switch to "Remove GST (Inclusive)" mode. The calculator divides the gross total by (1 + GST%/100) to isolate the true pre-tax base amount.',
      },
      {
        question: 'What is the difference between CGST, SGST, and IGST?',
        answer:
          'For intra-state supplies, total GST divides equally into Central GST (CGST) and State GST (SGST). For inter-state supplies, the full combined rate applies as Integrated GST (IGST).',
      },
      {
        question: 'Why is subtracting 18% from an inclusive total wrong?',
        answer:
          'Because the 18% tax was added onto the smaller base price, not the gross price. For example, 18% of 118 is 21.24, whereas the true embedded tax is 18.00.',
      },
      {
        question: 'Can I enter a custom GST or VAT rate?',
        answer:
          'Yes. Alongside the quick 5%, 12%, 18%, and 28% slab buttons, you can enter any custom percentage such as 3% for bullion or international VAT rates.',
      },
    ],
    relatedSlugs: ['/discount-calculator', '/emi-calculator', '/sip-calculator'],
    variants: [
      { label: 'EMI', slug: '/emi-calculator' },
      { label: 'SIP', slug: '/sip-calculator' },
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
