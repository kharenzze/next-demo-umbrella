import Image from "next/image"
import { Button } from '@/components/ui/button'
import { SendIcon } from "lucide-react"
import FormDemo from "@/app/form"


export default function Home() {
  return (
    <div className="grid grid-cols-2 ">
      <div className="flex min-h-screen items-center justify-center">
        <FormDemo>
          
        </FormDemo>
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <Button>Start</Button>
      </div>
    </div>
  );
}

