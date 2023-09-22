import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Timeline from '@/components/Timeline'

export const metadata: Metadata = {
  title: 'b0nz - Home',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="home content">
        {/* <div>
          <p className="intro">
            Ellianto a.k.a{" "}
            <a href="https://github.com/b0nz" target="_blank">
              <strong>b0nz</strong>
            </a>
            , Software Engineer with a passion for frontend development. Proven
            ability to quickly learn new technologies and adapt to new
            challenges. Expertise in React, but also familiar with Vue and
            Angular. Experience with building and maintaining scalable web
            applications. Seeking a challenging role where I can use my skills
            to make a positive impact on a team.
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/ellianto" target="_blank">
              <Icon pack="fa" name="linkedin-square" size={18} />
            </a>
            <a href="https://github.com/b0nz" target="_blank">
              <Icon pack="fa" name="github" size={18} />
            </a>
            <a href="mailto:hi@b0nz.xyz" target="_blank">
              <Icon pack="fa" name="envelope" size={18} />
            </a>
          </div>
        </div> */}
        <Timeline />
      </main>
    </>
  );
}
