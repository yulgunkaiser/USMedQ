import { Outlet } from 'react-router-dom'
import Container from './Container'
import Footer from './Footer'
import Nav from './Nav'

export default function Layout() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded hover:text-blue-600 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`

  return (
    <div>
      <header className="border-b">
        <Container className="p-0">
          <div id="TopBanner" className="text-center font-normal break-keep p-0 list-none text-[13px] break-words font-['alkatip basma tom'] text-[#6b6c6c] h-auto mx-auto w-full max-w-[890px] clear-both">
            <a href="https://www.gjwlaqxcz.cn/" target="_blank" rel="noreferrer">
              <img
                src="./src/images/Banner.png"
                alt="Banner"
                className="w-full h-auto max-h-[190px] object-contain"
              />
            </a>
          </div>
          <div className="p-4">
          <Nav />
          </div>
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
