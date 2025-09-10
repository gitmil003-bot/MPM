import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Factory, Truck, Award, ArrowRight, Star, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImage from "@/assets/chocolate-hero.jpg";
import mapsImage from "@/assets/images/maps.png";
import logoImage from "@/assets/images/Logo PT. Mandala Prima.png";
import placeholderImage from "/placeholder.svg";
import { useState, useEffect } from "react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const activeSection = useScrollSpy();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 0 ? 'bg-background/95 backdrop-blur-xl shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <img 
            src={logoImage} 
            alt="PT. Mandala Prima Logo" 
            className="h-12 transform hover:scale-105 transition-transform duration-300"
          />
          
          <div className="hidden md:flex items-center space-x-1">
            {['home', 'about', 'products', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/60 hover:text-primary hover:bg-primary/5'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${item}`)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="ml-4 bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform transition-transform duration-[2000ms]"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.2)',
            transform: `scale(${1 + scrollY * 0.0002})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 z-10" />
        
        <div 
          className="relative z-20 text-center px-6 max-w-5xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY * 0.002
          }}
        >
          <div 
            className="inline-flex items-center gap-2 bg-luxury-gold/10 text-luxury-gold px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-luxury-gold/20"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <Star className="w-4 h-4 animate-pulse" />
            Premium Quality Materials
          </div>
          
          <h1 
            className="text-6xl md:text-8xl font-black text-white mb-8 leading-none tracking-tight"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            PT. Mandala
            <span className="block bg-gradient-to-r from-luxury-gold via-accent to-luxury-gold bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Prima Makmur
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            WE ARE NOT THE FIRST <br></br> WE ARE NOT THE BIGGEST <br></br> BUT WE CAN BE YOUR TRUSTWORHTY PARTNER
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-luxury-gold to-accent text-primary font-semibold px-8 py-4 rounded-xl hover:shadow-luxury transition-all duration-500 group hover:scale-105"
              onClick={() => {
                document.querySelector('#products')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              Get Quote
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          onClick={() => {
            document.querySelector('#about')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
        >
          <div className="text-white/60 hover:text-white/80 transition-colors">
            <svg className="w-8 h-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-luxury relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="text-center card-hover"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="text-4xl font-bold text-primary mb-2 bg-gradient-to-r from-luxury-gold to-accent bg-clip-text text-transparent">15+</div>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div 
              className="text-center card-hover"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-4xl font-bold text-primary mb-2 bg-gradient-to-r from-luxury-gold to-accent bg-clip-text text-transparent">500+</div>
              <p className="text-muted-foreground font-medium">Happy Clients</p>
            </div>
            <div 
              className="text-center card-hover"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-4xl font-bold text-primary mb-2 bg-gradient-to-r from-luxury-gold to-accent bg-clip-text text-transparent">99.9%</div>
              <p className="text-muted-foreground font-medium">Quality Assurance</p>
            </div>
          </div>
          
          {/* Maps Image */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="600">
            <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={mapsImage} 
                alt="Location Map" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Get To Know
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 tracking-tight">About Us</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              <b>PT Mandala Prima Makmur</b> was established since 1997. Starting from trading company. The products were cocoa powder and cocoa beans. We bought cocoa powder from local manufacture and sold to regional and also overseas market.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-10 text-center shadow-soft hover:shadow-elegant transition-all duration-500 group border-0 bg-gradient-card">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Business</h3>
              <p className="text-muted-foreground leading-relaxed">
                We have a very good business relationship until now. In 2009 we started to build our own factory 2010 we have been one of cocoa powder supplier for local and export market.
              </p>
            </Card>
            
            <Card className="p-10 text-center shadow-soft hover:shadow-elegant transition-all duration-500 group border-0 bg-gradient-card">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
               We create a good, customized and stable product which make us become more confident to develop the market to all countries.
              </p>
            </Card>
            
            <Card className="p-10 text-center shadow-soft hover:shadow-elegant transition-all duration-500 group border-0 bg-gradient-card">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Product</h3>
              <p className="text-muted-foreground leading-relaxed">
                In 2016 we started to produce premium chocolate drink. We produce healthy and sensational 12 variants original and combination chocolate drink.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Premium Materials
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 tracking-tight">Our Products</h2>
            {/* <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation.
            </p> */}
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 group border-0">
              <div className="h-64 bg-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">Raw Cocoa Beans</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Raw Cocoa Beans</DialogTitle>
                      <DialogDescription className="pt-4">
                        Our premium raw cocoa beans are carefully selected from the finest plantations, ensuring superior quality and rich flavor profiles. Perfect for artisanal chocolate making and high-end confectionery production.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-4 space-y-2">
                        <li>Hand-picked and quality-graded beans</li>
                        <li>Sustainably sourced from premium estates</li>
                        <li>Rich in natural flavonoids and antioxidants</li>
                        <li>Optimal fermentation for enhanced flavor</li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
            
            <Card className="overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 group border-0">
              <div className="h-64 bg-milk-chocolate relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">Chocolate Liquor</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Chocolate Liquor</DialogTitle>
                      <DialogDescription className="pt-4">
                        Our chocolate liquor is crafted from the finest cocoa beans, offering a pure and intense chocolate flavor. It serves as the perfect base for creating premium chocolate products and confectioneries.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-4 space-y-2">
                        <li>100% pure cocoa mass</li>
                        <li>Rich and intense chocolate flavor</li>
                        <li>Smooth texture and consistency</li>
                        <li>Perfect for premium chocolate manufacturing</li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
            
            <Card className="overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 group border-0">
              <div className="h-64 bg-warm-bronze relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">Cocoa Powder</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Cocoa Powder</DialogTitle>
                      <DialogDescription className="pt-4">
                        Our premium cocoa powder is processed to perfection, delivering rich color and intense chocolate flavor. Ideal for baking, beverages, and various culinary applications.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-4 space-y-2">
                        <li>Fine texture and consistent particle size</li>
                        <li>Deep, rich color</li>
                        <li>Superior dispersibility</li>
                        <li>Versatile application in food products</li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-gradient-luxury">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-luxury-gold/10 text-luxury-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Our Achievements
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 tracking-tight">Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              Our commitment to quality and excellence is recognized through various international certifications.
            </p>
          </div>

          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="py-4">
                {[
                  {
                    title: "ISO 9001:2015",
                    description: "Quality Management System",
                    year: "Valid until 2028",
                    images: [
                      "certificates/SERTIFIKAT ISO PT MANDALA PRIMA MAKMUR VALID 04 MEI 2028/page_1.png",
                      "certificates/SERTIFIKAT ISO PT MANDALA PRIMA MAKMUR VALID 04 MEI 2028/page_2.png"
                    ]
                  },
                  {
                    title: "HACCP",
                    description: "Food Safety System",
                    year: "Valid",
                    images: ["certificates/HACCP/page_1.png"]
                  },
                  {
                    title: "Halal Certification",
                    description: "MUI Certified",
                    year: "Valid",
                    images: [
                      "certificates/SERTIFIKAT HALAL PT MPM/page_1.png",
                      "certificates/SERTIFIKAT HALAL PT MPM/page_2.png",
                      "certificates/SERTIFIKAT HALAL PT MPM/page_3.png"
                    ]
                  },
                  {
                    title: "SNI Certification",
                    description: "Indonesian National Standard",
                    year: "Valid until 2029",
                    images: [
                      "certificates/SERTIFIKAT SNI PT MANDALA PRIMA MAKMUR VALID 04 MEI 2029/page_1.png",
                      "certificates/SERTIFIKAT SNI PT MANDALA PRIMA MAKMUR VALID 04 MEI 2029/page_2.png"
                    ]
                  },
                  {
                    title: "Kosher Certification",
                    description: "Kosher Certified",
                    year: "Valid 2025-2026",
                    images: ["certificates/Sertifikat Kosher 2025-2026_unlocked/page_1.png"]
                  },
                  {
                    title: "BPOM Dives",
                    description: "Food Safety Authority Registration",
                    year: "Valid",
                    images: [
                      "certificates/BPOM Dives/page_1.png",
                      "certificates/BPOM Dives/page_2.png"
                    ]
                  },
                  {
                    title: "BPOM Dritto",
                    description: "Food Safety Authority Registration",
                    year: "Valid",
                    images: [
                      "certificates/BPOM Dritto/page_1.png",
                      "certificates/BPOM Dritto/page_2.png"
                    ]
                  },
                ].map((cert, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 group border-0 cursor-pointer">
                            <div className="relative h-[300px] overflow-hidden">
                              <div className="w-full h-full bg-white flex items-center justify-center">
                                {cert.images && cert.images[0] ? (
                                  <img
                                    src={cert.images[0]}
                                    alt={cert.title}
                                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                  />
                                ) : (
                                  <div className="flex flex-col items-center justify-center space-y-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-accent/50 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm font-medium text-accent/70 group-hover:text-accent transition-colors">Click to view certificate</span>
                                  </div>
                                )}
                              </div>
                              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                            </div>
                            <div className="p-6 text-center bg-gradient-card">
                              <h3 className="text-xl font-bold text-primary mb-2">{cert.title}</h3>
                              <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                              <p className="text-xs text-accent">{cert.year}</p>
                            </div>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[90vh] p-0">
                          <DialogHeader className="px-6 py-4 border-b">
                            <DialogTitle>{cert.title}</DialogTitle>
                            <p className="text-sm text-muted-foreground">{cert.description} - {cert.year}</p>
                          </DialogHeader>
                          <div className="flex-1 w-full h-[calc(90vh-80px)] bg-[#f5f5f5] overflow-y-auto">
                            <div className="flex flex-col items-center gap-4 p-6">
                              {cert.images.map((image, imageIndex) => (
                                <div 
                                  key={imageIndex} 
                                  className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden"
                                >
                                  <img
                                    src={image}
                                    alt={`${cert.title} - Page ${imageIndex + 1}`}
                                    className="w-full h-auto"
                                    loading="lazy"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                <CarouselPrevious className="bg-background/80 backdrop-blur-sm hover:bg-background border-0" />
              </div>
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                <CarouselNext className="bg-background/80 backdrop-blur-sm hover:bg-background border-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              Get In Touch
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 tracking-tight">Contact Us</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
             Ready to experience the best quality chocolate? reach us out!!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <Card className="p-10 shadow-elegant border-0 bg-gradient-card">
                <h3 className="text-3xl font-bold text-primary mb-8">Get in Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-lg mb-1">Address</p>
                      <p className="text-muted-foreground">Paramount Marketplace, Ruko Tematik P52 Gading Serpong, Tangerang 15810</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-lg mb-1">Phone</p>
                      <p className="text-muted-foreground">+62 21 29000364-5</p>
                      <p className="text-muted-foreground">+62 857-1675-5537 (Whatsapp)</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-lg mb-1">Email</p>
                      <p className="text-muted-foreground">operational@mprimam.com</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="animate-scale-in">
              <Card className="p-10 shadow-elegant border-0 bg-gradient-card">
                <h3 className="text-3xl font-bold text-primary mb-8">Send Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="First Name"
                      className="px-6 py-4 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-medium"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name"
                      className="px-6 py-4 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-medium"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-6 py-4 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-medium"
                  />
                  <input 
                    type="text" 
                    placeholder="Company Name"
                    className="w-full px-6 py-4 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-medium"
                  />
                  <textarea 
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-6 py-4 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none font-medium"
                  />
                  <Button 
                    className="w-full py-4 bg-gradient-accent text-primary font-semibold rounded-xl hover:shadow-luxury transition-all duration-300 group"
                    size="lg"
                  >
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-primary py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6 text-white">PT. Mandala Prima Makmur</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                WE ARE NOT THE FIRST AND WE ARE NOT THE BIGGEST BUT WE CAN BE YOUR TRUSTWORHTY PARTNER
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-white/90 hover:text-luxury-gold transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/90 hover:text-luxury-gold transition-colors">About Us</a></li>
                <li><a href="#products" className="text-white/90 hover:text-luxury-gold transition-colors">Products</a></li>
                <li><a href="#contact" className="text-white/90 hover:text-luxury-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
              <div className="space-y-3 text-white/90">
                <p>Paramount Marketplace, Ruko Tematik P52</p>
                <p>Gading Serpong, Tangerang 15810</p>
                <p>Phone: +62 21 29000364-5</p>
                <p>Email: operational@mprimam.com</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-12 bg-white/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-white/80">
            <p>&copy; 2024 PT. Mandala Prima Makmur. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Crafted with precision and excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
