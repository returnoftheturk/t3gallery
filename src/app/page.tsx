const mockFiles = [
  "https://utfs.io/f/fcf73adc-bc4c-4ac9-a4e7-fb813a9daddc-jlo1c8.png",
  "https://utfs.io/f/6b12721d-d63b-4516-ae2b-40fd822b40fc-jlo1ca.jpeg",
  "https://utfs.io/f/b2caa1d3-e5f6-4aeb-8ba7-71267f5969ca-jlo1c9.jpeg",
  "https://utfs.io/f/cada1419-19c2-47da-97df-61408e9e82d4-jlo1c7.jpeg",
];

const mockImages = mockFiles.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} />
            </div>
          ),
        )}
        My app
      </div>
    </main>
  );
}
