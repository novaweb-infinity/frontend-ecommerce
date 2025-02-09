import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm rounded-2xl p-6">
        <DialogHeader className="my-2 space-y-6">
          <DialogTitle className="text-xl font-bold">Inicio de sesión requerido</DialogTitle>
          <DialogDescription className="text-gray-500">
            Para añadir productos al carrito, necesitas iniciar sesión en tu cuenta.
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild></DialogClose>
      </DialogContent>
    </Dialog>
  )
}
