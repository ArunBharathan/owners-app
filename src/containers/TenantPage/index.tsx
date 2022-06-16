import React from 'react'
import { GreetingsHeader } from '../../components/GreetingsHeader/Loadable'
import { TenantList } from '../../components/TenantList/Loadable'

export const TenantPage = () => {
  return (
    <div className='container' >
        <GreetingsHeader name='John' />
        <TenantList count={100} />
    </div>
  )
}
