import React from 'react'
import Navbar from '../layouts/Navbar'
import PageContainer from '../layouts/PageContainer'
import UserTable from '../features/user'
import ThemeButton from '../components/button/ThemeButton'
import ThemeContextProvider, { EnumTheme } from '../context/ThemeContext'
import styles from '../styles/pages.module.scss'

const UserPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <ThemeContextProvider defaultTheme={EnumTheme.LIGHT}>
          <div className={styles.items}>
            <h1>User Page</h1>
            <ThemeButton />
          </div>
          <UserTable />
        </ThemeContextProvider>
      </PageContainer>
    </>
  )
}

export default UserPage
