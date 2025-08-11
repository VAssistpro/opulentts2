import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Phone, MessageCircle, Calendar, Car } from 'lucide-react';
import { useHapticFeedback } from '../../hooks/useHapticFeedback';

interface FABAction {
  id: string;
  icon: React.ReactNode;
  label: string;
  action: () => void;
  color?: string;
}

interface FloatingActionButtonProps {
  actions?: FABAction[];
  className?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

const defaultActions: FABAction[] = [
  {
    id: 'call',
    icon: <Phone size={20} />,
    label: 'Call Now',
    action: () => window.open('tel:+1234567890'),
    color: 'bg-green-600'
  },
  {
    id: 'message',
    icon: <MessageCircle size={20} />,
    label: 'Message',
    action: () => window.open('sms:+1234567890'),
    color: 'bg-blue-600'
  },
  {
    id: 'book',
    icon: <Calendar size={20} />,
    label: 'Book Now',
    action: () => {},
    color: 'bg-gold'
  }
];

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  actions = defaultActions,
  className = '',
  position = 'bottom-right'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerHaptic = useHapticFeedback();

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    triggerHaptic(isOpen ? 'light' : 'medium');
  };

  const handleActionClick = (action: FABAction) => {
    triggerHaptic('success');
    action.action();
    setIsOpen(false);
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50 ${className}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 space-y-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.id}
                className="flex items-center space-x-3"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                  {action.label}
                </span>
                <motion.button
                  onClick={() => handleActionClick(action)}
                  className={`
                    ${action.color || 'bg-gold'} text-white rounded-full p-3
                    shadow-lg hover:shadow-xl transition-shadow
                  `}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  data-testid={`fab-action-${action.id}`}
                >
                  {action.icon}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={handleToggle}
        className="bg-gold text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        data-testid="main-fab-button"
      >
        <Plus size={24} />
      </motion.button>

      {/* Backdrop when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActionButton;