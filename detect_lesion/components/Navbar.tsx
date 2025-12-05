import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <Link href="/">หน้าหลัก</Link>
            <Link href="/detect">ตรวจจับรอยโรค</Link>
            <Link href="/about">เกี่ยวกับเรา</Link>
        </nav>
    )
}
export default Navbar