import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Portfolio() {
  return (
    <main>
      <section>
        <Swiper spaceBetween={30} slidesPerView={1} loop={true} className="max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <SwiperSlide><Card key={index}>
              <SwiperSlide><CardContent>
                <h3>{project.title}</h3>
              </CardContent>
            </Card></SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}

const projects = [
  { title: "Project 1" },
  { title: "Project 2" },
  { title: "Project 3" }
];
