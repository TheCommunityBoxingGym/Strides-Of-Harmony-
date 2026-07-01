import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Heart, Users, Calendar, Zap, MapPin, Phone, Mail, Volume2, VolumeX } from 'lucide-react';

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
  const audioRef = useRef<HTMLAudioElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg font-semibold"
            >
              Learn More
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
                They understand that every person is equally important, and we bring that same compassionate, non-judgemental approach to every walk. With <strong>96% of their regulated services rated Good or Outstanding</strong>, you know you are in safe hands.
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
                If You are Looking to Make a Change...
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We know that <strong>overcoming addiction or substance abuse can feel like an uphill battle.</strong> There are moments when life feels out of control, or you might not know where else to turn.
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

      {/* The Solution Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover the Power of Nordic Walking
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our new outdoor "Strides Of Harmony" session is not just exercise. It's a fresh start.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Body, Low-Impact</h3>
                  <p className="text-gray-700">
                    Nordic Walking engages your core and legs while using poles to propel you forward, making it accessible for all fitness levels.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Stress Reduction</h3>
                  <p className="text-gray-700">
                    Reduce stress, improve your physical health, and clear your mind with rhythmic outdoor movement.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">At Your Own Pace</h3>
                  <p className="text-gray-700">
                    Just like your recovery, our walks are taken entirely at your own pace. There is no competition, no pressure just forward movement, step by step.
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg shadow-lg w-full h-auto"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663278944651/JXmiUcgLpmoIVyqv.mp4" type="video/mp4" />
              </video>
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
                <p className="text-gray-700">Specifically designed for people overcoming addiction and substance abuse.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 animate-fade-in-up">
            <p className="text-lg text-gray-800 leading-relaxed text-center">
              <strong>This session is specifically aimed at people who are actively trying to overcome addictions and substance abuse.</strong> There are no fitness requirements, and you do not need any experience. You are welcome just as you are. Our goal is to provide a supportive environment where you can focus on your wellbeing, connect with others who understand your journey, and take positive steps forward in a safe, judgement-free space.
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663278944651/ibhwQUzhNeGoMgqP.png"
                alt="Diverse group Nordic walking together in the park"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="animate-fade-in-right space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Warm Welcome</h3>
                  <p className="text-gray-700">
                    You will be greeted by a supportive community of people who have been in similar situations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
                  <p className="text-gray-700">
                    Trained instructors will guide you every step of the way, at your own pace.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Celebrate Progress</h3>
                  <p className="text-gray-700">
                    It is about progress, not perfection. Every small victory is celebrated together.
                  </p>
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
                This is not just about getting fit—it is about building the resilience you need to navigate life challenges. You will learn to focus on the present moment, one step at a time.
              </p>
            </div>

            {/* Community & Connection */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-lg shadow-md animate-fade-in-up">
              <img src="/manus-storage/community-support_4d495f0c.jpg" alt="Community Support" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Your Tribe – Walk With People Who Get It</h3>
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
                It is a gentle but powerful way to rebuild discipline and self-care into your life. By showing up for yourself each week, you are reinforcing the habits that lead to lasting change.
              </p>
            </div>

            {/* Confidence & Self-Esteem */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-lg shadow-md animate-fade-in-up">
              <img src="/manus-storage/hope-light_24ac7f0a.jpg" alt="Hope and Light" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rediscover Your Strength – Inside and Out</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                There is a profound sense of achievement that comes from pushing your body and completing a walk. As your fitness improves, so will your self-confidence and self-worth.
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
                  <p className="text-blue-50">Rediscover your inner strength and self-belief.</p>
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
            <div className="animate-fade-in-left">
              <img
                src="/manus-storage/community-celebration-victory_697a72dd.png"
                alt="Diverse community celebrating together in Victoria Park Leicester with Nordic walking poles"
                className="rounded-lg shadow-lg w-full h-auto"
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
                You can also access help <strong>online, over the phone, or one-to-one</strong>—whatever suits you best.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Do not Walk Alone – Join Us</h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            You do not have to face this alone. Take the next step and come walk with us. It is free, confidential, and open to everyone.
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
                <p className="text-gray-400">The Community Boxing Gym Leicester</p>
                <p className="text-gray-400">Turning Point</p>
                <p className="text-gray-400">British Nordic Walking</p>
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
                  <span>Contact us for details</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>info@stridesofharmony.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="border-t border-gray-800 pt-12 mb-8">
            <p className="text-gray-400 text-center mb-6">Proud partners and supporters</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img
                src="/manus-storage/community-boxing-gym-logo_adec7135.webp"
                alt="Community Boxing Gym"
                className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity"
              />
              <img
                src="/manus-storage/turning-point-logo_ca60529d.png"
                alt="Turning Point"
                className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity"
              />
              <img
                src="/manus-storage/british-nordic-walking-logo_51419730.png"
                alt="British Nordic Walking"
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
