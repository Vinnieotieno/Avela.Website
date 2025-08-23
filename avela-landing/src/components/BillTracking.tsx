import { Button } from "@/components/ui/button"

export default function BillTracking() {
  const expenses = [
    { name: "Rent Payment", amount: "$800.00", avatar: "R", color: "bg-blue-500" },
    { name: "Car Repair", amount: "$350.00", avatar: "C", color: "bg-red-500" },
    { name: "Medical Bill", amount: "$150.00", avatar: "M", color: "bg-green-500" },
  ]

  return (
    <section className="px-6 py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-8">
              {expenses.map((expense, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 ${expense.color} rounded-full flex items-center justify-center text-white font-bold`}
                    >
                      {expense.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-black dark:text-white">{expense.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Emergency Expense</div>
                    </div>
                  </div>
                  <div className="font-semibold text-black dark:text-white">{expense.amount}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black dark:text-white">Cover unexpected expenses without stress</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Life happens, and unexpected expenses can't wait for payday. With Avela, access your earned salary
              instantly to handle emergencies and urgent bills.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-3">
                <span className="text-[#0081cc] dark:text-[#66cfff]">✓</span>
                <span>Access up to 50% of your earned salary</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#0081cc] dark:text-[#66cfff]">✓</span>
                <span>No credit checks or lengthy approval process</span>
              </li>
            </ul>
            <Button className="bg-[#0081cc] hover:bg-[#006bb3] dark:bg-[#005b8a] dark:hover:bg-[#0081cc] text-white px-8 py-3 rounded-lg">Request Advance</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
