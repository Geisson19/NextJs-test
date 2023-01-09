import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}
const style = {
  color: "#6FFFE9",
  textDecoration: "underline",
};

export const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} style={asPath === href ? style : undefined}>
      {children}
    </Link>
  );
};
