import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://phone-rejoice.zhenghao.io/script.js"
          data-site="ESNDEPHC"
          defer
        ></script>
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){var a=document.body.classList;a.remove("dark");var e=localStorage.getItem("theme");e?a.add(e.replace(/"/g,"")):window.matchMedia("(prefers-color-scheme: dark)").matches?a.add("dark"):a.add("light")}()`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
