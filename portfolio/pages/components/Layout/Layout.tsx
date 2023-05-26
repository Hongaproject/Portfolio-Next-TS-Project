import Footer from "./footer/Footer";
import Header from "./header/Header";

type MainProps = {
    children: React.ReactNode;
}

export default function Layout({children}: MainProps) {
    return(
        <div>
            <Header />
                <div>
                    {children}
                </div>
            <Footer />
        </div>
    );
}