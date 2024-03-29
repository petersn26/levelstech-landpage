import React from "react";
import styles, { layout } from "../style";
import Image from "next/image";

const Meetings = () => (
  <section id="meeting" className={`${layout.sectionReverse} bg-slate-200`}>
    <div className={`${layout.sectionImgReverse}`}>
      <Image
        src="/assets/hero.svg"
        alt="img"
        className=""
        width={500}
        height={500}
      />
    </div>

    <div className={`${layout.sectionInfo}`}>
        <span className=" text-blue-900">Meeting</span>
      <h2 className={styles.heading2}>
        Stay up to date with new{" "}
        <br className="sm:block hidden" />
        business idea
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Name (Title): SNOWFALL - Complete Season 4 S04 (2021 Series) - 720p AMZN
        Web-DL x264. Category Type: TV Shows. Length (Duration): 40-50+ Minutes
        per Episode Year(s): 2021. Starring: Damson Idris, Carter Hudson, Sergio
        Peris-Mencheta, Amin Joseph, Alon Abutbul, Michael Hyatt, Angela Lewis,
        Isaiah John, Kevin Carroll, Melvin Gregg, DeRay Davis, De'Aundre Bonds,
        Suzy Nakamura, etc... Genre(s): Crime, Drama, Historical.
      </p>
    </div>
  </section>
  
);

export default Meetings;
