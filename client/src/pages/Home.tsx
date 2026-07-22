import { useEffect, useRef, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Heart, Users, Calendar, Zap, MapPin, Phone, Mail, Volume2, VolumeX, Unlink, Flame, HeartHandshake } from 'lucide-react';

/**
 * Strides of Harmony Landing Page
 * 
 * Design Philosophy: Energetic Recovery
 * - Motion-first design with scroll-triggered animations
 * - Authentic warmth with trust-building colors (blue, green, orange)
 * - Progressive disclosure of information
 * - Accessibility through clarity
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [pillarsVisible, setPillarsVisible] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-triggered animation for pillar cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPillarsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (pillarsRef.current) observer.observe(pillarsRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay failed, user will need to click to play
        });
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const benefitItems = [
    {
      icon: Heart,
      title: 'No Fitness Requirements',
      description: 'Start exactly where you are. No experience necessary.',
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Welcome just as you are. No judgement, just mutual encouragement.',
    },
    {
      icon: Zap,
      title: 'Actively Recovering',
      description: 'Specifically designed for people overcoming addiction and substance abuse.',
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/manus-storage/background-music_8e97b11b.mp3"
        loop
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
      />

      {/* Music Control Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Toggle background music"
        title={isMusicPlaying ? 'Mute music' : 'Play music'}
      >
        {isMusicPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663278944651/gYriuhwEEpdduRls.webp"
              alt="The Community Boxing Gym"
              className="h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-12 ml-auto">
            <Button className="bg-green-500 hover:bg-green-600 text-white">Sign Up</Button>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-white hover:text-green-300 transition-colors">
                About
              </a>
              <a href="#benefits" className="text-white hover:text-green-300 transition-colors">
                Benefits
              </a>
              <a href="#contact" className="text-white hover:text-green-300 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/manus-storage/212393_medium_af82b203.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white animate-gold-sparkle">
            Step Into New Possibilities
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed text-white">
            Join our free Nordic Walking sessions in partnership with Turning Point. A new way to move forward, at your own pace, in the fresh air.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Join Our First Walk
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Partnership & Trust Section */}
      <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Supported by 60 Years of Experience
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This session is run by <strong>The Community Boxing Gym Leicester</strong> in proud partnership with <strong>Turning Point</strong>. For 60 years, Turning Point has been a trusted name people rely on to support them in improving their own lives.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                They understand that every person is equally important, and we bring that same compassionate, non judgemental approach to every walk. With <strong>96% of their regulated services rated Good or Outstanding</strong>, you know you are in safe hands.
              </p>
              <div className="flex gap-6 pt-8 justify-center md:justify-start items-center">
              <img
                src="/manus-storage/turning-point-logo_ca60529d.png"
                alt="Turning Point"
                className="h-28 w-auto"
              />
                <img
                  src="/manus-storage/community-boxing-gym-logo-alt_0553e64d.webp"
                  alt="Community Boxing Gym"
                  className="h-28 w-auto"
                />
              </div>
            </div>
            <div className="animate-fade-in-right">
              {/* Multi-size Photo Grid Layout */}
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Large image - top left, spans 2 rows */}
                <div className="row-span-2">
                  <img
                    src="/manus-storage/turning-point-team-discussion_f2eb9edb.png"
                    alt="Team discussion and collaboration"
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </div>
                
                {/* Top right - small image */}
                <div>
                  <img
                    src="/manus-storage/turning-point-man-smiling_b7983dbd.png"
                    alt="Community member smiling"
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </div>
                
                {/* Bottom right - medium image */}
                <div>
                  <img
                    src="/manus-storage/turning-point-no-one-recovers-alone_3ee16477.png"
                    alt="No one recovers alone - community support message"
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Secondary smaller image below */}
              <div className="mt-4">
                <img
                  src="/manus-storage/turning-point-contemplation_b660781d.jpg"
                  alt="Moment of reflection and hope"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left order-2 md:order-1">
              <img
                src="/manus-storage/lechenie-narkomanii-freedom-1886402_1920_c55ce1fe.jpg"
                alt="Freedom and hope"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="animate-fade-in-right order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                If You Are Ready To Make A Change...
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We know that <strong>overcoming addiction or substance use can feel like an uphill battle.</strong> There are moments when life feels out of control, or you might not know where else to turn.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you are feeling a reliance on alcohol, navigating mental health challenges, or <strong>simply needing to develop new personal resources, </strong>we are here to help you find a different path forward.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand that substance use and mental health are often deeply connected. <strong>Our sessions are designed to support your overall wellbeing, addressing both the physical and emotional </strong>sides of your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INWA 10 Step Method & Nordic Walking Education Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">
            The INWA 10 Step Method & Nordic Walking Science
          </h2>

          {/* INWA Credentials Banner */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 rounded-lg p-8 md:p-12 mb-16 shadow-lg animate-fade-in-up">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left: Certification Text */}
              <div className="md:col-span-1">
                <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
                  Our instructors are <span className="text-yellow-200">certified by INWA</span>
                </p>
              </div>

              {/* Center: INWA Logo */}
              <div className="md:col-span-1 flex justify-center">
                <img 
                  src="/manus-storage/INWALOGOINS2026Catherine_f747a27d.png" 
                  alt="INWA International Nordic Walking Association" 
                  className="h-40 w-auto drop-shadow-lg"
                />
              </div>

              {/* Right: Method Text */}
              <div className="md:col-span-1 text-right">
                <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
                  We deliver the <span className="text-yellow-200">INWA 10 Step Method™</span>
                </p>
              </div>
            </div>
            
            {/* Subtitle */}
            <div className="mt-6 pt-6 border-t border-white/30 text-center">
              <p className="text-white/90 text-sm md:text-base">
                The internationally recognised standard for Nordic Walking instruction
              </p>
            </div>
          </div>

          {/* What is Nordic Walking */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left">
              <img src="/manus-storage/NW_3999_e5d66f66.jpg" alt="Nordic Walking in Forest" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="animate-fade-in-right space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What is Nordic Walking?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nordic Walking is a full body cardiovascular activity that uses specially designed poles to engage your upper body while walking. Unlike regular walking or hiking sticks, Nordic Walking poles are ergonomically engineered to propel you forward through a rhythmic, biomechanically correct technique.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The poles are not for balance they are active propulsion tools that activate approximately 90% of your body's muscles, making it one of the most efficient whole body exercises available.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-3">Nordic Walking vs Running</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Impact:</strong> 50% less impact on joints than running</li>
                  <li><strong>Muscle Engagement:</strong> 90% of body muscles vs 50% in running</li>
                  <li><strong>Accessibility:</strong> Suitable for all ages and fitness levels</li>
                  <li><strong>Sustainability:</strong> Lower injury risk, longer term adherence</li>
                  <li><strong>Recovery Friendly:</strong> Gentle on the body while building strength</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Muscle Groups Engaged */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 md:p-12 rounded-lg mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">90% Body Muscle Activation: Key Muscle Groups</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Upper Body (Pole Engagement)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Deltoids (Shoulders):</strong> Primary drivers of pole propulsion</li>
                  <li><strong>Triceps:</strong> Extend arms during pole push-off</li>
                  <li><strong>Pectoralis Major (Chest):</strong> Stabilises upper body during movement</li>
                  <li><strong>Latissimus Dorsi (Lats):</strong> Generates power in pulling phase</li>
                  <li><strong>Rhomboids & Trapezius (Upper Back):</strong> Maintain posture and stability</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Core & Lower Body (Locomotion)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Rectus Abdominis & Obliques (Core):</strong> Stabilise trunk during movement</li>
                  <li><strong>Erector Spinae (Lower Back):</strong> Support spinal alignment</li>
                  <li><strong>Quadriceps:</strong> Drive forward leg extension</li>
                  <li><strong>Hamstrings & Glutes:</strong> Power hip extension and propulsion</li>
                  <li><strong>Gastrocnemius & Soleus (Calves):</strong> Provide push-off force</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-center italic">
              This coordinated engagement of upper and lower body creates a synergistic effect, improving cardiovascular fitness, muscular endurance, and metabolic efficiency simultaneously.
            </p>
          </div>

          {/* Session Structure */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Strides of Harmony Session Structure</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
                <div className="text-3xl font-bold text-orange-500 mb-2">1</div>
                <h4 className="font-bold text-gray-900 mb-2">Warm Up</h4>
                <p className="text-sm text-gray-700">Dynamic stretching and mobility work to prepare joints and muscles for Nordic Walking technique.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                <div className="text-3xl font-bold text-blue-500 mb-2">2</div>
                <h4 className="font-bold text-gray-900 mb-2">Technique Instruction</h4>
                <p className="text-sm text-gray-700">INWA 10 Step Method™ coaching to ensure correct pole grip, arm swing, and body positioning.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
                <div className="text-3xl font-bold text-green-500 mb-2">3</div>
                <h4 className="font-bold text-gray-900 mb-2">Main Walk</h4>
                <p className="text-sm text-gray-700">Guided outdoor Nordic Walking session at a sustainable pace, building cardiovascular fitness and endurance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
                <div className="text-3xl font-bold text-purple-500 mb-2">4</div>
                <h4 className="font-bold text-gray-900 mb-2">Cool Down</h4>
                <p className="text-sm text-gray-700">Gentle walking and static stretching to lower heart rate and improve flexibility.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
                <div className="text-3xl font-bold text-red-500 mb-2">5</div>
                <h4 className="font-bold text-gray-900 mb-2">Social Time</h4>
                <p className="text-sm text-gray-700">Connect with the group over hot or cold drinks (seasonal) in a supportive, judgment free environment.</p>
              </div>
            </div>
          </div>

          {/* INWA 10 Step Method */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 md:p-12 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The INWA 10 Step Method™</h3>
            <p className="text-gray-700 mb-6 text-center">
              Our instructors follow the internationally recognised INWA 10 Step Method™, a systematic approach to teaching Nordic Walking technique:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Posture</h4>
                    <p className="text-sm text-gray-700">Establish correct body alignment and neutral spine positioning</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Lean</h4>
                    <p className="text-sm text-gray-700">Slight forward lean from ankles to engage core and prepare for propulsion</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Walk</h4>
                    <p className="text-sm text-gray-700">Natural walking gait with coordinated leg movement</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Rotate</h4>
                    <p className="text-sm text-gray-700">Rotate torso and shoulders to engage upper body in the movement</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Drag</h4>
                    <p className="text-sm text-gray-700">Drag poles backward along the ground in preparation for placement</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">6</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Place</h4>
                    <p className="text-sm text-gray-700">Place poles firmly on the ground at the correct angle and timing</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">7</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Push</h4>
                    <p className="text-sm text-gray-700">Push poles backward to propel body forward with power</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">8</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Extend Fully</h4>
                    <p className="text-sm text-gray-700">Extend arms fully behind body to maximise propulsion force</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">9</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Release Actively</h4>
                    <p className="text-sm text-gray-700">Release poles with active finger extension to prepare for next swing</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">10</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Swing Forwards</h4>
                    <p className="text-sm text-gray-700">Swing poles forward in rhythm with opposite leg for continuous propulsion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section - Transformation & New Beginning */}
      <section className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/recovery2_8c891499.png"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-900/75 to-gray-900/90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Discover the Power of Nordic Walking
            </h2>
            <p className="text-xl md:text-2xl text-green-300 font-semibold max-w-3xl mx-auto">
              <span className="animate-jiggle">This is not just exercise. This is your turning point.</span>
            </p>
          </div>

          {/* Powerful opening statement */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center font-light">
              We know what it took to get here. The sleepless nights. The broken promises you made to yourself. The weight of a life that felt like it belonged to someone else. We know because we have walked that road too.
            </p>
          </div>

          {/* Two-column: Image + Powerful Text */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="animate-fade-in-left">
              <img
                src="/manus-storage/recovery_2d0371e5.png"
                alt="People helping each other climb - community support in recovery"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="animate-fade-in-right space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Today, you get to choose<br />
                <span className="text-green-400">a different path.</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Not tomorrow. Not next week. Not when you feel ready because that day may never come if you keep waiting. Right now, in this moment, you have the power to decide that the old version of you no longer gets to write your story.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Strides of Harmony exists for one reason: To give you a genuine, tangible, life changing opportunity to step away from everything that held you back and step into the person you were always meant to become.
              </p>
            </div>
          </div>

          {/* Three powerful pillars */}
          <div ref={pillarsRef} className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 - Leave It Behind */}
            <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-default ${pillarsVisible ? 'animate-slam-in-left' : 'opacity-0'}`} style={{ animationDelay: pillarsVisible ? '0s' : '0s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-green">
                {/* Unlink = broken chains, freedom */}
                <Unlink className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h4 className="text-2xl font-black text-white mb-3 tracking-tight">Leave It Behind</h4>
              <p className="text-gray-300 leading-relaxed">
                Every step you take with us is a step away from the life that no longer serves you. The past does not own you. Your recovery is proof of that.
              </p>
            </div>

            {/* Card 2 - Rebuild Yourself */}
            <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-default ${pillarsVisible ? 'animate-slam-in-up' : 'opacity-0'}`} style={{ animationDelay: pillarsVisible ? '0.15s' : '0s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-orange">
                {/* Flame = transformation, rising, burning away the old */}
                <Flame className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h4 className="text-2xl font-black text-white mb-3 tracking-tight">Rebuild Yourself</h4>
              <p className="text-gray-300 leading-relaxed">
                Your recovery deserves more than survival. It deserves thriving. Nordic Walking rebuilds your body, your confidence, and your belief that you are capable of extraordinary things.
              </p>
            </div>

            {/* Card 3 - Never Walk Alone */}
            <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-default ${pillarsVisible ? 'animate-slam-in-right' : 'opacity-0'}`} style={{ animationDelay: pillarsVisible ? '0.3s' : '0s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-blue">
                {/* HeartHandshake = solidarity, community, never alone */}
                <HeartHandshake className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h4 className="text-2xl font-black text-white mb-3 tracking-tight">Never Walk Alone</h4>
              <p className="text-gray-300 leading-relaxed">
                You are not alone in this. You are surrounded by people who understand your journey, who will lift you when you stumble, and who will celebrate every single victory with you.
              </p>
            </div>
          </div>

          {/* Urgent call-to-action */}
          <div className="text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 border border-green-400/30 rounded-2xl p-10 max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                This is YOUR moment. Do not let it pass.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                You have fought harder battles than this. You have survived things that would have broken most people. Now it is time to stop surviving and START living. Take this first step with us and discover who you become when you finally let go.
              </p>
              <a
                href="#signup"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-300"
              >
                Take Your First Step Now
              </a>
              <p className="text-green-300 mt-4 text-sm font-medium">
                Free sessions - Every Week - You Matter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              This Walk Is For You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <img src="/manus-storage/pasted_file_zNR3RJ_image_6cb40168.png" alt="No Fitness Requirements" className="w-full h-48 object-cover" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Fitness Requirements</h3>
                <p className="text-gray-700">Start exactly where you are. No experience necessary.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <img src="/manus-storage/supportive-community_945ad2d2.png" alt="Supportive Community" className="w-full h-48 object-cover" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Supportive Community</h3>
                <p className="text-gray-700">Welcome just as you are. No judgement, just mutual encouragement.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img src="/manus-storage/actively-recovering_30269f96.png" alt="Actively Recovering" className="w-full h-48 object-cover" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Actively Recovering</h3>
                <p className="text-gray-700">Specifically designed for people overcoming addiction and substance use.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 animate-fade-in-up">
            <p className="text-lg text-gray-800 leading-relaxed text-center">
              <strong>This session is specifically aimed at people who are actively trying to overcome addictions and substance abuse.</strong> There are no fitness requirements, and you do not need any experience. You are welcome just as you are. Our goal is to provide a supportive environment where you can focus on your wellbeing, connect with others who understand your journey, and take positive steps forward in a safe, judgement free space.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What to Expect on a Session
            </h2>
          </div>

          {/* Vibrant Gradient Frame Layout */}
          <div className="space-y-8">
            {/* Frame 1: Warm Welcome - Orange to Yellow Gradient */}
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200 p-1 rounded-2xl shadow-xl">
                <div className="bg-white rounded-2xl p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Warm Welcome</h3>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        You will be greeted by a supportive community of people who have been in similar situations. No judgment, no pressure just genuine connection from day one.
                      </p>
                    </div>
                    <div className="order-1 md:order-2">
                      <img
                        src="/manus-storage/turning_point_nordic_walking_03_two_walkers_bfed241e.png"
                        alt="Warm welcome - two Nordic walkers in conversation"
                        className="rounded-xl shadow-md w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frame 2: Expert Guidance - Blue to Teal Gradient */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-300 p-1 rounded-2xl shadow-xl">
                <div className="bg-white rounded-2xl p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <img
                        src="/manus-storage/turning_point_nordic_walking_02_small_group_89a43d53.png"
                        alt="Expert guidance - small group Nordic walking together"
                        className="rounded-xl shadow-md w-full h-auto object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Expert Guidance</h3>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        INWA certified instructors guide you through every step of the INWA 10 Step Method™, at your own pace. Technique is refined progressively, never rushed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frame 3: Celebrate Progress - Green to Emerald Gradient */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-green-400 via-emerald-400 to-teal-500 p-1 rounded-2xl shadow-xl">
                <div className="bg-white rounded-2xl p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Celebrate Progress</h3>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        It is about progress, not perfection. Every small victory every step, every breath, every moment of connection is celebrated together as a community.
                      </p>
                    </div>
                    <div className="order-1 md:order-2">
                      <img
                        src="/manus-storage/group_chat_nordic_walking_clean_aba79c89.png"
                        alt="Celebrate progress - group chatting and connecting"
                        className="rounded-xl shadow-md w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Deep-Dive Section */}
      <section id="benefits" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits of Joining Strides of Harmony
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              When you join our Nordic Walking sessions, you gain more than just exercise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Mental Health & Resilience */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md animate-fade-in-up">
              <img src="/manus-storage/mental-health-reflection_5c00c0b8.jpg" alt="Mental Health Reflection" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Walk Your Way to a Clearer Mind</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Physical activity is a proven way to boost mental wellbeing. Nordic walking combines rhythmic movement with being outdoors, which can help reduce anxiety, improve sleep, and lift your mood.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This is not just about getting fit, it is about building the resilience you need to navigate life challenges. You will learn to focus on the present moment, one step at a time.
              </p>
            </div>

            {/* Community & Connection */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-lg shadow-md animate-fade-in-up">
              <img src="/manus-storage/community-support_4d495f0c.jpg" alt="Community Support" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Your Tribe, Walk With People Who Get It</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Addiction and recovery can feel isolating. Our sessions connect you with a supportive community of peers who are on a similar journey.
              </p>
              <p className="text-gray-700 leading-relaxed">
                There is no judgement, just mutual encouragement. Sharing a walk is a natural way to build friendships, reduce loneliness, and feel part of something positive.
              </p>
            </div>

            {/* Routine & Structure */}
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-lg shadow-md animate-fade-in-up">
              <img src="/manus-storage/healing-growth_f75f4dd9.jpg" alt="Healing and Growth" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Build a Healthy Routine That Sticks</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Creating structure is a vital part of recovery. Our regular weekly sessions give you a consistent, positive commitment to look forward to.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It is a gentle but powerful way to rebuild discipline and self care into your life. By showing up for yourself each week, you are reinforcing the habits that lead to lasting change.
              </p>
            </div>

            {/* Confidence & Self-Esteem */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-lg shadow-md animate-fade-in-up">
              <img src="/manus-storage/hope-light_24ac7f0a.jpg" alt="Hope and Light" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rediscover Your Strength, Inside and Out</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                There is a profound sense of achievement that comes from pushing your body and completing a walk. As your fitness improves, so will your self confidence and self worth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You will prove to yourself that you are capable of setting goals and reaching them. This renewed belief in your own abilities is a powerful tool that extends far beyond the walking track.
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 md:p-12 rounded-lg shadow-lg animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">The Benefits Go Far Beyond the Walk</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Zap className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">A Clearer Mind</p>
                  <p className="text-blue-50">Reduce stress and build resilience with every step.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Real Connection</p>
                  <p className="text-blue-50">Walk alongside people who understand your journey.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Calendar className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">A New Routine</p>
                  <p className="text-blue-50">Create healthy structure and commitment in your week.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Heart className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Growing Confidence</p>
                  <p className="text-blue-50">Rediscover your inner strength and self belief.</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-8 text-lg font-semibold">
              Every step forward is a win, and we will be there to celebrate each one with you.
            </p>
          </div>
        </div>
      </section>

      {/* More Than Just a Walk Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left flex flex-col items-center gap-6">
              <img
                src="/manus-storage/community-celebration-victory_697a72dd.png"
                alt="Diverse community celebrating together in Victoria Park Leicester with Nordic walking poles"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <img
                src="/manus-storage/community_boxing_gym_logo_transparent_c2eb2468.png"
                alt="The Community Boxing Gym & Turning Point Logo"
                className="w-40 h-40 object-contain drop-shadow-md"
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                More Than Just a Walk
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Nordic Walking sessions are just one <strong>part of a bigger support network.</strong> Like all Turning Point services, we encourage you to move forward at your own pace, whether that is on our group walks or through additional support.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                You can also access help <strong>online, over the phone, or one to one</strong>—whatever suits you best.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We also recognise that mental health and substance use are deeply connected. That is why our approach is holistic, <strong>supporting your overall wellbeing and resilience every step of the way.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Do not Walk Alone, Join Us</h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            You do not have to face this alone. Take the next step and come walk with us. It is free and open to everyone.
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-7 rounded-lg font-bold transition-all duration-200 hover:shadow-xl hover:scale-105"
          >
            Sign Up for a Session
          </Button>
          <p className="text-lg mt-6 text-blue-100">
            Start your journey toward a brighter future with The Community Boxing Gym Leicester and Turning Point.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know before taking your first step with us.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What if I have never Nordic walked before?",
                a: "Absolutely no experience is needed. Every single person who joins Strides of Harmony starts from scratch. Our INWA certified instructors will guide you through the INWA 10 Step Method™ from the very beginning, step by step, at your own pace. You will be walking with confidence before you know it."
              },
              {
                q: "What should I wear?",
                a: "You can come in absolutely anything you feel comfortable in. There is no dress code, no special kit required, and no judgement. Whether that is jeans and a hoodie, a tracksuit, or full walking gear — if you are comfortable, you are dressed right. The only thing we recommend is comfortable footwear with a good grip, such as trainers or walking shoes."
              },
              {
                q: "Do I need to buy my own poles?",
                a: "No. We provide all the Nordic Walking poles you need for every session. You do not need to purchase anything. Just show up and we will take care of the rest."
              },
              {
                q: "Are there any age restrictions?",
                a: "Strides of Harmony is open to adults of all ages. Whether you are in your 20s or your 70s, Nordic Walking is designed to be accessible and beneficial at every stage of life. Our sessions are adapted to suit all fitness levels and abilities."
              },
              {
                q: "Is this only for people in recovery?",
                a: "While Strides of Harmony is specifically designed with the recovery community in mind, it is also open to anyone facing barriers to traditional fitness — whether physical, emotional, social, or financial. Everyone is welcome. The only requirement is a willingness to show up."
              },
              {
                q: "Is it really free?",
                a: "Yes. Completely free. Every session, every week. There are no hidden costs, no membership fees, and no commitment required. Strides of Harmony is funded to be accessible to everyone, regardless of financial circumstances."
              },
              {
                q: "What happens at a typical session?",
                a: "Each session follows a structured format: a dynamic warm up to prepare your body, technique instruction using the INWA 10 Step Method™, a main Nordic Walking session at a comfortable pace, a cool down with stretching, and social time with hot or cold drinks depending on the time of year. Sessions are supportive, relaxed, and community focused."
              },
              {
                q: "What if I have a health condition or disability?",
                a: "Please let us know before your first session and we will do everything we can to accommodate you. Nordic Walking is inherently low impact and gentle on joints, making it suitable for many health conditions. We always recommend consulting your GP if you have any concerns, but do not let uncertainty stop you from reaching out."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
                <button
                  className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 group"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  aria-expanded={faqOpen === i}
                >
                  <span className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-200">{item.q}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center transition-all duration-300 ${faqOpen === i ? 'bg-green-600 rotate-180' : 'group-hover:bg-green-200'}`}>
                    <ChevronDown className={`w-5 h-5 transition-colors duration-200 ${faqOpen === i ? 'text-white' : 'text-green-700'}`} />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: faqOpen === i ? '400px' : '0px', opacity: faqOpen === i ? 1 : 0, transition: 'max-height 0.4s cubic-bezier(0.23,1,0.32,1), opacity 0.3s ease' }}
                >
                  <p className="px-8 pb-7 text-gray-600 leading-relaxed text-base">{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
            <p className="text-gray-700 font-medium text-lg mb-2">Still have a question?</p>
            <p className="text-gray-500">Reach out to us directly, we are always happy to help.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* About */}
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <p className="text-gray-400 leading-relaxed">
                Strides of Harmony is a free Nordic Walking programme run by The Community Boxing Gym Leicester in partnership with Turning Point.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h3 className="text-lg font-bold mb-4">Our Partners</h3>
              <div className="space-y-3">
                <p className="text-gray-400">Turning Point</p>
                <p className="text-gray-400">I.N.W.A Nordic Walking</p>
                <p className="text-gray-400">NHS - Fit For The Future</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>Leicester, UK</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-5 h-5" />
                  {showPhone ? (
                    <a href="tel:07505520833" className="hover:text-green-500 transition-colors">
                      07505520833
                    </a>
                  ) : (
                    <button
                      onClick={() => setShowPhone(true)}
                      className="text-green-500 hover:text-green-400 transition-colors font-semibold underline"
                    >
                      Press for Phone
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-5 h-5" />
                  {showEmail ? (
                    <a href="mailto:TheCommunityBoxingGym@gmail.com" className="hover:text-green-500 transition-colors">
                      TheCommunityBoxingGym@gmail.com
                    </a>
                  ) : (
                    <button
                      onClick={() => setShowEmail(true)}
                      className="text-green-500 hover:text-green-400 transition-colors font-semibold underline"
                    >
                      Press for Email
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="border-t border-gray-800 pt-12 mb-8">
            <p className="text-gray-400 text-center mb-6">Proud partners and supporters</p>
            <div className="flex flex-wrap justify-center items-center gap-8 w-full">
              <img
                src="/manus-storage/turning-point-logo_ca60529d.png"
                alt="Turning Point"
                className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity"
              />
              <img
                src="/manus-storage/pasted_file_5NowFq_image_93fd3bec.png"
                alt="International Nordic Walking Association"
                className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity"
              />
              <img
                src="/manus-storage/ChatGPTImageJul1,2026,07_51_14PM_38c56976.webp"
                alt="NHS Fit for the Future"
                className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Strides of Harmony. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
