import type { Comparison } from "@/data/site";

/** Three-column comparison. Scrolls sideways on narrow screens instead of squashing text. */
export function ComparisonTable({ comparison, ours }: { comparison: Comparison; ours: string }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-base-300">
      <table className="w-full min-w-xl text-sm text-left">
        <caption className="sr-only">{`${ours} compared with ${comparison.against}`}</caption>
        <thead className="bg-base-200/70">
          <tr>
            <th scope="col" className="p-4 font-semibold w-1/4"><span className="sr-only">Aspect</span></th>
            <th scope="col" className="p-4 font-semibold text-base-content/70">{comparison.against}</th>
            <th scope="col" className="p-4 font-semibold text-primary">{ours}</th>
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((r) => (
            <tr key={r.aspect} className="border-t border-base-300 align-top">
              <th scope="row" className="p-4 font-medium">{r.aspect}</th>
              <td className="p-4 text-base-content/65">{r.them}</td>
              <td className="p-4 text-base-content/90">{r.us}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
