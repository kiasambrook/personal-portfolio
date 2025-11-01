import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as brandsIcons from '@fortawesome/free-brands-svg-icons';

export const getIcon = (iconStr: string) => {
  const [prefix, name] = iconStr.split('-'); // e.g. "fab-react" → ["fab", "react"]
  const camelName = `fa${name.charAt(0).toUpperCase()}${name.slice(1)}`; // "react" → "faReact"

  switch (prefix) {
    case 'fas':
      return solidIcons[camelName];
    case 'far':
      return regularIcons[camelName];
    case 'fab':
      return brandsIcons[camelName];
    default:
      return null;
  }
};