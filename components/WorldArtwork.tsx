import Image from "next/image";

export function WorldArtwork({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return <Image src={src} alt={alt} fill sizes="100vw" className="world-art" priority={priority}/>;
}
