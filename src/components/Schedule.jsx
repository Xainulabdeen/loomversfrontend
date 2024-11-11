// Schedule.js
import React from 'react';
import { motion } from 'framer-motion';

const Schedule = ({ title, scheduleData }) => (
  <section id="launch-schedule" className="mx-auto max-w-5xl px-4 py-20 text-white">
    <motion.h1
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      className="mb-20 text-4xl font-black uppercase text-zinc-50"
    >
      {title}
    </motion.h1>
    {scheduleData.map((data, idx) => (
      <ScheduleItem key={idx} {...data} />
    ))}
  </section>
);

const ScheduleItem = ({ user, role, description }) => (
  <motion.div
    initial={{ y: 48, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: 'easeInOut', duration: 0.75 }}
    className="mb-9 flex items-center justify-between border-b border-zinc-500 px-3 pb-9"
  >
    <div>
      <p className="mb-1.5 text-xl text-zinc-50">{user}</p>
      <p className="text-sm uppercase text-zinc-500">{role}</p>
    </div>
    <div className="flex items-center gap-1.5 text-start p-5 text-sm uppercase text-zinc-500">
      <p>"{description}"</p>
    </div>
  </motion.div>
);

export default Schedule;
