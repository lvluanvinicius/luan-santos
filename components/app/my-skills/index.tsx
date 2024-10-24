import { luanConfig } from "@/config/luan";

export function MySkills() {
  return (
    <div className="mt-4 w-full py-6 text-white-secondary">
      <div>
        <h2 className="text-2xl font-bold">Minhas Habilidades</h2>
        <p>{luanConfig.my_skills.description}</p>
      </div>

      <ul className="ml-4 list-disc">
        {luanConfig.my_skills.content.map((skill, index) => {
          return (
            <li key={index}>
              <div className="mb-2 mt-4">{skill.name}</div>
              <div
                className="flex flex-col gap-2 text-justify"
                dangerouslySetInnerHTML={{ __html: skill.content.join("") }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
