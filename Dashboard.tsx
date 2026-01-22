import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, PieChart, Bell, Settings, LogOut, Plus, TrendingDown, DollarSign, CreditCard } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      navigate('/login');
      return;
    }
    setUsername(storedUsername);

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const greeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
      setCurrentTime(greeting);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                BudgetWise
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Settings className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden md:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {currentTime}, <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">{username}!</span>
          </h1>
          <p className="text-gray-600 text-lg">Here's your financial overview for today</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: 'Total Balance',
              amount: '$12,458.50',
              change: '+12.5%',
              positive: true,
              icon: DollarSign,
              color: 'from-blue-500 to-blue-600'
            },
            {
              title: 'Monthly Income',
              amount: '$5,420.00',
              change: '+8.2%',
              positive: true,
              icon: TrendingUp,
              color: 'from-teal-500 to-teal-600'
            },
            {
              title: 'Monthly Expenses',
              amount: '$3,280.00',
              change: '-5.4%',
              positive: true,
              icon: TrendingDown,
              color: 'from-blue-600 to-teal-500'
            },
            {
              title: 'Savings',
              amount: '$2,140.00',
              change: '+23.1%',
              positive: true,
              icon: CreditCard,
              color: 'from-teal-600 to-blue-500'
            }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-on-scroll opacity-0 translate-y-10"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-semibold ${stat.positive ? 'text-teal-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.amount}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg animate-on-scroll opacity-0 translate-y-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Spending Trends</h2>
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-64 flex items-end justify-around gap-4">
              {[65, 80, 45, 90, 70, 85, 60].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-blue-600 to-teal-400 rounded-t-lg transition-all duration-1000 hover:opacity-80 cursor-pointer animate-bar"
                    style={{height: `${height}%`, animationDelay: `${index * 0.1}s`}}
                  ></div>
                  <span className="text-xs text-gray-600">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg animate-on-scroll opacity-0 translate-y-10" style={{animationDelay: '0.1s'}}>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Budget Overview</h2>
            <div className="space-y-6">
              {[
                { category: 'Food & Dining', spent: 840, budget: 1000, color: 'from-blue-500 to-blue-600' },
                { category: 'Transportation', spent: 520, budget: 600, color: 'from-teal-500 to-teal-600' },
                { category: 'Shopping', spent: 680, budget: 800, color: 'from-blue-600 to-teal-500' },
                { category: 'Entertainment', spent: 320, budget: 400, color: 'from-teal-600 to-blue-500' }
              ].map((item, index) => {
                const percentage = (item.spent / item.budget) * 100;
                return (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{item.category}</span>
                      <span className="text-sm font-semibold text-gray-900">
                        ${item.spent} / ${item.budget}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000`}
                        style={{width: `${percentage}%`}}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg animate-on-scroll opacity-0 translate-y-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Starbucks Coffee', category: 'Food & Dining', amount: '-$12.50', date: '2 hours ago', icon: '☕' },
                { name: 'Uber Ride', category: 'Transportation', amount: '-$18.75', date: '5 hours ago', icon: '🚗' },
                { name: 'Amazon Purchase', category: 'Shopping', amount: '-$45.99', date: 'Yesterday', icon: '📦' },
                { name: 'Salary Deposit', category: 'Income', amount: '+$3,200.00', date: '2 days ago', icon: '💰', positive: true },
                { name: 'Netflix Subscription', category: 'Entertainment', amount: '-$15.99', date: '3 days ago', icon: '🎬' }
              ].map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {transaction.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{transaction.name}</p>
                      <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
                    </div>
                  </div>
                  <span className={`font-bold text-lg ${transaction.positive ? 'text-teal-600' : 'text-gray-900'}`}>
                    {transaction.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg animate-on-scroll opacity-0 translate-y-10" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">AI Insights</h2>
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Great Job!</p>
                    <p className="text-sm text-gray-700">
                      You've saved 15% more this month compared to last month. Keep up the good work!
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border-l-4 border-teal-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PieChart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Spending Pattern</p>
                    <p className="text-sm text-gray-700">
                      Your food expenses are 20% higher than usual. Consider meal planning to save more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Upcoming Bills</p>
                    <p className="text-sm text-gray-700">
                      You have 3 bills due in the next 5 days totaling $245.50. Make sure you have enough balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" />
              Add New Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}