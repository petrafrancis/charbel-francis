import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function EventsPreview() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  return (
    <section className="relative max-w-4xl mx-auto px-8 py-16">
      {/* Decorative borders */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#8b7355] opacity-40"></div>
      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#8b7355] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#8b7355] opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#8b7355] opacity-40"></div>

      <div className="text-center mb-12">
        <span className="text-[#8b7355] text-sm tracking-[0.3em] uppercase block mb-3 font-manuscript">
          {t('events_subtitle')}
        </span>
        <h2 className="text-4xl md:text-5xl font-ornamental text-[#4a3f35] mb-4">
          {t('events_title')}
        </h2>
        <div className="w-24 h-1 bg-[#8b2e2e] mx-auto mb-6 rounded-full opacity-80"></div>
        <p className="text-[#6d5a43] font-manuscript italic text-lg max-w-2xl mx-auto leading-relaxed">
          {t('events_description')}
        </p>
      </div>

      {/* Preview content */}
      <div className="bg-[#f9f7f1] border-2 border-double border-[#8b7355] p-8 md:p-12 relative overflow-hidden">
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#8b2e2e] opacity-60"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#8b2e2e] opacity-60"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#8b2e2e] opacity-60"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#8b2e2e] opacity-60"></div>

          <div className="text-center space-y-6">
          <p className="text-[#4a3f35] font-manuscript text-lg leading-relaxed">
            {t('events_preview_text')}
          </p>

          <div className="pt-6">
            <button
              onClick={() => navigate('/events')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#8b2e2e] text-[#f4f1e8] font-manuscript text-lg hover:bg-[#6b2323] transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-[#8b2e2e] hover:border-[#6b2323] relative overflow-hidden">
              
              {/* Decorative background pattern */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat'
                }}>
              </div>

              <span className="relative z-10 uppercase tracking-wider">
                {t('view_all_events')}
              </span>
              <svg
                className={`w-5 h-5 relative z-10 transform transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

