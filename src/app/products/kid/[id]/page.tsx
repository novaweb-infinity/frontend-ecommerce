import ProductPage from "@/components/Products/ProductPage"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function KidProductPage({ params }: ProductPageProps) {
  const { id } = params

  return (
    <>
      <div className="flex h-96 w-full flex-col space-y-8 p-8">
        <h1 className="mt-24 text-4xl font-bold">Página de Producto para Niños</h1>
        <p className="mt-2 text-2xl">
          ID del Producto: <strong>{id}</strong>
        </p>
      </div>
      <ProductPage />
    </>
  )
}
