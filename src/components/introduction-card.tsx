import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import image from '../../public/pictureOfMe.jpeg'

export default function IntroductionCard() {
  return (
    <Card className="overflow-hidden p-4 sm:p-6 mb-8 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
        <div className="relative h-[180px] w-[150px] flex-shrink-0">
          <Image
            alt="a picture of me standing in the Hudson River near the bay in New York City."
            src={image}
            priority
            quality={100}
            fill
            sizes="(max-width: 640px) 150px, 150px"
            className="object-cover rounded-md"
            style={{
              objectPosition: 'center'
            }}
          />
        </div>
        <CardContent className="p-0 sm:p-2">
          <h3 className="font-semibold text-xl sm:text-2xl mb-2 sm:mb-4 text-center sm:text-left">Hi, my name is Volodymyr Pavlenko 👋</h3>
          <p className="text-base sm:text-lg mb-2 sm:mb-4 text-center sm:text-left">I&apos;m based in New Jersey and work as a full-stack engineer.</p>
          <p className="text-base sm:text-lg text-center sm:text-left">Welcome to my place!</p>
        </CardContent>
      </div>
    </Card>
  )
}

