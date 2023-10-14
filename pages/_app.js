import LayoutPage from "@/components/layout/LayoutPage";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LayoutPage>
      <Component {...pageProps} />
    </LayoutPage>
  );
}
