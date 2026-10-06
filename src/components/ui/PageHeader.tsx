interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="grid-bg pt-32 pb-16 sm:pt-44 sm:pb-20 border-b border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] max-w-4xl text-balance break-words">{title}</h1>
        {description && <p className="mt-6 text-lg sm:text-xl text-base-content/65 max-w-2xl leading-relaxed">{description}</p>}
        {children}
      </div>
    </header>
  );
}
