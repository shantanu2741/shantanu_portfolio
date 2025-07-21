import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <Card>
        <CardContent>
          <p>This is a card component</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;
