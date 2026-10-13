export type Seccion = { h: string; p: string[]; lista?: string[] };
export type Articulo = {
  slug: string;
  tab: string;
  titulo: string;
  resumen: string;
  illus: string;
  color: string;
  lectura: string;
  secciones: Seccion[];
  ideas: string[];
  mito: { mito: string; realidad: string };
  herramienta: { href: string; texto: string };
};

export const articulos: Articulo[] = [
  {
    slug: 'presupuesto-50-30-20',
    tab: 'Presupuesto',
    titulo: 'Reparte tu plata con el 50/30/20',
    resumen: 'Una regla sencilla para decidir cuánto va a lo necesario, cuánto a lo que disfrutas y cuánto a tu futuro.',
    illus: 'presupuesto',
    color: '#3DDC97',
    lectura: '4 min',
    secciones: [
      {
        h: '¿Qué es un presupuesto?',
        p: [
          'Un presupuesto es un plan que dice, antes de gastar, a dónde va a ir cada peso que recibes. No es una lista de prohibiciones: es la forma de que tu dinero haga lo que tú quieres y no lo que se le ocurra al antojo del momento.',
          'Da igual si tu ingreso es una mesada, un salario de medio tiempo o lo que te pagan por trabajos ocasionales. Mientras más pequeño sea el ingreso, más importa tener un plan.',
        ],
      },
      {
        h: 'La regla 50/30/20',
        p: ['Es una guía popular para repartir el dinero en tres partes. No es una ley exacta, pero es un excelente punto de partida:'],
        lista: [
          '50 % para necesidades: lo que no puedes dejar de pagar, como transporte, comida, matrícula, servicios y plan de celular.',
          '30 % para gustos: salidas, ropa que no es indispensable, plataformas de streaming, antojos.',
          '20 % para ahorro: tu fondo de emergencia y tus metas, como un computador, un curso o un viaje.',
        ],
      },
      {
        h: 'Un ejemplo en pesos',
        p: [
          'Si recibes $1.000.000 al mes: $500.000 van a necesidades, $300.000 a gustos y $200.000 a ahorro. Si recibes $400.000, el reparto sería $200.000, $120.000 y $80.000.',
          'Si tus necesidades pasan del 50 %, no te desanimes: ajusta los porcentajes (por ejemplo 60/25/15) y busca mejorar poco a poco. Lo importante es que el ahorro nunca quede en cero.',
        ],
      },
      {
        h: 'Cómo empezar hoy',
        p: ['Tres pasos para armar tu primer presupuesto:'],
        lista: [
          'Anota todo lo que gastas durante un mes, hasta el tinto y el pasaje. Puedes usar una hoja de cálculo o una app de notas.',
          'Clasifica cada gasto como necesidad, gusto o ahorro.',
          'Compara con el 50/30/20 y decide qué ajustar el mes siguiente.',
        ],
      },
    ],
    ideas: [
      'Un presupuesto es un plan, no un castigo.',
      'El 50/30/20 es una guía: ajústala a tu realidad.',
      'Lo que no se anota, no se puede mejorar.',
    ],
    mito: {
      mito: 'Hacer presupuesto solo sirve cuando uno gana mucho dinero.',
      realidad: 'Es justo al revés: con poco dinero cada peso cuenta más, y un plan evita que se te vaya en gastos hormiga.',
    },
    herramienta: { href: '/herramientas#calculadora', texto: 'Calcula tu 50/30/20' },
  },
  {
    slug: 'ahorro-y-emergencias',
    tab: 'Ahorro',
    titulo: 'Págate primero y arma tu colchón',
    resumen: 'Por qué el ahorro va antes que el gasto y cómo construir un fondo de emergencia aunque recibas poco.',
    illus: 'ahorro',
    color: '#FFC93C',
    lectura: '4 min',
    secciones: [
      {
        h: 'Págate primero',
        p: [
          'La mayoría de personas intenta ahorrar "lo que sobre" al final del mes, y casi nunca sobra nada. La estrategia de pagarte primero invierte el orden: apenas recibes dinero, separas tu ahorro como si fuera una cuenta más por pagar, y vives con el resto.',
          'Funciona mejor si lo automatizas: muchas cuentas y billeteras digitales permiten apartar dinero en "bolsillos" o metas para que no lo veas como disponible.',
        ],
      },
      {
        h: 'El fondo de emergencia',
        p: [
          'Es un dinero guardado solo para imprevistos: una enfermedad, un daño en el celular que usas para estudiar, quedarte sin trabajo. La recomendación habitual es reunir entre tres y seis meses de tus gastos básicos.',
          'Puede sonar mucho, pero se construye por etapas. Primera meta: el equivalente a un mes de gastos. Después dos, después tres.',
        ],
      },
      {
        h: 'Dónde guardarlo',
        p: ['El fondo de emergencia debe estar en un lugar seguro y disponible, no en la billetera ni invertido en algo arriesgado:'],
        lista: [
          'Una cuenta de ahorros o un bolsillo de una entidad vigilada por la Superintendencia Financiera de Colombia.',
          'Separado del dinero del día a día, para no gastarlo sin darte cuenta.',
          'Con acceso rápido cuando de verdad lo necesites.',
        ],
      },
      {
        h: 'Metas con fecha',
        p: [
          'Además del fondo de emergencia, ponle nombre y fecha a lo que quieres: "computador nuevo, $2.400.000, en 12 meses" se convierte en $200.000 al mes. Una meta concreta motiva mucho más que "ahorrar por ahorrar".',
        ],
      },
    ],
    ideas: [
      'Ahorra apenas recibas el dinero, no al final del mes.',
      'Tu primera meta: un mes de gastos guardado.',
      'Ponle nombre, valor y fecha a cada meta.',
    ],
    mito: {
      mito: 'Si ahorro poquito no vale la pena.',
      realidad: 'Lo que construye el ahorro es el hábito. $10.000 a la semana son más de $500.000 en un año, y el hábito luego crece con tus ingresos.',
    },
    herramienta: { href: '/herramientas#simulador', texto: 'Simula tu ahorro' },
  },
  {
    slug: 'credito-con-cabeza',
    tab: 'Crédito',
    titulo: 'Usa el crédito con cabeza',
    resumen: 'Qué es la tasa efectiva anual, cómo usar una tarjeta de crédito sin pagar de más y qué son las centrales de riesgo.',
    illus: 'credito',
    color: '#F7F5EF',
    lectura: '5 min',
    secciones: [
      {
        h: 'El crédito no es plata extra',
        p: [
          'Un crédito es dinero prestado que tendrás que devolver con intereses. Bien usado, ayuda a lograr metas grandes como estudiar; mal usado, se convierte en una carga que se come tus ingresos futuros.',
          'Antes de pedir un préstamo o pasar la tarjeta, pregúntate: ¿esto me genera valor a largo plazo o es un gusto que podría esperar?',
        ],
      },
      {
        h: 'Entiende la tasa E.A.',
        p: [
          'La tasa efectiva anual (E.A.) indica cuánto cuesta realmente un crédito en un año, incluyendo cómo se acumulan los intereses. Es el número que debes comparar entre una entidad y otra.',
          'Pide siempre el costo total del crédito: la suma de todo lo que pagarás, con intereses, seguros y cuotas de manejo. A veces una cuota "baja" esconde un plazo muy largo y un costo total altísimo.',
        ],
      },
      {
        h: 'Tarjeta de crédito sin sustos',
        p: ['La tarjeta puede ser una aliada si sigues estas reglas:'],
        lista: [
          'Paga el total de lo que debes cada mes. Si pagas solo el mínimo, el resto sigue generando intereses.',
          'Prefiere compras a una cuota cuando puedas pagarlas el mes siguiente.',
          'No uses la tarjeta para avances en efectivo: suelen tener costos más altos.',
          'No gastes más de lo que podrías pagar con tu ingreso de este mes.',
        ],
      },
      {
        h: 'Las centrales de riesgo',
        p: [
          'Las entidades consultan tu historial de pagos en las centrales de riesgo, como DataCrédito Experian o TransUnion. Si pagas a tiempo, construyes un buen historial que te abrirá puertas, por ejemplo para un crédito de vivienda. Si te atrasas, puedes quedar reportado y será más difícil que te presten en el futuro.',
        ],
      },
    ],
    ideas: [
      'Compara créditos por la tasa E.A. y el costo total.',
      'Paga el total de la tarjeta, no el mínimo.',
      'Pagar a tiempo construye tu historial crediticio.',
    ],
    mito: {
      mito: 'Pagar el mínimo de la tarjeta es suficiente para estar al día.',
      realidad: 'Estás al día, pero el saldo restante sigue generando intereses mes a mes. Por eso una compra pequeña puede terminar costando mucho más.',
    },
    herramienta: { href: '/herramientas#quiz', texto: 'Pon a prueba lo que sabes' },
  },
  {
    slug: 'evita-estafas',
    tab: 'Estafas',
    titulo: 'Si suena demasiado bueno, desconfía',
    resumen: 'Cómo reconocer pirámides, falsas inversiones y fraudes digitales antes de que te quiten tu plata.',
    illus: 'estafas',
    color: '#B8F5D8',
    lectura: '4 min',
    secciones: [
      {
        h: 'Las señales de alarma',
        p: ['Las estafas cambian de nombre, pero casi siempre repiten las mismas promesas. Desconfía si te ofrecen:'],
        lista: [
          'Ganancias altas, rápidas y "garantizadas", sin ningún riesgo.',
          'Pagos por traer a más personas: si el negocio depende de reclutar, es una pirámide.',
          'Presión para decidir ya: "solo quedan dos cupos", "la oferta vence hoy".',
          'Explicaciones vagas sobre de dónde salen las ganancias.',
        ],
      },
      {
        h: 'Pirámides y captación ilegal',
        p: [
          'En una pirámide, las "ganancias" de los primeros participantes se pagan con el dinero de los que llegan después. Cuando dejan de entrar personas nuevas, el esquema se cae y la mayoría pierde lo que puso.',
          'En Colombia, solo las entidades autorizadas y vigiladas por la Superintendencia Financiera pueden recibir dinero del público para ahorrar o invertir. Antes de entregar tu plata, verifica en su página web si la entidad está vigilada.',
        ],
      },
      {
        h: 'Fraudes digitales',
        p: ['Muchos fraudes llegan por WhatsApp, redes sociales o correo:'],
        lista: [
          'Nunca compartas claves, códigos que te llegan por mensaje de texto ni datos de tus tarjetas.',
          'Tu banco no te va a pedir la clave por teléfono ni por chat.',
          'Revisa bien los enlaces antes de abrirlos y descarga apps solo de tiendas oficiales.',
          'Si te escribe un "familiar" con un número nuevo pidiendo plata urgente, llámalo al número de siempre para confirmar.',
        ],
      },
    ],
    ideas: [
      'Rentabilidad alta y sin riesgo no existe.',
      'Si ganas por reclutar personas, es una pirámide.',
      'Verifica siempre que la entidad esté vigilada.',
    ],
    mito: {
      mito: 'Si mis amigos ya están ganando, el negocio es seguro.',
      realidad: 'En una pirámide los primeros sí reciben pagos: así es como atraen a más personas. Que alguien gane al principio no significa que el negocio sea real.',
    },
    herramienta: { href: '/herramientas#quiz', texto: 'Haz el quiz financiero' },
  },
  {
    slug: 'compras-inteligentes',
    tab: 'Compras',
    titulo: 'Compra con la cabeza, no con el impulso',
    resumen: 'Necesidad o deseo, la regla de las 48 horas y cómo evitar que los gastos hormiga se coman tu presupuesto.',
    illus: 'compras',
    color: '#13213C',
    lectura: '3 min',
    secciones: [
      {
        h: 'Necesidad o deseo',
        p: [
          'Una necesidad es algo sin lo cual tu vida diaria se complica: comida, transporte, materiales de estudio. Un deseo es algo que te gusta pero que puede esperar. Los deseos no son malos; el problema es pagarlos con el dinero de las necesidades o del ahorro.',
        ],
      },
      {
        h: 'La regla de las 48 horas',
        p: [
          'Antes de una compra que no tenías planeada, espera dos días. Si después de ese tiempo todavía la quieres y cabe en tu presupuesto de gustos, adelante. Muchas veces descubrirás que el antojo pasó.',
        ],
      },
      {
        h: 'Cuatro preguntas antes de pagar',
        p: [],
        lista: [
          '¿Lo necesito o lo quiero?',
          '¿Cuántas horas de trabajo me cuesta?',
          '¿Lo voy a usar dentro de un mes?',
          'Si es a cuotas, ¿cuánto pagaré en total con intereses?',
        ],
      },
      {
        h: 'Los gastos hormiga',
        p: [
          'Son gastos pequeños y frecuentes que casi no se notan: el café diario, los domicilios, las suscripciones que olvidaste cancelar. Un gasto de $8.000 al día son unos $240.000 al mes. Revisa tus suscripciones y decide cuáles de verdad usas.',
        ],
      },
    ],
    ideas: [
      'Espera 48 horas antes de una compra no planeada.',
      'Mide los precios en horas de trabajo.',
      'Los gastos pequeños y diarios suman mucho.',
    ],
    mito: {
      mito: 'Si está en descuento, estoy ahorrando.',
      realidad: 'Solo ahorras si ibas a comprarlo de todos modos. Comprar algo que no necesitabas porque está rebajado sigue siendo un gasto.',
    },
    herramienta: { href: '/herramientas#calculadora', texto: 'Revisa tu presupuesto' },
  },
];
