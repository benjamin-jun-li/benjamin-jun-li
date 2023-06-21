import Image from 'next/image';
import loadingGif from '@/public/loading.gif'
export default function Loading() {
    return (
        <>
            <Image src={loadingGif} height={500} width={500} alt={"loading gif"}/>
            <div>Loading...</div>
        </>
    );
}