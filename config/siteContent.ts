export const siteContent = {
    general: {
      siteName: 'Fitness Gym',
      siteDescription: 'Your ultimate fitness destination',
      contactInfo: {
        address: '123 Fitness Street, Gym City, 12345',
        phone: '(123) 456-7890',
        email: 'info@fitnessgym.com'
      },
      socialMedia: {
        facebook: 'https://facebook.com/fitnessgym',
        instagram: 'https://instagram.com/fitnessgym',
        twitter: 'https://twitter.com/fitnessgym'
      }
    },
  
    home: {
      hero: {
        title: 'Transform Your Life',
        subtitle: 'Your journey to a healthier you starts here',
        ctaButton: 'Start Your Journey',
        backgroundImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070'
      },
      facilities: {
        title: 'Our World-Class Facilities',
        items: [
          {
            title: 'State-of-the-art Equipment',
            description: 'Experience fitness with our modern gym equipment',
            image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070'
          },
          {
            title: 'Spacious Training Areas',
            description: 'Large, well-ventilated spaces for your workout',
            image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075'
          },
          {
            title: 'Luxury Locker Rooms',
            description: 'Clean and modern facilities for your convenience',
            image: 'https://images.unsplash.com/photo-1622629797619-c100e3e67e2e?q=80&w=2076'
          }
        ]
      },
      features: {
        title: 'Why Choose Us?',
        items: [
          {
            title: 'Expert Trainers',
            description: 'Our certified trainers are here to guide you',
            icon: {
              type: 'svg',
              path: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
              // Alternatif olarak image de kullanılabilir
              // type: 'image',
              // url: 'https://example.com/icon.png'
            }
          },
          {
            title: '24/7 Access',
            description: 'Work out on your schedule',
            icon: {
              type: 'svg',
              path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
            }
          },
          {
            title: 'Modern Equipment',
            description: 'Top-of-the-line fitness equipment',
            icon: {
              type: 'svg',
              path: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
            }
          },
          {
            title: 'Flexible Plans',
            description: 'Choose the plan that fits your needs',
            icon: {
              type: 'svg',
              path: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
            }
          }
        ]
      },
      contact: {
        title: 'Contact Us',
        formTitle: 'Send us a message',
        submitButton: 'Send Message'
      }
    },
  
    membership: {
      hero: {
        title: 'Membership Plans',
        subtitle: 'Find the perfect plan for your fitness journey',
        backgroundImage: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070'
      },
      plans: [
        {
          title: 'Basic',
          price: '$29.99/month',
          features: [
            'Access to gym equipment',
            'Basic fitness assessment',
            'Locker room access',
            'Free parking',
            'Access during standard hours'
          ],
          isPopular: false,
          ctaButton: 'Choose Basic Plan'
        },
        {
          title: 'Premium',
          price: '$49.99/month',
          features: [
            'All Basic features',
            'Unlimited group classes',
            '1 personal training session/month',
            'Access to sauna',
            'Guest passes (2/month)',
            '24/7 gym access'
          ],
          isPopular: true,
          ctaButton: 'Choose Premium Plan'
        },
        {
          title: 'Elite',
          price: '$89.99/month',
          features: [
            'All Premium features',
            '4 personal training sessions/month',
            'Nutrition consultation',
            'Monthly body composition analysis',
            'Access to all locations',
            'Priority class booking'
          ],
          isPopular: false,
          ctaButton: 'Choose Elite Plan'
        }
      ],
      popularBadge: 'Most Popular',
      cta: {
        title: 'Ready to Start Your Fitness Journey?',
        subtitle: 'Join our community today and transform your life',
        buttonText: 'Contact Us Today'
      }
    },
  
    services: {
      hero: {
        title: 'Our Services',
        subtitle: 'Professional fitness services for everyone',
        backgroundImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070'
      },
      items: [
        {
          title: 'Personal Training',
          description: 'One-on-one training with expert coaches',
          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070',
          features: [
            'Customized workout plans',
            'Nutrition guidance',
            'Progress tracking',
            'Regular assessments',
            'Flexible scheduling'
          ]
        },
        {
          title: 'Group Classes',
          description: 'High-energy group fitness sessions',
          image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070',
          features: [
            'Various class types',
            'Expert instructors',
            'All fitness levels',
            'Social atmosphere',
            'Regular schedule'
          ]
        },
        {
          title: 'Nutrition Coaching',
          description: 'Expert dietary guidance and planning',
          image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070',
          features: [
            'Personalized meal plans',
            'Dietary analysis',
            'Supplement advice',
            'Regular check-ins',
            'Recipe suggestions'
          ]
        },
        {
          title: 'Fitness Assessment',
          description: 'Comprehensive fitness evaluation',
          image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2070',
          features: [
            'Body composition analysis',
            'Strength testing',
            'Flexibility assessment',
            'Cardiovascular fitness test',
            'Goal setting session'
          ]
        }
      ]
    },
  
  
    footer: {
      description: 'Transform your life through fitness. Join our community and achieve your goals.',
      quickLinks: [
        { name: 'About Us', href: '/about' },
        { name: 'Classes', href: '/classes' },
        { name: 'Schedule', href: '/schedule' },
        { name: 'Contact', href: '/contact' },
      ],
      bottomText: '© 2024 Fitness Gym. All rights reserved.'
    },
  
    admin: {
      title: 'Site Content Management',
      subtitle: 'Edit your website content',
      sections: {
        general: 'General',
        home: 'Home Page',
        services: 'Services',
        membership: 'Membership',
      },
      saveButton: 'Save Changes',
      saveSuccess: 'Changes saved successfully!',
      saveError: 'Error saving changes. Please try again.'
    },
  
    navigation: {
      header: {
        menu: [
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Membership', href: '/membership' },
        ],
        ctaButton: {
          name: 'Contact Us',
          href: '/#contact'
        }
      },
      footer: {
        menu: [
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Membership', href: '/membership' },
        ],
        social: [
          {
            name: 'Facebook',
            href: 'https://facebook.com',
            icon: {
              path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            }
          },
          {
            name: 'Twitter',
            href: 'https://twitter.com',
            icon: {
              path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
            }
          },
          {
            name: 'Instagram',
            href: 'https://instagram.com',
            icon: {
              path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            }
          }
        ]
      }
    }
  }
  
  export type SiteContent = typeof siteContent