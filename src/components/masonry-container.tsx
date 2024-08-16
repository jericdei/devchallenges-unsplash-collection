export default function MasonryContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="mx-auto mt-16 max-w-[75rem] px-4 py-8">
      <div className="columns-2 space-y-8 md:columns-3 xl:columns-4">
        {children}
      </div>
    </section>
  )
}
