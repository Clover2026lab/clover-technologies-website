import {
  BarChart3,
  Boxes,
  Bot,
  Bell,
  CircleUserRound,
  LayoutDashboard,
  Package,
  ShoppingCart,
} from "lucide-react";

export default function HeroIllustration() {
  return (
    <div className="relative">

      {/* Background Glow */}
      <div className="absolute -right-12 -top-12 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">

          <div>

            <h3 className="text-xl font-bold text-slate-900">
              N3T2S ERP Platform
            </h3>

            <p className="text-sm text-slate-500">
              Enterprise Dashboard
            </p>

          </div>

          <div className="flex items-center gap-3">

            <Bell className="h-5 w-5 text-slate-500" />

            <CircleUserRound className="h-8 w-8 text-green-600" />

          </div>

        </div>

        {/* Dashboard */}

        <div className="grid grid-cols-[90px_1fr]">

          {/* Sidebar */}

          <div className="space-y-6 border-r border-slate-200 bg-slate-50 p-4">

            <LayoutDashboard className="h-6 w-6 text-green-600" />

            <ShoppingCart className="h-6 w-6 text-slate-500" />

            <Boxes className="h-6 w-6 text-slate-500" />

            <Package className="h-6 w-6 text-slate-500" />

            <BarChart3 className="h-6 w-6 text-slate-500" />

            <Bot className="h-6 w-6 text-slate-500" />

          </div>

          {/* Main Content */}

          <div className="space-y-6 p-6">

            {/* KPI Cards */}

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-green-50 p-5">

                <p className="text-sm text-slate-500">
                  Revenue
                </p>

                <h4 className="mt-2 text-3xl font-bold text-slate-900">
                  $1.2M
                </h4>

              </div>

              <div className="rounded-2xl bg-slate-100 p-5">

                <p className="text-sm text-slate-500">
                  Orders
                </p>

                <h4 className="mt-2 text-3xl font-bold text-slate-900">
                  2,438
                </h4>

              </div>

            </div>

            {/* Sales Chart */}

            <div className="rounded-2xl border bg-white p-5">

              <p className="mb-4 font-semibold text-slate-700">
                Sales Overview
              </p>

              <div className="flex h-40 items-end justify-between gap-3">

                {[35, 50, 75, 45, 90, 60, 100].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-xl bg-green-500"
                    style={{ height: `${height}%` }}
                  />
                ))}

              </div>

            </div>

            {/* Bottom Widgets */}

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-slate-100 p-4">

                <p className="text-sm text-slate-500">
                  Inventory
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  1,240 Items
                </h4>

              </div>

              <div className="rounded-2xl bg-green-50 p-4">

                <p className="text-sm text-slate-500">
                  AI Assistant
                </p>

                <h4 className="mt-2 text-xl font-bold text-green-700">
                  Active
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}