import { isDefined } from './utils';

export const isHandLength = (props, propName, componentName) => {
  const length = props[propName];

  if (isDefined(length)) {
    if (typeof length !== 'number') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof length}\` supplied to \`${componentName}\`, expected \`number\`.`);
    }

    if (length < 0 || length > 100) {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof length}\` supplied to \`${componentName}\`, length must be between 0 and 100.`);
    }
  }

  // Everything is fine
  return null;
};

export const isOppositeHandLength = (props, propName, componentName) => {
  const length = props[propName];

  if (isDefined(length)) {
    if (typeof length !== 'number') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof length}\` supplied to \`${componentName}\`, expected \`number\`.`);
    }

    if (length < -100 || length > 100) {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof length}\` supplied to \`${componentName}\`, length must be between -100 and 100.`);
    }
  }

  // Everything is fine
  return null;
};

export const isHandWidth = (props, propName, componentName) => {
  const width = props[propName];

  if (isDefined(width)) {
    if (typeof width !== 'number') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof width}\` supplied to \`${componentName}\`, expected \`number\`.`);
    }

    if (width < 0) {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof width}\` supplied to \`${componentName}\`, width must be greater or equal to 0.`);
    }
  }

  // Everything is fine
  return null;
};

export const isMarkLength = isHandLength;

export const isMarkWidth = isHandWidth;

