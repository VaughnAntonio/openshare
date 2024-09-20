import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "OpenShare",
    description:  'Discover featured ChatGPT AI prompts for development',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
        <body>
            <Provider>
            <div className="main">
                <div className="gradient"></div>
            </div>

            <main className="app">
                <Nav/>
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout