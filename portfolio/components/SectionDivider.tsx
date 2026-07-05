export default function SectionDivider() {
  return (
    <div className="section-container">
      <div className="flex items-center gap-4 py-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-transparent dark:via-line-dark" />
        <div className="h-1.5 w-1.5 rounded-full bg-accent/40" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-transparent dark:via-line-dark" />
      </div>
    </div>
  );
}
