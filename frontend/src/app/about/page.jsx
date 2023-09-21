import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="pr-4 pb-2 ml-2 sm:ml-12 md:ml-24 z-[2] w-min border-b-2 font-bold text-3xl sm:text-4xl fixed top-4 sm:top-10 border-current">
        <h1 className="whitespace-nowrap">About me</h1>
      </div>
      <div className="flex">
        <div className="z-[2] pt-20 sm:pt-28 pl-2 sm:pl-12 md:pl-24 w-1/2 md:w-2/3 text-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            deserunt esse vero exercitationem, aspernatur odio porro
            perferendis? Unde animi porro quibusdam quod facilis? Eum quis animi
            iusto ipsum praesentium, sapiente, aut, tenetur recusandae similique
            dolorum maxime consequatur illo. Quasi quos, tempora similique, a
            ullam totam consequuntur vitae obcaecati nobis mollitia dolores
            aliquid itaque iste exercitationem dicta molestias repudiandae nisi
            minus saepe. Vel maxime dolorem assumenda nobis consequuntur eius
            ipsam debitis recusandae sapiente nesciunt, sunt at sed laborum
            itaque est numquam, impedit odit a neque? Atque eos tempore, autem
            qui in at sequi repellendus placeat neque necessitatibus magni
            nesciunt dolorem ratione!
          </p>
          <br />
          <p className="my-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            commodi reiciendis, et perferendis ipsum fuga! Sit consectetur velit
            veritatis voluptates. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Aperiam tempore dolores, error aut nobis molestiae
            et dolorum nihil doloribus soluta corrupti reiciendis voluptates
            iure, nisi neque, cumque sed maiores exercitationem.
          </p>
        </div>
        <div className="fixed sm:self-end bottom-0 right-0 w-screen h-screen z-[1] sm:w-1/2 md:w-1/3 ">
          <Image
            className="object-cover"
            src="/images/about-rm.png"
            fill
            alt="Profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
