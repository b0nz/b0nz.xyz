'use client'
import { useState } from 'react'
import dayjs from 'dayjs'

export default function Timeline() {
  const [timelineData] = useState([
    {
      start_date: "2023-02-01",
      end_date: "2023-06-15",
      is_current: false,
      title: "Bitwyre - Frontend Engineer",
      href: "https://bitwyre.com/",
      description: `
        <ul class="list-disc ml-4">
          <li>Developed OTC Landing Page</li>
          <li>Developed Bitwyre\’s Derivative Platform</li>
          <li>Enhance Bitwyre\’s Trading Terminal</li>
          <li>Enhance Bitwyre\’s Instant</li>
          <li>Initialize unit test for the web platform</li>
        </ul>
      `,
    },
    {
      start_date: "2022-10-20",
      end_date: "2023-01-31",
      is_current: false,
      title: "Career Break",
      href: "",
      description:
        "Taking a break from work, focusing on my health. Learning new skills and spending time with my family.",
    },
    {
      start_date: "2022-07-26",
      end_date: "2022-10-20",
      is_current: false,
      title: "Sinbad - Software Engineer (Frontend)",
      href: "https://www.sinbad.co.id/",
      description: `<ul class="list-disc ml-4">
          <li>Developed Sinbad\'s Seller Center Feature to manage Return Order Items & Promos (Web, Angular).</li>
          <li>Enhancement Sinbad Red (Mobile, React Native).</li>
        </ul>`,
    },
    {
      start_date: "2018-10-01",
      end_date: "2022-07-25",
      is_current: false,
      title: "Evomo - Frontend Developer",
      href: "https://www.evomo.id/",
      description: `
        <ul class="list-disc ml-4">
          <li>Developed OEE (Overall Equipment Effectiveness) Monitoring System App to monitor Factory Machine, (Web - Reactjs).</li>
          <li>Developed EMS (Environment Monitoring System) App to monitor environment conditions such as Temperature, Humidity, Ammonia Gas, Water Level, etc.., (Mobile & Web - Nextjs, React Native)</li>
          <li>Maintaining Jenkins Server</li>
          <li>Collaborate with UI/UX teams to develop design systems</li>
        </ul>
      `,
    },
  ]);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4"># Timeline</h3>
      <ol className="relative border-l border-gray-700">
        {timelineData?.map((timeline) => (
          <li className="mb-10 ml-4" key={timeline.title}>
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-white">
              {`${dayjs(timeline?.start_date).format("MMM, YYYY")} - ${
                timeline.is_current
                  ? "Current"
                  : dayjs(timeline?.end_date).format("MMM, YYYY")
              }`}
            </time>
            <h3 className="text-lg font-semibold text-white">
              {timeline?.href ? (
                <a href={timeline?.href} target="_blank">
                  {timeline?.title}
                </a>
              ) : (
                timeline?.title
              )}
            </h3>
            <div
              className="mb-4 text-base font-normal text-gray-400"
              dangerouslySetInnerHTML={{ __html: timeline?.description }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
