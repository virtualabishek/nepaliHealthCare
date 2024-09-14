import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Personalized Health Insights",
    description:
      "Receive tailored health recommendations and insights based on your unique health data and preferences, ensuring that every step you take aligns with your well-being goals.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "24/7 Expert Guidance",
    description:
      "Access professional advice anytime, anywhere. Our team of certified health experts is available around the clock to guide you on your wellness journey.",
    icon: LockClosedIcon,
  },
  {
    name: "Interactive Wellness Tools",
    description:
      "Utilize an array of easy-to-use tools designed to track your progress, monitor health metrics, and set achievable goals for a healthier lifestyle.",
    icon: ArrowPathIcon,
  },
  {
    name: "Holistic Health Support",
    description:
      "From mental health to physical fitness, our platform offers comprehensive support for all aspects of your health, helping you stay balanced and energized.",
    icon: FingerPrintIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Take a book
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need on a single fingerclick
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Eveything you can find from here. From a basic to advance. For a
            child to elder. We are for you.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
