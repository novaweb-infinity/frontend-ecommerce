import { GetServerSideProps } from "next"
import { Suspense } from "react"

import ProductList from "./ProductList"
import { ProductListSkeleton } from "./ProductSkeleton"

interface ProductsProps {
  searchParams: {
    page?: string
  }
}

export default function Products({ searchParams }: ProductsProps) {
  const currentPage = Number(searchParams.page) || 1
  const pageSize = 12

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold">Todos los productos</h2>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList currentPage={currentPage} pageSize={pageSize} />
      </Suspense>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const searchParams = {
    page: query.page as string,
  }

  return {
    props: {
      searchParams,
    },
  }
}
