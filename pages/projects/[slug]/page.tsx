import { posts } from "@/config/posts";
import Image from "next/image";
import { useRouter } from "next/router";

export function Page() {
  const router = useRouter();

  const slug = router.query.slug && (router.query.slug as string);

  if (!slug) return null;

  const post = posts.find((post) => post.slug === slug);

  if (!post) return null;

  return (
    <div className="text-white-secondary">
      <div className="mb-4 w-full">
        <h1 className="text-[2rem] font-bold">{post.name}</h1>
      </div>

      {post.image_banner && (
        <div className="mb-4 w-full">
          <Image
            src={`/uploads/${post.image_banner}`}
            width={1000}
            height={900}
            alt={post.name}
            className="w-full"
          />
        </div>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: post.content.join("") }}
        className="flex flex-col gap-4 text-justify"
      />
    </div>
  );
}
