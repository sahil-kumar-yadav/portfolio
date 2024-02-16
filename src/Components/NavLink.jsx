import Link from "next/link";
import { usePathname } from "next/navigation";

// 29;00
const NavLink = ({link}) => {
    const pathName = usePathname();// current path return karta hai

    return (
        <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
        {link.title}
        </Link>
    );
}

export default NavLink;