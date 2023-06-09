import { StrictMode } from "react";
import logo from "../logo.svg";
import { Link } from "./Link";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StrictMode>
      <Container>
        <Sidebar>
          <Logo />
          <Link className="navitem" href="/">
            Home
          </Link>
          <Link className="navitem" href="/about">
            About
          </Link>
          <Link className="navitem" href="/chakra">
            Chakra
          </Link>
        </Sidebar>
        <Content>{children}</Content>
      </Container>
    </StrictMode>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
