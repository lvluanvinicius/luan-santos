import { luanConfig } from "@/config/luan";
import { TagSkill } from "./tag-skill";

export function Skills() {
  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center gap-2 py-6">
      {luanConfig.skills.map((ctx) => {
        return (
          <div
            className="flex flex-wrap items-center justify-center gap-2"
            key={ctx.id}
          >
            {ctx.content.map((skill) => {
              return <TagSkill skill={skill.name} key={skill.id} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
