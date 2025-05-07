import {
  Swords,
  BowArrow,
  Plane,
  CalendarX,
  Flag,
  ScrollText,
  Shield,
  BicepsFlexed,
  ArrowRightFromLine,
  ArrowLeftFromLine,
} from "lucide-react";

const EventIcon = ({ type }) => {
  const iconClass = "text-amber-900 w-4 h-4 inline-block";
  const iconClassForButton = "text-white w-8 h-8 inline-block opacity-100";

  switch (type) {
    case "start":
      return <Flag className={iconClass} />;
    case "atack":
      return <Swords className={iconClass} />;
    case "air":
      return <Plane className={iconClass} />;
    case "end":
      return <CalendarX className={iconClass} />;
    case "diplomacy":
      return <ScrollText className={iconClass} />;
    case "defense":
      return <Shield className={iconClass} />;
    case "fight":
      return <BicepsFlexed className={iconClass} />;
    case "openButton":
      return <ArrowRightFromLine className={iconClassForButton} />;
    case "closeButton":
      return <ArrowLeftFromLine className={iconClassForButton} />;
    default:
      return null;
  }
};

export default EventIcon;
