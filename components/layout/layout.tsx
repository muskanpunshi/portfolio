"use client";
import { ScrollValueProvider } from "@lib/context/scrollValueContext";
import Header from "./header";

export default function WebLayout({children}:{children:React.ReactNode}) {
  return (
    <ScrollValueProvider>
 
      <div className={`relative w-full h-screen `}>
        <Header />
        <div className="overflow-hidden ">{children}</div>
        {/* <Footer
          locale={locale}
          dictionary={{
            footer,
            navigation
          }}
        /> */}
      </div>
      </ScrollValueProvider>

  );
}
