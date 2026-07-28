import ImageRow from "./ImageRow";

const images = [
  "/root/image1.jpeg",
  "/root/image2.png",
  "/root/image3.png",
  "/root/image4.jpeg",
  "/root/image5.jpeg",
  "/root/image6.jpg",
  
];

export default function LifeAtATC() {
  return (
    <div className="relative w-full overflow-hidden">
    <section className="bg-white py-24">

      <div className="mx-auto mb-16 max-w-7xl px-6 text-center">

        <p className="text-xs font-semibold uppercase  text-primary">
          Campus Experience
        </p>

        <h2 className="font-heading mt-3 text-2xl font-bold">
          Life @ ATC
        </h2>

       

      </div>

      <div className="space-y-5">

        <ImageRow
          images={images}
          direction="left"
          speed="slow"
        />

        <ImageRow
          images={images}
          direction="right"
          speed="normal"
        />

        <ImageRow
          images={images}
          direction="left"
          speed="fast"
        />

      </div>

    </section>
    </div>
  );
}