export type NavLink = {
  sectionId: string;
  href: string;
  label: string;
  index: string;
};

export const primaryNavLinks: NavLink[] = [
  { sectionId: "top", href: "#top", label: "Overview", index: "00" },
  { sectionId: "expertise", href: "#expertise", label: "Services", index: "01" },
  { sectionId: "clients", href: "#clients", label: "Clients", index: "02" },
  { sectionId: "experience", href: "#experience", label: "Experience", index: "03" },
  { sectionId: "drupal", href: "#drupal", label: "Drupal", index: "04" },
  { sectionId: "tech-stack", href: "#tech-stack", label: "Technology", index: "05" },
  { sectionId: "contact", href: "#contact", label: "Contact", index: "06" },
];

export const sectionIds = primaryNavLinks.map((link) => link.sectionId);
