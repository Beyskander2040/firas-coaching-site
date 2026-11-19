"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  MediaCategory,
  mediaCategoryLabels,
  PhotoItem,
  VideoItem,
} from "@/data/media";

type MediaKind = "photo" | "video";

function PlayIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} translate-x-0.5`} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden="true">
      <path d="M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-9 w-9" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const TILE_BASE =
  "tile-enter sheen group relative block aspect-square w-full overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-br from-surface to-surface-light text-left transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-accent/50 hover:shadow-xl hover:shadow-black/30 focus-visible:-translate-y-1 focus-visible:scale-[1.03]";

function tileStyle(index: number) {
  return { animationDelay: `${Math.min(index, 14) * 40}ms` };
}

function PhotoTile({
  item,
  index,
  onOpen,
}: {
  item: PhotoItem;
  index: number;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      style={tileStyle(index)}
      aria-label={`Agrandir : ${item.title}`}
      className={TILE_BASE}
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3 pt-10">
        <p className="text-[10px] uppercase tracking-wide text-white/80">
          {mediaCategoryLabels[item.category]}
        </p>
      </div>
      <span className="pointer-events-none absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
        <ExpandIcon />
      </span>
    </button>
  );
}

function VideoTile({
  item,
  index,
  onOpen,
}: {
  item: VideoItem;
  index: number;
  onOpen: () => void;
}) {
  if (item.src) {
    return (
      <button
        type="button"
        onClick={onOpen}
        style={tileStyle(index)}
        aria-label={`Lire : ${item.title}`}
        className={TILE_BASE}
      >
        {item.poster && (
          <Image
            src={item.poster}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 transition-colors duration-300 group-hover:bg-black/10">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-background shadow-lg transition-transform duration-300 group-hover:scale-110">
            <PlayIcon />
          </span>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3 pt-10">
          <p className="truncate text-xs font-medium text-white">{item.title}</p>
          <p className="text-[10px] uppercase tracking-wide text-white/70">
            {mediaCategoryLabels[item.category]}
          </p>
        </div>
      </button>
    );
  }

  if (item.instagramUrl) {
    return (
      <a
        href={item.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={tileStyle(index)}
        className={`${TILE_BASE} flex flex-col items-center justify-center gap-3 p-4 text-center`}
      >
        <span className="text-[#E1306C] transition-transform duration-300 group-hover:scale-110">
          <InstagramIcon />
        </span>
        <p className="text-xs font-medium text-foreground/80">{item.title}</p>
        <p className="text-[10px] uppercase tracking-wide text-muted">Voir le Reel sur Instagram</p>
      </a>
    );
  }

  return (
    <div
      style={tileStyle(index)}
      className={`${TILE_BASE} flex flex-col items-center justify-center gap-3 p-4 text-center`}
    >
      <span className="text-accent/70">
        <PlayIcon className="h-9 w-9" />
      </span>
      <p className="text-xs font-medium text-foreground/80">{item.title}</p>
      <p className="text-[10px] uppercase tracking-wide text-muted">
        {mediaCategoryLabels[item.category]}
      </p>
      <span className="absolute right-2 top-2 rounded-full bg-background/80 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-muted">
        Bientôt
      </span>
    </div>
  );
}

function Lightbox({
  item,
  kind,
  onClose,
}: {
  item: PhotoItem | VideoItem;
  kind: MediaKind;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
      >
        <CloseIcon />
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] max-w-[95vw] overflow-hidden rounded-2xl shadow-2xl"
      >
        {kind === "photo" ? (
          <Image
            src={(item as PhotoItem).src}
            alt={item.title}
            width={1200}
            height={1600}
            sizes="95vw"
            className="max-h-[85vh] w-auto max-w-[95vw] object-contain"
          />
        ) : (
          <video
            src={(item as VideoItem).src}
            poster={(item as VideoItem).poster}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] w-auto max-w-[95vw] object-contain"
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-sm font-medium text-white">{item.title}</p>
          <p className="text-xs uppercase tracking-wide text-white/70">
            {mediaCategoryLabels[item.category]}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MediaLibrary({
  videos,
  photos,
}: {
  videos: VideoItem[];
  photos: PhotoItem[];
}) {
  const [tab, setTab] = useState<"videos" | "photos">("videos");
  const [category, setCategory] = useState<MediaCategory | "all">("all");
  const [lightbox, setLightbox] = useState<{ item: PhotoItem | VideoItem; kind: MediaKind } | null>(
    null
  );

  const items = tab === "videos" ? videos : photos;

  const categories = useMemo(() => {
    const unique = new Set(items.map((item) => item.category));
    return Array.from(unique);
  }, [items]);

  const filtered = useMemo(
    () => (category === "all" ? items : items.filter((item) => item.category === category)),
    [items, category]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex rounded-full border border-border-subtle bg-surface p-1">
          {(["videos", "photos"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setTab(key);
                setCategory("all");
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                tab === key ? "bg-accent text-accent-foreground" : "text-foreground/70"
              }`}
            >
              {key === "videos" ? "Vidéos" : "Photos"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={`rounded-full px-3 py-1.5 text-xs font-medium ${
            category === "all"
              ? "bg-accent text-accent-foreground"
              : "border border-border-subtle text-foreground/70 hover:text-foreground"
          }`}
        >
          Toutes les catégories
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-3 py-2 text-xs font-medium transition-colors ${
              category === cat
                ? "bg-accent text-accent-foreground"
                : "border border-border-subtle text-foreground/70 hover:text-foreground"
            }`}
          >
            {mediaCategoryLabels[cat]}
          </button>
        ))}
      </div>

      <div key={`${tab}-${category}`} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {filtered.map((item, i) =>
          tab === "photos" ? (
            <PhotoTile
              key={item.id}
              item={item as PhotoItem}
              index={i}
              onOpen={() => setLightbox({ item, kind: "photo" })}
            />
          ) : (
            <VideoTile
              key={item.id}
              item={item as VideoItem}
              index={i}
              onOpen={() => setLightbox({ item, kind: "video" })}
            />
          )
        )}
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox item={lightbox.item} kind={lightbox.kind} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
