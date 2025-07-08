import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Book, Palette, Music, Puzzle, Smile, Users, Leaf, Calculator, Handshake, Flower, Volume2, Paintbrush, Move3D, Circle
} from 'lucide-react';

const skills = [
  'Creative Arts',
  'Storytelling',
  'Phonics',
  'Color Recognition',
  'Motor Skills',
  'Problem Solving',
  'Rhymes & Songs',
  'Emotional Intelligence',
  'Counting & Numbers',
  'Shape Recognition',
  'Group Activities',
  'Nature Exploration',
  'Alphabet Learning',
  'Social Skills',
  'Sensory Play'
];

const skillIcons: Record<string, JSX.Element> = {
  'Creative Arts': <Paintbrush className="w-4 h-4 mr-1" />,
  'Storytelling': <Book className="w-4 h-4 mr-1" />,
  'Phonics': <Volume2 className="w-4 h-4 mr-1" />,
  'Color Recognition': <Palette className="w-4 h-4 mr-1" />,
  'Motor Skills': <Move3D className="w-4 h-4 mr-1" />,
  'Problem Solving': <Puzzle className="w-4 h-4 mr-1" />,
  'Rhymes & Songs': <Music className="w-4 h-4 mr-1" />,
  'Emotional Intelligence': <Smile className="w-4 h-4 mr-1" />,
  'Counting & Numbers': <Calculator className="w-4 h-4 mr-1" />,
  'Shape Recognition': <Circle className="w-4 h-4 mr-1" />,
  'Group Activities': <Users className="w-4 h-4 mr-1" />,
  'Nature Exploration': <Leaf className="w-4 h-4 mr-1" />,
  'Social Skills': <Handshake className="w-4 h-4 mr-1" />,
  'Sensory Play': <Flower className="w-4 h-4 mr-1" />
};

const About = () => {
  const stats = [
    { number: '9+', label: 'Years Experience' },
    { number: '100%', label: 'Parent Satisfaction' }
  ];

  return (
    <section
      id="about"
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)',
      }}
    >
      <style>
        {`
          .about-bounce {
            animation: about-bounce 2.2s infinite cubic-bezier(.4,0,.2,1);
          }
          @keyframes about-bounce {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-10px);}
          }
          .about-glow {
            box-shadow: 0 0 16px 2px #818cf8, 0 0 32px 8px #a5b4fc33;
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-6 drop-shadow-lg tracking-tight animate-gradient-x">
                About Kool Kids
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  <span className="font-semibold text-blue-600">Where Little Minds Grow, and Big Dreams Begin!</span> <br />
                  For over 9 years, Kool Kids Kindergarten has been a trusted name in early childhood education — creating a joyful, secure, and stimulating space where every child is encouraged to imagine, explore, and grow.
                </p>
                <p>
                  At Kool Kids, we understand that the early years shape a child's future. That’s why we go beyond the basics to provide a well-rounded foundation that nurtures academic skills, emotional well-being, and social confidence — all in a fun, playful environment.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Skills & Activities</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0 shadow about-bounce flex items-center"
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    {skillIcons[skill] || null}
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-lg bg-white/90 backdrop-blur about-glow hover:scale-105 transition-transform duration-200">
                  <CardContent className="p-0">
                    <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 drop-shadow">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-8 border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white about-glow hover:scale-105 transition-transform duration-200">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Ready to Join the Kool Kids Family?</h3>
                <a
                  href="#contact"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors duration-200 tracking-wide"
                >
                  Get In Touch
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
