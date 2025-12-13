import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, BookOpen, Users, Calendar, GraduationCap, Trophy, FileText, Laptop, Leaf, Brain, FlaskConical, Atom, Calculator, Activity, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const achievements = [
    { icon: Users, value: '295+', label: 'Students' },
    { icon: BookOpen, value: '29+', label: 'Teachers' },
    { icon: Calendar, value: '4+', label: 'Years of Experience' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: GraduationCap, value: '95%', label: 'University Placement' },
  ];

  const leadership = [
    { name: 'Dr. Sarah Johnson', role: 'Principal', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop' },
    { name: 'Prof. Michael Chen', role: 'Vice Principal', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' },
    { name: 'Dr. Emily Parker', role: 'Academic Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop' },
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
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t('about')}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
              Building Futures Since 2022
            </h1>
            <p className="text-lg text-muted-foreground">
              For over 4 years, Tuproqqal'a tuman Ixtisoslashtirilgan maktabi has been a beacon of educational excellence, 
              nurturing young minds and preparing them for the challenges of tomorrow.
            </p>
            <p className="text-base text-muted-foreground mt-4">
              Tuproqqal'a tuman ixtisoslashtirilgan maktabi was established in accordance with Decree No. 106 of the President of the Republic of Uzbekistan dated October 21, 2022, and operates within the system of the Agency for Specialized Educational Institutions.
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

      {/* Spiritual, Educational, and Sports Activities & Psychological Support */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Image with Backdrop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/maktab/rasm.png)',
          }}
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 rounded-2xl bg-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Spiritual, Educational, and Sports Activities
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Great attention is paid to the physical and moral development of students at the school. Winners of national and international competitions in sports such as karate and Turon martial arts are being trained. In addition, festive events, contests, and military-sports competitions are regularly organized.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 rounded-2xl bg-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Psychological Support
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Throughout the academic year, the school psychologist conducts more than 45 psychological training sessions aimed at developing students' teamwork, leadership, and social adaptation skills.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality of Education and Achievements */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Quality of Education and Achievements
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Highly qualified teachers holding national and international certifications work at the school. Our students actively and successfully participate in regional, national, and international academic olympiads, competitions, and sports events, consistently achieving prize-winning places.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-muted/50 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Winners of regional and national olympiads
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    in mathematics and other subjects
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 rounded-xl bg-muted/50 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Students holding certificates
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    IELTS, CEFR, and national certificates
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 rounded-xl bg-muted/50 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    100% University Admission
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    In the 2024/2025 academic year, 100% of graduates were admitted to higher education institutions
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clubs and Development */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Image with Backdrop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/maktab/rasm5.png)',
          }}
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Clubs and Development
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At the school, the following clubs operate with the aim of developing students' interests and talents:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-muted/50 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Laptop className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    Computer Literacy
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 rounded-xl bg-muted/50 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    Biology
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 rounded-xl bg-muted/50 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    Zakovat (Intellectual Club)
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-6 rounded-xl bg-muted/50 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FlaskConical className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    Young Chemists
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="p-6 rounded-xl bg-muted/50 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Atom className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    Young Physicists
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="p-6 rounded-xl bg-muted/50 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    Mathematicians
                  </h3>
                </motion.div>
              </div>
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
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Our Achievements
            </h2>
          </motion.div>
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-card shadow-sm border border-border/50"
              >
                <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-display font-bold text-2xl text-foreground mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
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
