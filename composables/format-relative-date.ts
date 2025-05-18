import { formatDistanceToNowStrict, formatDate } from "date-fns";

export function formatRelativeDate(from: Date) {
  const currentDate = new Date();

  if (currentDate.getTime() - from.getTime() < 1000 * 60 * 60 * 24) {
    return formatDistanceToNowStrict(from, { addSuffix: true });
  } else {
    if (currentDate.getFullYear() === from.getFullYear()) {
      return formatDate(from, "MMM dd");
    } else {
      return formatDate(from, "MMM dd, yyyy");
    }
  }
}
