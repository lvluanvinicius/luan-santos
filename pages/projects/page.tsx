import { posts } from "@/config/posts";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export function Page() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4w-full">
        <h1 className="text-[2rem] font-bold">Projetos</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post) => {
          return (
            <Link
              href={`/projects/${post.slug}`}
              key={post.id}
              className={`col-span-4 flex flex-col gap-4 rounded-md border md:col-span-1 ${
                theme === "dark" && "border-purple !shadow-none"
              } ${theme === "light" && "shadow-md"}`}
            >
              <div className="h-[10rem] rounded-tl-md rounded-tr-md bg-400/50">
                {post.image_banner && (
                  <Image
                    src={`/uploads/${post.image_banner}`}
                    width={1000}
                    height={900}
                    alt={post.name}
                    className="h-full w-full rounded-tl-md rounded-tr-md"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4 p-4 text-small">
                <h3>{post.name}</h3>
                <span>Ver mais...</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
