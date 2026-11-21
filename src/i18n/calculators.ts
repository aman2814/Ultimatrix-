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

  const localizedFaqs: CalculatorFaq[] = calc.faqs.map((faq, idx) => {
    if (idx === 0) {
      return {
        question: faq.question,
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
