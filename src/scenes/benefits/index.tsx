import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';
import { BenefitType, SelectedPage } from '@/shared/types';
import HText from '@/shared/HText';
import Benefit from './Benefit';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of Art Facilities',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente repudiandae',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente repudiandae',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente repudiandae',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sapiente
            molestiae explicabo expedita eligendi vitae ea dolorem distinctio
            veritatis inventore odio quos mollitia aspernatur, quisquam
            consectetur nulla ratione praesentium nesciunt!
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 md:flex items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Benefits;
