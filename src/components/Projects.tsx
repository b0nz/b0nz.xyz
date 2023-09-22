'use client'

import { useState } from 'react'

export default function Projects() {
  const [projects] = useState([
    {
      "title": "Evomo - OEE",
      "image": "assets/images/oee.png",
      "tags": ["React", "Redux", "AntDesign", "StyledComponents", "ECharts", "ApexChart"]
    },
    {
      "title": "Evomo - EMS Web",
      "image": "assets/images/ems-web.png",
      "tags": ["React", "Redux", "Typescript", "AntDesign", "StyledComponents", "ECharts", "ApexChart", "TailwindCSS"]
    },
    {
      "title": "Evomo - EMS Mobile",
      "image": "assets/images/ems-mobile.png",
      "tags": ["React Native", "Redux", "Typescript", "StyledComponents"]
    },
    {
      "title": "Bitwyre - OTC",
      "image": "assets/images/otc.png",
      "tags": ["React", "Redux", "Typescript", "MaterialUI"]
    },
    {
      "title": "Bitwyre - Futures",
      "image": "assets/images/futures.png",
      "tags": ["React", "Redux", "Typescript", "MaterialUI"]
    },
    {
      "title": "Bitwyre - Options",
      "image": "assets/images/options.png",
      "tags": ["React", "Redux", "Typescript", "MaterialUI"]
    },
    {
      "title": "Bitwyre - Mobile",
      "image": "assets/images/bitwyre-mobile.png",
      "tags": ["React", "ReactNative", "Redux", "Typescript"]
    }
  ])

  return (
    <div className="flex flex-col gap-4">
      {projects.map(project => (
        <div className="border border-white rounded-md" key={project.title}>
            <div className={`w-full h-72 rounded-t-md bg-slate-800 bg-cover`} style={{ backgroundImage: `url(${project.image})` }} />
            <div className="p-4">
              <div className="text-lg font-bold">
                {project.title}
              </div>
              <div className="flex flex-wrap text-sm">
                {project.tags.map((tag, idx) => (
                  <span className="mr-2 mt-2 bg-slate-500 rounded-full py-1 px-2" key={idx}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
      ))}
    </div>
  )
}