import { Outlet } from 'react-router-dom'

import Container from './Container';
import Footer from './Footer';
import TopBelt from './TopBelt';
import TopBanner from './TopBanner';
import NavBelt from './NavBelt';

export default function Layout() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded hover:text-blue-600 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`

  return (
    <div>
      <header className="border-b">
        <Container className="p-0">
          <TopBelt />
          <TopBanner />
          <NavBelt />
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
