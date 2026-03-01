import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowLeft, Home, Download } from 'lucide-react';
import { content, Language, Page } from './data/content';
import { DoctorIcon, TestTubeIcon, MailboxDnaIcon, ColonIcon } from './components/Icons';
import { PATIENT_PHONE, PATIENT_PHONE_URI } from './config';

export default function App() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [page, setPage] = useState<Page>('language');
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for back

  const handleLanguageSelect = (lang: Language) => {
    setDirection(1);
    setLanguage(lang);
    setPage('hub');
  };

  const handlePageSelect = (newPage: Page) => {
    setDirection(1);
    setPage(newPage);
  };

  const handleBack = () => {
    setDirection(-1);
    setPage('hub');
  };

  const handleHome = () => {
    setDirection(-1);
    setLanguage(null);
    setPage('language');
  };

  return (
    <div className="min-h-screen w-full bg-warm-bg flex justify-center">
      <div className="w-full max-w-md bg-warm-bg shadow-2xl overflow-hidden flex flex-col relative h-[100dvh]">
        <AnimatePresence mode="wait" custom={direction}>
          {page === 'language' && (
            <LanguageSelection key="language" onSelect={handleLanguageSelect} />
          )}
          {page === 'hub' && language && (
            <Hub 
              key="hub" 
              language={language} 
              onSelect={handlePageSelect} 
              onHome={handleHome}
              direction={direction}
            />
          )}
          {(page === 'fit' || page === 'cologuard' || page === 'colonoscopy') && language && (
            <MethodPage 
              key={page} 
              language={language} 
              method={page} 
              onBack={handleBack} 
              onHome={handleHome}
              direction={direction}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function LanguageSelection({ onSelect }: { onSelect: (lang: Language) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex-1 flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="w-28 h-28 bg-brand/10 rounded-full flex items-center justify-center mb-10">
        <DoctorIcon className="w-14 h-14 text-brand" />
      </div>
      <h1 className="text-4xl font-bold text-warm-text mb-4">Welcome<br/><span className="text-3xl text-warm-muted font-medium mt-2 block">Bienvenido</span></h1>
      <p className="text-xl text-warm-muted mb-12 leading-relaxed">
        Please select your preferred language to continue.<br/>
        <span className="text-lg mt-2 block">Por favor, seleccione su idioma preferido para continuar.</span>
      </p>
      
      <div className="w-full space-y-5">
        <button 
          onClick={() => onSelect('en')}
          className="w-full py-5 px-8 bg-white text-brand border-2 border-brand rounded-full text-2xl font-semibold shadow-sm hover:bg-brand/5 active:bg-brand active:text-white transition-colors flex items-center justify-between group"
          aria-label="Select English"
        >
          <span>English</span>
          <ChevronRight className="w-8 h-8 group-active:text-white" />
        </button>
        <button 
          onClick={() => onSelect('es')}
          className="w-full py-5 px-8 bg-white text-brand border-2 border-brand rounded-full text-2xl font-semibold shadow-sm hover:bg-brand/5 active:bg-brand active:text-white transition-colors flex items-center justify-between group"
          aria-label="Seleccionar Español"
        >
          <span>Español</span>
          <ChevronRight className="w-8 h-8 group-active:text-white" />
        </button>
      </div>
    </motion.div>
  );
}

function Hub({ language, onSelect, onHome, direction }: { language: Language, onSelect: (page: Page) => void, onHome: () => void, direction: number }) {
  const t = content[language];
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: direction * 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -20 }}
      className="flex-1 flex flex-col bg-warm-bg h-full"
    >
      <div ref={scrollRef} className="flex-1 overflow-y-auto pb-12">
        <header className="p-8 pb-10 bg-white shadow-sm rounded-b-[2.5rem] z-10 relative mb-4">
          <button 
            onClick={onHome}
            className="absolute top-8 right-8 p-3 text-warm-muted hover:text-brand transition-colors bg-warm-bg rounded-full"
            aria-label={t.home}
          >
            <Home className="w-7 h-7" />
          </button>
          <div className="w-20 h-20 bg-brand/10 rounded-3xl flex items-center justify-center mb-6">
            <DoctorIcon className="w-10 h-10 text-brand" />
          </div>
          <h1 className="text-4xl font-bold text-warm-text mb-3 leading-tight">{t.hubTitle}</h1>
          <p className="text-xl text-warm-muted leading-relaxed">{t.hubSubtitle}</p>
        </header>

        <div className="p-6 space-y-5 pt-4">
          <div className="mb-8">
            <div className="rounded-[2rem] overflow-hidden shadow-md border border-black/5 bg-white p-4">
              <a 
                href={t.brochurePath} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-zoom-in"
                title={t.tapToEnlarge}
              >
                <img 
                  src={t.brochurePath} 
                  alt={t.downloadBrochure}
                  className="w-full h-auto rounded-2xl hover:opacity-95 transition-opacity"
                />
              </a>
              <p className="text-sm text-warm-muted mt-3 mb-6 px-4 italic text-left">
                {t.tapToEnlarge} {t.callToSchedule}{' '}
                <a 
                  href={PATIENT_PHONE_URI} 
                  className="font-bold text-brand hover:text-brand-dark transition-colors not-italic"
                >
                  {PATIENT_PHONE}
                </a>
              </p>

              <a 
                href={t.brochurePath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-brand/10 text-brand rounded-full text-xl font-bold hover:bg-brand/20 transition-colors flex items-center justify-center gap-3"
              >
                <Download className="w-6 h-6" />
                <span>{t.downloadBrochure}</span>
              </a>
            </div>
          </div>

          <HubCard 
            title={t.fitTitle} 
            description={t.fitDesc} 
            icon={<TestTubeIcon className="w-10 h-10 text-brand" />}
            onClick={() => onSelect('fit')}
          />
          <HubCard 
            title={t.cologuardTitle} 
            description={t.cologuardDesc} 
            icon={<MailboxDnaIcon className="w-10 h-10 text-brand" />}
            onClick={() => onSelect('cologuard')}
          />
          <HubCard 
            title={t.colonoscopyTitle} 
            description={t.colonoscopyDesc} 
            icon={<ColonIcon className="w-10 h-10 text-brand" />}
            onClick={() => onSelect('colonoscopy')}
          />

          <div className="mt-8 mb-12 px-4 flex flex-col w-full">
            <h3 className="text-xl font-bold text-warm-muted uppercase tracking-tight">{t.orderHelp}</h3>
            <a 
              href={PATIENT_PHONE_URI} 
              className="text-3xl font-black text-brand self-end hover:text-brand-dark transition-colors mt-2"
            >
              {PATIENT_PHONE}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HubCard({ title, description, icon, onClick }: { title: string, description: string, icon: React.ReactNode, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="w-full text-left bg-white p-6 rounded-[2rem] shadow-sm border border-black/5 hover:shadow-md hover:border-brand/30 transition-all flex items-center gap-5 group active:scale-[0.98]"
    >
      <div className="flex-shrink-0 w-20 h-20 bg-warm-bg rounded-3xl flex items-center justify-center group-hover:bg-brand/5 transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-warm-text mb-2">{title}</h2>
        <p className="text-lg text-warm-muted leading-snug">{description}</p>
      </div>
      <ChevronRight className="w-8 h-8 text-brand/50 group-hover:text-brand transition-colors flex-shrink-0" />
    </button>
  );
}

function MethodPage({ language, method, onBack, onHome, direction }: { language: Language, method: 'fit' | 'cologuard' | 'colonoscopy', onBack: () => void, onHome: () => void, direction: number }) {
  const t = content[language];
  const m = t.methods[method];
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, []);
  
  const icons = {
    fit: <TestTubeIcon className="w-12 h-12 text-brand" />,
    cologuard: <MailboxDnaIcon className="w-12 h-12 text-brand" />,
    colonoscopy: <ColonIcon className="w-12 h-12 text-brand" />
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: direction * 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -20 }}
      className="flex-1 flex flex-col bg-white h-full"
    >
      <header className="p-4 flex items-center justify-between border-b border-black/5 sticky top-0 bg-white/90 backdrop-blur-md z-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand font-semibold px-4 py-3 rounded-full hover:bg-brand/5 transition-colors active:bg-brand/10"
          aria-label={t.back}
        >
          <ArrowLeft className="w-7 h-7" />
          <span className="text-xl">{t.back}</span>
        </button>
        <button 
          onClick={onHome}
          className="p-3 text-warm-muted hover:text-brand transition-colors rounded-full hover:bg-brand/5 active:bg-brand/10"
          aria-label={t.home}
        >
          <Home className="w-7 h-7" />
        </button>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="p-8 pb-16">
          <div className="w-24 h-24 bg-brand/10 rounded-[2rem] flex items-center justify-center mb-8">
            {icons[method]}
          </div>
          
          <h1 className="text-4xl font-bold text-warm-text mb-5 leading-tight">{m.title}</h1>
          
          <div className="inline-block bg-brand/10 text-brand font-bold px-5 py-3 rounded-full text-lg mb-8">
            {m.frequency}
          </div>
          
          <p className="text-2xl text-warm-muted mb-12 leading-relaxed">
            {m.intro}
          </p>

          <div className="bg-warm-bg rounded-[2.5rem] p-8 mb-10 border border-black/5">
            <h2 className="text-3xl font-bold text-warm-text mb-8">{m.stepsTitle}</h2>
            <ul className="space-y-8">
              {m.steps.map((step, index) => {
                const hasPhone = step.includes('[PHONE]');
                const parts = hasPhone ? step.split('[PHONE]') : [step];

                return (
                  <li key={index} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold text-lg mt-1">
                      {index + 1}
                    </div>
                    <p className="text-xl text-warm-text leading-relaxed pt-1">
                      {hasPhone ? (
                        <>
                          {parts[0]}
                          <a 
                            href={PATIENT_PHONE_URI} 
                            className="text-brand font-bold underline decoration-2 underline-offset-4 hover:text-brand-dark transition-colors"
                          >
                            {PATIENT_PHONE}
                          </a>
                          {parts[1]}
                        </>
                      ) : (
                        step
                      )}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <a 
            href={m.downloadPath}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-6 px-8 bg-brand text-white rounded-full text-2xl font-bold shadow-lg hover:bg-brand-light active:bg-brand-dark transition-colors flex items-center justify-center gap-4"
          >
            <Download className="w-8 h-8" />
            <span>{t.detailedInstructions}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
