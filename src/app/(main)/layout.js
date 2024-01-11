import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
export default function MainLayout({ children }) {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
