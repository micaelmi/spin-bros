import CTAButton from "@/components/buttons/call-to-action";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex flex-col items-center bg-[#003253] px-2 border-[#32AA29] border-t-4 min-h-screen">
      <header className="flex justify-around items-center py-11 w-full">
        <Image
          alt="logo spin bros"
          src={"/logo.svg"}
          width={111}
          height={94}
          loading="eager"
        />
        <Button className="bg-linear-to-r from-[#00969B] to-[#5D7C00] p-4 border border-[#FFFA95] rounded-4xl font-bold text-xl">
          Book now
        </Button>
      </header>
      <section className="space-y-3 px-4">
        <h1 className="bg-clip-text bg-linear-to-r from-[#8AD0FF] to-[#F3FF98] font-bold text-transparent text-5xl">
          Your Game <br /> Elevated!
        </h1>
        <h3 className="text-white text-3xl">
          <strong>Defence</strong> with Lucas, <br /> <strong>Attack</strong>{" "}
          with Micael
        </h3>
        <h4 className="text-[#D4F1B7]">Table Tennis Coaching in Melbourne</h4>
      </section>

      <section className="space-y-3 pt-10 max-w-[320px]">
        <div className="space-y-3 px-4">
          <h2 className="bg-clip-text bg-linear-to-r from-[#8AD0FF] to-[#F3FF98] font-bold text-transparent text-4xl">
            Students' Success Stories
          </h2>
          <h4 className="text-[#D4F1B7]">What Our Students Say</h4>
        </div>
        <Card className="bg-transparent bg-linear-to-r from-[#00608A] to-[#026FB945] mb-10 px-4 py-3 border border-[#5EBFFF] rounded-3xl">
          <p className="text-white text-lg">
            “I strongly recommend Micael as a table tennis coach. He has an
            exceptional ability to analyze body movements with precision and
            explain them clearly on the spot. His logical, theory-based approach
            is valuable for players at all levels... — Masayuki, Melbourne”
          </p>
        </Card>

        <CTAButton
          label="Book Your $25 Trial Lesson"
          subtitle="Limited spots this week!"
        />
      </section>
      <section className="space-y-3 pt-10 max-w-[320px]">
        <h2 className="bg-clip-text bg-linear-to-r from-[#8AD0FF] to-[#F3FF98] font-bold text-transparent text-4xl">
          Meet the Bros
        </h2>
        <Image
          alt="Lucas"
          src={"/lucas-profile-1.png"}
          width={340}
          height={322}
          loading="lazy"
        />
        <Card className="bg-transparent bg-linear-to-r from-[#00608A] to-[#026FB945] my-10 px-4 py-8 border border-[#5EBFFF] rounded-3xl">
          <h2 className="bg-clip-text bg-linear-to-r from-[#8AD0FF] to-[#F3FF98] font-bold text-transparent text-3xl">
            Why train with us?
          </h2>
          <div className="px-4 py-2">
            <h3 className="font-bold text-2xl">Fun & Motivating</h3>
            <p className="text-lg">
              Energetic sessions that <br />
              keep you coming back.
            </p>
          </div>

          <div className="px-4 py-2">
            <h3 className="font-bold text-2xl">Flexible Locations</h3>
            <p className="text-lg">
              Parks, your place or community centres in Melbourne.
            </p>
          </div>

          <div className="px-4 py-2">
            <h3 className="font-bold text-2xl">Proven Results</h3>
            <p className="text-lg">
              Quick improvements in spin, footwork and strategy.
            </p>
          </div>
        </Card>
      </section>
      <section className="flex flex-col items-center space-y-10 px-8">
        <div>
          <h2 className="bg-clip-text bg-linear-to-r from-[#8AD0FF] to-[#F3FF98] font-bold text-transparent text-4xl">
            Personalised <br />{" "}
            <span className="text-[#F0FFE7] text-2xl">
              Table Tennis Coaching
            </span>
          </h2>
          <h4 className="text-[#D4F1B6]">
            For All Levels <br /> From Beginners to Advanced Players
          </h4>
        </div>

        <CTAButton
          label="Book Your $25 Trial Lesson"
          subtitle="Limited spots this week!"
        />

        <Image
          alt="Money Back Guarantee"
          src={"/money-back.png"}
          width={251}
          height={248}
          loading="lazy"
        />

        <Card className="bg-transparent bg-linear-to-r from-[#00608A] to-[#026FB945] my-10 px-4 py-8 border border-[#5EBFFF] rounded-3xl">
          <h2 className="bg-clip-text bg-linear-to-r from-[#8AD0FF] to-[#F3FF98] font-bold text-transparent text-3xl">
            Where We Coach
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25216.765836161634!2d144.9425513481146!3d-37.81122665143123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642caf37771c5%3A0x834e664d24dced61!2sCBD%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1762569181573!5m2!1sen!2sau"
            className="border-0 rounded-3xl aspect-square"
            loading="lazy"
          ></iframe>
          <div className="px-4 py-2">
            <h3 className="font-bold text-2xl">Melbourne</h3>
            <p className="text-lg">
              Whether you're around the CBD, we've got you covered!
            </p>
          </div>
          <div className="px-4 py-2">
            <h3 className="font-bold text-2xl">We Come to You</h3>
            <p className="text-lg">
              Flexible coaching at your preferred location
            </p>
          </div>
          <div className="px-4 py-2">
            <h3 className="font-bold text-2xl">Public and Club Tables</h3>
            <p className="text-lg">
              Clubs and community spaces available near you
            </p>
          </div>
        </Card>
      </section>
      <section className="px-2 py-10 border-[#32AA29] border-y-3">
        <h2 className="bg-clip-text bg-linear-to-r from-[#8AD0FF] to-[#F3FF98] px-4 font-bold text-transparent text-3xl">
          Ready to Level UP?
        </h2>
        <div className="p-6">
          <h3 className="font-bold text-2xl">Book Your Trial</h3>
          <p className="text-xl">
            Start your table tennis journey with our $25 trial lesson.
            Experience our coaching style and see the difference!
          </p>
        </div>
        <CTAButton label="Book Your $25 Trial Lesson" />

        <div className="space-y-4 p-6">
          <h2 className="bg-clip-text bg-linear-to-r from-[#8AD0FF] to-[#F3FF98] font-bold text-transparent text-3xl">
            Get in Touch
          </h2>
          <p className="text-xl">
            Have questions? Want to discuss custom packages? We'd love to hear
            from you.
          </p>
          <div>
            <h3 className="flex items-center gap-2 font-bold text-2xl">
              <Mail /> Email Us
            </h3>
            <p className="text-lg">spinbros.melbourne@gmail.com</p>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center gap-12 pt-12 pb-24">
        <p>© 2025 Spin Bros. All rights reserved</p>
        <Image
          alt="logo spin bros"
          src={"/logo.svg"}
          width={111}
          height={94}
          loading="lazy"
        />
      </footer>
    </div>
  );
}
