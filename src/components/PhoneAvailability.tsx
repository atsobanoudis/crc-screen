import React from 'react';
import { PATIENT_PHONE, PATIENT_PHONE_URI } from '../config';
import type { content } from '../data/content';

type ContentType = typeof content['en'];

interface PhoneAvailabilityProps {
  t: ContentType;
}

export function PhoneAvailability({ t }: PhoneAvailabilityProps) {
  return (
    <div className="mt-12 flex flex-col w-full gap-6">
      <div>
        <h3 className="text-xl font-bold text-warm-muted uppercase tracking-tight mb-2">
          {t.orderHelp}
        </h3>
        <div className="relative">
          <a
            href={PATIENT_PHONE_URI}
            className="text-4xl font-black text-brand hover:text-brand-dark transition-colors"
          >
            {PATIENT_PHONE}
          </a>
          <span className="absolute bottom-1 right-0 text-base font-bold text-warm-muted uppercase tracking-tight whitespace-nowrap">
            {t.officeHours}
          </span>
        </div>
      </div>
      <div className="pt-6 border-t border-black/10">
        <p className="text-lg font-bold text-warm-muted mb-2">
          {t.afterHoursHelp}
        </p>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <a
              href="tel:8667335924"
              className="text-lg font-bold text-warm-text hover:text-brand transition-colors"
            >
              (866) 733-5924
            </a>
            <span className="text-sm font-semibold text-warm-muted uppercase tracking-wider">
              {t.twentyFourSeven}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <a
              href="tel:5628677999"
              className="text-lg font-bold text-warm-text hover:text-brand transition-colors"
            >
              (562) 867-7999
            </a>
            <span className="text-sm font-semibold text-warm-muted uppercase tracking-wider">
              {t.twentyFourSeven}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
