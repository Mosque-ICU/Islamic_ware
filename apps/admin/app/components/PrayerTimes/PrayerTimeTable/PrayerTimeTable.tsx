import React from "react";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import PrayerOptionsModal from "./PrayerOptionsModal";

function PrayerTimeTable({ theme, nextPrayer, prayerTime, prayerTimes, editOptions, view = "table", currentTime }) {
  const [showPrayerTimesEditor, setShowPrayerTimesEditor] = React.useState(false);

  return (
    <>
      {showPrayerTimesEditor && (
        <PrayerOptionsModal prayerTimes={prayerTimes} setPrayerTimes={editOptions.setPrayerTimes} setShowPrayerTimesEditor={setShowPrayerTimesEditor} />
      )}
      {editOptions?.setPrayerTimes && (
        <PencilSquareIcon
          className="fixed right-2 z-50 h-5 w-5 cursor-pointer text-indigo-500 hover:text-gray-700 "
          aria-hidden="true"
          title='Edit "Top Message"'
          onClick={() => setShowPrayerTimesEditor(true)}
        />
      )}
      {view === "table" ? (
        <table
          style={{ color: theme.textColor, fontSize: "1.8vw" }}
          className={`m-1 w-full  table-auto rounded-lg bg-opacity-50 text-4xl text-gray-700 backdrop-blur-sm backdrop-filter
  
            `}
        >
          <thead className=" border-b-2 border-gray-300" style={{ fontSize: "1.5vw" }}>
            <tr className="text-left">
              <th className="px-4 py-5">Prayer</th>
              <th>Start Time</th>
              <th>Jamaat</th>
            </tr>
          </thead>
          <tbody>
            <tr
              style={{
                backgroundColor: nextPrayer.name === "Fajr" ? theme.highlightColor + "80" : "",
                fontWeight: nextPrayer.name === "Fajr" ? "600" : "",
              }}
            >
              <td className=" px-4 py-6">Fajr</td>
              <td>{prayerTime.fajr}</td>
              <td>{prayerTime.fajr_jamaat}</td>
            </tr>
            {/* <tr>
            <td>Sunrise</td>
            <td>{prayerTime.sunrise}</td>
          </tr> */}
            <tr
              style={{
                backgroundColor: nextPrayer.name === "Dhuhr" ? theme.highlightColor + "80" : "",
                fontWeight: nextPrayer.name === "Dhuhr" ? "600" : "",
              }}
            >
              <td className=" px-4 py-6">Dhuhr</td>
              <td>{prayerTime.dhuhr}</td>
              <td>{prayerTime.dhuhr_jamaat}</td>
            </tr>
            <tr
              style={{
                backgroundColor: nextPrayer.name === "Asr" ? theme.highlightColor : "",
                fontWeight: nextPrayer.name === "Asr" ? "600" : "",
              }}
            >
              <td className=" px-4 py-6">Asr</td>
              <td>{prayerTime.asr}</td>
              <td>{prayerTime.asr_jamaat}</td>
            </tr>
            <tr
              style={{
                backgroundColor: nextPrayer.name === "Maghrib" ? theme.highlightColor + "80" : "",
                fontWeight: nextPrayer.name === "Maghrib" ? "600" : "",
              }}
            >
              <td className=" px-4 py-6">Maghrib</td>
              <td>{prayerTime.maghrib}</td>
              <td>{prayerTime.maghrib_jamaat}</td>
            </tr>
            <tr
              style={{
                backgroundColor: nextPrayer.name === "Isha" ? theme.highlightColor + "80" : "",
                fontWeight: nextPrayer.name === "Isha" ? "600" : "",
              }}
            >
              <td className=" px-4 py-6">Isha</td>
              <td>{prayerTime.isha}</td>
              <td>{prayerTime.isha_jamaat}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="pb-12 ">
          <Container>
            {/* <h1 className="text-2xl font-bold leading-7 text-slate-900">
              Today&apos;s Prayers
            </h1> */}
          </Container>
          <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
            {[
              {
                name: "Fajr",
                time: prayerTime.fajr,
                jamaat: prayerTime.fajr_jamaat,
              },
              {
                name: "Dhuhr",
                time: prayerTime.dhuhr,
                jamaat: prayerTime.dhuhr_jamaat,
              },
              {
                name: "Asr",
                time: prayerTime.asr,
                jamaat: prayerTime.asr_jamaat,
              },
              {
                name: "Maghrib",
                time: prayerTime.maghrib,
                jamaat: prayerTime.maghrib_jamaat,
              },
              {
                name: "Isha",
                time: prayerTime.isha,
                jamaat: prayerTime.isha_jamaat,
              },
            ].map((time, i) => (
              <PrayerTIme key={i} time={time} nextPrayer={nextPrayer} currentTime={currentTime} theme={theme} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export function Container({ className, children, ...props }) {
  return (
    <div className={`lg:px-8  ${className}`} {...props}>
      <div className="lg:max-w-4xl">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">{children}</div>
      </div>
    </div>
  );
}

function PrayerTIme({ time, nextPrayer, theme }) {
  // let date = new Date(episode.published)

  let timeData = React.useMemo(
    () => ({
      name: time.name,
      time: time.time,
      jamaat: time.jamaat,
    }),
    [time]
  );

  const calculateTimeLeft = () => {
    const currentTimeStamp = new Date().getTime();
    const eventTimeStamp = new Date(`${new Date().toDateString()} ${time.time}`).getTime();
    const difference = eventTimeStamp - currentTimeStamp;
    console.log(difference);
    if (difference < 0) {
      return null;
    }
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
  };

  // let player = useAudioPlayer(audioPlayerData)

  return (
    <article aria-labelledby={`episode-${time.name}-title`} className="py-5 sm:py-5">
      <Container className="flex flex-row justify-between">
        <div className="flex flex-col items-start ">
          <div
            id={`time-${time.name}-title`}
            className="t mt-2  "
            style={{
              fontWeight: "600",
              fontSize: "2.5rem",
              color: theme.textColor,
            }}
          >
            <p>
              {timeData.name} {timeData.time}
            </p>

            {/* <Link href={`/${episode.id}`}>3:30 Fajir</Link> */}
          </div>

          <p className="mt-1 text-base leading-7 text-slate-700" style={{ fontSize: "1.5rem", color: theme.textColor }}>
            Jamaat: {timeData.jamaat}
          </p>

          {nextPrayer.name == timeData.name && (
            <p className="absolute right-10 ">
              <span style={{ fontWeight: "600", color: theme.highlightColor }} className="text-3xl">
                Jamaat in {calculateTimeLeft()}
              </span>
            </p>
          )}
          {/* <FormattedDate
            date={date}
            className="order-first font-mono text-sm leading-7 text-slate-500"
          /> */}
          {/* <p className="order-first font-mono text-sm leading-7 text-slate-500">
            Praying soon
          </p>
          <p className="mt-1 text-base leading-7 text-slate-700">
            {episode.description}
          </p> */}
          {/* <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              onClick={() => player.toggle()}
              className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${
                episode.title
              }`}
            >
              <PlayPauseIcon
                playing={player.playing}
                className="h-2.5 w-2.5 fill-current"
              />
              <span className="ml-3" aria-hidden="true">
                Listen
              </span>
            </button>
            <span
              aria-hidden="true"
              className="text-sm font-bold text-slate-400"
            >
              /
            </span>
            <Link
              href={`/${episode.id}`}
              className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              aria-label={`Show notes for episode ${episode.title}`}
            >
              Show notes
            </Link>
          </div> */}
        </div>
      </Container>
    </article>
  );
}
export default PrayerTimeTable;
