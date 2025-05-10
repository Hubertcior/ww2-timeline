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
  ShieldX,
  ShieldOff,
  Ship,
  Locate,
  CircleArrowOutUpLeft,
  Shuffle,
  MapPinned,
  HandHelping,
  ShieldMinus,
} from "lucide-react";

const EventIcon = ({ type }) => {
  const iconClass = "text-amber-900 w-4 h-4 inline-block";
  const iconClassForButton = "text-white w-8 h-8 inline-block opacity-100";

  switch (type) {
    case "Flag":
      return <Flag className={iconClass} />;
    case "Swords":
      return <Swords className={iconClass} />;
    case "Plane":
      return <Plane className={iconClass} />;
    case "CalendarX":
      return <CalendarX className={iconClass} />;
    case "ScrollText":
      return <ScrollText className={iconClass} />;
    case "Shield":
      return <Shield className={iconClass} />;
    case "BicepsFlexed":
      return <BicepsFlexed className={iconClass} />;
    case "openButton":
      return <ArrowRightFromLine className={iconClassForButton} />;
    case "closeButton":
      return <ArrowLeftFromLine className={iconClassForButton} />;
    case "ShieldX":
      return <ShieldX className={iconClass} />;
    case "ShieldOff":
      return <ShieldOff className={iconClass} />;
    case "Ship":
      return <Ship className={iconClass} />;
    case "Locate":
      return <Locate className={iconClass} />;
    case "CircleArrowOutUpLeft":
      return <CircleArrowOutUpLeft className={iconClass} />;
    case "Shuffle":
      return <Shuffle className={iconClass} />;
    case "MapPinned":
      return <MapPinned className={iconClass} />;
    case "HandHelping":
      return <HandHelping className={iconClass} />;
    case "ShieldMinus":
      return <ShieldMinus className={iconClass} />;
    default:
      return null;
  }
};

export default EventIcon;
