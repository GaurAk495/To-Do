import { useState } from "react";
import DatePicker from "react-datepicker";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";

export default function MyDatePicker({ date, setDate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 w-full px-3 py-2 text-sm border rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Calendar size={16} className="text-blue-500" />
        <span className="flex-1">
          {date ? format(new Date(date), "MMM dd, yyyy") : "Select date"}
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-1"
          >
            <DatePicker
              selected={date ? new Date(date) : null}
              onChange={(date) => {
                setDate(date);
                setIsOpen(false);
              }}
              inline
              minDate={new Date()}
              calendarClassName="shadow-xl border rounded-lg"
              wrapperClassName="shadow-lg"
              dateFormat="MMM dd, yyyy"
              showPopperArrow={false}
              customInput={null}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
