import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="flex justify-end p-4">
      <nav>
        <MobileNav />
      </nav>
    </header>
  );
}
