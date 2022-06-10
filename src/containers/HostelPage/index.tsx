import React from 'react';
import { HostelHeader } from '../../components/HostelHeader/Loadable';

interface Props {}

export const HostelPage = (props: Props) =>  {
  return (
    <div className='container' >
        <HostelHeader />
    </div>
  )
}
