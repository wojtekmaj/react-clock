function isNumberBetween(min: number, max: number) {
  return (props: Record<string, unknown>, propName: string, componentName: string) => {
    const { [propName]: value } = props;

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        return new Error(
          `Invalid prop \`${propName}\` of type \`${typeof value}\` supplied to \`${componentName}\`, expected \`number\`.`,
        );
      }

      if (value < min || value > max) {
        return new Error(
          `Invalid prop \`${propName}\` of type \`${typeof value}\` supplied to \`${componentName}\`, length must be between ${min} and ${max}.`,
        );
      }
    }

    // Everything is fine
    return null;
  };
}

export const isHandLength = isNumberBetween(0, 100);

export const isOppositeHandLength = isNumberBetween(-100, 100);

export function isHandWidth(
  props: Record<string, unknown>,
  propName: string,
  componentName: string,
) {
  const { [propName]: width } = props;

  if (typeof width !== 'undefined') {
    if (typeof width !== 'number') {
      return new Error(
        `Invalid prop \`${propName}\` of type \`${typeof width}\` supplied to \`${componentName}\`, expected \`number\`.`,
      );
    }

    if (width < 0) {
      return new Error(
        `Invalid prop \`${propName}\` of type \`${typeof width}\` supplied to \`${componentName}\`, width must be greater or equal to 0.`,
      );
    }
  }

  // Everything is fine
  return null;
}

export const isMarkLength = isHandLength;

export const isMarkWidth = isHandWidth;
