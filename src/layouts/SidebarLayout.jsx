// src/layouts/SidebarLayout.jsx
export default function SidebarLayout({ children }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-primary text-white p-4">Sidebar</aside>
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
