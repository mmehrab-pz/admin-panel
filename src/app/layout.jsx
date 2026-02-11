import RootLayoutContent from "./RootLayoutContent";

export const metadata = {
  title: 'Berry | React Material Admin',
  description: 'این صفحه داشبورد برنامه است',
}

export default function RootLayout({ children }) {
  return <RootLayoutContent>{children}</RootLayoutContent>;
}
