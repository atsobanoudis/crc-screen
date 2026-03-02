export type Language = 'en' | 'es';
export type Page = 'language' | 'hub' | 'fit' | 'cologuard' | 'colonoscopy';

export const content = {
  en: {
    welcome: "Welcome",
    selectLanguage: "Please select your preferred language to continue.",
    english: "English",
    spanish: "Español",
    hubTitle: "Colorectal Cancer Screening",
    hubSubtitle: "Early detection saves lives. Read about the options below and choose one to learn more about it.",
    fitTitle: "FIT Kit",
    fitDesc: "A simple test done at home once a year.",
    cologuardTitle: "Cologuard",
    cologuardDesc: "An at-home test done every 3 years.",
    colonoscopyTitle: "Colonoscopy",
    colonoscopyDesc: "A procedure done at a clinic every 10 years.",
    back: "Back",
    home: "Start Over",
    downloadBrochure: "Download Brochure",
    detailedInstructions: "Detailed Instructions",
    tapToEnlarge: "Tap brochure to enlarge.",
    callToSchedule: "To schedule or order, call:",
    orderHelp: "Need help? Call us at:",
    afterHoursHelp: "After hours? Please call:",
    twentyFourSeven: "24/7",
    officeHours: "M–F: 8AM–5PM",
    brochurePath: "/brochure-en.jpg",
    brochureFilename: "CRC-Screening-Brochure-EN.jpg",
    methods: {
      fit: {
        title: "FIT (Fecal Immunochemical Test)",
        intro: "The FIT test is a simple, non-invasive screening you can do in the comfort and privacy of your own home. It checks for hidden blood in your stool, which can be an early sign of colon cancer.",
        stepsTitle: "How it works:",
        steps: [
          "Call [PHONE] to order your FIT kit.",
          "Follow the instructions to collect a small stool sample.",
          "Mail the sample or drop it off at the lab.",
          "Your doctor will contact you with the results."
        ],
        frequency: "Recommended once a year.",
        downloadPath: "/fit-en.png",
        downloadFilename: "FIT-Kit-Guide-EN.png"
      },
      cologuard: {
        title: "Cologuard",
        intro: "Cologuard is an at-home screening test that looks for both hidden blood and altered DNA in your stool. It is delivered directly to your door.",
        stepsTitle: "How it works:",
        steps: [
          "Call [PHONE] to order your Cologuard kit.",
          "Receive the Cologuard kit in the mail and follow the instructions.",
          "Pack the sample and use the prepaid label to ship it back via UPS.",
          "Your doctor will review the results with you."
        ],
        frequency: "Recommended every 3 years.",
        downloadPath: "/cologuard-instructions-en.jpg",
        downloadFilename: "Cologuard-Instructions-EN.jpg"
      },
      colonoscopy: {
        title: "Colonoscopy",
        intro: "A colonoscopy is a thorough exam of your entire colon. It is the most accurate test and can actually prevent cancer by finding and removing polyps before they turn into cancer.",
        stepsTitle: "How it works:",
        steps: [
          "Call [PHONE] to schedule your colonoscopy appointment.",
          "Follow a special diet and take a laxative prep the day before.",
          "Arrive at the clinic or hospital for your appointment.",
          "The doctor will examine your colon and remove any polyps."
        ],
        frequency: "Recommended every 10 years for average-risk adults.",
        downloadPath: "/colonoscopy-en.png",
        downloadFilename: "Colonoscopy-Instructions-EN.png"
      }
    }
  },
  es: {
    welcome: "Bienvenido",
    selectLanguage: "Por favor, seleccione su idioma preferido para continuar.",
    english: "English",
    spanish: "Español",
    hubTitle: "Detección del Cáncer Colorrectal",
    hubSubtitle: "La detección temprana salva vidas. Lea sobre las opciones a continuación y elija una para obtener más información.",
    fitTitle: "Prueba FIT",
    fitDesc: "Una prueba sencilla que se hace en casa una vez al año.",
    cologuardTitle: "Cologuard",
    cologuardDesc: "Una prueba en casa que se hace cada 3 años.",
    colonoscopyTitle: "Colonoscopia",
    colonoscopyDesc: "Un procedimiento realizado en una clínica cada 10 años.",
    back: "Atrás",
    home: "Volver al inicio",
    downloadBrochure: "Descargar Folleto",
    detailedInstructions: "Instrucciones Detalladas",
    tapToEnlarge: "Toque el folleto para ampliar.",
    callToSchedule: "Para programar o pedir, llame al:",
    orderHelp: "¿Necesita ayuda? Llámenos al:",
    afterHoursHelp: "¿Fuera del horario? Por favor llame al:",
    twentyFourSeven: "24/7",
    officeHours: "L–V: 8AM–5PM",
    brochurePath: "/brochure-es.jpg",
    brochureFilename: "Folleto-Deteccion-CRC-ES.jpg",
    methods: {
      fit: {
        title: "Prueba FIT",
        intro: "La prueba FIT es un examen sencillo y no invasivo que puede hacer en la comodidad y privacidad de su hogar. Busca sangre oculta en las heces, lo cual puede ser un signo temprano de cáncer de colon.",
        stepsTitle: "Cómo funciona:",
        steps: [
          "Llame al [PHONE] para pedir su kit FIT.",
          "Siga las instrucciones para recolectar una pequeña muestra de heces.",
          "Envíe la muestra por correo o entréguela en el laboratorio.",
          "Su médico se comunicará con usted para darle los resultados."
        ],
        frequency: "Recomendado una vez al año.",
        downloadPath: "/fit-es.jpg",
        downloadFilename: "Guia-Prueba-FIT-ES.jpg"
      },
      cologuard: {
        title: "Cologuard",
        intro: "Cologuard es una prueba de detección en el hogar que busca tanto sangre oculta como ADN alterado en sus heces. Se entrega directamente en su puerta.",
        stepsTitle: "Cómo funciona:",
        steps: [
          "Llame al [PHONE] para pedir su kit Cologuard.",
          "Reciba el kit de Cologuard por correo y siga las instrucciones.",
          "Empaque la muestra y use la etiqueta prepagada para enviarla de regreso por UPS.",
          "Su médico revisará los resultados con usted."
        ],
        frequency: "Recomendado cada 3 años.",
        downloadPath: "/cologuard-instructions-es.jpg",
        downloadFilename: "Instrucciones-Cologuard-ES.jpg"
      },
      colonoscopy: {
        title: "Colonoscopia",
        intro: "Una colonoscopia es un examen exhaustivo de todo su colon. Es la prueba más precisa y en realidad puede prevenir el cáncer al encontrar y extirpar pólipos antes de que se conviertan en cáncer.",
        stepsTitle: "Cómo funciona:",
        steps: [
          "Llame al [PHONE] para programar su cita de colonoscopia.",
          "Siga una dieta especial y tome un laxante de preparación el día anterior.",
          "Llegue a la clínica u hospital para su cita.",
          "El médico examinará su colon y extirpará cualquier pólipo."
        ],
        frequency: "Recomendado cada 10 años para adultos de riesgo promedio.",
        downloadPath: "/colonoscopy-es.png",
        downloadFilename: "Instrucciones-Colonoscopia-ES.png"
      }
    }
  }
};
