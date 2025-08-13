import React from "react";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
  BeakerIcon,
  EyeIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

type NotificationState =
  | "experimental"
  | "info"
  | "warning"
  | "error"
  | "objective"
  | "success";

interface NotificationCardProps {
  state: NotificationState;
  title: string;
  children: React.ReactNode;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  state,
  title,
  children,
}) => {
  const stateConfig = {
    experimental: {
      bg: "bg-violet-50 dark:bg-violet-950/30",
      border: "border-violet-200 dark:border-violet-400/20",
      iconBg: "bg-violet-100 dark:bg-violet-900",
      iconBorder: "border-violet-200 dark:border-violet-400/20",
      iconColor: "text-violet-600 dark:text-violet-400",
      titleBg: "bg-violet-100 dark:bg-violet-950",
      titleText: "text-violet-800 dark:text-violet-200",
      icon: BeakerIcon,
    },
    info: {
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-400/20",
      iconBg: "bg-blue-100 dark:bg-blue-900",
      iconBorder: "border-blue-200 dark:border-blue-400/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      titleBg: "bg-blue-100 dark:bg-blue-950",
      titleText: "text-blue-800 dark:text-blue-200",
      icon: InformationCircleIcon,
    },
    warning: {
      bg: "bg-amber-50 dark:bg-amber-950/30",
      border: "border-amber-200 dark:border-amber-400/20",
      iconBg: "bg-amber-100 dark:bg-amber-900",
      iconBorder: "border-amber-200 dark:border-amber-400/20",
      iconColor: "text-amber-600 dark:text-amber-400",
      titleBg: "bg-amber-100 dark:bg-amber-950",
      titleText: "text-amber-800 dark:text-amber-200",
      icon: ExclamationTriangleIcon,
    },
    error: {
      bg: "bg-red-50 dark:bg-red-950/30",
      border: "border-red-200 dark:border-red-400/20",
      iconBg: "bg-red-100 dark:bg-red-900",
      iconBorder: "border-red-200 dark:border-red-400/20",
      iconColor: "text-red-600 dark:text-red-400",
      titleBg: "bg-red-100 dark:bg-red-950",
      titleText: "text-red-800 dark:text-red-200",
      icon: XMarkIcon,
    },
    objective: {
      bg: "bg-teal-50 dark:bg-teal-950/30",
      border: "border-teal-200 dark:border-teal-400/20",
      iconBg: "bg-teal-100 dark:bg-teal-900",
      iconBorder: "border-teal-200 dark:border-teal-400/20",
      iconColor: "text-teal-600 dark:text-teal-400",
      titleBg: "bg-teal-100 dark:bg-teal-950",
      titleText: "text-teal-800 dark:text-teal-200",
      icon: EyeIcon,
    },
    success: {
      bg: "bg-green-50 dark:bg-green-950/30",
      border: "border-green-200 dark:border-green-400/20",
      iconBg: "bg-green-100 dark:bg-green-900",
      iconBorder: "border-green-200 dark:border-green-400/20",
      iconColor: "text-green-600 dark:text-green-400",
      titleBg: "bg-green-100 dark:bg-green-950",
      titleText: "text-green-800 dark:text-green-200",
      icon: CheckIcon,
    },
  };

  const config = stateConfig[state];
  const Icon = config.icon;

  return (
    <div
      className={`!mt-12 pt-6 pb-4 px-8 ${config.bg} rounded-lg border ${config.border} relative`}
    >
      <div className="absolute -top-5 left-8 flex items-center">
        <div
          className={`${config.iconBg} p-2 rounded-full border ${config.iconBorder}`}
        >
          <Icon className={`w-5 h-5 ${config.iconColor}`} />
        </div>
        <span
          className={`text-lg font-medium ${config.titleText} px-4 py-0.5 rounded-md`}
        >
          {title}
        </span>
      </div>

      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
};

export default NotificationCard;
