import Container from './Container'

export default function Footer() {
  return (
    <footer className="mt-10 border-t">
      <Container className="py-6 text-sm text-gray-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} USMedQ. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="/about" className="hover:text-blue-600">
            About
          </a>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>
      </Container>
    </footer>
  )
}
