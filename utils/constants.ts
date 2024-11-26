import { CakeIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export type NavItem = {
  name: string;
  href: string;
  icon: any;
};

export const CONSTS = {
  TITLE: "East Coast Rationalist Megameetup",
  DESCRIPTION:
    "The East Coast Rationalist Megameetup is happening from December 13th through 16th, 2024 in Brookyln, NY. Check out the schedules for the schedule!",
  MULTIPLE_EVENTS: true,
  // If you have multiple events, add your events to the nav bar below
  // If you only have one event, you can leave the array empty
  // Find available icons at https://heroicons.com/
  NAV_ITEMS: [

  ] as NavItem[],
};
