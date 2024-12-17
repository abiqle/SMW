import Image from "next/image";
import Link from "next/link";

export const navLinks = [{
    label: "Home",
    href: "#home"
},
{
    label: "Production House",
    href: "#prodhouse"
},
{
    label: "Gallary",
    href: "#gallary"
},
{
    label: "New Release",
    href: "#newrelease"
},
{
    label: "Career",
    href: "#career"
}

]

export const Header = () => {
    return (
        <nav className=" mx-auto px-32 flex justify-between items-center p-2 top-0  sticky border-b-2 ">
            <div>
                <Image
                    src="/smvpc.png"
                    alt="logo"
                    height={50}
                    width={50}
                />
            </div>


            <div className="sm:flex items-center font-semibold gap-5 text-blue-400 hidden">
                {
                    navLinks.map((navLink) =>
                        <Link key={navLink.label} href={navLink.href}>{navLink.label}</Link>
                    )
                }
            </div>

            <div className="hidden">

            </div>

        </nav>
    );
}

