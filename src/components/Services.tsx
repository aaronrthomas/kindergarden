import {
  Smile,
  Paintbrush,
  BookOpenCheck,
  Music,
  Users,
  HeartHandshake,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Floating animation styles
const floatKeyframes = `
@keyframes floatY {
  0% { transform: translateY(0);}
  50% { transform: translateY(-40px);}
  100% { transform: translateY(0);}
}
@keyframes floatX {
  0% { transform: translateX(0);}
  50% { transform: translateX(30px);}
  100% { transform: translateX(0);}
}
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px);}
  100% { opacity: 1; transform: translateY(0);}
}
`;

const floatingIcons = [Smile, Paintbrush, Music, Users];

function getRandomFloatStyle(index: number) {
  const top = Math.random() * 80 + 5;
  const left = Math.random() * 90;
  const size = Math.random() * 32 + 32;
  const opacity = Math.random() * 0.18 + 0.10;
  const duration = (Math.random() * 6 + 8).toFixed(1);
  const delay = (Math.random() * 6).toFixed(1);
  const floatAnim = Math.random() > 0.5 ? "floatY" : "floatX";
  const colorArr = [
    "text-pink-300",
    "text-yellow-300",
    "text-blue-300",
    "text-fuchsia-200",
  ];
  const color = colorArr[index % colorArr.length];
  return {
    position: "absolute" as const,
    top: `${top}%`,
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    opacity,
    zIndex: 0,
    pointerEvents: "none" as const,
    animation: `${floatAnim} ${duration}s ease-in-out ${delay}s infinite`,
    filter: "blur(0.5px) drop-shadow(0 0 8px #f9a8d4)",
  };
}

const services = [
  {
    icon: BookOpenCheck,
    title: "All-in-One Learning & Care Hub",
    description:
      "Tuition, daycare, after-school care, and nurturing teachers—all under one roof.",
    features: [
      "Tuition Support from LKG to VII",
      "Daycare Services (6 months to 6 years)",
      "After-School Care with academic guidance",
      "Qualified & Caring Teachers",
      "Open 7 AM – 8 PM",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Safe, Secure & Supervised",
    description:
      "24x7 CCTV, strict hygiene, and a homely, child-friendly environment.",
    features: [
      "24x7 CCTV Monitoring",
      "Strict Hygiene Protocols",
      "Homely atmosphere",
      "Child-friendly classrooms & play areas",
    ],
  },
  {
    icon: Users,
    title: "Power-Packed Special Programs",
    description:
      "Karate, dance, physical training, brain development, and creative expression.",
    features: [
      "Karate & Kalari",
      "Classical & Cinematic Dance",
      "Physical Training",
      "Brain development activities",
      "Creative expression & confidence building",
    ],
  },
  {
    icon: Smile,
    title: "Flexible Daycare & Holiday Care",
    description:
      "One-day, holiday, and regular daycare with school pick-up/drop and daily themed fun.",
    features: [
      "One-day, holiday, and regular daycare",
      "Direct school pick-up & drop-off",
      "Daily themed activities & fun learning",
      "Available on most school holidays",
    ],
  },
  {
    icon: Paintbrush,
    title: "Fun-Filled Learning through Play",
    description: "Art, craft, music, games, and celebrations for joyful learning.",
    features: [
      "Art & Craft, storytelling, paper folding",
      "Music & Movement with rhythm activities",
      "Indoor games & life skill building",
      "Celebrations, theme days & birthday fun",
    ],
  },
  {
    icon: Music,
    title: "Parent-Friendly Services",
    description:
      "Safe transport, daily updates, easy communication, and caring management.",
    features: [
      "Safe transport with trusted drivers",
      "Daily updates through WhatsApp",
      "Easy parent-staff communication",
      "Regular feedback & progress tracking",
      "A management team that truly cares",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 min-h-screen"
      style={{
        background: "linear-gradient(135deg, #fdf2f8 0%, #fef9f9 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{floatKeyframes}</style>

      {/* Floating background icons */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => {
          const Icon = floatingIcons[i % floatingIcons.length];
          const colorArr = [
            "text-pink-300",
            "text-yellow-300",
            "text-blue-300",
            "text-fuchsia-200",
          ];
          const color = colorArr[i % colorArr.length];
          return (
            <Icon
              key={i}
              style={getRandomFloatStyle(i)}
              className={color}
            />
          );
        })}
      </div>

      {/* Main section content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
          style={{
            animation: "fadeUp 1s cubic-bezier(.4,0,.2,1) both",
          }}
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4 drop-shadow-sm">
            Why Us?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Making every day playful, purposeful, and packed with possibilities!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 shadow-md flex flex-col h-full w-full max-w-md bg-white/90 backdrop-blur"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className="mx-auto w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(90deg, #18181b 0%, #6366f1 100%)",
                  }}
                >
                  <item.icon className="h-8 w-8 text-white drop-shadow" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <CardDescription className="text-gray-600 text-center">
                  {item.description}
                </CardDescription>
                <ul className="space-y-2 mt-auto">
                  {item.features.map((feat, featIndex) => (
                    <li
                      key={featIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
