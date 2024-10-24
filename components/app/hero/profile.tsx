import { luanConfig } from "@/config/luan";
import Image from "next/image";

export function Profile() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex w-[20rem] flex-col items-center justify-center gap-2">
        <Image
          src={luanConfig.profile.image}
          width={400}
          height={400}
          alt={""}
          className="border-purple w-[10rem] rounded-full border-[3px]"
        />
        <h1 className="text-2xl font-bold">{luanConfig.name}</h1>
      </div>
      <h3 className="">{luanConfig.subtitle}</h3>
      <p className="font-[500]">{luanConfig.description}</p>
    </div>
  );
}
