import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-WCRSRSNN7X"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WCRSRSNN7X', { page_path: window.location.pathname });
            `,
            }}
          />

          {/* <!-- Hotjar Tracking Code for https://agencia.500milhas.com.br/ --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){
                  h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                      h._hjSettings={hjid:2467514,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                `
            }}
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Passion+One:wght@700;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Barrio&display=swap" rel="stylesheet" />
          <script src="https://kit.fontawesome.com/bfaef1dc37.js" crossorigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
