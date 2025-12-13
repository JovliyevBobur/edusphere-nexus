import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Teachers: React.FC = () => {
  const { t } = useLanguage();

  const teachers = [
    {
      name: 'Dr. Sarah Johnson',
      subject: 'Mathematics',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      email: 'sarah.johnson@brightfuture.edu',
      phone: '+1 (555) 101-0001',
    },
    {
      name: 'Prof. Michael Chen',
      subject: 'Physics',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      email: 'michael.chen@brightfuture.edu',
      phone: '+1 (555) 101-0002',
    },
    {
      name: 'Dr. Emily Parker',
      subject: 'Biology',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
      email: 'emily.parker@brightfuture.edu',
      phone: '+1 (555) 101-0003',
    },
    {
      name: 'Mr. David Williams',
      subject: 'English Literature',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      email: 'david.williams@brightfuture.edu',
      phone: '+1 (555) 101-0004',
    },
    {
      name: 'Ms. Maria Garcia',
      subject: 'Spanish',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop',
      email: 'maria.garcia@brightfuture.edu',
      phone: '+1 (555) 101-0005',
    },
    {
      name: 'Mr. James Brown',
      subject: 'Physical Education',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      email: 'james.brown@brightfuture.edu',
      phone: '+1 (555) 101-0006',
    },
    {
      name: 'Dr. Lisa Anderson',
      subject: 'Chemistry',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      email: 'lisa.anderson@brightfuture.edu',
      phone: '+1 (555) 101-0007',
    },
    {
      name: 'Mr. Robert Taylor',
      subject: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop',
      email: 'robert.taylor@brightfuture.edu',
      phone: '+1 (555) 101-0008',
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
                  <a
                    href={`mailto:${teacher.email}`}
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${teacher.phone}`}
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    title="Phone"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
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
