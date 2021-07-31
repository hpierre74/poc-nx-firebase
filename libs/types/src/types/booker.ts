import { Booking } from './booking';

export type WeekDays =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export interface Range {
  start_time: string;
  end_time: string;
  max_bookings: number;
  time_slots: string[];
}

export type DayRange = {
  id: string;
};

export type WeekDayRange = {
  '0': string;
};

export interface BookerOptions {
  max_bookings: number;
  day_ranges: Array<DayRange>;
  week_day_ranges: Array<WeekDayRange>;
}

export interface BookingsReferences {
  booking_id: Booking['id'];
  timestamp: Booking['timestamp'];
}

export interface Booker {
  options: BookerOptions;
  bookings: Array<BookingsReferences>;
}
