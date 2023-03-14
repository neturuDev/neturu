// const comfortaa = Comfortaa({
//   subsets: ['latin', 'cyrillic'],
//   weight: ['400', '700'],
// })

export default function DefaultLayout({ children }) {
  return (<>
    {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico?v=01" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#08259F" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="application-name" content="Neturu" />
        <meta name="apple-mobile-web-app-title" content="Neturu" />
    </Head> */}
    <div className={`layout-container`}>
      <header className='header'>
        <a href="/" className="blog-header">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 105 86" enableBackground="new 0 0 105 86">
            <title>Volodymyr Cherevchuk</title>
            <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M52.5,2.05c-17.18,0-31.26,13.95-31.26,31.3v25.09
              c0,3.49,2.74,6.25,6.1,6.25c3.49,0,6.23-2.76,6.23-6.25V33.35c0-10.48,8.47-18.97,18.93-18.97c10.46,0,18.93,8.49,18.93,18.97v25.09
              c0,3.49,2.74,6.25,6.1,6.25c3.49,0,6.23-2.76,6.23-6.25V33.35C83.76,16,69.68,2.05,52.5,2.05L52.5,2.05z M40.17,33.21
              c0.03-2.97,1.07-5.86,3.04-8.1c4.35-4.95,12.14-5.6,17.21-1.34c2.16,1.81,3.66,4.35,4.19,7.12c0.25,1.29,0.22,2.59,0.22,3.89
              c0,2.61,0,5.22,0,7.84c0,5.26,0,10.52,0,15.78c0,3.45,1.18,6.74,3.58,9.26c3.14,3.28,7.92,4.7,12.35,3.63
              c4.3-1.04,7.84-4.35,9.21-8.55c0.63-1.94,0.64-3.9,0.64-5.9c0-5.77,0-11.53,0-17.3c0-2.82,0-5.63,0-8.45c0-1.3-0.09-2.65,0.02-3.95
              c0.42-4.74,6.19-7.18,9.93-4.29c2.02,1.57,2.38,3.79,2.38,6.15c0,9.94,0,19.88,0,29.81c0,8.41-4.38,16.43-11.4,21.05
              c-7.63,5.01-17.67,5.43-25.71,1.12c-8.05-4.31-13.24-12.87-13.32-22c-0.08,8.95-5.06,17.35-12.86,21.75
              c-7.95,4.48-18,4.27-25.73-0.58C6.66,75.6,2.07,67.42,2.07,58.85c0-4.26,0-8.52,0-12.79c0-5.62,0-11.25,0-16.87
              c0-2.23,0.19-4.34,1.98-5.99c3.48-3.2,9.43-1.25,10.26,3.43c0.24,1.36,0.09,2.85,0.09,4.22c0,2.77,0,5.54,0,8.32
              c0,5.83,0,11.65,0,17.48c0,1.89-0.04,3.75,0.48,5.6c1.2,4.25,4.59,7.7,8.85,8.92c8.32,2.38,16.45-4.17,16.45-12.66
              C40.17,50.07,40.17,41.64,40.17,33.21z"/>
          </svg>
        </a>
      </header>
      <main className='main'>
        {children}
      </main>
      <footer className='footer'>
        ©2017-{new Date().getFullYear()} Neturu
      </footer>
    </div>
  </>);
}