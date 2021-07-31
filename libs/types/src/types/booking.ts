export interface BookingContact {
  nickname: string;
  telephone_number: string;
}

export type Booking = {
  id: string;
  datetime: string;
  timestamp: string;
  persons: number;
  contact: BookingContact
}
