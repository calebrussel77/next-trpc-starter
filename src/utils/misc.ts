export const randomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const wait = (t: number) =>
  new Promise(resolve => setTimeout(resolve, t));

export const makeRandomId = (): string => Math.random().toString(36).slice(2);

export const isStringsArray = (arr: Array<unknown>) =>
  arr.every(i => typeof i === 'string');

export const numberWithCommas = (number: number | string) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export function getTimestampInSeconds() {
  return Math.floor(Date.now() / 1000);
}

export function generateArray(numElements: number) {
  return Array.from({ length: numElements }, (_, index) => index);
}

export const formatWord = (str: string) => {
  const sanitize = str?.trim()?.split('_')?.join(' ');
  return `${(sanitize[0] || "").toUpperCase()} ${sanitize?.slice(1)?.toLowerCase()}`;
};

export function stringToHslColor(str = 'random name', s = 30, l = 80) {
  let hash = 0;
  for (let i = 0; i < str?.length; i++) {
    hash = str?.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = hash % 360;
  return `hsl(${h}, ${s}%, ${l} %)`;
}


export function getNameInitials(fullName: string): string {
  const names = fullName.split(' ');

  // Filter out empty names
  const filteredNames = names.filter(name => name !== '');

  // Get the first letter of each name
  const initials = filteredNames.map(name => name.charAt(0).toUpperCase());

  return initials.join('');
}

export function formatPhoneNumber(phoneNumber: string) {
  const countryCode = phoneNumber?.slice(0, 4);
  const firstGroup = phoneNumber?.slice(4, 7);
  const secondGroup = phoneNumber?.slice(7, 9);
  const thirdGroup = phoneNumber?.slice(9, 11);
  const fourthGroup = phoneNumber?.slice(11);

  return `${countryCode} ${firstGroup} ${secondGroup} ${thirdGroup} ${fourthGroup}`;
}
