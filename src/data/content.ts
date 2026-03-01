export type Language = 'en' | 'es';
export type Page = 'language' | 'hub' | 'fit' | 'cologuard' | 'colonoscopy';

export const content = {
  en: {
    welcome: "Welcome",
    selectLanguage: "Please select your preferred language to continue.",
    english: "English",
    spanish: "Español",
    hubTitle: "Colorectal Cancer Screening",
    hubSubtitle: "Screening saves lives. Choose an option below to learn more about how it works.",
    fitTitle: "FIT Kit",
    fitDesc: "A simple test done at home once a year.",
    cologuardTitle: "Cologuard",
    cologuardDesc: "An at-home test done every 3 years.",
    colonoscopyTitle: "Colonoscopy",
    colonoscopyDesc: "A procedure done at a clinic every 10 years.",
    back: "Back",
    home: "Start Over",
    downloadBrochure: "Download Brochure",
    tapToEnlarge: "Tap image to enlarge. Use button below to download.",
    brochurePath: "/brochure-en.jpg",
    brochureFilename: "CRC-Screening-Brochure-EN.jpg",
    methods: {
      fit: {
        title: "FIT (Fecal Immunochemical Test)",
        intro: "The FIT test is a simple, non-invasive screening you can do in the comfort and privacy of your own home. It checks for hidden blood in your stool, which can be an early sign of colon cancer.",
        stepsTitle: "How it works:",
        steps: [
          "Collect your kit from your doctor or lab.",
          "Follow the instructions to collect a small stool sample.",
          "Mail the sample or drop it off at the lab.",
          "Your doctor will contact you with the results."
        ],
        frequency: "Recommended once a year.",
        downloadPath: "/fit-guide-en.pdf",
        downloadFilename: "FIT-Kit-Guide-EN.pdf"
      },
      cologuard: {
        title: "Cologuard",
        intro: "Cologuard is an at-home screening test that looks for both hidden blood and altered DNA in your stool. It is delivered directly to your door.",
        stepsTitle: "How it works:",
        steps: [
          "Receive the Cologuard kit in the mail.",
          "Collect your sample at home using the provided container.",
          "Pack the sample and use the prepaid label to ship it back via UPS.",
          "Your doctor will review the results with you."
        ],
        frequency: "Recommended every 3 years.",
        downloadPath: "/cologuard-guide-en.pdf",
        downloadFilename: "Cologuard-Guide-EN.pdf"
      },
      colonoscopy: {
        title: "Colonoscopy",
        intro: "A colonoscopy is a thorough exam of your entire colon. It is the most accurate test and can actually prevent cancer by finding and removing polyps before they turn into cancer.",
        stepsTitle: "How it works:",
        steps: [
          "Follow a special diet and take a laxative prep the day before.",
          "Arrive at the clinic or hospital for your appointment.",
          "You will be given medication to keep you comfortable and asleep.",
          "The doctor will examine your colon and remove any polyps."
        ],
        frequency: "Recommended every 10 years for average-risk adults.",
        downloadPath: "/colonoscopy-guide-en.pdf",
        downloadFilename: "Colonoscopy-Guide-EN.pdf"
      }
    }
  },
  es: {
    welcome: "Bienvenido",
    selectLanguage: "Por favor, seleccione su idioma preferido para continuar.",
    english: "English",
    spanish: "Español",
    hubTitle: "Detección del Cáncer Colorrectal",
    hubSubtitle: "La detección salva vidas. Elija una opción a continuación para obtener más información.",
    fitTitle: "Prueba FIT",
    fitDesc: "Una prueba sencilla que se hace en casa una vez al año.",
    cologuardTitle: "Cologuard",
    cologuardDesc: "Una prueba en casa que se hace cada 3 años.",
    colonoscopyTitle: "Colonoscopia",
    colonoscopyDesc: "Un procedimiento realizado en una clínica cada 10 años.",
    back: "Atrás",
    home: "Volver al inicio",
    downloadBrochure: "Descargar Folleto",
    tapToEnlarge: "Toque la imagen para ampliar. Use el botón de abajo para descargar.",
    brochurePath: "/brochure-es.jpg",
    brochureFilename: "Folleto-Deteccion-CRC-ES.jpg",
    methods: {
      fit: {
        title: "Prueba FIT",
        intro: "La prueba FIT es un examen sencillo y no invasivo que puede hacer en la comodidad y privacidad de su hogar. Busca sangre oculta en las heces, lo cual puede ser un signo temprano de cáncer de colon.",
        stepsTitle: "Cómo funciona:",
        steps: [
          "Recoja su kit en el consultorio de su médico o laboratorio.",
          "Siga las instrucciones para recolectar una pequeña muestra de heces.",
          "Envíe la muestra por correo o entréguela en el laboratorio.",
          "Su médico se comunicará con usted para darle los resultados."
        ],
        frequency: "Recomendado una vez al año.",
        downloadPath: "/fit-guide-es.pdf",
        downloadFilename: "Guia-Prueba-FIT-ES.pdf"
      },
      cologuard: {
        title: "Cologuard",
        intro: "Cologuard es una prueba de detección en el hogar que busca tanto sangre oculta como ADN alterado en sus heces. Se entrega directamente en su puerta.",
        stepsTitle: "Cómo funciona:",
        steps: [
          "Reciba el kit de Cologuard por correo.",
          "Recolecte su muestra en casa usando el recipiente provisto.",
          "Empaque la muestra y use la etiqueta prepagada para enviarla de regreso por UPS.",
          "Su médico revisará los resultados con usted."
        ],
        frequency: "Recomendado cada 3 años.",
        downloadPath: "/cologuard-guide-es.pdf",
        downloadFilename: "Guia-Cologuard-ES.pdf"
      },
      colonoscopy: {
        title: "Colonoscopia",
        intro: "Una colonoscopia es un examen exhaustivo de todo su colon. Es la prueba más precisa y en realidad puede prevenir el cáncer al encontrar y extirpar pólipos antes de que se conviertan en cáncer.",
        stepsTitle: "Cómo funciona:",
        steps: [
          "Siga una dieta especial y tome un laxante de preparación el día anterior.",
          "Llegue a la clínica u hospital para su cita.",
          "Se le dará medicamento para mantenerlo cómodo y dormido.",
          "El médico examinará su colon y extirpará cualquier pólipo."
        ],
        frequency: "Recomendado cada 10 años para adultos de riesgo promedio.",
        downloadPath: "/colonoscopy-guide-es.pdf",
        downloadFilename: "Guia-Colonoscopia-ES.pdf"
      }
    }
  }
};
