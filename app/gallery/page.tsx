"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
type Category = "technical" | "cultural" | "farewell" | "other";

interface GalleryImage {
  id: number;
  src: string;
  category: Category;
}

export default function Page() {
  const [selected, setSelected] = useState<"all" | Category>("all");

  const images: GalleryImage[] = [
    // Technical Events
    { id: 1, src: "/gallery/1.png", category: "technical" },
    { id: 2, src: "/gallery/2.jpeg", category: "technical" },
    { id: 3, src: "/gallery/3.jpeg", category: "technical" },
    { id: 4, src: "/gallery/4.png", category: "technical" },

    
    { id: 5, src: "/gallery/5.jpeg", category: "other" },
    { id: 6, src: "/gallery/6.png", category: "other" },
    { id: 7, src: "/gallery/7.png", category: "other" },

    
    { id: 8, src: "/gallery/8.png", category: "other" },
    { id: 9, src: "/gallery/9.jpg", category: "other" },

    
    { id: 10, src: "/gallery/10.png", category: "cultural" },
    { id: 11, src: "/gallery/11.png", category: "cultural" },
    { id: 12, src: "/gallery/12.png", category: "cultural" },

    { id: 13, src: "/gallery/13.png", category: "cultural" },
{ id: 14, src: "/gallery/14.jpg", category: "other" },
{ id: 15, src: "/gallery/15.png", category: "other" },
{ id: 16, src: "/gallery/16.jpeg", category: "other" },
{ id: 17, src: "/gallery/17.jpeg", category: "other" },
{ id: 18, src: "/gallery/18.jpeg", category: "other" },
{ id: 19, src: "/gallery/19.png", category: "other" },
{ id: 20, src: "/gallery/20.jpeg", category: "cultural" },
{ id: 21, src: "/gallery/21.jpeg", category: "cultural" },
{ id: 22, src: "/gallery/22.jpeg", category: "cultural" },
{ id: 23, src: "/gallery/23.jpg", category: "farewell" },
{ id: 24, src: "/gallery/24.jpg", category: "farewell" },
{ id: 25, src: "/gallery/25.jpg", category: "farewell" },
{ id: 26, src: "/gallery/26.jpg", category: "farewell" },
{ id: 27, src: "/gallery/27.jpg", category: "farewell" },
{ id: 28, src: "/gallery/28.jpg", category: "farewell" },
  ];

  // Automatic counts
  const counts = useMemo(() => {
    return images.reduce<Record<Category, number>>(
      (acc, image) => {
        acc[image.category]++;
        return acc;
      },
      {
        technical: 0,
        cultural: 0,
        farewell: 0,
        other: 0,
      }
    );
  }, [images]);

  const categories = [
    {
      id: "all" as const,
      label: "All",
      count: images.length,
    },
    {
      id: "technical" as const,
      label: "Technical Events",
      count: counts.technical,
    },
    {
      id: "cultural" as const,
      label: "Cultural Events",
      count: counts.cultural,
    },
    {
      id: "farewell" as const,
      label: "Farewell",
      count: counts.farewell,
    },
    {
      id: "other" as const,
      label: "Other",
      count: counts.other,
    },
  ];

  const filteredImages =
    selected === "all"
      ? images
      : images.filter((image) => image.category === selected);

      const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

const nextImage = () => {
  if (selectedIndex === null) return;
  setSelectedIndex((selectedIndex + 1) % filteredImages.length);
};

const prevImage = () => {
  if (selectedIndex === null) return;
  setSelectedIndex(
    (selectedIndex - 1 + filteredImages.length) % filteredImages.length
  );
};
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            Gallery
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Capturing Our Journey
          </h2>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelected(category.id)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2 transition-all ${
                selected === category.id
                  ? "border-purple-600 bg-purple-600 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:text-purple-700"
              }`}
            >
              <span>{category.label}</span>

              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  selected === category.id
                    ? "bg-white/20 text-white"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
  {filteredImages.map((image, index) => (
    <button
      key={image.id}
      onClick={() => setSelectedIndex(index)}
      className="group overflow-hidden rounded-2xl"
    >
      <img
        src={image.src}
        alt=""
        className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
      />
    </button>
  ))}
</div>
{selectedIndex !== null && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    onClick={() => setSelectedIndex(null)}
  >
    {/* Close */}
    <button
      onClick={() => setSelectedIndex(null)}
      className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20"
    >
      <X className="h-7 w-7" />
    </button>

    {/* Previous */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        prevImage();
      }}
      className="absolute left-6 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
    >
      <ChevronLeft className="h-8 w-8" />
    </button>

    {/* Image */}
    <img
      src={filteredImages[selectedIndex].src}
      alt=""
      onClick={(e) => e.stopPropagation()}
      className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
    />

    {/* Next */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        nextImage();
      }}
      className="absolute right-6 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
    >
      <ChevronRight className="h-8 w-8" />
    </button>

    {/* Counter */}
    <div className="absolute bottom-6 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
      {selectedIndex + 1} / {filteredImages.length}
    </div>
  </div>
)}
      </div>
    </section>
  );
}