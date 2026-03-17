"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import SectionWrapper from "./components/SectionWrapper";
import EditorialImage from "./components/EditorialImage";
import Overline from "./components/Overline";
import Button from "./components/Button";
import VideoShowcase from "./components/VideoShowcase";
import CollectionCarousel from "./components/CollectionCarousel";
import Footer from "./components/Footer";

/* ==============================
   ANIMATION VARIANTS
   ============================== */
const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* ==============================
   DATA
   ============================== */


const stats = [
  { number: "30+", label: "Years of Experience" },
  { number: "5+", label: "Countries Served" },
  { number: "ISO", label: "9001 & 14001 Certified" },
  { number: "DE", label: "German Engineering" },
];

/* ==============================
   PAGE
   ============================== */
export default function Home() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative lg:min-h-screen flex items-center lg:items-center bg-alabaster overflow-hidden">
        <div className="mx-auto max-w-[1600px] w-full px-6 md:px-16 pb-16 md:pb-24 pt-28 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:items-start">
            {/* Left — Copy */}
            <div className="lg:col-span-5 lg:col-start-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <Overline withLine className="mb-6 justify-center lg:justify-start w-full">
                  Bathroom · Sanitary · Construction
                </Overline>

                <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
                  Engineered{" "}
                  <em className="text-gold not-italic">Precision</em>,<br />
                  Designed{" "}
                  <em className="text-gold not-italic italic">Beauty</em>
                </h1>

                <p className="font-body text-base md:text-lg text-warm-gray leading-relaxed max-w-md mb-10 mx-auto lg:mx-0">
                  Premium faucets, fixtures, and sanitary products — developed
                  in Germany & Denmark, trusted across Southeast Asia.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                  <a href="#collections" className="w-full sm:w-auto">
                    <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                      Explore Collections
                    </Button>
                  </a>
                  <a href="#contact" className="w-full sm:w-auto">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                      Contact Us
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right — Hero Image */}
            <div className="hidden lg:block lg:col-span-6 lg:col-start-7 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <EditorialImage
                  src="/images/hero.png"
                  alt="BSC premium chrome faucet on marble countertop"
                  aspect="4/5"
                  priority  
                  className="shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                />

                {/* Vertical text label */}
                <span className="hidden lg:block vertical-text absolute -left-10 bottom-8 font-body text-[10px] uppercase tracking-[0.3em] text-warm-gray/50">
                  Editorial / Est. 2018
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO SHOWCASE ===== */}
      <VideoShowcase />

      {/* ===== ABOUT / BRAND STORY ===== */}
      <SectionWrapper id="about" className="border-t border-charcoal/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left — Editorial Copy */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Overline withLine className="mb-6">
                Our Story
              </Overline>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-10"
            >
              The <em className="text-gold italic">Philosophy</em>
              <br />
              Behind Every Fixture
            </motion.h2>

            <motion.div variants={fadeUp} className="max-w-xl">
              <p className="font-body text-base md:text-lg text-warm-gray leading-relaxed drop-cap mb-6">
                Founded by Bastian Schaefer, BSC brings over three decades of
                building-industry expertise to every product we create. Our
                conviction is simple: premium sanitary products should unite
                uncompromising German engineering with refined Scandinavian
                design sensibility — and be accessible across the markets we
                serve.
              </p>
              <p className="font-body text-base md:text-lg text-warm-gray leading-relaxed mb-6">
                Every fixture is developed and engineered between our studios in
                Germany and Denmark, then produced under rigorous certification
                standards. The result: products that perform flawlessly, endure
                gracefully, and elevate any space they inhabit.
              </p>
              <p className="font-body text-base md:text-lg text-warm-gray leading-relaxed">
                From residential bathrooms in Manila to commercial installations
                in Singapore, BSC products have earned the trust of architects,
                developers, and homeowners across Southeast Asia, Korea,
                Malaysia, and Brunei.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            className="lg:col-span-4 lg:col-start-9"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <EditorialImage
              src="/images/portrait.png"
              alt="Precision engineering of BSC faucet components"
              aspect="3/4"
              className="shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            />
            <p className="font-body text-[10px] uppercase tracking-[0.25em] text-warm-gray/60 mt-4">
              German-Danish Engineering
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ===== FEATURED COLLECTIONS (Dark Section) ===== */}
      <SectionWrapper id="collections" dark>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <Overline withLine dark className="mb-6">
              Product Lines
            </Overline>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tight">
              The <em className="text-gold italic">Collections</em>
            </h2>
            <p className="font-body text-sm md:text-base text-alabaster/50 max-w-sm leading-relaxed">
              Each collection is a distinct expression of our design philosophy
              — unified by engineering precision, differentiated by purpose.
            </p>
          </motion.div>
        </motion.div>

        <CollectionCarousel />
      </SectionWrapper>

      {/* ===== FLAGSHIP PRODUCT — SHOWER ===== */}
      {/* ===== FLAGSHIP PRODUCT — SHOWER ===== */}
      <section className="border-t border-charcoal/10">
        {/* MOBILE: image with text overlay */}
        <div className="lg:hidden relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
          >
            <EditorialImage
              src="/images/shower.png"
              alt="BSC premium rain shower system"
              aspect="3/4"
              className="w-full"
            />
          </motion.div>

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Text content overlaid */}
          <motion.div
            className="absolute inset-x-0 bottom-0 p-6 pb-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Overline withLine dark className="mb-4">
                Flagship
              </Overline>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl sm:text-4xl leading-[0.95] tracking-tight text-alabaster mb-4"
            >
              The <em className="text-gold italic">Shower</em>
              <br />
              Experience
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-sm text-alabaster/70 leading-relaxed mb-6 max-w-sm"
            >
              Thermostatic precision controls, overhead rain systems, safe
              shower seating, and multi-functional hand showers — engineered
              for the perfect confluence of comfort and safety.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a href="#contact">
                <Button variant="secondary" className="border-alabaster/40 text-alabaster hover:bg-alabaster hover:text-charcoal">
                  Inquire Now
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* DESKTOP: side-by-side layout */}
        <div className="hidden lg:block">
          <div className="mx-auto max-w-[1600px] px-16 py-24">
            <div className="grid grid-cols-12 gap-16 items-center">
              {/* Image */}
              <motion.div
                className="col-span-6 col-start-1 relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <EditorialImage
                  src="/images/shower.png"
                  alt="BSC premium rain shower system"
                  aspect="5/6"
                  className="shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                />
                <span className="vertical-text absolute -right-10 top-8 font-body text-[10px] uppercase tracking-[0.3em] text-warm-gray/40">
                  Flagship / Shower Series
                </span>
              </motion.div>

              {/* Copy */}
              <motion.div
                className="col-span-5 col-start-8"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
              >
                <motion.div variants={fadeUp}>
                  <Overline withLine className="mb-6">
                    Flagship
                  </Overline>
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="font-heading text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-8"
                >
                  The <em className="text-gold italic">Shower</em>
                  <br />
                  Experience
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="font-body text-lg text-warm-gray leading-relaxed mb-8 max-w-md"
                >
                  Our Shower Products Collection redefines the daily ritual.
                  Thermostatic precision controls, overhead rain systems, safe
                  shower seating, and multi-functional hand showers — every element
                  engineered for the perfect confluence of comfort and safety.
                </motion.p>

                <motion.ul variants={fadeUp} className="space-y-4 mb-10">
                  {[
                    "Thermostatic temperature control",
                    "Overhead rain shower systems",
                    "Safe shower seats for accessibility",
                    "Multi-functional hand showers",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="block w-1.5 h-1.5 mt-2 bg-gold shrink-0" />
                      <span className="font-body text-sm text-charcoal/80 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </motion.ul>

                <motion.div variants={fadeUp}>
                  <a href="#contact">
                    <Button variant="primary" className="group">
                      Inquire Now
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST / PROOF (Stats) ===== */}
      <section className="bg-alabaster border-t border-b border-charcoal/10 px-6 md:px-16 py-16 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className={`text-center ${
                  i < stats.length - 1
                    ? "lg:border-r lg:border-charcoal/10"
                    : ""
                }`}
              >
                <span className="block font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-tight leading-none mb-3">
                  {stat.number}
                </span>
                <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.25em] text-warm-gray">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <SectionWrapper id="contact" dark>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — Headline */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Overline withLine dark className="mb-6">
                Get in Touch
              </Overline>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tight mb-8"
            >
              Begin the
              <br />
              <em className="text-gold italic">Conversation</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-body text-base text-alabaster/50 leading-relaxed max-w-sm mb-8"
            >
              Whether you{"\u2019"}re an architect specifying fixtures, a
              developer planning a project, or a homeowner seeking the finest —
              we{"\u2019"}d welcome the opportunity to discuss your requirements.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="space-y-3 text-sm font-body"
            >
              <p className="text-alabaster/40">
                <span className="text-alabaster/60 uppercase tracking-[0.15em] text-[10px]">
                  Email
                </span>
                <br />
                <a
                  href="mailto:info@bsundc.com"
                  className="text-alabaster/70 hover:text-gold transition-colors duration-500"
                >
                  info@bsundc.com
                </a>
              </p>
              <p className="text-alabaster/40">
                <span className="text-alabaster/60 uppercase tracking-[0.15em] text-[10px]">
                  Phone
                </span>
                <br />
                <span className="text-alabaster/70">+86 158 21 48 42 72</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <form
              className="space-y-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-transparent border-b border-alabaster/20 focus:border-gold text-alabaster placeholder:font-heading placeholder:italic placeholder:text-alabaster/30 py-3 px-0 text-sm font-body outline-none transition-colors duration-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-alabaster/20 focus:border-gold text-alabaster placeholder:font-heading placeholder:italic placeholder:text-alabaster/30 py-3 px-0 text-sm font-body outline-none transition-colors duration-500"
                  />
                </div>
              </div>

              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-transparent border-b border-alabaster/20 focus:border-gold text-alabaster placeholder:font-heading placeholder:italic placeholder:text-alabaster/30 py-3 px-0 text-sm font-body outline-none transition-colors duration-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-alabaster/20 focus:border-gold text-alabaster placeholder:font-heading placeholder:italic placeholder:text-alabaster/30 py-3 px-0 text-sm font-body outline-none transition-colors duration-500"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-transparent border-b border-alabaster/20 focus:border-gold text-alabaster placeholder:font-heading placeholder:italic placeholder:text-alabaster/30 py-3 px-0 text-sm font-body outline-none transition-colors duration-500 resize-none"
              />

              <Button variant="secondary" size="lg" className="border-alabaster/30 text-alabaster hover:bg-alabaster hover:text-charcoal w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
