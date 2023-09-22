import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects';

export const metadata: Metadata = {
  title: 'b0nz - Projects',
}

export default function ProjectsPage() {
  
  return (
    <>
      <Navbar />
      <main className="content">
        <div>
          <h3 className="text-2xl font-bold mb-4"># Works</h3>
          <Projects />
        </div>
      </main>
    </>
  );
}
