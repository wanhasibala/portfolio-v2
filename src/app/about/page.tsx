import React from "react";
import Footer from "../(home)/Footer";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="pt-40 px-6 md:px-12 lg:px20 flex lg:flex-row flex-col gap-20 justify-center items-center">
        <div className="flex flex-col w-full gap-5">
          <h1 className="text-title font-semibold text-zinc-900 dark:text-zinc-100">
            About{" "}
          </h1>
          <h2 className="text-heading-3 font-medium text-zinc-400 dark:text-zinc-400">
            Passionate and dedicated to create a great digital product
          </h2>
          <p className="text-zinc-700 dark:text-zinc-200">
            I am a passionate and dedicated software developer with a strong
            background in creating innovative and efficient software solutions.
            With a keen eye for detail and a commitment to excellence, I
            specialize in developing web and mobile applications that deliver
            seamless user experiences and meet business objectives.
          </p>
          <h3 className="font-bold text-2xl text-zinc-500 dark:text-zinc-500">Professional Journey</h3>{" "}
          <p>
            My journey into software development began with a curiosity for
            technology and a desire to solve complex problems. Over the years, I
            have honed my skills through various roles and projects, gaining
            expertise in a wide range of programming languages, frameworks, and
            tools. I have experience working in diverse industries, including
            e-commerce, finance, and healthcare, which has equipped me with the
            ability to adapt and thrive in different environments.
          </p>
          <h3 className="font-bold text-2xl text-zinc-500 dark:text-zinc-500">Education and Skills</h3>
          <p>
            {" "}
            I hold a degree in Computer Science, where I built a strong
            foundation in algorithms, data structures, and software engineering
            principles. My technical skill set includes proficiency in languages
            such as JavaScript, Python, and Java, as well as experience with
            frameworks like React, Node.js, and Django. I am also well-versed in
            database management, version control, and agile development
            methodologies.{" "}
          </p>
          <h3 className="font-bold text-2xl text-zinc-500 dark:text-zinc-500">Personal Values and Interest</h3>
          <p>
            {" "}
            and Interests Beyond my professional life, I am an avid learner who
            constantly seeks to stay updated with the latest trends and
            advancements in technology. I believe in the power of collaboration
            and open-source contributions, and I actively participate in tech
            communities and forums. In my free time, I enjoy exploring new
            programming paradigms, experimenting with side projects, and
            contributing to community-driven initiatives.
          </p>
        </div>
        <Image
          src="/jadi.webp"
          alt="profile photo"
          width={508}
          className="lg:w-[50vw] w-full h-auto object-cover rounded-2xl"
          height={677}
        />
      </div>
      <div className="h-[40vh]" />
      <Footer />
    </>
  );
};

export default page;
