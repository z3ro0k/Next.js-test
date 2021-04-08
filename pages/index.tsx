import { NextPage } from 'next';
import Image from 'next/image';
import Dynamic from 'next/dynamic';

const Lanyard = Dynamic(() => import('../components/Lanyard'), { ssr: false });

const Index: NextPage = () => {
  return (
    <>
      <Lanyard id="325414558623858698" />
    </>
  )
}

export default Index;