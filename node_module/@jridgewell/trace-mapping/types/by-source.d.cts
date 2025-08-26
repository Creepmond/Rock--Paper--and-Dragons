import type { ReverseSegment, SourceMapSegment } from './sourcemap-segment.d.cts';
import type { MemoState } from './binary-search.d.cts';
export type Source = {
    __proto__: null;
    [line: number]: Exclude<ReverseSegment, [number]>[];
};
export =       function buildBySources(decoded: readonly SourceMapSegment[][], memos: MemoState[]): Source[];
//# sourceMappingURL=by-source.d.ts.map