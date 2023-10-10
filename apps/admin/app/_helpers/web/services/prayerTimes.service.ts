import { requestHandler, gqlF } from '../requestHandler'

const images = [
  'https://images.pexels.com/photos/2236674/pexels-photo-2236674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://via.placeholder.com/600x400?text=Image+2',
  'https://via.placeholder.com/600x400?text=Image+3',
  'https://via.placeholder.com/600x400?text=Image+4',
  'https://via.placeholder.com/600x400?text=Image+5',
]
const prayerTimes = [
  {
    date: new Date().toLocaleDateString(),
    timestamp: new Date(new Date().toLocaleDateString()).getTime(),
    fajr: '5:00',
    fajr_jamaat: '5:30',
    sunrise: '6:00',
    dhuhr: '13:00',
    dhuhr_jamaat: '13:30',
    asr: '17:00',
    asr_jamaat: '16:30',
    maghrib: '20:00',
    maghrib_jamaat: '20:30',
    isha: '21:00',
    isha_jamaat: '21:30',
    bottom_message: 'Sehri ends at 4:55',
  },
  {
    date: new Date(
      new Date().getTime() + 24 * 60 * 60 * 1000
    ).toLocaleDateString(),
    timestamp: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getTime(),
    fajr: '5:00',
    fajr_jamaat: '5:30',
    sunrise: '6:00',
    dhuhr: '13:00',
    dhuhr_jamaat: '13:30',
    asr: '17:00',
    asr_jamaat: '16:30',
    maghrib: '20:00',
    maghrib_jamaat: '20:30',
    isha: '21:00',
    isha_jamaat: '21:30',
    bottom_message: 'Sehri ends at 4:55',
  },
  {
    date: new Date(
      new Date().getTime() + 48 * 60 * 60 * 1000
    ).toLocaleDateString(),
    timestamp: new Date(new Date().getTime() + 48 * 60 * 60 * 1000).getTime(),
    fajr: '5:00',
    fajr_jamaat: '5:30',
    sunrise: '6:00',
    dhuhr: '13:00',
    dhuhr_jamaat: '13:30',
    asr: '17:00',
    asr_jamaat: '16:30',
    maghrib: '20:00',
    maghrib_jamaat: '20:30',
    isha: '21:00',
    isha_jamaat: '21:30',
    bottom_message: 'Sehri ends at 4:55',
  },
]

const getPrayerTimes = () => {
  // requestHandler({
  //   body: gqlF(
  //     `query{
  //     establishments{
  //       id
  //     }
  //   }`
  //   ),
  //   cacheKey: 'establishments',
  //   shouldCache: true,
  // }).then((data) => {
  //   console.log(data)
  // })

  const storage = localStorage.getItem('prayerTimes')
  if (storage) {
    return JSON.parse(storage)
  }

  return prayerTimes
}

const getImages = () => {
  return images
}

const checkNextPrayer = (
  prayerTime: {
    fajr_jamaat: string
    dhuhr_jamaat: string
    asr_jamaat: string
    maghrib_jamaat: string
    isha_jamaat: string
  },
  setNextPrayer: (arg0: { name: string; time: any }) => void
) => {
  // prayerTimesService.checkNextPrayer(prayerTime, setNextPrayer)

  const fajrTimeArray = prayerTime.fajr_jamaat.split(':')
  const fajrTimeHour = fajrTimeArray[0]
  const fajrTimeMinute = fajrTimeArray[1]

  const dhuhrTimeArray = prayerTime.dhuhr_jamaat.split(':')
  const dhuhrTimeHour = dhuhrTimeArray[0]
  const dhuhrTimeMinute = dhuhrTimeArray[1]

  const asrTimeArray = prayerTime.asr_jamaat.split(':')
  const asrTimeHour = asrTimeArray[0]

  const asrTimeMinute = asrTimeArray[1]

  const maghribTimeArray = prayerTime.maghrib_jamaat.split(':')
  const maghribTimeHour = maghribTimeArray[0]
  const maghribTimeMinute = maghribTimeArray[1]

  const ishaTimeArray = prayerTime.isha_jamaat.split(':')
  const ishaTimeHour = ishaTimeArray[0]
  const ishaTimeMinute = ishaTimeArray[1]

  const isHour12 = parseInt(maghribTimeHour) < 12 ? true : false

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour12: isHour12,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
  const currentTimeArray = currentTime.split(':')
  const currentTimeHour = currentTimeArray[0]
  const currentTimeMinute = currentTimeArray[1]
  console.log(currentTime)
  console.log(currentTimeHour, fajrTimeHour)

  if (
    currentTimeHour < fajrTimeHour ||
    (currentTimeHour == fajrTimeHour && currentTimeMinute < fajrTimeMinute)
  ) {
    console.log('runs fajr')
    setNextPrayer({
      name: 'Fajr',
      time: prayerTime.fajr_jamaat,
    })
  } else if (
    currentTimeHour < dhuhrTimeHour ||
    (currentTimeHour == dhuhrTimeHour && currentTimeMinute < dhuhrTimeMinute)
  ) {
    setNextPrayer({
      name: 'Dhuhr',
      time: prayerTime.dhuhr_jamaat,
    })
  } else if (
    currentTimeHour < asrTimeHour ||
    (currentTimeHour == asrTimeHour && currentTimeMinute < asrTimeMinute)
  ) {
    setNextPrayer({
      name: 'Asr',
      time: prayerTime.asr_jamaat,
    })
  } else if (
    currentTimeHour < maghribTimeHour ||
    (currentTimeHour == maghribTimeHour &&
      currentTimeMinute < maghribTimeMinute)
  ) {
    setNextPrayer({
      name: 'Maghrib',
      time: prayerTime.maghrib_jamaat,
    })
  } else if (
    currentTimeHour < ishaTimeHour ||
    (currentTimeHour == ishaTimeHour && currentTimeMinute < ishaTimeMinute)
  ) {
    console.log('runs')
    setNextPrayer({
      name: 'Isha',
      time: prayerTime.isha_jamaat,
    })
  }
}

export const prayerTimesService = {
  getImages,
  getPrayerTimes,
  checkNextPrayer,
}
