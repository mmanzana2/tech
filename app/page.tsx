import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MobileNav } from '@/components/mobile-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { 
  NetworkIcon, 
  CloudIcon, 
  ShieldIcon, 
  ConsultingIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ChevronRightIcon
} from '@/components/ui/icons';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 dark:border-gray-800">
        <div className="container-custom flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">TechSupport</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <ThemeToggle />
            <Button>Get Started</Button>
          </nav>
          
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Blob background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-blue-500/20 filter-blur-3xl animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-indigo-500/20 filter-blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[20rem] rounded-full bg-purple-500/20 filter-blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container-custom py-20 md:py-28 lg:py-36">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
                Expert IT Solutions for Your Business
              </h1>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slide-up">
                We provide comprehensive IT support and solutions to help your business thrive in the digital age. From network infrastructure to cloud services, we've got you covered.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="animate-slide-up">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="animate-slide-up">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-blue-600 mb-2">10+</span>
                <span className="text-gray-600 dark:text-gray-400">Years Experience</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-blue-600 mb-2">500+</span>
                <span className="text-gray-600 dark:text-gray-400">Clients Served</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-blue-600 mb-2">98%</span>
                <span className="text-gray-600 dark:text-gray-400">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Services</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We offer a wide range of IT services to meet your business needs. Our team of experts is ready to help you with any IT challenge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-soft">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <NetworkIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Networking</CardTitle>
                  <CardDescription>
                    Secure and reliable network infrastructure solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    We design, implement, and maintain robust network systems that ensure seamless connectivity and data flow.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card className="shadow-soft">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    <CloudIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>Cloud Services</CardTitle>
                  <CardDescription>
                    Scalable cloud solutions for modern businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Leverage the power of cloud computing with our tailored solutions for storage, backup, and application hosting.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card className="shadow-soft">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <ShieldIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Cybersecurity</CardTitle>
                  <CardDescription>
                    Comprehensive security solutions for your data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Protect your business from cyber threats with our advanced security protocols and monitoring systems.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card className="shadow-soft">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <ConsultingIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>IT Consulting</CardTitle>
                  <CardDescription>
                    Strategic technology planning and advice
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our experts provide guidance on technology investments and digital transformation strategies.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section bg-gray-50 dark:bg-gray-900">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4">About Us</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  With over a decade of experience in the IT industry, we've helped hundreds of businesses optimize their technology infrastructure and solve complex IT challenges.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Our team of certified professionals is dedicated to providing top-notch IT solutions tailored to your specific business needs. We pride ourselves on our technical expertise, responsive service, and commitment to client satisfaction.
                </p>
                <Button>
                  Meet Our Team <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-soft">
                <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">Team Image</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container-custom text-center">
            <h2 className="mb-4">Ready to Transform Your Business?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Let us help you leverage technology to drive growth, improve efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 border-white">
                Contact Us
              </Button>
              <Button size="lg" className="bg-transparent border border-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">TechSupport</h3>
              <p className="mb-4">
                Providing expert IT solutions and support for businesses of all sizes.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  <FacebookIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  <InstagramIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  <LinkedInIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Networking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    IT Consulting
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <PhoneIcon className="h-5 w-5 mr-2 mt-0.5" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-start">
                  <MailIcon className="h-5 w-5 mr-2 mt-0.5" />
                  <span>info@techsupport.com</span>
                </li>
                <li className="flex items-start">
                  <MapPinIcon className="h-5 w-5 mr-2 mt-0.5" />
                  <span>123 Tech Street, Suite 100<br />San Francisco, CA 94107</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} TechSupport. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

