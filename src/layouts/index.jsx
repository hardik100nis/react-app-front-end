import Header from "./Header";
import './index.scss'

export default function Layout({children}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
     
    </>
  )
}