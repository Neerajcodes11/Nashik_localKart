import { createContext, useContext, useState, useEffect } from "react";

type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.findVendors': 'Find Vendors',
    'nav.listBusiness': 'List Your Business',
    'nav.login': 'Login',
    'nav.logout': 'Logout',
    'nav.profile': 'Profile',
    
    // Home page
    'home.title': 'Discover Local',
    'home.subtitle': 'Vendors Near You',
    'home.description': 'Connect with trusted local businesses in Mhasrul, Nashik. From groceries to services, support your neighborhood vendors.',
    'home.exploreVendors': 'Explore Vendors',
    'home.registerBusiness': 'Register Your Business',
    'home.whyChoose': 'Why Choose LocalConnect?',
    'home.localVendors': 'Local Vendors',
    'home.localVendorsDesc': 'Discover and support small businesses in your neighborhood',
    'home.trustedReviews': 'Trusted Reviews',
    'home.trustedReviewsDesc': 'Read genuine reviews from community members',
    'home.easyToFind': 'Easy to Find',
    'home.easyToFindDesc': 'Search by location, category, or service type',
    'home.supportCommunity': 'Support Your Local Community',
    'home.supportDesc': 'Every purchase from a local vendor helps strengthen our neighborhood economy',
    'home.startExploring': 'Start Exploring',
    
    // Vendors page
    'vendors.title': 'Find Local Vendors',
    'vendors.browse': 'Browse',
    'vendors.trustedBusinesses': 'trusted businesses in Mhasrul',
    'vendors.searchPlaceholder': 'Search vendors, services, or locations...',
    'vendors.filterCategory': 'Filter by Category',
    'vendors.showing': 'Showing',
    'vendors.vendor': 'vendor',
    'vendors.vendors': 'vendors',
    'vendors.noResults': 'No vendors found matching your search criteria',
    'vendors.open': 'Open',
    'vendors.closed': 'Closed',
    
    // Auth
    'auth.login': 'Login',
    'auth.signup': 'Sign Up',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.displayName': 'Display Name',
    'auth.phone': 'Phone Number',
    'auth.userType': 'I am a',
    'auth.customer': 'Customer',
    'auth.vendor': 'Vendor',
    'auth.loginButton': 'Login',
    'auth.signupButton': 'Create Account',
    'auth.haveAccount': 'Already have an account?',
    'auth.noAccount': "Don't have an account?",
    'auth.clickLogin': 'Click here to login',
    'auth.clickSignup': 'Click here to sign up',
    
    // Categories
    'category.groceries': 'Groceries',
    'category.electronics': 'Electronics',
    'category.food': 'Food & Dining',
    'category.hardware': 'Hardware',
    'category.services': 'Services',
    'category.healthcare': 'Healthcare',
  },
  hi: {
    // Navigation
    'nav.findVendors': 'विक्रेता खोजें',
    'nav.listBusiness': 'अपना व्यवसाय सूचीबद्ध करें',
    'nav.login': 'लॉगिन',
    'nav.logout': 'लॉगआउट',
    'nav.profile': 'प्रोफाइल',
    
    // Home page
    'home.title': 'स्थानीय खोजें',
    'home.subtitle': 'आपके पास विक्रेता',
    'home.description': 'मासरूल, नासिक में विश्वसनीय स्थानीय व्यवसायों से जुड़ें। किराने की दुकानों से लेकर सेवाओं तक, अपने पड़ोस के विक्रेताओं का समर्थन करें।',
    'home.exploreVendors': 'विक्रेताओं का अन्वेषण करें',
    'home.registerBusiness': 'अपना व्यवसाय पंजीकृत करें',
    'home.whyChoose': 'LocalConnect क्यों चुनें?',
    'home.localVendors': 'स्थानीय विक्रेता',
    'home.localVendorsDesc': 'अपने पड़ोस में छोटे व्यवसायों की खोज और समर्थन करें',
    'home.trustedReviews': 'विश्वसनीय समीक्षाएं',
    'home.trustedReviewsDesc': 'समुदाय के सदस्यों से वास्तविक समीक्षाएं पढ़ें',
    'home.easyToFind': 'खोजना आसान',
    'home.easyToFindDesc': 'स्थान, श्रेणी या सेवा प्रकार से खोजें',
    'home.supportCommunity': 'अपने स्थानीय समुदाय का समर्थन करें',
    'home.supportDesc': 'स्थानीय विक्रेता से की गई हर खरीद हमारे पड़ोस की अर्थव्यवस्था को मजबूत बनाने में मदद करती है',
    'home.startExploring': 'अन्वेषण शुरू करें',
    
    // Vendors page
    'vendors.title': 'स्थानीय विक्रेता खोजें',
    'vendors.browse': 'ब्राउज़ करें',
    'vendors.trustedBusinesses': 'मासरूल में विश्वसनीय व्यवसाय',
    'vendors.searchPlaceholder': 'विक्रेता, सेवाएं या स्थान खोजें...',
    'vendors.filterCategory': 'श्रेणी के अनुसार फ़िल्टर करें',
    'vendors.showing': 'दिखाया जा रहा है',
    'vendors.vendor': 'विक्रेता',
    'vendors.vendors': 'विक्रेताओं',
    'vendors.noResults': 'आपके खोज मानदंड से मेल खाने वाला कोई विक्रेता नहीं मिला',
    'vendors.open': 'खुला',
    'vendors.closed': 'बंद',
    
    // Auth
    'auth.login': 'लॉगिन',
    'auth.signup': 'साइन अप करें',
    'auth.email': 'ईमेल',
    'auth.password': 'पासवर्ड',
    'auth.confirmPassword': 'पासवर्ड की पुष्टि करें',
    'auth.displayName': 'नाम',
    'auth.phone': 'फ़ोन नंबर',
    'auth.userType': 'मैं हूँ',
    'auth.customer': 'ग्राहक',
    'auth.vendor': 'विक्रेता',
    'auth.loginButton': 'लॉगिन करें',
    'auth.signupButton': 'खाता बनाएं',
    'auth.haveAccount': 'पहले से खाता है?',
    'auth.noAccount': 'खाता नहीं है?',
    'auth.clickLogin': 'लॉगिन के लिए यहाँ क्लिक करें',
    'auth.clickSignup': 'साइन अप के लिए यहाँ क्लिक करें',
    
    // Categories
    'category.groceries': 'किराना',
    'category.electronics': 'इलेक्ट्रॉनिक्स',
    'category.food': 'भोजन और भोजन',
    'category.hardware': 'हार्डवेयर',
    'category.services': 'सेवाएं',
    'category.healthcare': 'स्वास्थ्य सेवा',
  },
  mr: {
    // Navigation
    'nav.findVendors': 'विक्रेते शोधा',
    'nav.listBusiness': 'तुमचा व्यवसाय सूचीबद्ध करा',
    'nav.login': 'लॉगिन',
    'nav.logout': 'लॉगआउट',
    'nav.profile': 'प्रोफाइल',
    
    // Home page
    'home.title': 'स्थानिक शोधा',
    'home.subtitle': 'तुमच्या जवळचे विक्रेते',
    'home.description': 'मासरूळ, नाशिक मधील विश्वासू स्थानिक व्यवसायांशी जोडा. किराणा दुकानांपासून सेवांपर्यंत, तुमच्या शेजारच्या विक्रेत्यांना पाठिंबा द्या।',
    'home.exploreVendors': 'विक्रेते शोधा',
    'home.registerBusiness': 'तुमचा व्यवसाय नोंदणी करा',
    'home.whyChoose': 'LocalConnect का निवडावे?',
    'home.localVendors': 'स्थानिक विक्रेते',
    'home.localVendorsDesc': 'तुमच्या शेजारातील छोट्या व्यवसायांचा शोध घ्या आणि त्यांना पाठिंबा द्या',
    'home.trustedReviews': 'विश्वासू पुनरावलोकने',
    'home.trustedReviewsDesc': 'समुदायाच्या सदस्यांकडून खरी पुनरावलोकने वाचा',
    'home.easyToFind': 'शोधणे सोपे',
    'home.easyToFindDesc': 'स्थान, श्रेणी किंवा सेवा प्रकारानुसार शोधा',
    'home.supportCommunity': 'तुमच्या स्थानिक समुदायाला पाठिंबा द्या',
    'home.supportDesc': 'स्थानिक विक्रेत्याकडून केलेली प्रत्येक खरेदी आमच्या शेजारची अर्थव्यवस्था मजबूत करण्यास मदत करते',
    'home.startExploring': 'शोध सुरू करा',
    
    // Vendors page
    'vendors.title': 'स्थानिक विक्रेते शोधा',
    'vendors.browse': 'ब्राउझ करा',
    'vendors.trustedBusinesses': 'मासरूळ मधील विश्वासू व्यवसाय',
    'vendors.searchPlaceholder': 'विक्रेते, सेवा किंवा स्थाने शोधा...',
    'vendors.filterCategory': 'श्रेणीनुसार फिल्टर करा',
    'vendors.showing': 'दाखवत आहे',
    'vendors.vendor': 'विक्रेता',
    'vendors.vendors': 'विक्रेते',
    'vendors.noResults': 'तुमच्या शोध निकषांशी जुळणारे विक्रेते आढळले नाहीत',
    'vendors.open': 'उघडे',
    'vendors.closed': 'बंद',
    
    // Auth
    'auth.login': 'लॉगिन',
    'auth.signup': 'साइन अप करा',
    'auth.email': 'ईमेल',
    'auth.password': 'पासवर्ड',
    'auth.confirmPassword': 'पासवर्ड पुष्टी करा',
    'auth.displayName': 'नाव',
    'auth.phone': 'फोन नंबर',
    'auth.userType': 'मी आहे',
    'auth.customer': 'ग्राहक',
    'auth.vendor': 'विक्रेता',
    'auth.loginButton': 'लॉगिन करा',
    'auth.signupButton': 'खाते तयार करा',
    'auth.haveAccount': 'आधीच खाते आहे?',
    'auth.noAccount': 'खाते नाही?',
    'auth.clickLogin': 'लॉगिन साठी येथे क्लिक करा',
    'auth.clickSignup': 'साइन अप साठी येथे क्लिक करा',
    
    // Categories
    'category.groceries': 'किराणा',
    'category.electronics': 'इलेक्ट्रॉनिक्स',
    'category.food': 'अन्न आणि जेवण',
    'category.hardware': 'हार्डवेअर',
    'category.services': 'सेवा',
    'category.healthcare': 'आरोग्य सेवा',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'hi', 'mr'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
