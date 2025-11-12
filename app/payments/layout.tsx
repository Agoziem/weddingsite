import FooterSection from "@/components/modules/layout/footer";
import Navbar from "@/components/modules/layout/navbar";
import React from "react";

const PaymentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="grow">
        {children}
      </div>
      <FooterSection />
    </div>
  );
};

export default PaymentLayout;
