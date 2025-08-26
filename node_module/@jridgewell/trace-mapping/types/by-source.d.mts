import type { ReverseSegment, SourceMapSegment } from './sourcemap-segment.d.mts';
import type { MemoState } from './binary-search.d.mts';
export type Source = {
    __proto__: null;
    [line: number]: Exclude<ReverseSegment, [number]>[];
};
export default function buildBySources(decoded: readonly SourceMapSegment[][], memos: MemoState[]): Source[];
//# sourceMappingURL=by-source.d.ts.map