import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet"
import { RegisterProps } from "@/types"

export default function Register({ open, onOpenChange }: RegisterProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full bg-white p-6 sm:w-[400px]">
        <div className="space-y-6">
          <SheetTitle className="text-center text-2xl font-bold text-black">CREA UN COMPTE</SheetTitle>
          <SheetDescription className="text-center text-gray-600">
            Introdueix les teves dades per registrar-t'hi
          </SheetDescription>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black">
                Adreça electrònica
              </Label>
              <Input id="email" type="email" placeholder="exemple@correu.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-black">
                Contrasenya
              </Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-black">
                Repeteix la contrasenya
              </Label>
              <Input id="confirm-password" type="password" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="keep-logged" />
                <label htmlFor="keep-logged" className="text-sm text-gray-700">
                  Mantingues la sessió oberta
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="receive-news" />
                <label htmlFor="receive-news" className="text-sm text-gray-700">
                  Vull rebre novetats i comunicacions comercials personalitzades de Lefties a través del correu
                  electrònic i altres mitjans
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="privacy-policy" />
                <label htmlFor="privacy-policy" className="text-sm text-gray-700">
                  He pogut llegir i entenc la informació sobre l'ús de les meves dades personals explicada en la
                  Política de Privadesa
                </label>
              </div>
            </div>
            <Button className="w-full">Registra't</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
