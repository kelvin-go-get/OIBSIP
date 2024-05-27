//renders layout section for the webpage
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children})=> {
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}
export default Layout
