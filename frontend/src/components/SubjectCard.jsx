export default function SubjectCard({ name, streak, completed }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow mb-3">

      <div className="flex justify-between items-center">

        <div>

          <h3 className="font-semibold">
            {name}
          </h3>

          <p className="text-sm text-gray-500">
            Daily Progress
          </p>

        </div>

        <div className="text-orange-500 font-bold">
          🔥 {streak}
        </div>

      </div>

      <div className="mt-3">

        <input
          type="checkbox"
          checked={completed}
          readOnly
          className="w-5 h-5"
        />

      </div>

    </div>
  );
}