export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 lg:px-16 border-t border-t-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-t-text">
          &copy; 2024 Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#hero" className="text-sm text-t-text hover:text-primary transition-colors">
            Home
          </a>
          <a href="#projects" className="text-sm text-t-text hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#experience" className="text-sm text-t-text hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#contact" className="text-sm text-t-text hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
