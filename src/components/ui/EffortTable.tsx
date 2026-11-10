import { EFFORT_NOTE } from "@/data/site";
import { formatHours, totalEffort, type EffortItem } from "@/lib/effort";

/** Estimated hours per task with a total. Always carries the estimate disclaimer. */
export function EffortTable({ items, caption }: { items: EffortItem[]; caption: string }) {
  return (
    <figure>
      <div className="overflow-x-auto rounded-xl border border-base-300">
        <table className="w-full min-w-md text-sm text-left">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-base-200/70">
            <tr>
              <th scope="col" className="p-4 font-semibold">Work you skip</th>
              <th scope="col" className="p-4 font-semibold text-right whitespace-nowrap">Estimated hours</th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.task} className="border-t border-base-300">
                <td className="p-4 text-base-content/75">{i.task}</td>
                <td className="p-4 text-right font-mono whitespace-nowrap">{formatHours(i.hours)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-base-300 bg-primary/5">
              <th scope="row" className="p-4 font-semibold">Total saved</th>
              <td className="p-4 text-right font-mono font-semibold text-primary whitespace-nowrap">{formatHours(totalEffort(items))}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <figcaption className="mt-3 text-xs text-base-content/55 leading-relaxed">{EFFORT_NOTE}</figcaption>
    </figure>
  );
}
