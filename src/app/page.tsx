import { SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import { getMyImages } from '~/server/queries';
export const dynamic = 'force-dynamic';

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Image
            src={image.url}
            style={{ objectFit: 'contain' }}
            height={480}
            width={480}
            alt={image.name}
          />
          <div>{image.name}</div>
        </div>
      ))}
      My app
    </div>
  );
}
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above!
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
