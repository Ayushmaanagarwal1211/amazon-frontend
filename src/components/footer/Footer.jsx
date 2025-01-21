import React from 'react'

export default function Footer() {
    const footerLinks = {
        'Get to Know Us': {
          'About Amazon': '#',
          'Careers': '#',
          'Press Releases': '#',
          'Amazon Science': '#'
        },
        'Connect with Us': {
          'Facebook': '#',
          'Twitter': '#',
          'Instagram': '#'
        },
        'Make Money with Us': {
          'Sell on Amazon': '#',
          'Sell under Amazon Accelerator': '#',
          'Protect and Build Your Brand': '#',
          'Amazon Global Selling': '#',
          'Supply to Amazon': '#',
          'Become an Affiliate': '#',
          'Fulfilment by Amazon': '#',
          'Advertise Your Products': '#',
          'Amazon Pay on Merchants': '#'
        },
        'Let Us Help You': {
          'Your Account': '#',
          'Returns Centre': '#',
          'Recalls and Product Safety Alerts': '#',
          '100% Purchase Protection': '#',
          'Amazon App Download': '#',
          'Help': '#'
        }
      };
    
      const services = [
        {
          name: 'AbeBooks',
          description: 'Books, art\n& collectibles',
          link: '#'
        },
        {
          name: 'Amazon Web Services',
          description: 'Scalable Cloud\nComputing Services',
          link: '#'
        },
        {
          name: 'Audible',
          description: 'Download\nAudio Books',
          link: '#'
        },
        {
          name: 'IMDb',
          description: 'Movies, TV\n& Celebrities',
          link: '#'
        },
        {
          name: 'Shopbop',
          description: 'Designer\nFashion Brands',
          link: '#'
        },
        {
          name: 'Amazon Business',
          description: 'Everything For\nYour Business',
          link: '#'
        },
        {
          name: 'Prime Now',
          description: '2-Hour Delivery\non Everyday Items',
          link: '#'
        },
        {
          name: 'Amazon Prime Music',
          description: '100 million songs, ad-free\nOver 15 million podcast episodes',
          link: '#'
        }
      ];
      function scrollToTop(){
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
          });
          
      }
      return (

        <footer className="w-full bg-[#232F3E] text-white">
             <div onClick={scrollToTop} className="cursor-pointer bg-[#37475a] py-2 text-center">
            <p className="text-sm text-gray-300 hover:text-white">
              Back to top
            </p>
          </div>
          <div className="w-[100vw]   pt-8">
            <div className="grid  grid-cols-1 pb-4 m-auto md:grid-cols-4 gap-8 px-4">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-bold text-base mb-3">{category}</h3>
                  <ul className="space-y-2">
                    {Object.entries(links).map(([text, href]) => (
                      <li key={text}>
                        <a 
                          href={href}
                          className="text-sm text-gray-300 hover:text-white hover:underline"
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
    
            <div className="pt-8 border-t bg-[#131a22] w-[100vw] border-gray-600">
              {/* Services Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 mb-8">
                {services.map((service) => (
                  <a 
                    key={service.name}
                    href={service.link}
                    className="text-gray-300 hover:text-white"
                  >
                    <div className="text-sm font-bold mb-1">{service.name}</div>
                    <div className="text-xs whitespace-pre-line">{service.description}</div>
                  </a>
                ))}
              </div>
    
              <div className="flex justify-center mb-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon Logo"
                  className="h-6 brightness-0 invert"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-300">
                <button className="hover:text-white flex items-center gap-1 px-3 py-1 border border-gray-600 rounded-sm">
                  <span className="text-xs">🌐</span> English
                </button>
                <button className="hover:text-white flex items-center gap-1 px-3 py-1 border border-gray-600 rounded-sm">
                  🇮🇳 India
                </button>
              </div>
            </div>
    
            <div className="pt-4 text-center text-xs pb-4 bg-[#131a22] text-gray-300">
              <div className="flex justify-center space-x-4 mb-2">
                <a href="#" className="hover:text-white hover:underline">Conditions of Use & Sale</a>
                <a href="#" className="hover:text-white hover:underline">Privacy Notice</a>
                <a href="#" className="hover:text-white hover:underline">Interest-Based Ads</a>
              </div>
              <p>© 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates</p>
            </div>
          </div>
          
         
        </footer>
  )
}
