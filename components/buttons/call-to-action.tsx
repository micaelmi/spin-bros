import Link from "next/link";
import { Button } from "../ui/button";

export default function CTAButton({
  label,
  subtitle = "",
}: {
  label: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <Button className="bg-linear-to-r from-[#2CA500] to-[#066B9A] p-6 border border-[#FFFA95] rounded-4xl font-bold text-xl">
        <Link href="https://spinbros.youcanbook.me/" target="_blank">
          {label}
        </Link>
      </Button>
      <p className="text-[#E9FE02]">{subtitle}</p>
    </div>
  );
}
