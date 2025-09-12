import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuizzesByDateAndGradeAPI, getAttemptsByStudentAPI, } from "../service/allApi";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./animals.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

function getWeekDates(referenceDate = new Date()) {
  const d = new Date(referenceDate);
  const dayIndex = (d.getDay() + 6) % 7; // Mon=0..Sun=6
  const monday = new Date(d);
  monday.setDate(d.getDate() - dayIndex);

  return Array.from({ length: 7 }, (_, i) => {
    const dt = new Date(monday);
    dt.setDate(monday.getDate() + i);
    return {
      weekday: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ][i],
      dateISO: dt.toISOString().slice(0, 10),
      display: dt.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      }),
      fullDisplay: dt.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
    };
  });
}

function formatWeekRange(week) {
  if (!week || week.length !== 7) return "";
  const start = new Date(week[0].dateISO);
  const end = new Date(week[6].dateISO);
  return `${start.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  })} - ${end.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  })}`;
}

function KidsHomePage() {
  const navigate = useNavigate();
  const student = useSelector((s) => s.student.currentStudent);

  const [referenceDate, setReferenceDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState(() =>
    getWeekDates(new Date())
  );


  const systemTodayISO = new Date().toISOString().slice(0, 10);
  const todayFormat = new Date(systemTodayISO).toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
    // + ", " + new Date(systemTodayISO).toLocaleDateString("en-US", {weekday: "long",}) 
    ;

  // Floating panel state
  const [activeDate, setActiveDate] = useState(systemTodayISO);
  const [panelQuizzes, setPanelQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [panelMessage, setPanelMessage] = useState("");

  // Update week when referenceDate changes
  useEffect(() => {
    const newWeek = getWeekDates(referenceDate);
    setWeekDates(newWeek);

    const isCurrentWeek = newWeek.some(
      (d) => d.dateISO === systemTodayISO
    );

    if (isCurrentWeek) {
      setActiveDate(systemTodayISO);
    } else {
      setActiveDate(newWeek[0]?.dateISO); // Monday
    }
  }, [referenceDate, systemTodayISO]);

  // Fetch quizzes for active date (floating panel)
  useEffect(() => {
    if (!student?.grade || !activeDate) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const quizRes = await getQuizzesByDateAndGradeAPI(
          activeDate,
          student.grade.toString()
        );
        const attemptRes = await getAttemptsByStudentAPI(student.studentID);
        const attempts = attemptRes?.status === 200 ? attemptRes.data : [];

        const merged =
          quizRes?.status === 200
            ? quizRes.data.map((q) => {
              const att = attempts.find((a) => a.quizID === q.id);
              return att
                ? { ...q, attempted: true, score: att.score, total: att.total }
                : q;
            })
            : [];

        setPanelQuizzes(merged);

        // Change message based on current day or not
        if (merged.length === 0) {
          setPanelMessage(
            activeDate === systemTodayISO
              ? "Enjoy! No homework Today."
              : "Enjoy! No homework this day."
          );
        } else {
          setPanelMessage(
            activeDate === systemTodayISO
              ? "Do your homework for Today  : "
              : "Do your homework for this day  : "
          );
        }
      } catch (err) {
        console.error(err);
        setPanelQuizzes([]);
        setPanelMessage(
          activeDate === systemTodayISO
            ? "Enjoy! No homework Today."
            : "Enjoy! No homework this day."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [student, activeDate, systemTodayISO]);

  return (
    <div
      id="bg"
      style={{
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        paddingTop: "20vh",
        paddingBottom: "65vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-4 left-5 text-xl font-bold text-yellow-200 drop-shadow">
        {todayFormat}
      </div>

      {/* Animals & Effects */}
      <motion.img src="/assets/lion.png" alt="lion" id="zebra"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img src="/assets/lion2.png" alt="lion2" id="lion"
        animate={{ rotate: [0, 5, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img src="/assets/giraffe.png" alt="giraffe" id="Giraffe"
        animate={{ y: [0, -9, 0], rotate: [0, 2, -0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.img src="/assets/elephant.png" alt="elephant" id="Elephant"
        animate={{ x: [0, -30, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.img src="/assets/leaves-effect.png" alt="Leaf" id="Leaf"
        className="pointer-events-none"
        style={{ position: "fixed", left: "5%", transform: "translateX(-50%)", width: "120px", zIndex: 10 }}
        initial={{ y: "5vh", rotate: 0 }}
        animate={{ y: "120vh", x: [0, -30, 30, -20, 20, 0], rotate: [0, 15, -15, 10, -10, 0] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Wooden Main Board */}
      <motion.img
        src="/assets/grade.png"
        alt="Wooden Stick Board"
        className="absolute"
        id="WoodenBoard"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      />

      {/* Week range + arrows */}
      <motion.div
        id="WoodenWriting"
        className="absolute flex items-center justify-center font-bold text-yellow-100"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
      >
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() =>
            setReferenceDate(
              (d) =>
                new Date(
                  d.getTime() - 7 * 24 * 60 * 60 * 1000
                )
            )
          }
        >
          <IoChevronBack className="text-2xl" />
        </motion.button>

        <span className="md:text-xl">
          {formatWeekRange(weekDates)}
        </span>

        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() =>
            setReferenceDate(
              (d) =>
                new Date(
                  d.getTime() + 7 * 24 * 60 * 60 * 1000
                )
            )
          }
        >
          <IoChevronForward className="text-2xl" />
        </motion.button>
      </motion.div>

      {/* Day Boards */}
      <div>
        {weekDates.map((day, i) => (
          <motion.img
            key={day.dateISO}
            src={`/assets/${day.weekday}.png`}
            alt={day.weekday}
            className="absolute"
            id={`Board${i + 1}`}
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.2,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            whileHover={{
              scale: 1.065,
              transition: { duration: 0.15, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.9,
              rotate: i % 2 === 0 ? 5 : -5,
              transition: { duration: 0.15, ease: "easeInOut" },
            }}
            onClick={async () => {
              try {
                const quizRes = await getQuizzesByDateAndGradeAPI(
                  day.dateISO,
                  student.grade.toString()
                );

                const isSunday = new Date(day.dateISO).getDay() === 0; // Sunday = 0
                const hasHomework = quizRes?.status === 200 && quizRes.data.length > 0;

                if (!hasHomework && isSunday) {
                  // Navigate to coloring gallery for Sunday with no homework
                  navigate("/coloring-page");
                  // Set floating panel message if needed (optional, only used if you show a panel inside coloring page)
                  setPanelMessage("No homework Today. Enjoy coloring!");
                } else if (hasHomework) {
                  // Navigate to regular day-work page if homework exists
                  navigate(`/day-work/${day.dateISO}`);
                } else {
                  // Weekdays with no homework, show normal panel
                  setActiveDate(day.dateISO);
                  setPanelMessage("No homework for this day.");
                  setPanelQuizzes([]);
                }
              } catch (err) {
                console.error(err);
                setActiveDate(day.dateISO);
                setPanelMessage("No homework for this day.");
                setPanelQuizzes([]);
              }
            }}

          />
        ))}
      </div>

      {/* Floating panel */}
      {activeDate && (
        <div
          style={{
            position: "fixed",
            right: 20,
            top: "40vh",
            zIndex: 80,
            width: 284,
          }}
        >
          <div className="bg-white/90 rounded p-4 shadow-lg">
            {/*floating date */}
            <div className="font-bold mb-2 text-green-600">
              {new Date(activeDate).toLocaleDateString("en-US", { weekday: "long" })} —{" "}
              {new Date(activeDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            {/*floating contents */}
            {loading ? (
              <p>Loading…</p>
            ) : panelQuizzes.length === 0 ? (
              <p >{panelMessage}</p>
            ) : (
              <>
                <p className="mb-2">{panelMessage}</p>
                {panelQuizzes.map((q) => (
                  <div
                    key={q.id}
                    className="border p-2 mb-2 rounded "
                  >
                    <p className="font-semibold ">
                      {q.title}
                    </p>
                    <div className="flex justify-between">
                      <h4 className="text-sm text-gray-600">
                        {q.subject}
                      </h4>
                      <p className="flex items-center gap-1 text-sm text-gray-600">
                        <FaChalkboardTeacher className="mt-1 text-lg" /> {q.teacherName}
                      </p>
                    </div>
                  </div>
                ))}
                <p className="mt-1 text-sm font-medium">
                  {panelQuizzes.every(q => q.attempted)
                    ? <span className="text-green-700 flex"><GoDotFill className="mt-1" />Completed – Well Done!</span>
                    : panelQuizzes.some(q => !q.attempted)
                      ? <span className="text-red-700 flex "><GoDotFill className="mt-1" />Pending</span>
                      : null}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default KidsHomePage;
