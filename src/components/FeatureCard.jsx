import {
  UserGroupIcon,
  CreditCardIcon,
  ClipboardDocumentCheckIcon,
  ChartBarSquareIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Smart Attendance Tracking',
    description:
      'Automated student and staff attendance with real-time reports, biometric support, and instant dashboard syncing.',
    icon: UserGroupIcon,
  },
  {
    name: 'Fees & Payment Management',
    description:
      'Easily manage school fees, invoices, receipts, and online payments with transparent financial reporting.',
    icon: CreditCardIcon,
  },
  {
    name: 'Exam & Result Processing',
    description:
      'Create exams, upload scores, generate report cards, and track student performance with zero stress.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Analytics & Performance Insights',
    description:
      'Powerful analytics that help schools track academic performance, attendance trends, payments, and overall growth.',
    icon: ChartBarSquareIcon,
  },
  {
    name: 'Exam & Result Processing',
    description:
      'Create exams, upload scores, generate report cards, and track student performance with zero stress.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Analytics & Performance Insights',
    description:
      'Powerful analytics that help schools track academic performance, attendance trends, payments, and overall growth.',
    icon: ChartBarSquareIcon,
  },
]

export default function HimTechFeatures() {
  return (
    <div className="bg-gray-900 py-34 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-indigo-400 font-semibold tracking-wide">
            HIMTECH School System
          </h2>

          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Powerful Tools for Modern Schools
          </p>

          <p className="mt-6 text-lg text-gray-300">
            Manage your entire school from one secure dashboard — attendance, fees,
            exams, communication, analytics and more. Built for efficiency, accuracy,
            and growth.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 gap-25">
                <dt className="text-lg font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-12  items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="size-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
