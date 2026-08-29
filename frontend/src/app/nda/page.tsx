'use client';

import { useState } from 'react';
import { NDAForm } from '@/components/NDAForm';
import { NDAPreview } from '@/components/NDAPreview';
import { DownloadButton } from '@/components/DownloadButton';
import { NDAFormData, defaultFormData } from '@/types/nda';

export default function NDACreator() {
  const [formData, setFormData] = useState<NDAFormData>(defaultFormData);

  return (
    <div className="min-h-screen" style={{ background: '#f4f6f9' }}>
      {/* Header */}
      <header className="sticky top-0 z-10 shadow-md" style={{ background: '#032147' }}>
        <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">Mutual NDA Creator</h1>
            <p className="text-sm" style={{ color: '#888888' }}>
              Create a professional Mutual Non-Disclosure Agreement
            </p>
          </div>
          <DownloadButton
            formData={formData}
            buttonClassName="flex items-center justify-center gap-2 px-6 py-3 bg-[#753991] text-white font-medium rounded-lg hover:bg-[#5e2a74] transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Panel */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200" style={{ background: '#f8fafc' }}>
              <h2 className="text-lg font-semibold" style={{ color: '#032147' }}>
                Agreement Details
              </h2>
              <p className="text-sm" style={{ color: '#888888' }}>
                Fill in the fields below to customise your NDA
              </p>
            </div>
            <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
              <NDAForm formData={formData} onChange={setFormData} />
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200" style={{ background: '#f8fafc' }}>
              <h2 className="text-lg font-semibold" style={{ color: '#032147' }}>
                Document Preview
              </h2>
              <p className="text-sm" style={{ color: '#888888' }}>
                Live preview updates as you type
              </p>
            </div>
            <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
              <NDAPreview formData={formData} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8" style={{ borderTop: '1px solid #e2e8f0', background: 'white' }}>
        <div className="max-w-[1800px] mx-auto px-6 py-4 text-center text-sm" style={{ color: '#888888' }}>
          Based on{' '}
          <a
            href="https://commonpaper.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#209dd7' }}
            className="hover:underline"
          >
            Common Paper
          </a>{' '}
          Standard Terms, licensed under{' '}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#209dd7' }}
            className="hover:underline"
          >
            CC BY 4.0
          </a>
        </div>
      </footer>
    </div>
  );
}
