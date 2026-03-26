"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const echoRef = useRef(null);
  const goCartRef = useRef(null);
  const ibadaaRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    const projects = [goCartRef.current, echoRef.current, ibadaaRef.current];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  });
  return (
    <>
      <section ref={sectionRef} id="work" className="app-showcase">
        <div className="w-full">
          <div className="showcaselayout">
            <div ref={echoRef} className="first-project-wrapper">
              <img
                src="/images/my_work/echo2.png"
                alt="echo.proj"
                className="rounded-2xl shadow-xl shadow-slate-800"
              />
              <div className="text-content">
                <h2>ECHO – On-Demand Made Simple</h2>
                <p className="text-white-50 md:text-xl">
                  A fast, user-friendly social media app built with React,
                  TypeScript & TailwindCSS.
                </p>
              </div>
            </div>

            <div
              ref={goCartRef}
              className="project-list-wrapper overflow-hidden"
            >
              <div className="project">
                <div className="image-wrapper bg-[#e2dfdd] shadow-xl">
                  <img src="/images/my_work/gocart2.png" alt="GOcart App" />
                </div>
                <h2>GoCart – E-commerce App (Next.js)</h2>
              </div>

              <div ref={ibadaaRef} className="project">
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img src="/images/my_work/ibadaa2.png" alt="Ibadaa App" />
                </div>
                <h2>Ibadaa – Ramadan Tracker Startup App</h2>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCaseSection;
