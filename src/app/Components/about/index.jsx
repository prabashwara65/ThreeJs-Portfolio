import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            About me
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
          I&apos;m a full stack developer starting out, and a wide range of mysterious tools and languages light my way. JavaScript is a powerful force that molds my creations and resides at the core of my enchantments. I work with frameworks like Next.js and React.js with flexibility, creating slick websites and portals that link people and realms throughout the digital world.
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1.5+ <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=prabashwara65&theme=gruvbox&hide_border=true&include_all_commits=false&count_private=false&layout=compact&bg_color=00000000"
            alt="OSLA"
            loading="lazy"
            //"https://github-contributor-stats.vercel.app/api?username=prabashwara65&limit=5&theme=gruvbox&hide_border=true&combine_all_yearly_contributions=true"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-contributor-stats.vercel.app/api?username=prabashwara65&limit=5&theme=gruvbox&hide_border=true&combine_all_yearly_contributions=true&bg_color=00000000"
            alt="OSLA"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full !p-0">
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="OSLA"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com/?user=prabashwara65&theme=gruvbox&hide_border=true&background=00000000&stroke=00000000&fire=DD2727&ring=DD2727"
            alt="OSLA"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full "
          > 
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api?username=prabashwara65&theme=gruvbox&hide_border=true&include_all_commits=false&count_private=false&bg_color=00000000"
              alt="OSLA"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
