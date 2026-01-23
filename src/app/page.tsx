import { Footer, Header, MainPage } from "@/src/containers";
import { css } from "@/styled-system/css";

export default function Home() {
  return (
    /*<>
      <Header />
      <MainPage />
      <Footer />
    </>*/
    <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>Hello 🐼!</div>
  );
}
