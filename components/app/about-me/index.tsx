import { luanConfig } from "@/config/luan";

export function AboutMe() {
  return (
    <div className="w-full text-white-secondary">
      <div className="w-full py-2">
        <h2 className="text-2xl font-bold">Sobre Mim</h2>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: luanConfig.abount_me.join("") }}
        className="text-md flex flex-col gap-4 text-justify"
      />
    </div>
  );
}
