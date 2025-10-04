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
            highlights: ['22 Core Members', 'Multi-Department', 'Diverse Expertise']
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
              '/Inception1.jpg',
              '/Inception2.jpg',
              '/Inception3.jpg',
              '/Inception4.jpg'
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
              'LinuxWorkShop1.jpg',
              'LinuxWorkShop2.jpg',
              'LinuxWorkShop3.jpg',
              'LinuxWorkShop4.jpg'
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
              'CTF1.jpg',
              'CTF2.jpg',
              'CTF3.jpg',
              'CTF4.jpg'
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
              'Cyrus1.jpg',
              'Cyrus2.jpg',
              'Cyrus3.jpg',
              'Cyrus4.jpg'
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
              'ThreatX1.jpg',
              'ThreatX2.jpg',
              'ThreatX3.jpg',
              'ThreatX4.jpg'
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
              'DevSecOps1.jpg',
              'DevSecOps2.jpg',
              'DevSecOps3.jpg',
              'DevSecOps4.jpg'
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
      photos: [
        {
          id: 1,
          url: '/DevSecOps1.jpg',
          caption: 'DevSecOps CTF competition in action',
          event: 'DevSecOps CTF',
          category: 'CTF Competitions',
          size: 'large'
        },
        {
          id: 2,
          url: '/DevSecOps2.jpg',
          caption: 'Teams collaborating during CTF challenges',
          event: 'DevSecOps CTF',
          category: 'CTF Competitions',
          size: 'medium'
        },
        {
          id: 3,
          url: '/DevSecOps3.jpg',
          caption: 'Intense problem-solving moments',
          event: 'DevSecOps CTF',
          category: 'CTF Competitions',
          size: 'medium'
        },
        {
          id: 4,
          url: '/LinuxWorkShop1.jpg',
          caption: 'Linux workshop hands-on training',
          event: 'Linux Workshop',
          category: 'Workshops & Training',
          size: 'large'
        },
        {
          id: 5,
          url: '/LinuxWorkShop2.jpg',
          caption: 'Interactive learning sessions',
          event: 'Linux Workshop',
          category: 'Workshops & Training',
          size: 'medium'
        },
        {
          id: 6,
          url: '/Inception1.jpg',
          caption: 'Team building and networking',
          event: 'Inception Event',
          category: 'Community & Team',
          size: 'medium'
        },
        {
          id: 7,
          url: '/Inception2.jpg',
          caption: 'Collaborative learning environment',
          event: 'Inception Event',
          category: 'Community & Team',
          size: 'small'
        },
        {
          id: 8,
          url: '/Cyrus1.jpg',
          caption: 'Industry expert sharing insights',
          event: 'NULL CYRUS',
          category: 'Guest Lectures & Events',
          size: 'large'
        },
        {
          id: 9,
          url: '/Cyrus2.jpg',
          caption: 'Interactive Q&A sessions',
          event: 'NULL CYRUS',
          category: 'Guest Lectures & Events',
          size: 'medium'
        },
        {
          id: 10,
          url: '/DevSecOps4.jpg',
          caption: 'Victory moments and team celebrations',
          event: 'DevSecOps CTF',
          category: 'CTF Competitions',
          size: 'medium'
        },
        {
          id: 11,
          url: '/LinuxWorkShop3.jpg',
          caption: 'Practical command line exercises',
          event: 'Linux Workshop',
          category: 'Workshops & Training',
          size: 'small'
        },
        {
          id: 12,
          url: '/Inception3.jpg',
          caption: 'Knowledge sharing sessions',
          event: 'Inception Event',
          category: 'Community & Team',
          size: 'medium'
        },
        {
          id: 13,
          url: '/Cyrus3.jpg',
          caption: 'Learning from professionals',
          event: 'NULL CYRUS',
          category: 'Guest Lectures & Events',
          size: 'small'
        },
        {
          id: 14,
          url: '/DevSecOps5.jpg',
          caption: 'Advanced CTF techniques demonstration',
          event: 'DevSecOps CTF',
          category: 'CTF Competitions',
          size: 'medium'
        },
        {
          id: 15,
          url: '/LinuxWorkShop4.jpg',
          caption: 'Students mastering Linux concepts',
          event: 'Linux Workshop',
          category: 'Workshops & Training',
          size: 'large'
        },
        {
          id: 16,
          url: '/Inception4.jpg',
          caption: 'Building lasting connections',
          event: 'Inception Event',
          category: 'Community & Team',
          size: 'medium'
        },
        {
          id: 17,
          url: '/Cyrus4.jpg',
          caption: 'Engaging presentations and discussions',
          event: 'NULL CYRUS',
          category: 'Guest Lectures & Events',
          size: 'medium'
        },
        {
          id: 18,
          url: '/DevSecOps6.jpg',
          caption: 'Security professionals mentoring students',
          event: 'DevSecOps CTF',
          category: 'CTF Competitions',
          size: 'small'
        },
        {
          id: 19,
          url: '/LinuxWorkShop5.jpg',
          caption: 'Advanced Linux security techniques',
          event: 'Linux Workshop',
          category: 'Workshops & Training',
          size: 'medium'
        },
        {
          id: 20,
          url: '/Inception5.jpg',
          caption: 'Creative moments and innovation',
          event: 'Inception Event',
          category: 'Community & Team',
          size: 'small'
        },
        {
          id: 21,
          url: '/Cyrus5.jpg',
          caption: 'Breakthrough moments in learning',
          event: 'NULL CYRUS',
          category: 'Fun & Innovation',
          size: 'medium'
        },
        {
          id: 22,
          url: '/DevSecOps7.jpg',
          caption: 'Final competition awards ceremony',
          event: 'DevSecOps CTF',
          category: 'CTF Competitions',
          size: 'large'
        },
        {
          id: 23,
          url: '/LinuxWorkShop6.jpg',
          caption: 'Workshop completion and certificates',
          event: 'Linux Workshop',
          category: 'Workshops & Training',
          size: 'medium'
        },
        {
          id: 24,
          url: '/Inception6.jpg',
          caption: 'Fun team activities and bonding',
          event: 'Inception Event',
          category: 'Community & Team',
          size: 'medium'
        },
        {
          id: 25,
          url: '/Inception7.jpg',
          caption: 'Inaugural ceremony proceedings',
          event: 'Inception Event',
          category: 'Community & Team',
          size: 'small'
        },
        {
          id: 26,
          url: '/Cyrus6.jpg',
          caption: 'Celebrating achievements together',
          event: 'NULL CYRUS',
          category: 'Fun & Innovation',
          size: 'medium'
        }
      ],
      stats: {
        totalPhotos: 26,
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
        name: 'Nanda Kumar',
        role: 'President',
        department: 'CYBER',
        year: 'Final Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NandaKumar',
        bio: 'Leading NULL EEC with vision and passion for cybersecurity excellence',
        skills: ['Leadership', 'Cybersecurity', 'Strategic Planning'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 2,
        name: 'Saffron Zen',
        role: 'Vice President',
        department: 'ECE',
        year: 'Third Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SaffronZen',
        bio: 'Supporting leadership and driving technical initiatives forward',
        skills: ['Electronics', 'Cybersecurity', 'Team Management'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 3,
        name: 'Lavanya',
        role: 'Secretary',
        department: 'CYBER',
        year: 'Third Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lavanya',
        bio: 'Organizing and coordinating all NULL EEC activities efficiently',
        skills: ['Organization', 'Documentation', 'Communication'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 4,
        name: 'Gladwinn',
        role: 'Joint Secretary',
        department: 'CSE',
        year: 'Third Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gladwinn',
        bio: 'Supporting secretarial duties and maintaining organizational flow',
        skills: ['Computer Science', 'Administration', 'Team Support'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 5,
        name: 'Varshitha',
        role: 'Event Manager',
        department: 'CSE',
        year: 'Third Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Varshitha',
        bio: 'Managing and organizing all NULL EEC events and workshops',
        skills: ['Event Management', 'Project Planning', 'Coordination'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 6,
        name: 'Yavanika',
        role: 'Event Coordinator',
        department: 'ECE',
        year: 'Second Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yavanika',
        bio: 'Coordinating events and ensuring smooth execution',
        skills: ['Event Coordination', 'Electronics', 'Team Work'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 7,
        name: 'S Roshni',
        role: 'Joint Event Coordinator',
        department: 'CYBER',
        year: 'Second Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SRoshni',
        bio: 'Supporting event coordination with cybersecurity expertise',
        skills: ['Event Support', 'Cybersecurity', 'Organization'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 8,
        name: 'C Siva Kesav',
        role: 'Technical Head',
        department: 'CYBER',
        year: 'Final Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CSivaKesav',
        bio: 'Leading technical initiatives and cybersecurity projects',
        skills: ['Web Development', 'Cybersecurity', 'Technical Leadership'],
        github: 'https://github.com/CSivakesav',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 9,
        name: 'Shivanee',
        role: 'CTF Developer',
        department: 'CYBER',
        year: 'Third Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shivanee',
        bio: 'Developing challenging CTF problems and security challenges',
        skills: ['CTF Development', 'Security Challenges', 'Problem Solving'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 10,
        name: 'V.G.Karunya',
        role: 'Joint CTF Developer',
        department: 'CYBER',
        year: 'Third Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VGKarunya',
        bio: 'Supporting CTF development with innovative challenge creation',
        skills: ['CTF Challenges', 'Security Research', 'Team Collaboration'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 11,
        name: 'Ashik K',
        role: 'Team Member',
        department: 'CYBER',
        year: 'Second Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AshikK',
        bio: 'Contributing to NULL EEC cybersecurity initiatives',
        skills: ['Cybersecurity', 'Learning', 'Team Support'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 12,
        name: 'Varsha S',
        role: 'Content Creator',
        department: 'CYBER',
        year: 'Third Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VarshaS',
        bio: 'Creating engaging content for cybersecurity education',
        skills: ['Content Creation', 'Technical Writing', 'Design'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 13,
        name: 'Ashika B',
        role: 'Content Editor',
        department: 'CYBER',
        year: 'Second Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AshikaB',
        bio: 'Editing and refining content for quality assurance',
        skills: ['Content Editing', 'Quality Assurance', 'Technical Review'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 14,
        name: 'Samvriddha',
        role: 'Content Editor',
        department: 'ECE',
        year: 'Second Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Samvriddha',
        bio: 'Supporting content editing with electronics background',
        skills: ['Content Editing', 'Electronics', 'Technical Documentation'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 15,
        name: 'Vaishali',
        role: 'Digital Head',
        department: 'IT',
        year: 'Third Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vaishali',
        bio: 'Leading digital initiatives and online presence',
        skills: ['Digital Marketing', 'IT Solutions', 'Social Media'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 16,
        name: 'Shrinithi',
        role: 'Digital Editor',
        department: 'IT',
        year: 'Second Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shrinithi',
        bio: 'Editing digital content and managing online assets',
        skills: ['Digital Editing', 'Graphic Design', 'IT Support'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 17,
        name: 'Jessica Sherene',
        role: 'Joint Editor',
        department: 'IT',
        year: 'Second Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JessicaSherene',
        bio: 'Supporting editorial work with IT expertise',
        skills: ['Content Editing', 'IT Systems', 'Team Collaboration'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 18,
        name: 'Jamuna',
        role: 'Joint Editor',
        department: 'IT',
        year: 'Second Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jamuna',
        bio: 'Contributing to editorial tasks and content management',
        skills: ['Content Management', 'IT Support', 'Editorial Support'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 19,
        name: 'Leeben Mark',
        role: 'Executive Head',
        department: 'CYBER',
        year: 'Third Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeebenMark',
        bio: 'Leading executive operations and strategic initiatives',
        skills: ['Executive Leadership', 'Strategy', 'Cybersecurity'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 20,
        name: 'Laxitha',
        role: 'Executive Member',
        department: 'CYBER',
        year: 'Second Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Laxitha',
        bio: 'Supporting executive functions and organizational growth',
        skills: ['Executive Support', 'Organization', 'Cybersecurity'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 21,
        name: 'Farisa',
        role: 'Executive Member',
        department: 'CYBER',
        year: 'Second Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Farisa',
        bio: 'Contributing to executive team with fresh perspectives',
        skills: ['Team Support', 'Innovation', 'Cybersecurity'],
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      },
      {
        id: 22,
        name: 'Taruna',
        role: 'Executive Member',
        department: 'CYBER',
        year: 'Second Year',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Taruna',
        bio: 'Executing organizational initiatives with dedication',
        skills: ['Project Execution', 'Team Work', 'Cybersecurity'],
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