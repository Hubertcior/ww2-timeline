import {
  Swords,
  BowArrow,
  Plane,
  CalendarX,
  Flag,
  ScrollText,
  Shield,
  BicepsFlexed,
} from "lucide-react";

const EventIcon = ({ type }) => {
  const iconClass = "text-amber-900 w-4 h-4 inline-block";

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
    default:
      return null;
  }
};

export default EventIcon;
