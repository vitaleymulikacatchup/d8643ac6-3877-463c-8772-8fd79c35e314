"use client";

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardOne from '@/components/sections/metric/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Battery, BarChart3, Car, CheckCircle, Facebook, Gauge, HelpCircle, Instagram, Leaf, Linkedin, MessageSquare, Rocket, Settings, Shield, Twitter, Users, Wind, Youtube, Zap } from 'lucide-react';

export default function F1RacingPage() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="F1 Racing 2026"
          button={{
            text: "Get Tickets",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Formula 1 Racing 2026"
          description="Experience the ultimate speed, precision, and technology of the world's most advanced racing cars"
          tag="Next Generation Racing"
          tagIcon={Zap}
          buttons={[
            {
              text: "Explore Cars",
              href: "cars"
            },
            {
              text: "Race Calendar",
              href: "schedule"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723602851-c7jojtqe.jpg",
              imageAlt: "Formula 1 racing car 2026"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723604020-mmmpqtho.jpg",
              imageAlt: "F1 car cockpit and driver"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723606963-jxka6gdy.jpg",
              imageAlt: "F1 car aerodynamics technology"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723608402-dz3snxcz.jpg",
              imageAlt: "F1 car pit stop action"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723609935-vg92hej0.jpg",
              imageAlt: "F1 car engine technology"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="The Future of Formula 1"
          description="Discover the revolutionary changes coming to Formula 1 in 2026, featuring sustainable technology, enhanced performance, and unprecedented racing excitement"
          tag="Innovation"
          tagIcon={Rocket}
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723611091-8j09gm82.jpg"
          imageAlt="F1 2026 car technology"
          bulletPoints={[
            {
              title: "100% Sustainable Fuels",
              description: "Revolutionary biofuels powering the fastest cars on Earth while protecting our planet",
              icon: Leaf
            },
            {
              title: "Enhanced Safety Systems",
              description: "Advanced driver protection with improved halo systems and crash-resistant materials",
              icon: Shield
            },
            {
              title: "Increased Power Output",
              description: "More powerful hybrid engines delivering 1000+ horsepower for thrilling racing",
              icon: Zap
            }
          ]}
          buttons={[
            {
              text: "Technical Regulations",
              href: "regulations"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Revolutionary F1 Technology"
          description="Explore the cutting-edge innovations that make 2026 Formula 1 cars the most advanced racing machines ever created"
          tag="Technology"
          tagIcon={Settings}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Active Aerodynamics",
              description: "Dynamic wing adjustments that adapt in real-time for optimal downforce and drag reduction",
              icon: Wind,
              button: {
                text: "Learn More",
                href: "aerodynamics"
              }
            },
            {
              title: "Advanced Hybrid Power",
              description: "Next-generation MGU-K and MGU-H systems delivering unprecedented energy recovery",
              icon: Battery,
              button: {
                text: "Power Systems",
                href: "hybrid"
              }
            },
            {
              title: "Enhanced Safety",
              description: "Improved Halo protection and energy-absorbing structures for maximum driver safety",
              icon: Shield,
              button: {
                text: "Safety Features",
                href: "safety"
              }
            }
          ]}
        />
      </div>

      <div id="cars" data-section="cars">
        <ProductCardOne
          title="2026 F1 Car Showcase"
          description="Meet the next generation of Formula 1 racing machines from the world's premier racing teams"
          tag="Racing Cars"
          tagIcon={Car}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "rb-2026",
              name: "Red Bull RB26",
              price: "Championship Contender",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723614605-efhqgqxb.jpg",
              imageAlt: "Red Bull Formula 1 racing car 2026",
              onProductClick: () => window.open('/cars/red-bull', '_self')
            },
            {
              id: "w15-2026",
              name: "Mercedes W15",
              price: "Silver Arrow",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723615822-hm1ol94h.jpg",
              imageAlt: "Mercedes Formula 1 racing car",
              onProductClick: () => window.open('/cars/mercedes', '_self')
            },
            {
              id: "sf-26",
              name: "Ferrari SF-26",
              price: "Prancing Horse",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723616977-8r3w1569.jpg",
              imageAlt: "Ferrari Formula 1 racing car",
              onProductClick: () => window.open('/cars/ferrari', '_self')
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Formula 1 Performance"
          description="The incredible numbers behind the world's fastest and most technologically advanced motorsport"
          tag="Statistics"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "speed",
              value: "370",
              title: "km/h",
              description: "Maximum speed achieved on racing circuits",
              icon: Gauge
            },
            {
              id: "power",
              value: "1000",
              title: "HP",
              description: "Total hybrid power output from engine and ERS",
              icon: Zap
            },
            {
              id: "races",
              value: "24",
              title: "Races",
              description: "Grand Prix events in the 2026 championship",
              icon: CheckCircle
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet the Champions"
          description="The talented drivers and engineers pushing the boundaries of Formula 1 racing"
          tag="Racing Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "driver-1",
              name: "Alex Racing",
              role: "Lead Driver",
              description: "Three-time world champion with unmatched skill on track and dedication to pushing F1 technology forward",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723621106-ii72m71k.jpg",
              imageAlt: "Formula 1 lead driver Alex Racing",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/alexracing"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com/alexracingf1"
                }
              ]
            },
            {
              id: "driver-2",
              name: "Maria Velocity",
              role: "Rising Star",
              description: "Breakthrough rookie driver bringing fresh talent and innovative racing techniques to Formula 1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723622214-82kv5iel.jpg",
              imageAlt: "Formula 1 rookie driver Maria Velocity",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/mariavelocity"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com/mariaf1"
                }
              ]
            },
            {
              id: "engineer-1",
              name: "David Tech",
              role: "Chief Engineer",
              description: "Aerodynamics specialist responsible for the revolutionary car designs that define modern F1 performance",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723623449-q5c1dldm.jpg",
              imageAlt: "F1 chief engineer David Tech",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/davidtech"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Fans Are Saying"
          description="Real experiences from Formula 1 enthusiasts around the world"
          tag="Fan Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "fan-1",
              name: "Racing Mike",
              handle: "@racingmike",
              testimonial: "The 2026 F1 cars are absolutely incredible! The sound, the speed, the technology - it's like watching the future of motorsport unfold before your eyes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723624249-dxdmnno7.jpg",
              imageAlt: "F1 fan Racing Mike"
            },
            {
              id: "fan-2",
              name: "Speed Sarah",
              handle: "@speedsarah",
              testimonial: "I've been following F1 for 20 years and I've never seen racing this exciting. The hybrid technology makes every lap unpredictable and thrilling.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723625047-v9jv1yqv.jpg",
              imageAlt: "F1 enthusiast Speed Sarah"
            },
            {
              id: "fan-3",
              name: "Track Tom",
              handle: "@tracktom",
              testimonial: "The safety improvements in 2026 are remarkable while still maintaining the raw excitement that makes Formula 1 the pinnacle of motorsport.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723626009-upblymgw.jpg",
              imageAlt: "F1 fan Track Tom"
            },
            {
              id: "fan-4",
              name: "Circuit Chloe",
              handle: "@circuitchloe",
              testimonial: "From the paddock to the podium, every aspect of the 2026 season showcases why Formula 1 remains the greatest racing championship in the world.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723627190-mmhxaxej.jpg",
              imageAlt: "F1 enthusiast Circuit Chloe"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Racing Teams Worldwide"
          description="The world's premier Formula 1 teams choose our technology and partnership for championship success"
          tag="Partners"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723628517-oupcde7w.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723630313-goly0b1q.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723631643-c3bo1hby.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723632812-dk5ot1tb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723633962-eyjih6db.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723635125-mpxlbvvc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723636109-kcmhrpoj.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about Formula 1 2026 regulations, technology, and racing"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "regulations",
              title: "What are the major changes in F1 2026 regulations?",
              content: "The 2026 season introduces revolutionary changes including 100% sustainable fuels, enhanced hybrid power units delivering over 1000hp, active aerodynamics, and improved safety systems with advanced halo protection."
            },
            {
              id: "sustainability",
              title: "How is Formula 1 becoming more sustainable?",
              content: "F1 2026 features 100% sustainable biofuels, carbon-neutral logistics, enhanced energy recovery systems, and a commitment to achieving net-zero carbon emissions by 2030 while maintaining peak performance."
            },
            {
              id: "technology",
              title: "What new technologies are being introduced?",
              content: "Key innovations include active aerodynamics that adjust in real-time, next-generation MGU-K and MGU-H hybrid systems, advanced telemetry, improved energy storage, and revolutionary sustainable fuel technology."
            },
            {
              id: "safety",
              title: "How have safety measures improved for 2026?",
              content: "Enhanced safety features include improved halo structures, better energy-absorbing materials, advanced crash barriers, upgraded medical facilities, and refined car designs that prioritize driver protection without compromising performance."
            },
            {
              id: "racing",
              title: "Will the racing be more exciting?",
              content: "Absolutely! The 2026 regulations are designed to promote closer racing with improved overtaking opportunities, more strategic fuel management, enhanced wheel-to-wheel combat, and unpredictable race outcomes through advanced hybrid technology."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get Race Updates"
          description="Stay connected with the latest Formula 1 2026 news, race schedules, and exclusive behind-the-scenes content"
          mediaPosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723612495-3ismj9x6.jpg"
          imageAlt="Formula 1 car technology"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "What F1 content interests you most? (Race updates, technical analysis, driver interviews, etc.)",
            rows: 5,
            required: false
          }}
          buttonText="Join F1 Updates"
          onSubmit={(data) => console.log('F1 contact form:', data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="F1 Racing 2026"
          copyrightText="© 2026 | Formula 1 Racing Championship"
          columns={[
            {
              title: "Racing",
              items: [
                {
                  label: "Cars",
                  href: "cars"
                },
                {
                  label: "Teams",
                  href: "teams"
                },
                {
                  label: "Drivers",
                  href: "drivers"
                }
              ]
            },
            {
              title: "Championship",
              items: [
                {
                  label: "Schedule",
                  href: "schedule"
                },
                {
                  label: "Results",
                  href: "results"
                },
                {
                  label: "Standings",
                  href: "standings"
                }
              ]
            },
            {
              title: "Technology",
              items: [
                {
                  label: "Regulations",
                  href: "regulations"
                },
                {
                  label: "Innovation",
                  href: "innovation"
                },
                {
                  label: "Sustainability",
                  href: "sustainability"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/f1racing2026",
              ariaLabel: "Follow F1 Racing on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/f1racing2026",
              ariaLabel: "Follow F1 Racing on Twitter"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/f1racing2026",
              ariaLabel: "Subscribe to F1 Racing YouTube"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/f1racing2026",
              ariaLabel: "Follow F1 Racing on Facebook"
            }
          ]}
        />
      </div>
    </>
  );
}