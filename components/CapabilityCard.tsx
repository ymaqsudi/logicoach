import Image from "next/image";

type CapabilityCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

export default function CapabilityCard({
  title,
  description,
  imageSrc,
}: CapabilityCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <div className="mb-6 flex h-40 items-center justify-center">
        <Image
          src={imageSrc}
          alt=""
          width={240}
          height={160}
          className="object-contain"
        />
      </div>

      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>

      <p className="mt-4 leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
