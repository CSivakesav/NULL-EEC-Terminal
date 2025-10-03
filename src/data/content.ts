export interface FileNode {
  id: string;
  name: string;
  displayName: string;
  type: 'file' | 'folder';
  tooltip: string;
  content?: string | any;
  icon?: string;
}

export const fileSystem: FileNode[] = [
  {
    id: 'readme',
    name: 'README.md',
    displayName: 'Getting Started',
    type: 'file',
    tooltip: 'Click here for help and shortcuts',
    icon: '📖',
    content: {
      type: 'getting-started',
      hero: {
        title: 'Welcome to NULL EEC Terminal',
        subtitle: 'Your Gateway to Cybersecurity at Easwari Engineering College',
        description: 'Interactive terminal experience for exploring our cybersecurity community'
      },
      quickStart: {
        title: '🚀 Quick Start',
        cards: [
          {
            icon: '🖱️',
            title: 'Click & Explore',
            description: 'Simply click any file in the sidebar to explore',
            action: 'Start Exploring'
          },
          {
            icon: '⌨️',
            title: 'Use Commands',
            description: 'Type "help" for available terminal commands',
            commands: ['help', 'ls', 'events', 'team', 'contact']
          },
          {
            icon: '📱',
            title: 'Mobile Ready',
            description: 'Perfect experience on all devices',
            features: ['Responsive Design', 'Touch Friendly', 'Fast Loading']
          }
        ]
      },
      navigation: {
        title: '🗺️ Explore Our Community',
        cards: [
          {
            id: 'about-null',
            icon: '🔐',
            title: 'About NULL EEC',
            description: 'Discover our mission, values, and cybersecurity philosophy',
            color: 'blue',
            highlights: ['Official NULL Chapter', 'Hands-on Learning', 'Community Driven']
          },
          {
            id: 'upcoming-events',
            icon: '📅',
            title: 'Upcoming Events',
            description: 'Latest workshops, CTF competitions, and networking events',
            color: 'green',
            highlights: ['Inception Ceremony']
          },
          {
            id: 'past-events',
            icon: '🏆',
            title: 'Past Events',
            description: 'Rich history with photos, achievements, and success stories',
            color: 'purple',
            highlights: ['25+ Events', '500+ Participants', '₹75,000+ Prizes']
          },
          {
            id: 'team',
            icon: '👥',
            title: 'Our Team',
            description: 'Meet passionate cybersecurity enthusiasts driving us forward',
            color: 'orange',
            highlights: ['6 Core Members', 'Cross-Department', 'Industry Experience']
          },
          {
            id: 'about-eec',
            icon: '🏫',
            title: 'About EEC',
            description: 'Academic foundation supporting technical excellence',
            color: 'indigo',
            highlights: ['AICTE Approved', 'Modern Labs', 'Industry Partnerships']
          },
          {
            id: 'contact',
            icon: '📧',
            title: 'Contact Us',
            description: 'Multiple ways to connect and join our community',
            color: 'teal',
            highlights: ['Discord Server', 'Social Media', 'Direct Email']
          }
        ]
      },
      features: {
        title: '🌟 Why Choose NULL EEC?',
        cards: [
          {
            icon: '🎯',
            title: 'Interactive Learning',
            description: 'Terminal interface that teaches command-line thinking',
            benefits: ['Real Terminal Experience', 'Educational Tool', 'Skill Development']
          },
          {
            icon: '⚡',
            title: 'Real-Time Updates',
            description: 'Dynamic content with latest information',
            benefits: ['Event Updates', 'Team Changes', 'New Opportunities']
          },
          {
            icon: '🤝',
            title: 'Community-Driven',
            description: 'Collaborative spirit and hands-on education',
            benefits: ['Peer Learning', 'Industry Connections', 'Practical Focus']
          }
        ]
      },
      quickTips: {
        title: '💡 Pro Tips',
        tips: [
          {
            icon: '🔍',
            text: 'Each file contains unique, detailed content about NULL EEC'
          },
          {
            icon: '⚡',
            text: 'Try typing commands for authentic terminal experience'
          },
          {
            icon: '🤝',
            text: 'Join our Discord and social media for active community'
          },
          {
            icon: '📚',
            text: 'Return regularly for event updates and new content'
          }
        ]
      },
      pathways: {
        title: '🚀 Choose Your Path',
        paths: [
          {
            icon: '🔰',
            title: 'Complete Beginner',
            description: 'Start with "About NULL EEC"',
            steps: ['Learn Our Philosophy', 'Understand Approach', 'Join Community']
          },
          {
            icon: '🎉',
            title: 'Event Enthusiast',
            description: 'Jump to "Upcoming Events"',
            steps: ['Check Schedule', 'Register for Events', 'Join Workshops']
          },
          {
            icon: '👀',
            title: 'Visual Learner',
            description: 'Browse "Past Photos"',
            steps: ['See Community Action', 'View Event Galleries', 'Get Inspired']
          },
          {
            icon: '🚀',
            title: 'Future Member',
            description: 'Visit "Contact Us"',
            steps: ['Join Discord', 'Follow Social Media', 'Start Journey']
          }
        ]
      },
      stats: {
        members: '200+',
        events: '25+',
        participants: '500+',
        prizes: '₹75,000+'
      }
    }
  },
  {
    id: 'about-null',
    name: 'about-null-eec.md',
    displayName: 'About NULL EEC',
    type: 'file',
    tooltip: 'Learn about our hacking club and mission',
    icon: '🔐',
    content: {
      type: 'about-null-eec',
      hero: {
        title: 'About NULL EEC',
        subtitle: 'Official NULL Open Security Community Chapter',
        description: 'We are far more than a traditional technical club - we\'re a vibrant platform for curious minds eager to gain practical cybersecurity experience.',
        tagline: 'Security through practical knowledge, growth through community'
      },
      mission: {
        title: '🎯 Our Mission',
        cards: [
          {
            icon: '🎯',
            title: 'Practical Learning',
            description: 'Bridge classroom theory with real-world industry practices',
            color: 'blue'
          },
          {
            icon: '🛡️',
            title: 'Hands-on Experience',
            description: 'Provide immersive, application-based cybersecurity training',
            color: 'green'
          },
          {
            icon: '🤝',
            title: 'Community Building',
            description: 'Create a strong network of security-minded individuals',
            color: 'purple'
          },
          {
            icon: '🌟',
            title: 'Problem-Solving',
            description: 'Challenge members to apply skills to real-world scenarios',
            color: 'orange'
          },
          {
            icon: '🔍',
            title: 'Curiosity-Driven',
            description: 'Promote critical thinking and investigative mindset',
            color: 'teal'
          }
        ]
      },
      activities: {
        title: '🚀 What We Do',
        sections: [
          {
            title: 'Immersive Workshops',
            icon: '🎓',
            description: 'Hands-on workshops bridging classroom learning with industry practices',
            items: [
              {
                name: 'Linux Commands & Tools',
                description: 'Master essential command-line tools and system administration',
                skills: ['Terminal Mastery', 'Security Practices', 'Scripting']
              },
              {
                name: 'DevSecOps & Application Security',
                description: 'Security integration in development lifecycle',
                skills: ['Secure Coding', 'Vulnerability Assessment', 'CI/CD Security']
              },
              {
                name: 'Web Application Security',
                description: 'OWASP Top 10 and modern security testing',
                skills: ['Exploitation', 'Remediation', 'Security Testing']
              }
            ]
          },
          {
            title: 'Competitive Events',
            icon: '🏆',
            description: 'Exciting competitions to apply problem-solving skills',
            items: [
              {
                name: 'Online CTF Competition',
                description: 'Multi-category security challenges',
                skills: ['Team Problem Solving', 'Real-time Hacking', 'Multi-domain']
              },
              {
                name: 'NULL CYRUS',
                description: 'Our signature cybersecurity challenge event',
                skills: ['Advanced Scenarios', 'Industry-level', 'Complex Puzzles']
              },
              {
                name: 'Inter-College Competitions',
                description: 'Represent EEC on national platforms',
                skills: ['Networking', 'Skill Showcase', 'Community Building']
              }
            ]
          },
          {
            title: 'Community Engagement',
            icon: '🤝',
            description: 'Building connections and sharing knowledge',
            items: [
              {
                name: 'Peer Learning Sessions',
                description: 'Knowledge sharing among members',
                skills: ['Collaborative Learning', 'Skill Sharing', 'Mentorship']
              },
              {
                name: 'Industry Connections',
                description: 'Networking with security professionals',
                skills: ['Professional Network', 'Career Guidance', 'Industry Insights']
              },
              {
                name: 'Research Projects',
                description: 'Collaborative security research initiatives',
                skills: ['Research Methods', 'Innovation', 'Publication']
              }
            ]
          }
        ]
      },
      philosophy: {
        title: '💭 Our Philosophy',
        principles: [
          {
            title: 'Application Over Theory',
            description: 'Cybersecurity skills are best learned through practical application',
            icon: '🔬'
          },
          {
            title: 'Curiosity-Driven Learning',
            description: 'Question, explore, and experiment with security concepts',
            icon: '🔍'
          },
          {
            title: 'Critical Thinking',
            description: 'Developing analytical minds for methodical problem-solving',
            icon: '🧠'
          },
          {
            title: 'Ethical Foundation',
            description: 'Grounded in responsible disclosure and ethical practices',
            icon: '⚖️'
          },
          {
            title: 'Community Growth',
            description: 'Every member contributes to and benefits from collective knowledge',
            icon: '🌱'
          }
        ]
      },
      features: {
        title: '🌟 What Makes Us Special',
        cards: [
          {
            icon: '🌟',
            title: 'Official NULL Chapter',
            description: 'Part of the larger NULL Open Security Community network',
            highlights: ['National Recognition', 'Community Support', 'Resource Access']
          },
          {
            icon: '🎯',
            title: 'Practical Focus',
            description: 'Every workshop includes hands-on labs and real scenarios',
            highlights: ['Real-world Skills', 'Industry Tools', 'Practical Experience']
          },
          {
            icon: '⚡',
            title: 'Competitive Edge',
            description: 'Regular competitions keep skills sharp and motivation high',
            highlights: ['Skill Development', 'Performance Tracking', 'Achievement Recognition']
          },
          {
            icon: '🤝',
            title: 'Collaborative Environment',
            description: 'Learning through teamwork and peer support',
            highlights: ['Team Projects', 'Peer Mentoring', 'Knowledge Sharing']
          },
          {
            icon: '🔄',
            title: 'Continuous Evolution',
            description: 'Adapting to the latest security trends and threats',
            highlights: ['Current Content', 'Industry Alignment', 'Future-ready Skills']
          }
        ]
      },
      cta: {
        title: '🚀 Join Our Journey',
        description: 'Whether you\'re a complete beginner or experienced practitioner, NULL EEC welcomes you!',
        benefits: [
          'Diverse community of backgrounds and skill levels',
          'Supportive learning environment',
          'Practical skill development',
          'Industry connections and opportunities'
        ],
        action: 'Ready to start your cybersecurity journey?'
      }
    }
  },
  {
    id: 'about-eec',
    name: 'about-eec.md',
    displayName: 'About EEC',
    type: 'file',
    tooltip: 'Learn about Easwari Engineering College',
    icon: '🏫',
    content: {
      type: 'about-eec',
      hero: {
        title: 'About Easwari Engineering College',
        subtitle: 'The Foundation of Excellence',
        description: 'A beacon of technical education in Chennai, nurturing innovative minds and fostering critical thinking to shape future technology leaders.',
        tagline: 'Excellence in Engineering Education, Innovation in Every Endeavor'
      },
      stats: {
        title: '🏆 By the Numbers',
        cards: [
          {
            number: '6',
            label: 'Engineering Departments',
            icon: '🎓',
            color: 'blue'
          },
          {
            number: '5',
            label: 'Prestigious Accreditations',
            icon: '✅',
            color: 'green'
          },
          {
            number: '24/7',
            label: 'Lab Access',
            icon: '🖥️',
            color: 'purple'
          },
          {
            number: '100%',
            label: 'Industry Aligned',
            icon: '💼',
            color: 'orange'
          }
        ]
      },
      departments: {
        title: '🎓 Engineering Departments',
        description: 'Comprehensive range of engineering disciplines ensuring students find their passion',
        cards: [
          {
            title: 'Computer Science & Engineering',
            icon: '💻',
            color: 'blue',
            highlights: ['AI, ML & Data Science', 'Software Development', 'NULL EEC Hub', 'Industry Projects'],
            description: 'Cutting-edge curriculum with strong foundation in modern technologies'
          },
          {
            title: 'Electronics & Communication',
            icon: '📡',
            color: 'green',
            highlights: ['Communication Systems', 'VLSI Design', 'IoT Specialization', 'Embedded Tech'],
            description: 'Advanced studies in communication and embedded technologies'
          },
          {
            title: 'Electrical & Electronics',
            icon: '⚡',
            color: 'yellow',
            highlights: ['Power Systems', 'Renewable Energy', 'Automation', 'Smart Grids'],
            description: 'Focus on power systems and sustainable technology integration'
          },
          {
            title: 'Mechanical Engineering',
            icon: '⚙️',
            color: 'orange',
            highlights: ['Robotics Integration', 'Manufacturing Tech', 'Design Innovation', 'Modern Applications'],
            description: 'Traditional principles with modern automation integration'
          },
          {
            title: 'Civil Engineering',
            icon: '🏗️',
            color: 'teal',
            highlights: ['Sustainable Construction', 'Urban Planning', 'Green Building', 'Advanced Materials'],
            description: 'Infrastructure development with environmental consciousness'
          },
          {
            title: 'Information Technology',
            icon: '🌐',
            color: 'purple',
            highlights: ['Software Engineering', 'Cybersecurity', 'Cloud Computing', 'Digital Transformation'],
            description: 'Application development and network administration focus'
          }
        ]
      },
      accreditations: {
        title: '🏆 Prestigious Accreditations',
        cards: [
          {
            title: 'AICTE Approved',
            description: 'All India Council for Technical Education recognition',
            icon: '✅',
            color: 'green'
          },
          {
            title: 'Anna University Affiliated',
            description: 'Connected to Tamil Nadu\'s premier technical university',
            icon: '🎓',
            color: 'blue'
          },
          {
            title: 'NBA Accredited',
            description: 'National Board of Accreditation quality assurance',
            icon: '🏅',
            color: 'purple'
          },
          {
            title: 'NAAC Accredited',
            description: 'National Assessment and Accreditation Council certified',
            icon: '⭐',
            color: 'orange'
          },
          {
            title: 'ISO Certified',
            description: 'International quality management standards compliance',
            icon: '🌍',
            color: 'teal'
          }
        ]
      },
      infrastructure: {
        title: '🏗️ World-Class Infrastructure',
        sections: [
          {
            title: 'Academic Facilities',
            icon: '🎓',
            cards: [
              {
                title: 'State-of-the-Art Computer Labs',
                icon: '🖥️',
                features: ['Latest Hardware & Software', 'Specialized Security Labs', '24/7 Access', 'Research Facilities']
              },
              {
                title: 'Advanced Technical Laboratories',
                icon: '🔬',
                features: ['Industry-Standard Equipment', 'Research Projects', 'Regular Upgrades', 'Cross-Department Access']
              },
              {
                title: 'Comprehensive Library',
                icon: '📚',
                features: ['Extensive Collections', 'Digital Resources', 'Study Spaces', 'Research Databases']
              }
            ]
          },
          {
            title: 'Campus Life',
            icon: '🏢',
            cards: [
              {
                title: 'Modern Architecture',
                icon: '🏢',
                features: ['Eco-friendly Design', 'Accessible Infrastructure', 'High-speed Wi-Fi', 'Sustainable Campus']
              },
              {
                title: 'Sports & Recreation',
                icon: '🏟️',
                features: ['Multi-purpose Complex', 'Fitness Center', 'Indoor & Outdoor', 'Regular Tournaments']
              },
              {
                title: 'Comfortable Accommodation',
                icon: '🏠',
                features: ['Separate Hostels', 'Modern Amenities', 'Security Systems', 'Community Spaces']
              }
            ]
          }
        ]
      },
      clubs: {
        title: '🌟 Technical Excellence Clubs',
        description: 'Student-driven clubs are the heart of practical learning',
        cards: [
          {
            title: 'NULL EEC',
            subtitle: 'Cybersecurity Club',
            icon: '🔐',
            color: 'red',
            highlights: ['Official NULL Chapter', 'CTF Competitions', 'Industry Connections', 'Ethical Hacking']
          },
          {
            title: 'Robotics & Automation',
            subtitle: 'Innovation Hub',
            icon: '🤖',
            color: 'blue',
            highlights: ['Arduino Projects', 'Competition Participation', 'Cross-disciplinary', 'Innovation Challenges']
          },
          {
            title: 'Coding & Development',
            subtitle: 'Programming Excellence',
            icon: '💻',
            color: 'green',
            highlights: ['Programming Contests', 'Open Source', 'Peer Learning', 'Hackathons']
          },
          {
            title: 'IoT Innovation Hub',
            subtitle: 'Connected Solutions',
            icon: '🌐',
            color: 'purple',
            highlights: ['IoT Projects', 'Smart City Solutions', 'Industry Partnerships', 'Prototype Building']
          },
          {
            title: 'AI/ML Research',
            subtitle: 'Future Technologies',
            icon: '🧠',
            color: 'orange',
            highlights: ['ML Implementation', 'Research Papers', 'Conferences', 'Industry Problems']
          }
        ]
      },
      placements: {
        title: '💼 Career Success & Industry Connections',
        description: 'Outstanding placement record with graduates highly sought after by leading organizations',
        categories: [
          {
            title: 'Global Giants',
            companies: ['Microsoft', 'Amazon', 'Google', 'IBM'],
            icon: '🌍',
            color: 'blue'
          },
          {
            title: 'Indian Unicorns',
            companies: ['Zoho', 'Freshworks', 'Flipkart', 'Paytm'],
            icon: '🦄',
            color: 'purple'
          },
          {
            title: 'Consulting Leaders',
            companies: ['TCS', 'Infosys', 'Wipro', 'Accenture'],
            icon: '💼',
            color: 'green'
          },
          {
            title: 'Product Companies',
            companies: ['Oracle', 'SAP', 'Adobe', 'Salesforce'],
            icon: '📦',
            color: 'orange'
          }
        ],
        programs: [
          {
            title: 'Internship Opportunities',
            description: 'Semester-long industry exposure',
            icon: '🎯'
          },
          {
            title: 'Live Project Collaborations',
            description: 'Real-world problem solving',
            icon: '🔗'
          },
          {
            title: 'Guest Expert Sessions',
            description: 'Industry insights and career guidance',
            icon: '👨‍🏫'
          },
          {
            title: 'Alumni Network',
            description: 'Strong professional connections',
            icon: '🤝'
          }
        ]
      },
      beyondAcademics: {
        title: '🌍 Beyond Academics',
        cards: [
          {
            title: 'Research & Innovation',
            icon: '🔬',
            features: ['International Publications', 'Patent Filings', 'Industry Collaboration', 'Innovation Labs']
          },
          {
            title: 'Community Engagement',
            icon: '🤝',
            features: ['Social Responsibility', 'Environmental Initiatives', 'Educational Outreach', 'Technology Solutions']
          },
          {
            title: 'Global Perspective',
            icon: '🌍',
            features: ['International Programs', 'University Exchange', 'Global Certifications', 'Cross-cultural Learning']
          }
        ]
      },
      contact: {
        title: '📞 Connect With EEC',
        address: {
          title: 'Campus Location',
          details: ['Easwari Engineering College', 'Ramapuram, Chennai - 600 089', 'Tamil Nadu, India']
        },
        contacts: [
          {
            type: 'Main Office',
            value: '+91-44-2499-5555',
            icon: '📞'
          },
          {
            type: 'General Inquiries',
            value: 'info@eec.srmrmp.edu.in',
            icon: '📧'
          },
          {
            type: 'Admissions',
            value: 'admissions@eec.srmrmp.edu.in',
            icon: '🎓'
          },
          {
            type: 'Official Website',
            value: 'www.eec.srmrmp.edu.in',
            icon: '🌐'
          }
        ],
        social: [
          {
            platform: 'LinkedIn',
            description: 'Professional updates and alumni success',
            icon: '💼'
          },
          {
            platform: 'Instagram',
            description: 'Campus life and student achievements',
            icon: '📸'
          },
          {
            platform: 'Facebook',
            description: 'Community engagement and announcements',
            icon: '👥'
          },
          {
            platform: 'YouTube',
            description: 'Virtual tours and event recordings',
            icon: '🎥'
          }
        ]
      },
      vision: {
        title: '🔮 Vision for the Future',
        description: 'We don\'t just educate engineers - we cultivate innovators, problem-solvers, and ethical leaders who will shape tomorrow\'s technological landscape.',
        mission: 'Join us in our mission to engineer a better future, one innovative mind at a time.',
        values: ['Critical Thinking', 'Practical Application', 'Social Responsibility', 'Innovation Excellence']
      }
    }
  },
  {
    id: 'upcoming-events',
    name: 'upcoming-events.json',
    displayName: 'Upcoming Events',
    type: 'file',
    tooltip: 'See what exciting events are coming up',
    icon: '📅',
    content: [
      {
        id: 1,
        title: 'Inception Ceremony',
        date: '2024-12-15',
        time: '10:00 AM - 4:00 PM',
        venue: 'CSE Lab - Block A',
        description: 'Learn about OWASP Top 10 vulnerabilities and how to exploit and secure web applications',
        speaker: 'Industry Expert from Zoho',
        registrationLink: '#',
        tags: ['Workshop', 'Web Security', 'OWASP']
      }
    ]
  },
  {
    id: 'past-events',
    name: 'past-events.md',
    displayName: 'Past Events',
    type: 'file',
    tooltip: 'View our previous successful events with photo galleries',
    icon: '📜',
    content: {
      type: 'past-events-redesigned',
      hero: {
        title: 'Our Journey Through Excellence',
        subtitle: 'Celebrating Achievements in Cybersecurity',
        description: 'A legacy of innovation, learning, and community building through impactful events that shaped our cybersecurity journey.',
        tagline: 'Every Event Tells a Story of Growth and Success'
      },
      stats: {
        title: '🏆 Event Impact by Numbers',
        cards: [
          {
            number: '30+',
            label: 'Total Events',
            icon: '🎯',
            color: 'blue',
            description: 'Workshops, competitions, and seminars'
          },
          {
            number: '750+',
            label: 'Participants',
            icon: '👥',
            color: 'green',
            description: 'Students from across Tamil Nadu'
          },
          {
            number: '₹75,000+',
            label: 'Prizes Awarded',
            icon: '💰',
            color: 'purple',
            description: 'Recognition and rewards distributed'
          },
          {
            number: '15+',
            label: 'Industry Partners',
            icon: '🤝',
            color: 'orange',
            description: 'Corporate collaborations and sponsorships'
          }
        ]
      },
      eventCategories: {
        title: '🎯 Event Categories',
        description: 'Diverse programs designed to enhance different aspects of cybersecurity skills',
        categories: [
          {
            title: 'CTF Competitions',
            icon: '🏆',
            color: 'red',
            count: '8 Events',
            description: 'Competitive hacking challenges and problem-solving',
            highlights: ['Multi-category challenges', 'Team collaboration', 'Real-time scenarios', 'Industry recognition']
          },
          {
            title: 'Technical Workshops',
            icon: '🎓',
            color: 'blue',
            count: '15 Sessions',
            description: 'Hands-on learning experiences with expert guidance',
            highlights: ['Practical skills', 'Industry tools', 'Certification', 'Career development']
          },
          {
            title: 'Guest Lectures',
            icon: '👨‍🏫',
            color: 'green',
            count: '5 Sessions',
            description: 'Expert insights from cybersecurity professionals',
            highlights: ['Industry trends', 'Career guidance', 'Networking', 'Best practices']
          },
          {
            title: 'Community Events',
            icon: '🤝',
            color: 'purple',
            count: '3 Gatherings',
            description: 'Building connections and fostering collaboration',
            highlights: ['Team building', 'Knowledge sharing', 'Cultural exchange', 'Community growth']
          }
        ]
      },
      featuredEvents: {
        title: '🌟 Featured Success Stories',
        description: 'Highlighting our most impactful and memorable events',
        events: [
          {
            id: 1,
            title: 'NULL Chapter Inauguration',
            subtitle: 'The Genesis of Excellence',
            date: 'March 15, 2024',
            type: 'Inauguration',
            color: 'teal',
            icon: '🎉',
            participants: '200+',
            duration: '1 Day',
            prizePool: '₹50,000 Scholarships',
            description: 'Grand opening ceremony marking the official launch of NULL EEC.',
            achievements: [
              '150 immediate membership registrations',
              '12 cybersecurity company connections established',
              'Foundation for ongoing community building',
              'Media coverage in 5 technology publications'
            ],
            categories: ['Live Demos', 'Industry Talks', 'Community Building', 'Scholarship Awards'],
            speakers: ['Dr. Sarah Chen', 'Mr. Rajesh Kumar', 'Dean of Engineering'],
            photos: [
              'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop'
            ]
          },
          {
            id: 2,
            title: 'Linux Commands & Tools Workshop',
            subtitle: 'Hands-on Technical Foundation Building',
            date: 'October 4, 2024',
            type: 'Workshop',
            color: 'green',
            icon: '🐧',
            participants: '75+',
            duration: '1 Day',
            prizePool: 'Certificates & Tools Access',
            description: 'Hands-on, practical workshop designed to introduce students to the core tools and techniques of cybersecurity. Covered ethical hacking basics, Kali Linux setup, and real-world penetration testing practice.',
            achievements: [
              'Students gained strong technical foundation in cybersecurity',
              'Practical experience with industry-standard tools',
              'Real-world penetration testing scenarios completed',
              'Enhanced understanding of ethical hacking principles'
            ],
            categories: ['Kali Linux', 'Ethical Hacking', 'Penetration Testing', 'Security Tools'],
            instructor: 'NULL EEC Technical Team',
            photos: [
              'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
            ]
          },
          {
            id: 3,
            title: 'Online CTF Competition',
            subtitle: 'Inter-College Cybersecurity Challenge',
            date: 'November 2024',
            type: 'Competition',
            color: 'red',
            icon: '🌐',
            participants: '120+',
            duration: 'Online Format',
            prizePool: '₹12,000 + Recognition',
            description: 'Thrilling, inter-college Capture The Flag competition that challenged participants to solve cybersecurity scenarios in a high-energy, competitive environment.',
            achievements: [
              'Successfully hosted first online inter-college CTF',
              'Enhanced critical thinking and practical skill application',
              'Competitive environment encouraged knowledge testing',
              'Strong participation from multiple colleges'
            ],
            categories: ['Web Security', 'Cryptography', 'Forensics', 'OSINT', 'Binary Exploitation'],
            winner: 'Team CyberNinjas',
            photos: [
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
            ]
          },
          {
            id: 4,
            title: 'NULL CYRUS',
            subtitle: 'Fun Educational Cybersecurity Competition',
            date: 'February 26, 2025',
            type: 'Competition',
            color: 'purple',
            icon: '🎮',
            participants: '90+',
            duration: '1 Day',
            prizePool: 'Prizes & Recognition',
            description: 'Fun and educational cybersecurity event open to students from all departments. Featured fast-paced quizzes, OSINT tasks, and complex cryptographic puzzles in a gamified format.',
            achievements: [
              'Successful interdisciplinary participation from all departments',
              'Creative problem-solving in relaxed competitive atmosphere',
              'Enhanced OSINT and cryptography skills across campus',
              'Strong community engagement and learning'
            ],
            categories: ['Quick Fire Quizzes', 'OSINT Challenges', 'Cryptographic Puzzles', 'Team Collaboration'],
            winner: 'Team CyberSeekers',
            photos: [
              'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop'
            ]
          },
          {
            id: 5,
            title: 'ThreatX LMS Online Bootcamp',
            subtitle: 'Gamified 15-Day Learning Experience',
            date: 'March 2025',
            type: 'Bootcamp',
            color: 'blue',
            icon: '🎯',
            participants: '200+',
            duration: '15 Days Online',
            prizePool: 'Auto-Generated Certificates',
            description: 'Standout 15-day online bootcamp that successfully blended technical cybersecurity content with gamified learning experience. Featured secure quizzes, XP-based progression, and competitive leaderboards.',
            achievements: [
              'Successfully implemented gamified learning platform',
              'High completion rate with XP-based motivation system',
              'Auto-generated certificates for program completers',
              'Continuous learning encouraged through leaderboards'
            ],
            categories: ['Gamified Learning', 'Technical Cybersecurity', 'Online Platform', 'Certification Program'],
            platform: 'ThreatX LMS Platform',
            photos: [
              'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop'
            ]
          },
          {
            id: 6,
            title: 'DevSecOps & Application Security Workshop',
            subtitle: 'Bridging Development and Security',
            date: 'July 27, 2025',
            type: 'Workshop',
            color: 'orange',
            icon: '🔧',
            participants: '85+',
            duration: '2 Days Intensive',
            prizePool: 'Industry Certification Prep',
            description: 'Deep-dive session bridging the gap between rapid development and application security. Explored DevSecOps culture, vulnerability detection, and CI/CD pipeline security with OWASP SAMM and SLSA frameworks.',
            achievements: [
              'Students learned to secure CI/CD pipelines effectively',
              'Practical experience with DevSecOps methodologies',
              'Understanding of critical security frameworks implemented',
              'Enhanced capability to build robust, secure software'
            ],
            categories: ['DevSecOps Culture', 'CI/CD Security', 'OWASP SAMM', 'SLSA Framework', 'Vulnerability Detection'],
            frameworks: ['OWASP SAMM', 'SLSA', 'CI/CD Security'],
            photos: [
              'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
            ]
          },
          {
            id: 7,
            title: 'Inception Ceremony',
            subtitle: 'A New Dawn for Cybersecurity Enthusiasts',
            date: 'July 27, 2025',
            type: 'Ceremony',
            color: 'blue',
            icon: '🎉',
            participants: '120+',
            duration: 'Half Day',
            prizePool: 'Leadership & Learning',
            description: 'Inaugural ceremony celebrating the launch of the ThreatX LMS Platform. Keynote speeches from industry leaders, live demonstrations, and networking opportunities for all participants.',
            achievements: [
              'Successful induction of the new leadership team',
              'Guest lecture inspired students with vision and direction',
              'Established the mission and goals for the upcoming term',
              'Fostered a sense of unity and commitment among members'
            ],
            categories: ['Leadership', 'Community Building', 'Inauguration', 'Vision Setting'],
            frameworks: ['Organizational Leadership', 'Club Governance', 'Team Development'],
            photos: [
              'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop'
            ]
          }
        ]
      },
      successMetrics: {
        title: '📈 Success Metrics & Impact',
        description: 'Measuring the tangible impact of our events on the community',
        metrics: [
          {
            title: 'Career Impact',
            icon: '💼',
            color: 'blue',
            stats: [
              { label: 'Internships Secured', value: '35+' },
              { label: 'Job Placements', value: '15+' },
              { label: 'Skill Certifications', value: '200+' }
            ]
          },
          {
            title: 'Community Growth',
            icon: '👥',
            color: 'green',
            stats: [
              { label: 'Active Members', value: '200+' },
              { label: 'Alumni Network', value: '150+' },
              { label: 'Partner Colleges', value: '15+' }
            ]
          },
          {
            title: 'Knowledge Impact',
            icon: '🧠',
            color: 'purple',
            stats: [
              { label: 'Workshop Hours', value: '500+' },
              { label: 'Research Projects', value: '8' },
              { label: 'Publications', value: '3' }
            ]
          },
          {
            title: 'Recognition',
            icon: '🏅',
            color: 'orange',
            stats: [
              { label: 'CTF Wins', value: '25+' },
              { label: 'Media Coverage', value: '12' },
              { label: 'Industry Awards', value: '5' }
            ]
          }
        ]
      },
      testimonials: {
        title: '💬 Community Voices',
        description: 'What our participants say about their NULL EEC experience',
        testimonials: [
          {
            name: 'Arjun Kumar',
            role: 'Final Year CSE',
            event: 'CTF Championship 2024',
            quote: 'The CTF competition changed my perspective on cybersecurity. I discovered my passion for ethical hacking and secured an internship at a top security firm.',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
            achievement: 'Secured Cybersecurity Internship'
          },
          {
            name: 'Priya Sharma',
            role: 'Third Year IT',
            event: 'Bug Bounty Workshop',
            quote: 'The workshop gave me practical skills I never learned in class. Within a month, I found my first vulnerability and earned my first bug bounty.',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
            achievement: 'First Bug Bounty Hunter'
          },
          {
            name: 'Vikram Reddy',
            role: 'Second Year ECE',
            event: 'Crypto Challenge Week',
            quote: 'Starting from zero knowledge in cryptography, I now lead a research project on blockchain security. NULL EEC opened doors I never knew existed.',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
            achievement: 'Research Project Leader'
          }
        ]
      },
      timeline: {
        title: '📅 Our Journey Timeline',
        description: 'Key milestones in NULL EEC\'s event history',
        milestones: [
          {
            year: '2024',
            quarter: 'Q1',
            title: 'Foundation',
            events: ['NULL Chapter Inauguration', 'First Workshop Series'],
            participants: '200+',
            impact: 'Community Establishment'
          },
          {
            year: '2024',
            quarter: 'Q2',
            title: 'Growth',
            events: ['Pentesting Bootcamp', 'Web Security Masterclass'],
            participants: '110+',
            impact: 'Skill Development Focus'
          },
          {
            year: '2024',
            quarter: 'Q3',
            title: 'Expansion',
            events: ['Crypto Challenge Week', 'Bug Bounty Workshop'],
            participants: '140+',
            impact: 'Specialized Training'
          },
          {
            year: '2024',
            quarter: 'Q4',
            title: 'Excellence',
            events: ['Annual CTF Championship', 'Linux Commands Workshop', 'Online CTF Competition'],
            participants: '345+',
            impact: 'Industry Recognition'
          },
          {
            year: '2025',
            quarter: 'Q1',
            title: 'Innovation',
            events: ['NULL CYRUS', 'ThreatX LMS Bootcamp'],
            participants: '290+',
            impact: 'Gamified Learning'
          },
          {
            year: '2025',
            quarter: 'Q3',
            title: 'Advanced',
            events: ['DevSecOps & Application Security Workshop'],
            participants: '85+',
            impact: 'Enterprise Integration'
          }
        ]
      },
      upcomingPreview: {
        title: '🔮 What\'s Next?',
        description: 'Exciting events planned for the future',
        events: [
          {
            title: 'Advanced Malware Analysis',
            type: 'Workshop',
            timeline: 'Q1 2025',
            icon: '🦠',
            description: 'Deep dive into malware reverse engineering'
          },
          {
            title: 'International CTF',
            type: 'Competition',
            timeline: 'Q2 2025',
            icon: '🌍',
            description: 'Global cybersecurity competition'
          },
          {
            title: 'Industry Security Summit',
            type: 'Conference',
            timeline: 'Q3 2025',
            icon: '🎤',
            description: 'Major cybersecurity industry conference'
          }
        ]
      }
    }
  },
  {
    id: 'past-photos',
    name: 'past-photos/',
    displayName: 'Past Photos',
    type: 'folder',
    tooltip: 'Browse through our event photo gallery',
    icon: '📸',
    content: {
      type: 'photo-collage',
      title: 'NULL EEC Photo Gallery',
      subtitle: 'Memories from Our Cybersecurity Journey',
      description: 'A visual story of our community, events, and achievements through the years',
      categories: [
        {
          name: 'CTF Competitions',
          color: 'red',
          icon: '🏆',
          photos: [
            {
              id: 1,
              url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
              caption: 'CTF Championship 2024 - Teams competing intensely',
              event: 'Annual CTF Championship',
              size: 'large'
            },
            {
              id: 2,
              url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
              caption: 'Winners celebrating their victory',
              event: 'Online CTF Competition',
              size: 'medium'
            },
            {
              id: 3,
              url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop',
              caption: 'Prize distribution ceremony',
              event: 'CTF Prize Distribution',
              size: 'medium'
            }
          ]
        },
        {
          name: 'Workshops & Training',
          color: 'blue',
          icon: '🎓',
          photos: [
            {
              id: 4,
              url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=400&fit=crop',
              caption: 'Bug bounty workshop in progress',
              event: 'Bug Bounty Workshop',
              size: 'large'
            },
            {
              id: 5,
              url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
              caption: 'Students learning penetration testing',
              event: 'Penetration Testing Bootcamp',
              size: 'medium'
            },
            {
              id: 6,
              url: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop',
              caption: 'Web security masterclass session',
              event: 'Web Security Masterclass',
              size: 'medium'
            },
            {
              id: 7,
              url: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=300&h=400&fit=crop',
              caption: 'Linux commands hands-on training',
              event: 'Linux Commands Workshop',
              size: 'small'
            }
          ]
        },
        {
          name: 'Community & Team',
          color: 'green',
          icon: '👥',
          photos: [
            {
              id: 8,
              url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
              caption: 'NULL EEC Core Team 2024',
              event: 'Team Photo',
              size: 'large'
            },
            {
              id: 9,
              url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
              caption: 'Chapter inauguration ceremony',
              event: 'NULL Chapter Inauguration',
              size: 'medium'
            },
            {
              id: 10,
              url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=300&h=400&fit=crop',
              caption: 'Community networking session',
              event: 'Community Building',
              size: 'small'
            },
            {
              id: 11,
              url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop',
              caption: 'Students collaborating on challenges',
              event: 'Team Building',
              size: 'medium'
            }
          ]
        },
        {
          name: 'Guest Lectures & Events',
          color: 'purple',
          icon: '🎤',
          photos: [
            {
              id: 12,
              url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=400&fit=crop',
              caption: 'Industry expert delivering keynote',
              event: 'Guest Lecture Series',
              size: 'large'
            },
            {
              id: 13,
              url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop',
              caption: 'Interactive Q&A session',
              event: 'Expert Panel Discussion',
              size: 'medium'
            },
            {
              id: 14,
              url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=400&fit=crop',
              caption: 'Students engaging with speakers',
              event: 'Knowledge Sharing',
              size: 'small'
            }
          ]
        },
        {
          name: 'Fun & Innovation',
          color: 'orange',
          icon: '🎮',
          photos: [
            {
              id: 15,
              url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
              caption: 'NULL CYRUS competition fun moments',
              event: 'NULL CYRUS',
              size: 'medium'
            },
            {
              id: 16,
              url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
              caption: 'Creative problem-solving sessions',
              event: 'Innovation Workshop',
              size: 'medium'
            },
            {
              id: 17,
              url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&h=400&fit=crop',
              caption: 'Breakthrough moments in learning',
              event: 'Discovery Sessions',
              size: 'small'
            },
            {
              id: 18,
              url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop',
              caption: 'Celebrating achievements together',
              event: 'Achievement Celebration',
              size: 'small'
            }
          ]
        }
      ],
      stats: {
        totalPhotos: 18,
        eventsDocumented: 12,
        yearsActive: 2,
        communitySize: '200+'
      }
    }
  },
  {
    id: 'team',
    name: 'team.json',
    displayName: 'Our Team',
    type: 'file',
    tooltip: 'Meet the NULL EEC core team members',
    icon: '👥',
    content: [
      {
        id: 1,
        name: 'Arun Kumar',
        role: 'President',
        year: 'Final Year CSE',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arun',
        bio: 'Passionate about web security and CTF competitions',
        skills: ['Web Security', 'CTF Player', 'Bug Bounty'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 2,
        name: 'Priya Sharma',
        role: 'Vice President',
        year: 'Third Year CSE',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
        bio: 'Network security enthusiast and CTF organizer',
        skills: ['Network Security', 'Pentesting', 'Forensics'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 3,
        name: 'Rajesh Menon',
        role: 'Technical Lead',
        year: 'Third Year CSE',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
        bio: 'Specializes in reverse engineering and malware analysis',
        skills: ['Reverse Engineering', 'Binary Exploitation', 'Malware'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 4,
        name: 'Sneha Iyer',
        role: 'Events Coordinator',
        year: 'Second Year CSE',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
        bio: 'Organizing amazing cybersecurity events and workshops',
        skills: ['Event Management', 'Web Security', 'Social Engineering'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 5,
        name: 'Vikram Reddy',
        role: 'Content Lead',
        year: 'Third Year CSE',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
        bio: 'Creating educational content and writeups',
        skills: ['Technical Writing', 'Cryptography', 'OSINT'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 6,
        name: 'Divya Krishnan',
        role: 'Social Media Manager',
        year: 'Second Year IT',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Divya',
        bio: 'Managing club social media and outreach',
        skills: ['Social Media', 'Design', 'Web Security'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      }
    ]
  },
  {
    id: 'contact',
    name: 'contact.txt',
    displayName: 'Contact Us',
    type: 'file',
    tooltip: 'Get in touch with NULL EEC',
    icon: '📧',
    content: {
      type: 'contact-us',
      hero: {
        title: 'Connect with NULL EEC',
        subtitle: 'Join the Cybersecurity Community',
        description: 'Ready to join NULL EEC? Connect with us through multiple channels and start your cybersecurity journey.',
        tagline: 'Your Journey in Cybersecurity Starts with a Single Connection'
      },
      quickConnect: {
        title: '🚀 Quick Connect',
        channels: [
          {
            title: 'Discord Server',
            icon: '💬',
            link: 'discord.gg/null-eec',
            color: 'purple',
            description: 'Real-time discussions, CTF collaboration, and community bonding',
            responseTime: 'Instant'
          },
          {
            title: 'Telegram Group',
            icon: '📱',
            link: 't.me/nulleec',
            color: 'blue',
            description: 'Quick updates and event reminders',
            responseTime: 'Instant'
          },
          {
            title: 'General Email',
            icon: '📧',
            link: 'null.eec@easwari.edu.in',
            color: 'green',
            description: 'Questions and membership inquiries',
            responseTime: '12-24 hours'
          },
          {
            title: 'Social Media',
            icon: '🌐',
            links: ['@null_eec (Instagram)', 'linkedin.com/company/null-eec', 'github.com/null-eec'],
            color: 'orange',
            description: 'Follow for updates and community content',
            responseTime: 'Daily'
          }
        ]
      },
      contactTypes: {
        title: '📞 Contact Categories',
        types: [
          {
            title: 'Workshop Registrations',
            email: 'workshops@null.eec',
            icon: '🎓',
            color: 'blue',
            responseTime: '12-24 hours',
            description: 'Training program inquiries and educational content requests'
          },
          {
            title: 'Partnership & Collaboration',
            email: 'partnerships@null.eec',
            icon: '🤝',
            color: 'purple',
            responseTime: '48-72 hours',
            description: 'Corporate partnerships, sponsorships, and guest lectures'
          },
          {
            title: 'Technical Support',
            email: 'tech@null.eec',
            icon: '🔧',
            color: 'green',
            responseTime: '24 hours',
            description: 'Technical issues, website problems, and platform queries'
          },
          {
            title: 'Media & Press',
            email: 'media@null.eec',
            icon: '📰',
            color: 'orange',
            responseTime: '24-48 hours',
            description: 'Press releases, media coverage, and official statements'
          }
        ]
      },
      leadership: {
        title: '👥 Club Leadership',
        contacts: [
          {
            title: 'President',
            phone: '+91 98XXX XXXXX',
            availability: '10 AM - 8 PM',
            icon: '👑'
          },
          {
            title: 'Vice President',
            phone: '+91 98XXX XXXXX',
            availability: '11 AM - 7 PM',
            icon: '🎯'
          },
          {
            title: 'Technical Lead',
            phone: '+91 98XXX XXXXX',
            availability: '2 PM - 9 PM',
            icon: '⚡'
          }
        ],
        faculty: [
          {
            title: 'Faculty Advisor',
            phone: '+91 98XXX XXXXX',
            availability: '9 AM - 5 PM (weekdays)',
            icon: '👨‍🏫'
          },
          {
            title: 'Department HOD',
            phone: '+91 98XXX XXXXX',
            availability: '10 AM - 4 PM (weekdays)',
            icon: '🏛️'
          }
        ]
      },
      location: {
        title: '🏢 Physical Location & Office Hours',
        address: {
          title: 'NULL EEC Club Room',
          details: [
            'Computer Science Department',
            'Block A, 3rd Floor, Room 305',
            'Easwari Engineering College',
            'Ramapuram, Chennai - 600 089, Tamil Nadu'
          ],
          coordinates: '13.0358° N, 80.1947° E'
        },
        hours: [
          {
            title: 'Regular Operations',
            schedule: [
              'Monday - Friday: 4:00 PM - 6:00 PM',
              'Saturday: 2:00 PM - 5:00 PM',
              'Sunday: Closed (Except special events)'
            ],
            icon: '🕐'
          },
          {
            title: 'Extended Hours (Events)',
            schedule: [
              'Workshop Days: 9:00 AM - 8:00 PM',
              'CTF Competitions: 24-hour access',
              'Guest Lectures: 10:00 AM - 6:00 PM'
            ],
            icon: '⚡'
          },
          {
            title: 'Exam Period',
            schedule: [
              'Monday - Friday: 5:00 PM - 6:00 PM',
              'Saturday: 3:00 PM - 4:00 PM',
              'Sunday: Closed'
            ],
            icon: '📚'
          }
        ]
      },
      faq: {
        title: '❓ Frequently Asked Questions',
        categories: [
          {
            title: 'Getting Started',
            icon: '🔰',
            questions: [
              {
                q: 'I\'m completely new to cybersecurity. Can I still join NULL EEC?',
                a: 'Absolutely! We welcome beginners with specialized workshop series and mentorship programs.'
              },
              {
                q: 'Is there any membership fee?',
                a: 'NULL EEC membership is completely free for all EEC students. We believe in accessible education.'
              },
              {
                q: 'What if I\'m from a different department?',
                a: 'We welcome ALL departments! Cybersecurity is interdisciplinary with diverse perspectives.'
              }
            ]
          },
          {
            title: 'Events & Activities',
            icon: '📅',
            questions: [
              {
                q: 'How do I stay updated about events?',
                a: 'Join Discord/Telegram for instant notifications, plus social media and email updates.'
              },
              {
                q: 'Can external students participate?',
                a: 'Many events are open to external participants, especially CTF competitions and lectures.'
              },
              {
                q: 'Do you provide certificates?',
                a: 'Yes! Digital certificates for workshops, plus physical certificates for major events.'
              }
            ]
          },
          {
            title: 'Support & Opportunities',
            icon: '🛠️',
            questions: [
              {
                q: 'How do I report security vulnerabilities?',
                a: 'Report responsibly to security@null.eec - we work with college IT for proper disclosure.'
              },
              {
                q: 'Can I get help with projects?',
                a: 'Yes! Use Discord #tech-help or visit during office hours for guidance.'
              },
              {
                q: 'Do you help with internships/jobs?',
                a: 'We maintain industry connections and share opportunities via LinkedIn and Discord.'
              }
            ]
          }
        ]
      },
      partnerships: {
        title: '🏆 Partnership Opportunities',
        types: [
          {
            title: 'Corporate Workshop Sponsorships',
            description: 'Sponsor technical workshops and get brand visibility',
            benefits: ['Brand Exposure', 'Talent Access', 'Community Engagement'],
            icon: '🎓'
          },
          {
            title: 'CTF Competition Partnerships',
            description: 'Collaborate on large-scale cybersecurity competitions',
            benefits: ['Industry Recognition', 'Skill Assessment', 'Recruitment'],
            icon: '🏆'
          },
          {
            title: 'Guest Expert Sessions',
            description: 'Share expertise with enthusiastic community',
            benefits: ['Knowledge Sharing', 'Community Building', 'Professional Network'],
            icon: '👨‍🏫'
          },
          {
            title: 'Research Collaborations',
            description: 'Partner on cutting-edge cybersecurity research',
            benefits: ['Innovation', 'Publications', 'Future Solutions'],
            icon: '🔬'
          }
        ],
        benefits: {
          title: 'Partnership Benefits',
          items: [
            {
              title: 'Brand Visibility',
              description: 'Exposure among Tamil Nadu\'s most active cybersecurity students',
              icon: '📢'
            },
            {
              title: 'Talent Pipeline',
              description: 'Access to skilled and passionate cybersecurity students',
              icon: '👥'
            },
            {
              title: 'Innovation Exposure',
              description: 'Fresh perspectives and creative security solutions',
              icon: '💡'
            },
            {
              title: 'CSR Fulfillment',
              description: 'Educational and community development initiatives',
              icon: '🌱'
            }
          ]
        },
        process: {
          title: 'Partnership Process',
          steps: [
            {
              step: 1,
              title: 'Initial Contact',
              description: 'Email partnerships@null.eec with your proposal',
              icon: '📧'
            },
            {
              step: 2,
              title: 'Discussion Meeting',
              description: 'Schedule a call with our leadership team',
              icon: '📞'
            },
            {
              step: 3,
              title: 'Proposal Review',
              description: 'We\'ll review and provide feedback within 1 week',
              icon: '📋'
            },
            {
              step: 4,
              title: 'Agreement',
              description: 'Finalize partnership terms and collaboration details',
              icon: '🤝'
            },
            {
              step: 5,
              title: 'Execution',
              description: 'Begin collaboration with full community support',
              icon: '🚀'
            }
          ]
        }
      },
      valueProposition: {
        title: '🌟 Why Choose NULL EEC?',
        features: [
          {
            title: 'Practical Focus',
            description: 'Every interaction leads to hands-on learning',
            icon: '🎯',
            color: 'blue'
          },
          {
            title: 'Active Community',
            description: '200+ engaged members across engineering disciplines',
            icon: '🌐',
            color: 'green'
          },
          {
            title: 'Continuous Growth',
            description: 'Regular events, workshops, and skill development',
            icon: '🔄',
            color: 'purple'
          },
          {
            title: 'Industry Connections',
            description: 'Strong network of professionals and alumni',
            icon: '🤝',
            color: 'orange'
          },
          {
            title: 'Proven Track Record',
            description: 'Successful events, competition wins, achievements',
            icon: '📈',
            color: 'teal'
          },
          {
            title: 'Open Culture',
            description: 'Welcoming environment for all skill levels',
            icon: '🔓',
            color: 'red'
          }
        ]
      },
      cta: {
        title: '🎉 Ready to Connect?',
        steps: [
          {
            step: '🚀',
            title: 'Quick Start',
            description: 'Join our Discord server for immediate community access'
          },
          {
            step: '📧',
            title: 'Formal Inquiry',
            description: 'Email us for detailed information about programs'
          },
          {
            step: '🏢',
            title: 'Visit Us',
            description: 'Drop by during office hours for face-to-face interaction'
          },
          {
            step: '📱',
            title: 'Follow Us',
            description: 'Stay updated through our social media channels'
          },
          {
            step: '🤝',
            title: 'Collaborate',
            description: 'Reach out for partnership and collaboration opportunities'
          }
        ],
        finalMessage: 'Ready to join the NULL EEC community? We\'re excited to welcome you to our family of cybersecurity enthusiasts, ethical hackers, and future security leaders!',
        motto: 'Connect. Learn. Secure. - NULL EEC'
      }
    }
  }
];

export const getFileById = (id: string): FileNode | undefined => {
  return fileSystem.find(file => file.id === id);
};

export const getFileByName = (name: string): FileNode | undefined => {
  return fileSystem.find(file =>
    file.name.toLowerCase() === name.toLowerCase()
  );
};