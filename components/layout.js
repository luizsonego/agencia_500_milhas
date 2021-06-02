import Meta from '../components/meta'
import Navbar from './navbar'
import Social from './social'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Social />
      <Navbar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}
