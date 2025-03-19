import Link from "next/link";

export default function MenuBar() {
  return (
    <nav className="fixed flex bottom-0 left-0 right-0 justify-around bg-white p-[16px] px-[100px] pb-[24px] justify-between shadow-lg [&>a]:hover:opacity-50">
      <Link className="hover:text-teal-500" href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}