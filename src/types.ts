export interface NavItem {
  id: string;
  label: string;
  jpLabel: string;
  href: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  url?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  jpTitle: string;
  description: string;
  color: string;
  iconName: string;
}
