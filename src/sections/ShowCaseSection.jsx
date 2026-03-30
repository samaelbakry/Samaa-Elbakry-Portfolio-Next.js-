"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useRef } from "react";

const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const echoRef = useRef(null);
  const goCartRef = useRef(null);
  const ibadaaRef = useRef(null);
  const mohjitoRef = useRef(null);
  const gamesRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    const projects = [
      goCartRef.current,
      echoRef.current,
      ibadaaRef.current,
      mohjitoRef.current,
      gamesRef.current,
    ];

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
            <div ref={mohjitoRef} className="first-project-wrapper">
               <Link href="https://echo-v-2.vercel.app/" target="_blank" >
              <img
                src="/images/my_work/echo2.png"
                alt="echo.proj"
                className="rounded-2xl"
              />
              </Link>
              <div className="text-content">
                <h2>ECHO – On-Demand Made Simple</h2>
                <p className="text-white-50 md:text-xl">
                  A fast, user-friendly social media app built with React,
                  TypeScript & TailwindCSS.
                </p>
              </div>
              <video
                src="/images/mohjito.mp4"
                autoPlay
                loop
                preload="auto"
                playsInline
                className="rounded-2xl"
              />
              <div className="text-content">
                <h2>Mohjito-landing Page</h2>
                <p className="text-white-50 md:text-xl">
                  A sleek, responsive landing page for a cocktail recipe built with React &
                  GSAP, showcasing smooth animations and a modern design.
                </p>
              </div>
            </div>

            <div
              ref={goCartRef}
              className="project-list-wrapper overflow-hidden">
              <div className="project">
                <div className="image-wrapper bg-[#e2dfdd] shadow-xl">
                  <Link href="https://e-commerce-gocart.vercel.app/" target="_blank" >
                  <img src="/images/my_work/gocart2.png" alt="GOcart App" />
                  </Link>
                </div>
                <h2>GoCart – E-commerce App (Next.js)</h2>
                <p>
                  E-commerce app built with Next.js, featuring dynamic product
                  pages, a shopping cart, and seamless user experience for online shopping.
                </p>
              </div>
              <div ref={ibadaaRef} className="project">
                <div className="image-wrapper bg-[#FFEFDB]">
                  <Link href="https://ibadaatracker.vercel.app/" target="_blank" >
                  <img src="/images/my_work/ibadaa2.png" alt="Ibadaa App" />
                  </Link>
                </div>
                <h2>Ibadaa – Ramadan Tracker Startup App</h2>{" "}
                <p>
                  A Ramadan tracker app built with React, featuring a clean design
                  and intuitive interface to help users track their fasting and prayers
                </p>
              </div>
              <div ref={gamesRef} className="project">
                <video
                src="/images/games_reviews.mp4"
                autoPlay
                loop
                preload="auto"
                playsInline
                className="rounded-2xl"
              />
              <div className="text-content">
                <h2>video games JavaScript app</h2>
                <p className="text-white-50 md:text-xl">
                  A video games review app built with JavaScript, providing users
                  with a platform to discover and review their favorite games.
                </p>
              </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCaseSection;
