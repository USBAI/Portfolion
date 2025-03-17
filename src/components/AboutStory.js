import React from 'react';
import { motion } from 'framer-motion';

const AboutStory = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Min Resa Inom Tech
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300"
          >
            <p className="leading-relaxed">
              Hej! Jag är Elias Luzwehimana, en passionerad mjukvaruutvecklare med en djup fascination för att skapa innovativa digitala lösningar. Min resa inom teknologi började med en enkel nyfikenhet om hur digitala system fungerar, vilket snabbt utvecklades till en brinnande passion för mjukvaruutveckling.
            </p>
            <p className="leading-relaxed">
              Det som verkligen inspirerar mig är mötet mellan frontend- och backendutveckling. Jag älskar att skapa vackra, intuitiva användargränssnitt samtidigt som jag bygger robusta serverarkitekturer. Detta fullstack-perspektiv låter mig skapa omfattande lösningar som inte bara ser bra ut utan också fungerar sömlöst.
            </p>
            <p className="leading-relaxed">
              Min erfarenhet med moderna teknologier som React.js, Python och AWS har lärt mig att de bästa lösningarna kommer från förståelsen av både de tekniska möjligheterna och de mänskliga behoven de tjänar. Jag är särskilt passionerad för AI-integration och molnteknologier, och utforskar ständigt nya sätt att utnyttja dessa verktyg för bättre användarupplevelser.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">Vad Som Driver Mig</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">→</span>
                  Bygga lösningar som gör verklig skillnad
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">→</span>
                  Utforska nya teknologier och bästa praxis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">→</span>
                  Skapa intuitiva och tillgängliga användarupplevelser
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">Mitt Tillvägagångssätt</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">→</span>
                  Användarcentrerat designtänkande
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">→</span>
                  Ren, underhållbar kodarkitektur
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">→</span>
                  Kontinuerligt lärande och förbättring
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-300 italic">
            "Jag tror på teknologins kraft att förvandla idéer till verklighet, och jag är dedikerad till att vara en del av den transformationen."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory; 