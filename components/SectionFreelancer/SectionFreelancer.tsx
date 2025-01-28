import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

type SectionFreelancerProps = {};

const SectionFreelancer: React.FC<SectionFreelancerProps> = () => {
  return (
    <div className="m-12 mt-[25 0px]">
      <div className="min-h-[40px]">
        <a
          className="underline font-bold text-[20px] md:text-[26px] mb-2"
          href="https://www.freelancer.com/affiliates/email/79590881/"
        >
          Ashira Omashee Fernanod Francis Fernandoge
        </a>
        <p className="m-0 mb-[6px] whitespace-nowrap overflow-hidden text-[18px] md:text-[22px] text-[#8d8888]">
          Fashion &amp; Technical Designer, Graphic Designer
        </p>
        <div className="flex flex-col mt-5">
        <div className="flex text-[18px] md:text-[20px] gap-2">
          <div className="mt-1">
            <Phone className="w-4 md:w-5"/>
          </div>
          <span className="mt-1">+94761222577</span>
        </div>

        <div className="flex m-0 text-[18px] md:text-[20px] gap-2">
          <div className="mt-1">
            <Mail className="w-4 md:w-5"/>
          </div>
          <span className="mt-1">ashirabusiness01@gmail.com</span>
        </div>

        <div className="flex m-0 text-[18px] md:text-[20px] gap-2">
          <div className="mt-1"><MapPin className="w-4 md:w-5"/></div>
          <span className="leading-none mt-2">
            59, Gamamada Rd, Walpitamulla, Dewalapola, Minuwangoda, 11102
          </span>
        </div>
        </div>
      </div>
      <div className="mt-3 md:mt-5">
        <img
          src="https://www.freelancer.com/static/css/images/landingpage/hireme-widget-builder/fl-bird-icon.png"
          alt="Freelancer Icon"
          style={{ clear: "left", float: "left", margin: "10px 0" }}
          width={50}
        />
        <a
          href="https://www.freelancer.com/affiliates/email/79590881/"
          style={{
            display: "block",
            textDecoration: "underline",
            verticalAlign: "middle",
            height: "21px",
            float: "left",
          }}
          className="text-[18px] md:text-[20px] mt-4 ml-4"
        >
          Hire me on Freelancer.com
        </a>
      </div>
      <img
        src="//t.flnwdgt.com/1px.gif?username=ashiraf7&en=externalHireme&method=img&label=hiremeEmailImpression&ip=112.134.200.65&type=emailSignature"
        alt=""
        style={{ float: "left" }}
      />
    </div>
  );
};

export default SectionFreelancer;
