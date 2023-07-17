import Image from "next/image";
import Link from "next/link";
import ButtonSmall from "@ui/button-small";

export default function WWDCard({ post }) {
  return (
    <>
      <div className="bg-white rounded-lg border border-gray-300 shadow-md hover:shadow-lg">
        <Image
          src={post.frontmatter.img}
          alt={post.frontmatter.title}
          className="rounded-t-lg"
          width={640}
          height={480}
        />

        <div className="p-4">
          <h4 className="text-xl font-bold  mt-1">
            {post.frontmatter.title}
          </h4>
          <p className="mt-1 text-left text-slate-800 md:line-clamp-4">
            {post.frontmatter.description}
          </p>

          {/* <div className="px-3 py-2 mt-5 bg-slate-200">
            <div className="flex my-2">
              <h5 className="text-fgprimary"> Funding Goal: </h5> 
              <h6 className="text-fgsecondary ml-2"> {post.frontmatter.fundingGoal} </h6>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-5">
              <div
                className="bg-fgprimary h-5 rounded-full text-white text-center"
                style={{ width: `${post.frontmatter.progress}` }}
              >
                <p className="text-white"> {post.frontmatter.progress} </p>
              </div>
            </div>
          </div> */}
          {/* <Link href={`/what-we-do/${post.slug}`} className="block mt-4">
            <ButtonSmall>Read More</ButtonSmall>
          </Link> */}
        </div>
      </div>
    </>
  );
}
