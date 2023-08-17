import React from 'react'
import Navbar from '../layouts/Navbar'
import PageContainer from '../layouts/PageContainer'
import ProductTable from '../features/product'
import ThemeButton from '../components/button/ThemeButton'
import ThemeContextProvider, { EnumTheme } from '../context/ThemeContext'
import styles from '../styles/pages.module.scss'

const ProductPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <ThemeContextProvider defaultTheme={EnumTheme.LIGHT}>
          <div className={styles.items}>
            <h1>Product Page</h1>
            <ThemeButton />
          </div>
          <ProductTable />
        </ThemeContextProvider>
      </PageContainer>
    </>
  )
}

export default ProductPage
