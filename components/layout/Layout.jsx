import Footer from "../module/Footer"
import Header from "../module/Header"



function Layout({children}) {
  return (
    <div>

    
     <Header/>

       <div>{children}</div>

       


      <Footer/>
     
       
    </div>
  )
}
export default Layout