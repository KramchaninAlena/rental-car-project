import { Container } from "../../components/Styles/Container/Container.jsx"
import { NavLink, Outlet } from "react-router-dom"
import { Header, LinkStyled } from "./Layout.styled.js"

const Layout = () => {
  return (
    <Container>
        <Header>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="catalog">Cars Catalog</LinkStyled>
          <LinkStyled to="favorites"> Favotites</LinkStyled>
        </Header>
        <Outlet/>
    </Container>
  )
}

export default Layout