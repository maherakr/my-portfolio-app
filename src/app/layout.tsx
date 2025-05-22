import './globals.css';
import  Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '@/components/navbar';

export const metadata = {
  title: 'Maher Akremi'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="bumblebee" >
      
      <body >
      <Header />
       <Navbar />
        {children}
        <Footer /> 
      </body>
      
      
    </html>
  )
}
