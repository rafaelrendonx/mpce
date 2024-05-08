import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"


export const ResponsiveMenu = () => {
  return (
    <>
      <Sheet>

        <SheetTrigger asChild>
          <Button size="icon" className="bg-transparent hover:bg-transparent">
            <MenuIcon className="h-10 w-10" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="h-full w-full">

          <SheetHeader>
            <SheetTitle className="text-2xl font-bold">MPCE</SheetTitle>
          </SheetHeader>

          <div className="grid gap-2 py-6 pt-10">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/servicios">
              Servicios
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/portafolio">
              Portafolio
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/contacto">
              Contacto
            </Link>
          </div>

        </SheetContent>

      </Sheet>
    </>

  )
}

export default ResponsiveMenu

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


