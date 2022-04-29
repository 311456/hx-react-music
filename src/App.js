import React, { memo } from 'react'

import useRouter from "@/router"
import HXAppHeader from '@/components/app-header'
import HXAppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div>
      <HXAppHeader />
      {useRouter()}
      <HXAppFooter />
    </div>
  )
})

export default App