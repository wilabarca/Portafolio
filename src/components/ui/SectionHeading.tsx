interface SectionHeadingProps {
  children: React.ReactNode;
}

/** Título h2 consistente para cada sección de la página. */
export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
      {children}
    </h2>
  );
}
