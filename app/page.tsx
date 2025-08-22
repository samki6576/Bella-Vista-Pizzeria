"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Clock, MapPin, Phone, Mail, Instagram, Facebook, Twitter, X } from "lucide-react";

function OrderModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Place Your Order</h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close order form"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-1">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdpkG7EA-rnPDcWIMyA4NRQQsquhzQ2wgeobkQQvco-u8XdcQ/viewform?embedded=true" 
            width="100%" 
            height="600" 
            frameBorder="0"
            className="rounded-md"
            title="Bella Vista Pizzeria Order Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default function PizzaRestaurant() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">BV</span>
            </div>
            <span className="text-xl font-bold text-foreground">Bella Vista Pizzeria</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">
              Menu
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90" 
              onClick={() => setIsOrderModalOpen(true)}
            >
              Order Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzMTYwNjItaW1hZ2Uta3d2eWZrd3IuanBn.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Authentic Italian
            <span className="block text-accent">Pizza Experience</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Handcrafted with passion using traditional recipes and the finest local ingredients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
              onClick={() => setIsOrderModalOpen(true)}
            >
              Order Online
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Pizzas */}
      <section id="menu" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Our Signature Pizzas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each pizza is a masterpiece, crafted with love and baked to perfection in our wood-fired oven
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Margherita Classica",
                description: "San Marzano tomatoes, fresh mozzarella di bufala, basil, extra virgin olive oil",
                price: "$18",
                image: "https://images.unsplash.com/photo-1566843972705-1aad0ee32f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFyZ2hlcml0YSUyMENsYXNzaWNhJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
                popular: true,
              },
              {
                name: "Quattro Stagioni",
                description: "Artichokes, mushrooms, ham, olives, mozzarella, tomato sauce",
                price: "$24",
                image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhdHRybyUyMHN0YWdpb25pJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
              },
              {
                name: "Prosciutto e Rucola",
                description: "Prosciutto di Parma, arugula, cherry tomatoes, parmesan, truffle oil",
                price: "$26",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvc2NpdXR0byUyMGV8ZW58MHx8MHx8fDA%3D",
              },
              {
                name: "Diavola",
                description: "Spicy salami, mozzarella, tomato sauce, chili oil, oregano",
                price: "$22",
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhdm9sYSUyMHBpenphfGVufDB8fDB8fHww",
              },
              {
                name: "Funghi Porcini",
                description: "Porcini mushrooms, truffle cream, mozzarella, rosemary, garlic",
                price: "$28",
                image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVuZ2hpJTIwcG9yY2luaSUyMHBpenphfGVufDB8fDB8fHww",
              },
              {
                name: "Capricciosa",
                description: "Ham, mushrooms, artichokes, olives, mozzarella, tomato sauce",
                price: "$25",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwcmljY2lvc2ElMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D",
              },
            ].map((pizza, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {pizza.popular && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Most Popular</Badge>
                  )}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full font-semibold">
                    {pizza.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{pizza.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{pizza.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => setIsOrderModalOpen(true)}
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of your content remains the same */}
      {/* About Section, Gallery, Contact Section, Footer */}
      

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2015 by Chef Marco Rossi, Bella Vista Pizzeria brings authentic Neapolitan pizza traditions
                to your neighborhood. Our wood-fired oven, imported directly from Naples, reaches temperatures of 900°F
                to create the perfect leopard-spotted crust.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We source our ingredients from local farms and import specialty items like San Marzano tomatoes and
                Parmigiano-Reggiano directly from Italy. Every pizza is hand-stretched and made to order, ensuring the
                freshest possible experience.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary">50k+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary">4.9</div>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    Rating
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1604909052743-94e838986d24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZiUyMG1ha2luZyUyMHBpenphfGVufDB8fDB8fHww"
                alt="Chef making pizza"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-black">Authentic</div>
                <div className="text-sm">Wood-Fired Oven</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Pizza Gallery</h2>
            <p className="text-xl text-muted-foreground">A visual feast of our artisanal creations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1632221622104-06557f3eee3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1hcmdoZXJpdGElMjBDbGFzc2ljYSUyMHBpenphfGVufDB8fDB8fHww",
              "https://images.unsplash.com/photo-1695324318807-a234819bad21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1hcmdoZXJpdGElMjBDbGFzc2ljYSUyMHBpenphfGVufDB8fDB8fHww",
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZCUyMGZpcmVkJTIwcGl6emElMjBvdmVuJTIwZmxhbWVzfGVufDB8fDB8fHww",
              "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyZ2hlcml0YSUyMHBpenphJTIwY2xvc2UlMjB1cCUyMG1lbHRlZCUyMGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D",
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGludGVyaW9yJTIwY296eSUyMGF0bW9zcGhlcmV8ZW58MHx8MHx8fDA%3D",
              "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBzbGljZSUyMGJlaW5nJTIwbGlmdGVkJTIwY2hlZXNlJTIwcHVsbHxlbnwwfHwwfHx8MA%3D%3D",
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBpbmdyZWRpZW50cyUyMHRvbWF0b2VzJTIwYmFzaWwlMjBtb3p6YXJlbGxhfGVufDB8fDB8fHww",
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9tZXJzJTIwZW5qb3lpbmclMjBwaXp6YSUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
            ].map((imageUrl, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={imageUrl}
                  alt="Gallery image"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Visit Us Today</h2>
            <p className="text-xl text-muted-foreground">We'd love to serve you our authentic Italian pizza</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      123 Little Italy Street
                      <br />
                      Downtown District, NY 10012
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                      <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                      <p>Sunday: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-PIZZA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">hello@bellavistapizza.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
        <CardHeader>
          <CardTitle>Order Online</CardTitle>
          <CardDescription>Place your order and we'll contact you to confirm</CardDescription>
        </CardHeader>
        <CardContent>
          
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdpkG7EA-rnPDcWIMyA4NRQQsquhzQ2wgeobkQQvco-u8XdcQ/viewform?embedded=true" 
           width="100%" 
           height="600" 
           frameBorder="0"
           className="rounded-md"
           title="Bella Vista Pizzeria Order Form" 
          >
            Loading...</iframe>
          
           
          
        </CardContent>
      </Card>
    </div>
  </div>
</section>
          
        

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">BV</span>
                </div>
                <span className="text-xl font-bold">Bella Vista Pizzeria</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Authentic Italian pizza made with passion and the finest ingredients.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#menu" className="block text-muted-foreground hover:text-primary transition-colors">
                  Menu
                </a>
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
                <a href="#gallery" className="block text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
              <p className="text-muted-foreground mb-4">Subscribe to get updates on new pizzas and special offers.</p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="flex-1" />
                <Button className="bg-accent hover:bg-accent/90">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Bella Vista Pizzeria. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
  );
}