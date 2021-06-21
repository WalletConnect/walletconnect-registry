import Header from "./Header";
import Footer from "./Footer";
import Banner from "../components/Banner";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="font-roboto" id="content">
    <Header />
    <main className="flex flex-col mx-8 mt-12 space-y-10 text-center align-middle">
      <Banner title="Registry">
        Registry of all Apps and Wallets supporting WalletConnect Protocol
      </Banner>
      {children}
    </main>
    <Footer />
  </div>
);
export default Layout;
