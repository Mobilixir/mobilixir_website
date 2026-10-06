interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="mesh-bg pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">{eyebrow}</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">{title}</h1>
        {description && (
          <p className="mt-5 text-lg text-base-content/60 max-w-2xl leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </header>
  );
}
