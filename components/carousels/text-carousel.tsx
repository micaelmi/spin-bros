"use client";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function TextCarousel({ texts }: { texts: Array<string> }) {
  return (
    <Carousel
      className="w-full max-w-xs"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {texts.map((text, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent bg-linear-to-r from-[#00608A] to-[#026FB945] mb-10 px-4 py-3 border border-[#5EBFFF] rounded-3xl">
                <p className="text-white text-lg">“{text}”</p>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
