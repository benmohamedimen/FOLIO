interface MenuLink {
  id: number;
  title: string;
  link: string;
}

const MenuLinks: MenuLink[] = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Experiences', link: '/experiences' },
  { id: 3, title: 'Diplomas', link: '/diplomas' },
  { id: 4, title: 'Projects', link: '/projects' },
];

export default MenuLinks;
