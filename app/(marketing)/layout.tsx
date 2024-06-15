const MarketingLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full bg-slate-200">
      {/* NavBar */}
      <main className="pt-40 pb-20 bg-slate-200">
        {children}
      </main>
      {/* Footer */}
    </div>
  )
}

export default MarketingLayout;