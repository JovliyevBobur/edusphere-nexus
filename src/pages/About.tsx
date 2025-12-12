import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, History, Award, Users, BookOpen } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const achievements = [
    { icon: Award, value: '150+', label: 'Awards & Recognition' },
    { icon: Users, value: '50,000+', label: 'Alumni Worldwide' },
    { icon: BookOpen, value: '95%', label: 'University Placement' },
  ];

  const leadership = [
    { name: 'Dr. Sarah Johnson', role: 'Principal', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop' },
    { name: 'Prof. Michael Chen', role: 'Vice Principal', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' },
    { name: 'Dr. Emily Parker', role: 'Academic Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t('about')}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
              Building Futures Since 1990
            </h1>
            <p className="text-lg text-muted-foreground">
              For over three decades, Bright Future Academy has been a beacon of educational excellence, 
              nurturing young minds and preparing them for the challenges of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 rounded-2xl bg-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {t('ourMission')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('missionText')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 rounded-2xl bg-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {t('ourVision')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('visionText')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                <History className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                {t('ourHistory')}
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1990 by visionary educators Dr. James Bright and Mrs. Helen Bright, 
                Bright Future Academy began as a small school with just 50 students and a dream 
                to transform education in our community.
              </p>
              <p>
                Over the years, we have grown into a premier educational institution with 
                state-of-the-art facilities, serving over 2,500 students from diverse backgrounds. 
                Our commitment to academic excellence, character development, and innovation 
                has remained unwavering throughout our journey.
              </p>
              <p>
                Today, our alumni are leaders in various fields across the globe, carrying forward 
                the values and knowledge they gained at Bright Future Academy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Our Achievements
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border/50"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="font-display text-4xl font-bold text-foreground mb-2">
                  {item.value}
                </div>
                <div className="text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Our Leadership
            </h2>
            <p className="text-muted-foreground mt-3">
              Meet the dedicated leaders guiding our institution.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {person.name}
                </h3>
                <p className="text-muted-foreground text-sm">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
