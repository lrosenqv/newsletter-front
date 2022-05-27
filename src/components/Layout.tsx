import { Outlet } from "react-router-dom"

export const Layout = () => {
  return(<>
    <header></header>
    <main>
      <Outlet/>
    </main>
    <footer>Louise Rosenqvist 2022</footer>
  </>)
}