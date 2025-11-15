"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, BedDouble, Briefcase, Building, Calendar, ChefHat, Clock, Crown, Dumbbell, Gift, HelpCircle, Heart, MessageCircle, Shield, Sparkles, Star, Waves, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198068427-1urgli3n.jpg"
          logoAlt="Grandeur Hotel"
          brandName="Grandeur Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Book Your Luxury Escape Today"
          description="Discover the perfect blend of elegance and comfort at our award-winning hotel"
          tag="Welcome"
          tagIcon={Crown}
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "product"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198069192-rxd4yxj9.jpg",
              imageAlt: "Luxury hotel exterior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198069920-4vkac3v9.jpg",
              imageAlt: "Elegant hotel lobby"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198070758-86760pyz.jpg",
              imageAlt: "Presidential suite bedroom"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198071544-14c8y15b.jpg",
              imageAlt: "Hotel swimming pool"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198072272-4jdh09zv.jpg",
              imageAlt: "Fine dining restaurant"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Exceptional Service & Hospitality"
          description="Our commitment to excellence ensures every guest experiences the highest level of luxury and comfort throughout their stay"
          tag="Our Promise"
          tagIcon={Shield}
          textboxLayout="default"
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          bulletPoints={[
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, recommendations, and special requests",
              icon: Clock
            },
            {
              title: "Premium Amenities",
              description: "From our world-class spa to our rooftop infinity pool, every amenity is designed to exceed your expectations",
              icon: Star
            },
            {
              title: "Personalized Experience",
              description: "Every detail is tailored to your preferences, ensuring a truly unique and memorable stay",
              icon: Heart
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198072976-71q41szg.jpg"
          imageAlt="Hotel concierge providing personalized service"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our comprehensive range of luxury facilities and services"
          tag="Amenities"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind with our full-service spa featuring premium treatments and relaxation facilities",
              icon: Waves,
              button: {
                text: "Book Spa",
                href: "contact"
              }
            },
            {
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence with our award-winning chef's innovative cuisine and extensive wine collection",
              icon: ChefHat,
              button: {
                text: "View Menu",
                href: "https://restaurant.example.com"
              }
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Maintain your fitness routine in our fully equipped gym with personal training services available",
              icon: Dumbbell,
              button: {
                text: "Fitness Info",
                href: "contact"
              }
            },
            {
              title: "Business Center",
              description: "Professional meeting spaces and conference facilities with modern technology for all your business needs",
              icon: Building,
              button: {
                text: "Book Meeting",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our exquisite selection of rooms and suites, each designed for ultimate comfort"
          tag="Rooms & Suites"
          tagIcon={BedDouble}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "deluxe-room",
              name: "Deluxe King Room",
              price: "$299/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198076935-vd3ma82k.jpg",
              imageAlt: "Deluxe king room with city view",
              onProductClick: () => console.log('Deluxe room clicked')
            },
            {
              id: "executive-suite",
              name: "Executive Suite",
              price: "$549/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198077544-o97hl3u4.jpg",
              imageAlt: "Executive suite with living area",
              onProductClick: () => console.log('Executive suite clicked')
            },
            {
              id: "standard-room",
              name: "Standard Queen Room",
              price: "$199/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198078241-uq3zyxhh.jpg",
              imageAlt: "Standard queen room comfortable",
              onProductClick: () => console.log('Standard room clicked')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Exclusive Packages"
          description="Discover our specially curated packages designed to enhance your luxury experience"
          tag="Special Offers"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "romantic-getaway",
              badge: "Most Popular",
              badgeIcon: Heart,
              price: "$799/night",
              subtitle: "Perfect for couples seeking romance",
              buttons: [
                {
                  text: "Book Romance Package",
                  href: "contact"
                },
                {
                  text: "Package Details",
                  href: "contact"
                }
              ],
              features: [
                "Champagne & chocolate upon arrival",
                "Couples spa treatment",
                "Private dinner on the terrace",
                "Late checkout until 2 PM"
              ]
            },
            {
              id: "business-executive",
              badge: "Business Preferred",
              badgeIcon: Briefcase,
              price: "$449/night",
              subtitle: "Ideal for business travelers",
              buttons: [
                {
                  text: "Book Business Package",
                  href: "contact"
                },
                {
                  text: "Corporate Rates",
                  href: "contact"
                }
              ],
              features: [
                "Executive lounge access",
                "Complimentary WiFi upgrade",
                "Meeting room credit",
                "Express laundry service"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read testimonials from our valued guests who have experienced our exceptional hospitality"
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechCorp International",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198079039-gj33qjrp.png",
              imageAlt: "Sarah Johnson testimonial"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Managing Director",
              company: "Global Investments",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198079806-khi5zncn.jpg",
              imageAlt: "Michael Chen testimonial"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              company: "Creative Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198080518-d1wz9l7m.jpg",
              imageAlt: "Emily Rodriguez testimonial"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Senior Partner",
              company: "Law Associates",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198081226-wumvcuke.jpg",
              imageAlt: "David Kim testimonial"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Hotel Brands"
          description="Join the prestigious network of luxury hotels worldwide"
          tag="Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198082153-7n1p0ban.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198082851-8w75xuro.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198083738-fjibh6oi.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198084535-uiko3kir.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198085259-5s54a7vx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198086156-j6du26z8.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198086721-nj33uobo.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our hotel services and amenities"
          tag="Help Center"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your check-in and check-out time?",
              content: "Check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service every 30 minutes. We also offer private luxury car service for an additional fee."
            },
            {
              id: "3",
              title: "Is parking available at the hotel?",
              content: "We offer both self-parking and valet parking services. Valet parking is complimentary for our suite guests and available for a fee for other room categories."
            },
            {
              id: "4",
              title: "What dining options are available?",
              content: "Our hotel features a fine dining restaurant, casual café, rooftop bar, and 24-hour room service. We also accommodate special dietary requirements with advance notice."
            },
            {
              id: "5",
              title: "Do you allow pets?",
              content: "Yes, we are a pet-friendly hotel. We welcome dogs and cats with a small additional fee. Please inform us at the time of booking if you'll be traveling with a pet."
            },
            {
              id: "6",
              title: "What is your cancellation policy?",
              content: "Reservations can be cancelled up to 24 hours before arrival without penalty. Cancellations made within 24 hours of arrival are subject to a one-night room charge."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Book Your Stay"
          title="Ready for an Unforgettable Experience?"
          description="Contact our reservations team to book your luxury stay or inquire about our exclusive packages and amenities."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email for booking"
          buttonText="Get Availability"
          termsText="By submitting, you agree to receive booking information and special offers from our hotel."
          onSubmit={(email) => console.log('Hotel booking inquiry:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763198068427-1urgli3n.jpg"
          logoText="Grandeur Hotel"
          logoWidth={140}
          logoHeight={45}
          copyrightText="© 2025 Grandeur Hotel. All rights reserved."
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/grandeurhotel",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/grandeurhotel",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/grandeurhotel",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "product"
                },
                {
                  label: "Amenities",
                  href: "feature"
                },
                {
                  label: "Special Offers",
                  href: "pricing"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Concierge",
                  href: "contact"
                },
                {
                  label: "Spa & Wellness",
                  href: "contact"
                },
                {
                  label: "Fine Dining",
                  href: "contact"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "contact"
                },
                {
                  label: "Guest Services",
                  href: "contact"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Awards",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "https://careers.grandeurhotel.com"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}