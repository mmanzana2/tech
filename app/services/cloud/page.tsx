import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Cloud, ArrowLeft, CheckCircle } from "lucide-react"

export default function CloudPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Cloud className="h-6 w-6 text-primary" />
            <span>TechSolutions</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <Button asChild className="rounded-full px-6">
            <Link href="/#contact">Get Started</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  Cloud Solutions
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Cloud & Internet Solutions
                </h1>
                <p className="text-xl text-muted-foreground">
                  Reliable cloud solutions and high-speed internet connectivity to power your business operations.
                </p>
                <div className="mt-8 space-y-6">
                  <h2 className="text-2xl font-bold">Our Cloud & Internet Services Include:</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Cloud Migration & Management</h3>
                        <p className="text-muted-foreground mt-1">
                          Seamless migration of your applications and data to the cloud, with ongoing management and
                          optimization.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Internet Service Solutions</h3>
                        <p className="text-muted-foreground mt-1">
                          High-speed, reliable internet connectivity options tailored to your business requirements.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Hybrid Cloud Architecture</h3>
                        <p className="text-muted-foreground mt-1">
                          Custom hybrid cloud solutions that combine the benefits of public and private cloud
                          environments.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/#contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 opacity-70 blur-xl"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="Cloud computing infrastructure"
                  className="relative mx-auto aspect-square overflow-hidden rounded-2xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 lg:py-36">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Migration Process
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cloud Migration Process</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our structured approach ensures a smooth transition to the cloud
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-12 py-8 md:grid-cols-4">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl"></div>
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold">Assessment</h3>
                <p className="text-muted-foreground">
                  Evaluate your current infrastructure and identify migration candidates.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl"></div>
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold">Planning</h3>
                <p className="text-muted-foreground">Develop a detailed migration strategy and timeline.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl"></div>
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold">Migration</h3>
                <p className="text-muted-foreground">
                  Execute the migration with minimal disruption to your operations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl"></div>
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-bold">Optimization</h3>
                <p className="text-muted-foreground">
                  Continuously optimize your cloud environment for performance and cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 lg:py-36 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10 px-8 py-16 md:p-16 lg:p-20">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-6">
                    Ready to leverage the power of cloud technology?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed mb-8">
                    Contact us today to discuss how our cloud and internet solutions can benefit your business and drive
                    growth.
                  </p>
                  <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                    <Link href="/#contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <div className="flex items-center gap-2 font-bold">
            <Cloud className="h-6 w-6 text-primary" />
            <span>TechSolutions</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TechSolutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

