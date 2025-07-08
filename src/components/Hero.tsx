import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Palette, Sparkles, Star, Heart, Rocket, Radius } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const floatingIcons = [
	{ Icon: Sparkles, className: 'text-yellow-400', style: { top: '10%', left: '80%', animationDelay: '0s' } },
	{ Icon: Star, className: 'text-blue-400', style: { top: '70%', left: '90%', animationDelay: '1s' } },
	{ Icon: Heart, className: 'text-pink-400', style: { top: '80%', left: '10%', animationDelay: '2s' } },
	{ Icon: Rocket, className: 'text-green-400', style: { top: '20%', left: '5%', animationDelay: '1.5s' } },
];

const Hero = () => {
	return (
		<section
			id="home"
			className="pt-20 pb-16 relative overflow-hidden"
			style={{
				background: 'linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)', // matches Services page
			}}
		>
			{/* Floating animated icons */}
			<style>
				{`
          @keyframes float {
            0% { transform: translateY(0);}
            50% { transform: translateY(-18px);}
            100% { transform: translateY(0);}
          }
        `}
			</style>
			{floatingIcons.map(({ Icon, className, style }, i) => (
				<div
					key={i}
					className={`absolute pointer-events-none opacity-70 animate-[float_4s_ease-in-out_infinite]`}
					style={{
						...style,
						position: 'absolute',
						zIndex: 1,
						fontSize: '2.5rem',
						animationDelay: style.animationDelay,
					}}
				>
					<Icon className={className + ' w-10 h-10 drop-shadow-lg'} />
				</div>
			))}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
					<div className="space-y-8">
						<div className="space-y-4">
							<h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight drop-shadow-lg">
								Kool Kids
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-gradient-x">
									Kindergarten
								</span>
							</h1>
							<p className="text-xl text-gray-600 leading-relaxed">
								Where{' '}
								<span className="font-semibold text-blue-600">tiny steps</span> lead to{' '}
								<span className="font-semibold text-purple-600">big dreams!</span>
								<div className="flex justify-center items-center px-4">
  <span className="text-lg sm:text-xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 font-medium leading-relaxed block max-w-2xl">
    Every day is a new adventure filled with fun, friendships, and first discoveries. 💫<br />
    From painting tiny masterpieces to storytime snuggles and giggly games — we're here to make growing up magical. 🌈🎨📚
  </span>
</div>
</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								size="lg"
								asChild
								className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all"
							>
								<a href="#portfolio" className="flex items-center">
									Gallery
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</a>
							</Button>
							<Button
								size="lg"
								variant="outline"
								asChild
								className="border-blue-600 text-blue-700 font-semibold hover:bg-blue-50"
							>
								<a href="#contact">Get In Touch</a>
							</Button>
						</div>
					</div>

					{/* Right side: Spline 3D scene in a black box with gradients */}
					<div className="rounded-[40px] bg-gray-300 p-5">
						<img src="image.png" alt=""/>
						</div>
						
						</div>
					</div>
			{/* Gradient animation keyframes */}
			<style>
				{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin 4s linear infinite;
          }
        `}
			</style>
		</section>
	);
};

export default Hero;
