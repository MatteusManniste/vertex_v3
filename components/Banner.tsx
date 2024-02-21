import { FaMountainSun } from "react-icons/fa6";
import { Marcellus_SC } from "next/font/google";

const MarcellusSC = Marcellus_SC({ weight: ["400"], subsets: ["latin"] });

import "@/styles/banner.css";

export const Banner = () => {
  return (
    <div className="banner">
      <span className={`${MarcellusSC.className} banner-brand`}>
        <FaMountainSun />
        Vertex
      </span>
    </div>
  );
};
