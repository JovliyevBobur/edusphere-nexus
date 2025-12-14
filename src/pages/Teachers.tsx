import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Teachers: React.FC = () => {
  const { t } = useLanguage();

  const teachers = [
    // Mathematics - 6 total
    {
      name: 'Qolandarov Davronbek',
      subject: 'Mathematics',
      image: '/teachers/matematika5.png',
      telegram: '@Qalandarov_Davronbek',
      phone: '+998 (97) 458-25-87',
    },
    {
      name: 'Sapayev Doniyor',
      subject: 'Mathematics',
      image: '/teachers/matematika2.jpg',
      telegram: '',
      phone: '+998 (97) 430-80-15',
    },
    {
      name: 'Ibodullayev Sherzod',
      subject: 'Mathematics',
      image: '/teachers/matematika4.png',
      telegram: '',
      phone: '+998 (94) 117-90-20',
    },
    {
      name: 'Radjapov Davlatyor',
      subject: 'Mathematics',
      image: '/teachers/matematika3.jpg',
      telegram: '',
      phone: '+998 (99) 022-60-96',
    },
    {
      name: 'Matchanov Temur',
      subject: 'Mathematics',
      image: '/teachers/matematika.jpg',
      telegram: '',
      phone: '+998 (99) 747-21-13',
    },
    {
      name: 'Xojixonova Kumush',
      subject: 'Mathematics',
      image: '/teachers/matematika6.jpg',
      telegram: '',
      phone: '+998 (94) 676-48-46',
    },
    // Physics - 2 total (1 original + 1 new)
    {
      name: 'Matmurotov Quvandiq',
      subject: 'Physics',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (97) 211-44-71',
    },
    {
      name: 'Jabborov Vohidjon',
      subject: 'Physics',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (97) 859-01-86',
    },
    {
      name: ' Mardon',
      subject: '',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (97) 451-79-39',
    },
    {
      name: 'Durdiyeva Farzona',
      subject: 'History',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (93) 116-29-94',
    },
    // English Literature - 5 total (1 original + 4 new)
    {
      name: 'Babajonova Dilfuza',
      subject: 'English Literature',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (99) 964-11-86',
    },
    {
      name: 'Urunova Malohat',
      subject: 'English Literature',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (97) 130-56-88',
    },
    {
      name: 'Axmedova Shoira',
      subject: 'English Literature',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (97) 451-51-81',
    },
    {
      name: 'Madraimova Farangiz',
      subject: 'English Literature',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      telegram: '',
      phone: '',
    },
    // Russian Literature - 3 total (1 changed + 2 new)
    {
      name: 'Bekturdiyev Gʹayrat',
      subject: 'Russian Literature',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (99) 747-21-13 ',
    },
    {
      name: 'Sultonova Maftuna',
      subject: 'Russian Literature',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (95) 361-80-95',
    },
    {
      name: 'Baxtiyorova Dinara',
      subject: 'Russian Literature',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (50) 250-98-68',
    },
    // Chemistry - 1 total (keep original)
    {
      name: 'Allaberganova Gulbahor',
      subject: 'Chemistry',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (99) 865-74-38',
    },
    // Computer Science - 2 total (1 original + 1 new)
    {
      name: 'Raximova Nifular',
      subject: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (97) 790-01-38',
    },
    {
      name: 'Ataboyeva Mahliyo',
      subject: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (99) 739-40-78',
    },
    {
      name: 'Xakimov Xamza',
      subject: 'Geography',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (94) 110-40-84',
    },
    {
      name: 'Raxmonov Alisher',
      subject: 'Physical Education',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '',
    },
    {
      name: 'Roʹzibayev Azizbek',
      subject: '',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '',
    },
    {
      name: ' Hasanboy',
      subject: 'Art',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '',
    },
    {
      name: 'Madyorova Feruza',
      subject: 'Uzbek Literature',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (94) 195-14-19',
    },
    {
      name: 'Avezova Gulbadan',
      subject: 'Uzbek Literature',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (97) 561-10-37',
    },
    {
      name: 'Azatova Laylo',
      subject: 'Uzbek Literature',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '',
    },
    {
      name: 'Arkayeva Iroda',
      subject: 'Uzbek Literature',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '',
    },
    // Biology - 1 total (keep original)
    {
      name: 'Radjabova Munisa',
      subject: 'Biology',
      image: '/teachers/biologiya.jpg',
      telegram: '',
      phone: '+998 (88) 525-54-45',
    },
    {
      name: 'Eshmuratova Munojat',
      subject: 'Biology',
      image: '/teachers/biologiya2.jpg',
      telegram: '',
      phone: '+998 (97) 459-20-88',
    },
    {
      name: 'Oʹrinboyeva Shaxzoda',
      subject: 'Secretary',
      image: '/teachers/kotiba.jpg',
      telegram: '',
      phone: '+998 (97) 211-14-43',
    },
    {
      name: 'Saparova Sabohat',
      subject: 'Psychologist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      telegram: '',
      phone: '+998 (97) 299-88-40',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-hero overflow-hidden">
        {/* Background Image with Backdrop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/ima.png)',
          }}
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-md" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t('teachers')}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
              Meet Our Teachers
            </h1>
            <p className="text-lg text-muted-foreground">
              Our dedicated faculty members bring expertise, passion, and a commitment 
              to nurturing every student's potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 rounded-2xl bg-card border border-border/50 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                  {teacher.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {teacher.subject}
                </p>
                <div className="flex justify-center gap-2">
                  {teacher.telegram && (
                    <a
                      href={teacher.telegram.startsWith('http') ? teacher.telegram : `https://t.me/${teacher.telegram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="Telegram"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  )}
                  {teacher.phone && (
                    <a
                      href={`tel:${teacher.phone}`}
                      className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="Phone"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Teachers;
