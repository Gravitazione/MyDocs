import { Prompt } from "next/font/google";

const prompt = Prompt({
    weight: "400",
    subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={prompt.className}>
        <Component pageProps={pageProps} />
    </main>
  );
}
