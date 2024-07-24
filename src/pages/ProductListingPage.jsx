import FilterGroup from "../components/FilterGroup"
import Layout from "../components/Layout"
import Section from "../components/Section"
import ProductListing from "../components/product-listing/ProductListing"
import Filter from "../components/Filter"

const ProductListingPage = () => {
  return (
    <Layout>
      <div><h2>Ordenar por</h2>
      <Filter />
      </div>
        <FilterGroup />
        <Section >
        <ProductListing />  
      </Section>
    </Layout>
  )
}

export default ProductListingPage