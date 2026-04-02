import './App.css'
import { useState } from 'react'
import { Phone, Mail, MapPin, ChefHat, ParkingCircle, Dumbbell, Zap, Wifi, Shirt, DoorOpen, Award, Check, Smartphone } from 'lucide-react'
import heroImage from './assets/ATLNI-Twilight-1.jpg'
import exteriorImage from './assets/ATLNI-Exterior-1.jpg'
import room1 from './assets/ATLNI-Q1ST-1.jpg'
import room2 from './assets/ATLNI-Q1ST-2.jpg'
import room3 from './assets/ATLNI-Q1ST-3.jpg'
import room4 from './assets/ATLNI-Q1ST-4.jpg'
import room5 from './assets/ATLNI-Q1ST-5.jpg'
import lobby3 from './assets/ATLNI-Lobby-3.jpg'
import patio from './assets/ATLNI-Patio-1.jpg'
import constructionWorker from './assets/construction-worker.jpg'
import techProfessional from './assets/tech-professional.jpg'
import corporateTrainer from './assets/corporate-trainer.jpg'
import marriottBonvoyLogo from './assets/Marriott-Bonvoy-Logo.png'
import studioResLogo from './assets/StudioRes-logo.jpg'

function App() {
  const [stayDays, setStayDays] = useState(30)

  // Calculate savings based on number of days
  const calculateSavings = (days) => {
    const months = days / 30
    const dailySavings = 750 / 30 // $750 per month = $25 per day
    return {
      totalSavings: Math.round(dailySavings * days),
      withoutKitchen: Math.round((1500 / 30) * days),
      withKitchen: Math.round((750 / 30) * days),
      monthlySavings: 750
    }
  }

  const savings = calculateSavings(stayDays)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-start">
                <img
                  src={studioResLogo}
                  alt="StudioRes"
                  className="h-10 w-auto"
                />
                <div className="text-xs text-gray-500 mt-1">by Marriott</div>
              </div>
              <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
              <img
                src={marriottBonvoyLogo}
                alt="Marriott Bonvoy"
                className="h-10 w-auto hidden sm:block"
              />
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+14706866730" className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-[#006B7D] transition-colors">
                <Phone className="w-4 h-4" />
                <span>(470) 686-6730</span>
              </a>
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2 rounded-lg font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: '#006B7D' }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={exteriorImage} alt="StudioRes Newnan" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Home Base for<br />Newnan Project Work
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Extended-stay comfort designed for workers at major employers and data center projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1761245906298&key=CORP&dtt=true&app=resvlink"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg font-bold text-lg text-white transition-all hover:scale-105 shadow-lg text-center"
                style={{ backgroundColor: '#006B7D' }}
              >
                Book Your Extended Stay
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                Request Corporate Rates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-4" style={{ backgroundColor: '#006B7D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-lg md:text-xl font-semibold">
            🎉 Special Offer: Save 15% on Extended Stays for Project Workers
          </p>
        </div>
      </section>

      {/* Why StudioRes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Built for Extended Stays, Not Just Overnight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              StudioRes Newnan serves the growing workforce from major employers including Amazon and 
              data center developments in Coweta County
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#006B7D' }}>
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Save Money</h3>
              <p className="text-gray-600 text-lg mb-4">
                Full kitchen means real savings. Cook your own meals and save $750+ per month compared to eating out.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                <p className="text-green-800 font-semibold">Over 3 months? That's $2,250 in your pocket!</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#006B7D' }}>
                <DoorOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">More Space</h3>
              <p className="text-gray-600 text-lg">
                Studio-apartment layout with distinct living, sleeping, and kitchen zones. Not cramped hotel rooms—real living space for extended stays.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#006B7D' }}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Long-Term Ready</h3>
              <p className="text-gray-600 text-lg">
                On-site laundry, free parking, 24/7 access, and pet-friendly. Everything you need for stays of weeks and months, not just nights.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 border-2 border-gray-200">
                <img src={marriottBonvoyLogo} alt="Marriott Bonvoy" className="h-12 w-auto p-2" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Earn Rewards</h3>
              <p className="text-gray-600 text-lg">
                Stay with us for work, earn Marriott Bonvoy points, then use them for your dream vacation. Turn business trips into beach getaways!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Studio-Apartment Comfort at Smart Value Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Spacious studios with everything you need for extended stays
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img src={room2} alt="Full Kitchen" className="w-full h-80 object-cover" />
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold mb-2">Full Kitchen</h3>
                <p className="text-gray-600">Stovetop, full-size fridge, microwave, and counter space</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img src={room1} alt="Comfortable Living Space" className="w-full h-80 object-cover" />
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold mb-2">Comfortable Living Space</h3>
                <p className="text-gray-600">Queen bed(s) with separate living and work areas</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <img src={room3} alt="Room View" className="rounded-lg shadow-md hover:shadow-xl transition-shadow w-full h-64 object-cover" />
            <img src={room4} alt="Kitchen Bar" className="rounded-lg shadow-md hover:shadow-xl transition-shadow w-full h-64 object-cover" />
            <img src={room5} alt="Studio Layout" className="rounded-lg shadow-md hover:shadow-xl transition-shadow w-full h-64 object-cover" />
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Room Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Full kitchen with stovetop, refrigerator & microwave',
                'Spacious studio layout with distinct zones',
                'Comfortable queen bed(s)',
                'Work desk and seating area',
                'Modern, brand-new facility',
                'Free high-speed WiFi'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Savings Section */}
      <section className="py-20" style={{ backgroundColor: '#006B7D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Your Kitchen = Real Savings</h2>

            {/* Interactive Calculator */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur p-8 rounded-xl border-2 border-white/30">
                <h3 className="text-2xl font-bold mb-4">Calculate Your Savings</h3>
                <label className="block text-lg mb-3">How many days will you stay?</label>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={stayDays}
                      onChange={(e) => setStayDays(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-32 h-16 px-4 py-3 text-3xl font-bold text-white bg-white/20 border-2 border-white/40 rounded-lg text-center focus:outline-none focus:ring-4 focus:ring-white/50 focus:bg-white/30"
                    />
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => setStayDays(prev => prev + 1)}
                        className="w-12 h-7 bg-white/30 hover:bg-white/50 border-2 border-white/60 rounded-md flex items-center justify-center text-white font-bold text-xl transition-all hover:scale-105"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => setStayDays(prev => Math.max(1, prev - 1))}
                        className="w-12 h-7 bg-white/30 hover:bg-white/50 border-2 border-white/60 rounded-md flex items-center justify-center text-white font-bold text-xl transition-all hover:scale-105"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                  <span className="text-xl font-semibold">days</span>
                </div>
                <div className="mt-6 pt-6 border-t-2 border-white/30">
                  <div className="text-yellow-300 text-lg mb-2">Your Total Savings</div>
                  <div className="text-6xl font-bold mb-2">${savings.totalSavings.toLocaleString()}</div>
                  <div className="text-xl opacity-90">over {stayDays} days ({(stayDays/30).toFixed(1)} months)</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur p-8 rounded-xl">
                <div className="text-red-300 text-lg font-semibold mb-2">Without Kitchen (All Eating Out)</div>
                <div className="text-5xl font-bold mb-2">${savings.withoutKitchen.toLocaleString()}</div>
                <div className="text-xl">for {stayDays} days</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-xl border-4 border-white">
                <div className="text-green-300 text-lg font-semibold mb-2">With Kitchen (Cook at Home)</div>
                <div className="text-5xl font-bold mb-2">${savings.withKitchen.toLocaleString()}</div>
                <div className="text-xl">for {stayDays} days</div>
              </div>
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto bg-white/10 backdrop-blur p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">How We Calculate Your Savings</h3>
              <div className="text-left space-y-4 text-lg">
                <p className="text-xl font-bold mb-4 text-yellow-300">Without Kitchen (All Eating Out):</p>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Breakfast out (30 days × $12)</span>
                  <span className="font-bold">$360</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Lunch out (30 days × $15)</span>
                  <span className="font-bold">$450</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Dinner out (30 days × $20)</span>
                  <span className="font-bold">$600</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b-2 border-white/40">
                  <span>Snacks & beverages</span>
                  <span className="font-bold">$90</span>
                </div>
                <div className="flex justify-between items-center text-xl pt-2 pb-6">
                  <span className="font-bold">Total Monthly Cost</span>
                  <span className="font-bold text-red-300">$1,500</span>
                </div>

                <p className="text-xl font-bold mb-4 pt-6 border-t-2 border-white/40 text-green-300">With Kitchen (Cook at Home):</p>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Weekly groceries (4 weeks × $75)</span>
                  <span className="font-bold">$300</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b-2 border-white/40">
                  <span>Lunch out at work (30 days × $15)</span>
                  <span className="font-bold">$450</span>
                </div>
                <div className="flex justify-between items-center text-xl pt-2">
                  <span className="font-bold">Total Monthly Cost</span>
                  <span className="font-bold text-green-300">$750</span>
                </div>
                <p className="text-sm mt-3 text-white/80">Cook breakfast & dinner, pack some lunches, buy lunch at work</p>

                <div className="mt-6 pt-6 border-t-2 border-white bg-white/10 -mx-4 px-4 py-4 rounded-lg">
                  <div className="flex justify-between items-center text-2xl mb-4">
                    <span className="font-bold">Your Monthly Savings</span>
                    <span className="font-bold text-yellow-300">$750</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/10 p-3 rounded">
                      <div className="text-sm text-white/80 mb-1">1 Month</div>
                      <div className="text-xl font-bold">$750</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded">
                      <div className="text-sm text-white/80 mb-1">3 Months</div>
                      <div className="text-xl font-bold">$2,250</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded">
                      <div className="text-sm text-white/80 mb-1">6 Months</div>
                      <div className="text-xl font-bold">$4,500</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Everything You Need for Weeks or Months
            </h2>
            <p className="text-xl text-gray-600">
              Purpose-built amenities for extended-stay comfort
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: ChefHat, title: 'Full Kitchen', desc: 'Cook like you\'re at home' },
              { icon: ParkingCircle, title: 'Free Parking', desc: 'Long-term parking for work vehicles' },
              { icon: Shirt, title: 'On-Site Laundry', desc: 'No searching for laundromats' },
              { icon: Dumbbell, title: '24-Hour Fitness', desc: 'Work out on your schedule' },
              { icon: Zap, title: 'EV Charging', desc: 'Electric vehicle charging stations' },
              { icon: Award, title: 'Pet-Friendly', desc: 'Bring your companion ($150 one-time fee)' },
              { icon: Smartphone, title: 'Mobile Key', desc: 'Access your room with your phone' },
              { icon: Wifi, title: 'Marriott Bonvoy', desc: 'Earn points on extended stays' }
            ].map((amenity, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006B7D' }}>
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{amenity.title}</h3>
                <p className="text-gray-600 text-sm">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#006B7D' }}>
                Perfect Location in Newnan
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Convenient access to major employers and data center projects throughout Coweta County
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#006B7D] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-lg">20 Celebrate Life Parkway</div>
                    <div className="text-gray-600">Newnan, Georgia 30265</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#006B7D] flex-shrink-0 mt-1" />
                  <div>
                    <a href="tel:+14706866730" className="font-bold text-lg hover:text-[#006B7D]">(470) 686-6730</a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-xl mb-4">Nearby</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Close to major employers in Newnan
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Easy access to data center project sites
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Near I-85 and major highways
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Grocery stores and restaurants nearby
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <img src={exteriorImage} alt="StudioRes Newnan Exterior" className="rounded-xl shadow-lg w-full" />
              <img src={patio} alt="Outdoor Patio with EV Charging" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#006B7D' }}>
              Designed for Project Workers Like You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src={constructionWorker} alt="Construction Professional" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 bg-gradient-to-br from-blue-50 to-white">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#006B7D' }}>Construction Professional</h3>
                <p className="text-gray-700">
                  Working on a 3-month project? Our full kitchens, free parking for your work truck, 
                  and on-site laundry make extended stays comfortable and affordable.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src={techProfessional} alt="Tech Professional" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 bg-gradient-to-br from-purple-50 to-white">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#006B7D' }}>Tech Professional</h3>
                <p className="text-gray-700">
                  Relocating for a data center position? Stay with us for 30-90 days while you find your 
                  permanent home. Modern facilities, workspace, and Marriott rewards included.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src={corporateTrainer} alt="Corporate Trainer" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 bg-gradient-to-br from-green-50 to-white">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#006B7D' }}>Corporate Trainer</h3>
                <p className="text-gray-700">
                  Managing teams or making recurring visits? Our studio-apartment layout and smart value 
                  pricing make it easy on your budget and your routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marriott Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={lobby3} alt="Modern Lobby" className="rounded-xl shadow-lg" />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#006B7D' }}>
                The Marriott Name You Trust
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                StudioRes is Marriott's newest extended-stay brand, bringing you the quality and 
                consistency you expect with smart value pricing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-lg">Marriott Bonvoy Rewards</div>
                    <div className="text-gray-600">Earn points on extended stays for future travel</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-lg">Brand-New Property</div>
                    <div className="text-gray-600">Modern, clean, and purpose-built for extended stays</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-lg">Professional Management</div>
                    <div className="text-gray-600">Consistent quality and reliable service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Access Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#006B7D' }}>
              Business Access by Marriott Bonvoy™
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
              A comprehensive online travel program that combines an expanded booking experience with the benefits and rewards that are only available through Marriott Bonvoy®'s award-winning travel program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dI1GD2XNqRQ"
                  title="Business Access by Marriott Bonvoy Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#006B7D' }}>
                Perfect for Small to Medium-Sized Businesses
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-lg">Discounted Hotel Rates</div>
                    <div className="text-gray-600">Book Marriott Bonvoy hotels at special business rates</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-lg">Complete Travel Solutions</div>
                    <div className="text-gray-600">Book flights, rail, and rental cars in one easy-to-use platform</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-lg">Expense Management</div>
                    <div className="text-gray-600">Access live travel data and streamline business expenses</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-lg">Earn Marriott Bonvoy Points</div>
                    <div className="text-gray-600">Rewards on all your business travel bookings</div>
                  </div>
                </div>
              </div>

              <a
                href="https://mgscloud.marriott.com/mgs/marrdocs/mgs/common/salesmktgrevmgmt/toolsresources/businessaccess/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-lg font-bold text-lg text-white transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#006B7D' }}
              >
                Sign Up for Business Access
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#006B7D' }}>
            Ready to Book Your Extended Stay?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Special rates available for project workers and corporate bookings
          </p>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-8">
            <div className="text-2xl font-bold mb-4" style={{ color: '#FF6B35' }}>
              15% Off Extended Stays
            </div>
            <p className="text-gray-600 mb-6">
              Special discount for project workers staying 7 days or more
            </p>
            <a
              href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1761245906298&key=CORP&dtt=true&app=resvlink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto px-12 py-4 rounded-lg font-bold text-lg text-white transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#006B7D' }}
            >
              Book Now
            </a>
          </div>

          <div id="contact" className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200">
              <h3 className="font-bold text-xl mb-4">Corporate & Group Rates</h3>
              <p className="text-gray-600 mb-4">
                Need multiple rooms or recurring stays? Contact us for special corporate pricing.
              </p>
              <a 
                href="tel:+14706866730"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (470) 686-6730
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200">
              <h3 className="font-bold text-xl mb-4">Questions?</h3>
              <p className="text-gray-600 mb-4">
                Our team is here to help with your extended-stay needs and special requests.
              </p>
              <a
                href="mailto:sales@hotelmc.net"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#006B7D' }}>
            Common Questions from Project Workers
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What's included in the kitchen?",
                a: "Each studio includes a stovetop, full-size refrigerator, and microwave."
              },
              {
                q: "Is parking really free?",
                a: "Yes! We offer complimentary on-site parking including long-term parking for work vehicles. We also have electric vehicle charging stations available."
              },
              {
                q: "What's the pet policy?",
                a: "We're pet-friendly! There's a one-time $150 fee per stay (not per night). You can bring up to 2 pets, maximum 75 lbs each."
              },
              {
                q: "Do you offer weekly or monthly rates?",
                a: "Yes! We specialize in extended stays and offer special rates for stays of 2 weeks or more. Call us at (470) 686-6730 for extended-stay pricing."
              },
              {
                q: "Is laundry included?",
                a: "We have on-site laundry facilities available 24/7. There's a small fee per load, but it's much more convenient than finding external laundromats."
              },
              {
                q: "Can I earn Marriott points?",
                a: "Absolutely! StudioRes is part of Marriott Bonvoy, so you'll earn points on your stay that you can use for future travel."
              },
              {
                q: "Do you accommodate shift workers?",
                a: "Yes! We have 24-hour access to all facilities including the fitness center, and our design is perfect for guests on various work schedules."
              },
              {
                q: "How close are you to major employers?",
                a: "We're conveniently located in Newnan with easy access to major employers and project sites throughout Coweta County, including quick access to I-85."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-3" style={{ color: '#006B7D' }}>{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4" style={{ color: '#006B7D' }}>STUDIORES</div>
              <p className="text-gray-400 mb-4">by Marriott</p>
              <p className="text-gray-400">
                Smart Stays. Real Comfort.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>20 Celebrate Life Parkway</p>
                <p>Newnan, GA 30265</p>
                <p className="mt-4">
                  <a href="tel:+14706866730" className="hover:text-white transition-colors">
                    (470) 686-6730
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#booking" className="block text-gray-400 hover:text-white transition-colors">Book Now</a>
                <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1761245906298&key=CORP&dtt=true&app=resvlink" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                  Book on Marriott.com
                </a>
                <a href="https://www.marriott.com/loyalty.mi" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                  Marriott Bonvoy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 StudioRes Newnan. Part of Marriott International, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

