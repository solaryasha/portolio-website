import { Loader2 } from "lucide-react"

export default function ProjectsSection() {
  return (
    <div>
      <h3 className="text-xl uppercase text-teal-700 tracking-wide font-bold mb-8">Projects</h3>
        <div className="flex gap-4">
          <Loader2  className="animate-spin text-primary" />
          <span>Currently, I'm working on the Learning Web App. Stay tuned!</span>
        </div>
    </div>
  )
}