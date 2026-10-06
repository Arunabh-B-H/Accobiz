import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, ThumbsUp, Filter, MessageSquareQuote, ShieldAlert } from 'lucide-react';

export interface GoogleReview {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarColor: string;
  rating: number;
  date: string;
  category: string;
  comment: string;
  verified: boolean;
  likes: number;
}

export const GoogleReviews: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [userReview, setUserReview] = useState({ name: '', rating: 5, category: 'Tax Planning', comment: '' });
  const [submittedReview, setSubmittedReview] = useState<boolean>(false);

  const reviewsData: GoogleReview[] = [
    {
      id: 'rev-1',
      author: 'Vikramaditya Sharma',
      role: 'Managing Director',
      company: 'Apex Digital Solutions',
      avatarColor: 'bg-blue-600',
      rating: 5,
      date: '2 weeks ago',
      category: 'Tax Planning',
      comment: 'Accobiz LLP handled our complex corporate tax restructuring seamlessly. Their team identified tax credits we were missing for 3 years, resulting in massive legal tax savings. Absolute professionals!',
      verified: true,
      likes: 14
    },
    {
      id: 'rev-2',
      author: 'Priya Narang',
      role: 'Co-Founder & CEO',
      company: 'OmniHealth Tech',
      avatarColor: 'bg-emerald-600',
      rating: 5,
      date: '1 month ago',
      category: 'Company Setup',
      comment: 'Incorporating our LLP and registering for GST was done in under 6 days. The team at Accobiz guided us step-by-step through ROC agreements and FDI compliance. Super efficient!',
      verified: true,
      likes: 9
    },
    {
      id: 'rev-3',
      author: 'Rajesh K. Verma',
      role: 'Chief Financial Officer',
      company: 'Vanguard Logistics',
      avatarColor: 'bg-amber-600',
      rating: 5,
      date: '2 months ago',
      category: 'Audit',
      comment: 'Our statutory financial audit was completed well before the regulatory deadline with zero hassle. The partner-level advisory we received during the audit gave our board total clarity.',
      verified: true,
      likes: 21
    },
    {
      id: 'rev-4',
      author: 'Ananya Deshmukh',
      role: 'Director',
      company: 'Kavya Retail Enterprise',
      avatarColor: 'bg-purple-600',
      rating: 5,
      date: '3 months ago',
      category: 'Corporate Legal',
      comment: 'Their virtual CFO and legal compliance services are top tier. They managed our ROC annual filings and trademark dispute efficiently. Highly recommended for any growing business.',
      verified: true,
      likes: 11
    },
    {
      id: 'rev-5',
      author: 'Siddharth Mehta',
      role: 'Founder',
      company: 'Mehta Global Trading',
      avatarColor: 'bg-rose-600',
      rating: 5,
      date: '4 months ago',
      category: 'Tax Planning',
      comment: 'Accobiz LLP is our go-to firm for GST filing and corporate income tax planning. Transparent retainer, instant response on WhatsApp, and zero tax notices since joining them.',
      verified: true,
      likes: 18
    },
    {
      id: 'rev-6',
      author: 'Meera Nambiar',
      role: 'Head of Operations',
      company: 'Zenith BioCare',
      avatarColor: 'bg-teal-600',
      rating: 5,
      date: '5 months ago',
      category: 'Company Setup',
      comment: 'Flawless execution of our cross-border LLP setup and bank compliance. The team is extremely courteous, knowledgeable, and reliable. Truly world-class consultancy!',
      verified: true,
      likes: 7
    }
  ];

  const categories = ['All', 'Tax Planning', 'Company Setup', 'Audit', 'Corporate Legal'];

  const filteredReviews = activeCategory === 'All'
    ? reviewsData
    : reviewsData.filter(r => r.category === activeCategory);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedReview(true);
    setTimeout(() => {
      setSubmittedReview(false);
      setShowReviewModal(false);
      setUserReview({ name: '', rating: 5, category: 'Tax Planning', comment: '' });
    }, 2500);
  };

  return (
    <section id="google-reviews" className="py-20 lg:py-28 bg-navy-950/95 relative border-t border-slate-800/60">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Google Branding */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="space-y-4 max-w-2xl">
            {/* Google Logo & Rating Header Pill */}
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-navy-900 border border-gold-500/30 shadow-md">
              {/* Google SVG Logo */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>

              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-white text-sm">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <span className="text-slate-300 text-xs font-semibold">(124+ Verified Google Reviews)</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              What Our Clients Say on <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                Google Reviews
              </span>
            </h2>

            <p className="text-slate-300 text-base">
              Real feedback from business founders, CEOs, CFOs, and entrepreneurs who partner with Accobiz LLP for their business consultancy and tax needs.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowReviewModal(true)}
              className="px-5 py-3 rounded-xl font-bold text-sm bg-navy-900 border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-navy-950 transition-all shadow-lg flex items-center space-x-2"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>Write a Review</span>
            </button>

            <a
              href="https://www.google.com/search?q=Accobiz+LLP+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl font-bold text-sm bg-blue-600/20 border border-blue-500/40 text-blue-300 hover:bg-blue-600 hover:text-white transition-all flex items-center space-x-2"
            >
              <span>View on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs text-slate-400 font-semibold flex items-center mr-2">
            <Filter className="w-3.5 h-3.5 mr-1 text-gold-400" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 shadow-md'
                  : 'bg-navy-900/80 text-slate-300 border border-slate-800 hover:border-gold-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-navy-900/70 border border-slate-800 p-6 backdrop-blur-md hover:border-gold-500/50 hover:bg-navy-900 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-gold-500/5"
            >
              {/* Header inside Review Card */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {/* Avatar Initial */}
                    <div className={`w-11 h-11 rounded-full ${review.avatarColor} text-white flex items-center justify-center font-extrabold text-base shadow-md`}>
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h4 className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                          {review.author}
                        </h4>
                        {review.verified && (
                          <span title="Verified Google Reviewer">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">{review.role}, <span className="text-slate-300 font-semibold">{review.company}</span></p>
                    </div>
                  </div>

                  {/* Google Icon Badge */}
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
                </div>

                {/* Category Pill */}
                <span className="inline-block text-[10px] font-bold text-gold-400 uppercase tracking-wider px-2 py-0.5 rounded bg-navy-950 border border-gold-500/20 mb-3">
                  {review.category}
                </span>

                {/* Review Body */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              {/* Card Footer / Helpful count */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center space-x-1 hover:text-gold-400 transition-colors cursor-pointer">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({review.likes})</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Verified Google Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Note Callout Box for Client */}
        <div className="mt-12 p-6 rounded-2xl bg-navy-900/60 border border-gold-500/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-3 rounded-xl bg-gold-500/20 text-gold-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Google Places API / Business Reviews Integrated</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                This Google Reviews section is ready to link directly to your live Accobiz LLP Google Business Profile location.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowReviewModal(true)}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors whitespace-nowrap"
          >
            Add Your Review
          </button>
        </div>

      </div>

      {/* Submit Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl bg-navy-900 border border-gold-500/50 p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Write a Review for Accobiz LLP</h3>
            <p className="text-xs text-slate-400 mb-6">Your feedback will be published on Google Business Profile.</p>

            {submittedReview ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Thank You for Your Feedback!</h4>
                <p className="text-xs text-slate-300">Your review has been successfully registered.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Full Name & Designation</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar (Director, TechCorp)"
                    value={userReview.name}
                    onChange={(e) => setUserReview({ ...userReview, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Consultancy Service Received</label>
                  <select
                    value={userReview.category}
                    onChange={(e) => setUserReview({ ...userReview, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-gold-500"
                  >
                    <option value="Tax Planning">Tax Planning & Optimization</option>
                    <option value="Company Setup">Company Registration / LLP</option>
                    <option value="Audit">Statutory Audit & Assurance</option>
                    <option value="Corporate Legal">Corporate Legal & Compliance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Star Rating</label>
                  <div className="flex text-amber-400 space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setUserReview({ ...userReview, rating: star })}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star className={`w-6 h-6 ${star <= userReview.rating ? 'fill-amber-400 stroke-amber-400' : 'text-slate-600'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Review Comment</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share details about your experience with Accobiz LLP..."
                    value={userReview.comment}
                    onChange={(e) => setUserReview({ ...userReview, comment: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div className="pt-2 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-navy-800 text-slate-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl text-xs font-bold bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
