import "./globals.css"
import Header from '@/components/Header'
import Providers from './Providers'
import Navbar from "@/components/Navbar"
import SearchBox from "@/components/SearchBox"



export const metadata = {
  title: 'IMDb clone',
  description: 'this is a IMDb clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
  {/*Header */} 
  <Header />  

          {/*NavBar */} 
       <Navbar />          

{/*SearchBox */}  
<SearchBox/>
  
  {children}
        </Providers>
      
      
      </body>
    </html>

  )
}
