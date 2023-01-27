import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <section className="bg-[#DFE4E8]">
      <div className="container p-2 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <div className="flex flex-wrap justify-center lg:justify-between">
          <Image
            priority
            src="/images/trust.svg"
            height={42}
            width={241}
            alt="trust"
          />

          <Image
            priority
            src="/images/smith.svg"
            height={22}
            width={155}
            alt="smith"
          />
          <Image
            priority
            src="/images/jma.svg"
            height={38}
            width={91}
            alt="jma"
          />
          
          <Image
            priority
            src="/images/williams.svg"
            height={20}
            width={228}
            alt="williams"
          />
          <Image
            priority
            src="/images/brown.svg"
            height={20}
            width={164}
            alt="brown"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
