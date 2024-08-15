export default function MasonryContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 max-w-[75rem] mx-auto py-8 px-4">
      <div className="columns-2 md:columns-3 xl:columns-4 space-y-8">
        {children}
      </div>
    </section>
  );
}
