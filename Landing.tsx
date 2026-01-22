import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, PieChart, Bell, Brain, ChevronRight, Check, Menu, X } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                BudgetWise
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="nav-link">How It Works</button>
              <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Login
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="nav-link text-left">Home</button>
                <button onClick={() => scrollToSection('features')} className="nav-link text-left">Features</button>
                <button onClick={() => scrollToSection('how-it-works')} className="nav-link text-left">How It Works</button>
                <button onClick={() => scrollToSection('pricing')} className="nav-link text-left">Pricing</button>
                <button onClick={() => scrollToSection('contact')} className="nav-link text-left">Contact</button>
                <button
                  onClick={() => navigate('/login')}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full hover:shadow-lg transition-all duration-300 text-center"
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-10">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Take Control of Your Money with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  AI-Powered Insights
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Smart expense tracking meets intelligent budget advice. Let AI help you understand your spending patterns and make better financial decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/login')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Start Tracking <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-10 delay-200">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-500">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Monthly Overview</h3>
                      <span className="text-sm text-teal-600 font-medium">+12.5%</span>
                    </div>
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-end justify-around p-4">
                      <div className="w-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg animate-bar" style={{height: '60%'}}></div>
                      <div className="w-16 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-lg animate-bar" style={{height: '80%', animationDelay: '0.1s'}}></div>
                      <div className="w-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg animate-bar" style={{height: '45%', animationDelay: '0.2s'}}></div>
                      <div className="w-16 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-lg animate-bar" style={{height: '90%', animationDelay: '0.3s'}}></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600">Income</p>
                        <p className="text-xl font-bold text-blue-600">$5,420</p>
                      </div>
                      <div className="bg-teal-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600">Expenses</p>
                        <p className="text-xl font-bold text-teal-600">$3,280</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for Smart Budgeting
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to master your finances
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-Driven Categorization',
                description: 'Automatically categorize expenses using machine learning for effortless tracking.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: TrendingUp,
                title: 'Smart Budget Assistant',
                description: 'Get personalized budget recommendations based on your spending patterns.',
                color: 'from-teal-500 to-teal-600'
              },
              {
                icon: PieChart,
                title: 'Visual Analytics',
                description: 'Beautiful charts and graphs that make understanding your finances simple.',
                color: 'from-blue-600 to-teal-500'
              },
              {
                icon: Bell,
                title: 'Overspending Alerts',
                description: 'Real-time notifications when you exceed your budget limits.',
                color: 'from-teal-600 to-blue-500'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card animate-on-scroll opacity-0 translate-y-10 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Create Account', description: 'Sign up in seconds with your email' },
              { step: '2', title: 'Add Expenses', description: 'Log your expenses manually or connect your bank' },
              { step: '3', title: 'Analyze Spending', description: 'View detailed insights and spending patterns' },
              { step: '4', title: 'Get AI Insights', description: 'Receive personalized budget recommendations' }
            ].map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-10 text-center"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-xl transform hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-teal-300"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dashboard Preview
            </h2>
            <p className="text-xl text-gray-600">
              See your finances at a glance
            </p>
          </div>

          <div className="max-w-5xl mx-auto animate-on-scroll opacity-0 translate-y-10">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-2xl p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <p className="text-sm text-gray-600 mb-2">Total Balance</p>
                  <p className="text-3xl font-bold text-gray-900">$2,140</p>
                  <p className="text-sm text-teal-600 mt-2">+12.5% from last month</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <p className="text-sm text-gray-600 mb-2">This Month</p>
                  <p className="text-3xl font-bold text-gray-900">$3,280</p>
                  <p className="text-sm text-blue-600 mt-2">Budget: $4,000</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <p className="text-sm text-gray-600 mb-2">Savings Goal</p>
                  <p className="text-3xl font-bold text-gray-900">68%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-blue-600 to-teal-500 h-2 rounded-full animate-progress" style={{width: '68%'}}></div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending by Category</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Food & Dining', amount: '$840', percentage: 26, color: 'from-blue-500 to-blue-600' },
                      { name: 'Transportation', amount: '$520', percentage: 16, color: 'from-teal-500 to-teal-600' },
                      { name: 'Shopping', amount: '$680', percentage: 21, color: 'from-blue-600 to-teal-500' },
                      { name: 'Bills & Utilities', amount: '$1,240', percentage: 37, color: 'from-teal-600 to-blue-500' }
                    ].map((cat, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">{cat.name}</span>
                          <span className="font-semibold text-gray-900">{cat.amount}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`bg-gradient-to-r ${cat.color} h-2 rounded-full transition-all duration-1000`} style={{width: `${cat.percentage}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Grocery Store', amount: '-$52.40', date: 'Today', icon: '🛒' },
                      { name: 'Gas Station', amount: '-$45.00', date: 'Yesterday', icon: '⛽' },
                      { name: 'Restaurant', amount: '-$68.50', date: '2 days ago', icon: '🍽️' },
                      { name: 'Salary Deposit', amount: '+$3,200', date: '3 days ago', icon: '💰' }
                    ].map((txn, idx) => (
                      <div key={idx} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center">
                            <span>{txn.icon}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{txn.name}</p>
                            <p className="text-xs text-gray-500">{txn.date}</p>
                          </div>
                        </div>
                        <span className={`font-semibold ${txn.amount.startsWith('+') ? 'text-teal-600' : 'text-gray-900'}`}>
                          {txn.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic',
                price: 'Free',
                description: 'Perfect for getting started',
                features: ['Up to 50 transactions/month', 'Basic expense categorization', 'Monthly reports', 'Email support'],
                buttonText: 'Get Started',
                popular: false
              },
              {
                name: 'Pro',
                price: '$9.99',
                period: '/month',
                description: 'For serious budgeters',
                features: ['Unlimited transactions', 'AI-powered insights', 'Advanced analytics', 'Priority support', 'Custom categories', 'Budget forecasting'],
                buttonText: 'Start Free Trial',
                popular: true
              },
              {
                name: 'Family',
                price: '$14.99',
                period: '/month',
                description: 'Perfect for families',
                features: ['Everything in Pro', 'Up to 5 user accounts', 'Shared budgets', 'Family reports', 'Dedicated account manager'],
                buttonText: 'Get Started',
                popular: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 translate-y-10 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'border-4 border-blue-500 transform scale-105' : 'hover:scale-105'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 mb-6 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:shadow-xl hover:scale-105'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}>
                  {plan.buttonText}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-teal-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center animate-on-scroll opacity-0 translate-y-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who are already managing their money smarter with BudgetWise.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-lg rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Get Started for Free <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-teal-400" />
                <span className="text-xl font-bold">BudgetWise</span>
              </div>
              <p className="text-gray-400">
                AI-powered expense tracking and budget advisory for smarter financial decisions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-500 transition-all duration-300 hover:scale-110"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BudgetWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}