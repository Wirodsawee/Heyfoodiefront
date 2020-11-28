import React, { useContext, useEffect, useMemo, useState } from "react"
import { storesContext } from "../context"
import Footer from "./Footer"
import Header from "./Navbar/Header"

export default function MainLayout(props) {
  const { component: Child } = props
  const { salesizeStore } = useContext(storesContext)
  const [isPrefetch, setisPrefetch] = useState(true)
  const fetchMenus = async () => {
    await salesizeStore.fetchStore()
    setisPrefetch(false)
  }

  useEffect(() => {
    fetchMenus()
  }, [])
  return (
    <>
      {!isPrefetch && (
        <>
          <Header {...props}></Header>
          <div style={{ minHeight: "100vh" }}>
            <Child {...props} />
          </div>
          <Footer></Footer>
        </>
      )}
    </>
  )
}
