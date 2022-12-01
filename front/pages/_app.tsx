import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-tailwind/react";
import NavBar from '../components/navBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NavBar/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
