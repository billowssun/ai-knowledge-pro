import * as Icons from 'lucide-react';

const iconMap: Record<string, string> = {
  ImageIcon: 'Image',
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export function getIconComponent(iconName: string): React.ComponentType<any> {
  const mapped = iconMap[iconName] || iconName;
  const icons = Icons as any;
  return icons[mapped] || Icons.Box;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
