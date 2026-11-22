import { CalculatorDefinition, CalculatorFaq } from '../data/calculators';
import { Lang } from './ui';

export interface LocalizedCalculatorCopy {
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  keywords: string[];
  directAnswer?: string;
  faqQuestion?: string;
  preserveBaseFaqs?: boolean;
}

type NonEnglishLang = Exclude<Lang, 'en'>;

const LOCALIZED_CALCULATORS: Record<NonEnglishLang, Record<string, LocalizedCalculatorCopy>> = {
  es: {
    '/bmi-calculator': {
      name: 'Calculadora de IMC Online',
      h1: 'Calculadora de IMC Online (Kg, Cm, Libras y Pies)',
      metaTitle: 'Calculadora de IMC Online Gratis – Peso Ideal OMS | Ultimatrix Calculator',
      metaDescription:
        'Calcula tu Índice de Masa Corporal (IMC) al instante en kg, cm o libras y conoce tu rango de peso saludable según la OMS.',
      tagline: 'Calcula tu Índice de Masa Corporal en kg, cm o libras con rango de peso saludable.',
      keywords: ['calculadora imc', 'calcular imc online', 'indice de masa corporal', 'peso ideal oms'],
    },
    '/bmi-calculator/men': {
      name: 'Calculadora de IMC para Hombres',
      h1: 'Calculadora de IMC para Hombres por Edad y Altura',
      metaTitle: 'Calculadora de IMC para Hombres – Masa Muscular y Peso Ideal | Ultimatrix',
      metaDescription:
        'Calcula el IMC masculino y el rango de peso saludable teniendo en cuenta masa muscular y grasa corporal.',
      tagline: 'Evaluación de IMC para hombres con contexto de masa muscular y porcentaje de grasa.',
      keywords: ['calculadora imc hombres', 'imc masculino', 'peso ideal hombre'],
    },
    '/bmi-calculator/women': {
      name: 'Calculadora de IMC para Mujeres',
      h1: 'Calculadora de IMC para Mujeres por Edad y Estatura',
      metaTitle: 'Calculadora de IMC para Mujeres – Grasa Corporal y Peso Ideal | Ultimatrix',
      metaDescription:
        'Calcula el IMC femenino con contexto por edad y rangos saludables de grasa corporal para mujeres.',
      tagline: 'Evaluación de IMC femenino con referencias de grasa corporal y edad.',
      keywords: ['calculadora imc mujeres', 'imc femenino', 'peso ideal mujer'],
    },
    '/child-bmi-calculator': {
      name: 'Calculadora de IMC Infantil y Juvenil',
      h1: 'Calculadora de IMC para Niños y Adolescentes (2 a 19 Años)',
      metaTitle: 'Calculadora de IMC Infantil – Percentiles CDC y OMS | Ultimatrix',
      metaDescription:
        'Calcula el IMC y el percentil pediátrico por edad y sexo para niños y adolescentes de 2 a 19 años.',
      tagline: 'Percentil de IMC pediátrico CDC según edad exacta en años, meses y sexo.',
      keywords: ['imc infantil', 'calculadora imc niños', 'percentil imc pediatrico'],
    },
    '/bmi-calculator-by-age': {
      name: 'Calculadora de IMC por Edad y Género',
      h1: 'Calculadora de IMC por Edad y Género (Adultos y Niños)',
      metaTitle: 'Calculadora de IMC por Edad y Sexo – Tabla por Décadas | Ultimatrix',
      metaDescription:
        'Calcula tu IMC ajustado por edad y género desde los 2 años hasta adultos mayores.',
      tagline: 'Cambia automáticamente entre percentiles pediátricos y rangos adultos por década.',
      keywords: ['imc por edad', 'calculadora imc por edad y sexo', 'tabla imc edad'],
    },
    '/height-calculator': {
      name: 'Calculadora y Conversor de Altura',
      h1: 'Calculadora de Altura: Pies y Pulgadas a Cm y Estatura Infantil',
      metaTitle: 'Conversor de Altura Pies a Cm y Predictor de Estatura | Ultimatrix',
      metaDescription:
        'Convierte pies y pulgadas a centímetros al instante y predice la estatura adulta infantil con la altura de los padres.',
      tagline: 'Convierte pies/pulgadas a cm y estima la altura adulta futura según los padres.',
      keywords: ['calculadora de altura', 'pies a cm', 'estatura futura niño', 'conversor altura'],
    },
    '/pregnancy-due-date-calculator': {
      name: 'Calculadora de Fecha Probable de Parto',
      h1: 'Calculadora de Embarazo y Fecha de Parto (FUR, Concepción e IVF)',
      metaTitle: 'Calculadora de Fecha de Parto y Semanas de Embarazo | Ultimatrix',
      metaDescription:
        'Calcula tu fecha probable de parto, semana gestacional y trimestres por última regla, concepción o transferencia FIV.',
      tagline: 'Estima la fecha de parto y trimestre por última menstruación, concepción o FIV.',
      keywords: ['calculadora fecha de parto', 'semanas de embarazo', 'calculadora embarazo fiv'],
    },
    '/dog-pregnancy-due-date-calculator': {
      name: 'Calculadora de Gestación Canina',
      h1: 'Calculadora de Embarazo y Parto para Perros',
      metaTitle: 'Calculadora de Embarazo en Perros – Fecha de Parto (63 Días) | Ultimatrix',
      metaDescription:
        'Calcula la fecha probable de parto de tu perra (regla de los 63 días), ventana de parto y semana gestacional.',
      tagline: 'Fecha probable de parto canino, ventana de alumbramiento y seguimiento semanal.',
      keywords: ['embarazo perro calculadora', 'gestacion canina dias', 'fecha parto perra'],
    },
    '/age-calculator': {
      name: 'Calculadora de Edad Exacta',
      h1: 'Calculadora de Edad Exacta por Fecha de Nacimiento',
      metaTitle: 'Calculadora de Edad Cronológica Exacta – Años, Meses y Días | Ultimatrix',
      metaDescription:
        'Calcula tu edad exacta en años, meses, semanas y días desde tu fecha de nacimiento y cuenta regresiva al cumpleaños.',
      tagline: 'Edad exacta en años, meses, días, semanas totales y días para tu cumpleaños.',
      keywords: ['calculadora de edad', 'edad exacta', 'calcular edad por fecha de nacimiento'],
    },
    '/child-age-calculator': {
      name: 'Calculadora de Edad para Bebés y Niños',
      h1: 'Calculadora de Edad de Bebés en Meses, Semanas y Días',
      metaTitle: 'Calculadora de Edad de Bebés – Meses y Semanas Exactas | Ultimatrix',
      metaDescription:
        'Calcula la edad exacta de tu bebé o niño en meses, semanas, días y próximos hitos pediátricos.',
      tagline: 'Edad precisa de bebés y niños para controles pediátricos e hitos de desarrollo.',
      keywords: ['edad bebe en meses', 'calculadora edad infantil', 'meses de bebe'],
    },
    '/date-calculator': {
      name: 'Calculadora de Fechas y Días',
      h1: 'Calculadora de Días Entre Dos Fechas y Suma/Resta',
      metaTitle: 'Calculadora de Fechas – Días Entre Fechas y Sumar Días | Ultimatrix',
      metaDescription:
        'Calcula los días exactos, semanas y meses entre dos fechas o suma y resta días a cualquier calendario.',
      tagline: 'Cuenta días entre fechas y suma o resta días, semanas o meses fácilmente.',
      keywords: ['calculadora de fechas', 'dias entre dos fechas', 'sumar dias a fecha'],
    },
    '/time-duration-calculator': {
      name: 'Calculadora de Duración de Tiempo',
      h1: 'Calculadora de Horas, Minutos y Segundos',
      metaTitle: 'Calculadora de Horas y Duración de Tiempo Online | Ultimatrix',
      metaDescription:
        'Calcula el tiempo transcurrido en horas, minutos y segundos o suma y resta intervalos de horario.',
      tagline: 'Calcula horas trabajadas, duración exacta y suma o resta tiempo.',
      keywords: ['calculadora de horas', 'duracion entre dos horas', 'sumar horas'],
    },
    '/percentage-calculator': {
      name: 'Calculadora de Porcentajes',
      h1: 'Calculadora de Porcentajes Online (3 Modos)',
      metaTitle: 'Calculadora de Porcentajes Online – Calcular % Fácil | Ultimatrix',
      metaDescription:
        'Calcula el X% de Y, qué porcentaje es X de Y, y aumentos o disminuciones porcentuales al instante.',
      tagline: 'Porcentaje de una cantidad, proporción porcentual y variación en porcentaje.',
      keywords: ['calculadora de porcentajes', 'calcular porcentaje', 'porcentaje aumento'],
    },
    '/cgpa-to-percentage-calculator': {
      name: 'Conversor de CGPA a Porcentaje',
      h1: 'Calculadora de CGPA a Porcentaje (Escala 10, 5 y 4)',
      metaTitle: 'Conversor de CGPA a Porcentaje – Escala 10, 5 y 4 | Ultimatrix',
      metaDescription:
        'Convierte tu nota CGPA a porcentaje equivalente usando fórmulas CBSE, universitarias de escala 10, 5 o 4.',
      tagline: 'Convierte promedios CGPA a porcentaje exacto para solicitudes académicas.',
      keywords: ['cgpa a porcentaje', 'convertir cgpa', 'calculadora cgpa'],
    },
    '/gpa-calculator': {
      name: 'Calculadora de GPA Universitario',
      h1: 'Calculadora de GPA Ponderado por Créditos (Escala 4.0)',
      metaTitle: 'Calculadora de GPA Universitario – Escala 4.0 y Ponderado | Ultimatrix',
      metaDescription:
        'Calcula tu GPA semestral y acumulado añadiendo materias, calificaciones y créditos universitarios.',
      tagline: 'Calcula tu promedio GPA por créditos con soporte semestral y acumulado.',
      keywords: ['calculadora gpa', 'calcular promedio universitario', 'gpa escala 4.0'],
    },
    '/high-school-gpa-calculator': {
      name: 'Calculadora de GPA de Secundaria',
      h1: 'Calculadora de GPA de Bachillerato (Regular, Honors y AP)',
      metaTitle: 'Calculadora de GPA de Secundaria y Preparatoria | Ultimatrix',
      metaDescription:
        'Calcula tu GPA de secundaria o bachillerato no ponderado y ponderado para cursos Honors y AP/IB.',
      tagline: 'Promedio escolar regular y ponderado con bonos para cursos Honors y AP/IB.',
      keywords: ['gpa secundaria', 'calculadora gpa bachillerato', 'gpa ponderado ap'],
    },
    '/weight-loss-percentage-calculator': {
      name: 'Calculadora de Porcentaje de Pérdida de Peso',
      h1: 'Calculadora de Porcentaje de Peso Perdido',
      metaTitle: 'Calculadora de Porcentaje de Pérdida de Peso en Kg o Lbs | Ultimatrix',
      metaDescription:
        'Calcula qué porcentaje de peso corporal has perdido desde tu peso inicial al peso actual.',
      tagline: 'Mide tu progreso exacto de pérdida de peso porcentual en kg o libras.',
      keywords: ['porcentaje perdida de peso', 'calcular peso perdido', 'porcentaje adelgazamiento'],
    },
    '/scientific-calculator': {
      name: 'Calculadora Científica Online',
      h1: 'Calculadora Científica Online con Trigonometría y Logaritmos',
      metaTitle: 'Calculadora Científica Online Gratis – Grados y Radianes | Ultimatrix',
      metaDescription:
        'Calculadora científica completa con sen, cos, tan, log, ln, potencias, raíces, factoriales y teclado.',
      tagline: 'Trigonometría, logaritmos, exponenciales, memoria Ans y soporte de teclado.',
      keywords: ['calculadora cientifica online', 'calculadora trigonometrica', 'calculadora radianes'],
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'Calculadora Científica Tipo Casio fx-115ES',
      h1: 'Calculadora Científica Estilo Casio fx-115ES Plus',
      metaTitle: 'Calculadora Científica Estilo Casio fx-115ES Online | Ultimatrix',
      metaDescription:
        'Emulador web inspirado en Casio fx-115ES Plus con fracciones, permutaciones, combinaciones y modos DEG/RAD/GRAD.',
      tagline: 'Diseño técnico con nPr, nCr, fracciones, raíces y modos angulares.',
      keywords: ['calculadora casio online', 'casio fx 115es online', 'calculadora cientifica fracciones'],
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'Calculadora Científica de 12 Dígitos Sharp',
      h1: 'Calculadora Científica y Comercial Sharp de 12 Dígitos',
      metaTitle: 'Calculadora Sharp de 12 Dígitos Online – Alta Precisión | Ultimatrix',
      metaDescription:
        'Calculadora de alta precisión con visor nítido de 12 dígitos, memoria M+/M- y funciones científicas.',
      tagline: 'Pantalla de 12 dígitos con separadores claros, memoria y teclas científicas.',
      keywords: ['calculadora 12 digitos', 'calculadora sharp online', 'calculadora precision'],
    },
    '/discount-calculator': {
      name: 'Calculadora de Descuentos',
      h1: 'Calculadora de Descuentos y Precio Final',
      metaTitle: 'Calculadora de Descuentos Online – Ahorro y Rebajas | Ultimatrix',
      metaDescription:
        'Calcula el precio final y el dinero ahorrado aplicando uno o dos descuentos porcentuales sucesivos.',
      tagline: 'Calcula rebajas simples o descuentos apilados con el monto exacto ahorrado.',
      keywords: ['calculadora de descuentos', 'calcular rebaja', 'precio con descuento'],
    },
    '/discount-calculator-with-tax': {
      name: 'Calculadora de Descuento con Impuestos',
      h1: 'Calculadora de Descuento Más Impuesto (IVA / Sales Tax)',
      metaTitle: 'Calculadora de Descuento con IVA e Impuesto de Venta | Ultimatrix',
      metaDescription:
        'Calcula el total exacto a pagar aplicando descuentos porcentuales primero y sumando IVA o impuesto de venta.',
      tagline: 'Aplica el porcentaje de descuento antes de sumar impuestos de caja.',
      keywords: ['descuento con iva', 'calculadora descuento e impuestos', 'precio final con impuesto'],
    },
    '/emi-calculator': {
      name: 'Calculadora de Préstamo EMI',
      h1: 'Calculadora de Cuota Mensual de Préstamo (EMI)',
      metaTitle: 'Calculadora de Préstamos EMI – Cuota Mensual y Amortización | Ultimatrix',
      metaDescription:
        'Calcula la cuota mensual, intereses totales y tabla de amortización anual para préstamos hipotecarios, auto o personales.',
      tagline: 'Cuota mensual, intereses totales y tabla anual de amortización de préstamos.',
      keywords: ['calculadora prestamo emi', 'cuota mensual prestamo', 'amortizacion prestamo'],
    },
    '/hdfc-emi-calculator': {
      name: 'Calculadora EMI HDFC',
      h1: 'Calculadora EMI de Préstamos HDFC (Hipoteca, Auto y Personal)',
      metaTitle: 'Calculadora EMI Préstamo HDFC – Cuotas e Intereses | Ultimatrix',
      metaDescription:
        'Estima tu cuota mensual EMI para préstamos de vivienda, automóvil o personales con tabla de amortización.',
      tagline: 'Estimador de cuota mensual y calendario de intereses por tipo de préstamo.',
      keywords: ['calculadora hdfc emi', 'simulador prestamo emi', 'cuota hipoteca'],
    },
    '/sip-calculator': {
      name: 'Calculadora de Inversión SIP',
      h1: 'Calculadora de Interés Compuesto e Inversión Mensual (SIP)',
      metaTitle: 'Calculadora SIP e Interés Compuesto Mensual | Ultimatrix',
      metaDescription:
        'Proyecta el valor futuro de tus aportaciones mensuales periódicas con interés compuesto y rentabilidad anual.',
      tagline: 'Proyecta capital invertido, ganancia compuesta y valor total a largo plazo.',
      keywords: ['calculadora sip', 'interes compuesto mensual', 'simulador inversion mensual'],
    },
    '/gst-calculator': {
      name: 'Calculadora de GST / IVA',
      h1: 'Calculadora de Impuesto GST / IVA (Incluido y Excluido)',
      metaTitle: 'Calculadora de IVA y GST Online – Sumar o Desglosar Impuesto | Ultimatrix',
      metaDescription:
        'Añade o extrae IVA / GST de cualquier importe con desglose neto, impuesto total y mitades CGST/SGST.',
      tagline: 'Agrega o desglosa tasas de IVA y GST al instante con base imponible.',
      keywords: ['calculadora iva', 'calculadora gst', 'desglosar iva online'],
    },
    '/compound-interest-calculator': {
      name: 'Calculadora de Interés Compuesto (복리계산기)',
      h1: 'Calculadora de Interés Compuesto Diaria, Mensual y Anual',
      metaTitle: 'Calculadora de Interés Compuesto – Simulador Mensual y Anual | Ultimatrix',
      metaDescription:
        'Calcula el crecimiento con interés compuesto diario, mensual, trimestral o anual con aportaciones mensuales y tabla por año.',
      tagline: 'Simula capital inicial, aportes mensuales, frecuencia de capitalización y tabla anual.',
      keywords: ['calculadora interes compuesto', 'interes compuesto mensual', '복리계산기'],
      faqQuestion: '¿Cómo funciona la fórmula del interés compuesto mensual y diario?',
    },
  },
  ja: {
    '/bmi-calculator': {
      name: 'BMI計算機（オンライン）',
      h1: 'BMI計算機（身長・体重から適正体重を算出）',
      metaTitle: 'BMI計算機（無料・オンライン）– 肥満度と適正体重 | Ultimatrix Calculator',
      metaDescription:
        '身長(cm/ft)と体重(kg/lbs)を入力してBMI値、WHO判定基準、適正体重範囲をリアルタイムに計算します。',
      tagline: '身長と体重からBMI指数と適正体重レンジをリアルタイムで自動計算。',
      keywords: ['bmi計算', 'bmi計算機', '適正体重 計算', '肥満度チェック'],
    },
    '/bmi-calculator/men': {
      name: '男性用BMI計算機',
      h1: '男性用BMI計算機（筋肉量・体脂肪ガイド付き）',
      metaTitle: '男性用BMI計算機 – 適正体重と体脂肪率の目安 | Ultimatrix',
      metaDescription:
        '成人男性向けのBMI計算ツール。筋肉質体型での注意点や男性の適正体脂肪率目安も確認できます。',
      tagline: '男性向けのBMI算出と筋肉量・体脂肪率の参考データ。',
      keywords: ['男性 bmi 計算', 'メンズ bmi', '男性 適正体重'],
    },
    '/bmi-calculator/women': {
      name: '女性用BMI計算機',
      h1: '女性用BMI計算機（年齢・体脂肪ガイド付き）',
      metaTitle: '女性用BMI計算機 – 美容体重と適正範囲 | Ultimatrix',
      metaDescription:
        '女性向けのBMIと適正体重を計算。年齢別の体脂肪率目安もあわせてチェックできます。',
      tagline: '女性向けのBMI算出と年齢別体脂肪レンジの目安。',
      keywords: ['女性 bmi 計算', '女性 適正体重', '美容体重 bmi'],
    },
    '/child-bmi-calculator': {
      name: '子ども・ティーンBMI計算機',
      h1: '子ども・中高生BMI計算機（2歳〜19歳パーセンタイル）',
      metaTitle: '子どもBMI計算機 – 成長パーセンタイル判定（2〜19歳） | Ultimatrix',
      metaDescription:
        '年齢（歳・月齢）と性別から2〜19歳の小児・ティーン向けBMI値とCDCパーセンタイル区分を算出します。',
      tagline: '年齢・月齢・性別に応じた小児BMIパーセンタイル評価。',
      keywords: ['子供 bmi 計算', '小児 bmi パーセンタイル', '中高生 bmi'],
    },
    '/bmi-calculator-by-age': {
      name: '年齢・性別対応BMI計算機',
      h1: '年齢別・男女別BMI計算機（小児〜シニア対応）',
      metaTitle: '年齢別BMI計算機 – 年代別の適正BMI目安 | Ultimatrix',
      metaDescription:
        '2歳からシニアまで年齢に応じて小児パーセンタイルと成人BMI基準を自動切替して判定します。',
      tagline: '年代別の適正BMIと体脂肪率の目安を一画面で確認。',
      keywords: ['年齢別 bmi', '年代別 bmi 計算', '男女別 bmi'],
    },
    '/height-calculator': {
      name: '身長換算・予測計算機',
      h1: '身長計算機（フィート・インチ↔cm変換＆将来身長予測）',
      metaTitle: '身長単位変換（ft/in→cm）＆子どもの将来身長予測 | Ultimatrix',
      metaDescription:
        'フィート・インチとセンチメートル(cm)を双方向変換し、両親の身長から子どもの予測成人身長も算出します。',
      tagline: 'フィート/インチ⇔cm変換と両親の身長からの予測身長計算。',
      keywords: ['身長 変換', 'フィート センチ 変換', '子供 身長 予測'],
    },
    '/pregnancy-due-date-calculator': {
      name: '出産予定日計算機',
      h1: '出産予定日・妊娠週数計算機（最終月経・排卵日・体外受精対応）',
      metaTitle: '出産予定日計算ツール – 最終月経・受精日・IVF胚移植対応 | Ultimatrix',
      metaDescription:
        '最終月経開始日、受精日、体外受精（3日目・5日目・6日目胚移植）から出産予定日と現在の妊娠週数を自動計算。',
      tagline: '最終月経・受精日・IVF胚移植日から予定日と妊娠週数を正確に計算。',
      keywords: ['出産予定日 計算', '妊娠週数 計算', '体外受精 出産予定日'],
    },
    '/dog-pregnancy-due-date-calculator': {
      name: '犬の出産予定日計算機',
      h1: '犬の妊娠期間・出産予定日計算機（63日ルール）',
      metaTitle: '犬の出産予定日計算ツール – 交配日からお産予定日を算出 | Ultimatrix',
      metaDescription:
        '愛犬の交配日から63日ルールに基づく出産予定日、出産可能期間（58〜68日目）、週ごとの成長目安を計算。',
      tagline: '犬の交配日から出産予定日・分娩ウィンドウ・妊娠週数を自動算出。',
      keywords: ['犬 出産予定日 計算', '犬 妊娠期間', '犬 交配 予定日'],
    },
    '/age-calculator': {
      name: '年齢計算機（満年齢・日数）',
      h1: '正確な年齢計算機（生年月日から年・月・日数を算出）',
      metaTitle: '年齢計算ツール – 満年齢・生後日数・次回誕生日カウント | Ultimatrix',
      metaDescription:
        '生年月日から正確な満年齢（年・か月・日）、合計週数・総日数、次の誕生日までの残り日数を計算します。',
      tagline: '生年月日から正確な満年齢と次の誕生日までの日数を瞬時に計算。',
      keywords: ['年齢計算', '満年齢 計算', '生後日数 計算'],
    },
    '/child-age-calculator': {
      name: '赤ちゃん・子ども月齢計算機',
      h1: '赤ちゃん・子ども正確な月齢・週齢計算機',
      metaTitle: '赤ちゃん月齢計算機 – 生後何か月・何週・何日 | Ultimatrix',
      metaDescription:
        '赤ちゃんの生年月日から生後何か月・何週・何日を正確に算出。予防接種や健診の月齢確認に最適です。',
      tagline: '乳幼児健診や発達マイルストーン確認に便利な月齢・週齢ツール。',
      keywords: ['赤ちゃん 月齢 計算', '生後 何日 計算', '子供 月齢'],
    },
    '/date-calculator': {
      name: '日数・日付計算機',
      h1: '日数計算機（2つの日付の差・日数の加算減算）',
      metaTitle: '日数計算ツール – 期間の日数差・日付の足し算引き算 | Ultimatrix',
      metaDescription:
        '開始日と終了日の間の正確な日数・週数・月数を計算し、基準日からの日数加減算も行えます。',
      tagline: '2つの日付間の日数差と、日数・週数・月数の加減算に対応。',
      keywords: ['日数計算', '日付 差 計算', '日付 足し算'],
    },
    '/time-duration-calculator': {
      name: '時間計算機（経過時間・加減算）',
      h1: '時間・分・秒の経過時間計算機',
      metaTitle: '時間計算ツール – 勤務時間・経過時間の自動計算 | Ultimatrix',
      metaDescription:
        '開始時刻と終了時刻の経過時間（時間・分・秒）や時間の足し算・引き算を正確に計算します。',
      tagline: '時刻間の経過時間計算と時間・分・秒の加算・減算。',
      keywords: ['時間計算', '経過時間 計算', '勤務時間 計算'],
    },
    '/percentage-calculator': {
      name: 'パーセント計算機',
      h1: 'パーセント・割合計算機（3つの計算モード）',
      metaTitle: 'パーセント計算機 – 割合・増減率・比率を一発算出 | Ultimatrix',
      metaDescription:
        '「XのY%」「XはYの何%」「増減率（%）」の3パターンをリアルタイムで正確に計算します。',
      tagline: '割合計算、構成比、増減率を3モードで瞬時に算出。',
      keywords: ['パーセント計算', '割合 計算', '増減率 計算'],
    },
    '/cgpa-to-percentage-calculator': {
      name: 'CGPA→パーセント換算機',
      h1: 'CGPA・成績評価パーセント換算計算機（10/5/4段階）',
      metaTitle: 'CGPA パーセント換算ツール – 10段階・4段階対応 | Ultimatrix',
      metaDescription:
        '10段階・5段階・4段階のCGPAスコアを出願書類や履歴書向けのパーセント表記に自動変換します。',
      tagline: '海外出願や就職向けにCGPA成績をパーセントへ正確に変換。',
      keywords: ['cgpa パーセント 変換', '成績 換算', 'gpa 換算'],
    },
    '/gpa-calculator': {
      name: '大学GPA計算機',
      h1: '大学単位加重GPA計算機（4.0スケール対応）',
      metaTitle: 'GPA計算機 – 大学の単位数加重平均を自動算出 | Ultimatrix',
      metaDescription:
        '履修科目ごとの評価と単位数を入力して、学期GPAおよび累積GPAをリアルタイムで算出します。',
      tagline: '単位数に応じた学期GPA・累積GPAを瞬時に計算。',
      keywords: ['gpa 計算', '大学 gpa', '単位 gpa計算機'],
    },
    '/high-school-gpa-calculator': {
      name: '高校GPA計算機',
      h1: '高校GPA計算機（通常・Honors・AP/IB加重対応）',
      metaTitle: '高校GPA計算ツール – 加重・非加重GPA算出 | Ultimatrix',
      metaDescription:
        '高校の通常科目、Honors(+0.5)、AP/IB(+1.0)の重み付けに対応したGPA計算ツールです。',
      tagline: '通常GPAとAP/IB・Honors加算対応の加重GPAを同時表示。',
      keywords: ['高校 gpa 計算', '加重 gpa', 'ap gpa 計算'],
    },
    '/weight-loss-percentage-calculator': {
      name: '減量率（％）計算機',
      h1: 'ダイエット減量パーセント計算機（kg/lbs対応）',
      metaTitle: '減量率計算機 – 体重減少パーセントの計算 | Ultimatrix',
      metaDescription:
        '開始体重と現在体重から減量幅と体重減少率（％）を計算します。ダイエットや健康管理の進捗確認に最適です。',
      tagline: '開始体重からの減量幅と減量パーセントをわかりやすく表示。',
      keywords: ['減量率 計算', '体重 減少率', 'ダイエット パーセント'],
    },
    '/scientific-calculator': {
      name: 'オンライン関数電卓',
      h1: 'オンライン関数電卓（三角関数・対数・度数法/弧度法）',
      metaTitle: '関数電卓（無料オンライン）– sin/cos/tan・対数・キーボード対応 | Ultimatrix',
      metaDescription:
        '三角関数、対数、べき乗、平方根、階乗、DEG/RAD切替、PCキーボード入力に対応した本格オンライン関数電卓。',
      tagline: '三角関数・対数・階乗・Ansメモリ・キーボード操作に対応した高機能電卓。',
      keywords: ['関数電卓 オンライン', 'web関数電卓', '三角関数 電卓'],
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'Casio fx-115ES風関数電卓',
      h1: 'Casio fx-115ES Plus風オンライン関数電卓',
      metaTitle: 'Casio fx-115ES風 関数電卓オンライン – 分数・順列組合せ | Ultimatrix',
      metaDescription:
        '分数入力、nPr/nCr、ルート、DEG/RAD/GRAD角度切替を備えたCasio fx-115ES風の科学電卓。',
      tagline: '分数・nPr/nCr・各種定数を扱えるCasioスタイル関数電卓。',
      keywords: ['casio 関数電卓 オンライン', 'fx 115es', '順列 組合せ 電卓'],
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'Sharp 12桁高機能電卓',
      h1: 'Sharp風12桁・関数＆実務計算機',
      metaTitle: 'Sharp風 12桁オンライン電卓 – 見やすい桁区切り・メモリ機能 | Ultimatrix',
      metaDescription:
        '12桁の高精細表示、M+/M-メモリ、四則演算および関数機能を備えたSharpスタイル電卓。',
      tagline: '視認性の高い12桁表示とメモリ機能を備えた精密電卓。',
      keywords: ['12桁 電卓 オンライン', 'sharp 電卓', '実務電卓'],
    },
    '/discount-calculator': {
      name: '割引・セール計算機',
      h1: '割引価格・％オフ計算機（追加割引対応）',
      metaTitle: '割引計算機 – ○％オフの価格と節約額を計算 | Ultimatrix',
      metaDescription:
        '元の価格と割引率（％オフ）から割引後の支払額と節約額を計算。二重割引にも対応しています。',
      tagline: '1段階・2段階の割引後価格とお得になった金額を即座に表示。',
      keywords: ['割引計算', 'パーセントオフ 計算', 'セール価格 計算'],
    },
    '/discount-calculator-with-tax': {
      name: '割引＋消費税計算機',
      h1: '割引後・税込価格計算機（セール＋税金）',
      metaTitle: '割引＋税込価格計算ツール – 割引後の最終支払額 | Ultimatrix',
      metaDescription:
        '商品に割引を適用した後に消費税や付加価値税を加算した実際のレジ支払総額を計算します。',
      tagline: '値引き後の価格に税率を加えた最終的な支払い総額を算出。',
      keywords: ['割引 税込 計算', 'セール 消費税 計算', '割引後 税金'],
    },
    '/emi-calculator': {
      name: 'ローン返済EMI計算機',
      h1: 'ローン毎月返済額（EMI）・償還表計算機',
      metaTitle: 'ローン返済額（EMI）計算機 – 金利・総返済額シミュレーション | Ultimatrix',
      metaDescription:
        '借入額・年利・返済期間から毎月の返済額(EMI)、総利息額、年次返済スケジュール表を計算します。',
      tagline: '元利均等返済の月額・利息合計・年次償還表をわかりやすく可視化。',
      keywords: ['ローン 計算', '毎月返済額 シミュレーション', 'emi 計算機'],
    },
    '/hdfc-emi-calculator': {
      name: 'HDFCローンEMI計算機',
      h1: 'HDFC住宅・自動車・個人ローンEMI計算機',
      metaTitle: 'HDFCローンEMI計算ツール – 住宅・マイカー・フリーローン | Ultimatrix',
      metaDescription:
        '住宅ローン、自動車ローン、個人ローンの毎月の返済額と年別償還予定表を簡単に試算します。',
      tagline: 'ローン種別ごとの月額EMI試算と元金・利息の内訳グラフ。',
      keywords: ['hdfc emi 計算', '住宅ローン emi', 'マイカーローン 試算'],
    },
    '/sip-calculator': {
      name: '積立投資SIP計算機',
      h1: '毎月積立投資（SIP）・複利運用シミュレーター',
      metaTitle: '積立投資SIP計算機 – 複利リターン将来額シミュレーション | Ultimatrix',
      metaDescription:
        '毎月の積立金額・想定年率リターン・運用期間から将来の資産総額と運用益を自動計算します。',
      tagline: '毎月積立の元本合計・複利運用益・将来資産額をグラフで確認。',
      keywords: ['積立投資 シミュレーション', 'sip 計算機', '複利計算 毎月'],
    },
    '/gst-calculator': {
      name: '消費税・GST計算機',
      h1: '消費税・GST計算機（外税加算・内税逆算）',
      metaTitle: '消費税・GST計算ツール – 税込・税抜を簡単計算 | Ultimatrix',
      metaDescription:
        '金額に対して消費税/GSTを外税で加算、または税込金額から税抜価格と税額を逆算します。',
      tagline: '税抜きからの加算と税込みからの逆算、税率別内訳に対応。',
      keywords: ['消費税 計算', 'gst 計算機', '税込 税抜 逆算'],
    },
    '/compound-interest-calculator': {
      name: '複利計算機（日・月・年複利）',
      h1: '複利計算シミュレーション（毎日・毎月・年複利＆積立対応）',
      metaTitle: '複利計算機 – 日複利・月複利・年複利の運用シミュレーション | Ultimatrix',
      metaDescription:
        '初期元本と毎月の積立額、年利、複利周期（日・月・四半期・年）から将来の複利資産と年次推移表を計算します。',
      tagline: '一括投資と毎月積立の複利成長、72の法則、年次推移表を即時表示。',
      keywords: ['複利計算機', '複利 シミュレーション', '72の法則', '복리계산기'],
      faqQuestion: '複利の計算式と日複利・月複利・年複利の違いは何ですか？',
    },
  },
  fr: {
    '/bmi-calculator': {
      name: "Calculateur d'IMC en Ligne",
      h1: "Calculateur d'IMC en Ligne (Kg, Cm, Lbs et Pieds)",
      metaTitle: "Calculateur d'IMC Gratuit – Indice de Masse Corporelle OMS | Ultimatrix",
      metaDescription:
        "Calculez votre IMC instantanément en kg/cm ou livres/pieds et découvrez votre zone de poids idéal selon l'OMS.",
      tagline: "Indice de Masse Corporelle précis en unités métriques ou impériales.",
      keywords: ['calculateur imc', 'calcul imc gratuit', 'indice de masse corporelle', 'poids ideal'],
    },
    '/bmi-calculator/men': {
      name: "Calculateur d'IMC Homme",
      h1: "Calculateur d'IMC pour Homme avec Masse Musculaire",
      metaTitle: "Calculateur d'IMC Homme – Poids Idéal et Masse Grasse | Ultimatrix",
      metaDescription:
        "Évaluez votre IMC masculin avec contexte de masse musculaire et fourchettes de graisse corporelle.",
      tagline: "IMC adapté aux hommes avec repères de masse musculaire.",
      keywords: ['imc homme', 'calcul imc homme', 'poids ideal homme'],
    },
    '/bmi-calculator/women': {
      name: "Calculateur d'IMC Femme",
      h1: "Calculateur d'IMC pour Femme par Âge et Taille",
      metaTitle: "Calculateur d'IMC Femme – Repères par Âge | Ultimatrix",
      metaDescription:
        "Calculez votre IMC féminin et consultez les plages recommandées de masse grasse selon l'âge.",
      tagline: "Évaluation de l'IMC féminin avec fourchettes de masse grasse par âge.",
      keywords: ['imc femme', 'calcul imc femme', 'poids ideal femme'],
    },
    '/child-bmi-calculator': {
      name: "Calculateur d'IMC Enfant et Ado",
      h1: "Calculateur d'IMC Enfant et Adolescent (2 à 19 Ans)",
      metaTitle: "Calculateur d'IMC Enfant – Percentiles CDC par Âge et Sexe | Ultimatrix",
      metaDescription:
        "Calculez l'IMC pédiatrique et le percentile par âge exact et sexe pour les enfants de 2 à 19 ans.",
      tagline: "Courbe de percentile IMC pédiatrique selon l'âge et le sexe.",
      keywords: ['imc enfant', 'calcul imc ado', 'courbe corpulence enfant'],
    },
    '/bmi-calculator-by-age': {
      name: "Calculateur d'IMC par Âge et Sexe",
      h1: "Calculateur d'IMC par Âge et Sexe (Enfants et Adultes)",
      metaTitle: "Calculateur d'IMC par Âge – Seuils Pédiatriques et Adultes | Ultimatrix",
      metaDescription:
        "Calculez l'IMC selon votre âge (2 à 100 ans) avec bascule automatique entre percentiles enfants et repères adultes.",
      tagline: "Interprétation automatique de l'IMC selon l'âge et le sexe.",
      keywords: ['imc par age', 'calculateur imc age sexe', 'imc senior'],
    },
    '/height-calculator': {
      name: 'Calculateur et Convertisseur de Taille',
      h1: 'Convertisseur de Taille (Pieds/Pouces en Cm) et Taille Future',
      metaTitle: 'Convertisseur Taille Pieds en Cm & Prédiction Enfant | Ultimatrix',
      metaDescription:
        'Convertissez pieds et pouces en centimètres et estimez la taille adulte future d’un enfant à partir des parents.',
      tagline: 'Conversion pieds/pouces ↔ cm et prédiction de taille adulte.',
      keywords: ['convertisseur taille cm', 'pieds pouces en cm', 'taille future enfant'],
    },
    '/pregnancy-due-date-calculator': {
      name: "Calculateur de Date d'Accouchement",
      h1: "Calculateur de Grossesse et Date d'Accouchement (DDR, FIV)",
      metaTitle: "Calculateur Date d'Accouchement & Semaines de Grossesse | Ultimatrix",
      metaDescription:
        "Estimez votre date prévue d'accouchement, semaine de grossesse et trimestres par DDR, conception ou transfert FIV.",
      tagline: "Date prévue d'accouchement par dernières règles, conception ou FIV.",
      keywords: ['calcul date accouchement', 'semaine de grossesse', 'calendrier grossesse fiv'],
    },
    '/dog-pregnancy-due-date-calculator': {
      name: 'Calculateur Gestation Chienne',
      h1: 'Calculateur de Gestation et Mise Bas pour Chien',
      metaTitle: 'Calculateur Gestation Chienne – Date de Mise Bas (63 Jours) | Ultimatrix',
      metaDescription:
        'Calculez la date probable de mise bas de votre chienne (63 jours) et suivez le développement semaine par semaine.',
      tagline: 'Date prévue de mise bas canine, fenêtre probable et suivi hebdomadaire.',
      keywords: ['gestation chienne calcul', 'date mise bas chien', 'grossesse chienne jours'],
    },
    '/age-calculator': {
      name: "Calculateur d'Âge Exact",
      h1: "Calculateur d'Âge Exact par Date de Naissance",
      metaTitle: "Calculateur d'Âge Chronologique – Ans, Mois et Jours | Ultimatrix",
      metaDescription:
        "Calculez votre âge exact en années, mois, semaines et jours et le compte à rebours jusqu'au prochain anniversaire.",
      tagline: "Âge précis en années, mois, jours et décompte du prochain anniversaire.",
      keywords: ['calculateur age', 'calculer mon age exact', 'nombre de jours vecus'],
    },
    '/child-age-calculator': {
      name: "Calculateur d'Âge Bébé et Enfant",
      h1: "Calculateur d'Âge Bébé en Mois, Semaines et Jours",
      metaTitle: "Calculateur d'Âge Bébé – Mois et Semaines Exactes | Ultimatrix",
      metaDescription:
        "Trouvez l'âge exact d'un bébé en mois révolus, semaines et jours pour le suivi pédiatrique.",
      tagline: "Âge exact du nourrisson en mois, semaines et jours.",
      keywords: ['age bebe en mois', 'calculateur age bebe', 'age enfant semaines'],
    },
    '/date-calculator': {
      name: 'Calculateur de Dates et Jours',
      h1: 'Calculateur de Nombre de Jours Entre Deux Dates',
      metaTitle: 'Calculateur de Dates – Écart en Jours et Ajout/Retrait | Ultimatrix',
      metaDescription:
        'Calculez les jours entre deux dates ou ajoutez et retranchez des jours, semaines ou mois sur le calendrier.',
      tagline: 'Nombre exact de jours entre deux dates plus ajout ou retrait de durée.',
      keywords: ['calculateur de date', 'jours entre deux dates', 'ajouter jours date'],
    },
    '/time-duration-calculator': {
      name: 'Calculateur de Durée et Heures',
      h1: 'Calculateur de Temps et Heures Écoulées',
      metaTitle: 'Calculateur de Durée – Heures, Minutes et Secondes | Ultimatrix',
      metaDescription:
        'Calculez la durée exacte entre deux horaires ou additionnez et soustrayez des heures, minutes et secondes.',
      tagline: 'Heures écoulées entre deux horaires et addition/soustraction de temps.',
      keywords: ['calculateur heures', 'duree entre deux heures', 'additionner heures'],
    },
    '/percentage-calculator': {
      name: 'Calculateur de Pourcentage',
      h1: 'Calculateur de Pourcentage en Ligne (3 Modes)',
      metaTitle: 'Calculateur de Pourcentage Gratuit – Hausse, Baisse et Part | Ultimatrix',
      metaDescription:
        'Calculez X % de Y, quelle proportion représente X de Y et le pourcentage de variation instantanément.',
      tagline: 'Pourcentage d’un montant, ratio en % et variation en pourcentage.',
      keywords: ['calculateur pourcentage', 'calculer pourcentage', 'variation pourcentage'],
    },
    '/cgpa-to-percentage-calculator': {
      name: 'Convertisseur CGPA en Pourcentage',
      h1: 'Convertisseur CGPA en Pourcentage (Échelles 10, 5 et 4)',
      metaTitle: 'Convertisseur CGPA en Pourcentage – Échelle 10, 5 et 4 | Ultimatrix',
      metaDescription:
        'Convertissez votre moyenne CGPA en pourcentage équivalent pour vos candidatures universitaires.',
      tagline: 'Conversion instantanée de notes CGPA vers des équivalents en pourcentage.',
      keywords: ['cgpa en pourcentage', 'convertisseur cgpa', 'calcul note pourcentage'],
    },
    '/gpa-calculator': {
      name: 'Calculateur de GPA Universitaire',
      h1: 'Calculateur de GPA Pondéré par Crédits (Échelle 4.0)',
      metaTitle: 'Calculateur de GPA Universitaire – Moyenne Pondérée 4.0 | Ultimatrix',
      metaDescription:
        'Calculez votre moyenne GPA semestrielle et cumulative en saisissant vos cours, notes et crédits.',
      tagline: 'Calcul rapide du GPA pondéré sur 4.0 avec moyenne cumulative.',
      keywords: ['calculateur gpa', 'moyenne gpa 4.0', 'calcul gpa universite'],
    },
    '/high-school-gpa-calculator': {
      name: 'Calculateur GPA Lycée',
      h1: 'Calculateur de GPA Lycée (Standard, Honors et AP/IB)',
      metaTitle: 'Calculateur GPA Lycée – Pondéré Honors et AP/IB | Ultimatrix',
      metaDescription:
        'Calculez votre GPA lycée non pondéré et pondéré avec bonus Honors (+0.5) et AP/IB (+1.0).',
      tagline: 'GPA lycée standard et pondéré pour dossiers scolaires internationaux.',
      keywords: ['gpa lycee', 'calculateur gpa pondere', 'notes bac gpa'],
    },
    '/weight-loss-percentage-calculator': {
      name: 'Calculateur de Perte de Poids (%)',
      h1: 'Calculateur de Pourcentage de Perte de Poids',
      metaTitle: 'Calculateur Pourcentage Perte de Poids (Kg / Lbs) | Ultimatrix',
      metaDescription:
        'Calculez exactement le pourcentage de poids corporel perdu par rapport à votre poids initial.',
      tagline: 'Suivi précis du poids perdu et du pourcentage de progression.',
      keywords: ['pourcentage perte de poids', 'calcul perte de poids', 'suivi minceur %'],
    },
    '/scientific-calculator': {
      name: 'Calculatrice Scientifique en Ligne',
      h1: 'Calculatrice Scientifique en Ligne (Trigonométrie & Log)',
      metaTitle: 'Calculatrice Scientifique Gratuite – Degrés & Radians | Ultimatrix',
      metaDescription:
        'Calculatrice scientifique complète avec sin, cos, tan, log, ln, puissances, racines et clavier physique.',
      tagline: 'Trigonométrie, logarithmes, factorielles, mémoire Ans et clavier.',
      keywords: ['calculatrice scientifique en ligne', 'calculatrice trigo', 'calculatrice radians'],
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'Calculatrice Scientifique Style Casio fx-115ES',
      h1: 'Calculatrice Scientifique Style Casio fx-115ES Plus',
      metaTitle: 'Calculatrice Casio fx-115ES en Ligne – Fractions & nPr/nCr | Ultimatrix',
      metaDescription:
        'Calculatrice inspirée de la Casio fx-115ES avec fractions, permutations, combinaisons et modes DEG/RAD/GRAD.',
      tagline: 'Ergonomie Casio avec fractions, nPr/nCr et modes angulaires.',
      keywords: ['calculatrice casio en ligne', 'casio fx 115es', 'calculatrice fractions'],
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'Calculatrice 12 Chiffres Sharp',
      h1: 'Calculatrice Scientifique et Bureau Sharp 12 Chiffres',
      metaTitle: 'Calculatrice Sharp 12 Chiffres en Ligne – Haute Précision | Ultimatrix',
      metaDescription:
        'Affichage grand format à 12 chiffres, mémoire M+/M- et touches scientifiques inspirées des modèles Sharp.',
      tagline: 'Écran haute lisibilité 12 chiffres et touches mémoire dédiées.',
      keywords: ['calculatrice 12 chiffres', 'calculatrice sharp en ligne', 'calculatrice bureau'],
    },
    '/discount-calculator': {
      name: 'Calculateur de Remise et Soldes',
      h1: 'Calculateur de Réduction et Prix Soldé',
      metaTitle: 'Calculateur de Pourcentage de Réduction – Soldes | Ultimatrix',
      metaDescription:
        'Calculez instantanément le prix après remise simple ou double réduction cumulée et vos économies.',
      tagline: 'Prix final après solde simple ou double et montant économisé.',
      keywords: ['calculateur remise', 'calculer reduction pourcentage', 'prix solde'],
    },
    '/discount-calculator-with-tax': {
      name: 'Calculateur de Remise avec TVA',
      h1: 'Calculateur de Réduction et Taxe (TVA / Sales Tax)',
      metaTitle: 'Calculateur de Remise avec TVA et Taxe Incluse | Ultimatrix',
      metaDescription:
        'Appliquez la réduction en pourcentage puis ajoutez la TVA ou taxe de vente pour connaître le total en caisse.',
      tagline: 'Calcule le prix remisé avant d’ajouter la TVA ou taxe locale.',
      keywords: ['calcul remise avec tva', 'prix solde ttc', 'calculateur taxe reduction'],
    },
    '/emi-calculator': {
      name: 'Calculateur de Mensualité de Prêt (EMI)',
      h1: 'Calculateur de Mensualité et Amortissement de Prêt (EMI)',
      metaTitle: 'Calculateur de Prêt EMI – Mensualités et Tableau Annuel | Ultimatrix',
      metaDescription:
        'Estimez vos mensualités de crédit immobilier, auto ou personnel, le coût total des intérêts et le tableau annuel.',
      tagline: 'Mensualité, coût total des intérêts et tableau d’amortissement annuel.',
      keywords: ['calculateur pret mensualite', 'simulateur credit emi', 'tableau amortissement'],
    },
    '/hdfc-emi-calculator': {
      name: 'Calculateur EMI Prêt HDFC',
      h1: 'Calculateur EMI HDFC (Immobilier, Auto et Personnel)',
      metaTitle: 'Calculateur EMI HDFC – Mensualités et Amortissement | Ultimatrix',
      metaDescription:
        'Simulez vos mensualités EMI par type de prêt avec graphique capital/intérêts et échéancier annuel.',
      tagline: 'Estimation des mensualités et intérêts pour prêts immobiliers, auto et perso.',
      keywords: ['hdfc emi calculateur', 'simulateur pret immobilier', 'mensualite credit'],
    },
    '/sip-calculator': {
      name: "Calculateur d'Investissement SIP",
      h1: 'Calculateur d’Épargne Programmée (SIP) et Intérêts Composés',
      metaTitle: 'Calculateur SIP et Intérêts Composés Mensuels | Ultimatrix',
      metaDescription:
        'Projetez le capital futur de vos versements mensuels réguliers grâce aux intérêts composés.',
      tagline: 'Simulation du capital investi et des intérêts composés dans le temps.',
      keywords: ['calculateur sip', 'interets composes mensuels', 'simulateur epargne'],
    },
    '/gst-calculator': {
      name: 'Calculateur de TVA / GST',
      h1: 'Calculateur de Taxe GST / TVA (HT ↔ TTC)',
      metaTitle: 'Calculateur TVA et GST – Ajouter ou Extraire la Taxe | Ultimatrix',
      metaDescription:
        'Ajoutez la TVA/GST à un prix HT ou extrayez le montant hors taxe à partir du prix TTC instantanément.',
      tagline: 'Conversion HT vers TTC et extraction de taxe avec détail net.',
      keywords: ['calculateur tva', 'calculateur gst', 'ht en ttc'],
    },
    '/compound-interest-calculator': {
      name: 'Calculateur d’Intérêts Composés',
      h1: 'Calculateur d’Intérêts Composés (Journalier, Mensuel, Annuel)',
      metaTitle: 'Calculateur d’Intérêts Composés en Ligne – Simulation | Ultimatrix',
      metaDescription:
        'Calculez la croissance de votre capital avec intérêts composés quotidiens, mensuels ou annuels et versements réguliers.',
      tagline: 'Capital initial, versements mensuels, fréquence et tableau annuel.',
      keywords: ['calculateur interets composes', 'interet compose mensuel', '복리계산기'],
      faqQuestion: 'Comment calculer les intérêts composés quotidiens, mensuels et annuels ?',
    },
  },
  de: {
    '/bmi-calculator': {
      name: 'BMI-Rechner Online',
      h1: 'BMI-Rechner Online (Kg, Cm, Pfund & Fuß)',
      metaTitle: 'BMI-Rechner Kostenlos – Body-Mass-Index & Idealgewicht | Ultimatrix',
      metaDescription:
        'Berechnen Sie Ihren Body-Mass-Index (BMI) sofort in kg/cm oder lbs/ft inklusive WHO-Kategorie und Idealgewicht.',
      tagline: 'Sofortiger Body-Mass-Index mit gesundem Gewichtsbereich nach WHO.',
      keywords: ['bmi rechner', 'body mass index berechnen', 'idealgewicht rechner'],
    },
    '/bmi-calculator/men': {
      name: 'BMI-Rechner für Männer',
      h1: 'BMI-Rechner für Männer mit Muskelmasse-Kontext',
      metaTitle: 'BMI-Rechner Männer – Muskelmasse & Körperfett | Ultimatrix',
      metaDescription:
        'Spezieller BMI-Rechner für Männer inklusive Hinweisen zu Muskelmasse und gesundem Körperfettanteil.',
      tagline: 'BMI-Auswertung für Männer mit Muskel- und Körperfett-Richtwerten.',
      keywords: ['bmi rechner männer', 'bmi mann', 'normalgewicht mann'],
    },
    '/bmi-calculator/women': {
      name: 'BMI-Rechner für Frauen',
      h1: 'BMI-Rechner für Frauen nach Alter & Größe',
      metaTitle: 'BMI-Rechner Frauen – Idealgewicht & Altersrichtwerte | Ultimatrix',
      metaDescription:
        'Berechnen Sie den weiblichen BMI und vergleichen Sie empfohlene Körperfettbereiche nach Lebensalter.',
      tagline: 'BMI-Bewertung für Frauen mit altersabhängigen Körperfett-Richtwerten.',
      keywords: ['bmi rechner frauen', 'bmi frau', 'idealgewicht frau'],
    },
    '/child-bmi-calculator': {
      name: 'Kinder- & Jugend-BMI-Rechner',
      h1: 'BMI-Rechner für Kinder & Jugendliche (2–19 Jahre)',
      metaTitle: 'Kinder BMI Rechner – Perzentile nach Alter & Geschlecht | Ultimatrix',
      metaDescription:
        'Berechnen Sie den exakten Kinder-BMI und das CDC-Perzentil für Jungen und Mädchen von 2 bis 19 Jahren.',
      tagline: 'Pädiatrische BMI-Perzentile exakt nach Jahren, Monaten und Geschlecht.',
      keywords: ['kinder bmi rechner', 'bmi perzentile kinder', 'jugend bmi'],
    },
    '/bmi-calculator-by-age': {
      name: 'BMI-Rechner nach Alter & Geschlecht',
      h1: 'BMI-Rechner nach Alter und Geschlecht (Kinder bis Senioren)',
      metaTitle: 'BMI-Rechner nach Alter – Tabelle nach Lebensdekaden | Ultimatrix',
      metaDescription:
        'Automatische Umschaltung zwischen Kinder-Perzentilen und altersangepassten Erwachsenen-BMI-Bereichen.',
      tagline: 'Altersabhängige BMI-Auswertung über alle Lebensjahrzehnte hinweg.',
      keywords: ['bmi nach alter', 'bmi tabelle alter geschlecht', 'bmi senioren'],
    },
    '/height-calculator': {
      name: 'Körpergrößen-Rechner & Umrechner',
      h1: 'Größenrechner: Fuß & Zoll in Cm und Kindergröße vorhersagen',
      metaTitle: 'Größenumrechner Fuß in Cm & Kindergröße Berechnen | Ultimatrix',
      metaDescription:
        'Rechnen Sie Fuß/Zoll sofort in Zentimeter um und schätzen Sie die Erwachsenengröße von Kindern anhand der Eltern.',
      tagline: 'Umrechner ft/in ↔ cm plus Schätzung der zukünftigen Erwachsenengröße.',
      keywords: ['körpergröße umrechnen', 'fuß zoll in cm', 'kindergröße berechnen'],
    },
    '/pregnancy-due-date-calculator': {
      name: 'Geburtstermin-Rechner',
      h1: 'Schwangerschafts- & Geburtstermin-Rechner (Letzte Periode & IVF)',
      metaTitle: 'Geburtsterminrechner – SSW, Trimester & IVF Transfer | Ultimatrix',
      metaDescription:
        'Berechnen Sie voraussichtlichen Geburtstermin, aktuelle Schwangerschaftswoche (SSW) nach Regel, Zeugung oder IVF.',
      tagline: 'Geburtstermin und SSW nach letzter Periode, Empfängnis oder IVF-Transfer.',
      keywords: ['geburtstermin rechner', 'schwangerschaftswoche berechnen', 'ivf geburtstermin'],
    },
    '/dog-pregnancy-due-date-calculator': {
      name: 'Trächtigkeitsrechner Hund',
      h1: 'Hunde-Trächtigkeits- und Wurftermin-Rechner',
      metaTitle: 'Trächtigkeitsrechner Hündin – Wurftermin (63 Tage) | Ultimatrix',
      metaDescription:
        'Berechnen Sie den voraussichtlichen Wurftermin (63-Tage-Regel), das Geburtsfenster und den Wochenplan Ihrer Hündin.',
      tagline: 'Voraussichtlicher Wurftermin und wöchentliche Trächtigkeits-Meilensteine.',
      keywords: ['trächtigkeitsrechner hund', 'wurftermin berechnen', 'hündin tragzeit'],
    },
    '/age-calculator': {
      name: 'Altersrechner (Exaktes Alter)',
      h1: 'Exakter Altersrechner nach Geburtsdatum',
      metaTitle: 'Altersrechner – Jahre, Monate, Tage & Countdown | Ultimatrix',
      metaDescription:
        'Ermitteln Sie Ihr genaues Alter in Jahren, Monaten, Wochen und Tagen sowie die Tage bis zum nächsten Geburtstag.',
      tagline: 'Genaues chronologisches Alter plus Geburtstags-Countdown.',
      keywords: ['altersrechner', 'exaktes alter berechnen', 'wie alt bin ich in tagen'],
    },
    '/child-age-calculator': {
      name: 'Baby- & Kinderalter-Rechner',
      h1: 'Baby- & Kleinkindalter-Rechner in Monaten, Wochen & Tagen',
      metaTitle: 'Babyalter Rechner – Monate, Wochen & Tage exakt | Ultimatrix',
      metaDescription:
        'Berechnen Sie das exakte Alter Ihres Babys in Monaten, Lebenswochen und Tagen für U-Untersuchungen.',
      tagline: 'Lebensmonate, Wochen und Tage exakt berechnet für Eltern und Pädiatrie.',
      keywords: ['babyalter rechner', 'lebenswochen baby berechnen', 'monate rechner baby'],
    },
    '/date-calculator': {
      name: 'Datumsrechner (Tage zählen)',
      h1: 'Datumsrechner – Tage zwischen zwei Daten berechnen',
      metaTitle: 'Datumsrechner Online – Tage zählen & Datum addieren | Ultimatrix',
      metaDescription:
        'Berechnen Sie die genaue Anzahl an Tagen zwischen zwei Daten oder addieren/subtrahieren Sie Tage und Wochen.',
      tagline: 'Tagesdifferenz zwischen zwei Daten sowie Datumsaddition und -subtraktion.',
      keywords: ['datumsrechner', 'tage zwischen zwei daten', 'tage zu datum addieren'],
    },
    '/time-duration-calculator': {
      name: 'Zeitdauer- & Stundenrechner',
      h1: 'Zeitdauer-Rechner (Stunden, Minuten & Sekunden)',
      metaTitle: 'Zeitdauer-Rechner – Arbeitszeit & Zeitspanne berechnen | Ultimatrix',
      metaDescription:
        'Berechnen Sie die verstrichene Zeit zwischen zwei Uhrzeiten oder addieren und subtrahieren Sie Zeitwerte.',
      tagline: 'Exakte Stunden-, Minuten- und Sekundendifferenz inklusive Zeitaddition.',
      keywords: ['zeitdauer rechner', 'stundenrechner', 'arbeitszeit berechnen'],
    },
    '/percentage-calculator': {
      name: 'Prozentrechner Online',
      h1: 'Prozentrechner Online (3 Berechnungsmodi)',
      metaTitle: 'Prozentrechner Kostenlos – Prozentwert & Veränderung | Ultimatrix',
      metaDescription:
        'Berechnen Sie X% von Y, den Prozentanteil von X an Y sowie prozentuale Steigerungen oder Rabatte.',
      tagline: 'Prozentwert, Prozentsatz und prozentuale Zu-/Abnahme sofort berechnet.',
      keywords: ['prozentrechner', 'prozent berechnen', 'prozentuale steigerung'],
    },
    '/cgpa-to-percentage-calculator': {
      name: 'CGPA-zu-Prozent-Umrechner',
      h1: 'CGPA in Prozent umrechnen (10er-, 5er- & 4er-Skala)',
      metaTitle: 'CGPA in Prozent Umrechner – Uni-Noten umrechnen | Ultimatrix',
      metaDescription:
        'Wandeln Sie Ihren CGPA-Notendurchschnitt nach gängigen 10-, 5- und 4-Punkte-Skalen in Prozent um.',
      tagline: 'Schnelle Umrechnung akademischer CGPA-Noten in Prozentwerte.',
      keywords: ['cgpa in prozent', 'noten umrechner prozent', 'cgpa rechner'],
    },
    '/gpa-calculator': {
      name: 'Universitäts-GPA-Rechner',
      h1: 'Kreditgewichteter GPA-Rechner (4.0-Skala)',
      metaTitle: 'GPA-Rechner Studium – Gewichteter Notendurchschnitt 4.0 | Ultimatrix',
      metaDescription:
        'Berechnen Sie Ihren Semester- und Gesamt-GPA anhand Ihrer Kurse, Noten und Credit Points.',
      tagline: 'Gewichtete GPA-Berechnung auf der 4.0-Skala nach Credit-Stunden.',
      keywords: ['gpa rechner', 'notendurchschnitt 4.0', 'studium gpa berechnen'],
    },
    '/high-school-gpa-calculator': {
      name: 'Schul-GPA-Rechner (High School)',
      h1: 'High-School-GPA-Rechner (Standard, Honors & AP/IB)',
      metaTitle: 'High School GPA Rechner – Gewichtet & Ungewichtet | Ultimatrix',
      metaDescription:
        'Berechnen Sie Ihren ungewichteten und gewichteten High-School-GPA mit Bonus für Honors und AP/IB-Kurse.',
      tagline: 'Standard- und gewichteter GPA für Schulzeugnisse und Bewerbungen.',
      keywords: ['high school gpa rechner', 'gewichteter gpa', 'ap kurs gpa'],
    },
    '/weight-loss-percentage-calculator': {
      name: 'Gewichtsverlust-Prozentrechner',
      h1: 'Gewichtsverlust in Prozent berechnen',
      metaTitle: 'Gewichtsverlust Prozent Rechner – Abnehmerfolg in % | Ultimatrix',
      metaDescription:
        'Berechnen Sie, wie viel Prozent Ihres Ausgangsgewichts Sie in Kilogramm oder Pfund bereits abgenommen haben.',
      tagline: 'Präzise Berechnung des relativen Gewichtsverlusts in Prozent.',
      keywords: ['gewichtsverlust prozent', 'abnehmen prozent rechner', 'prozent abgenommen'],
    },
    '/scientific-calculator': {
      name: 'Wissenschaftlicher Taschenrechner',
      h1: 'Wissenschaftlicher Online-Taschenrechner (Trigo & Log)',
      metaTitle: 'Wissenschaftlicher Rechner Online – Sinus, Log & Bogenmaß | Ultimatrix',
      metaDescription:
        'Kostenloser wissenschaftlicher Rechner mit sin, cos, tan, log, ln, Potenzen, Fakultät und Tastatursteuerung.',
      tagline: 'Trigonometrie, Logarithmen, Ans-Speicher und vollständige Tastatureingabe.',
      keywords: ['wissenschaftlicher taschenrechner', 'online taschenrechner mathe', 'sin cos tan rechner'],
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'Casio fx-115ES Taschenrechner-Stil',
      h1: 'Wissenschaftlicher Rechner im Casio fx-115ES Plus Stil',
      metaTitle: 'Casio fx-115ES Online-Rechner – Brüche & nPr/nCr | Ultimatrix',
      metaDescription:
        'Online-Rechner im Stil des Casio fx-115ES Plus mit Bruchrechnung, Kombinationen (nCr/nPr) und DEG/RAD/GRAD.',
      tagline: 'Schul- und Uni-Layout mit Brüchen, nPr/nCr und Winkelmodi.',
      keywords: ['casio taschenrechner online', 'casio fx 115es', 'bruchrechner wissenschaftlich'],
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'Sharp 12-Stellen Rechner',
      h1: '12-stelliger Wissenschaftlicher & Büro-Rechner (Sharp-Stil)',
      metaTitle: 'Sharp 12-Stellen Online-Rechner – Hohe Präzision | Ultimatrix',
      metaDescription:
        'Klar ablesbares 12-stelliges Display mit Tausendertrennzeichen, M+/M- Speicher und wissenschaftlichen Tasten.',
      tagline: 'Gestochen scharfe 12-Stellen-Anzeige mit Speicher- und Mathefunktionen.',
      keywords: ['12 stellen taschenrechner', 'sharp rechner online', 'präzisionsrechner'],
    },
    '/discount-calculator': {
      name: 'Rabattrechner Online',
      h1: 'Rabattrechner – Endpreis & Ersparnis berechnen',
      metaTitle: 'Rabattrechner Kostenlos – Prozentrabatt & Endpreis | Ultimatrix',
      metaDescription:
        'Berechnen Sie sofort den reduzierten Kaufpreis und Ihre Ersparnis bei einfachen oder doppelten Rabatten.',
      tagline: 'Einzelrabatt und gestapelte Doppelrabatte mit Ersparnis auf einen Blick.',
      keywords: ['rabattrechner', 'prozent rabatt berechnen', 'preis nach rabatt'],
    },
    '/discount-calculator-with-tax': {
      name: 'Rabattrechner mit MwSt.',
      h1: 'Rabattrechner inklusive Mehrwertsteuer (MwSt. / Tax)',
      metaTitle: 'Rabattrechner mit MwSt. – Endbetrag an der Kasse | Ultimatrix',
      metaDescription:
        'Zieht zuerst den prozentualen Rabatt ab und addiert anschließend die Mehrwertsteuer für den echten Endpreis.',
      tagline: 'Berechnet Rabatt vor Steuern und den finalen Brutto-Kassenbetrag.',
      keywords: ['rabatt mit mehrwertsteuer', 'rabatt brutto netto', 'steuer rabatt rechner'],
    },
    '/emi-calculator': {
      name: 'Kreditrate (EMI) Rechner',
      h1: 'Kredit- & Tilgungsrechner (Monatliche Rate & Zinsen)',
      metaTitle: 'Kreditrechner Online – Monatliche Rate & Tilgungsplan | Ultimatrix',
      metaDescription:
        'Berechnen Sie monatliche Kreditrate, Gesamtzinsen und den jährlichen Tilgungsplan für Bau-, Auto- oder Privatkredite.',
      tagline: 'Monatsrate, Gesamtzinsbelastung und jährlicher Tilgungsplan.',
      keywords: ['kreditrechner', 'monatliche kreditrate', 'tilgungsplan rechner'],
    },
    '/hdfc-emi-calculator': {
      name: 'HDFC Kredit-EMI-Rechner',
      h1: 'HDFC Kredit-EMI-Rechner (Bau-, Auto- & Privatkredit)',
      metaTitle: 'HDFC EMI Rechner – Monatsrate & Tilgungsübersicht | Ultimatrix',
      metaDescription:
        'Schätzen Sie monatliche Kreditraten und Zinskosten nach Darlehensart inklusive Jahres-Tilgungsplan.',
      tagline: 'Kreditraten-Schätzer mit Zins-Tilgungs-Verhältnis nach Kreditart.',
      keywords: ['hdfc emi rechner', 'darlehensrechner', 'kreditrate schätzen'],
    },
    '/sip-calculator': {
      name: 'Sparplan- & Zinseszinsrechner (SIP)',
      h1: 'Monatlicher Sparplan-Rechner (SIP & Zinseszins)',
      metaTitle: 'SIP- & Sparplanrechner – Zinseszins monatlich berechnen | Ultimatrix',
      metaDescription:
        'Berechnen Sie das Endvermögen regelmäßiger monatlicher Sparraten inklusive Zinseszinseffekt über Jahre.',
      tagline: 'Langfristige Renditeprojektion für monatliche Investment-Sparpläne.',
      keywords: ['sparplan rechner', 'zinseszins rechner monatlich', 'sip rechner'],
    },
    '/gst-calculator': {
      name: 'MwSt.- & GST-Steuerrechner',
      h1: 'Mehrwertsteuer- & GST-Rechner (Brutto ↔ Netto)',
      metaTitle: 'MwSt. & GST Rechner – Steuer aufschlagen oder abziehen | Ultimatrix',
      metaDescription:
        'Berechnen Sie im Handumdrehen Nettobetrag, Bruttobetrag und Steueranteil bei jedem Steuersatz.',
      tagline: 'Steuer auf Nettobeträge aufschlagen oder aus Bruttobeträgen herausrechnen.',
      keywords: ['mehrwertsteuer rechner', 'brutto netto rechner', 'gst steuerrechner'],
    },
    '/compound-interest-calculator': {
      name: 'Zinseszinsrechner',
      h1: 'Zinseszinsrechner (Täglich, Monatlich, Jährlich)',
      metaTitle: 'Zinseszinsrechner Online – Sparplan & 72er-Regel | Ultimatrix',
      metaDescription:
        'Berechnen Sie Ihr Endkapital mit Zinseszins bei täglicher, monatlicher oder jährlicher Verzinsung samt Jahrestabelle.',
      tagline: 'Startkapital, monatliche Sparrate, Zinsintervall und Jahresübersicht.',
      keywords: ['zinseszinsrechner', 'zinseszins berechnen', '72er regel', '복리계산기'],
      faqQuestion: 'Wie berechnet man den Zinseszins bei monatlicher oder täglicher Gutschrift?',
    },
  },
  pt: {
    '/bmi-calculator': {
      name: 'Calculadora de IMC Online',
      h1: 'Calculadora de IMC Online (Kg, Cm, Libras e Pés)',
      metaTitle: 'Calculadora de IMC Grátis – Peso Ideal OMS | Ultimatrix Calculator',
      metaDescription:
        'Calcule seu Índice de Massa Corporal (IMC) na hora em kg/cm ou libras e veja sua faixa de peso saudável.',
      tagline: 'Índice de Massa Corporal preciso em unidades métricas ou imperiais.',
      keywords: ['calculadora imc', 'calcular imc online', 'indice de massa corporal', 'peso ideal'],
    },
    '/bmi-calculator/men': {
      name: 'Calculadora de IMC Masculino',
      h1: 'Calculadora de IMC para Homens por Idade e Altura',
      metaTitle: 'Calculadora de IMC Masculino – Massa Muscular | Ultimatrix',
      metaDescription:
        'Avalie o IMC masculino com contexto de massa muscular e faixas saudáveis de gordura corporal.',
      tagline: 'Análise de IMC para homens considerando massa magra e composição corporal.',
      keywords: ['imc masculino', 'calculadora imc homem', 'peso ideal homem'],
    },
    '/bmi-calculator/women': {
      name: 'Calculadora de IMC Feminino',
      h1: 'Calculadora de IMC para Mulheres por Idade e Altura',
      metaTitle: 'Calculadora de IMC Feminino – Gordura Corporal | Ultimatrix',
      metaDescription:
        'Calcule o IMC feminino e confira referências saudáveis de gordura corporal por faixa etária.',
      tagline: 'Avaliação do IMC para mulheres com referências de gordura por idade.',
      keywords: ['imc feminino', 'calculadora imc mulher', 'peso ideal mulher'],
    },
    '/child-bmi-calculator': {
      name: 'Calculadora de IMC Infantil',
      h1: 'Calculadora de IMC Infantil e Juvenil (2 a 19 Anos)',
      metaTitle: 'Calculadora de IMC Infantil – Percentis CDC | Ultimatrix',
      metaDescription:
        'Calcule o IMC e o percentil pediátrico exato por idade, meses e sexo para crianças e adolescentes.',
      tagline: 'Percentil de IMC infantil conforme idade, sexo e tabelas CDC.',
      keywords: ['imc infantil', 'calculadora imc crianca', 'percentil imc pediatrico'],
    },
    '/bmi-calculator-by-age': {
      name: 'Calculadora de IMC por Idade e Sexo',
      h1: 'Calculadora de IMC por Idade e Gênero (Todas as Idades)',
      metaTitle: 'Calculadora de IMC por Idade – Faixas por Década | Ultimatrix',
      metaDescription:
        'Alterna automaticamente entre percentis infantis e classificações adultas com referências por década de vida.',
      tagline: 'Interpretação automática do IMC por faixa etária dos 2 aos 100 anos.',
      keywords: ['imc por idade', 'tabela imc idade e sexo', 'imc idoso'],
    },
    '/height-calculator': {
      name: 'Calculadora e Conversor de Altura',
      h1: 'Calculadora de Altura (Pés/Polegadas para Cm e Altura Infantil)',
      metaTitle: 'Conversor de Altura Pés para Cm & Previsão Infantil | Ultimatrix',
      metaDescription:
        'Converta pés e polegadas para centímetros e estime a altura adulta futura da criança pela altura dos pais.',
      tagline: 'Conversão pés/polegadas ↔ cm e estimativa de estatura adulta.',
      keywords: ['calculadora de altura', 'pes para cm', 'previsao altura crianca'],
    },
    '/pregnancy-due-date-calculator': {
      name: 'Calculadora de Data Provável do Parto',
      h1: 'Calculadora Gestacional e Data do Parto (DUM, Concepção e FIV)',
      metaTitle: 'Calculadora de Data do Parto e Semanas de Gestação | Ultimatrix',
      metaDescription:
        'Calcule sua data provável do parto, idade gestacional e trimestres pela última menstruação, concepção ou FIV.',
      tagline: 'Data prevista do parto e semanas de gravidez por DUM, concepção ou FIV.',
      keywords: ['data provavel do parto', 'calculadora gestacional', 'semanas gravidez fiv'],
    },
    '/dog-pregnancy-due-date-calculator': {
      name: 'Calculadora de Gestação Canina',
      h1: 'Calculadora de Gravidez e Parto para Cadelas',
      metaTitle: 'Calculadora Gestação Canina – Data do Parto (63 Dias) | Ultimatrix',
      metaDescription:
        'Calcule a data prevista do parto da sua cadela (regra dos 63 dias) e acompanhe cada semana da gestação.',
      tagline: 'Previsão de parto canino e linha do tempo semanal da ninhada.',
      keywords: ['gestacao cadela calculadora', 'dias gravidez cachorro', 'data parto cadela'],
    },
    '/age-calculator': {
      name: 'Calculadora de Idade Exata',
      h1: 'Calculadora de Idade Cronológica Exata',
      metaTitle: 'Calculadora de Idade Exata – Anos, Meses e Dias | Ultimatrix',
      metaDescription:
        'Descubra sua idade exata em anos, meses, semanas e dias vividos, além da contagem para o próximo aniversário.',
      tagline: 'Anos, meses, dias exatos e contagem regressiva do aniversário.',
      keywords: ['calculadora de idade', 'idade exata em dias', 'calcular idade'],
    },
    '/child-age-calculator': {
      name: 'Calculadora de Idade para Bebês',
      h1: 'Calculadora de Idade de Bebês em Meses, Semanas e Dias',
      metaTitle: 'Calculadora Idade Bebê – Meses e Semanas Exatas | Ultimatrix',
      metaDescription:
        'Calcule a idade exata do bebê em meses completos, semanas e dias para vacinas e acompanhamento pediátrico.',
      tagline: 'Meses, semanas e dias precisos para acompanhar o crescimento infantil.',
      keywords: ['idade bebe em meses', 'calculadora meses bebe', 'semanas do bebe'],
    },
    '/date-calculator': {
      name: 'Calculadora de Datas e Dias',
      h1: 'Calculadora de Diferença Entre Datas e Soma de Dias',
      metaTitle: 'Calculadora de Datas – Contar Dias Entre Datas | Ultimatrix',
      metaDescription:
        'Conte os dias exatos entre duas datas ou adicione e subtraia dias, semanas e meses no calendário.',
      tagline: 'Dias corridos entre duas datas e adição/subtração de prazos.',
      keywords: ['calculadora de datas', 'dias entre duas datas', 'somar dias data'],
    },
    '/time-duration-calculator': {
      name: 'Calculadora de Horas e Duração',
      h1: 'Calculadora de Duração de Tempo (Horas e Minutos)',
      metaTitle: 'Calculadora de Horas – Tempo Decorrido e Soma | Ultimatrix',
      metaDescription:
        'Calcule horas trabalhadas ou a duração exata entre dois horários em horas, minutos e segundos.',
      tagline: 'Diferença entre horários e soma ou subtração de horas e minutos.',
      keywords: ['calculadora de horas', 'duracao entre horarios', 'somar horas'],
    },
    '/percentage-calculator': {
      name: 'Calculadora de Porcentagem',
      h1: 'Calculadora de Porcentagem Online (3 Modos)',
      metaTitle: 'Calculadora de Porcentagem Grátis – Variação e % | Ultimatrix',
      metaDescription:
        'Calcule X% de Y, quanto X representa em % de Y e aumentos ou reduções percentuais na hora.',
      tagline: 'Três modos diretos para porcentagem, proporção e variação percentual.',
      keywords: ['calculadora de porcentagem', 'calcular porcentagem', 'aumento percentual'],
    },
    '/cgpa-to-percentage-calculator': {
      name: 'Conversor de CGPA para Porcentagem',
      h1: 'Calculadora de CGPA para Porcentagem (Escalas 10, 5 e 4)',
      metaTitle: 'Converter CGPA para Porcentagem – Escala 10, 5 e 4 | Ultimatrix',
      metaDescription:
        'Converta notas CGPA em percentual equivalente para intercâmbio, bolsas e processos seletivos.',
      tagline: 'Conversão imediata de notas acadêmicas CGPA para porcentagem.',
      keywords: ['cgpa para porcentagem', 'converter nota cgpa', 'calculadora cgpa'],
    },
    '/gpa-calculator': {
      name: 'Calculadora de GPA Universitário',
      h1: 'Calculadora de GPA Ponderado por Créditos (Escala 4.0)',
      metaTitle: 'Calculadora de GPA Universitário – Escala 4.0 | Ultimatrix',
      metaDescription:
        'Calcule seu GPA semestral e acumulado inserindo disciplinas, conceitos e créditos acadêmicos.',
      tagline: 'Cálculo em tempo real do GPA na escala 4.0 ponderado por créditos.',
      keywords: ['calculadora gpa', 'calcular gpa 4.0', 'media ponderada creditos'],
    },
    '/high-school-gpa-calculator': {
      name: 'Calculadora de GPA Ensino Médio',
      h1: 'Calculadora de GPA do Ensino Médio (Regular, Honors e AP)',
      metaTitle: 'Calculadora de GPA Ensino Médio – Ponderado AP/IB | Ultimatrix',
      metaDescription:
        'Calcule seu GPA escolar não ponderado e ponderado com pontuação extra para matérias Honors e AP/IB.',
      tagline: 'GPA simples e ponderado para aplicações universitárias internacionais.',
      keywords: ['gpa ensino medio', 'gpa ponderado ap', 'calculadora notas escola'],
    },
    '/weight-loss-percentage-calculator': {
      name: 'Calculadora de Porcentagem de Perda de Peso',
      h1: 'Calculadora de Porcentagem de Peso Perdido',
      metaTitle: 'Calculadora de Perda de Peso em Porcentagem | Ultimatrix',
      metaDescription:
        'Descubra qual percentual do seu peso inicial você já eliminou em quilogramas ou libras.',
      tagline: 'Acompanhe o percentual exato de emagrecimento do início até hoje.',
      keywords: ['porcentagem perda de peso', 'quanto porcento emagreci', 'calculo peso perdido'],
    },
    '/scientific-calculator': {
      name: 'Calculadora Científica Online',
      h1: 'Calculadora Científica Online com Trigonometria e Logaritmos',
      metaTitle: 'Calculadora Científica Online Grátis – Graus e Radianos | Ultimatrix',
      metaDescription:
        'Calculadora científica completa com seno, cosseno, tangente, log, ln, potências, raízes e teclado.',
      tagline: 'Funções trigonométricas, logaritmos, memória Ans e atalhos de teclado.',
      keywords: ['calculadora cientifica online', 'calculadora trigonometrica', 'sen cos tan online'],
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'Calculadora Científica Estilo Casio fx-115ES',
      h1: 'Calculadora Científica Modelo Casio fx-115ES Plus',
      metaTitle: 'Calculadora Casio fx-115ES Online – Frações e nPr/nCr | Ultimatrix',
      metaDescription:
        'Layout inspirado na Casio fx-115ES com frações, permutações, combinações e modos DEG/RAD/GRAD.',
      tagline: 'Operações técnicas com frações, combinatória e modos angulares.',
      keywords: ['calculadora casio online', 'casio fx 115es', 'calculadora fracoes'],
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'Calculadora Sharp de 12 Dígitos',
      h1: 'Calculadora Científica e Comercial Sharp 12 Dígitos',
      metaTitle: 'Calculadora 12 Dígitos Sharp Online – Alta Precisão | Ultimatrix',
      metaDescription:
        'Visor de 12 dígitos com separação de milhares, memória M+/M- e funções científicas essenciais.',
      tagline: 'Precisão de 12 dígitos com memória e visualização nítida.',
      keywords: ['calculadora 12 digitos', 'calculadora sharp online', 'calculadora precisa'],
    },
    '/discount-calculator': {
      name: 'Calculadora de Desconto',
      h1: 'Calculadora de Desconto e Economia Final',
      metaTitle: 'Calculadora de Descontos Online – Preço com Desconto | Ultimatrix',
      metaDescription:
        'Calcule rapidamente o preço final e o valor economizado aplicando um ou dois descontos sucessivos.',
      tagline: 'Desconto simples ou duplo acumulado com total economizado.',
      keywords: ['calculadora de desconto', 'calcular porcentagem desconto', 'preco promocional'],
    },
    '/discount-calculator-with-tax': {
      name: 'Calculadora de Desconto com Imposto',
      h1: 'Calculadora de Desconto + Imposto sobre Vendas',
      metaTitle: 'Calculadora de Desconto com Imposto de Venda | Ultimatrix',
      metaDescription:
        'Aplica primeiro o desconto percentual sobre o preço e soma o imposto final para mostrar o total exato.',
      tagline: 'Calcula o valor final considerando desconto pré-imposto e taxa.',
      keywords: ['desconto com imposto', 'preco final com taxa', 'calculadora desconto taxa'],
    },
    '/emi-calculator': {
      name: 'Calculadora de Parcela EMI',
      h1: 'Calculadora de Financiamento e Parcela Mensal (EMI)',
      metaTitle: 'Calculadora de Empréstimo EMI – Parcela e Amortização | Ultimatrix',
      metaDescription:
        'Simule a parcela mensal, total de juros e tabela anual de amortização para financiamento imobiliário ou pessoal.',
      tagline: 'Valor da parcela, juros totais e cronograma anual de amortização.',
      keywords: ['calculadora financiamento emi', 'parcela emprestimo', 'tabela amortizacao'],
    },
    '/hdfc-emi-calculator': {
      name: 'Calculadora EMI HDFC',
      h1: 'Calculadora EMI HDFC (Imóvel, Veículo e Pessoal)',
      metaTitle: 'Calculadora EMI Empréstimo HDFC – Parcelas e Juros | Ultimatrix',
      metaDescription:
        'Simule parcelas mensais de empréstimo imobiliário, automotivo ou pessoal com gráfico de principal e juros.',
      tagline: 'Simulador completo de parcelas EMI e amortização anual.',
      keywords: ['hdfc emi calculadora', 'simulador parcela emprestimo', 'juros financiamento'],
    },
    '/sip-calculator': {
      name: 'Calculadora de Investimento SIP',
      h1: 'Calculadora de Aporte Mensal e Juros Compostos (SIP)',
      metaTitle: 'Calculadora SIP – Simulador de Aportes Mensais | Ultimatrix',
      metaDescription:
        'Projete o patrimônio acumulado com aportes mensais regulares e rendimento composto ao longo dos anos.',
      tagline: 'Projeção do capital investido e retorno com juros compostos.',
      keywords: ['calculadora sip', 'juros compostos mensal', 'simulador aporte mensal'],
    },
    '/gst-calculator': {
      name: 'Calculadora de Imposto GST / IVA',
      h1: 'Calculadora de GST / IVA (Incluir ou Extrair Imposto)',
      metaTitle: 'Calculadora de GST e IVA Online – Base e Alíquota | Ultimatrix',
      metaDescription:
        'Adicione ou extraia impostos sobre valor agregado (GST/IVA) instantaneamente a partir do valor líquido ou bruto.',
      tagline: 'Cálculo instantâneo de imposto incluso ou adicionado ao valor base.',
      keywords: ['calculadora iva', 'calculadora gst', 'extrair imposto'],
    },
    '/compound-interest-calculator': {
      name: 'Calculadora de Juros Compostos',
      h1: 'Calculadora de Juros Compostos (Diário, Mensal e Anual)',
      metaTitle: 'Calculadora de Juros Compostos Online – Aportes Mensais | Ultimatrix',
      metaDescription:
        'Simule juros compostos diários, mensais ou anuais com aporte inicial, depósitos mensais e tabela ano a ano.',
      tagline: 'Simulação de capital inicial, aportes mensais e tabela anual de rendimento.',
      keywords: ['calculadora juros compostos', 'juros compostos mensal', '복리계산기'],
      faqQuestion: 'Como calcular juros compostos com aportes mensais e capitalização diária?',
    },
  },
  ko: {
    '/bmi-calculator': {
      name: 'BMI 비만도 계산기',
      h1: '온라인 BMI 체질량지수 계산기 (kg·cm / 파운드·피트)',
      metaTitle: 'BMI 계산기 무료 – 체질량지수 및 표준체중 확인 | Ultimatrix Calculator',
      metaDescription:
        '키와 몸무게를 입력하면 BMI 수치, 비만도 판정 등급, 건강한 표준체중 범위를 실시간으로 계산합니다.',
      tagline: '키와 체중으로 BMI 지수와 건강 체중 범위를 즉시 확인하세요.',
      keywords: ['bmi 계산기', '체질량지수 계산', '비만도 계산기', '표준체중 계산'],
    },
    '/bmi-calculator/men': {
      name: '남성용 BMI 계산기',
      h1: '남성 전용 BMI 계산기 (근육량 및 체지방 참고)',
      metaTitle: '남성 BMI 계산기 – 체지방률과 적정 체중 | Ultimatrix',
      metaDescription:
        '성인 남성의 근육량 특성을 고려한 BMI 지수 및 권장 체지방률 범위를 함께 안내합니다.',
      tagline: '남성 체형과 근육량 기준을 반영한 BMI 분석 도구.',
      keywords: ['남자 bmi 계산기', '남성 적정체중', '남자 체질량지수'],
    },
    '/bmi-calculator/women': {
      name: '여성용 BMI 계산기',
      h1: '여성 전용 BMI 계산기 (연령별 체지방 기준 포함)',
      metaTitle: '여성 BMI 계산기 – 적정 체중 및 체지방률 | Ultimatrix',
      metaDescription:
        '여성의 연령대별 권장 체지방률과 건강한 BMI 범위를 빠르게 계산해 보세요.',
      tagline: '여성을 위한 BMI 수치와 연령대별 체지방 기준 안내.',
      keywords: ['여자 bmi 계산기', '여성 표준체중', '여자 체질량지수'],
    },
    '/child-bmi-calculator': {
      name: '소아·청소년 BMI 계산기',
      h1: '어린이·청소년 BMI 백분위 계산기 (만 2세~19세)',
      metaTitle: '소아 청소년 BMI 계산기 – 성별·연령 백분위 | Ultimatrix',
      metaDescription:
        '만 2세부터 19세까지 남아·여아의 정확한 나이와 월령에 따른 BMI 및 CDC 성장 백분위 등급을 계산합니다.',
      tagline: '만 2~19세 소아·청소년 성별 및 월령 기반 백분위 판정.',
      keywords: ['소아 bmi 계산기', '어린이 비만도 계산', '청소년 bmi 백분위'],
    },
    '/bmi-calculator-by-age': {
      name: '연령·성별 BMI 계산기',
      h1: '연령 및 성별 맞춤 BMI 계산기 (유아~시니어)',
      metaTitle: '연령별 BMI 계산기 – 세대별 적정 BMI 기준표 | Ultimatrix',
      metaDescription:
        '만 2세 이상 나이에 따라 소아 백분위와 성인 BMI 기준을 자동 전환하고 연령대별 기준표를 제공합니다.',
      tagline: '나이에 맞춰 소아·성인·시니어 기준을 자동으로 적용하는 BMI 도구.',
      keywords: ['연령별 bmi', '나이별 bmi 계산기', '성별 bmi 기준'],
    },
    '/height-calculator': {
      name: '키 단위 변환 및 예상 키 계산기',
      h1: '키 계산기: 피트/인치 ↔ cm 변환 및 자녀 예상 키',
      metaTitle: '키 변환기(피트→cm) 및 자녀 예상 키 계산기 | Ultimatrix',
      metaDescription:
        '피트·인치와 센티미터(cm)를 실시간 상호 변환하고 부모님 키로 자녀의 예상 성인 키를 계산합니다.',
      tagline: 'ft/in ↔ cm 즉시 변환 및 부모 신장 기반 유전적 예상 키 예측.',
      keywords: ['키 변환기', '피트 cm 변환', '자녀 예상 키 계산기'],
    },
    '/pregnancy-due-date-calculator': {
      name: '출산 예정일 계산기',
      h1: '임신 주수 및 출산 예정일 계산기 (생리·수정·시험관 IVF)',
      metaTitle: '출산 예정일 계산기 – 임신 주수·삼분기·IVF 이식일 | Ultimatrix',
      metaDescription:
        '마지막 생리일, 수정일, 시험관 배아이식일(3일·5일·6일 배양) 기준으로 출산 예정일과 임신 주수를 계산합니다.',
      tagline: '생리 예정일, 배란일, 시험관(IVF) 배아 이식일 기반 주수 계산.',
      keywords: ['출산 예정일 계산기', '임신 주수 계산', '시험관 출산예정일'],
    },
    '/dog-pregnancy-due-date-calculator': {
      name: '강아지 출산 예정일 계산기',
      h1: '반려견 임신 기간 및 출산 예정일 계산기 (63일)',
      metaTitle: '강아지 출산 예정일 계산기 – 교배일 기준 분만일 | Ultimatrix',
      metaDescription:
        '반려견 교배일을 입력해 63일 기준 예상 출산일, 분만 가능 기간(58~68일), 주차별 태아 발달을 확인하세요.',
      tagline: '교배일 기준 강아지 예상 출산일과 주차별 돌봄 가이드.',
      keywords: ['강아지 출산 예정일', '개 임신기간 계산', '반려견 교배 출산일'],
    },
    '/age-calculator': {
      name: '정확한 만나이 계산기',
      h1: '생년월일 기준 만나이·개월·일수 계산기',
      metaTitle: '만나이 계산기 – 정확한 나이, 총 일수 & 생일 디데이 | Ultimatrix',
      metaDescription:
        '생년월일로 정확한 만나이(년·개월·일), 살아온 총 주수/일수, 다음 생일까지 남은 일수를 계산합니다.',
      tagline: '만나이, 살아온 총 일수, 다음 생일 카운트다운을 한 번에 확인.',
      keywords: ['만나이 계산기', '나이 계산', '생일 디데이 계산'],
    },
    '/child-age-calculator': {
      name: '아기 개월수 계산기',
      h1: '아기·어린이 정확한 개월수 및 주수 계산기',
      metaTitle: '아기 개월수 계산기 – 생후 몇 개월·몇 주·며칠 | Ultimatrix',
      metaDescription:
        '영유아 검진과 예방접종 일정에 맞춰 아기의 생후 개월수, 주수, 일수를 정확하게 계산합니다.',
      tagline: '소아과 검진 및 예방접종에 필수적인 생후 개월수·일수 확인.',
      keywords: ['아기 개월수 계산기', '생후 며칠 계산', '유아 개월수'],
    },
    '/date-calculator': {
      name: '날짜 차이 및 일수 계산기',
      h1: '두 날짜 사이 일수 계산 및 날짜 더하기·빼기',
      metaTitle: '날짜 계산기 – D-day 일수 계산 & 날짜 더하기 | Ultimatrix',
      metaDescription:
        '두 날짜 사이의 정확한 일수·주수·개월 차이를 구하거나 특정 날짜에 일·주·월을 더하고 뺍니다.',
      tagline: '기간 내 총 일수 계산과 기준일 전후 날짜 추적을 지원합니다.',
      keywords: ['날짜 계산기', '두 날짜 사이 일수', '디데이 계산'],
    },
    '/time-duration-calculator': {
      name: '시간 간격 및 합산 계산기',
      h1: '시간·분·초 경과 시간 계산기',
      metaTitle: '시간 계산기 – 근무 시간·경과 시간 자동 계산 | Ultimatrix',
      metaDescription:
        '시작 시각과 종료 시각 사이의 정확한 경과 시간을 계산하고 시간·분·초를 자유롭게 더하거나 뺍니다.',
      tagline: '근무 시간 산정과 시·분·초 덧셈 및 뺄셈을 정확히 처리합니다.',
      keywords: ['시간 계산기', '근무시간 계산', '경과 시간 계산'],
    },
    '/percentage-calculator': {
      name: '퍼센트(%) 계산기',
      h1: '퍼센트·비율·증감률 계산기 (3가지 모드)',
      metaTitle: '퍼센트 계산기 – 비율 및 증감률 간편 계산 | Ultimatrix',
      metaDescription:
        '전체 값의 몇 %, 두 수의 비율 %, 증가율 및 감소율(%)을 실시간으로 즉시 계산하세요.',
      tagline: '퍼센트 값, 비율 계산, 증감률을 3가지 전용 탭으로 빠르게 처리.',
      keywords: ['퍼센트 계산기', '비율 계산기', '증감률 계산'],
    },
    '/cgpa-to-percentage-calculator': {
      name: 'CGPA 백분율 변환기',
      h1: 'CGPA 학점 백분율(%) 변환 계산기 (10/5/4점 만점)',
      metaTitle: 'CGPA 퍼센트 변환기 – 학점 백분율 환산 | Ultimatrix',
      metaDescription:
        '10점, 5점, 4점 만점 기준 CGPA 성적을 유학 및 취업 제출용 백분율(%) 점수로 즉시 환산합니다.',
      tagline: '해외 유학·취업용 CGPA 성적의 백분율 정확 환산.',
      keywords: ['cgpa 퍼센트 변환', '학점 백분율 환산', 'cgpa 계산기'],
    },
    '/gpa-calculator': {
      name: '대학교 학점(GPA) 계산기',
      h1: '학점 이수 단위 가중 GPA 계산기 (4.0 만점)',
      metaTitle: '학점 계산기(GPA) – 대학교 4.0 만점 평점 평균 | Ultimatrix',
      metaDescription:
        '과목별 성적과 학점(이수 단위)을 입력해 이번 학기 GPA와 누적 평점 평균을 실시간 계산하세요.',
      tagline: '학점 수 가중치가 적용된 학기별·누적 GPA 자동 산출.',
      keywords: ['학점 계산기', 'gpa 계산기', '평점 평균 계산'],
    },
    '/high-school-gpa-calculator': {
      name: '고등학교 GPA 계산기',
      h1: '미국·국제학교 고등학교 GPA 계산기 (AP/IB 가중 지원)',
      metaTitle: '고등학교 GPA 계산기 – 가중(AP/IB)·비가중 평점 | Ultimatrix',
      metaDescription:
        '일반 과목, Honors(+0.5), AP/IB(+1.0) 가산점을 반영한 가중 및 비가중 고교 GPA를 동시에 계산합니다.',
      tagline: '일반 GPA와 Honors·AP/IB 가중 평점을 한 번에 비교.',
      keywords: ['고등학교 gpa 계산기', 'ap gpa 가중치', '국제학교 학점'],
    },
    '/weight-loss-percentage-calculator': {
      name: '체중 감량률(%) 계산기',
      h1: '체중 감량 퍼센트 계산기 (kg / lbs 지원)',
      metaTitle: '체중 감량률 계산기 – 다이어트 감량 퍼센트 | Ultimatrix',
      metaDescription:
        '시작 체중과 현재 체중을 입력해 총 감량 무게와 체중 감소 비율(%)을 계산해 보세요.',
      tagline: '다이어트 목표 달성도와 감량 비율(%)을 한눈에 확인.',
      keywords: ['체중 감량률 계산기', '다이어트 퍼센트', '감량 비율 계산'],
    },
    '/scientific-calculator': {
      name: '공학용 계산기 온라인',
      h1: '온라인 공학용 계산기 (삼각함수·로그·키보드 지원)',
      metaTitle: '무료 공학용 계산기 – sin/cos/tan·로그·DEG/RAD | Ultimatrix',
      metaDescription:
        '삼각함수, 상용·자연로그, 거듭제곱, 팩토리얼, DEG/RAD 전환 및 PC 키보드 입력을 지원하는 공학용 계산기.',
      tagline: '삼각·로그 함수, Ans 메모리 및 키보드 단축키 완벽 지원.',
      keywords: ['공학용 계산기 온라인', '웹 공학용 계산기', '삼각함수 계산기'],
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'Casio fx-115ES 스타일 계산기',
      h1: 'Casio fx-115ES Plus 스타일 공학용 계산기',
      metaTitle: 'Casio fx-115ES 온라인 계산기 – 분수·순열/조합 | Ultimatrix',
      metaDescription:
        '분수 연산, nPr/nCr 순열·조합, 제곱근 및 DEG/RAD/GRAD 각도 모드를 지원하는 카시오 스타일 공학용 계산기.',
      tagline: '분수 계산과 순열·조합(nPr/nCr)에 특화된 공학 계산기.',
      keywords: ['카시오 공학용 계산기', 'fx 115es 온라인', '분수 공학용 계산기'],
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'Sharp 12자리 정밀 계산기',
      h1: 'Sharp 스타일 12자리 공학·회계 계산기',
      metaTitle: 'Sharp 12자리 온라인 계산기 – 고정밀 표시 & 메모리 | Ultimatrix',
      metaDescription:
        '천 단위 쉼표가 적용된 선명한 12자리 디스플레이, M+/M- 메모리, 공학 함수 키를 제공합니다.',
      tagline: '가독성 높은 12자리 디스플레이와 메모리·공학 함수 통합.',
      keywords: ['12자리 계산기', '샤프 계산기 온라인', '정밀 계산기'],
    },
    '/discount-calculator': {
      name: '할인율·세일 가격 계산기',
      h1: '할인 가격 및 절약 금액 계산기',
      metaTitle: '할인율 계산기 – 최종 결제액 및 중복 할인 계산 | Ultimatrix',
      metaDescription:
        '정가에 단일 할인율 또는 추가 중복 할인을 적용한 최종 구매 가격과 절약 금액을 즉시 계산합니다.',
      tagline: '단일 할인 및 2단계 중복 할인 후 최종 가격 즉시 확인.',
      keywords: ['할인율 계산기', '세일 가격 계산', '중복할인 계산'],
    },
    '/discount-calculator-with-tax': {
      name: '할인 + 부가세/세금 계산기',
      h1: '할인 적용 후 세금(부가세·Sales Tax) 합산 계산기',
      metaTitle: '할인 후 세금 포함 가격 계산기 – 실결제 금액 | Ultimatrix',
      metaDescription:
        '상품 가격에서 할인을 먼저 적용한 뒤 부가가치세나 판매세를 더한 실제 최종 결제 금액을 계산합니다.',
      tagline: '할인 먼저 계산 후 세율을 더해 정확한 최종 지불액을 산출.',
      keywords: ['할인 세금 계산기', '부가세 포함 할인가', '실결제액 계산'],
    },
    '/emi-calculator': {
      name: '대출 월 상환액(EMI) 계산기',
      h1: '대출 원리금균등 월 상환액(EMI) 및 상환표 계산기',
      metaTitle: '대출 이자 계산기(EMI) – 월 상환액 및 연도별 상환표 | Ultimatrix',
      metaDescription:
        '대출 원금, 연이율, 상환 기간을 입력해 월 납입금(EMI), 총 이자, 연도별 상환 스케줄을 확인하세요.',
      tagline: '월 납입금, 총 이자 비용 및 연도별 원리금 상환 내역 제공.',
      keywords: ['대출 이자 계산기', '원리금균등 상환', 'emi 계산기'],
    },
    '/hdfc-emi-calculator': {
      name: 'HDFC 대출 EMI 계산기',
      h1: 'HDFC 주택·자동차·신용대출 EMI 계산기',
      metaTitle: 'HDFC 대출 EMI 계산기 – 월 납입금 및 이자 분석 | Ultimatrix',
      metaDescription:
        '주택담보, 자동차, 개인 신용대출 유형별로 예상 월 상환액과 원금 대비 이자 비율을 시뮬레이션하세요.',
      tagline: '대출 유형별 월 상환액 추정 및 연차별 상환 일정표.',
      keywords: ['hdfc emi 계산기', '주택대출 상환 계산', '대출 시뮬레이션'],
    },
    '/sip-calculator': {
      name: '적립식 투자(SIP) 복리 계산기',
      h1: '매월 적립식 투자(SIP) 및 복리 수익 계산기',
      metaTitle: '적립식 투자 계산기(SIP) – 월 적립 복리 수익률 | Ultimatrix',
      metaDescription:
        '매월 적립 금액, 예상 연 수익률, 투자 기간을 바탕으로 만기 시 원금과 복리 수익금을 계산합니다.',
      tagline: '장기 월 적립식 투자의 원금 대비 복리 성장 그래프 확인.',
      keywords: ['적립식 투자 계산기', '복리 계산기 월적립', 'sip 계산기'],
    },
    '/gst-calculator': {
      name: '부가가치세·GST 계산기',
      h1: '부가가치세(VAT) 및 GST 계산기 (별도/포함)',
      metaTitle: '부가세·GST 계산기 – 공급가액과 세액 자동 분리 | Ultimatrix',
      metaDescription:
        '공급가액에 세금을 더하거나 부가세/GST 포함 총액에서 세액과 순수 금액을 즉시 역산합니다.',
      tagline: '세금 가산 및 역산 계산을 한 화면에서 바로 처리.',
      keywords: ['부가세 계산기', 'gst 계산기', '공급가액 역산'],
    },
    '/compound-interest-calculator': {
      name: '복리계산기',
      h1: '복리계산기 – 일복리·월복리·연복리 & 적립식 복리 수익 계산기',
      metaTitle: '복리계산기 – 일복리·월복리·연복리 수익률 & 세후 실수령액 계산 | Ultimatrix',
      metaDescription:
        '무료 온라인 복리계산기. 초기 원금과 매월 적립금, 연 수익률, 복리 주기(일복리·월복리·분기복리·연복리), 일반과세 15.4% 세후 금액과 72의 법칙을 연도별 표로 즉시 계산하세요.',
      tagline: '초기 원금·월 적립금·일/월/연복리 주기·15.4% 이자소득세까지 한 번에 계산하는 한국어 복리계산기.',
      keywords: [
        '복리계산기',
        '복리 계산기',
        '월복리 계산기',
        '일복리 계산기',
        '연복리 계산기',
        '주식 복리계산기',
        '적립식 복리계산기',
        '예적금 복리계산기',
        '72의 법칙 계산기',
        '복리 이자 계산',
      ],
      directAnswer:
        '이 한국어 복리계산기는 초기 거치금(원금)과 매월 추가 적립금을 입력해 일복리·월복리·분기복리·연복리 기준 최종 만기 수령액을 실시간으로 산출합니다. 한국 금융 기준에 맞춰 세전·일반과세(15.4%)·세금우대(9.5%) 선택과 72의 법칙(원금 2배 소요 기간), 연도별 복리 성장표를 함께 제공합니다.',
      preserveBaseFaqs: true,
    },
  },
  it: {
    '/bmi-calculator': {
      name: 'Calcolatore BMI Online',
      h1: 'Calcolatore BMI Online (Kg, Cm, Libbre e Piedi)',
      metaTitle: 'Calcolatore BMI Gratis – Indice di Massa Corporea OMS | Ultimatrix',
      metaDescription:
        'Calcola subito il tuo Indice di Massa Corporea (BMI) in kg/cm o libbre e scopri la tua fascia di peso ideale OMS.',
      tagline: 'Calcolo immediato dell’Indice di Massa Corporea in unità metriche o imperiali.',
      keywords: ['calcolatore bmi', 'calcolo indice massa corporea', 'peso ideale oms'],
    },
    '/bmi-calculator/men': {
      name: 'Calcolatore BMI Uomo',
      h1: 'Calcolatore BMI per Uomo con Massa Muscolare',
      metaTitle: 'Calcolatore BMI Uomo – Peso Forma e Massa Magra | Ultimatrix',
      metaDescription:
        'Valuta il BMI maschile con indicazioni su massa muscolare e percentuali salutari di grasso corporeo.',
      tagline: 'Analisi BMI dedicata agli uomini con contesto muscolare.',
      keywords: ['bmi uomo', 'calcolo bmi maschile', 'peso ideale uomo'],
    },
    '/bmi-calculator/women': {
      name: 'Calcolatore BMI Donna',
      h1: 'Calcolatore BMI per Donna per Età e Altezza',
      metaTitle: 'Calcolatore BMI Donna – Massa Grassa e Peso Forma | Ultimatrix',
      metaDescription:
        'Calcola il BMI femminile e consulta gli intervalli consigliati di grasso corporeo per età.',
      tagline: 'Valutazione del BMI femminile con parametri per fascia d’età.',
      keywords: ['bmi donna', 'calcolo bmi femminile', 'peso ideale donna'],
    },
    '/child-bmi-calculator': {
      name: 'Calcolatore BMI Pediatrico',
      h1: 'Calcolatore BMI Bambini e Adolescenti (2–19 Anni)',
      metaTitle: 'Calcolatore BMI Bambini – Percentili CDC per Età e Sesso | Ultimatrix',
      metaDescription:
        'Calcola il BMI pediatrico e il percentile esatto per bambini e ragazzi dai 2 ai 19 anni.',
      tagline: 'Percentili BMI pediatrici basati su età esatta in anni, mesi e sesso.',
      keywords: ['bmi bambini', 'calcolatore bmi pediatrico', 'percentili crescita'],
    },
    '/bmi-calculator-by-age': {
      name: 'Calcolatore BMI per Età e Sesso',
      h1: 'Calcolatore BMI per Età e Genere (Tutte le Età)',
      metaTitle: 'Calcolatore BMI per Età – Tabelle per Decadi | Ultimatrix',
      metaDescription:
        'Passa automaticamente dai percentili pediatrici alle soglie adulte con riferimenti per ogni decade.',
      tagline: 'Interpretazione BMI calibrata per età dai 2 ai 100 anni.',
      keywords: ['bmi per eta', 'calcolo bmi eta e sesso', 'bmi anziani'],
    },
    '/height-calculator': {
      name: 'Calcolatore e Convertitore di Altezza',
      h1: 'Calcolatore Altezza (Piedi/Pollici in Cm e Altezza Bambini)',
      metaTitle: 'Convertitore Altezza Piedi in Cm & Previsione Statura | Ultimatrix',
      metaDescription:
        'Converti piedi e pollici in centimetri e stima l’altezza futura da adulto in base alla statura dei genitori.',
      tagline: 'Conversione piedi/pollici ↔ cm e stima della statura adulta.',
      keywords: ['calcolatore altezza', 'piedi in cm', 'previsione altezza bambino'],
    },
    '/pregnancy-due-date-calculator': {
      name: 'Calcolatore Data Presunta Parto',
      h1: 'Calcolatore Gravidanza e Data del Parto (U.M., Concepimento, FIVET)',
      metaTitle: 'Calcolatore Data Parto e Settimane di Gravidanza | Ultimatrix',
      metaDescription:
        'Calcola la data presunta del parto, le settimane di gestazione e i trimestri da ultima mestruazione o FIVET.',
      tagline: 'Stima del parto e settimana gestazionale da mestruazioni, concepimento o FIVET.',
      keywords: ['data presunta parto', 'settimane di gravidanza', 'calcolo parto fivet'],
    },
    '/dog-pregnancy-due-date-calculator': {
      name: 'Calcolatore Gravidanza Cane',
      h1: 'Calcolatore Gestazione e Data del Parto per Cani',
      metaTitle: 'Calcolatore Gravidanza Cane – Data Parto (63 Giorni) | Ultimatrix',
      metaDescription:
        'Calcola la data prevista del parto della tua cagnolina (regola dei 63 giorni) e il calendario settimanale.',
      tagline: 'Previsione del parto canino e tappe settimanali della gestazione.',
      keywords: ['gravidanza cane calcolo', 'gestazione cane giorni', 'data parto cane'],
    },
    '/age-calculator': {
      name: 'Calcolatore Età Esatta',
      h1: 'Calcolatore Età Esatta dalla Data di Nascita',
      metaTitle: 'Calcolatore Età Cronologica – Anni, Mesi e Giorni | Ultimatrix',
      metaDescription:
        'Calcola la tua età precisa in anni, mesi, settimane e giorni vissuti con il countdown al prossimo compleanno.',
      tagline: 'Anni, mesi, giorni precisi e conto alla rovescia per il compleanno.',
      keywords: ['calcolatore eta', 'calcola eta esatta', 'giorni vissuti'],
    },
    '/child-age-calculator': {
      name: 'Calcolatore Età Neonati e Bambini',
      h1: 'Calcolatore Età Neonato in Mesi, Settimane e Giorni',
      metaTitle: 'Calcolatore Età Neonato – Mesi e Settimane Esatte | Ultimatrix',
      metaDescription:
        'Scopri i mesi, le settimane e i giorni esatti del tuo bambino per controlli pediatrici e vaccini.',
      tagline: 'Età precisa in mesi, settimane e giorni per neonati e bambini.',
      keywords: ['eta neonato in mesi', 'calcolatore mesi bambino', 'settimane neonato'],
    },
    '/date-calculator': {
      name: 'Calcolatore di Date e Giorni',
      h1: 'Calcolatore Giorni Tra Due Date e Somma/Sottrazione',
      metaTitle: 'Calcolatore Date – Giorni Tra Due Date e Scadenze | Ultimatrix',
      metaDescription:
        'Conta i giorni esatti tra due date o aggiungi e sottrai giorni, settimane o mesi sul calendario.',
      tagline: 'Differenza esatta tra due date più calcolo rapido di scadenze future.',
      keywords: ['calcolatore date', 'giorni tra due date', 'aggiungi giorni data'],
    },
    '/time-duration-calculator': {
      name: 'Calcolatore Durata e Ore',
      h1: 'Calcolatore Ore, Minuti e Secondi Trascorsi',
      metaTitle: 'Calcolatore Ore – Durata Tempo e Somma Orari | Ultimatrix',
      metaDescription:
        'Calcola le ore lavorate o il tempo trascorso tra due orari e somma o sottrai intervalli temporali.',
      tagline: 'Intervallo preciso in ore, minuti e secondi e operazioni sul tempo.',
      keywords: ['calcolatore ore', 'calcolo durata tempo', 'somma ore lavoro'],
    },
    '/percentage-calculator': {
      name: 'Calcolatore Percentuale',
      h1: 'Calcolatore di Percentuale Online (3 Modalità)',
      metaTitle: 'Calcolatore Percentuale Gratis – Calcola % e Variazioni | Ultimatrix',
      metaDescription:
        'Calcola subito X% di Y, che percentuale è X di Y e l’aumento o la diminuzione percentuale.',
      tagline: 'Tre modalità istantanee per percentuali, rapporti e variazioni.',
      keywords: ['calcolatore percentuale', 'calcola percentuale', 'variazione percentuale'],
    },
    '/cgpa-to-percentage-calculator': {
      name: 'Convertitore CGPA in Percentuale',
      h1: 'Convertitore CGPA in Percentuale (Scale 10, 5 e 4)',
      metaTitle: 'Converti CGPA in Percentuale – Scale Universitarie | Ultimatrix',
      metaDescription:
        'Converti la media CGPA nel corrispettivo percentuale per ammissioni universitarie e borse di studio.',
      tagline: 'Conversione immediata di voti CGPA in percentuali equivalenti.',
      keywords: ['cgpa in percentuale', 'convertitore cgpa', 'calcolo media percentuale'],
    },
    '/gpa-calculator': {
      name: 'Calcolatore GPA Universitario',
      h1: 'Calcolatore GPA Ponderato per Crediti (Scala 4.0)',
      metaTitle: 'Calcolatore GPA Universitario – Scala 4.0 Ponderata | Ultimatrix',
      metaDescription:
        'Calcola la media GPA semestrale e cumulativa inserendo materie, voti e crediti formativi.',
      tagline: 'Media GPA in tempo reale ponderata sui crediti accademici.',
      keywords: ['calcolatore gpa', 'media gpa 4.0', 'calcolo gpa universita'],
    },
    '/high-school-gpa-calculator': {
      name: 'Calcolatore GPA Liceo / Scuola Superiore',
      h1: 'Calcolatore GPA Scuole Superiori (Standard, Honors e AP)',
      metaTitle: 'Calcolatore GPA Superiori – Ponderato Honors e AP/IB | Ultimatrix',
      metaDescription:
        'Calcola il GPA scolastico non ponderato e ponderato con crediti bonus per corsi Honors e AP/IB.',
      tagline: 'GPA liceale standard e ponderato per domande universitarie.',
      keywords: ['gpa scuole superiori', 'gpa ponderato ap', 'calcolatore voti liceo'],
    },
    '/weight-loss-percentage-calculator': {
      name: 'Calcolatore Percentuale Perdita di Peso',
      h1: 'Calcolatore Percentuale di Peso Perso',
      metaTitle: 'Calcolatore Percentuale Dimagrimento (Kg / Libbre) | Ultimatrix',
      metaDescription:
        'Calcola quanta percentuale del tuo peso iniziale hai perso inserendo peso iniziale e peso attuale.',
      tagline: 'Monitora i tuoi progressi con il calcolo esatto della % di peso perso.',
      keywords: ['percentuale perdita peso', 'calcolo peso perso %', 'percentuale dimagrimento'],
    },
    '/scientific-calculator': {
      name: 'Calcolatrice Scientifica Online',
      h1: 'Calcolatrice Scientifica Online (Trigonometria & Logaritmi)',
      metaTitle: 'Calcolatrice Scientifica Gratis – Gradi e Radianti | Ultimatrix',
      metaDescription:
        'Calcolatrice scientifica completa con seno, coseno, tangente, log, ln, potenze, radici e tastiera.',
      tagline: 'Funzioni trigonometriche, logaritmi, memoria Ans e supporto tastiera.',
      keywords: ['calcolatrice scientifica online', 'calcolatrice trigonometria', 'calcolatrice radianti'],
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'Calcolatrice Scientifica Stile Casio fx-115ES',
      h1: 'Calcolatrice Scientifica Stile Casio fx-115ES Plus',
      metaTitle: 'Calcolatrice Casio fx-115ES Online – Frazioni e nPr/nCr | Ultimatrix',
      metaDescription:
        'Calcolatrice web ispirata a Casio fx-115ES con frazioni, permutazioni, combinazioni e modalità DEG/RAD/GRAD.',
      tagline: 'Layout tecnico con frazioni, combinatoria e conversioni angolari.',
      keywords: ['calcolatrice casio online', 'casio fx 115es', 'calcolatrice frazioni'],
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'Calcolatrice 12 Cifre Sharp',
      h1: 'Calcolatrice Scientifica e Commerciale Sharp 12 Cifre',
      metaTitle: 'Calcolatrice Sharp 12 Cifre Online – Alta Precisione | Ultimatrix',
      metaDescription:
        'Display chiaro a 12 cifre con separatori delle migliaia, memoria M+/M- e funzioni scientifiche.',
      tagline: 'Display nitido a 12 cifre con memoria e funzioni tecniche.',
      keywords: ['calcolatrice 12 cifre', 'calcolatrice sharp online', 'calcolatrice precisione'],
    },
    '/discount-calculator': {
      name: 'Calcolatore Sconti',
      h1: 'Calcolatore Sconto Percentuale e Prezzo Finale',
      metaTitle: 'Calcolatore di Sconti Online – Risparmio e Saldi | Ultimatrix',
      metaDescription:
        'Calcola il prezzo scontato e il risparmio netto applicando uno o due sconti percentuali successivi.',
      tagline: 'Sconto singolo o doppio sconto cumulato con importo risparmiato.',
      keywords: ['calcolatore sconto', 'calcolare percentuale sconto', 'prezzo saldi'],
    },
    '/discount-calculator-with-tax': {
      name: 'Calcolatore Sconto con IVA / Tasse',
      h1: 'Calcolatore Sconto Più Imposta (IVA / Sales Tax)',
      metaTitle: 'Calcolatore Sconto con IVA e Tasse Finali | Ultimatrix',
      metaDescription:
        'Applica prima lo sconto percentuale e aggiungi poi l’IVA o l’imposta sulle vendite per vedere il totale.',
      tagline: 'Sconto applicato prima delle tasse con prezzo finale alla cassa.',
      keywords: ['sconto con iva', 'calcolatore sconto tasse', 'totale scontato ivato'],
    },
    '/emi-calculator': {
      name: 'Calcolatore Rata Prestito (EMI)',
      h1: 'Calcolatore Rata Mensile Mutuo e Prestito (EMI)',
      metaTitle: 'Calcolatore Prestito EMI – Rata Mensile e Ammortamento | Ultimatrix',
      metaDescription:
        'Calcola la rata mensile, gli interessi totali e il piano di ammortamento annuale per mutui o prestiti personali.',
      tagline: 'Rata mensile, totale interessi e piano di ammortamento annuale.',
      keywords: ['calcolatore rata prestito', 'simulatore mutuo emi', 'piano ammortamento'],
    },
    '/hdfc-emi-calculator': {
      name: 'Calcolatore EMI HDFC',
      h1: 'Calcolatore EMI Prestiti HDFC (Casa, Auto e Personale)',
      metaTitle: 'Calcolatore EMI HDFC – Rate Mensili e Interessi | Ultimatrix',
      metaDescription:
        'Stima la rata mensile EMI per prestiti casa, auto o personali con grafico capitale/interessi.',
      tagline: 'Stima rata mensile e ammortamento annuale per tipologia di prestito.',
      keywords: ['hdfc emi calcolatore', 'simulatore rata prestito', 'calcolo interessi mutuo'],
    },
    '/sip-calculator': {
      name: 'Calcolatore Piano di Accumulo (SIP)',
      h1: 'Calcolatore PAC / SIP Mensile e Interesse Composto',
      metaTitle: 'Calcolatore SIP e Interesse Composto Mensile | Ultimatrix',
      metaDescription:
        'Proietta il capitale futuro dei tuoi versamenti mensili costanti sfruttando la capitalizzazione composta.',
      tagline: 'Stima capitale versato, guadagno composto e valore finale nel tempo.',
      keywords: ['calcolatore sip', 'calcolo pac mensile', 'interesse composto mensile'],
    },
    '/gst-calculator': {
      name: 'Calcolatore IVA / GST',
      h1: 'Calcolatore Imposta GST / IVA (Inclusa ed Esclusa)',
      metaTitle: 'Calcolatore IVA e GST Online – Scorporo e Aggiunta | Ultimatrix',
      metaDescription:
        'Aggiungi l’IVA/GST a un imponibile oppure esegui lo scorporo dell’imposta dal totale lordo.',
      tagline: 'Calcolo rapido di imponibile, imposta e totale lordo.',
      keywords: ['calcolatore iva', 'scorporo iva online', 'calcolatore gst'],
    },
    '/compound-interest-calculator': {
      name: 'Calcolatore Interesse Composto',
      h1: 'Calcolatore di Interesse Composto (Giornaliero, Mensile, Annuale)',
      metaTitle: 'Calcolatore Interesse Composto Online – Simulatore | Ultimatrix',
      metaDescription:
        'Calcola il capitale finale con interesse composto giornaliero, mensile o annuale, versamenti mensili e tabella per anno.',
      tagline: 'Simula capitale iniziale, versamenti periodici e crescita composta annuale.',
      keywords: ['calcolatore interesse composto', 'interesse composto mensile', '복리계산기'],
      faqQuestion: 'Come funziona il calcolo dell’interesse composto mensile e giornaliero?',
    },
  },
  id: {
    '/bmi-calculator': {
      name: 'Kalkulator BMI Online',
      h1: 'Kalkulator BMI Online (Kg, Cm, Lbs & Kaki)',
      metaTitle: 'Kalkulator BMI Online Gratis – Cek Berat Badan Ideal WHO | Ultimatrix',
      metaDescription:
        'Hitung Indeks Massa Tubuh (BMI) secara instan dalam kg/cm atau lbs dan ketahui kategori berat badan ideal WHO Anda.',
      tagline: 'Hitung Indeks Massa Tubuh dalam kg, cm, atau pon dengan rentang berat badan sehat.',
      keywords: ['kalkulator bmi', 'hitung bmi online', 'indeks massa tubuh', 'berat badan ideal'],
      faqQuestion: 'Bagaimana cara menghitung dan membaca hasil Kalkulator BMI ini?',
    },
    '/bmi-calculator/men': {
      name: 'Kalkulator BMI Pria',
      h1: 'Kalkulator BMI Pria Menurut Tinggi & Massa Otot',
      metaTitle: 'Kalkulator BMI Pria – Berat Ideal & Lemak Tubuh | Ultimatrix',
      metaDescription:
        'Hitung BMI khusus pria beserta rentang berat badan sehat dan panduan persentase lemak tubuh serta massa otot.',
      tagline: 'Evaluasi BMI pria dengan konteks massa otot dan persentase lemak tubuh.',
      keywords: ['kalkulator bmi pria', 'bmi laki laki', 'berat badan ideal pria'],
      faqQuestion: 'Bagaimana cara kerja Kalkulator BMI Pria dan apa perbedaan interpretasinya?',
    },
    '/bmi-calculator/women': {
      name: 'Kalkulator BMI Wanita',
      h1: 'Kalkulator BMI Wanita Menurut Usia & Tinggi Badan',
      metaTitle: 'Kalkulator BMI Wanita – Berat Badan Ideal & Lemak Tubuh | Ultimatrix',
      metaDescription:
        'Hitung BMI wanita dengan panduan rentang lemak tubuh sehat berdasarkan kelompok usia.',
      tagline: 'Penilaian BMI wanita dilengkapi referensi lemak tubuh sesuai usia.',
      keywords: ['kalkulator bmi wanita', 'bmi perempuan', 'berat badan ideal wanita'],
      faqQuestion: 'Bagaimana cara menggunakan Kalkulator BMI Wanita untuk menilai berat sehat?',
    },
    '/child-bmi-calculator': {
      name: 'Kalkulator BMI Anak & Remaja',
      h1: 'Kalkulator BMI Anak & Remaja (Usia 2–19 Tahun)',
      metaTitle: 'Kalkulator BMI Anak – Persentil CDC & WHO Usia 2–19 Tahun | Ultimatrix',
      metaDescription:
        'Hitung BMI anak dan remaja usia 2 hingga 19 tahun lengkap dengan kategori persentil CDC/WHO berdasarkan jenis kelamin.',
      tagline: 'Persentil BMI pediatrik CDC berdasarkan usia tahun, bulan, dan jenis kelamin.',
      keywords: ['kalkulator bmi anak', 'bmi remaja', 'persentil bmi anak'],
      faqQuestion: 'Mengapa BMI anak usia 2–19 tahun dinilai menggunakan persentil, bukan angka dewasa?',
    },
    '/bmi-calculator-by-age': {
      name: 'Kalkulator BMI Menurut Usia & Gender',
      h1: 'Kalkulator BMI Menurut Usia & Jenis Kelamin',
      metaTitle: 'Kalkulator BMI Berdasarkan Usia & Gender – Anak hingga Lansia | Ultimatrix',
      metaDescription:
        'Hitung BMI dari usia 2 hingga 100+ tahun dengan peralihan otomatis antara persentil anak dan rentang dewasa per dekade.',
      tagline: 'Beralih otomatis antara persentil anak dan rentang BMI dewasa sesuai usia.',
      keywords: ['bmi menurut usia', 'kalkulator bmi usia gender', 'tabel bmi usia'],
      faqQuestion: 'Apakah rentang BMI yang sehat berubah seiring bertambahnya usia?',
    },
    '/height-calculator': {
      name: 'Kalkulator & Konverter Tinggi Badan',
      h1: 'Kalkulator Tinggi Badan: Kaki/Inci ke Cm & Prediksi Anak',
      metaTitle: 'Konverter Tinggi Badan Kaki ke Cm & Prediksi Tinggi Anak | Ultimatrix',
      metaDescription:
        'Konversi tinggi kaki & inci ke sentimeter secara instan dan prediksi tinggi dewasa anak dari tinggi kedua orang tua.',
      tagline: 'Ubah kaki/inci ke cm dan perkirakan tinggi badan dewasa anak.',
      keywords: ['kalkulator tinggi badan', 'konversi kaki ke cm', 'prediksi tinggi badan anak'],
      faqQuestion: 'Bagaimana cara mengonversi kaki dan inci ke cm serta memprediksi tinggi anak?',
    },
    '/pregnancy-due-date-calculator': {
      name: 'Kalkulator Hari Perkiraan Lahir (HPL)',
      h1: 'Kalkulator Kehamilan & HPL (HPHT, Konsepsi & Bayi Tabung)',
      metaTitle: 'Kalkulator Kehamilan & HPL – Hitung Usia Kehamilan Akurat | Ultimatrix',
      metaDescription:
        'Hitung Hari Perkiraan Lahir (HPL), usia minggu kehamilan, dan trimester dari HPHT, tanggal pembuahan, atau transfer IVF.',
      tagline: 'Perkirakan HPL dan usia janin berdasarkan HPHT, konsepsi, atau transfer IVF.',
      keywords: ['kalkulator hpl', 'hitung usia kehamilan', 'hari perkiraan lahir'],
      faqQuestion: 'Bagaimana cara menghitung Hari Perkiraan Lahir (HPL) secara akurat?',
    },
    '/dog-pregnancy-due-date-calculator': {
      name: 'Kalkulator Kehamilan Anjing',
      h1: 'Kalkulator Masa Hamil & Perkiraan Lahir Anjing (63 Hari)',
      metaTitle: 'Kalkulator Kehamilan Anjing – Hitung Tanggal Melahirkan | Ultimatrix',
      metaDescription:
        'Hitung tanggal perkiraan melahirkan anjing betina berdasarkan aturan 63 hari, rentang lahir normal, dan minggu kehamilan.',
      tagline: 'Perkiraan tanggal lahir anjing, jendela persalinan, dan panduan mingguan.',
      keywords: ['kalkulator kehamilan anjing', 'lama anjing hamil', 'tanggal lahir anak anjing'],
      faqQuestion: 'Berapa lama masa kehamilan anjing dan bagaimana cara menghitung tanggal lahirnya?',
    },
    '/age-calculator': {
      name: 'Kalkulator Umur Akurat',
      h1: 'Kalkulator Umur Kronologis Menurut Tanggal Lahir',
      metaTitle: 'Kalkulator Umur Online – Tahun, Bulan, Minggu & Hari | Ultimatrix',
      metaDescription:
        'Hitung umur tepat dalam tahun, bulan, minggu, dan total hari sejak tanggal lahir beserta hitung mundur ulang tahun berikutnya.',
      tagline: 'Umur pasti dalam tahun, bulan, hari, serta hitung mundur ulang tahun.',
      keywords: ['kalkulator umur', 'hitung umur tanggal lahir', 'cek usia tepat'],
      faqQuestion: 'Bagaimana Kalkulator Umur menghitung usia tepat dalam tahun, bulan, dan hari?',
    },
    '/child-age-calculator': {
      name: 'Kalkulator Usia Bayi & Anak',
      h1: 'Kalkulator Usia Bayi dalam Bulan, Minggu & Hari',
      metaTitle: 'Kalkulator Usia Bayi – Hitung Bulan & Minggu Tepat | Ultimatrix',
      metaDescription:
        'Hitung usia bayi dan balita secara akurat dalam bulan, minggu, dan hari untuk jadwal imunisasi dan kontrol tumbuh kembang.',
      tagline: 'Usia bayi tepat dalam bulan dan minggu untuk posyandu dan dokter anak.',
      keywords: ['kalkulator usia bayi', 'umur bayi dalam bulan', 'usia balita minggu'],
      faqQuestion: 'Mengapa usia bayi diukur dalam bulan dan minggu pada dua tahun pertama?',
    },
    '/date-calculator': {
      name: 'Kalkulator Tanggal & Selisih Hari',
      h1: 'Kalkulator Jumlah Hari Antara Dua Tanggal',
      metaTitle: 'Kalkulator Tanggal – Hitung Selisih Hari & Tambah/Kurang Hari | Ultimatrix',
      metaDescription:
        'Hitung jumlah hari, minggu, dan bulan di antara dua tanggal kalender atau tambah dan kurangi hari dari tanggal tertentu.',
      tagline: 'Hitung selisih hari antar tanggal serta tambah atau kurangi hari/bulan.',
      keywords: ['kalkulator tanggal', 'hitung selisih hari', 'jumlah hari antara dua tanggal'],
      faqQuestion: 'Bagaimana cara menghitung jumlah hari tepat di antara dua tanggal?',
    },
    '/time-duration-calculator': {
      name: 'Kalkulator Durasi Waktu',
      h1: 'Kalkulator Selisih Jam, Menit & Detik',
      metaTitle: 'Kalkulator Jam & Durasi Waktu Online | Ultimatrix',
      metaDescription:
        'Hitung lama waktu antara dua jam dalam jam, menit, dan detik atau jumlahkan serta kurangkan durasi waktu kerja.',
      tagline: 'Hitung durasi jam kerja, selisih waktu, dan penjumlahan jam-menit-detik.',
      keywords: ['kalkulator waktu', 'hitung selisih jam', 'kalkulator jam kerja'],
      faqQuestion: 'Bagaimana cara menghitung total durasi antara waktu mulai dan selesai?',
    },
    '/percentage-calculator': {
      name: 'Kalkulator Persentase Online',
      h1: 'Kalkulator Persentase (3 Mode Lengkap)',
      metaTitle: 'Kalkulator Persen Online – Hitung Persentase Kenaikan & Diskon | Ultimatrix',
      metaDescription:
        'Hitung X% dari Y, berapa persen X dari Y, serta persentase kenaikan atau penurunan secara instan dan akurat.',
      tagline: 'Hitung nilai persen, rasio persentase, dan persentase perubahan.',
      keywords: ['kalkulator persentase', 'cara menghitung persen', 'persentase kenaikan'],
      faqQuestion: 'Rumus apa yang digunakan untuk menghitung persentase dan perubahan persen?',
    },
    '/cgpa-to-percentage-calculator': {
      name: 'Konverter CGPA ke Persentase',
      h1: 'Kalkulator CGPA ke Persentase (Skala 10, 5 & 4)',
      metaTitle: 'Konversi CGPA ke Persentase – Skala 10, 5 & 4 | Ultimatrix',
      metaDescription:
        'Konversikan nilai CGPA atau IPK Anda ke persentase menggunakan rumus standar CBSE dan universitas skala 10, 5, atau 4.',
      tagline: 'Konversi skor CGPA menjadi nilai persentase untuk pendaftaran kuliah dan kerja.',
      keywords: ['cgpa ke persentase', 'konversi ipk ke persen', 'kalkulator cgpa'],
      faqQuestion: 'Bagaimana cara mengonversi CGPA ke persentase pada skala 10, 5, atau 4?',
    },
    '/gpa-calculator': {
      name: 'Kalkulator GPA / IPK Kuliah',
      h1: 'Kalkulator IPK / GPA Berbobot SKS (Skala 4.0)',
      metaTitle: 'Kalkulator IPK / GPA Kuliah – Hitung Nilai Semester & Kumulatif | Ultimatrix',
      metaDescription:
        'Hitung GPA / IPK semester dan kumulatif Anda dengan memasukkan mata kuliah, nilai huruf, dan jumlah SKS.',
      tagline: 'Hitung IPK berbobot SKS untuk nilai semester maupun kumulatif.',
      keywords: ['kalkulator gpa', 'kalkulator ipk kuliah', 'hitung ipk skala 4'],
      faqQuestion: 'Bagaimana cara menghitung GPA atau IPK berdasarkan SKS mata kuliah?',
    },
    '/high-school-gpa-calculator': {
      name: 'Kalkulator GPA SMA',
      h1: 'Kalkulator GPA SMA (Reguler, Honors & AP/IB)',
      metaTitle: 'Kalkulator GPA SMA – Nilai Tanpa Bobot & Berbobot AP/IB | Ultimatrix',
      metaDescription:
        'Hitung GPA SMA unweighted maupun weighted dengan bobot tambahan untuk kelas Honors dan AP/IB.',
      tagline: 'GPA SMA standar dan berbobot untuk persiapan pendaftaran universitas.',
      keywords: ['kalkulator gpa sma', 'gpa berbobot ap', 'hitung nilai rapor sma'],
      faqQuestion: 'Apa perbedaan antara GPA SMA tanpa bobot dan GPA berbobot (Weighted)?',
    },
    '/weight-loss-percentage-calculator': {
      name: 'Kalkulator Persentase Penurunan Berat Badan',
      h1: 'Kalkulator Persentase Penurunan Berat Badan (Kg / Lbs)',
      metaTitle: 'Kalkulator Persentase Turun Berat Badan | Ultimatrix',
      metaDescription:
        'Hitung berapa persen berat badan yang berhasil Anda turunkan dari berat awal ke berat saat ini.',
      tagline: 'Pantau progres diet dengan persentase penurunan berat badan dalam kg atau lbs.',
      keywords: ['persentase penurunan berat badan', 'hitung persen turun berat', 'kalkulator diet'],
      faqQuestion: 'Bagaimana cara menghitung persentase penurunan berat badan?',
    },
    '/scientific-calculator': {
      name: 'Kalkulator Ilmiah Online',
      h1: 'Kalkulator Ilmiah Online (Trigonometri & Logaritma)',
      metaTitle: 'Kalkulator Ilmiah Online Gratis – Sin, Cos, Tan, Log & Radian | Ultimatrix',
      metaDescription:
        'Kalkulator saintifik lengkap dengan sin, cos, tan, log, ln, pangkat, akar, faktorial, mode DEG/RAD, dan dukungan keyboard.',
      tagline: 'Trigonometri, logaritma, eksponen, memori Ans, dan pintasan keyboard.',
      keywords: ['kalkulator ilmiah online', 'kalkulator saintifik', 'kalkulator trigonometri'],
      faqQuestion: 'Fungsi apa saja yang tersedia di Kalkulator Ilmiah Online ini?',
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'Kalkulator Ilmiah Gaya Casio fx-115ES',
      h1: 'Kalkulator Ilmiah Gaya Casio fx-115ES Plus Online',
      metaTitle: 'Kalkulator Ilmiah Casio fx-115ES Online – Pecahan & nPr/nCr | Ultimatrix',
      metaDescription:
        'Kalkulator web bergaya Casio fx-115ES Plus dengan pecahan, permutasi nPr, kombinasi nCr, dan mode sudut DEG/RAD/GRAD.',
      tagline: 'Tata letak teknis Casio dengan pecahan, kombinatorik, dan konversi sudut.',
      keywords: ['kalkulator casio online', 'casio fx 115es online', 'kalkulator pecahan'],
      faqQuestion: 'Fitur apa yang membuat kalkulator gaya Casio fx-115ES ini cocok untuk kuliah dan ujian?',
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'Kalkulator 12 Digit Sharp',
      h1: 'Kalkulator Ilmiah & Bisnis Sharp 12 Digit',
      metaTitle: 'Kalkulator Sharp 12 Digit Online – Layar Jelas & Memori M+/M- | Ultimatrix',
      metaDescription:
        'Layar presisi tinggi 12 digit dengan pemisah ribuan jelas, tombol memori M+/M-, dan fungsi ilmiah.',
      tagline: 'Layar 12 digit berpresisi tinggi lengkap dengan memori dan tombol teknis.',
      keywords: ['kalkulator 12 digit', 'kalkulator sharp online', 'kalkulator dagang'],
      faqQuestion: 'Mengapa kalkulator tampilan 12 digit berguna untuk akuntansi dan perhitungan teknik?',
    },
    '/discount-calculator': {
      name: 'Kalkulator Diskon & Harga Akhir',
      h1: 'Kalkulator Diskon Persen & Potongan Harga',
      metaTitle: 'Kalkulator Diskon Online – Hitung Harga Akhir & Hemat | Ultimatrix',
      metaDescription:
        'Hitung harga akhir setelah diskon tunggal maupun diskon ganda bertingkat beserta total uang yang dihemat.',
      tagline: 'Hitung potongan harga tunggal atau diskon ganda dan nominal hemat.',
      keywords: ['kalkulator diskon', 'cara menghitung diskon', 'harga setelah diskon'],
      faqQuestion: 'Bagaimana cara menghitung harga akhir dan diskon ganda bertingkat?',
    },
    '/discount-calculator-with-tax': {
      name: 'Kalkulator Diskon dengan Pajak (PPN)',
      h1: 'Kalkulator Diskon Ditambah Pajak (PPN / Sales Tax)',
      metaTitle: 'Kalkulator Diskon Plus Pajak PPN – Total Bayar Kasir | Ultimatrix',
      metaDescription:
        'Hitung total bayar sebenarnya di kasir dengan menerapkan persentase diskon terlebih dahulu lalu menambahkan PPN atau pajak.',
      tagline: 'Terapkan potongan diskon sebelum menambahkan tarif pajak penjualan.',
      keywords: ['kalkulator diskon dan pajak', 'harga diskon plus ppn', 'hitung ppn setelah diskon'],
      faqQuestion: 'Apakah pajak dihitung sebelum atau sesudah potongan diskon?',
    },
    '/emi-calculator': {
      name: 'Kalkulator Cicilan Pinjaman (EMI)',
      h1: 'Kalkulator Angsuran Bulanan Pinjaman & KPR (EMI)',
      metaTitle: 'Kalkulator Cicilan KPR & Pinjaman EMI – Tabel Amortisasi | Ultimatrix',
      metaDescription:
        'Hitung cicilan bulanan, total bunga, dan jadwal amortisasi tahunan untuk KPR, kredit kendaraan, maupun pinjaman pribadi.',
      tagline: 'Simulasi angsuran bulanan, total bunga, dan jadwal pelunasan tahunan.',
      keywords: ['kalkulator cicilan pinjaman', 'kalkulator kpr emi', 'simulasi angsuran bulanan'],
      faqQuestion: 'Bagaimana rumus perhitungan cicilan bulanan (EMI) untuk KPR dan pinjaman?',
    },
    '/hdfc-emi-calculator': {
      name: 'Kalkulator EMI HDFC',
      h1: 'Kalkulator EMI Pinjaman HDFC (Rumah, Mobil & Pribadi)',
      metaTitle: 'Kalkulator EMI HDFC – Simulasi Cicilan Rumah & Mobil | Ultimatrix',
      metaDescription:
        'Perkirakan angsuran bulanan EMI untuk kredit rumah, kendaraan, atau pinjaman multiguna lengkap dengan tabel pokok dan bunga.',
      tagline: 'Perkiraan cicilan bulanan dan rincian bunga tahunan per jenis pinjaman.',
      keywords: ['kalkulator hdfc emi', 'simulasi kredit rumah', 'cicilan mobil emi'],
      faqQuestion: 'Bagaimana cara memperkirakan cicilan bulanan dan total bunga pinjaman di Kalkulator EMI HDFC?',
    },
    '/sip-calculator': {
      name: 'Kalkulator Investasi Rutin (SIP)',
      h1: 'Kalkulator Investasi Berkala SIP & Bunga Majemuk',
      metaTitle: 'Kalkulator Investasi SIP – Proyeksi Reksa Dana & Bunga Majemuk | Ultimatrix',
      metaDescription:
        'Proyeksikan nilai masa depan investasi rutin bulanan Anda dengan simulasi imbal hasil tahunan dan bunga majemuk.',
      tagline: 'Hitung total modal disetor, keuntungan bunga majemuk, dan nilai akhir investasi.',
      keywords: ['kalkulator investasi sip', 'kalkulator bunga majemuk bulanan', 'simulasi reksa dana'],
      faqQuestion: 'Bagaimana cara kerja bunga majemuk pada kalkulator investasi bulanan SIP?',
    },
    '/gst-calculator': {
      name: 'Kalkulator Pajak GST / PPN',
      h1: 'Kalkulator Pajak GST / PPN (Termasuk & Belum Termasuk)',
      metaTitle: 'Kalkulator GST & PPN Online – Tambah atau Pisahkan Pajak | Ultimatrix',
      metaDescription:
        'Tambahkan tarif GST/PPN ke harga dasar atau pisahkan nilai pajak dari harga total termasuk pajak secara instan.',
      tagline: 'Tambah atau ekstrak tarif pajak GST/PPN lengkap dengan rincian nilai dasar.',
      keywords: ['kalkulator gst', 'kalkulator ppn online', 'hitung dpp dan ppn'],
      faqQuestion: 'Bagaimana cara memisahkan nilai pajak GST/PPN dari harga yang sudah termasuk pajak?',
    },
    '/compound-interest-calculator': {
      name: 'Kalkulator Bunga Majemuk',
      h1: 'Kalkulator Bunga Majemuk (Harian, Bulanan & Tahunan)',
      metaTitle: 'Kalkulator Bunga Majemuk Online – Simulasi Investasi | Ultimatrix',
      metaDescription:
        'Hitung hasil bunga majemuk harian, bulanan, kuartalan, atau tahunan dengan setoran rutin bulanan dan tabel pertumbuhan tahunan.',
      tagline: 'Simulasi modal awal, setoran bulanan, frekuensi bunga majemuk, dan tabel tahunan.',
      keywords: ['kalkulator bunga majemuk', 'bunga majemuk bulanan', '복리계산기'],
      faqQuestion: 'Bagaimana cara menghitung bunga majemuk harian, bulanan, dan tahunan?',
    },
  },
  tr: {
    '/bmi-calculator': {
      name: 'VKİ (BMI) Hesaplama',
      h1: 'Vücut Kitle İndeksi (VKİ / BMI) Hesaplama',
      metaTitle: 'VKİ (BMI) Hesaplama – İdeal Kilo & Vücut Kitle İndeksi | Ultimatrix',
      metaDescription:
        'Boy (cm/ft) ve kilonuzu (kg/lbs) girerek Vücut Kitle İndeksinizi (VKİ), DSÖ kategorinizi ve ideal kilo aralığınızı hemen öğrenin.',
      tagline: 'Kg, cm veya pound birimlerinde anlık VKİ ve sağlıklı kilo aralığı hesaplama.',
      keywords: ['vki hesaplama', 'bmi hesaplama', 'vücut kitle indeksi', 'ideal kilo hesaplama'],
      faqQuestion: 'Vücut Kitle İndeksi (VKİ) nasıl hesaplanır ve sonuçlar ne anlama gelir?',
    },
    '/bmi-calculator/men': {
      name: 'Erkekler İçin VKİ Hesaplama',
      h1: 'Erkekler İçin VKİ (BMI) ve İdeal Kilo Hesaplama',
      metaTitle: 'Erkek VKİ Hesaplama – Kas Kütlesi ve İdeal Kilo | Ultimatrix',
      metaDescription:
        'Erkekler için kas kütlesi ve yağ oranı rehberiyle Vücut Kitle İndeksi ve sağlıklı kilo aralığını hesaplayın.',
      tagline: 'Kas kütlesi ve vücut yağ oranı referanslarıyla erkeklere özel VKİ analizi.',
      keywords: ['erkek vki hesaplama', 'erkek ideal kilo', 'erkek bmi hesaplama'],
      faqQuestion: 'Erkeklerde VKİ ve kas kütlesi ilişkisi nasıl yorumlanmalıdır?',
    },
    '/bmi-calculator/women': {
      name: 'Kadınlar İçin VKİ Hesaplama',
      h1: 'Kadınlar İçin VKİ (BMI) ve Yaşa Göre Yağ Oranı',
      metaTitle: 'Kadın VKİ Hesaplama – İdeal Kilo & Yaş Referansı | Ultimatrix',
      metaDescription:
        'Kadınlar için VKİ değerini hesaplayın ve yaş gruplarına göre sağlıklı vücut yağ oranlarını inceleyin.',
      tagline: 'Yaşa bağlı sağlıklı vücut yağ oranı rehberiyle kadınlar için VKİ değerlendirmesi.',
      keywords: ['kadın vki hesaplama', 'bayan ideal kilo', 'kadın bmi hesaplama'],
      faqQuestion: 'Kadınlar için VKİ ve ideal kilo aralığı nasıl değerlendirilir?',
    },
    '/child-bmi-calculator': {
      name: 'Çocuk ve Genç VKİ Hesaplama',
      h1: 'Çocuk ve Ergen VKİ Hesaplama (2–19 Yaş Persentil)',
      metaTitle: 'Çocuk VKİ Hesaplama – 2–19 Yaş CDC Persentil Değeri | Ultimatrix',
      metaDescription:
        '2–19 yaş arası çocuklar ve gençler için yaş (yıl/ay) ve cinsiyete göre tam VKİ ve CDC/DSÖ persentil kategorisini hesaplayın.',
      tagline: 'Yaş, ay ve cinsiyete göre pediatrik VKİ persentil değerlendirmesi.',
      keywords: ['çocuk vki hesaplama', 'çocuk boy kilo persentil', 'genç bmi hesaplama'],
      faqQuestion: '2–19 yaş çocuklarda VKİ neden yetişkin sınırları yerine persentil ile ölçülür?',
    },
    '/bmi-calculator-by-age': {
      name: 'Yaşa ve Cinsiyete Göre VKİ Hesaplama',
      h1: 'Yaşa ve Cinsiyete Göre VKİ (BMI) Hesaplama',
      metaTitle: 'Yaşa Göre VKİ Hesaplama – Çocuktan İleri Yaşa Tablo | Ultimatrix',
      metaDescription:
        '2 yaşından 100+ yaşa kadar çocuk persentili ile yetişkin yaş aralıkları arasında otomatik geçiş yapan VKİ hesaplayıcı.',
      tagline: 'Yaşınıza göre pediatrik persentil ve yetişkin VKİ aralıkları arasında otomatik geçiş.',
      keywords: ['yaşa göre vki', 'yaş cinsiyet bmi hesaplama', 'yaşa göre ideal kilo'],
      faqQuestion: 'Sağlıklı VKİ aralığı yaşa göre nasıl değişir?',
    },
    '/height-calculator': {
      name: 'Boy Çevirici ve Boy Tahmini',
      h1: 'Boy Hesaplama: Fit/İnç–Cm Çevirici ve Çocuk Boy Tahmini',
      metaTitle: 'Boy Çevirici (Fit-Cm) ve Çocuk Yetişkin Boy Tahmini | Ultimatrix',
      metaDescription:
        'Fit ve inçi anında santimetreye çevirin; anne ve baba boyuna göre çocuğunuzun tahmini yetişkin boyunu hesaplayın.',
      tagline: 'Fit/inç ↔ cm dönüşümü ve ebeveyn boyuna göre tahmini yetişkin boyu.',
      keywords: ['boy hesaplama', 'fit cm çevirme', 'çocuk boy tahmini'],
      faqQuestion: 'Fit ve inç santimetreye nasıl çevrilir ve çocuğun yetişkin boyu nasıl tahmin edilir?',
    },
    '/pregnancy-due-date-calculator': {
      name: 'Doğum Tarihi ve Gebelik Haftası Hesaplama',
      h1: 'Tahmini Doğum Tarihi ve Gebelik Haftası Hesaplama',
      metaTitle: 'Gebelik Haftası & Doğum Tarihi Hesaplama (SAT & Tüp Bebek) | Ultimatrix',
      metaDescription:
        'Son adet tarihi, döllenme tarihi veya tüp bebek (IVF) transferine göre tahmini doğum tarihini, gebelik haftasını ve trimesteri hesaplayın.',
      tagline: 'Son adet tarihi, gebelik başlangıcı veya IVF transferine göre doğum tarihi.',
      keywords: ['doğum tarihi hesaplama', 'gebelik haftası hesaplama', 'tahmini doğum tarihi'],
      faqQuestion: 'Tahmini doğum tarihi ve gebelik haftası nasıl hesaplanır?',
    },
    '/dog-pregnancy-due-date-calculator': {
      name: 'Köpek Gebelik ve Doğum Hesaplama',
      h1: 'Köpek Gebelik Süresi ve Doğum Tarihi Hesaplama (63 Gün)',
      metaTitle: 'Köpek Doğum Tarihi Hesaplama – 63 Gün Kuralı | Ultimatrix',
      metaDescription:
        'Çiftleşme tarihine göre köpeğinizin tahmini doğum tarihini (63 gün kuralı), doğum aralığını ve haftalık gelişimini hesaplayın.',
      tagline: 'Köpeklerde tahmini doğum günü, normal doğum aralığı ve haftalık takip.',
      keywords: ['köpek gebelik hesaplama', 'köpek doğum tarihi', 'köpek kaç günde doğurur'],
      faqQuestion: 'Köpek gebeliği kaç gün sürer ve doğum tarihi nasıl hesaplanır?',
    },
    '/age-calculator': {
      name: 'Yaş Hesaplama',
      h1: 'Doğum Tarihine Göre Tam Yaş Hesaplama',
      metaTitle: 'Yaş Hesaplama – Yıl, Ay, Hafta ve Gün Olarak Yaş | Ultimatrix',
      metaDescription:
        'Doğum tarihinizden itibaren tam yaşınızı yıl, ay, hafta ve gün olarak hesaplayın; bir sonraki doğum gününüze kalan süreyi görün.',
      tagline: 'Yıl, ay, gün cinsinden kesin yaş ve doğum günü geri sayımı.',
      keywords: ['yaş hesaplama', 'doğum tarihi yaş', 'kaç gün yaşadım'],
      faqQuestion: 'Yaş hesaplayıcı tam yaşı yıl, ay ve gün olarak nasıl hesaplar?',
    },
    '/child-age-calculator': {
      name: 'Bebek ve Çocuk Ay Hesaplama',
      h1: 'Bebek Yaşı Ay, Hafta ve Gün Hesaplama',
      metaTitle: 'Bebek Ay Hesaplama – Bebek Kaç Aylık & Haftalık | Ultimatrix',
      metaDescription:
        'Bebeğinizin doğum tarihine göre tam ay, hafta ve gün yaşını hesaplayın; aşı ve doktor kontrollerini kolayca takip edin.',
      tagline: 'Pediatrik kontroller ve gelişim takibi için kesin bebek ay ve hafta hesabı.',
      keywords: ['bebek ay hesaplama', 'bebeğim kaç aylık', 'çocuk yaşı hafta hesaplama'],
      faqQuestion: 'İlk iki yılda bebek yaşı neden ay ve hafta olarak takip edilir?',
    },
    '/date-calculator': {
      name: 'Tarih ve Gün Farkı Hesaplama',
      h1: 'İki Tarih Arasındaki Gün Sayısı Hesaplama',
      metaTitle: 'Tarih Hesaplama – İki Tarih Arası Gün Farkı & Gün Ekleme | Ultimatrix',
      metaDescription:
        'İki tarih arasındaki tam gün, hafta ve ay farkını hesaplayın ya da seçilen bir tarihe gün, hafta veya ay ekleyin/çıkarın.',
      tagline: 'Tarihler arası gün farkını bulun veya takvime gün, hafta, ay ekleyin.',
      keywords: ['iki tarih arası gün hesaplama', 'tarih hesaplama', 'gün ekleme çıkarma'],
      faqQuestion: 'İki tarih arasındaki kesin gün sayısı nasıl hesaplanır?',
    },
    '/time-duration-calculator': {
      name: 'Saat ve Süre Hesaplama',
      h1: 'Saat, Dakika ve Saniye Süre Hesaplama',
      metaTitle: 'Saat Hesaplama – Çalışma Süresi & Saat Farkı | Ultimatrix',
      metaDescription:
        'İki saat arasındaki geçen süreyi saat, dakika ve saniye cinsinden bulun veya zaman aralıklarını toplayıp çıkarın.',
      tagline: 'Başlangıç-bitiş saat farkı ve saat-dakika-saniye toplama/çıkarma.',
      keywords: ['saat hesaplama', 'iki saat arası süre', 'mesai saati hesaplama'],
      faqQuestion: 'Başlangıç ve bitiş saatleri arasındaki toplam süre nasıl hesaplanır?',
    },
    '/percentage-calculator': {
      name: 'Yüzde Hesaplama',
      h1: 'Online Yüzde Hesaplama (3 Farklı Mod)',
      metaTitle: 'Yüzde Hesaplama – Artış, Azalış ve Oran Hesabı | Ultimatrix',
      metaDescription:
        'Bir sayının yüzdesini, iki sayı arasındaki yüzde oranını ve yüzde artış/azalış değişimini anında hesaplayın.',
      tagline: 'Yüzde bulma, oran hesaplama ve yüzde değişim analizi.',
      keywords: ['yüzde hesaplama', 'yüzde artış hesaplama', 'oran yüzde bulma'],
      faqQuestion: 'Yüzde hesaplama ve yüzde değişim hangi formüllerle bulunur?',
    },
    '/cgpa-to-percentage-calculator': {
      name: 'CGPA / 100’lük Not Çevirici',
      h1: 'CGPA / GPA Yüzdelik Not Dönüştürücü (10, 5 ve 4 Sistem)',
      metaTitle: 'CGPA Yüzde Çevirme – 10’luk ve 4’lük Not Dönüştürücü | Ultimatrix',
      metaDescription:
        '10, 5 veya 4’lük sistemdeki CGPA not ortalamanızı uluslararası başvurular için yüzdelik nota dönüştürün.',
      tagline: 'Üniversite ve iş başvuruları için CGPA puanını yüzdelik sisteme çevirin.',
      keywords: ['cgpa yüzde çevirme', 'not ortalaması yüzdelik çevirme', 'gpa yüzde hesaplama'],
      faqQuestion: '10, 5 ve 4’lük sistemlerde CGPA notu yüzdeye nasıl çevrilir?',
    },
    '/gpa-calculator': {
      name: 'Üniversite Not Ortalaması (GPA)',
      h1: 'Kredi Ağırlıklı Üniversite GPA / AGNO Hesaplama (4.0)',
      metaTitle: 'Üniversite GPA / AGNO Hesaplama – 4.0 Kredi Sistemi | Ultimatrix',
      metaDescription:
        'Ders notlarınızı ve kredilerinizi girerek dönemlik ve genel not ortalamanızı (GPA / AGNO) anında hesaplayın.',
      tagline: 'Dönemlik ve genel not ortalamasını kredi ağırlıklı olarak hesaplayın.',
      keywords: ['gpa hesaplama', 'üniversite not ortalaması', 'agno hesaplama'],
      faqQuestion: 'Kredi ağırlıklı dönem ve genel not ortalaması (GPA) nasıl hesaplanır?',
    },
    '/high-school-gpa-calculator': {
      name: 'Lise GPA Hesaplama',
      h1: 'Lise Not Ortalaması Hesaplama (Normal, Honors & AP/IB)',
      metaTitle: 'Lise GPA Hesaplama – Ağırlıklı ve Ağırlıksız Ortalama | Ultimatrix',
      metaDescription:
        'Normal derslerin yanı sıra Honors ve AP/IB ek puanlı dersler için ağırlıklı ve ağırlıksız lise GPA hesaplayın.',
      tagline: 'Üniversite başvuruları için normal ve AP/IB ağırlıklı lise ortalaması.',
      keywords: ['lise gpa hesaplama', 'ağırlıklı gpa', 'ap ib not hesaplama'],
      faqQuestion: 'Ağırlıksız (Unweighted) ve ağırlıklı (Weighted) lise GPA arasındaki fark nedir?',
    },
    '/weight-loss-percentage-calculator': {
      name: 'Kilo Kaybı Yüzdesi Hesaplama',
      h1: 'Kilo Verme Yüzdesi Hesaplama (Kg / Lbs)',
      metaTitle: 'Kilo Kaybı Yüzdesi Hesaplama – Kaç Kilo Verdim % | Ultimatrix',
      metaDescription:
        'Başlangıç kilonuza göre verdiğiniz kilo miktarını ve vücut ağırlığınızın yüzde kaçını kaybettiğinizi hesaplayın.',
      tagline: 'Başlangıç ve güncel kilonuzla tam kilo kaybı yüzdesini takip edin.',
      keywords: ['kilo kaybı yüzdesi', 'zayıflama yüzdesi hesaplama', 'verilen kilo yüzdesi'],
      faqQuestion: 'Kilo verme yüzdesi nasıl hesaplanır?',
    },
    '/scientific-calculator': {
      name: 'Bilimsel Hesap Makinesi',
      h1: 'Online Bilimsel Hesap Makinesi (Trigonometri & Logaritma)',
      metaTitle: 'Online Bilimsel Hesap Makinesi – Sin, Cos, Tan, Log & Klavye | Ultimatrix',
      metaDescription:
        'sin, cos, tan, log, ln, üs, kök, faktöriyel, DEG/RAD modu ve klavye desteği sunan tam özellikli bilimsel hesap makinesi.',
      tagline: 'Trigonometri, logaritma, faktöriyel, Ans belleği ve klavye kısayolları.',
      keywords: ['bilimsel hesap makinesi', 'online bilimsel hesap makinesi', 'trigonometri hesaplama'],
      faqQuestion: 'Bu Online Bilimsel Hesap Makinesinde hangi fonksiyonlar bulunur?',
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'Casio fx-115ES Tarzı Hesap Makinesi',
      h1: 'Casio fx-115ES Plus Tarzı Bilimsel Hesap Makinesi',
      metaTitle: 'Casio fx-115ES Online Hesap Makinesi – Kesir & nPr/nCr | Ultimatrix',
      metaDescription:
        'Kesir işlemleri, permütasyon nPr, kombinasyon nCr ve DEG/RAD/GRAD modlarıyla Casio fx-115ES Plus esintili hesap makinesi.',
      tagline: 'Kesirler, nPr/nCr kombinatorik ve açı modlarıyla mühendislik düzeni.',
      keywords: ['casio hesap makinesi online', 'casio fx 115es', 'kesirli hesap makinesi'],
      faqQuestion: 'Casio fx-115ES tarzı bu hesap makinesi sınav ve mühendislik için neden kullanışlıdır?',
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'Sharp 12 Haneli Hesap Makinesi',
      h1: 'Sharp 12 Haneli Bilimsel ve Ticari Hesap Makinesi',
      metaTitle: 'Sharp 12 Haneli Hesap Makinesi Online – Yüksek Hassasiyet | Ultimatrix',
      metaDescription:
        'Net 12 haneli ekran, binlik ayırıcılar, M+/M- bellek tuşları ve bilimsel fonksiyonlarla yüksek hassasiyetli hesap makinesi.',
      tagline: 'Net 12 haneli ekran, bellek tuşları ve gelişmiş matematik fonksiyonları.',
      keywords: ['12 haneli hesap makinesi', 'sharp hesap makinesi online', 'ticari hesap makinesi'],
      faqQuestion: '12 haneli ekranlı hesap makinesi finans ve teknik hesaplarda ne avantaj sağlar?',
    },
    '/discount-calculator': {
      name: 'İndirim Hesaplama',
      h1: 'Yüzde İndirim ve İndirimli Fiyat Hesaplama',
      metaTitle: 'İndirim Hesaplama – Çift İndirim & Kazanç Hesabı | Ultimatrix',
      metaDescription:
        'Tekli veya art arda çift yüzde indirim sonrası ödenecek son fiyatı ve toplam tasarruf tutarını anında hesaplayın.',
      tagline: 'Tek veya kademeli indirim sonrası net fiyat ve tasarruf tutarı.',
      keywords: ['indirim hesaplama', 'yüzde indirim hesaplama', 'indirimli fiyat'],
      faqQuestion: 'İndirimli fiyat ve kademeli çift indirim nasıl hesaplanır?',
    },
    '/discount-calculator-with-tax': {
      name: 'İndirim + KDV Vergi Hesaplama',
      h1: 'İndirim ve KDV / Satış Vergisi Dahil Fiyat Hesaplama',
      metaTitle: 'İndirim + KDV Hesaplama – Kasadaki Net Tutar | Ultimatrix',
      metaDescription:
        'Önce yüzde indirimi uygulayın, ardından KDV veya satış vergisini ekleyerek kasada ödeyeceğiniz toplam tutarı görün.',
      tagline: 'İndirim uygulandıktan sonraki tutara KDV veya satış vergisini ekler.',
      keywords: ['indirim kdv hesaplama', 'indirimli fiyata kdv ekleme', 'vergi dahil indirim'],
      faqQuestion: 'İndirimli alışverişlerde KDV indirimden önce mi sonra mı hesaplanır?',
    },
    '/emi-calculator': {
      name: 'Kredi Taksit (EMI) Hesaplama',
      h1: 'Aylık Kredi Taksiti (EMI) ve Ödeme Planı Hesaplama',
      metaTitle: 'Kredi Hesaplama (EMI) – Aylık Taksit & Amortisman Tablosu | Ultimatrix',
      metaDescription:
        'Konut, taşıt veya ihtiyaç krediniz için aylık taksit tutarını, toplam faizi ve yıllık ödeme tablosunu hesaplayın.',
      tagline: 'Aylık taksit, toplam faiz maliyeti ve yıllık kredi ödeme planı.',
      keywords: ['kredi hesaplama', 'aylık kredi taksiti emi', 'konut kredisi hesaplama'],
      faqQuestion: 'Aylık kredi taksiti (EMI) ve toplam faiz nasıl hesaplanır?',
    },
    '/hdfc-emi-calculator': {
      name: 'HDFC Kredi EMI Hesaplama',
      h1: 'HDFC Konut, Taşıt ve İhtiyaç Kredisi EMI Hesaplama',
      metaTitle: 'HDFC EMI Hesaplama – Konut, Araç & Bireysel Kredi | Ultimatrix',
      metaDescription:
        'Konut, araç ve bireysel krediler için aylık taksit tutarını, faiz toplamını ve yıllık amortisman çizelgesini hesaplayın.',
      tagline: 'Kredi türüne göre aylık EMI taksiti ve anapara/faiz dökümü.',
      keywords: ['hdfc emi hesaplama', 'konut kredisi emi', 'taşıt kredisi hesaplama'],
      faqQuestion: 'HDFC EMI hesaplayıcı ile aylık taksit ve faiz yükü nasıl tahmin edilir?',
    },
    '/sip-calculator': {
      name: 'Düzenli Yatırım (SIP) Hesaplama',
      h1: 'Aylık Düzenli Yatırım (SIP) ve Bileşik Getiri Hesaplama',
      metaTitle: 'SIP Yatırım Hesaplama – Bileşik Faiz & Gelecek Değer | Ultimatrix',
      metaDescription:
        'Aylık düzenli yatırım tutarınıza, yıllık getiri oranına ve vadeye göre bileşik getiriyle ulaşacağınız toplam sermayeyi hesaplayın.',
      tagline: 'Yatırılan anapara, bileşik kazanç ve uzun vadeli portföy büyümesi.',
      keywords: ['sip hesaplama', 'bileşik getiri hesaplama', 'aylık birikim hesaplama'],
      faqQuestion: 'Aylık düzenli yatırımlarda (SIP) bileşik getiri nasıl hesaplanır?',
    },
    '/gst-calculator': {
      name: 'KDV / GST Vergi Hesaplama',
      h1: 'KDV / GST Hesaplama (Vergi Dahil ve Hariç)',
      metaTitle: 'KDV ve GST Hesaplama Online – KDV Ekleme ve Ayırma | Ultimatrix',
      metaDescription:
        'Net tutara KDV / GST ekleyin veya brüt tutardan vergi matrahını ve vergi miktarını anında ayırın.',
      tagline: 'Vergi hariçten toplama ve vergi dahilden matrah ayırma işlemleri.',
      keywords: ['kdv hesaplama', 'gst hesaplama', 'kdv dahil hariç ayırma'],
      faqQuestion: 'KDV veya GST dahil fiyattan vergi tutarı nasıl ayrıştırılır?',
    },
    '/compound-interest-calculator': {
      name: 'Bileşik Faiz Hesaplayıcı',
      h1: 'Bileşik Faiz ve Getiri Hesaplama (Günlük, Aylık, Yıllık)',
      metaTitle: 'Bileşik Faiz Hesaplama – Aylık Birikim ve 72 Kuralı | Ultimatrix',
      metaDescription:
        'Başlangıç anaparası ve aylık ek yatırımlarla günlük, aylık, üç aylık ve yıllık bileşik faiz getirisini yıllık tabloyla hesaplayın.',
      tagline: 'Anapara, aylık ekleme, bileşik faiz periyodu ve yıllık büyüme tablosu.',
      keywords: ['bileşik faiz hesaplama', 'günlük bileşik faiz', '72 kuralı', '복리계산기'],
      faqQuestion: 'Günlük, aylık ve yıllık bileşik faiz nasıl hesaplanır?',
    },
  },
  ar: {
    '/bmi-calculator': {
      name: 'حاسبة مؤشر كتلة الجسم BMI',
      h1: 'حاسبة مؤشر كتلة الجسم (بالكيلوغرام، السنتيمتر والباوند)',
      metaTitle: 'حاسبة مؤشر كتلة الجسم BMI مجاناً – الوزن المثالي | Ultimatrix',
      metaDescription:
        'احسب مؤشر كتلة الجسم (BMI) فوراً بالكيلو والسنتيمتر أو الباوند وتعرّف على تصنيف منظمة الصحة العالمية والوزن الصحي.',
      tagline: 'حساب دقيق لمؤشر كتلة الجسم ونطاق الوزن المثالي بالوحدات المترية والإمبراطورية.',
      keywords: ['حاسبة كتلة الجسم', 'حساب bmi', 'مؤشر كتلة الجسم', 'الوزن المثالي'],
      faqQuestion: 'كيف يتم حساب مؤشر كتلة الجسم (BMI) وما دلالة نتائجه؟',
    },
    '/bmi-calculator/men': {
      name: 'حاسبة كتلة الجسم للرجال',
      h1: 'حاسبة مؤشر كتلة الجسم للرجال مع سياق الكتلة العضلية',
      metaTitle: 'حاسبة BMI للرجال – الوزن المثالي ونسبة الدهون | Ultimatrix',
      metaDescription:
        'احسب مؤشر كتلة الجسم للرجال مع مراعاة الكتلة العضلية ونطاقات الدهون الصحية للذكور.',
      tagline: 'تقييم مؤشر كتلة الجسم للرجال مع مراجع الكتلة العضلية ونسبة الدهون.',
      keywords: ['حاسبة bmi للرجال', 'الوزن المثالي للرجل', 'كتلة الجسم للرجال'],
      faqQuestion: 'كيف يختلف تفسير مؤشر كتلة الجسم لدى الرجال أصحاب الكتلة العضلية؟',
    },
    '/bmi-calculator/women': {
      name: 'حاسبة كتلة الجسم للنساء',
      h1: 'حاسبة مؤشر كتلة الجسم للنساء حسب العمر والطول',
      metaTitle: 'حاسبة BMI للنساء – الوزن المثالي ونسبة الدهون | Ultimatrix',
      metaDescription:
        'احسبي مؤشر كتلة الجسم للنساء مع نطاقات الدهون الصحية الموصى بها حسب الفئة العمرية.',
      tagline: 'تقييم مؤشر كتلة الجسم للنساء مع مرجع نسبة الدهون حسب العمر.',
      keywords: ['حاسبة bmi للنساء', 'الوزن المثالي للمرأة', 'كتلة الجسم للنساء'],
      faqQuestion: 'كيف تستخدمين حاسبة كتلة الجسم للنساء لتقدير نطاق الوزن الصحي؟',
    },
    '/child-bmi-calculator': {
      name: 'حاسبة كتلة الجسم للأطفال والمراهقين',
      h1: 'حاسبة مؤشر كتلة الجسم للأطفال والمراهقين (2 إلى 19 سنة)',
      metaTitle: 'حاسبة BMI للأطفال – النسب المئوية CDC/WHO | Ultimatrix',
      metaDescription:
        'احسب مؤشر كتلة الجسم والمئين العمري للأطفال والمراهقين من سنتين إلى 19 سنة حسب العمر بالسنوات والأشهر والجنس.',
      tagline: 'مئين مؤشر كتلة الجسم للأطفال وفق معايير CDC حسب العمر والجنس.',
      keywords: ['حاسبة bmi للاطفال', 'وزن الطفل المثالي', 'مؤشر كتلة الجسم للمراهقين'],
      faqQuestion: 'لماذا يُقاس مؤشر كتلة الجسم للأطفال (2–19 سنة) بالمئينات العمرية بدلاً من حدود البالغين؟',
    },
    '/bmi-calculator-by-age': {
      name: 'حاسبة كتلة الجسم حسب العمر والجنس',
      h1: 'حاسبة مؤشر كتلة الجسم حسب العمر والجنس (أطفال وبالغين)',
      metaTitle: 'حاسبة BMI حسب العمر والجنس – من سنتين إلى كبار السن | Ultimatrix',
      metaDescription:
        'احسب مؤشر كتلة الجسم من عمر سنتين حتى 100+ سنة مع التبديل التلقائي بين مئينات الأطفال ونطاقات البالغين.',
      tagline: 'تبديل تلقائي بين معايير الأطفال ونطاقات البالغين حسب العمر والجنس.',
      keywords: ['حاسبة bmi حسب العمر', 'كتلة الجسم حسب العمر والجنس', 'جدول الوزن حسب العمر'],
      faqQuestion: 'هل يتغير نطاق مؤشر كتلة الجسم الصحي مع التقدم في العمر؟',
    },
    '/height-calculator': {
      name: 'حاسبة ومحول الطول',
      h1: 'حاسبة الطول: تحويل القدم والبوصة إلى سم وتوقع طول الطفل',
      metaTitle: 'محول الطول من قدم إلى سم وتوقع طول الطفل المستقبلي | Ultimatrix',
      metaDescription:
        'حوّل الطول من القدم والبوصة إلى السنتيمتر فوراً وتوقع طول الطفل عند البلوغ بناءً على طول الأب والأم.',
      tagline: 'تحويل فوري بين القدم/البوصة والسنتيمتر وتقدير طول البلوغ للأطفال.',
      keywords: ['حاسبة الطول', 'تحويل القدم الى سم', 'توقع طول الطفل'],
      faqQuestion: 'كيف يتم تحويل القدم والبوصة إلى سنتيمتر وتقدير طول الطفل عند البلوغ؟',
    },
    '/pregnancy-due-date-calculator': {
      name: 'حاسبة الحمل وموعد الولادة',
      h1: 'حاسبة الحمل وتاريخ الولادة المتوقع (آخر دورة والحقن المجهري)',
      metaTitle: 'حاسبة الحمل وموعد الولادة المتوقع بالأسابيع والأشهر | Ultimatrix',
      metaDescription:
        'احسبي تاريخ الولادة المتوقع وأسابيع الحمل الحالية والأثلاث الثلاثة عبر تاريخ آخر دورة أو التلقيح أو أطفال الأنابيب IVF.',
      tagline: 'تقدير موعد الولادة وأسبوع الحمل حسب آخر دورة أو التخصيب أو IVF.',
      keywords: ['حاسبة الحمل', 'حساب موعد الولادة', 'حاسبة اسابيع الحمل'],
      faqQuestion: 'كيف يتم حساب موعد الولادة المتوقع وأسابيع الحمل بدقة؟',
    },
    '/dog-pregnancy-due-date-calculator': {
      name: 'حاسبة حمل الكلاب وموعد الولادة',
      h1: 'حاسبة مدة حمل الكلاب وتاريخ الولادة (قاعدة 63 يوماً)',
      metaTitle: 'حاسبة حمل الكلاب – موعد الولادة ونافذة الوضع | Ultimatrix',
      metaDescription:
        'احسب تاريخ الولادة المتوقع للكلبة بناءً على قاعدة 63 يوماً من تاريخ التزاوج مع نطاق الولادة الطبيعي ومتابعة الأسابيع.',
      tagline: 'تاريخ الولادة المتوقع للكلاب وفترة الوضع المحتملة ومتابعة أسبوعية.',
      keywords: ['حاسبة حمل الكلاب', 'مدة حمل الكلاب', 'موعد ولادة الكلبة'],
      faqQuestion: 'كم تبلغ مدة حمل الكلاب وكيف يُحسب موعد الولادة المتوقع؟',
    },
    '/age-calculator': {
      name: 'حاسبة العمر الدقيقة',
      h1: 'حاسبة العمر الدقيق بالسنوات والأشهر والأيام',
      metaTitle: 'حاسبة العمر – احسب عمرك الدقيق بالميلادي | Ultimatrix',
      metaDescription:
        'احسب عمرك الدقيق بالسنوات والأشهر والأسابيع والأيام من تاريخ ميلادك مع عداد الأيام المتبقية لعيد ميلادك القادم.',
      tagline: 'عمرك الدقيق بالسنوات والأشهر والأيام وإجمالي الأسابيع حتى اليوم.',
      keywords: ['حاسبة العمر', 'احسب عمرك', 'حساب العمر بالميلادي'],
      faqQuestion: 'كيف تحسب أداة حساب العمر السنوات والأشهر والأيام بدقة؟',
    },
    '/child-age-calculator': {
      name: 'حاسبة عمر الرضع والأطفال',
      h1: 'حاسبة عمر الطفل والرضيع بالأشهر والأسابيع والأيام',
      metaTitle: 'حاسبة عمر الرضيع بالأشهر والأسابيع الدقيقة | Ultimatrix',
      metaDescription:
        'احسب عمر طفلك أو رضيعك بدقة بالأشهر والأسابيع والأيام لمتابعة التطعيمات ومراحل النمو.',
      tagline: 'حساب دقيق لعمر الرضع والأطفال لمتابعة زيارات الطبيب والنمو.',
      keywords: ['حاسبة عمر الطفل', 'عمر الرضيع بالاشهر', 'حساب عمر الرضيع بالاسابيع'],
      faqQuestion: 'لماذا يُحسب عمر الرضع بالأشهر والأسابيع خلال أول عامين؟',
    },
    '/date-calculator': {
      name: 'حاسبة التواريخ والأيام',
      h1: 'حاسبة عدد الأيام بين تاريخين وإضافة أو طرح الأيام',
      metaTitle: 'حاسبة التاريخ – الفرق بين تاريخين وحساب الأيام | Ultimatrix',
      metaDescription:
        'احسب عدد الأيام والأسابيع والأشهر بين أي تاريخين، أو أضف واطرح أياماً وأسابيع وشهوراً من أي تاريخ.',
      tagline: 'حساب الفرق الدقيق بين تاريخين وإضافة أو طرح المدد الزمنية.',
      keywords: ['حاسبة التاريخ', 'الفرق بين تاريخين', 'حساب عدد الايام'],
      faqQuestion: 'كيف يتم حساب عدد الأيام الدقيق بين تاريخين في التقويم؟',
    },
    '/time-duration-calculator': {
      name: 'حاسبة المدة الزمنية والساعات',
      h1: 'حاسبة الوقت والساعات والدقائق والثواني',
      metaTitle: 'حاسبة الوقت – حساب ساعات العمل والمدة الزمنية | Ultimatrix',
      metaDescription:
        'احسب المدة الزمنية المنقضية بين وقتين بالساعات والدقائق والثواني أو اجمع واطرح فترات الوقت بسهولة.',
      tagline: 'حساب ساعات العمل والمدة الدقيقة بين وقتين وجمع أو طرح الوقت.',
      keywords: ['حاسبة الوقت', 'حساب ساعات العمل', 'الفرق بين وقتين'],
      faqQuestion: 'كيف أحسب المدة الزمنية الإجمالية بين وقت البدء ووقت الانتهاء؟',
    },
    '/percentage-calculator': {
      name: 'حاسبة النسبة المئوية',
      h1: 'حاسبة النسبة المئوية أونلاين (3 أوضاع)',
      metaTitle: 'حاسبة النسبة المئوية – حساب النسبة والزيادة والنقصان | Ultimatrix',
      metaDescription:
        'احسب X% من Y، أو نسبة X إلى Y، أو نسبة الزيادة والنقصان المئوية فوراً وبكل دقة.',
      tagline: 'حساب قيمة النسبة المئوية، ونسبة الجزء للكل، ونسبة التغير.',
      keywords: ['حاسبة النسبة المئوية', 'حساب النسبة المئوية', 'نسبة الزيادة والنقصان'],
      faqQuestion: 'ما هي القوانين المستخدمة لحساب النسبة المئوية ونسبة التغير؟',
    },
    '/cgpa-to-percentage-calculator': {
      name: 'محول CGPA إلى نسبة مئوية',
      h1: 'حاسبة تحويل المعدل التراكمي CGPA إلى نسبة مئوية',
      metaTitle: 'تحويل CGPA إلى نسبة مئوية (مقياس 10 و 5 و 4) | Ultimatrix',
      metaDescription:
        'حوّل معدلك التراكمي CGPA إلى نسبة مئوية مكافئة وفق معادلات الجامعات بمقياس 10 و 5 و 4.',
      tagline: 'تحويل فوري للمعدل التراكمي إلى نسبة مئوية للتقديمات الأكاديمية.',
      keywords: ['تحويل cgpa الى نسبة مئوية', 'حساب المعدل بالنسبة المئوية', 'تحويل المعدل'],
      faqQuestion: 'كيف يتم تحويل المعدل التراكمي CGPA إلى نسبة مئوية؟',
    },
    '/gpa-calculator': {
      name: 'حاسبة المعدل التراكمي GPA',
      h1: 'حاسبة المعدل الفصلي والتراكمي GPA (مقياس 4.0)',
      metaTitle: 'حاسبة المعدل الجامعي GPA – بالساعات المعتمدة | Ultimatrix',
      metaDescription:
        'احسب معدلك الفصلي والتراكمي GPA بدقة بإدخال المواد والتقديرات والساعات المعتمدة.',
      tagline: 'حساب المعدل الفصلي والتراكمي الموزون بالساعات المعتمدة.',
      keywords: ['حاسبة المعدل التراكمي', 'حساب gpa', 'حاسبة المعدل الجامعي'],
      faqQuestion: 'كيف يُحسب المعدل الجامعي الفصلي والتراكمي بناءً على الساعات المعتمدة؟',
    },
    '/high-school-gpa-calculator': {
      name: 'حاسبة معدل الثانوية العامة GPA',
      h1: 'حاسبة معدل المرحلة الثانوية (العادي والموزون Honors و AP)',
      metaTitle: 'حاسبة معدل الثانوية GPA – الموزون وغير الموزون | Ultimatrix',
      metaDescription:
        'احسب معدل الثانوية العامة غير الموزون والموزون مع احتساب النقاط الإضافية لمقررات Honors و AP/IB.',
      tagline: 'حساب معدل الثانوية العادي والموزون لتجهيز ملفات القبول الجامعي.',
      keywords: ['حاسبة معدل الثانوية', 'gpa الموزون', 'حساب درجات الثانوي'],
      faqQuestion: 'ما الفرق بين معدل الثانوية غير الموزون والموزون (Weighted GPA)؟',
    },
    '/weight-loss-percentage-calculator': {
      name: 'حاسبة نسبة خسارة الوزن',
      h1: 'حاسبة النسبة المئوية لفقدان الوزن (كجم / باوند)',
      metaTitle: 'حاسبة نسبة نزول الوزن – احسب نسبة فقدان وزنك | Ultimatrix',
      metaDescription:
        'احسب النسبة المئوية للوزن المفقود ومقدار الكيلوغرامات التي خسرتها مقارنة بوزنك الابتدائي.',
      tagline: 'تتبّع تقدمك في إنقاص الوزن بالنسبة المئوية الدقيقة.',
      keywords: ['نسبة خسارة الوزن', 'حساب نسبة نزول الوزن', 'حاسبة الرجيم'],
      faqQuestion: 'كيف يتم حساب النسبة المئوية لفقدان الوزن؟',
    },
    '/scientific-calculator': {
      name: 'آلة حاسبة علمية أونلاين',
      h1: 'الآلة الحاسبة العلمية المتقدمة (مثلثات ولوغاريتمات)',
      metaTitle: 'آلة حاسبة علمية أونلاين مجانية – الدرجات والراديان | Ultimatrix',
      metaDescription:
        'آلة حاسبة علمية كاملة تدعم الدوال المثلثية واللوغاريتمات والأسس والجذور والمضروب ولوحة المفاتيح.',
      tagline: 'الدوال المثلثية، اللوغاريتمات، المضروب، ذاكرة Ans ودعم لوحة المفاتيح.',
      keywords: ['الة حاسبة علمية', 'حاسبة علمية اونلاين', 'حاسبة المثلثات'],
      faqQuestion: 'ما الوظائف المتاحة في هذه الآلة الحاسبة العلمية عبر الإنترنت؟',
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'حاسبة علمية بنمط Casio fx-115ES',
      h1: 'آلة حاسبة علمية بنمط Casio fx-115ES Plus',
      metaTitle: 'حاسبة Casio fx-115ES أونلاين – الكسور والتباديل | Ultimatrix',
      metaDescription:
        'محاكاة لحاسبة Casio fx-115ES Plus مع الكسور، التباديل nPr، التوافيق nCr، وأوضاع DEG/RAD/GRAD.',
      tagline: 'تصميم هندسي مع الكسور والتوافيق والتباديل وأوضاع الزوايا.',
      keywords: ['حاسبة كاسيو اونلاين', 'casio fx 115es', 'الة حاسبة كسور'],
      faqQuestion: 'ما الذي يميز الآلة الحاسبة بنمط Casio fx-115ES في الدراسة والهندسة؟',
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'حاسبة Sharp من 12 خانة',
      h1: 'آلة حاسبة علمية وتجارية Sharp بـ 12 رقماً',
      metaTitle: 'حاسبة Sharp 12 خانة أونلاين – دقة عالية وذاكرة | Ultimatrix',
      metaDescription:
        'شاشة واضحة من 12 خانة مع فواصل الآلاف، مفاتيح الذاكرة M+/M-، والوظائف العلمية الكاملة.',
      tagline: 'عرض واضح لـ 12 خانة مع مفاتيح الذاكرة والعمليات العلمية.',
      keywords: ['حاسبة 12 خانة', 'حاسبة شارب اونلاين', 'الة حاسبة دقيقة'],
      faqQuestion: 'ما فائدة شاشة الـ 12 خانة في الحاسبة للمحاسبة والعمليات الهندسية؟',
    },
    '/discount-calculator': {
      name: 'حاسبة الخصم والتخفيضات',
      h1: 'حاسبة نسبة الخصم والسعر النهائي بعد التخفيض',
      metaTitle: 'حاسبة الخصم أونلاين – حساب التخفيض والتوفير | Ultimatrix',
      metaDescription:
        'احسب السعر بعد الخصم ومبلغ التوفير الفعلي مع دعم تطبيق خصم واحد أو خصمين متتاليين.',
      tagline: 'حساب السعر النهائي ومقدار التوفير لخصم مفرد أو خصمين إضافيين.',
      keywords: ['حاسبة الخصم', 'حساب نسبة التخفيض', 'السعر بعد الخصم'],
      faqQuestion: 'كيف يُحسب السعر النهائي عند تطبيق خصم أو خصمين متتاليين؟',
    },
    '/discount-calculator-with-tax': {
      name: 'حاسبة الخصم مع الضريبة',
      h1: 'حاسبة الخصم مضافاً إليه الضريبة (VAT / Sales Tax)',
      metaTitle: 'حاسبة الخصم مع ضريبة القيمة المضافة – الإجمالي النهائي | Ultimatrix',
      metaDescription:
        'احسب السعر الإجمالي عند الدفع بتطبيق نسبة الخصم أولاً ثم إضافة ضريبة القيمة المضافة أو المبيعات.',
      tagline: 'خصم النسبة المئوية أولاً ثم إضافة الضريبة لحساب الفاتورة النهائية.',
      keywords: ['حاسبة الخصم والضريبة', 'السعر بعد الخصم والضريبة', 'حساب الضريبة بعد الخصم'],
      faqQuestion: 'هل تُحسب الضريبة قبل الخصم أم بعد تطبيق الخصم؟',
    },
    '/emi-calculator': {
      name: 'حاسبة أقساط القروض (EMI)',
      h1: 'حاسبة القسط الشهري للقروض وجدول السداد (EMI)',
      metaTitle: 'حاسبة القروض والأقساط الشهرية EMI – الفوائد والجدول | Ultimatrix',
      metaDescription:
        'احسب القسط الشهري للقروض العقارية والشخصية وقروض السيارات مع إجمالي الفوائد وجدول السداد السنوي.',
      tagline: 'حساب القسط الشهري وإجمالي الفائدة وجدول الاستهلاك السنوي للقرض.',
      keywords: ['حاسبة القروض', 'حساب القسط الشهري', 'جدول سداد القرض'],
      faqQuestion: 'كيف يتم حساب القسط الشهري المتساوي (EMI) وإجمالي فوائد القرض؟',
    },
    '/hdfc-emi-calculator': {
      name: 'حاسبة قرض HDFC (EMI)',
      h1: 'حاسبة أقساط قروض HDFC (عقاري، سيارات، شخصي)',
      metaTitle: 'حاسبة قروض HDFC EMI – القسط الشهري والفوائد | Ultimatrix',
      metaDescription:
        'قدّر القسط الشهري لقروض المنازل والسيارات والقروض الشخصية مع تفصيل أصل القرض والفائدة سنوياً.',
      tagline: 'تقدير القسط الشهري وتوزيع الأصل والفائدة حسب نوع القرض.',
      keywords: ['حاسبة hdfc emi', 'حاسبة التمويل العقاري', 'حاسبة قرض السيارة'],
      faqQuestion: 'كيف تساعد حاسبة HDFC EMI في تخطيط القسط الشهري والفوائد؟',
    },
    '/sip-calculator': {
      name: 'حاسبة الاستثمار الدوري (SIP)',
      h1: 'حاسبة الاستثمار الشهري (SIP) والفائدة المركبة',
      metaTitle: 'حاسبة الاستثمار SIP والفائدة المركبة الشهرية | Ultimatrix',
      metaDescription:
        'توقّع القيمة المستقبلية لاستثماراتك الشهرية المنتظمة مع حساب العائد المركب وإجمالي الأرباح.',
      tagline: 'تقدير رأس المال المستثمر والعوائد المركبة والقيمة المستقبلية.',
      keywords: ['حاسبة الاستثمار sip', 'حاسبة الفائدة المركبة', 'الاستثمار الشهري'],
      faqQuestion: 'كيف تنمو الاستثمارات الشهرية المنتظمة (SIP) بفضل الفائدة المركبة؟',
    },
    '/gst-calculator': {
      name: 'حاسبة ضريبة القيمة المضافة / GST',
      h1: 'حاسبة الضريبة المضافة GST / VAT (شاملة وغير شاملة)',
      metaTitle: 'حاسبة ضريبة القيمة المضافة والـ GST أونلاين | Ultimatrix',
      metaDescription:
        'أضف الضريبة المضافة إلى السعر الصافي أو استخرج قيمة الضريبة والمبلغ الصافي من السعر الإجمالي فوراً.',
      tagline: 'إضافة الضريبة أو استخراجها من المبلغ الشامل مع تفاصيل صافي السعر.',
      keywords: ['حاسبة الضريبة', 'حاسبة ضريبة القيمة المضافة', 'استخراج الضريبة من المبلغ'],
      faqQuestion: 'كيف أستخرج قيمة الضريبة والمبلغ الصافي من سعر شامل للضريبة؟',
    },
    '/compound-interest-calculator': {
      name: 'حاسبة الفائدة المركبة',
      h1: 'حاسبة الفائدة المركبة (يومي، شهري، ربع سنوي وسنوي)',
      metaTitle: 'حاسبة الفائدة المركبة أونلاين – جدول النمو السنوي | Ultimatrix',
      metaDescription:
        'احسب نمو استثماراتك بالفائدة المركبة اليومية أو الشهرية أو السنوية مع الإيداعات الشهرية وجدول العائد السنوي.',
      tagline: 'حساب رأس المال الابتدائي والإيداع الشهري وفترات التركيب وقاعدة 72.',
      keywords: ['حاسبة الفائدة المركبة', 'حساب الفائدة المركبة', '복리계산기'],
      faqQuestion: 'كيف يتم حساب الفائدة المركبة اليومية والشهرية والسنوية؟',
    },
  },
  pl: {
    '/bmi-calculator': {
      name: 'Kalkulator BMI Online',
      h1: 'Kalkulator BMI (Kg, Cm, Funty i Stopy)',
      metaTitle: 'Kalkulator BMI Online Za Darmo – Prawidłowa Waga WHO | Ultimatrix',
      metaDescription:
        'Oblicz swój wskaźnik masy ciała (BMI) w kg/cm lub funtach i sprawdź przedział prawidłowej wagi według norm WHO.',
      tagline: 'Oblicz wskaźnik BMI w jednostkach metrycznych lub imperialnych wraz z normą wagi.',
      keywords: ['kalkulator bmi', 'oblicz bmi online', 'wskaznik masy ciala', 'prawidlowa waga'],
      faqQuestion: 'Jak obliczyć BMI i jak interpretować wynik w kalkulatorze?',
    },
    '/bmi-calculator/men': {
      name: 'Kalkulator BMI dla Mężczyzn',
      h1: 'Kalkulator BMI dla Mężczyzn – Wzrost i Masa Mięśniowa',
      metaTitle: 'Kalkulator BMI Mężczyzn – Waga Idealna i Tkanka Tłuszczowa | Ultimatrix',
      metaDescription:
        'Oblicz męski wskaźnik BMI z uwzględnieniem masy mięśniowej i zalecanego poziomu tkanki tłuszczowej.',
      tagline: 'Ocena BMI dla mężczyzn z kontekstem masy mięśniowej i tkanki tłuszczowej.',
      keywords: ['kalkulator bmi dla mezczyzn', 'bmi mezczyzna', 'idealna waga mezczyzny'],
      faqQuestion: 'Jak interpretować BMI u mężczyzn z dużą masą mięśniową?',
    },
    '/bmi-calculator/women': {
      name: 'Kalkulator BMI dla Kobiet',
      h1: 'Kalkulator BMI dla Kobiet według Wieku i Wzrostu',
      metaTitle: 'Kalkulator BMI Kobiet – Idealna Waga i Normy Wiekowe | Ultimatrix',
      metaDescription:
        'Oblicz kobiece BMI i sprawdź zalecane przedziały tkanki tłuszczowej dopasowane do grupy wiekowej.',
      tagline: 'Ocena BMI dla kobiet z odniesieniem do wieku i tkanki tłuszczowej.',
      keywords: ['kalkulator bmi dla kobiet', 'bmi kobieta', 'idealna waga kobiety'],
      faqQuestion: 'Jak ocenić prawidłowe BMI i zakres masy ciała u kobiet?',
    },
    '/child-bmi-calculator': {
      name: 'Kalkulator BMI Dzieci i Młodzieży',
      h1: 'Kalkulator BMI dla Dzieci i Nastolatków (2–19 Lat)',
      metaTitle: 'Kalkulator BMI Dziecka – Siatki Centylowe CDC i WHO | Ultimatrix',
      metaDescription:
        'Oblicz BMI oraz centyl pediatryczny dla dzieci i młodzieży w wieku 2–19 lat na podstawie wieku i płci.',
      tagline: 'Siatki centylowe BMI dla dzieci według wieku w latach, miesiącach i płci.',
      keywords: ['kalkulator bmi dziecka', 'siatki centylowe bmi', 'bmi nastolatka'],
      faqQuestion: 'Dlaczego BMI dzieci w wieku 2–19 lat ocenia się na siatkach centylowych?',
    },
    '/bmi-calculator-by-age': {
      name: 'Kalkulator BMI według Wieku i Płci',
      h1: 'Kalkulator BMI według Wieku i Płci (Dzieci i Dorośli)',
      metaTitle: 'Kalkulator BMI według Wieku i Płci – Normy od 2 do 100+ Lat | Ultimatrix',
      metaDescription:
        'Oblicz BMI od 2 do 100+ lat z automatycznym przełączaniem między centylami dziecięcymi a normami dla dorosłych.',
      tagline: 'Automatyczne dopasowanie interpretacji BMI do wieku i płci.',
      keywords: ['bmi wedlug wieku', 'kalkulator bmi wiek plec', 'norma bmi dla seniora'],
      faqQuestion: 'Czy prawidłowy zakres BMI zmienia się wraz z wiekiem?',
    },
    '/height-calculator': {
      name: 'Kalkulator i Przelicznik Wzrostu',
      h1: 'Kalkulator Wzrostu: Stopy i Cale na Cm oraz Wzrost Dziecka',
      metaTitle: 'Przelicznik Wzrostu Stopy na Cm i Prognoza Wzrostu Dziecka | Ultimatrix',
      metaDescription:
        'Przelicz stopy i cale na centymetry oraz oszacuj przyszły dorosły wzrost dziecka na podstawie wzrostu rodziców.',
      tagline: 'Konwersja stopy/cale ↔ cm i prognoza dorosłego wzrostu dziecka.',
      keywords: ['kalkulator wzrostu', 'stopy na cm', 'ile bedzie roslo dziecko'],
      faqQuestion: 'Jak przeliczyć stopy i cale na cm oraz oszacować przyszły wzrost dziecka?',
    },
    '/pregnancy-due-date-calculator': {
      name: 'Kalkulator Terminu Porodu i Ciąży',
      h1: 'Kalkulator Ciąży i Daty Porodu (OM, Zapłodnienie, In Vitro)',
      metaTitle: 'Kalkulator Terminu Porodu – Który Tydzień Ciąży | Ultimatrix',
      metaDescription:
        'Oblicz przewidywaną datę porodu, aktualny tydzień ciąży i trymestry na podstawie ostatniej miesiączki, poczęcia lub IVF.',
      tagline: 'Termin porodu i tydzień ciąży według OM, daty poczęcia lub transferu IVF.',
      keywords: ['kalkulator terminu porodu', 'kalkulator ciazy tygodnie', 'data porodu'],
      faqQuestion: 'Jak dokładnie oblicza się termin porodu i tydzień ciąży?',
    },
    '/dog-pregnancy-due-date-calculator': {
      name: 'Kalkulator Ciąży Psa',
      h1: 'Kalkulator Ciąży i Terminu Porodu u Psa (63 Dni)',
      metaTitle: 'Kalkulator Ciąży Psa – Kiedy Suka Urodzi | Ultimatrix',
      metaDescription:
        'Oblicz przewidywaną datę porodu suki (reguła 63 dni), bezpieczne okno porodu oraz etap rozwoju szczeniąt.',
      tagline: 'Przewidywany dzień porodu u psa, okno porodu i przewodnik tygodniowy.',
      keywords: ['kalkulator ciazy psa', 'ile trwa ciaza u psa', 'termin porodu suki'],
      faqQuestion: 'Ile dni trwa ciąża u psa i jak obliczyć termin porodu?',
    },
    '/age-calculator': {
      name: 'Dokładny Kalkulator Wieku',
      h1: 'Kalkulator Wieku według Daty Urodzenia',
      metaTitle: 'Kalkulator Wieku – Ile Masz Lat, Miesięcy i Dni | Ultimatrix',
      metaDescription:
        'Oblicz dokładny wiek w latach, miesiącach, tygodniach i dniach od daty urodzenia oraz odliczanie do kolejnych urodzin.',
      tagline: 'Dokładny wiek w latach, miesiącach, dniach i odliczanie do urodzin.',
      keywords: ['kalkulator wieku', 'ile mam dokladnie lat', 'liczba przezytych dni'],
      faqQuestion: 'Jak kalkulator wieku oblicza dokładną liczbę lat, miesięcy i dni?',
    },
    '/child-age-calculator': {
      name: 'Kalkulator Wieku Niemowlęcia i Dziecka',
      h1: 'Kalkulator Wieku Dziecka w Miesiącach, Tygodniach i Dniach',
      metaTitle: 'Kalkulator Wieku Niemowlaka – Miesiące i Tygodnie | Ultimatrix',
      metaDescription:
        'Sprawdź dokładny wiek niemowlęcia w ukończonych miesiącach, tygodniach i dniach na potrzeby bilansów i szczepień.',
      tagline: 'Precyzyjny wiek niemowlęcia w miesiącach i tygodniach dla pediatry.',
      keywords: ['kalkulator wieku niemowlaka', 'ile tygodni ma dziecko', 'wiek dziecka w miesiacach'],
      faqQuestion: 'Dlaczego wiek niemowląt podaje się w tygodniach i miesiącach?',
    },
    '/date-calculator': {
      name: 'Kalkulator Dat i Liczby Dni',
      h1: 'Kalkulator Dni Między Datami oraz Dodawanie Dni',
      metaTitle: 'Kalkulator Dat – Ile Dni Między Datami | Ultimatrix',
      metaDescription:
        'Oblicz dokładną liczbę dni, tygodni i miesięcy między dwiema datami lub dodaj i odejmij dni w kalendarzu.',
      tagline: 'Liczba dni pomiędzy datami oraz dodawanie lub odejmowanie dni i miesięcy.',
      keywords: ['kalkulator dat', 'ile dni miedzy datami', 'dodawanie dni do daty'],
      faqQuestion: 'Jak obliczyć dokładną liczbę dni pomiędzy dwiema datami?',
    },
    '/time-duration-calculator': {
      name: 'Kalkulator Czasu i Godzin',
      h1: 'Kalkulator Czasu Trwania (Godziny, Minuty, Sekundy)',
      metaTitle: 'Kalkulator Godzin i Czasu Pracy Online | Ultimatrix',
      metaDescription:
        'Oblicz czas trwania między dwiema godzinami w godzinach, minutach i sekundach lub dodaj i odejmij przedziały czasu.',
      tagline: 'Obliczanie czasu pracy, różnicy godzin oraz sumowania czasu.',
      keywords: ['kalkulator godzin', 'kalkulator czasu pracy', 'roznica miedzy godzinami'],
      faqQuestion: 'Jak obliczyć całkowity czas trwania między godziną rozpoczęcia a zakończenia?',
    },
    '/percentage-calculator': {
      name: 'Kalkulator Procentowy Online',
      h1: 'Kalkulator Procentów (3 Tryby Obliczeń)',
      metaTitle: 'Kalkulator Procentowy – Oblicz Procent z Liczby i Zmianę % | Ultimatrix',
      metaDescription:
        'Oblicz X% z liczby Y, jakim procentem Y jest X oraz procentowy wzrost lub spadek wartości w czasie rzeczywistym.',
      tagline: 'Procent z kwoty, udział procentowy oraz zmiana procentowa.',
      keywords: ['kalkulator procentowy', 'obliczanie procentow', 'procent wzrostu'],
      faqQuestion: 'Jakimi wzorami oblicza się procenty oraz zmianę procentową?',
    },
    '/cgpa-to-percentage-calculator': {
      name: 'Konwerter CGPA na Procenty',
      h1: 'Kalkulator CGPA na Procenty (Skala 10, 5 i 4)',
      metaTitle: 'Przelicznik CGPA na Procenty – Skala 10, 5 i 4 | Ultimatrix',
      metaDescription:
        'Przelicz średnią ocen CGPA na procentowy wynik akademicki w skalach 10, 5 oraz 4 dla rekrutacji na studia.',
      tagline: 'Szybkie przeliczanie ocen CGPA na wartości procentowe.',
      keywords: ['cgpa na procenty', 'przelicznik ocen cgpa', 'kalkulator cgpa'],
      faqQuestion: 'Jak przeliczyć ocenę CGPA na procenty w skali 10, 5 i 4?',
    },
    '/gpa-calculator': {
      name: 'Kalkulator Średniej Ocen (GPA)',
      h1: 'Kalkulator GPA Ważony Punktami ECTS / Kredytami (4.0)',
      metaTitle: 'Kalkulator GPA na Studia – Średnia Semestralna i Ogólna | Ultimatrix',
      metaDescription:
        'Oblicz semestralną i skumulowaną średnią GPA, wpisując przedmioty, oceny oraz liczbę punktów kredytowych.',
      tagline: 'Średnia ocen GPA ważona punktami kredytowymi w skali 4.0.',
      keywords: ['kalkulator gpa', 'srednia ocen studia gpa', 'kalkulator sredniej wazonej'],
      faqQuestion: 'Jak oblicza się średnią ocen GPA ważoną punktami kredytowymi?',
    },
    '/high-school-gpa-calculator': {
      name: 'Kalkulator GPA Liceum',
      h1: 'Kalkulator GPA dla Liceum (Standard, Honors i AP/IB)',
      metaTitle: 'Kalkulator GPA Szkoła Średnia – Ważona i Nieważona | Ultimatrix',
      metaDescription:
        'Oblicz średnią GPA ze szkoły średniej w wersji zwykłej oraz ważonej z bonusami za kursy Honors i AP/IB.',
      tagline: 'Zwykła i ważona średnia GPA przydatna przy aplikacjach na uczelnie.',
      keywords: ['gpa liceum', 'kalkulator gpa wazona', 'srednia ocen liceum'],
      faqQuestion: 'Czym różni się nieważone GPA od ważonego (Weighted GPA) w liceum?',
    },
    '/weight-loss-percentage-calculator': {
      name: 'Kalkulator Procentowej Utraty Wagi',
      h1: 'Kalkulator Procentu Utraty Masy Ciała (Kg / Lbs)',
      metaTitle: 'Kalkulator Procentu Odchudzania – Ile Procent Wagi Spadło | Ultimatrix',
      metaDescription:
        'Sprawdź, jaki procent początkowej masy ciała udało Ci się zrzucić od startu odchudzania do aktualnej wagi.',
      tagline: 'Śledź dokładny procentowy postęp redukcji wagi w kg lub funtach.',
      keywords: ['procent utraty wagi', 'kalkulator odchudzania procent', 'ile schudlem procent'],
      faqQuestion: 'Jak obliczyć procentową utratę masy ciała?',
    },
    '/scientific-calculator': {
      name: 'Kalkulator Naukowy Online',
      h1: 'Kalkulator Naukowy Online (Trygonometria i Logarytmy)',
      metaTitle: 'Darmowy Kalkulator Naukowy Online – Stopnie i Radiany | Ultimatrix',
      metaDescription:
        'Zaawansowany kalkulator naukowy z funkcjami sin, cos, tan, log, ln, potęgami, pierwiastkami, silnią i obsługą klawiatury.',
      tagline: 'Trygonometria, logarytmy, potęgi, pamięć Ans i skróty klawiszowe.',
      keywords: ['kalkulator naukowy online', 'kalkulator trygonometryczny', 'kalkulator logarytmy'],
      faqQuestion: 'Jakie funkcje matematyczne oferuje ten kalkulator naukowy online?',
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'Kalkulator Naukowy w Stylu Casio fx-115ES',
      h1: 'Kalkulator Naukowy Styl Casio fx-115ES Plus Online',
      metaTitle: 'Kalkulator Casio fx-115ES Online – Ułamki i nPr/nCr | Ultimatrix',
      metaDescription:
        'Kalkulator inspirowany Casio fx-115ES Plus z ułamkami, permutacjami nPr, kombinacjami nCr oraz trybami DEG/RAD/GRAD.',
      tagline: 'Układ inżynierski Casio z ułamkami, kombinatoryką i kątami.',
      keywords: ['kalkulator casio online', 'casio fx 115es', 'kalkulator z ulamkami'],
      faqQuestion: 'Dlaczego kalkulator w stylu Casio fx-115ES sprawdza się na studiach i egzaminach?',
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'Kalkulator 12-Cyfrowy Sharp',
      h1: 'Kalkulator Naukowy i Biurowy Sharp 12-Cyfrowy',
      metaTitle: 'Kalkulator Sharp 12-Cyfrowy Online – Wysoka Precyzja | Ultimatrix',
      metaDescription:
        'Wyraźny wyświetlacz 12-cyfrowy z separatorami tysięcy, pamięcią M+/M- oraz funkcjami naukowymi.',
      tagline: 'Czytelny ekran 12-cyfrowy z pamięcią operacyjną i klawiszami naukowymi.',
      keywords: ['kalkulator 12 cyfrowy', 'kalkulator sharp online', 'kalkulator biurowy'],
      faqQuestion: 'Do czego przydaje się 12-cyfrowy wyświetlacz w księgowości i obliczeniach technicznych?',
    },
    '/discount-calculator': {
      name: 'Kalkulator Rabatu i Promocji',
      h1: 'Kalkulator Rabatu Procentowego i Ceny po Zniżce',
      metaTitle: 'Kalkulator Rabatu Online – Cena po Obniżce i Oszczędność | Ultimatrix',
      metaDescription:
        'Oblicz cenę końcową oraz kwotę oszczędności przy jednym lub dwóch nakładających się rabatach procentowych.',
      tagline: 'Cena po rabacie pojedynczym lub podwójnym oraz dokładna kwota zniżki.',
      keywords: ['kalkulator rabatu', 'oblicz znizke procentowa', 'cena po rabacie'],
      faqQuestion: 'Jak obliczyć cenę końcową przy podwójnym rabacie procentowym?',
    },
    '/discount-calculator-with-tax': {
      name: 'Kalkulator Rabatu z Podatkiem VAT',
      h1: 'Kalkulator Rabatu Plus Podatek (VAT / Sales Tax)',
      metaTitle: 'Kalkulator Rabatu i Podatku VAT – Kwota do Zapłaty | Ultimatrix',
      metaDescription:
        'Zastosuj rabat procentowy, a następnie dolicz podatek VAT lub podatek od sprzedaży, aby poznać końcową cenę przy kasie.',
      tagline: 'Naliczanie rabatu przed doliczeniem stawki podatku VAT.',
      keywords: ['rabat z vat kalkulator', 'cena po rabacie brutto', 'kalkulator znizka i podatek'],
      faqQuestion: 'Czy podatek VAT nalicza się przed czy po odliczeniu rabatu?',
    },
    '/emi-calculator': {
      name: 'Kalkulator Raty Kredytu (EMI)',
      h1: 'Kalkulator Miesięcznej Raty Kredytu i Harmonogramu (EMI)',
      metaTitle: 'Kalkulator Kredytowy EMI – Rata Miesięczna i Odsetki | Ultimatrix',
      metaDescription:
        'Oblicz miesięczną ratę równą (EMI), całkowity koszt odsetek i roczny harmonogram spłaty dla kredytu hipotecznego lub gotówkowego.',
      tagline: 'Miesięczna rata, suma odsetek oraz roczny plan spłaty kredytu.',
      keywords: ['kalkulator raty kredytu', 'kalkulator kredytowy emi', 'harmonogram splaty'],
      faqQuestion: 'Jak oblicza się miesięczną ratę równą (EMI) i całkowite odsetki kredytu?',
    },
    '/hdfc-emi-calculator': {
      name: 'Kalkulator Kredytu HDFC EMI',
      h1: 'Kalkulator Rat EMI HDFC (Hipoteczny, Samochodowy, Gotówkowy)',
      metaTitle: 'Kalkulator HDFC EMI – Raty Kredytu i Odsetki | Ultimatrix',
      metaDescription:
        'Oszacuj miesięczną ratę EMI dla kredytów mieszkaniowych, samochodowych i osobistych wraz z wykresem kapitału i odsetek.',
      tagline: 'Szacowanie raty miesięcznej i rozkładu odsetek według rodzaju kredytu.',
      keywords: ['kalkulator hdfc emi', 'rata kredytu hipotecznego', 'kredyt samochodowy rata'],
      faqQuestion: 'Jak oszacować miesięczną ratę i koszt odsetek w kalkulatorze HDFC EMI?',
    },
    '/sip-calculator': {
      name: 'Kalkulator Inwestycji Regularnych (SIP)',
      h1: 'Kalkulator Oszczędzania SIP i Procentu Składanego',
      metaTitle: 'Kalkulator SIP i Procent Składany – Prognoza Zysku | Ultimatrix',
      metaDescription:
        'Oblicz przyszłą wartość regularnych miesięcznych wpłat inwestycyjnych dzięki sile procentu składanego.',
      tagline: 'Symulacja wpłaconego kapitału, zysku z procentu składanego i wartości końcowej.',
      keywords: ['kalkulator sip', 'kalkulator procentu skladanego', 'inwestycje miesieczne'],
      faqQuestion: 'Jak działa procent składany przy regularnych miesięcznych wpłatach SIP?',
    },
    '/gst-calculator': {
      name: 'Kalkulator Podatku VAT / GST',
      h1: 'Kalkulator Podatku GST / VAT (Netto na Brutto i Odwrotnie)',
      metaTitle: 'Kalkulator VAT i GST Online – Dodaj lub Wylicz Podatek | Ultimatrix',
      metaDescription:
        'Dolicz stawkę VAT / GST do kwoty netto lub wylicz kwotę netto i sam podatek z ceny brutto w ułamku sekundy.',
      tagline: 'Przeliczanie netto ↔ brutto dla dowolnej stawki podatku VAT lub GST.',
      keywords: ['kalkulator vat', 'netto na brutto', 'kalkulator gst'],
      faqQuestion: 'Jak wyliczyć kwotę netto i podatek z ceny zawierającej VAT lub GST?',
    },
    '/compound-interest-calculator': {
      name: 'Kalkulator Procentu Składanego',
      h1: 'Kalkulator Procentu Składanego (Dzienny, Miesięczny, Roczny)',
      metaTitle: 'Kalkulator Procentu Składanego Online – Tabela Roczna | Ultimatrix',
      metaDescription:
        'Oblicz kapitał końcowy z procentem składanym przy kapitalizacji dziennej, miesięcznej, kwartalnej lub rocznej.',
      tagline: 'Kapitał początkowy, dopłaty miesięczne, kapitalizacja i tabela roczna.',
      keywords: ['kalkulator procentu skladanego', 'procent skladany', '복리계산기'],
      faqQuestion: 'Jak obliczyć procent składany przy kapitalizacji dziennej i miesięcznej?',
    },
  },
  vi: {
    '/bmi-calculator': {
      name: 'Công cụ tính BMI Online',
      h1: 'Máy Tính Chỉ Số BMI (Kg, Cm, Pound & Feet)',
      metaTitle: 'Tính Chỉ Số BMI Online Miễn Phí – Cân Nặng Lý Tưởng WHO | Ultimatrix',
      metaDescription:
        'Tính chỉ số khối cơ thể (BMI) ngay lập tức theo kg/cm hoặc lbs và xem mức cân nặng lý tưởng theo chuẩn WHO.',
      tagline: 'Tính chỉ số BMI và khoảng cân nặng khỏe mạnh theo đơn vị mét hoặc Anh.',
      keywords: ['tinh bmi', 'cong cu tinh bmi', 'chi so khoi co the', 'can nang ly tuong'],
      faqQuestion: 'Cách tính chỉ số BMI và đọc kết quả phân loại như thế nào?',
    },
    '/bmi-calculator/men': {
      name: 'Tính BMI cho Nam giới',
      h1: 'Công Cụ Tính BMI Cho Nam Giới Theo Chiều Cao & Cơ Bắp',
      metaTitle: 'Tính BMI Nam Giới – Cân Nặng Chuẩn & Tỷ Lệ Mỡ | Ultimatrix',
      metaDescription:
        'Đánh giá chỉ số BMI cho nam giới kèm thông tin tham khảo về khối lượng cơ bắp và tỷ lệ mỡ cơ thể.',
      tagline: 'Đánh giá BMI cho nam giới kèm ngưỡng khối cơ và tỷ lệ mỡ khỏe mạnh.',
      keywords: ['tinh bmi nam', 'can nang chuan nam gioi', 'chi so bmi nam'],
      faqQuestion: 'Chỉ số BMI ở nam giới có nhiều cơ bắp nên được hiểu như thế nào?',
    },
    '/bmi-calculator/women': {
      name: 'Tính BMI cho Nữ giới',
      h1: 'Công Cụ Tính BMI Cho Nữ Giới Theo Độ Tuổi & Chiều Cao',
      metaTitle: 'Tính BMI Nữ Giới – Vóc Dáng Chuẩn & Mỡ Cơ Thể | Ultimatrix',
      metaDescription:
        'Tính chỉ số BMI cho nữ giới kèm bảng tỷ lệ mỡ cơ thể khỏe mạnh theo từng nhóm độ tuổi.',
      tagline: 'Tính BMI cho nữ giới với hướng dẫn tỷ lệ mỡ cơ thể theo tuổi.',
      keywords: ['tinh bmi nu', 'can nang chuan nu gioi', 'chi so bmi nu'],
      faqQuestion: 'Cách sử dụng công cụ tính BMI cho nữ để xác định cân nặng hợp lý là gì?',
    },
    '/child-bmi-calculator': {
      name: 'Tính BMI cho Trẻ em & Thanh thiếu niên',
      h1: 'Tính BMI Cho Trẻ Em & Tuổi Teen (2–19 Tuổi)',
      metaTitle: 'Tính BMI Trẻ Em – Bách Phân Vị CDC & WHO (2–19 Tuổi) | Ultimatrix',
      metaDescription:
        'Tính chỉ số BMI và bách phân vị nhi khoa theo tuổi (năm/tháng) và giới tính cho trẻ em từ 2 đến 19 tuổi.',
      tagline: 'Đánh giá bách phân vị BMI nhi khoa CDC theo đúng tuổi và giới tính.',
      keywords: ['tinh bmi tre em', 'bach phan vi bmi tre', 'bmi tuoi teen'],
      faqQuestion: 'Vì sao BMI trẻ em 2–19 tuổi dùng bách phân vị thay vì ngưỡng người lớn?',
    },
    '/bmi-calculator-by-age': {
      name: 'Tính BMI theo Độ tuổi & Giới tính',
      h1: 'Công Cụ Tính BMI Theo Độ Tuổi & Giới Tính',
      metaTitle: 'Tính BMI Theo Tuổi & Giới Tính – Từ Trẻ Em Đến Người Lớn | Ultimatrix',
      metaDescription:
        'Tính BMI từ 2 đến hơn 100 tuổi với chế độ tự động chuyển đổi giữa bách phân vị trẻ em và ngưỡng người lớn.',
      tagline: 'Tự động chuyển đổi giữa chuẩn nhi khoa và chuẩn người lớn theo tuổi.',
      keywords: ['tinh bmi theo tuoi', 'bmi theo tuoi va gioi tinh', 'bang bmi theo do tuoi'],
      faqQuestion: 'Ngưỡng BMI khỏe mạnh có thay đổi theo độ tuổi hay không?',
    },
    '/height-calculator': {
      name: 'Đổi & Dự đoán Chiều cao',
      h1: 'Công Cụ Đổi Chiều Cao (Feet/Inch sang Cm) & Dự Đoán Chiều Cao Bé',
      metaTitle: 'Đổi Feet Sang Cm & Dự Đoán Chiều Cao Tương Lai Của Trẻ | Ultimatrix',
      metaDescription:
        'Chuyển đổi nhanh chiều cao feet & inch sang cm và dự đoán chiều cao trưởng thành của trẻ dựa theo bố mẹ.',
      tagline: 'Đổi đơn vị feet/inch ↔ cm và dự đoán chiều cao khi trưởng thành của trẻ.',
      keywords: ['tinh chieu cao', 'doi feet sang cm', 'du doan chieu cao cua be'],
      faqQuestion: 'Cách đổi feet/inch sang cm và dự đoán chiều cao trưởng thành của trẻ ra sao?',
    },
    '/pregnancy-due-date-calculator': {
      name: 'Tính Ngày Dự Sinh & Tuần Thai',
      h1: 'Công Cụ Tính Ngày Dự Sinh & Tuổi Thai (Kỳ Kinh Cuối, IVF)',
      metaTitle: 'Tính Ngày Dự Sinh & Tuần Thai Chính Xác | Ultimatrix',
      metaDescription:
        'Tính ngày dự sinh, số tuần thai hiện tại và từng tam cá nguyệt dựa trên ngày đầu kỳ kinh cuối, thụ thai hoặc IVF.',
      tagline: 'Ước tính ngày dự sinh và tuần thai từ kỳ kinh cuối, ngày thụ thai hoặc IVF.',
      keywords: ['tinh ngay du sinh', 'tinh tuan thai', 'cong cu tinh tuoi thai'],
      faqQuestion: 'Ngày dự sinh và tuần tuổi thai được tính chính xác bằng cách nào?',
    },
    '/dog-pregnancy-due-date-calculator': {
      name: 'Tính Ngày Sinh Cho Chó Mang Thai',
      h1: 'Công Cụ Tính Thai Kỳ & Ngày Sinh Của Chó (Quy Tắc 63 Ngày)',
      metaTitle: 'Tính Ngày Chó Đẻ – Lịch Mang Thai 63 Ngày | Ultimatrix',
      metaDescription:
        'Tính ngày dự sinh của chó mẹ theo quy tắc 63 ngày từ ngày phối giống, khoảng sinh an toàn và theo dõi từng tuần.',
      tagline: 'Dự đoán ngày sinh cho chó, khung thời gian sinh và mốc phát triển theo tuần.',
      keywords: ['tinh ngay cho de', 'cho mang thai bao nhieu ngay', 'du sinh cho cho'],
      faqQuestion: 'Chó mang thai bao nhiêu ngày và cách tính ngày sinh dự kiến như thế nào?',
    },
    '/age-calculator': {
      name: 'Tính Tuổi Chính Xác',
      h1: 'Công Cụ Tính Tuổi Chính Xác Theo Ngày Sinh',
      metaTitle: 'Tính Tuổi Online – Chính Xác Theo Năm, Tháng, Tuần & Ngày | Ultimatrix',
      metaDescription:
        'Tính chính xác số tuổi theo năm, tháng, tuần, tổng số ngày từ ngày sinh và đếm ngược đến sinh nhật tiếp theo.',
      tagline: 'Xem tuổi chính xác đến từng ngày và đếm ngược tới sinh nhật sắp tới.',
      keywords: ['tinh tuoi', 'tinh tuoi theo ngay sinh', 'toi bao nhieu tuoi'],
      faqQuestion: 'Công cụ tính tuổi xác định chính xác số năm, tháng và ngày như thế nào?',
    },
    '/child-age-calculator': {
      name: 'Tính Tuổi Em bé theo Tháng & Tuần',
      h1: 'Tính Tuổi Trẻ Sơ Sinh Theo Tháng, Tuần & Ngày',
      metaTitle: 'Tính Tháng Tuổi Cho Bé – Theo Tháng & Tuần Chính Xác | Ultimatrix',
      metaDescription:
        'Tính chính xác tháng tuổi, số tuần và ngày tuổi của bé để tiện theo dõi lịch tiêm chủng và khám định kỳ.',
      tagline: 'Đo tuổi chính xác của trẻ sơ sinh theo tháng và tuần cho sổ tiêm chủng.',
      keywords: ['tinh thang tuoi cho be', 'be duoc bao nhieu tuan tuoi', 'tinh tuoi tre so sinh'],
      faqQuestion: 'Vì sao tuổi của trẻ nhỏ thường được tính theo tháng và tuần trong 2 năm đầu?',
    },
    '/date-calculator': {
      name: 'Tính Khoảng Cách Ngày & Lịch',
      h1: 'Công Cụ Đếm Số Ngày Giữa Hai Mốc Thời Gian',
      metaTitle: 'Tính Số Ngày Giữa Hai Ngày & Cộng Trừ Ngày | Ultimatrix',
      metaDescription:
        'Tính chính xác số ngày, tuần và tháng giữa hai mốc ngày hoặc cộng, trừ ngày vào bất kỳ ngày lịch nào.',
      tagline: 'Đếm số ngày giữa hai mốc thời gian và cộng/trừ ngày, tuần, tháng.',
      keywords: ['tinh so ngay giua hai ngay', 'dem ngay online', 'cong tru ngay'],
      faqQuestion: 'Cách tính chính xác số ngày giữa hai mốc thời gian trên lịch là gì?',
    },
    '/time-duration-calculator': {
      name: 'Tính Thời Lượng Giờ Phút Giây',
      h1: 'Công Cụ Tính Khoảng Thời Gian (Giờ, Phút, Giây)',
      metaTitle: 'Tính Thời Gian Làm Việc & Khoảng Cách Giờ Online | Ultimatrix',
      metaDescription:
        'Tính thời lượng trôi qua giữa hai mốc giờ theo giờ, phút, giây hoặc cộng trừ tổng thời gian làm việc.',
      tagline: 'Tính giờ làm việc, khoảng cách hai mốc giờ và cộng trừ giờ phút giây.',
      keywords: ['tinh thoi gian', 'tinh gio lam viec', 'khoang cach giua hai gio'],
      faqQuestion: 'Làm sao để tính tổng thời lượng giữa giờ bắt đầu và giờ kết thúc?',
    },
    '/percentage-calculator': {
      name: 'Tính Phần Trăm Online',
      h1: 'Công Cụ Tính Phần Trăm (3 Chế Độ Nhanh)',
      metaTitle: 'Tính Phần Trăm (%) Online – Tăng Giảm & Tỷ Lệ | Ultimatrix',
      metaDescription:
        'Tính X% của Y, X chiếm bao nhiêu % của Y và phần trăm tăng hoặc giảm ngay lập tức với độ chính xác cao.',
      tagline: 'Tính giá trị phần trăm, tỷ trọng % và mức thay đổi phần trăm.',
      keywords: ['tinh phan tram', 'cach tinh phan tram', 'phan tram tang giam'],
      faqQuestion: 'Những công thức nào được dùng để tính phần trăm và % thay đổi?',
    },
    '/cgpa-to-percentage-calculator': {
      name: 'Quy đổi CGPA sang Phần trăm',
      h1: 'Công Cụ Đổi Điểm CGPA Sang Phần Trăm (Thang 10, 5 & 4)',
      metaTitle: 'Đổi CGPA Sang Phần Trăm – Thang Điểm 10, 5 & 4 | Ultimatrix',
      metaDescription:
        'Quy đổi điểm trung bình CGPA sang phần trăm (%) theo công thức chuẩn của các trường đại học thang 10, 5 và 4.',
      tagline: 'Quy đổi nhanh điểm CGPA sang tỷ lệ phần trăm cho hồ sơ du học.',
      keywords: ['doi cgpa sang phan tram', 'quy doi diem gpa', 'tinh phan tram cgpa'],
      faqQuestion: 'Cách quy đổi điểm CGPA sang phần trăm ở thang điểm 10, 5 và 4 như thế nào?',
    },
    '/gpa-calculator': {
      name: 'Tính Điểm GPA Đại học',
      h1: 'Công Cụ Tính Điểm GPA Theo Tín Chỉ (Thang 4.0)',
      metaTitle: 'Tính Điểm GPA Đại Học – Trung Bình Học Kỳ & Tích Lũy | Ultimatrix',
      metaDescription:
        'Tính điểm GPA học kỳ và GPA tích lũy bằng cách nhập môn học, điểm chữ và số tín chỉ từng môn.',
      tagline: 'Tính điểm GPA có trọng số tín chỉ cho từng học kỳ và toàn khóa.',
      keywords: ['tinh diem gpa', 'tinh gpa dai hoc', 'gpa thang diem 4'],
      faqQuestion: 'Điểm GPA đại học theo tín chỉ được tính bằng công thức nào?',
    },
    '/high-school-gpa-calculator': {
      name: 'Tính Điểm GPA Cấp 3 (THPT)',
      h1: 'Công Cụ Tính GPA Trung Học (Thường, Honors & AP/IB)',
      metaTitle: 'Tính GPA Trung Học Phổ Thông – Có & Không Trọng Số | Ultimatrix',
      metaDescription:
        'Tính điểm GPA cấp 3 dạng không trọng số (Unweighted) và có trọng số cộng điểm cho lớp Honors, AP/IB.',
      tagline: 'GPA cấp 3 chuẩn và có trọng số phục vụ hồ sơ xét tuyển đại học.',
      keywords: ['tinh gpa cap 3', 'gpa co trong so ap', 'tinh diem trung binh thpt'],
      faqQuestion: 'GPA trung học không trọng số và có trọng số (Weighted) khác nhau ở điểm nào?',
    },
    '/weight-loss-percentage-calculator': {
      name: 'Tính Phần Trăm Giảm Cân',
      h1: 'Công Cụ Tính Tỷ Lệ Phần Trăm Giảm Cân (Kg / Lbs)',
      metaTitle: 'Tính Phần Trăm Giảm Cân – Theo Dõi Giảm Mỡ | Ultimatrix',
      metaDescription:
        'Tính chính xác bạn đã giảm được bao nhiêu phần trăm trọng lượng cơ thể từ cân nặng ban đầu đến hiện tại.',
      tagline: 'Theo dõi tiến độ giảm cân qua số kg đã giảm và tỷ lệ phần trăm.',
      keywords: ['phan tram giam can', 'tinh ty le giam can', 'theo doi giam can'],
      faqQuestion: 'Cách tính tỷ lệ phần trăm cân nặng đã giảm như thế nào?',
    },
    '/scientific-calculator': {
      name: 'Máy Tính Khoa Học Online',
      h1: 'Máy Tính Khoa Học Trực Tuyến (Lượng Giác & Logarit)',
      metaTitle: 'Máy Tính Khoa Học Online Miễn Phí – Sin, Cos, Tan, Log | Ultimatrix',
      metaDescription:
        'Máy tính khoa học đầy đủ hàm lượng giác, logarit, lũy thừa, căn bậc hai, giai thừa, DEG/RAD và hỗ trợ bàn phím.',
      tagline: 'Lượng giác, logarit, giai thừa, bộ nhớ Ans và thao tác bằng bàn phím.',
      keywords: ['may tinh khoa hoc online', 'may tinh luong giac', 'may tinh bo tui'],
      faqQuestion: 'Máy tính khoa học trực tuyến này hỗ trợ những hàm toán học nào?',
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'Máy Tính Khoa Học Kiểu Casio fx-115ES',
      h1: 'Máy Tính Khoa Học Phong Cách Casio fx-115ES Plus',
      metaTitle: 'Máy Tính Casio fx-115ES Online – Phân Số & Tổ Hợp | Ultimatrix',
      metaDescription:
        'Giao diện mô phỏng Casio fx-115ES Plus hỗ trợ phân số, chỉnh hợp nPr, tổ hợp nCr và chế độ góc DEG/RAD/GRAD.',
      tagline: 'Thiết kế kỹ thuật Casio hỗ trợ phân số, nPr/nCr và đổi đơn vị góc.',
      keywords: ['may tinh casio online', 'casio fx 115es', 'may tinh phan so'],
      faqQuestion: 'Điểm nổi bật của máy tính kiểu Casio fx-115ES cho học tập và thi cử là gì?',
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'Máy Tính 12 Chữ Số Sharp',
      h1: 'Máy Tính Khoa Học & Văn Phòng Sharp 12 Chữ Số',
      metaTitle: 'Máy Tính Sharp 12 Số Online – Độ Chính Xác Cao | Ultimatrix',
      metaDescription:
        'Màn hình hiển thị 12 chữ số sắc nét có dấu phân cách hàng nghìn, bộ nhớ M+/M- và các phím hàm khoa học.',
      tagline: 'Màn hình 12 số rõ nét kèm bộ nhớ tính toán và hàm kỹ thuật.',
      keywords: ['may tinh 12 so', 'may tinh sharp online', 'may tinh ke toan'],
      faqQuestion: 'Vì sao màn hình 12 chữ số lại hữu ích cho kế toán và tính toán kỹ thuật?',
    },
    '/discount-calculator': {
      name: 'Tính Giảm Giá & Khuyến Mãi',
      h1: 'Công Cụ Tính Giá Sau Giảm Giá & Tiền Tiết Kiệm',
      metaTitle: 'Tính Giảm Giá Online – Giảm Đơn & Giảm Kép (%) | Ultimatrix',
      metaDescription:
        'Tính ngay giá bán cuối cùng và số tiền tiết kiệm được khi áp dụng một hoặc hai mức giảm giá phần trăm liên tiếp.',
      tagline: 'Tính giá sau giảm đơn hoặc giảm chồng 2 tầng và số tiền tiết kiệm.',
      keywords: ['tinh giam gia', 'tinh phan tram giam gia', 'gia sau khi giam'],
      faqQuestion: 'Cách tính giá cuối cùng khi áp dụng 2 mức giảm giá liên tiếp là gì?',
    },
    '/discount-calculator-with-tax': {
      name: 'Tính Giảm Giá Kèm Thuế VAT',
      h1: 'Công Cụ Tính Giảm Giá Cộng Thuế (VAT / Sales Tax)',
      metaTitle: 'Tính Giảm Giá Có Thuế VAT – Tổng Tiền Thanh Toán | Ultimatrix',
      metaDescription:
        'Áp dụng mức giảm giá phần trăm trước rồi cộng thêm thuế VAT hoặc thuế bán hàng để biết chính xác số tiền trả tại quầy.',
      tagline: 'Tính giá đã chiết khấu trước khi cộng thêm thuế suất bán hàng.',
      keywords: ['tinh giam gia co thue', 'giam gia cong vat', 'gia cuoi cung co thue'],
      faqQuestion: 'Thuế VAT được tính trước hay sau khi áp dụng giảm giá?',
    },
    '/emi-calculator': {
      name: 'Tính Tiền Vay Trả Góp (EMI)',
      h1: 'Công Cụ Tính Khoản Trả Góp Hàng Tháng (EMI)',
      metaTitle: 'Tính Lãi Suất Vay Trả Góp Hàng Tháng (EMI) | Ultimatrix',
      metaDescription:
        'Tính số tiền phải trả hàng tháng, tổng tiền lãi và lịch trả nợ theo từng năm cho vay mua nhà, mua xe hoặc tín chấp.',
      tagline: 'Ước tính tiền trả góp hàng tháng, tổng lãi và bảng khấu hao theo năm.',
      keywords: ['tinh lai suat vay tra gop', 'cong cu tinh emi', 'tinh tien tra gop hang thang'],
      faqQuestion: 'Khoản trả góp hàng tháng (EMI) và tổng tiền lãi vay được tính thế nào?',
    },
    '/hdfc-emi-calculator': {
      name: 'Tính Vay Trả Góp HDFC EMI',
      h1: 'Công Cụ Tính Vay HDFC EMI (Nhà, Xe & Cá Nhân)',
      metaTitle: 'Tính HDFC EMI – Mô Phỏng Vay Mua Nhà & Mua Xe | Ultimatrix',
      metaDescription:
        'Ước tính khoản trả góp hàng tháng EMI cho gói vay mua nhà, vay ô tô hoặc vay tiêu dùng kèm biểu đồ gốc và lãi.',
      tagline: 'Ước tính khoản trả hàng tháng và cơ cấu gốc/lãi theo loại khoản vay.',
      keywords: ['tinh hdfc emi', 'tinh vay mua nha', 'tinh tra gop mua xe'],
      faqQuestion: 'Công cụ HDFC EMI giúp ước tính tiền trả góp và lãi suất ra sao?',
    },
    '/sip-calculator': {
      name: 'Tính Đầu Tư Định Kỳ (SIP)',
      h1: 'Công Cụ Tính Đầu Tư Hàng Tháng (SIP) & Lãi Kép',
      metaTitle: 'Tính Đầu Tư SIP & Lãi Kép Hàng Tháng | Ultimatrix',
      metaDescription:
        'Dự phóng giá trị tương lai từ khoản tích lũy đầu tư định kỳ mỗi tháng với lãi kép và tỷ suất sinh lời kỳ vọng.',
      tagline: 'Ước tính tổng vốn góp, lợi nhuận lãi kép và giá trị tài sản tương lai.',
      keywords: ['tinh dau tu sip', 'tinh lai kep hang thang', 'tich luy dau tu'],
      faqQuestion: 'Lãi kép hoạt động như thế nào trong mô hình đầu tư định kỳ SIP?',
    },
    '/gst-calculator': {
      name: 'Tính Thuế VAT / GST',
      h1: 'Công Cụ Tính Thuế GST / VAT (Đã Gồm & Chưa Gồm Thuế)',
      metaTitle: 'Tính Thuế VAT & GST Online – Cộng Hoặc Tách Thuế | Ultimatrix',
      metaDescription:
        'Cộng thêm thuế suất VAT/GST vào giá chưa thuế hoặc tách nhanh tiền thuế và giá gốc từ tổng tiền đã gồm thuế.',
      tagline: 'Cộng thuế hoặc tách ngược giá trước thuế và tiền thuế chỉ trong một bước.',
      keywords: ['tinh thue vat', 'tach thue vat tu tong tien', 'tinh thue gst'],
      faqQuestion: 'Làm thế nào để tách tiền thuế VAT/GST ra khỏi giá đã bao gồm thuế?',
    },
    '/compound-interest-calculator': {
      name: 'Công cụ tính Lãi Kép',
      h1: 'Máy Tính Lãi Kép Trực Tuyến (Theo Ngày, Tháng, Năm)',
      metaTitle: 'Công Cụ Tính Lãi Kép Online – Bảng Tăng Trưởng Hàng Năm | Ultimatrix',
      metaDescription:
        'Tính số tiền cuối kỳ với lãi kép theo ngày, tháng, quý hoặc năm kèm tiền gửi thêm hàng tháng và bảng chi tiết từng năm.',
      tagline: 'Tính vốn gốc, góp thêm hàng tháng, chu kỳ ghép lãi và quy tắc 72.',
      keywords: ['tinh lai kep', 'cong cu tinh lai kep', 'quy tac 72', '복리계산기'],
      faqQuestion: 'Công thức tính lãi kép theo ngày, tháng và năm hoạt động như thế nào?',
    },
  },
  'zh-tw': {
    '/bmi-calculator': {
      name: '線上 BMI 計算機',
      h1: 'BMI 身體質量指數計算機（公斤/公分/磅/英尺）',
      metaTitle: '免費線上 BMI 計算機 – 標準體重與 WHO 過重判定 | Ultimatrix',
      metaDescription:
        '輸入身高與體重即時計算 BMI 身體質量指數，對照 WHO 與成人標準體重範圍。',
      tagline: '支援公制與英制單位，即時算出 BMI 指數與健康體重區間。',
      keywords: ['bmi計算機', 'bmi計算', '身體質量指數', '標準體重計算'],
      faqQuestion: 'BMI 身體質量指數該怎麼計算與判讀結果？',
    },
    '/bmi-calculator/men': {
      name: '男性專用 BMI 計算機',
      h1: '男性 BMI 計算機（肌肉量與體脂率參考）',
      metaTitle: '男性 BMI 計算機 – 理想體重與體脂肪區間 | Ultimatrix',
      metaDescription:
        '針對成年男性設計的 BMI 與理想體重計算工具，附帶肌肉量與男性健康體脂率參考範圍。',
      tagline: '結合男性肌肉量說明與健康體脂率區間的 BMI 評估工具。',
      keywords: ['男性bmi計算', '男生標準體重', '男性體脂參考'],
      faqQuestion: '肌肉量較高的男性該如何正確解讀 BMI 指數？',
    },
    '/bmi-calculator/women': {
      name: '女性專用 BMI 計算機',
      h1: '女性 BMI 計算機（依年齡與身高參考）',
      metaTitle: '女性 BMI 計算機 – 理想體重與分齡體脂參考 | Ultimatrix',
      metaDescription:
        '計算女性專屬 BMI 與理想體重範圍，並提供不同年齡層的健康體脂率標準對照。',
      tagline: '提供分齡健康體脂率標準的女性 BMI 計算機。',
      keywords: ['女性bmi計算', '女生標準體重', '女性理想體重'],
      faqQuestion: '女性應如何搭配年齡與體脂率來評估 BMI 健康範圍？',
    },
    '/child-bmi-calculator': {
      name: '兒童與青少年 BMI 計算機',
      h1: '兒童及青少年 BMI 百分位計算機（2 至 19 歲）',
      metaTitle: '兒童 BMI 計算機 – 2～19 歲生長百分位判讀 | Ultimatrix',
      metaDescription:
        '依性別與精確年齡（歲與月）計算 2 至 19 歲兒童與青少年的 BMI 及 CDC/WHO 生長百分位分類。',
      tagline: '依據實歲、月齡與性別計算兒童與青少年的 BMI 百分位等級。',
      keywords: ['兒童bmi計算', '青少年bmi百分位', '小孩體重標準'],
      faqQuestion: '為什麼 2 至 19 歲兒童與青少年要用百分位而非成人 BMI 標準判讀？',
    },
    '/bmi-calculator-by-age': {
      name: '依年齡與性別 BMI 計算機',
      h1: '分齡與性別 BMI 計算機（兒童至銀髮族適用）',
      metaTitle: '年齡別 BMI 計算機 – 各年齡層健康體位標準 | Ultimatrix',
      metaDescription:
        '涵蓋 2 歲至 100 歲以上，自動依年齡切換兒童百分位與各年齡段成人 BMI 建議區間。',
      tagline: '依年齡自動切換兒童百分位與成人分齡 BMI 標準範圍。',
      keywords: ['年齡bmi計算', '分齡bmi標準', '銀髮族bmi'],
      faqQuestion: '健康的 BMI 建議範圍會隨著年齡增長而改變嗎？',
    },
    '/height-calculator': {
      name: '身高換算與預測計算機',
      h1: '身高計算機（英尺英吋轉公分 & 兒童未來身高預測）',
      metaTitle: '身高單位換算（ft/in 轉 cm）與兒童身高預測 | Ultimatrix',
      metaDescription:
        '即時將英尺英吋換算成公分 (cm)，並依父母身高預測孩子未來的成人身高區間。',
      tagline: '英尺/英吋與公分雙向換算，以及父母遺傳身高預測工具。',
      keywords: ['身高換算', '英尺轉公分', '兒童身高預測'],
      faqQuestion: '如何將英尺英吋換算成公分並估算孩子的成人身高？',
    },
    '/pregnancy-due-date-calculator': {
      name: '預產期與懷孕週數計算機',
      h1: '懷孕週數與預產期計算機（末次月經、受孕日與試管嬰兒）',
      metaTitle: '預產期計算機 – 懷孕週數與產檢孕期換算 | Ultimatrix',
      metaDescription:
        '依最後一次月經、受孕日或試管嬰兒（IVF）胚胎植入日，精準算出預產期、目前懷孕週數與孕期階段。',
      tagline: '支援末次月經、受孕日及 IVF 植入日的預產期與週數推算工具。',
      keywords: ['預產期計算', '懷孕週數計算', '試管嬰兒預產期'],
      faqQuestion: '預產期和目前的懷孕週數是如何計算出來的？',
    },
    '/dog-pregnancy-due-date-calculator': {
      name: '狗狗懷孕預產期計算機',
      h1: '狗狗懷孕週數與分娩預產期計算機（63 天法則）',
      metaTitle: '狗狗預產期計算機 – 配種日推算生產日期 | Ultimatrix',
      metaDescription:
        '依配種日期以 63 天標準推算母犬預產期、正常分娩窗口（58～68 天）與每週胎兒發育進度。',
      tagline: '犬隻預產期、分娩期區間與每週妊娠里程碑推算。',
      keywords: ['狗狗懷孕計算', '狗狗預產期', '母狗懷孕天數'],
      faqQuestion: '狗狗懷孕大約幾天？該如何推算母犬的預產期？',
    },
    '/age-calculator': {
      name: '實歲年齡精確計算機',
      h1: '出生年月日實歲與天數計算機',
      metaTitle: '年齡計算機 – 精確計算實歲年、月、週與出生天數 | Ultimatrix',
      metaDescription:
        '輸入出生日期即可算出精確的實歲（年、月、日）、總週數、總天數以及距離下次生日的倒數天數。',
      tagline: '精確換算年、月、日實歲與下次生日倒數天數。',
      keywords: ['年齡計算機', '實歲計算', '出生天數計算'],
      faqQuestion: '年齡計算機如何精確算出實歲幾年幾個月幾天？',
    },
    '/child-age-calculator': {
      name: '嬰幼兒月齡與週齡計算機',
      h1: '寶寶精確月齡、週齡與天數計算機',
      metaTitle: '嬰兒月齡計算機 – 寶寶出生幾個月幾週 | Ultimatrix',
      metaDescription:
        '精確算出新生兒與幼兒的滿月數、週數與天數，方便對照健兒門診與疫苗接種時程。',
      tagline: '專為家長設計的寶寶實歲月齡、週齡與兒童發展里程碑計算工具。',
      keywords: ['寶寶月齡計算', '嬰兒週齡', '小孩幾個月計算'],
      faqQuestion: '為什麼兩歲以內的嬰幼兒常以「月齡」和「週齡」計算年齡？',
    },
    '/date-calculator': {
      name: '日期相減與天數計算機',
      h1: '兩日期天數差與日期加減計算機',
      metaTitle: '日期計算機 – 計算兩日期相差天數與日期推算 | Ultimatrix',
      metaDescription:
        '快速算出兩個日期之間相差的總天數、週數與月數，或從指定日期往前後加減天數、週數或月份。',
      tagline: '支援兩日期間距天數計算，以及日曆天數、週數、月數加減推算。',
      keywords: ['日期計算機', '天數計算', '日期相加減'],
      faqQuestion: '如何精確計算兩個日期之間相隔的總天數？',
    },
    '/time-duration-calculator': {
      name: '時間差與工時計算機',
      h1: '時間經過與時分秒加減計算機',
      metaTitle: '時間計算機 – 工時時數與時間差計算 | Ultimatrix',
      metaDescription:
        '計算起始與結束時間之間經過的小時、分鐘與秒數，並支援時間區間的加法與減法運算。',
      tagline: '精確計算工作時數、兩時刻時間差以及時分秒加減。',
      keywords: ['時間計算機', '工時計算', '時間差計算'],
      faqQuestion: '如何計算開始時間與結束時間之間的總經過時數？',
    },
    '/percentage-calculator': {
      name: '百分比計算機',
      h1: '線上百分比計算機（三種常用模式）',
      metaTitle: '百分比計算機 – 比例、佔比與漲跌幅計算 | Ultimatrix',
      metaDescription:
        '即時計算「X 的 Y%」、「X 佔 Y 的百分之幾」以及數值的百分比增減幅度（漲跌幅）。',
      tagline: '涵蓋百分比數值、比例換算與成長／衰退百分比變化。',
      keywords: ['百分比計算機', '趴數計算', '成長率百分比'],
      faqQuestion: '計算百分比與百分比漲跌幅時分別使用什麼公式？',
    },
    '/cgpa-to-percentage-calculator': {
      name: 'CGPA 換算百分比計算機',
      h1: 'CGPA 成績換算百分比工具（10 分、5 分與 4 分制）',
      metaTitle: 'CGPA 轉百分比計算機 – 留學申請成績換算 | Ultimatrix',
      metaDescription:
        '支援 10 分制、5 分制與 4 分制，將大學 CGPA 平均積點快速換算為等值百分比成績。',
      tagline: '快速將各制別 CGPA 成績換算為申請學校所需的百分比。',
      keywords: ['cgpa轉百分比', '成績換算百分比', 'gpa換算'],
      faqQuestion: '10 分制、5 分制與 4 分制的 CGPA 如何換算成百分比？',
    },
    '/gpa-calculator': {
      name: '大學學分加權 GPA 計算機',
      h1: '大學學期與累計 GPA 計算機（4.0 學分加權）',
      metaTitle: '大學 GPA 計算機 – 學分加權平均成績試算 | Ultimatrix',
      metaDescription:
        '輸入修課科目、等第成績與學分數，即時計算當學期 GPA 與累計總 GPA。',
      tagline: '依各科等第與學分數即時算出學期與累計 GPA。',
      keywords: ['gpa計算機', '大學gpa試算', '學分加權平均'],
      faqQuestion: '如何依據課程學分數與等第計算大學加權 GPA？',
    },
    '/high-school-gpa-calculator': {
      name: '高中 GPA 計算機',
      h1: '高中 GPA 計算機（一般、Honors 與 AP/IB 加權）',
      metaTitle: '高中 GPA 計算機 – 加權與未加權成績試算 | Ultimatrix',
      metaDescription:
        '同時計算高中未加權 GPA 及含 Honors (+0.5)、AP/IB (+1.0) 加分的加權 GPA。',
      tagline: '支援美國高中與國際學校常見的一般及 AP/IB 加權制度。',
      keywords: ['高中gpa計算', '加權gpa', 'ap ib成績試算'],
      faqQuestion: '高中未加權 GPA（Unweighted）與加權 GPA（Weighted）有什麼差別？',
    },
    '/weight-loss-percentage-calculator': {
      name: '減重百分比計算機',
      h1: '減重成效與體重下降百分比計算機',
      metaTitle: '減肥百分比計算機 – 體重減輕比例試算 | Ultimatrix',
      metaDescription:
        '輸入初始體重與目前體重，立即算出已減去的公斤/磅數與體重下降百分比。',
      tagline: '精確追蹤瘦身進度，顯示減去重量與體重下降比例。',
      keywords: ['減重百分比計算', '減肥比例', '體重下降百分比'],
      faqQuestion: '體重下降的減重百分比該如何計算？',
    },
    '/scientific-calculator': {
      name: '線上工程計算機',
      h1: '線上科學與工程計算機（三角函數與對數）',
      metaTitle: '免費線上工程計算機 – 三角函數、對數與鍵盤輸入 | Ultimatrix',
      metaDescription:
        '支援 sin、cos、tan、log、ln、次方、開根號、階乘、DEG/RAD 切換與電腦鍵盤快捷操作。',
      tagline: '完整三角函數、對數、指數、Ans 記憶與實體鍵盤支援。',
      keywords: ['線上工程計算機', '科學計算機', '三角函數計算機'],
      faqQuestion: '這台線上工程計算機支援哪些進階數學運算功能？',
    },
    '/casio-fx-115es-scientific-calculator': {
      name: 'Casio fx-115ES 風格工程計算機',
      h1: 'Casio fx-115ES Plus 風格線上工程計算機',
      metaTitle: 'Casio fx-115ES 線上工程計算機 – 分數與排列組合 | Ultimatrix',
      metaDescription:
        '仿照 Casio fx-115ES Plus 鍵盤配置，支援分數運算、排列 nPr、組合 nCr 與 DEG/RAD/GRAD 角度模式。',
      tagline: '經典 Casio 工程排版，支援分數、排列組合與多角度模式。',
      keywords: ['casio計算機線上', 'fx 115es', '排列組合計算機'],
      faqQuestion: 'Casio fx-115ES 風格計算機有哪些適合考試與工程計算的特點？',
    },
    '/sharp-12-digit-scientific-calculator': {
      name: 'Sharp 12 位數商務工程計算機',
      h1: 'Sharp 12 位數高精準商務與科學計算機',
      metaTitle: 'Sharp 12 位數線上計算機 – 千分位清晰顯示與記憶鍵 | Ultimatrix',
      metaDescription:
        '具備清晰 12 位數大螢幕、千分位分隔符、M+/M- 記憶功能及常用科學運算按鍵。',
      tagline: '高對比 12 位數顯示器搭配記憶功能與工程按鍵。',
      keywords: ['12位數計算機', 'sharp計算機線上', '會計計算機'],
      faqQuestion: '12 位數顯示與獨立記憶鍵對會計及工程運算有什麼好處？',
    },
    '/discount-calculator': {
      name: '折扣與優惠價計算機',
      h1: '百分比折扣與折上折計算機',
      metaTitle: '打折計算機 – 折扣後價格與省下金額試算 | Ultimatrix',
      metaDescription:
        '快速算出單一折扣或兩層連環折扣（折上折）後的最終售價與總共省下的金額。',
      tagline: '支援單次折扣與雙重疊加折扣，立即顯示折後價格與省下金額。',
      keywords: ['折扣計算機', '打折計算', '折上折計算'],
      faqQuestion: '遇到雙重折扣（折上折）時，最終價格應該怎麼計算？',
    },
    '/discount-calculator-with-tax': {
      name: '折扣加稅金計算機',
      h1: '商品折扣後含稅總價計算機（營業稅 / Sales Tax）',
      metaTitle: '折扣加稅金計算機 – 結帳含稅總金額試算 | Ultimatrix',
      metaDescription:
        '先套用百分比折扣，再加上營業稅或消費稅，精確計算實際結帳時需支付的總金額。',
      tagline: '先扣折扣再加計消費稅率，輕鬆掌握實際結帳金額。',
      keywords: ['折扣含稅計算', '折後加稅計算機', '稅金折扣試算'],
      faqQuestion: '購物結帳時，稅金是依原價還是折扣後的價格計算？',
    },
    '/emi-calculator': {
      name: '貸款月付金 (EMI) 計算機',
      h1: '房貸、車貸與信貸每月還款額 (EMI) 試算表',
      metaTitle: '貸款月付金 EMI 計算機 – 本息攤還表與總利息試算 | Ultimatrix',
      metaDescription:
        '輸入貸款金額、年利率與期數，立即算出每月本息攤還金額 (EMI)、總利息支出與年度攤還明細表。',
      tagline: '每月還款額、總利息成本與逐年本金利息攤還明細。',
      keywords: ['貸款試算', '房貸月付金emi', '本息平均攤還計算機'],
      faqQuestion: '等額本息每月還款額（EMI）與總利息是如何計算的？',
    },
    '/hdfc-emi-calculator': {
      name: 'HDFC 貸款 EMI 試算機',
      h1: 'HDFC 房貸、車貸與個人信貸 EMI 計算機',
      metaTitle: 'HDFC EMI 計算機 – 房貸、汽車與個人貸款試算 | Ultimatrix',
      metaDescription:
        '試算房屋貸款、汽車貸款與個人信貸的每月應繳金額 (EMI) 及年度本息分佈明細。',
      tagline: '依貸款類別試算每月還款額與年度本金利息比例。',
      keywords: ['hdfc emi計算', '房貸試算', '車貸月付金'],
      faqQuestion: '如何使用 HDFC EMI 計算機估算不同貸款類型的月付金與利息？',
    },
    '/sip-calculator': {
      name: '定期定額投資 (SIP) 計算機',
      h1: '每月定期定額 (SIP) 與複利成長試算機',
      metaTitle: 'SIP 定期定額計算機 – 複利投資未來報酬試算 | Ultimatrix',
      metaDescription:
        '根據每月扣款金額、預期年化報酬率與投資年限，推算複利累積後的未來總資產與投資獲利。',
      tagline: '清楚呈現總投入本金、複利報酬與長期資產成長預測。',
      keywords: ['sip計算機', '定期定額試算', '複利計算機'],
      faqQuestion: '複利效應如何在每月定期定額（SIP）投資中發揮作用？',
    },
    '/gst-calculator': {
      name: '營業稅 GST / VAT 計算機',
      h1: '消費稅與營業稅 GST / VAT 計算機（含稅與未稅反推）',
      metaTitle: '營業稅 GST / VAT 線上計算機 – 加稅與含稅反推未稅 | Ultimatrix',
      metaDescription:
        '將未稅金額加上 GST/VAT 稅率，或從含稅總金額反推未稅銷售額與稅額明細。',
      tagline: '一鍵切換外加稅金與內含稅金反推，清楚列出稅前金額與稅額。',
      keywords: ['營業稅計算機', '含稅反推未稅', 'gst計算機'],
      faqQuestion: '如何從含稅總價中反推未稅金額與稅金？',
    },
    '/compound-interest-calculator': {
      name: '線上複利計算機',
      h1: '複利試算與定存投資計算機（日複利、月複利、年複利）',
      metaTitle: '線上複利計算機 – 日/月/年複利成長試算與 72 法則 | Ultimatrix',
      metaDescription:
        '輸入初始本金與每月定期定額投入，立即試算日複利、月複利、季複利與年複利的未來總資產與逐年明細表。',
      tagline: '支援單筆與定期定額複利試算、72 法則倍增年數與年度明細表。',
      keywords: ['複利計算機', '複利試算', '月複利計算', '72法則', '복리계산기'],
      faqQuestion: '日複利、月複利與年複利該如何計算？差別在哪裡？',
    },
  },
};

export function getLocalizedCalculator(
  calc: CalculatorDefinition,
  lang: Lang
): CalculatorDefinition {
  if (lang === 'en') {
    return calc;
  }

  const localized = LOCALIZED_CALCULATORS[lang]?.[calc.slug];
  if (!localized) {
    return calc;
  }

  const localizedDirectAnswer =
    localized.directAnswer ?? `${localized.metaDescription} ${localized.tagline}`;

  const localizedFaqs: CalculatorFaq[] = localized.preserveBaseFaqs
    ? calc.faqs
    : calc.faqs.map((faq, idx) => {
        if (idx === 0) {
          return {
            question: localized.faqQuestion ?? faq.question,
            answer: localizedDirectAnswer,
          };
        }
        return faq;
      });

  return {
    ...calc,
    name: localized.name,
    h1: localized.h1,
    metaTitle: localized.metaTitle,
    metaDescription: localized.metaDescription,
    tagline: localized.tagline,
    keywords: [...localized.keywords, ...calc.keywords],
    directAnswer: localizedDirectAnswer,
    faqs: localizedFaqs,
  };
}
