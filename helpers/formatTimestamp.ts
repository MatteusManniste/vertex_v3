export const formatTimestamp = (timestamp: Date): string => {
  try {
    // in seconds
    const MINUTE = 60;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const MONTH = 30 * DAY;
    const YEAR = 365 * DAY;

    const userLocalTime = Date.now();

    const timeDifferenceInSeconds = Math.round((userLocalTime - timestamp.getTime()) / 1000);

    switch (true) {
      case timeDifferenceInSeconds < MINUTE:
        return "a moment ago";
      case timeDifferenceInSeconds < HOUR:
        const minutes = Math.floor(timeDifferenceInSeconds / MINUTE);
        return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
      case timeDifferenceInSeconds < DAY:
        const hours = Math.floor(timeDifferenceInSeconds / HOUR);
        return `${hours} hour${hours === 1 ? "" : "s"} ago`;
      case timeDifferenceInSeconds < MONTH:
        const days = Math.floor(timeDifferenceInSeconds / DAY);
        return `${days} day${days === 1 ? "" : "s"} ago`;
      case timeDifferenceInSeconds < YEAR:
        const months = Math.floor(timeDifferenceInSeconds / MONTH);
        return `${months} month${months === 1 ? "" : "s"} ago`;
      case timeDifferenceInSeconds >= YEAR:
        const years = Math.floor(timeDifferenceInSeconds / YEAR);
        return `${years} year${years === 1 ? "" : "s"} ago`;
      default:
        throw new Error("Attempt to convert timestamp failed.");
    }
  } catch (error: any) {
    console.log(error);
    return "";
  }
};
