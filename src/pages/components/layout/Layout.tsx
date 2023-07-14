import { FC, PropsWithChildren } from 'react'
import Header from '@/pages/components/header/Header'
//import Meta from '../seo/Meta'
//import { IMeta } from '../seo/meta.interface'

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout


/*<Meta title={title} description={description}>
<Header />
{children}
</Meta>*/