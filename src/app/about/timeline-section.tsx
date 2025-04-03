import Image, { StaticImageData } from 'next/image';
import mateAcademyLogo from "../../../public/mateacademy_logo.jpeg";

interface TimelineItem {
  icon: StaticImageData;
  title: string;
  date: string;
  description: string[];
}

export default function TimelineSection() {
  const timelineItems: TimelineItem[] = [
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
      <h2 className="text-xl font-bold mb-8 uppercase text-teal-700 tracking-wide">
        Timeline
      </h2>
      <div className="relative border-l-2 border-teal-700 pl-8">
        {timelineItems.map((item, index) => (
          <div key={index} className="mb-8 flex items-start">
            <div className="absolute -left-4 w-8 h-8 flex items-center justify-center bg-teal-700 text-white font-bold rounded-full overflow-hidden">
                <Image 
                  src={item.icon} 
                  alt={`${item.title} icon`}
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
            </div>
            <div className='-mt-1'>
              <h3 className="text-lg font-bold text-teal-700">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
              <div className="text-[1.1rem] text-gray-700 mt-2">
                <ul className="ml-0 list-disc pl-5">
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