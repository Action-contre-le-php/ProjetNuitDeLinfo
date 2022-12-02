import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-tailwind/react";
import NavBar from '../components/navBar';
import Footer from '../components/footer';

export default function App({ Component, pageProps }: AppProps) {

    console.warn("Salut comment est ce que ça va ? Pensez à bien vous hydrater !");

  return (
    <div className="min-h-screen flex flex-col">
      <ThemeProvider>
        <NavBar/>
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <div className="w-full flex justify-center h-16">
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}
