import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Send, Heart, ExternalLink } from "lucide-react";
import WeddingInvitation from "./WeddingInvitation";

const InvitationPage = () => {
  const weddingDate = new Date("2026-12-25T21:00:00");
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Audio playback blocked:", error);
      }
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const addToCalendar = () => {
    const start = "20261225T210000";
    const end = "20261226T010000";

    const calendarUrl =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent("فرح و وليد ❤️")}` +
      `&dates=${start}/${end}` +
      `&details=${encodeURIComponent("نتشرف بحضوركم فرح فرح و وليد ❤️")}` +
      `&location=${encodeURIComponent(
        "نادي فروسيّة القوات المسلحة - Gate 4",
      )}` +
      `&ctz=Africa/Cairo`;

    window.open(calendarUrl, "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = weddingDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/MahmoudElEsseilyFarha.mp3"
        loop
        preload="auto"
      />
      {open ? (
        <div className="min-h-screen font-body overflow-hidden bg-[#FAF7F2]  text-[#795548]">
          <motion.button
            onClick={toggleMusic}
            animate={
              isPlaying
                ? {
                    scale: [1, 1.05, 1],
                  }
                : {
                    y: [0, -6, 0],
                    scale: [1, 1.08, 1],
                  }
            }
            transition={{
              duration: isPlaying ? 2 : 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="fixed cursor-pointer top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#D6B36A] text-xl text-[#5F4A43] shadow-lg"
          >
            {!isPlaying ? (
              <span className="text-xl">♫</span>
            ) : (
              <div className="flex items-end gap-[3px]">
                <motion.span
                  animate={{ height: [4, 10, 4] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: 0,
                  }}
                  className="block w-[3px] rounded-full bg-[#5F4A43]"
                />

                <motion.span
                  animate={{ height: [6, 14, 6] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: 0.15,
                  }}
                  className="block w-[3px] rounded-full bg-[#5F4A43]"
                />

                <motion.span
                  animate={{ height: [4, 11, 4] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: 0.3,
                  }}
                  className="block w-[3px] rounded-full bg-[#5F4A43]"
                />
              </div>
            )}
          </motion.button>
          <section id="couple" className="relative min-h-screen px-5 py-28">
            <img
              src="/bride-groom.png"
              alt=""
              className="absolute opacity-20 pt-[80px] z-[0] pointer-events-none"
            />
            <Flower
              src="/flowers-top-left.png"
              className="-left-24 top-10 w-[210px]"
            />

            <Flower
              src="/flowers-bottom-right.svg"
              className="-bottom-20 -right-24 w-[220px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 mx-auto flex min-h-[80vh] max-w-md flex-col items-center justify-center text-center"
            >
              <p className="text-[10px] tracking-[0.4em] text-[#A38B82]">
                TOGETHER WITH OUR FAMILIES
              </p>

              <h1
                dir="rtl"
                className="mt-5 font-display  text-5xl font-normal text-[#765B54]"
              >
                فرح و وليد
              </h1>

              <FloralDivider />

              <p className="text-sm tracking-[0.15em] text-[#89736C]">
                December 25, 2026
              </p>

              <p className="mt-7 max-w-[270px] text-sm leading-7 text-[#8F7A72]">
                We cordially invite you to celebrate
                <br />
                the beginning of our forever.
              </p>

              <div className="relative mt-12 flex w-fit items-center">
                <div className="-ml-6 h-36 w-36 overflow-hidden rounded-full border-[5px] border-[#D6B36A] bg-white shadow-xl">
                  <img
                    src="/bridegroom.jpeg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-36 w-36 overflow-hidden rounded-full border-[5px] border-[#D6B36A] bg-white shadow-xl">
                  <img
                    src="/Bride.jpeg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <p className="mt-2 text-2xl font-display text-[#765B54]">
                {" "}
                فرح و وليد
              </p>
            </motion.div>
          </section>

          <section className="relative px-5 py-28">
            <Flower
              src="/flowers-top-left.png"
              className="-right-24 top-10 w-[190px] rotate-90"
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 mx-auto max-w-md text-center"
            >
              <p className="text-[10px] tracking-[0.4em] text-[#A38B82]">
                SAVE THE DATE
              </p>

              <h2 className="mt-4 text-4xl uppercase text-[#765B54]">
                Our Celebration
              </h2>

              <FloralDivider />

              <div className="mt-10  font-bold grid grid-cols-4 gap-2">
                <Countdown value={countdown.days} label="DAYS" />
                <Countdown value={countdown.hours} label="HRS" />
                <Countdown value={countdown.minutes} label="MIN" />
                <Countdown value={countdown.seconds} label="SEC" />
              </div>

              <div className="mt-12 border border-[#E5DCD5] bg-[#FAF8F5] p-5 shadow-sm">
                <h3 className="text-xl text-[#795548]">December 2026</h3>

                <Calendar />

                <div className="mt-7 border-t border-[#E5DCD5] pt-5">
                  <p className="text-lg text-[#795548]">25 December 2026</p>

                  <button
                    onClick={addToCalendar}
                    className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 bg-[#D6B36A] px-5 py-3 text-sm text-[#5F4A43]"
                  >
                    <CalendarDays size={16} />
                    Add to Calendar
                  </button>
                </div>
              </div>
            </motion.div>
          </section>
          <EventSection
            eyebrow="BRIDE'S HENNA NIGHT"
            title="حنة العروسة"
            location=" منزل العروسه "
            date="2026-12-19"
            time="06:00 PM"
          />

          <section className="relative px-5 py-28">
            <Flower
              src="/flowers-top-left.png"
              className="-left-24 top-0 w-[210px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 mx-auto max-w-md text-center"
            >
              <p className="text-[10px] tracking-[0.4em] text-[#A38B82]">
                JOIN US AT
              </p>

              <h2 className="mt-4 text-4xl uppercase text-[#765B54]">
                Reception Venue
              </h2>

              <FloralDivider />

              <div className="mt-8 overflow-hidden border border-[#E5DCD5] bg-[#FAF8F5] p-2">
                <iframe
                  title="Nile View"
                  src"https://www.google.com/maps?q=30.0742011,31.3571641&output=embed"
                  className="h-[350px] w-full"
                  loading="lazy"
                />

                <p className="mt-3 text-sm text-[#795548]">
                  Imperial, ‎📍 نادي الفروسية للقوات المسلحة بوابة رقم 4 – أمام باركينج, El-Nasr Rd, An Nadi Al Ahli, Nasr City
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/7Psn8jPrkLGsqAZUA"
                target="_blank"
                rel="noreferrer"
                className="mx-auto mt-5 inline-flex items-center gap-2 border border-[#D6B36A] px-6 py-3 text-sm text-[#795548] transition hover:bg-[#D6B36A]"
              >
                <MapPin size={16} />
                Open Location
              </a>

              <p className="mt-8 text-lg">Friday · 07:00 - 11:00 PM</p>
            </motion.div>
          </section>

          <section className="relative bg-[#F3E8DF] px-5 py-28">
            <Flower
              src="/flowers-top-left.png"
              className="-left-24 top-0 w-[210px]"
            />

            <Flower
              src="/flowers-bottom-right.svg"
              className="-bottom-20 -right-24 w-[210px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 mx-auto max-w-md"
            >
              <div className="text-center">
                <p className="text-[10px] tracking-[0.4em] text-[#A38B82]">
                  LEAVE A LITTLE LOVE
                </p>

                <h2 className="mt-4 text-5xl uppercase text-[#765B54]">
                  Guest Wishes
                </h2>

                <FloralDivider />
              </div>

              <form
                action="https://formspree.io/f/xzeplbdn"
                method="POST"
                className="mt-10 space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name*"
                  className="w-full border border-[#D6C7BD] bg-[#FAF8F5] px-5 py-4 text-[#795548] outline-none"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Enter your wishes*"
                  rows={5}
                  className="w-full resize-none border border-[#D6C7BD] bg-[#FAF8F5] px-5 py-4 text-[#795548] outline-none"
                />

                <input
                  type="hidden"
                  name="_subject"
                  value="رسالة جديدة من دعوة فرح و وليد"
                />

                <button
                  type="submit"
                  className="ml-auto flex items-center gap-2 bg-[#D6B36A] px-7 py-3 text-sm text-[#5F4A43] shadow-sm"
                >
                  Send Wishes
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </section>

          <footer className="bg-[#D6B36A] px-5 py-16 text-center text-[#5F4A43]">
            <Heart size={22} fill="currentColor" className="mx-auto mb-5" />

            <h2 className="text-3xl font-display"> فرح و وليد</h2>

            <p className="mt-3 text-sm opacity-80">
              With love, we begin our forever.
            </p>

            <p className="mt-8 text-xs opacity-70">December 25, 2026</p>
          </footer>
        </div>
      ) : (
        <WeddingInvitation toggleMusic={toggleMusic} setOpen={setOpen} />
      )}
    </>
  );
};

const EventSection = ({ eyebrow, title, location, date, time, image }) => {
  return (
    <section className="relative px-5 py-28">
      <Flower
        src="/flowers-top-left.png"
        className="-left-24 top-10 w-[200px]"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="relative z-10 mx-auto max-w-md text-center"
      >
        <p className="text-[10px] tracking-[0.4em] text-[#A38B82]">{eyebrow}</p>

        <h2 dir="rtl" className="mt-5 font-display text-5xl text-[#8C7068]">
          {title}
        </h2>

        <FloralDivider />

        <p dir="rtl" className="mt-7 font-display text-xl">
          {location}
        </p>

        <div className="mx-auto mt-7 border-y border-[#DDD0C8] py-5">
          <p className="text-lg">
            {date} · {time}
          </p>

          <p className="mt-2 text-xs text-[#A79891]">
            A night of joy and celebration
          </p>

          <a
            href="https://maps.app.goo.gl/oTBZZVdpLj4SH2XE8"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-5 inline-flex items-center gap-2 border border-[#D6B36A] px-6 py-3 text-sm text-[#795548] transition hover:bg-[#D6B36A]"
          >
            <MapPin size={16} />
            Open Location
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const Countdown = ({ value, label }) => {
  return (
    <div className="border border-[#D9CEC6] bg-white px-2 py-4">
      <p className="text-3xl text-[#8C7068]">
        {String(value).padStart(2, "0")}
      </p>

      <p className="mt-1 text-[8px] tracking-[0.25em] text-[#A99A92]">
        {label}
      </p>
    </div>
  );
};

const Calendar = () => {
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const dates = [
    null,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];

  return (
    <div className="mt-7">
      <div className="grid  grid-cols-7 border-b border-[#E0D6D0] pb-3">
        {days.map((day) => (
          <span key={day} className="text-center text-[10px] text-[#9D8B83]">
            {day}
          </span>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-7 gap-2">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`flex aspect-square items-center justify-center text-xs ${
              date === 25
                ? "rounded-full bg-[#B98D70] text-white"
                : "text-[#8F8079]"
            }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

const Flower = ({ src, className }) => {
  return (
    <motion.img
      src={src}
      alt=""
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 0.9,
      }}
      viewport={{
        once: true,
      }}
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`pointer-events-none absolute z-0 ${className}`}
    />
  );
};

const FloralDivider = () => {
  return (
    <div className="my-6 flex items-center justify-center gap-3">
      <span className="h-px w-12 bg-[#D7C3B8]" />

      <motion.span
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="text-lg text-[#B58C7C]"
      >
        ❀
      </motion.span>

      <span className="h-px w-12 bg-[#D7C3B8]" />
    </div>
  );
};

export default InvitationPage;
