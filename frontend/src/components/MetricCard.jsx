export default function MetricCard({ value, label, color }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow flex-1">

      <h2
        className="text-2xl font-bold"
        style={{ color }}
      >
        {value}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {label}
      </p>

    </div>
  );
}