type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>> | T;

export type ClassName = string | null | undefined | (string | null | undefined)[];

export type GreaterThanOrEqualTo<F extends number> = Range<F, 999>;

export type HandLength = Range<0, 100>;

export type OppositeHandLength = number; // Range<-100, 100>;

export type HandWidth = GreaterThanOrEqualTo<0>;

export type MarkLength = HandLength;

export type MarkWidth = HandWidth;
