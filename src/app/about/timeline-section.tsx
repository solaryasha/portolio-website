import Image, { StaticImageData } from 'next/image';
import mateAcademyLogo from "@/public/mateacademy_logo.jpeg";
import ancestryLogo from "@/public/ancestrycom_logo.jpeg";

interface TimelineItem {
  icon: StaticImageData;
  title: string;
  date: string;
  description: string[];
}

export default function TimelineSection() {
  const timelineItems: TimelineItem[] = [
    {
      icon: ancestryLogo,
      title: "Fullstack Engineer (contract)",
      date: "Aug 2023 - Present",
      description: [
        "Working on a large-scale project with a focus on performance and scalability.",
        "Implemented a new, user-friendly search form and results page UI, which 70% of the test user group preferred over the old page.",
        "Integrated a research assistant bot menu with an AI API, reducing user query time and increasing engagement by 10%",
      ]
    },
    {
      icon: mateAcademyLogo,
      title: "Fullstack JavaScript Developer/Mentor",
      date: "Aug 2020 - Jul 2023",
      description: [
        "Worked with hybrid form: 1 week as a full stack engineer/ 1 week as a coach of the frontend track",
        "Mentored around 200 students in the full-stack JavaScript program, providing guidance and support throughout their learning journey.",
        "Designed and implemented a full-text search using Elasticsearch, enhancing the search functionality of the platform.",
        "Established a frontend testing infrastructure with Cypress, improving client code test coverage to 90%.",
      ]
    },
  ];

  return (
    <div className="relative">
      <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 uppercase text-teal-700 tracking-wide">
        Timeline
      </h2>
      <div className="relative border-l-2 border-gray-300 pl-4 sm:pl-8 ml-2 sm:mx-4">
        {timelineItems.map((item, index) => (
          <div key={index} className="mb-6 sm:mb-8 flex items-start">
            <div className="absolute -left-3 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-teal-700 text-white font-bold rounded-full overflow-hidden border border-gray-300">
              <Image
                src={item.icon}
                alt={`${item.title} icon`}
                width={48}
                height={48}
                quality={100}
                priority
                className="object-cover w-full h-full"
              />
            </div>
            <div className='-mt-1'>
              <h3 className="text-base sm:text-lg font-bold text-teal-700">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{item.date}</p>
              <div className="text-sm sm:text-[1.1rem] text-gray-700 mt-2">
                <ul className="ml-0 list-disc pl-4 sm:pl-5">
                  {item.description.map((descItem) => (
                    <li key={descItem} className="mb-1">
                      {descItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}