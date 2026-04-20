export const TYPOGRAPHY = {
  // ------- home page -------
  hero: {
    title:
      "text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-snug",
  },
  section: {
    title: "text-5xl md:text-6xl lg:text-8xl font-semibold italic",
  },
  about: {
    introLead:
      "text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-relaxed",
    introHighlight:
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold",
    description:
      "text-base sm:text-lg md:text-xl font-medium leading-relaxed break-keep text-muted-foreground",
    skillTitle: "text-lg sm:text-xl md:text-2xl font-bold text-foreground",
    skillGroup:
      "text-sm sm:text-base md:text-base font-bold uppercase tracking-wide",
    skillBadge: "text-xs sm:text-sm font-medium",
  },
  project: {
    category:
      "text-xs md:text-sm font-medium tracking-wide text-muted-foreground",
    title:
      "text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight",
    description:
      "text-sm sm:text-base md:text-lg font-medium leading-relaxed break-keep text-muted-foreground",
    skillBadge: "text-xs md:text-sm lg:text-base font-medium",
  },
  footer: {
    headline:
      "text-6xl sm:text-7xl md:text-8xl font-black uppercase leading-none text-accent",
    link: "text-accent font-medium text-2xl md:text-4xl",
  },

  // ------- project detail page -------

  ui: {
    nav: "text-sm md:text-base font-medium",
    button: "text-xs sm:text-sm font-medium",
    caption: "text-xs md:text-sm text-muted-foreground",
  },
} as const;

export type TypographyToken = typeof TYPOGRAPHY;
export type TypographyCategory = keyof typeof TYPOGRAPHY;
