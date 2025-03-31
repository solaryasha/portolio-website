import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image";
import image from '../../public/pictureOfMe.jpeg'


export default function IntroductionCard() {
  return (
    <Card className="overflow-hidden p-4 flex-row">
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
        <h3 className="font-semibold text-xl mb-2">Hi, my name is Volodymyr Pavlenko 👋</h3>
        {/* <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div> */}
      </CardContent>
      {/* <CardFooter className="p-4 pt-0">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
      </CardFooter> */}
    </Card>
  )
}

