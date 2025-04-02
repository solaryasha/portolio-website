import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import image from '../../public/pictureOfMe.jpeg'


export default function IntroductionCard() {
  return (
    <Card className="overflow-hidden p-4 flex-row w-2xl m-auto mb-8">
      <div className="relative aspect-video">
        <Image
          alt="a picture of me standing in the Hudson River near the bay in New York City."
          src={image}
          priority
          quality={100}
          width={150}
          height={220}
          className="object-cover transition-transform"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-4">Hi, my name is Volodymyr Pavlenko 👋</h3>
        <p className="text-l mb-4">I&apos;m based in New Jersey and work as a full-stack engineer.</p>
        <p className="text-l mb-4">Welcome to my place !</p>
      </CardContent>
    </Card>
  )
}

