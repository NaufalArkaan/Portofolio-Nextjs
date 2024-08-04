import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{ backgroundImage: "url(/screen.bg.jpg)" }}>
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
          <h1 className='text-[50px] text-white font-semibold'>
            About <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'> Me </span>
          </h1>
          <p className='text-gray-200 hidden md:block text-[25px]'>
          Hello!, I am Naufal Arkaan, I am an Informatics student at Muhammadiyah University of Malang. 
          <br />
          I was born in Denpasar Bali on September 25 2006. My hobbies are programming and swimming.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] border border-white"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative px-5 py-3 text-lg text-white max-w-[200px] bg-trasparent border border-white "
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>

        <div className='relative'>
          <Image src="/naufal.JPG" alt="cliff" width={300} height={300} className="rounded-full absolute top-1/2 right-24 transform -translate-y-1/2 h-34" />
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] border border-white"
        >
          Learn more
        </Link>

        <Link
          href="/projects"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      <div className="pr-10 px-20">
        <Image src="/naufal.JPG" alt="cliff" width={370} height={370} className="rounded-full absolute top-24 right-24 pr-10"/>
      </div>

      <div>
        <Image
          src="/stars.png"
          alt="stars"
          height={300}
          width={300}
          className="absolute top-0 left-0 z-[10]"
        />
      </div>
    </main>
  );
}
