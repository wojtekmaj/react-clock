export type ClassName = string | null | undefined | (string | null | undefined)[];

export type HandLength = number; // Range<0, 100>;

export type OppositeHandLength = number; // Range<-100, 100>;

export type HandWidth = number; // GreaterThanOrEqualTo<0>;

export type MarkLength = HandLength;

export type MarkWidth = HandWidth;
