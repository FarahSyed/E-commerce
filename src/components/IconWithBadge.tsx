import { Bell } from 'lucide-react';

// Type for the props of the icon component
type IconWithBadgeProps = {
  badgeCount: number;
  Icon: React.ComponentType<React.ComponentProps<typeof Bell>>; // Dynamically type the icon component props
};

function IconWithBadge({ badgeCount, Icon }: IconWithBadgeProps) {
  return (
    <div className="relative inline-block">
      {/* Dynamic Icon */}
      <Icon />

      {/* Badge */}
      {badgeCount > 0 && (
        <span className="absolute top-0 left-4 w-6 h-6 text-xs  text-blue-600 flex items-center justify-center">
          {badgeCount}
        </span>
      )}
    </div>
  );
}


export default IconWithBadge;