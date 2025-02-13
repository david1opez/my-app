import Link from "next/link";
import Rectangle from "@/components/Rectangle";

export default function Page2() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <Rectangle color="blue"/>
            <Link href="/">Ir a página principal</Link>
        </div>
    )
}