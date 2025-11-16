import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <a className="flex items-center space-x-2 hover-elevate px-3 py-2 rounded-md -ml-3">
              <span className="text-xl font-heading font-bold text-primary">HADRON</span>
              <span className="text-xs font-medium text-muted-foreground">ELECTRONICS</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  data-testid={`link-${link.label.toLowerCase()}`}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                    isActive(link.path)
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button data-testid="button-get-in-touch" size="default">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="button-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.path} href={link.path}>
                      <a
                        onClick={() => setOpen(false)}
                        data-testid={`mobile-link-${link.label.toLowerCase()}`}
                        className={`block px-4 py-2 rounded-md text-base font-medium hover-elevate ${
                          isActive(link.path)
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {link.label}
                      </a>
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button
                      className="w-full mt-4"
                      onClick={() => setOpen(false)}
                      data-testid="mobile-button-get-in-touch"
                    >
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
