import type { ReactNode } from 'react';

interface InfoPageProps {
  title: string;
  intro: string;
  children: ReactNode;
}

export default function InfoPage({ title, intro, children }: InfoPageProps) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">{intro}</p>
      </header>
      <div className="mt-10 space-y-9 text-base leading-7 text-gray-700">{children}</div>
    </div>
  );
}
