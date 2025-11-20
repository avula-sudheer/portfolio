export default function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 shadow-inner">
      <div className="container py-3 text-sm text-center">© {new Date().getFullYear()} Sudheer Avula — Built with love from homelabs</div>
    </footer>
  )
}