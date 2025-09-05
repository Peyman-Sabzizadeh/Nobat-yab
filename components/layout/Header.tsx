import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-purple-200">
      <div>
        <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
        <h1>نوبت یاب</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/">تخصص ها</Link>
          </li>
          <li>
            <Link href="/">مراکز</Link>
          </li>
          <li>
            <Link href="/">مشاوره آنلاین</Link>
          </li>
        </ul>
      </div>
      <div>
        <button>ورود</button>
        <button>ثبت نام</button>
      </div>
    </header>
  );
}
