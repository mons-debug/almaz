"use client";
import { useEffect, useState } from "react";
import { CheckCircle, X, AlertCircle, Info } from "lucide-react";

export interface ToastProps {
  id: string;
  type: "success" | "error" | "info" | "warning";
  title: string;
  message?: string;
  duration?: number;
  onRemove: (id: string) => void;
}

export default function Toast({
  id,
  type,
  title,
  message,
  duration = 5000,
  onRemove,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      handleRemove();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleRemove = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onRemove(id);
    }, 200);
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5" />;
      case "error":
        return <AlertCircle className="h-5 w-5" />;
      case "warning":
        return <AlertCircle className="h-5 w-5" />;
      case "info":
        return <Info className="h-5 w-5" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case "success":
        return "bg-success text-white border-success/20";
      case "error":
        return "bg-danger text-white border-danger/20";
      case "warning":
        return "bg-warning text-white border-warning/20";
      case "info":
        return "bg-primary text-white border-primary/20";
    }
  };

  return (
    <div
      className={`transform transition-all duration-200 ${
        isVisible && !isLeaving
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`mb-3 flex items-center gap-3 rounded-xl border-2 px-4 py-3 shadow-lg ${getStyles()}`}
      >
        <div className="shrink-0">{getIcon()}</div>
        <div className="flex-1">
          <p className="font-bold text-sm">{title}</p>
          {message && <p className="text-sm opacity-90">{message}</p>}
        </div>
        <button
          onClick={handleRemove}
          className="shrink-0 p-1 hover:bg-black/10 rounded-full transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function ToastContainer({ toasts }: { toasts: ToastProps[] }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}


