import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface Props {
  children: ReactNode
}

export default function MainLayout(props: Props) {
  const { children } = props
  return (  
    <div className="min-h-screen bg-gray-200">
      <main>
        <Header />
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  )
}