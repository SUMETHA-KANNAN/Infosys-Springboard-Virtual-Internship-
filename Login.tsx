import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Mail, Lock, User } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem('username', formData.username);
      localStorage.setItem('email', formData.email);
      navigate('/dashboard');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-teal-500 to-blue-700 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full opacity-5 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="w-12 h-12 text-white" />
            <span className="text-4xl font-bold text-white">BudgetWise</span>
          </div>
          <p className="text-white text-lg opacity-90">Welcome back! Please login to your account.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <div className="form-group">
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    required
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none text-gray-900"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none text-gray-900"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none text-gray-900"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Logging in...</span>
                </div>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                Create Account
              </a>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => navigate('/')}
              className="w-full py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-white text-sm opacity-75">
          <p>By logging in, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}